"use client";

import { useState } from "react";

import Content from "./components/Content";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPane, setCurrentPane] = useState("content");

  return (
    <main className="flex min-h-screen min-w-[320px] items-center justify-center sm:p-4">
      <div className="flex h-[90vh] w-[375px] flex-col items-center overflow-y-auto bg-white">
        <Navbar
          onMenuClick={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
          setCurrentPane={setCurrentPane}
        />
        {isMenuOpen ? (
          <Menu setCurrentPane={setCurrentPane} setIsMenuOpen={setIsMenuOpen} />
        ) : (
          <Content currentPane={currentPane} setCurrentPane={setCurrentPane} />
        )}
      </div>
    </main>
  );
}
