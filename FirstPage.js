import React, { useState } from "react";
import "./styles.css"; // Import the CSS file for this component

const FirstPage = ({ onNext }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [pan, setPAN] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    occupation: "",
    company: "",
    salary: "",
    pan: ""
  });

  const handleNext = () => {
    // Validate form data
    const newErrors = {
      firstName: firstName ? "" : "Field is required",
      lastName: lastName ? "" : "Field is required",
      dob: dob
        ? /^\d{4}-\d{2}-\d{2}$/.test(dob)
          ? ""
          : "Invalid date format (YYYY-MM-DD)"
        : "Field is required",
      gender: gender ? "" : "Field is required",
      occupation: occupation ? "" : "Field is required",
      company: company ? "" : "Field is required",
      salary: salary ? "" : "Field is required",
      pan: pan ? "" : "Field is required"
    };

    if (Object.values(newErrors).some((error) => error !== "")) {
      setErrors(newErrors);
    } else {
      onNext();
    }
  };

  return (
    <div className="page">
      <div className="jett-header">
        <div className="jett-logo">
          <div className="dash-lines">
            {Array.from({ length: 3 }, (_, index) => (
              <div key={index} className="dash-line" />
            ))}
          </div>
          <span
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "orange",
              marginRight: "0"
            }}
          >
            Je
          </span>
          <span style={{ fontSize: "30px", fontWeight: "bold", color: "red" }}>
            tt
          </span>
        </div>
        <div className="profile-icon">👤</div>
      </div>
      <div className="personal-details">
        <div className="input-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && (
            <div className="error-message">{errors.firstName}</div>
          )}
        </div>
        <div className="input-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && (
            <div className="error-message">{errors.lastName}</div>
          )}
          <div className="input-group">
            <label>Date of Birth:</label>
            <input
              type="text"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
              pattern="\d{4}/\d{2}/\d{2}"
              title="Please use the format YYYY/MM/DD"
            />
            {errors.dob && <div className="error-message">{errors.dob}</div>}
          </div>

          {errors.dob && <div className="error-message">{errors.dob}</div>}
        </div>
        <div className="input-group">
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <div className="error-message">{errors.gender}</div>
          )}
        </div>
        <div className="input-group">
          <label>Occupation:</label>
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
          {errors.occupation && (
            <div className="error-message">{errors.occupation}</div>
          )}
        </div>
        <div className="input-group">
          <label>Company Name:</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          {errors.company && (
            <div className="error-message">{errors.company}</div>
          )}
        </div>
        <div className="input-group">
          <label>Salary:</label>
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          {errors.salary && (
            <div className="error-message">{errors.salary}</div>
          )}
        </div>
        <div className="input-group">
          <label>PAN:</label>
          <input
            type="text"
            value={pan}
            onChange={(e) => setPAN(e.target.value)}
          />
          {errors.pan && <div className="error-message">{errors.pan}</div>}
        </div>
      </div>
      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default FirstPage;
