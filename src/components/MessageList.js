import React, { useEffect, useState } from "react";
import axios from "axios";

function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await axios.get("https://mern-message-rf1d.vercel.app/messages");
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages", error);
      }
    }

    fetchMessages();
  }, []);

  return (
    <>
      <div className="container mt-3">
        <div className="row animated slideInLeft">
          <div className="col">
            <p className="h3 text-success">Message list Page</p>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              nesciunt officiis perspiciatis quam voluptate. Alias consequuntur
              est ipsam iure modi mollitia placeat, ut voluptatem? Dolorem
              doloribus illo nihil odit veniam.
            </p>
          </div>
        </div>
        <div className="row animated zoomIn delay-1s">
          {messages.length > 0 ? (
            <React.Fragment>
              {messages.map((product) => {
                return (
                  <div key={product._id} className="col-md-3">
                    <div className="card">
                      <div className="card-body">
                        <ul className="list-group">
                          <li className="list-group-item">
                            Message : {product.content}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div>
                <p className="h5 text-danger">
                  ---------------- No message Available --------------
                </p>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </>
  );
}

export default MessageList;
