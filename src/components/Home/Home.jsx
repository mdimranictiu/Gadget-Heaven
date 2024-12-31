import React from "react";
import Banner from "../Banner/Banner";
import ExploreGadgets from "../ExploreGadgets/ExploreGadgets";

const Home = () => {
    document.title="Home"

  return (
    <div className="">
      <Banner></Banner>
      <ExploreGadgets></ExploreGadgets>
    </div>
  );
};

export default Home;
