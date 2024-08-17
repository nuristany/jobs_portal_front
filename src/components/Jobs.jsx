import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const accessToken = localStorage.getItem("access");
        const response = await axios.get("https://web-production-262c.up.railway.app/job/jobs/", {
          headers: {
            Authorization: `JWT ${accessToken}`,
          },
        });

        console.log("jobsData", response.data);
        console.log("jobsData", response);
        setJobData(response.data);
      } catch (error) {
        setError("failed to fetch data");
        console.error("Error fetching data", error.message);
        setLoading(false);
      }
    };
    fetchJobData();
  }, []);

  if (error) {
    return <p>error</p>;
  }

  if (loading) {
    return <p>loding</p>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>List Of Jobs</h1>

      {jobData && jobData.length > 0 ? (
        jobData.map((data) => (
          <div style={{ margin: "25px" }}>
            <h3>Title: {data.title}</h3>

            <p>
              <strong>Description: </strong>
              {data.description}
            </p>
            <p>
              <strong>Posted at: </strong>
              {data.created_at}
            </p>
            <p>
              <strong>Status: </strong>
              {data.status}
            </p>
            <p>
              <strong>Posted by: </strong>
              {data.posted_by}
            </p>
          </div>
        ))
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
};

export default Home;
