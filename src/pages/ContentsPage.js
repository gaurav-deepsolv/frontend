import React, { useState } from "react";
import Modal from "react-modal";

const ContentsPage = () => {
  const [contents, setContents] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null); // Store the selected video URL

  // Modal styles
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // Fetch contents (this is a mockup; replace it with your API call)
  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/api/content/")
      .then((response) => response.json())
      .then((data) => setContents(data))
      .catch((error) => console.error("Error fetching contents:", error));
  }, []);

  return (
    <div>
      <h1>Contents</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {contents.map((content) => (
          <div key={content.post_id} style={{ textAlign: "center" }}>
            <img
              src={content.thumbnail}
              alt="thumbnail"
              style={{ width: "200px", cursor: "pointer" }}
              onClick={() => setSelectedVideo(content.video_url)}
            />
            <p>{content.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for video playback */}
      {selectedVideo && (
        <Modal
          isOpen={!!selectedVideo}
          onRequestClose={() => setSelectedVideo(null)}
          style={customStyles}
          contentLabel="Video Player"
        >
          <button
            onClick={() => setSelectedVideo(null)}
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            Close
          </button>
          <video
            src={selectedVideo}
            controls
            autoPlay
            style={{ width: "100%", height: "auto" }}
          ></video>
        </Modal>
      )}
    </div>
  );
};

export default ContentsPage;
