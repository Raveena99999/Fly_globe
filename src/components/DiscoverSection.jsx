import React from "react";
import "../style/DiscoverSection.css";

const categories = [
  "All", "Asian", "European", "Middle-East", "Beach Paradise",
  "Nature Retreats", "Romantic Escapes", "Cultural Immersion", "African", "American"
];

const destinations = [
  {
    id: 1,
    city: "ROME",
    price: "$500",
    img: "../src/assets/Image.png",
    className: "small first-col"
  },
  {
    id: 2,
    city: "ROME",
    price: "$500",
    img: "../src/assets/Image (1).png",
    className: "small first-col"
  },
  {
    id: 3,
    city: "ROME",
    price: "$500",
    img: "https://picsum.photos/id/1016/400/300",
    className: "small first-col"
  },
  {
    id: 4,
    city: "ROME",
    price: "$500",
    img: "../src/assets/Image (1).png",
    className: "large"
  },
  {
    id: 5,
    city: "ROME",
    price: "$500",
    img: "../src/assets/Image (2).png",
    className: "bottom"
  },
  {
    id: 6,
    city: "ROME",
    price: "$500",
    img: "../src/assets/Image.png",
    className: "bottom"
  }
];

export default function DiscoverSection() {
  return (
    <section className="discover-section">
      <div className="discover-left">
        <h4>— DISCOVER</h4>
        <p>More than 100 destinations waiting for you</p>
        <small>
          Explore our curated list of the best countries to visit in 2024 and
          discover incredible destinations waiting to be explored
        </small>
        <div className="category-buttons">
          {categories.map((cat, idx) => (
            <button key={idx}>{cat}</button>
          ))}
        </div>
      </div>
      <div className="discover-grid">
        {destinations.map((dest) => (
          <div key={dest.id} className={`destination-card ${dest.className}`}>
            <div className="image-box">
              <img src={dest.img} alt={dest.city} />
              <div className="city-name">{dest.city}</div>
              <div className="price-tag">fr {dest.price}*</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
