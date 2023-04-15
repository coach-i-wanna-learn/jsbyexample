"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import DragTrans from './components/drag-trans'

const items = [
  { id: 1, title: "Card 1", content: "Content 1", subtitle: "subtitle  xxxx" },
  { id: 2, title: "Card 2", content: "Content 2", subtitle: "subtitle  xxxx" },
  { id: 3, title: "Card 3", content: "Content 3", subtitle: "subtitle  xxxx" },
];

function App() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="App px-2">

      <DragTrans/>
      <div className="w-full">
        <div className="w-full px-4 bg-[linear-gradient(135deg,#f08,#d0e)]">
          <div className="flex items-center justify-center h-[200px]">
            <div >
              <motion.div
                className="w-[150px] h-[150px] bg-white rounded-[30px] "
                initial={{ scale: 0 }}
                animate={{ rotate: 180, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between text-white text-2xl pb-8">
              <span className="">Animation</span>
              <div>
                <a href="">
                  <svg className="w-[15px] h-[15px]">
                    <path d="M13.2 4.654V2a.7.7 0 111.4 0v5a.7.7 0 01-.7.7h-5a.7.7 0 110-1.4h3.573a4.845 4.845 0 00-4.53-3.1C5.266 3.2 3.1 5.35 3.1 8s2.167 4.8 4.842 4.8a4.849 4.849 0 003.426-1.408.7.7 0 01.986.994A6.244 6.244 0 017.942 14.2C4.496 14.2 1.7 11.426 1.7 8s2.796-6.2 6.242-6.2A6.261 6.261 0 0113.2 4.654z" fill="white"></path>
                  </svg>
                </a>
                <a href=""></a>
              </div>
            </div>
        </div>
      </div>
      {items.map((item) => (
        <motion.div
          key={item.id}
          layout
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
            margin: "10px",
            background: item.id === selectedId ? "#f0f0f0" : "white",
          }}
          onClick={() =>
            setSelectedId((prev) => (prev === item.id ? null : item.id))
          }
        >
          <motion.h1 layout>{item.title}</motion.h1>
          {item.id === selectedId && <motion.p layout>{item.content}</motion.p>}
        </motion.div>
      ))}

    </div>
  );
}

export default App;


