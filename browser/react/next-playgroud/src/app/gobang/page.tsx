"use client";

import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";

const ROWS = 20
const COLS = 20
const CELL_SIZE = 35
const BOARD_SIZE = ROWS * CELL_SIZE

function Gobang() {
  const [board, setBoard] = useState([]);
  const [turn, setTurn] = useState("black");
  const [winner, setWinner] = useState("");
  const canvasRef = useRef(null);
  const socketRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d");
    // 绘制棋盘
    context.fillStyle = "#ffA";
    context.fillRect(0, 0, BOARD_SIZE, BOARD_SIZE);
    for (let i = 0; i <= ROWS; i++) {
      context.beginPath()
      context.moveTo(0 + CELL_SIZE / 2, i * CELL_SIZE - CELL_SIZE / 2 )
      context.lineTo(BOARD_SIZE - CELL_SIZE / 2, i * CELL_SIZE - CELL_SIZE / 2)
      context.stroke()
    }
    for (let j = 0; j <= COLS; j++) {
      context.beginPath()
      context.moveTo(j * CELL_SIZE - CELL_SIZE / 2 , 0 + CELL_SIZE / 2)
      context.lineTo(j * CELL_SIZE - CELL_SIZE / 2, BOARD_SIZE - CELL_SIZE / 2)
      context.stroke()
    }
    const newBoard = [];
    for (let i = 0; i < 19; i++) {
      newBoard.push([]);
      for (let j = 0; j < 19; j++) {
        newBoard[i].push("");
      }
    }
    setBoard(newBoard);
    // socketRef.current = io.connect("/");
    // socketRef.current.on("move", ({ row, col, color }) => {
    //   const newBoard = [...board];
    //   newBoard[row][col] = color;
    //   setBoard(newBoard);
    //   setTurn(turn === "black" ? "white" : "black");
    // });
    // socketRef.current.on("winner", ({ winner }) => {
    //   setWinner(winner);
    // });
  }, []);
  const handleClick = (event) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const row = Math.floor(y / 35);
    const col = Math.floor(x / 35);
    if (board[row][col] !== "") {
      return;
    }
    const color = turn === "black" ? "#000" : "#ffF";
    context.beginPath();
    context.arc(col * 35 + 17.5, row * 35 + 17.5, 14, 0, 2 * Math.PI);
    // var gradient = context.createRadialGradient(col + 35 / 4, row - 35 / 4, 0, col, row, 35);
    // gradient.addColorStop(0, color);
    // gradient.addColorStop(1, "#ddd");
    // context.fillStyle = gradient;
    context.fillStyle = color;
    context.fill();
    context.closePath();
    const newBoard = [...board];
    newBoard[row][col] = color;
    setBoard(newBoard);
    setTurn(turn === "black" ? "white" : "black");
    // socketRef.current.emit("move", { row, col, color });
  };
  return (
    <div>
      <Head>
        <title>Gobang Game</title>
      </Head>
      <h1>
        <div >
          <a className="
          text-[#fff]
           py-3 px-4 
           inline-block 
           bg-opacity-50
           bg-[#000]
           hover:text-[#000] 
           hover:bg-[#fff]
           transition-colors
           ease-in	
           rounded-full
           ">Gobang Game</a>
        </div>
      </h1>
      <canvas
        ref={canvasRef}
        width={BOARD_SIZE}
        height={BOARD_SIZE}
        onClick={handleClick}
        style={{ border: "1px solid #000" }}
      />
      <p>{winner !== "" ? `${winner} wins!` : `${turn}'s turn`}</p>
    </div>
  );
}
export default Gobang;