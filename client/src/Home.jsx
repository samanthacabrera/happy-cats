import React from "react";
import CatsList from "./CatList";

function Home() {
    return (
        <section className="flex flex-col justify-center items-center w-screen">
            <div className="w-1/2 m-24">
                <h1 className="text-8xl font-bold text-center text-blue-500 mb-12">Happy Cats</h1>
                <p>Here at Happy Cats, we understand that our whiskered friends have their own unique ways of making connections. Just like us, they appreciate taking things slowly, savoring each moment as they get to know their new pals. Whether it's finding the ideal playdate companion or making friends with fellow cat enthusiasts, our platform is designed with their comfort and happiness in mind.</p>
            </div>
            <CatsList/>
        </section>
    )
}

export default Home;