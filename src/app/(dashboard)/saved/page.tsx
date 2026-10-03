"use client";

import { useEffect, useState } from "react";

const SavedPage = () => {
  const [savedItems, setSavedItems] = useState([]);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedItem") || "[]");
    console.log("saved", saved);
  }, []);
  return <div></div>;
};

export default SavedPage;
