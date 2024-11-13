import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminAboutPage.css";

const AdminAboutPage = () => {
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const backendapi = import.meta.env.VITE_BACKEND_API;
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(backendapi"/api/about");
        setContent(response.data.content);
      } catch (error) {
        console.error("Error fetching about content:", error);
      }
    };

    fetchContent();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backendapi+"/api/adminAbout/update", { content });
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error updating content:", error);
    }
  };

  return (
    <div className="admin-about-container">
      <h1>Admin - Update About Content</h1>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleUpdate}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="10"
          placeholder="Enter about content"
        ></textarea>
        <button type="submit">Update Content</button>
      </form>
    </div>
  );
};

export default AdminAboutPage;