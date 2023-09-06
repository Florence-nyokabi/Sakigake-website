import React from "react";
import './style.css';


const WhyMzaziConnect = () => {
    return(
        <div className="section-container">
            <div className="section-header">
                <h1 className="main-heading">WHY MZAZICONNECT?</h1>
            </div>
            <div className="content-container">
                <div className="contents">
                    <div className="image-container">
                        <img src={process.env.PUBLIC_URL + 'images/Group 14.jpg'} alt="Lady" />
                    </div>
                    <div className="contents-paragraph">
                        <h2 className="headings">Assignment Access</h2>
                        <p>Gain instant access to your child's assignments,<br/>ensuring you're always in the loop about their<br/>studies.</p>
                    </div>
                </div>
                <div className="contents">
                    <div className="contents-paragraph1">
                        <h2 className="headings">Material Locations</h2>
                        <p>Locate shops in your vicinity that provide the<br/>materials required for the CBC program, all <br/>through our app.</p>
                    </div>
                    <div className="image-container">
                        <img src={process.env.PUBLIC_URL + 'images/Group 15.jpg'} alt="Man" />
                    </div>
                </div>
                <div className="contents">
                    <div className="image-container">
                        <img src={process.env.PUBLIC_URL + 'images/Group 16.jpg'} alt="Lady" />
                    </div>
                    <div className="contents-paragraph">
                        <h2 className="headings">Real-time Updates</h2>
                        <p>Receive notifications about new assignments and<br/>resource availability to stay up-to-date.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WhyMzaziConnect;