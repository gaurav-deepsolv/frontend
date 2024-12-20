import React, { useState } from "react";

const Competitors = ({ competitors, addCompetitor }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      addCompetitor(username);
      setUsername("");
    }
  };

  return (
    <div>
      <h2>Competitors</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Add Competitor</button>
      </form>
      <ul>
        {competitors.map((comp) => (
          <li key={comp.id}>
            <img src={comp.profile_pic} alt={comp.username} width="50" />
            <p>{comp.username}</p>
            <p>{comp.full_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Competitors;
