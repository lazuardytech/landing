"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_INTERVAL = 250;
const GRID_HEIGHT = 12;
const GRID_WIDTH = 14;
const BLOCK_CHAR = "■";
const EMPTY_CHAR = "∙";

const TETROMINOES = [
	{
		name: "I",
		cells: [
			[0, 0],
			[0, 1],
			[0, 2],
			[0, 3],
		],
	},
	{
		name: "O",
		cells: [
			[0, 0],
			[0, 1],
			[1, 0],
			[1, 1],
		],
	},
	{
		name: "T",
		cells: [
			[0, 0],
			[0, 1],
			[0, 2],
			[1, 1],
		],
	},
];

function rotate(cells) {
	return cells.map(([r, c]) => [c, -r]);
}

function getRotations(cells) {
	const rotations = [];
	let current = cells;
	for (let i = 0; i < 4; i++) {
		const minRow = Math.min(...current.map(([r]) => r));
		const minCol = Math.min(...current.map(([, c]) => c));
		const normalized = current.map(([r, c]) => [r - minRow, c - minCol]);
		const exists = rotations.some(
			(rot) =>
				rot.length === normalized.length &&
				rot.every((cell) =>
					normalized.some(([r, c]) => r === cell[0] && c === cell[1]),
				),
		);
		if (!exists) rotations.push(normalized);
		current = rotate(current);
	}
	return rotations;
}

function createGrid() {
	return Array.from({ length: GRID_HEIGHT }, () =>
		Array(GRID_WIDTH).fill(EMPTY_CHAR),
	);
}

function checkCollision(grid, cells, pos) {
	for (const [r, c] of cells) {
		const newRow = pos.y + r;
		const newCol = pos.x + c;
		if (newCol < 0 || newCol >= GRID_WIDTH || newRow >= GRID_HEIGHT)
			return true;
		if (newRow >= 0 && grid[newRow][newCol] === BLOCK_CHAR) return true;
	}
	return false;
}

function mergePiece(grid, cells, pos) {
	const newGrid = grid.map((row) => row.slice());
	for (const [r, c] of cells) {
		const newRow = pos.y + r;
		const newCol = pos.x + c;
		if (
			newRow >= 0 &&
			newRow < GRID_HEIGHT &&
			newCol >= 0 &&
			newCol < GRID_WIDTH
		) {
			newGrid[newRow][newCol] = BLOCK_CHAR;
		}
	}
	return newGrid;
}

function clearLines(grid) {
	const newGrid = grid.filter((row) => row.some((cell) => cell === EMPTY_CHAR));
	const cleared = GRID_HEIGHT - newGrid.length;
	for (let i = 0; i < cleared; i++) {
		newGrid.unshift(Array(GRID_WIDTH).fill(EMPTY_CHAR));
	}
	return newGrid;
}

function simulateDrop(grid, cells, startPos) {
	const pos = { ...startPos };
	while (!checkCollision(grid, cells, { x: pos.x, y: pos.y + 1 })) {
		pos.y++;
	}
	return pos;
}

function calculateLandingHeight(pos, cells) {
	const landingRows = cells.map(([r]) => pos.y + r);
	return Math.max(...landingRows);
}

function bestMove(grid, tetromino) {
	const rotations = getRotations(tetromino.cells);
	let best = null;
	for (let rIndex = 0; rIndex < rotations.length; rIndex++) {
		const shape = rotations[rIndex];
		const shapeWidth = Math.max(...shape.map(([, c]) => c)) + 1;
		for (let x = 0; x <= GRID_WIDTH - shapeWidth; x++) {
			const startPos = { x, y: -Math.min(...shape.map(([r]) => r)) };
			if (checkCollision(grid, shape, startPos)) continue;
			const dropPos = simulateDrop(grid, shape, startPos);
			const landingHeight = calculateLandingHeight(dropPos, shape);
			if (best === null || landingHeight > best.landingHeight) {
				best = { x, rotationIndex: rIndex, landingHeight };
			}
		}
	}
	if (best === null) {
		return { x: Math.floor(GRID_WIDTH / 2), rotationIndex: 0 };
	}
	return best;
}

export default function Tetris() {
	const [grid, setGrid] = useState(createGrid());
	const [activePiece, setActivePiece] = useState(null);
	const [activeCells, setActiveCells] = useState(null);
	const [activePos, setActivePos] = useState({ x: 0, y: 0 });
	const [gameOver, setGameOver] = useState(false);
	const intervalRef = useRef(null);

	useEffect(() => {
		if (!activePiece && !gameOver) {
			const piece = TETROMINOES[Math.floor(Math.random() * TETROMINOES.length)];
			const move = bestMove(grid, piece);
			const rotations = getRotations(piece.cells);
			const shape = rotations[move.rotationIndex];
			const startPos = { x: move.x, y: -Math.min(...shape.map(([r]) => r)) };
			if (checkCollision(grid, shape, startPos)) {
				setGameOver(true);
				clearInterval(intervalRef.current);
				return;
			}
			setActivePiece({ tetromino: piece, rotationIndex: move.rotationIndex });
			setActiveCells(shape);
			setActivePos(startPos);
		}
	}, [activePiece, grid, gameOver]);

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			if (gameOver) return;
			if (activePiece && activeCells) {
				const newPos = { x: activePos.x, y: activePos.y + 1 };
				if (!checkCollision(grid, activeCells, newPos)) {
					setActivePos(newPos);
				} else {
					const newGrid = clearLines(mergePiece(grid, activeCells, activePos));
					setGrid(newGrid);
					setActivePiece(null);
					setActiveCells(null);
					setActivePos({ x: 0, y: 0 });
					const filled = newGrid.flat().filter((c) => c === BLOCK_CHAR).length;
					if (filled === 0) {
						setGameOver(true);
						clearInterval(intervalRef.current);
					}
				}
			}
		}, FRAME_INTERVAL);
		return () => clearInterval(intervalRef.current);
	}, [activePiece, activeCells, activePos, grid, gameOver]);

	function resetGame() {
		setGrid(createGrid());
		setActivePiece(null);
		setActiveCells(null);
		setActivePos({ x: 0, y: 0 });
		setGameOver(false);
		clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
			if (gameOver) return;
			if (activePiece && activeCells) {
				const newPos = { x: activePos.x, y: activePos.y + 1 };
				if (!checkCollision(grid, activeCells, newPos)) {
					setActivePos(newPos);
				} else {
					const newGrid = clearLines(mergePiece(grid, activeCells, activePos));
					setGrid(newGrid);
					setActivePiece(null);
					setActiveCells(null);
					setActivePos({ x: 0, y: 0 });
					const filled = newGrid.flat().filter((c) => c === BLOCK_CHAR).length;
					if (filled === 0) {
						setGameOver(true);
						clearInterval(intervalRef.current);
					}
				}
			}
		}, FRAME_INTERVAL);
	}

	useEffect(() => {
		if (gameOver) {
			const timeout = setTimeout(() => {
				resetGame();
			}, 2000);
			return () => clearTimeout(timeout);
		}
	});

	const displayGrid = grid.map((row) => row.slice());
	if (activePiece && activeCells) {
		for (const [r, c] of activeCells) {
			const row = activePos.y + r;
			const col = activePos.x + c;
			if (row >= 0 && row < GRID_HEIGHT && col >= 0 && col < GRID_WIDTH) {
				displayGrid[row][col] = BLOCK_CHAR;
			}
		}
	}

	return (
		<pre className="text-lg select-none">
			{displayGrid.map((row) => row.join(" ")).join("\n")}
		</pre>
	);
}
