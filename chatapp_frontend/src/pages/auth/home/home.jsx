import React from "react";
import "./home.scss";
import Sidebar from "../../../component/sidebar/sidebar";
import ChatSection from "../../../component/chatSection/chatSection";

const Home = () => {
  return (
    <div className="w-full h-[100vh] grid grid-cols-12 parent_screen px-[6%] py-6">
      <div className=" col-span-4">
        <Sidebar />
      </div>
      <div className=" col-span-8">
        <ChatSection />
      </div>
    </div>
  );
};

export default Home;
