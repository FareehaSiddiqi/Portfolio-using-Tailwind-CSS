"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [showForm, setShowForm] = useState(false); // State for "Let's Talk" form

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been sent! We will contact you soon."); // Demo purpose
    setShowForm(false); // Close form after submission
  };

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <h2>Fareeha.</h2>
        </div>

        <div className="navigate">
          <ul>
            <li><a href="/" className="link">Home</a></li>
            <li><a href="/about" className="link">About</a></li>
            <li><a href="/cv" className="link">Resume</a></li>
            <li><a href="/project" className="link">Projects</a></li>
            <li><a href="/blog" className="link">Blog</a></li>
            <li><a href="/learning-material" className="link">Learning Material</a></li>
            <li><a href="/contactUs" className="link">Contact Us</a></li>
          </ul>
        </div>

        <div className="buttons">
          <button className="talk-btn" onClick={() => setShowForm(true)}>Let's Talk</button>
          <a href="/cv" className="cv-btn">Download CV</a>
        </div>
      </nav>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>Let's Talk</h2>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>

              <button type="submit">Send</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
