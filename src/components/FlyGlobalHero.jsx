import "../style/FlyGlobalHero.css";
import { FaPlaneDeparture, FaPlaneArrival, FaUser, FaCalendarAlt } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function FlyGlobeHero() {
  return (
    <div className="flyglobe-hero">
      {/* Navbar */}
      <nav className="hero-navbar">
        <h1>Fly Globe</h1>
        <ul>
          <li>Home</li>
          <li>First</li>
          <li>Business</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li className="lang-select">UK | ENG <FiChevronDown /></li>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero-content">
        {/* Left Text */}
        <div className="hero-left">
          <h2>
            UNLOCK EFFORTLESS TRAVEL WITH <br /> UNBEATABLE FLIGHT DEALS!
          </h2>
          <p>
            From Seamless Booking to Smooth Takeoff – We Take Care of Every Detail So You Can Enjoy the Journey!
          </p>
          <button>DISCOVER NOW</button>
        </div>

        {/* Right Form */}
        <div className="hero-form">
          <select>
            <option>Round trip</option>
            <option>One way</option>
          </select>

          <div className="input-group">
            <div className="input-half">
              <label>From</label>
              <div className="input-box">
                <FaPlaneDeparture style={{ marginRight: 8 }} />
                <span>Delhi (DEL)</span>
              </div>
            </div>
            <div className="input-half">
              <label>To</label>
              <div className="input-box">
                <FaPlaneArrival style={{ marginRight: 8 }} />
                <span>London (LHR)</span>
              </div>
            </div>
          </div>

          <div className="input-group">
            <div className="input-half">
              <label>Departure Date</label>
              <div className="input-box">
                <FaCalendarAlt style={{ marginRight: 8 }} />
                <span>Mar 20, 2025</span>
              </div>
            </div>
            <div className="input-half">
              <label>Return Date</label>
              <div className="input-box">
                <FaCalendarAlt style={{ marginRight: 8 }} />
                <span>Mar 12, 2024</span>
              </div>
            </div>
          </div>

          <div className="input-group">
            <div className="input-half">
              <label>Passenger</label>
              <div className="input-box">
                <FaUser style={{ marginRight: 8 }} />
                <span>1 Adult, 1 Child</span>
              </div>
            </div>
            <div className="input-half">
              <label>Seat Class</label>
              <div className="input-box">
                <span>Economy</span>
              </div>
            </div>
          </div>

          <div>
            <label>Select Airlines</label>
            <div className="input-box">
              <FaPlaneDeparture style={{ marginRight: 8 }} />
              <span>All Airlines</span>
            </div>
          </div>

          <div className="checkbox">
            <input type="checkbox" />
            <span>Direct Flights Only</span>
          </div>
        </div>
      </div>
    </div>
  );
}
