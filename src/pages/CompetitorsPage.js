import React, { useEffect, useState } from "react";
import Competitors from "../components/Competitors";
import { fetchCompetitors, addCompetitor } from "../api/competitors";

const CompetitorsPage = () => {
  const [competitors, setCompetitors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCompetitors();
      setCompetitors(data);
    };
    fetchData();
  }, []);

  const handleAddCompetitor = async (username) => {
    const data = await addCompetitor(username);
    setCompetitors((prev) => [...prev, ...data]);
  };

  return (
    <Competitors
      competitors={competitors}
      addCompetitor={handleAddCompetitor}
    />
  );
};

export default CompetitorsPage;
