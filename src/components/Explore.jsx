import React from "react";
import "../style/Explore.css";
import img1 from "../assets/Ellipse 112.png";
import img2 from "../assets/Ellipse 113.png";
import img3 from "../assets/Ellipse 114.png";
import img4 from "../assets/Ellipse 115.png";
import img5 from "../assets/Ellipse 116.png";

export default function Explore() {
    
  return (
    <div>
        <h1 style={{textAlign:"center"}}>__Explore Nearby</h1>
      <div style={{ padding:"30px"}}>
        <img style={{display:"inline-block",marginLeft:"70px"}} src={img1} alt="" />
        <img style={{display:"inline-block", marginLeft:"50px"}} src={img2} alt="" />
        <img style={{display:"inline-block", marginLeft:"50px"}} src={img3} alt="" />
        <img style={{display:"inline-block", marginLeft:"50px"}} src={img4} alt="" />
        <img style={{display:"inline-block", marginLeft:"50px"}} src={img5} alt="" />
      </div>
    </div>
  );
}
