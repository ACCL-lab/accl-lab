// Footer.jsx
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer({ handleOpen }) {
  return (
    <footer className="bg-dark text-white pt-4 pb-3" id="footer">
      <div className="container">
        <div className="row">
          {/* Address */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Address</h5>
            <p>
              Room No - 401 A <br />
              Department of CSE <br />
              Engineering Building-1<br />
              IIT BHILAI, 
              Kutelabhata, Durg, Chhattisgarh - 491001
            </p>
            <p>
              <FaEnvelope className="me-2 text-danger" />
              <span>vishwesh@iitbhilai.ac.in</span><br />
              <FaPhoneAlt className="me-2 text-danger mt-2" />
              // <span>+91-771-1234567</span>
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#about-section" className="text-white text-decoration-none">About</a></li>
              <li>
                <button
                  onClick={handleOpen}
                  className="btn btn-link p-0 m-0 text-white text-decoration-none"
                  style={{ textAlign: "left" }}
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="https://www.iitbhilai.ac.in/" target="_blank" rel="noreferrer" className="text-white text-decoration-none">
                  Institute Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="col-md-4">
            <h5>Location</h5>
            <div className="ratio ratio-16x9 rounded shadow-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDk89J4FSunMF33ruMVWJaJht_Ro0kvoXs&q=IIT+BHILAI"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IIT Bhilai Map"
              ></iframe>
            </div>
          </div>
        </div>

        <hr className="bg-light mt-4" />

        <div className="d-md-flex justify-content-between align-items-center text-center mt-2">
          {/* Left: Copyright */}
          <p className="mb-1 small mb-md-0">
            © 2025 <strong>ACCL Lab</strong>. All Rights Reserved.
          </p>

          {/* Right: Developed & Maintained Info */}
          <p className="mb-0 small">
            Site Developed by: 
          <a
            href="https://www.linkedin.com/in/a-vishal-899975291/" 
            className="text-white text-decoration-underline mx-1"
            target="_blank" rel="noreferrer"
          >
            A Vishal
          </a>
            &  
          <a
            href="https://www.linkedin.com/in/kishan-tamboli-ab5b151a7" 
            className="text-white text-decoration-underline mx-1"
            target="_blank" rel="noreferrer"
          >
            Kishan
          </a>
          | Maintained by ACCL Lab Team
          </p>
        </div>

      </div>
    </footer>
  );
}
