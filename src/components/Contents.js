import React from "react";

const Contents = ({ contents }) => {
  return (
    <div>
      <h2>Contents</h2>
      <ul>
        {contents.map((content) => (
          <li key={content.post_id}>
            <img
              src={content.thumbnail}
              alt={content.description}
              width="100"
            />
            <p>{content.description}</p>
            <a
              href={content.post_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Post
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contents;
