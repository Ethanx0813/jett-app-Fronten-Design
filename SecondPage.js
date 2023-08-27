import React from "react";
import "./secondPageStyles.css"; // Import the second page CSS file

const SecondPage = () => {
  const dashLineCount = 3; // Number of dash lines

  return (
    <div className="page">
      {/* Common Jett Header */}
      <div className="jett-header">
        <div className="jett-logo">
          {/* Render dash lines */}
          <div className="dash-lines">
            {[...Array(dashLineCount)].map((_, index) => (
              <div key={index} className="dash-line" />
            ))}
          </div>
          <div className="jett-header-text">
            <span style={{ fontSize: '30px', fontWeight: 'bold', color: 'orange', marginRight: '0' }}>Je</span>
            <span style={{ fontSize: '30px', fontWeight: 'bold', color: 'red' }}>tt</span>
          </div>
        </div>
        <div className="profile-icon">👤</div>
      </div>

      {/* Image */}
      
      <div className="image-section">
        <img
          src="https://imgur.com/UOtiJ0h.jpg"
          alt="Image"
          className="main-image"
        />
        <div className="circle-container">
        <div className="line">Shop on <br /> EMI without <br/> credit card</div>
       
    
 
        </div>
        <div className="shop-now-button-container">
          <button className="shop-now-button-red">Shop Now</button>
        </div>
        <h2 className="how-it-works-heading">How It Works</h2>
      </div>

      {/* How It Works Section */}
      <div className="how-it-works-section">
        {/* Enter Personal Details */}
        <div className="step">
          <img
            src="https://imgur.com/NUzVN3z.jpg"
            alt="Step 1"
            className="step-image-left"
          />
          <p className="step-text-left">1. Enter Personal Details</p>
        </div>

        {/* Enter Product Details */}
        <div className="step">
          <p className="step-text-left">2. Enter Product Details</p>
          <img
            src="https://imgur.com/TmimVjn.jpg"
            alt="Step 3"
            className="step-image-right"
          />
        </div>

        {/* Choose EMI Tenure */}
        <div className="step">
          <img
            src="https://imgur.com/o3XWY1U.jpg"
            alt="Step 4"
            className="step-image-left"
          />
          <p className="step-text-left">3. Choose EMI Tenure</p>
        </div>

        <div className="step">
          <p
            className="step-text-right"
            style={{ marginBottom: "350px", color: "red" }}
          >
            4. Order Confirmation
          </p>
          <img
            src="https://imgur.com/2BBHwJ1.jpg"
            alt="Step 5"
            className="step-image-left"
          />
        </div>

        {/* Refund and Replacement */}
        <div className="step">
          <img
            src="https://imgur.com/bZsskEA.jpg"
            alt="Step 6"
            className="step-image-left"
          />
          <p className="step-text-left">5. Refund and Replacement</p>
        </div>
      </div>

      {/* Jett Benefits */}
      <div className="benefits-section">
        <h2 className="benefits-heading">Jett Benefits</h2>
        <img
          src="https://imgur.com/52DStsl.jpg"
          alt="Benefits"
          className="benefits-image"
        />
        <ul className="benefits-list">
          <li className="benefits-list-item">Benefit 1</li>
          <li className="benefits-list-item">Benefit 2</li>
          <li className="benefits-list-item">Benefit 3</li>
        </ul>
        <button className="shop-now-button-red">Shop Now</button>
      </div>

      {/* Frequently Asked Questions */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <ul className="faq-list">
          <li className="faq-list-item">Question 1</li>
          <li className="faq-list-item">Question 2</li>
          <li className="faq-list-item">Question 3</li>
          <li className="faq-list-item">Question 4</li>
          <li className="faq-list-item">Question 5</li>
        </ul>
      </div>

      {/* Red Borderline */}
      <div className="red-borderline"></div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="bottom-left">
          <div className="bottom-left">
            <span style={{ fontSize: '30px', fontWeight: 'bold', color: 'orange', marginRight: '0' }}>Je</span>
            <span style={{ fontSize: '30px', fontWeight: 'bold', color: 'red' }}>tt</span>
          </div>
        </div>
        <div className="bottom-right">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>

      {/* Login, Shop Now, Sign Up */}
      <div className="bottom-buttons">
        <button style={{ backgroundColor: "black", color: "white" }}>
          Login
        </button>
        <button style={{ backgroundColor: "black", color: "white" }}>
          Shop now
        </button>
        <button style={{ backgroundColor: "black", color: "white" }}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default SecondPage;
