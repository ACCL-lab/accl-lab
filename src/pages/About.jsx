import React from 'react';
import labImage from '../assets/images/labfinal1.png';

const About = () => {
  return (
    <>
      <div className="row align-items-center gx-5" id="about-section">
        {/* Left Text Column */}
        <div className="col-lg-6 mb-4 pe-md-5" data-aos="fade-right">
          <h2 className="mb-3 page-header">About Our Lab</h2>
          <p>
            The <span className="fw-semibold">Accelerated Computing Lab (ACCL)</span> is a premier research hub dedicated to advancing the frontiers of
            <span className="fw-semibold"> high-performance computing, graph analytics, machine learning, deep learning</span>, and
            <span className="fw-semibold"> GPU architecture optimization</span>. We strive to solve large-scale, real-world problems by building intelligent, scalable, and efficient systems for next-generation computing.
          </p>

          <h4 className="mt-4">Our Mission</h4>
          <p>
            To empower the computing community by delivering <span className="fw-semibold">high-performance, resource-efficient</span> solutions to complex computational challenges.
          </p>

          <h4>Our Vision</h4>
          <p>
            To emerge as a <span className="fw-semibold">globally recognized center</span> for excellence in accelerated computing and applied AI research.
          </p>

          <h4>Core Values</h4>
          <ul>
            <li><span className="fw-semibold">Innovation:</span> Advancing novel architectures and algorithms.</li>
            <li><span className="fw-semibold">Efficiency:</span> Maximizing performance while minimizing cost.</li>
            <li><span className="fw-semibold">Collaboration:</span> Bridging academia and industry.</li>
            <li><span className="fw-semibold">Impact:</span> Delivering solutions that matter.</li>
          </ul>
        </div>

        {/* Right Image Column */}
        <div className="col-lg-6 d-flex justify-content-center align-items-center" data-aos="fade-left">
          <div className="text-center w-100">
            <img
              src={labImage}
              alt="Research Lab Team"
              className="img-fluid shadow rounded"
              style={{
                maxHeight: '500px',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '12px'
              }}
            />
            <p className="mt-3 text-muted fst-italic" style={{ fontSize: '1rem' }}>
              Our collaborative research environment fosters creativity and innovation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
