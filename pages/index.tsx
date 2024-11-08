// pages/index.tsx
import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to My Portfolio</h1>
        <p>This is where I showcase my projects and skills.</p>
      </main>
    </div>
  );
};

export default Home;
