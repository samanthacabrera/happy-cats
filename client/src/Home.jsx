import React from "react";
import CatsList from "./CatList";

function Home() {
    return (
        <section className="flex flex-col justify-center items-center w-screen">
            <div>
                <h1 className="text-9xl font-bold text-blue-500 py-12">Happy Cats</h1>
            </div>
            <CatsList/>
        </section>
    )
}

export default Home;