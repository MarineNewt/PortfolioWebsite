import React from "react";
import { Jumbotron } from "./migration";
import primarypic from "../../editable-stuff/profile1.jpg"


const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [showPic] = React.useState(Boolean(link));
  // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook




  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {showPic && (
            <div style={{position:'relative'}}><img style={{position:'absolute'}}
              className="disloop border border-secondary rounded-circle"
              src={primarypic}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
            />
            <img style={{position:''}}
              className="border border-secondary rounded-circle"
              src={primarypic}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
            /></div>
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead text-center">{message}</p>
          {/* Temporary Editted out Resume*/}
          {resume && false && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
