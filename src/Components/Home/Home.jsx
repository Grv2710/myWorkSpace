import React from "react";
import { useElementWidth } from "../../Utility/DivRef";
import "../../App.css"

const Home = () => {
    const [width, widthRef] = useElementWidth("width");
    const [height, heightRef] = useElementWidth("height");
  return (
    <div ref={widthRef} className="row">
    
        <h1 className="col-12 d-flex justify-content-center align-items-center" ref={heightRef}>{width} X {height}</h1>
      
    </div>
  );
};

export default Home;
