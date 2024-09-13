import React, { useState } from "react";
import { Search } from "lucide-react";
// import LogoSilver from "../../assets/ter-silver.png";
import Footer from "../../components/Footer/Footer";
import Star from "../../assets/home/plus-star.svg";
import styles from "./Recruitments.st.js";
import EliteLogo from "../../assets/elite-logo.svg";
import Crew from "../../assets/crew.png";
import Vector from "../../assets/vector.svg";

const jobCardStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    width: "920px",
    height: "171px",
    borderRadius: "5px",
    padding: "20px",
    marginBottom: "20px",
    position: "relative",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  orangeBox: {
    width: "200px",
    height: "180px",
    borderRadius: "7.42px",
    backgroundColor: "#D93100",
    position: "absolute",
    top: "50%",
    left: "16px",
    transform: "translateY(-50%)",
  },
  content: {
    marginLeft: "198px",
    display: "flex",
    flexDirection: "column",
  },
  jobTitle: {
    fontSize: "24px",
    color: "#D93100",
    marginBottom: "5px",
    fontFamily: "Inter, sans-serif",
  },
  company: {
    fontSize: "16px",
    color: "#D93100",
    fontFamily: "Inter, sans-serif",
  },
};

const Recruitments = () => {
  const jobTitles = [
    "Aerodynamicist",
    "Chassis Engineer",
    "Electronics and DAQ Engineer",
    "PowerTrain",
    "Social Media",
    "Suspension",
    "Vehicle Dynamics",
    "Web Developement",
    "UI/UX Designer",
    "Marketing",
    "Cloud Engineer",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobTitles);
  const [selectedFilters, setSelectedFilters] = useState({
    jobType: [],
    postType: [],
    postDuration: [],
  });

  const handleSearch = () => {
    const filtered = jobTitles.filter((job) =>
      job.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  // const handleApply = () => {
  //   console.log("Applied to job");
  // };

  const handleFilterChange = (category, item) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(item)
        ? prev[category].filter((i) => i !== item)
        : [...prev[category], item],
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      jobType: [],
      postType: [],
      postDuration: [],
    });
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <img src={EliteLogo} alt="Elite Logo" style={styles.eliteLogo} />
        <div style={styles.headerText}>
          <span style={styles.findYour}>FIND YOUR</span>
          <span style={styles.dreamJob}>DREAM JOB</span>
        </div>
        <div style={styles.starPlaceholder}>
          <img src={Star} alt="Star" />
        </div>
      </div>

      {/* Search Bar */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search job titles, keywords or skill"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <Search style={styles.searchIcon} />
        <button onClick={handleSearch} style={styles.searchButton}>
          Search
        </button>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Left Sidebar (Filters) */}
        <div style={styles.leftSidebar}>
          <div style={styles.filtersHeader}>
            <div style={styles.filterLines}></div>
            <span style={styles.filtersText}>Filters</span>
            <span style={styles.clearAllText} onClick={clearFilters}>
              Clear all
            </span>
          </div>

          {/* Job Type Filters */}
          <div style={styles.filterBox}>
            <h3 style={styles.filtersText}>Job Type</h3>
            {[
              "All",
              "Full Time",
              "Part Time",
              "Internship",
              "Contract",
              "Freelance",
            ].map((item) => (
              <label key={item} style={styles.filterItem}>
                <input
                  type="checkbox"
                  checked={selectedFilters.jobType.includes(item)}
                  onChange={() => handleFilterChange("jobType", item)}
                  style={styles.checkbox}
                />
                {item}
              </label>
            ))}
          </div>

          {/* Post Type Filters */}
          <div style={styles.filterBox}>
            <h3 style={styles.filtersText}>Post Type</h3>
            {[
              "Aerodynamicist",
              "Chassis Engineer",
              "Electronics and DAQ Engineer",
              "PowerTrain",
              "Suspension",
              "Vehicle Dynamics",
            ].map((item) => (
              <label key={item} style={styles.filterItem}>
                <input
                  type="checkbox"
                  checked={selectedFilters.postType.includes(item)}
                  onChange={() => handleFilterChange("postType", item)}
                  style={styles.checkbox}
                />
                {item}
              </label>
            ))}
          </div>

          {/* Post Duration Filters */}
          <div style={styles.filterBox}>
            <h3 style={styles.filtersText}>Post Duration</h3>
            {[
              "Latest",
              "Last Week",
              "Last Month",
              "Last 6 Months Ago",
              "Last Year",
            ].map((item) => (
              <label key={item} style={styles.filterItem}>
                <input
                  type="checkbox"
                  checked={selectedFilters.postDuration.includes(item)}
                  onChange={() => handleFilterChange("postDuration", item)}
                  style={styles.checkbox}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Middle Section (Job Listings) */}
        <div style={styles.middleSection}>
          {filteredJobs.map((job, index) => (
            <div key={index} style={jobCardStyles.container}>
              <div style={jobCardStyles.orangeBox}></div>
              <div style={jobCardStyles.content}>
                <h2 style={jobCardStyles.jobTitle}>&nbsp;&nbsp;{job}</h2>
                <p style={jobCardStyles.company}>
                  &nbsp;&nbsp;
                  <img src={Vector} alt="vector" />
                  &nbsp;&nbsp;TheEliteRacers
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScLwNP7s3yatkWfzl59oO1c1d8uSw52_jA-ysderWJmVTtPqA/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.applyButton}
                >
                  Apply
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div style={styles.rightSidebar}>
          <div style={styles.terLogoPlaceholder}>
            <img
              src={EliteLogo}
              alt="logo"
              style={{ width: "90%", height: "auto" }}
            />
          </div>
          <div style={styles.separator}></div>
          <div style={styles.rightSidebarText}>
            <h3 style={styles.stayAheadText}>
              STAY <span style={styles.aheadText}>AHEAD</span> OF THE CURVE
            </h3>
            <p>
              BE THE FIRST TO SEE{" "}
              <span style={styles.newRolesText}>NEW ROLES</span> IN FSAE.
            </p>
          </div>
          <img src={Crew} alt="logo" style={styles.teamImage} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recruitments;
