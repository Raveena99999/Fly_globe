import React from "react";
import "../style/BestOffers.css";

const offers = [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/917034246/photo/young-tourist-woman-reading-paris-city-map-against-tour-eiffel.webp?a=1&b=1&s=612x612&w=0&k=20&c=sOTYPS2VUIAqDxEAsKfGwvVu2N7UayeAU3_mVSOAd1g=",
    lines: [
      "SAVE UP TO",
      "20%",
      "on your next flight with",
      "this exclusive voucher"
    ]
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/917034246/photo/young-tourist-woman-reading-paris-city-map-against-tour-eiffel.webp?a=1&b=1&s=612x612&w=0&k=20&c=sOTYPS2VUIAqDxEAsKfGwvVu2N7UayeAU3_mVSOAd1g=",
    lines: [
      "SAVE UP TO",
      "20%",
      "on your next flight with",
      "this exclusive voucher"
    ]
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/917034246/photo/young-tourist-woman-reading-paris-city-map-against-tour-eiffel.webp?a=1&b=1&s=612x612&w=0&k=20&c=sOTYPS2VUIAqDxEAsKfGwvVu2N7UayeAU3_mVSOAd1g=",
    lines: [
      "SAVE UP TO",
      "20%",
      "on your next flight with",
      "this exclusive voucher"
    ]
  },
  {
    id: 4,
    img: "https://media.istockphoto.com/id/917034246/photo/young-tourist-woman-reading-paris-city-map-against-tour-eiffel.webp?a=1&b=1&s=612x612&w=0&k=20&c=sOTYPS2VUIAqDxEAsKfGwvVu2N7UayeAU3_mVSOAd1g=",
    lines: [
      "SAVE UP TO",
      "20%",
      "on your next flight with",
      "this exclusive voucher"
    ]
  }
];

export default function BestOffers() {
  return (
    <section className="best-offers">
      <h3>— BEST OFFERS</h3>
      <p>We’re excited to offer you an exclusive voucher to help you save on your next adventure.</p>
      <div className="offers-container">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <div className="image-wrapper">
              <img src={offer.img} alt="offer" />
              <div className="offer-text">
                {offer.lines.map((line, index) => (
                  <div key={index} className={`line line-${index}`}>{line}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
