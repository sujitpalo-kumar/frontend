import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function MessageForm() {
  let history = useNavigate();
  const [content, setContent] = useState("");
  let [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content) {
      alert("Message can't be empty!");
      return;
    }

    try {
      await axios.post("https://mern-message-rf1d.vercel.app/messages", { content });
      setContent("");
      setSubmitted(true);
    } catch (error) {
      alert("Error posting message");
    }
  };

  return (
    <div>
      {submitted ? (
        history("/list")
      ) : (
        <form className="row g-3 p-5" onSubmit={handleSubmit}>
          <div className="col-auto">
            <label className="visually-hidden">message</label>
            <textarea
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="form-control"
              id="ss"
              placeholder="Write your message here..."
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary sm-2">
              submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default MessageForm;
