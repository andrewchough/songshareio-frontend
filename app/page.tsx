"use client";

import { useState } from "react";

import Content from "./components/Content";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPane, setCurrentPane] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <main className="flex min-h-screen min-w-[320px] items-center justify-center">
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <div className="h-full w-[375px]">
          <div className="flex h-[90vh] flex-col items-center overflow-y-auto bg-white">
            <Navbar
              onMenuClick={setIsMenuOpen}
              isMenuOpen={isMenuOpen}
              setCurrentPane={setCurrentPane}
            />
            {isMenuOpen ? (
              <Menu
                setCurrentPane={setCurrentPane}
                setIsMenuOpen={setIsMenuOpen}
              />
            ) : (
              <Content
                currentPane={currentPane}
                setCurrentPane={setCurrentPane}
              />
            )}
          </div>
          <Footer
            setCurrentPane={setCurrentPane}
            setIsMenuOpen={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            currentPane={currentPane}
          />
        </div>
      )}
    </main>
  );
}
