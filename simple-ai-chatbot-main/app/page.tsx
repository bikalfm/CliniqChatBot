"use client";

import Image from "next/image";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-[#040d17] text-white">
      <nav className="flex justify-between items-center p-4">
      </nav>
      <center> <h3> FM.Ai </h3> </center>
      <div className="flex-grow overflow-hidden">
        <Chat />
      </div>
    </main>
  );
}
