"use client";

import { useEffect, useState } from "react";

const FRAME_INTERVAL = 250;
const GRID_HEIGHT = 12;
const GRID_WIDTH = 14;
const ALIEN_COUNT = 6;
const ALIEN_CHAR = "▽";
const ALIEN_GUN_CHAR = "*";
const SPACE_CHAR = "▲";
const SPACE_GUN_CHAR = "|";
const EMPTY_CHAR = "∙";
const ALIEN_SHOOT_PROBABILITY = 0.03;

function createEmptyGrid() {
	const grid = [];
	for (let row = 0; row < GRID_HEIGHT; row++) {
		const newRow = [];
		for (let col = 0; col < GRID_WIDTH; col++) {
			newRow.push(EMPTY_CHAR);
		}
		grid.push(newRow);
	}
	return grid;
}

function initGame() {
	const aliens = [];
	// Initialize aliens in the first two rows, leaving a margin on each side.
	for (let row = 0; row < 2; row++) {
		for (let col = 2; col < GRID_WIDTH - 2; col++) {
			if (aliens.length < ALIEN_COUNT) {
				aliens.push({ row, col });
			}
		}
	}
	const spaceship = {
		row: GRID_HEIGHT - 1,
		col: Math.floor(GRID_WIDTH / 2),
	};
	const bullets = []; // Contains objects { row, col, direction: "up" | "down" }
	return {
		aliens,
		spaceship,
		bullets,
		alienDirection: 1, // 1 for right, -1 for left
		gameOver: false,
		win: false,
	};
}

export default function SpaceInvaders() {
	const [gameState, setGameState] = useState(initGame());
	const [grid, setGrid] = useState(createEmptyGrid());

	function renderGrid(state) {
		const newGrid = createEmptyGrid();
		// Place aliens
		state.aliens.forEach((alien) => {
			if (
				alien.row >= 0 &&
				alien.row < GRID_HEIGHT &&
				alien.col >= 0 &&
				alien.col < GRID_WIDTH
			) {
				newGrid[alien.row][alien.col] = ALIEN_CHAR;
			}
		});
		// Place spaceship
		const s = state.spaceship;
		if (s.row >= 0 && s.row < GRID_HEIGHT && s.col >= 0 && s.col < GRID_WIDTH) {
			newGrid[s.row][s.col] = SPACE_CHAR;
		}
		// Place bullets
		state.bullets.forEach((bullet) => {
			if (
				bullet.row >= 0 &&
				bullet.row < GRID_HEIGHT &&
				bullet.col >= 0 &&
				bullet.col < GRID_WIDTH
			) {
				newGrid[bullet.row][bullet.col] =
					bullet.direction === "up" ? SPACE_GUN_CHAR : ALIEN_GUN_CHAR;
			}
		});
		return newGrid;
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setGameState((prev) => {
				if (prev.gameOver) return prev; // When game is over, pause updates.
				const state = { ...prev };
				// Move bullets
				state.bullets = state.bullets
					.map((bullet) => ({
						...bullet,
						row: bullet.row + (bullet.direction === "up" ? -1 : 1),
					}))
					.filter((bullet) => bullet.row >= 0 && bullet.row < GRID_HEIGHT);

				// Check collisions between spaceship bullets and aliens,
				// and alien bullets with the spaceship.
				state.bullets = state.bullets.filter((bullet) => {
					if (bullet.direction === "up") {
						const hitAlienIndex = state.aliens.findIndex(
							(alien) => alien.row === bullet.row && alien.col === bullet.col,
						);
						if (hitAlienIndex >= 0) {
							state.aliens.splice(hitAlienIndex, 1);
							return false;
						}
					} else {
						if (
							state.spaceship.row === bullet.row &&
							state.spaceship.col === bullet.col
						) {
							state.gameOver = true;
							state.win = false;
							return false;
						}
					}
					return true;
				});

				// Move aliens horizontally.
				let changeDirection = false;
				state.aliens.forEach((alien) => {
					const newCol = alien.col + state.alienDirection;
					if (newCol < 0 || newCol >= GRID_WIDTH) {
						changeDirection = true;
					}
				});
				if (changeDirection) {
					state.aliens = state.aliens.map((alien) => ({
						...alien,
						row: alien.row + 1,
					}));
					state.alienDirection = -state.alienDirection;
				} else {
					state.aliens = state.aliens.map((alien) => ({
						...alien,
						col: alien.col + state.alienDirection,
					}));
				}

				// Aliens shoot downward randomly.
				state.aliens.forEach((alien) => {
					if (Math.random() < ALIEN_SHOOT_PROBABILITY) {
						state.bullets.push({
							row: alien.row + 1,
							col: alien.col,
							direction: "down",
						});
					}
				});

				// Check if any alien has reached the spaceship's row.
				if (state.aliens.some((alien) => alien.row >= state.spaceship.row)) {
					state.gameOver = true;
					state.win = false;
				}

				// Auto-fire spaceship bullet if no active bullet is present.
				if (!state.bullets.some((bullet) => bullet.direction === "up")) {
					state.bullets.push({
						row: state.spaceship.row - 1,
						col: state.spaceship.col,
						direction: "up",
					});
				}

				// Simple AI: move spaceship toward the alien closest to the bottom.
				if (state.aliens.length > 0) {
					const target = state.aliens.reduce((prev, curr) =>
						curr.row > prev.row ? curr : prev,
					);
					if (
						target.col > state.spaceship.col &&
						state.spaceship.col < GRID_WIDTH - 1
					) {
						state.spaceship.col += 1;
					} else if (
						target.col < state.spaceship.col &&
						state.spaceship.col > 0
					) {
						state.spaceship.col -= 1;
					}
				}

				// Check win condition: no aliens left.
				if (state.aliens.length === 0) {
					state.gameOver = true;
					state.win = true;
				}
				return state;
			});
		}, FRAME_INTERVAL);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		setGrid(renderGrid(gameState));
		if (gameState.gameOver) {
			setTimeout(() => {
				setGameState(initGame());
			}, 1000);
		}
	}, [gameState]);

	return (
		<pre className="text-lg">{grid.map((row) => row.join(" ")).join("\n")}</pre>
	);
}
