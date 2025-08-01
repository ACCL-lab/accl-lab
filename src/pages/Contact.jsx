import React from 'react';

const Contact = ({ handleOpen }) => {
  return (
    <>
      {/* CTA Section */}
      <section className="py-5 text-center bg-white text-dark" id="contact">
        <div className="container" data-aos="fade-up" data-aos-delay="400">
          <h2 className="mb-3">Interested in Working with Us?</h2>
          <p className="mb-4 text-center-paragraph">
            Whether you're a student, researcher, or institution — we welcome collaboration and new ideas.
          </p>
          <button className="btn btn-success mx-2" onClick={handleOpen}>
            Contact
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;
