import Header from "@/componenets/Header";
import VideoCard from "@/componenets/VideoCard";
import React from "react";

const Page = () => {
  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library" />
      <h1>Welcome to loom clone.</h1>
      <VideoCard
        id="1"
        title="SnapChat Message"
        thumbnail="/assets/samples/thumbnail (1).png"
        createdAt={new Date("2022-03-25")}
        userImg="/assets/images/jason.png"
        username="Jason"
        views={10}
        visibility="public"
        duration={165}
      />
    </main>
  );
};

export default Page;
