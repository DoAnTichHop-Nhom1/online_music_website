import React from "react";
import HomeSong from "./HomeSong";
import Header from "./Header";

const Home = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
      <Header />
      <HomeSong />
    </div>
  );
};

export default Home;
