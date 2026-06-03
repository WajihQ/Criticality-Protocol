import './style.css'
import { map } from './maps/chapter1/stage1-2';
import type { TileType } from './types';

const renderBoard = function(board: TileType[][]) {
    let canvas = document.getElementById("game-board") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");
    const numRows = board.length;
    const numCols = board[0].length;
    const gap = 5;
    const emptyColor = "rgba(136, 157, 191, 0.2)"
    const floorColor = "#7da5ba";
    const wallColor = "#004fcf";
    let tileSize = Math.min((canvas.width - (numCols - 1) * gap) / numCols, (canvas.height - (numRows - 1) * gap) / numRows);

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            ctx?.beginPath();
            switch (board[i][j]) {
                case "empty":
                    ctx!.fillStyle = emptyColor;
                    break;
                case "floor":
                    ctx!.fillStyle = floorColor;
                    break;
                case "wall":
                    ctx!.fillStyle = wallColor;
                    break;
            }

            ctx!.fillRect(j * (tileSize + gap), i * (tileSize + gap), tileSize, tileSize);
            ctx!.strokeRect(j * (tileSize + gap), i * (tileSize + gap), tileSize, tileSize);
            ctx!.closePath();
        }
    }
};

renderBoard(map);