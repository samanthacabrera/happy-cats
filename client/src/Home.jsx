import React from "react";
import CatsList from "./CatList";
import Approach from "./Approach";
import Reviews from "./Reviews";

function Home() {
  return (
    <>
      <section
        className="relative flex flex-col justify-center items-center h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1641838455964-b3de81bf1db2?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 w-3/4 md:w-1/2 text-white text-center mb-8">
          <h1 className="text-8xl font-bold mb-8">Happy Cats</h1>
          <p className="text-lg leading-relaxed">
            Here at Happy Cats, we understand that our whiskered friends have their own unique ways of making connections. Our platform is designed with their comfort and happiness in mind.
          </p>
            <CatsList />
        </div>
      </section>
      <div className="my-16">
        <Approach />
      </div>
        <div className="my-16">
        <Reviews/>
      </div>
    </>
  );
}

export default Home;
