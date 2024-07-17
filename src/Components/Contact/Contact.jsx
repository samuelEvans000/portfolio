import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (showPopup) {
      const timeoutId = setTimeout(() => {
        setShowPopup(false);
        setPopupMessage("");
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [showPopup]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.contact ||
      !formData.message
    ) {
      setPopupMessage("Please fill all required fields!");
      setShowPopup(true);
      return;
    }

    try {
      setPopupMessage("Email has been sent successfully.");
      setShowPopup(true);
      setFormData({
        fullName: "",
        email: "",
        contact: "",
        message: "",
      });
      const response = await axios.post("https://email-server-fawn.vercel.app/send", formData)
    } catch (error) {
      setPopupMessage("Failed to send, Please try again.");
      setShowPopup(true);
    }
  };

  return (
    <div className="contact">
      <h1 className="title">Contact</h1>
      <div className="contactLine" />
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Write to me"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        {showPopup && (
          <div
            className={`popup ${
              popupMessage.includes("Failed") ? "error" : "success"
            } ${popupMessage.includes("all") ? "empty" : ""}`}
          >
            {popupMessage}
          </div>
        )}
        <div className="formImg">
          <img src="/assets/profile.png" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
