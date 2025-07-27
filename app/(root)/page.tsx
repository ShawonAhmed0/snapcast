import Header from "@/componenets/Header";
import VideoCard from "@/componenets/VideoCard";
import { dummyCards } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library" />
      <h1>Welcome to loom clone.</h1>
      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard key={card.id} {...card} />
        ))}

      </section>

    </main>
  );
};

export default Page;
