"use client";

import React, { useState, useEffect } from "react";

const FRAME_INTERVAL = 250;
const GRID_HEIGHT = 12;
const GRID_WIDTH = 14;
const SNAKE_LENGTH = 7;
const HEAD_CHAR = "■";
const SNAKE_CHAR = "□";
const APPLE_CHAR = "▲";
const EMPTY_CHAR = "∙";

function getRandomPosition(excludePositions) {
	let position;
	while (true) {
		position = {
			x: Math.floor(Math.random() * GRID_HEIGHT),
			y: Math.floor(Math.random() * GRID_WIDTH),
		};
		if (
			!excludePositions.some(
				(pos) => pos.x === position.x && pos.y === position.y,
			)
		) {
			return position;
		}
	}
}

function getDistance(a, b, max) {
	const diff = Math.abs(a - b);
	return Math.min(diff, max - diff);
}

function computeBestDirection(head, apple, snake) {
	// Define obstacles as snake segments except the tail (since the tail is removed each move)
	const obstacles = new Set(
		snake.slice(0, snake.length - 1).map((seg) => `${seg.x},${seg.y}`),
	);
	const directions = [
		{ x: 0, y: 1 },
		{ x: 1, y: 0 },
		{ x: 0, y: -1 },
		{ x: -1, y: 0 },
	];
	const gridWidth = GRID_HEIGHT;
	const gridHeight = GRID_WIDTH;

	// Attempt to find a valid path using BFS so that the snake doesn't hit a wall or its body
	const queue = [];
	const visited = Array.from({ length: gridWidth }, () =>
		Array(gridHeight).fill(false),
	);
	const predecessor = Array.from({ length: gridWidth }, () =>
		Array(gridHeight).fill(null),
	);

	queue.push(head);
	visited[head.x][head.y] = true;
	let found = false;

	while (queue.length > 0 && !found) {
		const current = queue.shift();
		for (const dir of directions) {
			const nx = current.x + dir.x;
			const ny = current.y + dir.y;
			// Check walls: if out of grid boundaries, skip
			if (nx < 0 || nx >= gridWidth || ny < 0 || ny >= gridHeight) continue;
			if (visited[nx][ny]) continue;
			// Skip if the cell is part of the snake's body (except tail)
			if (obstacles.has(`${nx},${ny}`)) continue;
			visited[nx][ny] = true;
			predecessor[nx][ny] = current;
			if (nx === apple.x && ny === apple.y) {
				found = true;
				break;
			}
			queue.push({ x: nx, y: ny });
		}
	}

	if (found) {
		// Reconstruct path from apple back to head
		const path = [];
		let current = apple;
		while (current.x !== head.x || current.y !== head.y) {
			path.push(current);
			current = predecessor[current.x][current.y];
		}
		path.reverse(); // path[0] is the next move from the head
		const nextMove = path[0];
		return { x: nextMove.x - head.x, y: nextMove.y - head.y };
	}

	// Fallback if BFS did not find a path: choose a candidate move that is valid and minimizes distance to the apple.
	let bestDir = null;
	let bestScore = Number.POSITIVE_INFINITY;
	for (const dir of directions) {
		const nx = head.x + dir.x;
		const ny = head.y + dir.y;
		if (nx < 0 || nx >= gridWidth || ny < 0 || ny >= gridHeight) continue; // hit a wall
		if (obstacles.has(`${nx},${ny}`)) continue; // would collide with body
		const score =
			getDistance(nx, apple.x, gridWidth) +
			getDistance(ny, apple.y, gridHeight);
		if (score < bestScore) {
			bestScore = score;
			bestDir = dir;
		}
	}
	if (bestDir === null) {
		// If still no valid move found, pick the first move that stays within bounds.
		for (const dir of directions) {
			const nx = head.x + dir.x;
			const ny = head.y + dir.y;
			if (nx >= 0 && nx < gridWidth && ny >= 0 && ny < gridHeight) {
				bestDir = dir;
				break;
			}
		}
	}
	return bestDir || { x: 0, y: 0 };
}

export default function Snake() {
	// Initialize snake with a total of SNAKE_LENGTH segments (head + tail)
	const initialSnake = Array.from({ length: SNAKE_LENGTH }, (_, i) => ({
		x: 4,
		y: SNAKE_LENGTH - 1 - i,
	}));
	const [snake, setSnake] = useState(initialSnake);
	const [direction, setDirection] = useState({ x: 0, y: 1 });
	// Ensure apple doesn't spawn on any part of the snake
	const [apple, setApple] = useState(getRandomPosition(snake));
	const [grid, setGrid] = useState([]);

	useEffect(() => {
		const moveInterval = setInterval(() => {
			setSnake((prevSnake) => {
				const head = prevSnake[0];
				const newDirection = computeBestDirection(head, apple, prevSnake);
				setDirection(newDirection);
				const newHead = {
					x: head.x + newDirection.x,
					y: head.y + newDirection.y,
				};

				// Check for collisions with walls
				if (
					newHead.x < 0 ||
					newHead.x >= GRID_HEIGHT ||
					newHead.y < 0 ||
					newHead.y >= GRID_WIDTH
				) {
					// If newHead would hit the wall, do not move (or you could handle game over)
					return prevSnake;
				}
				// Check for collisions with the snake's body (exclude tail because it will be removed)
				const bodyWithoutTail = prevSnake.slice(0, prevSnake.length - 1);
				if (
					bodyWithoutTail.some(
						(seg) => seg.x === newHead.x && seg.y === newHead.y,
					)
				) {
					// If newHead would hit its own body, do not move (or handle game over)
					return prevSnake;
				}

				// Create new snake with new head at the beginning
				const newSnake = [newHead, ...prevSnake];

				// If apple is eaten, generate a new apple (snake remains the same length)
				if (newHead.x === apple.x && newHead.y === apple.y) {
					setApple(getRandomPosition(newSnake));
				}
				// Maintain constant snake length by removing the tail always
				newSnake.pop();
				return newSnake;
			});
		}, FRAME_INTERVAL);

		return () => clearInterval(moveInterval);
	}, [apple]);

	// Update grid representation whenever snake or apple change
	useEffect(() => {
		const newGrid = Array.from({ length: GRID_HEIGHT }, () =>
			Array(GRID_WIDTH).fill(EMPTY_CHAR),
		);

		// Place the apple on the grid
		newGrid[apple.x][apple.y] = APPLE_CHAR;

		// Place the snake on the grid, with the head represented by HEAD_CHAR
		snake.forEach((segment, index) => {
			if (index === 0) {
				newGrid[segment.x][segment.y] = HEAD_CHAR;
			} else {
				newGrid[segment.x][segment.y] = SNAKE_CHAR;
			}
		});

		setGrid(newGrid);
	}, [snake, apple]);

	return (
		<pre className="text-lg select-none">
			{grid.map((row) => row.join(" ")).join("\n")}
		</pre>
	);
}
