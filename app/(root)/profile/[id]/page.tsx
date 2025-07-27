import Header from "@/componenets/Header";
import React from "react";

const page = async ({ params }: ParamsWithSearch) => {
    const { id } = await params;
    return (
        <div className="wrapper page">
            <Header
                subHeader="shawwon@gmail.com"
                title="Shawon Ahmed"
                userImg="/assets/images/dummy.jpg"
            ></Header>
            <section className="video-grid">
                {dummyCards.map((card) => (
                    <VideoCard key={card.id} {...card} />
                ))}
            </section>
        </div>
    );
};

export default page;
