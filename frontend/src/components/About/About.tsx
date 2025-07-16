import React from "react";
import { useState, useEffect } from "react";
import { getAbout } from "../../services/About";
import "./About.css";
import type { About as AboutType } from "../../types/About";
import Loader from "../Loader/Loader";

export default function About() {
  const [about, setAbout] = useState<AboutType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const data = await getAbout();
        console.log("About Me data:", data);
        setAbout(data);
      } catch (error) {
        console.error("Error fetching About Me:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  return (
    <>
      <h2 className="titlestyle">About Me</h2>
      {loading ? (
        <Loader />
      ) : (
        <p className="textstyle" style={{ whiteSpace: "pre-line" }}>
          {(about[0]?.about_me || "").replace(/\\n/g, "\n")}
        </p>
      )}
    </>
  );
}
