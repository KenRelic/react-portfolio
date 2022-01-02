import React from "react";
import styled from "@emotion/styled";

import { worksData } from "../../data.js";
import nextIPProject from "../../images/nextIPProject.png";
import nirsalProject from "../../images/nirsalProject.png";
import loopStudios from "../../images/loopstudios.png";
import converter from "../../images/converter.png";
import easzi from "../../images/easzi.png";
import website from "../../images/website.png";

import "aos/dist/aos.css";
// import reactProject from "../../images/nirsalProject.png";
const images = [
  easzi,
  nirsalProject,
  website,
  nextIPProject,
  converter,
  loopStudios,
];

const Works = ({ direction, content }) => {
  const gotoProject = (url) => {
    window.open(url, "resizable=yes,scrollbars=yes,status=yes");
  };

  // useEffect(() => {
  //   AOS.init({
  //     offset: 400,
  //     duration: 400,
  //     easing: "ease-in-sine",
  //     delay: 100,
  //     once: true,
  //   });
  // });
  return (
    <StyledWorksWrapper className={"works-section"} id={"my-works"}>
      <h2 className={"sub-title"}>Some Projects</h2>
      {worksData.map((work, index) => (
        <StyledLayout
          data-aos="fade-in"
          direction={work.direction}
          className={"work-section-wrapper"}
          index={work.index}>
          <div
            className={`${
              work.direction === "left"
                ? "work-description-left"
                : "work-description-right"
            }`}>
            <h3 data-aos="fade-right" className={"work-title"}>
              {work.title}
            </h3>
            <p data-aos="fade-right" className={"work-subtitle"}>
              {work.subtitle.map((subtitle) => (
                <span>{subtitle}</span>
              ))}
            </p>
            <p data-aos="fade-right" className={"work-details"}>
              {work.details}
            </p>
            <button
              data-aos="fade-left"
              className={"work-live-link"}
              onClick={() => gotoProject(work.url)}>
              See Project
            </button>
          </div>
          <div className={"work-img"}></div>
        </StyledLayout>
      ))}
    </StyledWorksWrapper>
  );
};

export default Works;
const StyledWorksWrapper = styled.div`
  margin-top: 200px;
  width: 100%;
  max-width: 1200px;
  margin: 200px auto 0 auto;

  .sub-title {
    font-size: 2rem;
    text-align: center;
    color: #1d3557;
  }

  .work {
    margin: 40px auto;
    width: 100%;
    max-width: 1000px;
    min-height: fit-content;
    height: 550px;
    display: grid;
    grid-template-columns: 150px 1fr 1fr 1fr 1fr;
    grid-template-rows: 100px 1fr 1fr;
  }
`;
const StyledLayout = styled.div`
  margin: 40px auto;
  width: 100%;
  max-width: 1000px;
  min-height: fit-content;
  height: 550px;
  display: grid;
  grid-template-columns: 150px 1fr 1fr 1fr 150px;
  grid-template-rows: 100px 1fr 1fr;
  border-radius: 10px;

  .work-description-left,
  .work-description-right {
    width: auto;
    height: auto;
    background-color: #ffffff;
    box-shadow: 0 0 10px 10px #4d4d4d29;
    /* grid-column: (props)=> props.direction === "right" 1 / 3; */
    grid-column: ${(props) => (props.direction === "left" ? "1 / 3" : "4 / 6")};
    grid-row: 2 / 4;
    z-index: 2;
    padding: 1rem 1rem 1rem 2rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    /* border-radius: 20px 20px 0 0; */
    border-radius: 10px;
    overflow: hidden;
  }

  .work-description-left h3,
  .work-description-right h3 {
    font-size: 1.5rem;
    color: #e63946;
    margin-bottom: 1rem;
  }

  .work-subtitle {
    color: #1d3557;

    span {
      background-color: #1d3557;
      padding: 3px 10px;
      font-size: 14px;
      color: #fff;
      border-radius: 20px;
      margin-right: 5px;
    }
  }
  .work-details {
    margin: 1rem auto;
    line-height: 1.6;
    color: rgb(21, 21, 21);
  }
  .work-live-link {
    margin-top: 1.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid #e63946;
    background-color: transparent;
    color: #e63946;
    cursor: pointer;
  }
  .work-live-link:hover {
    background-color: #e63946;
    color: #fff;
  }
  .work-img {
    width: auto;
    height: auto;
    background-color: #1d3557;
    /* grid-column: 2 / 6; */
    grid-column: ${(props) => (props.direction === "left" ? "2 / 6" : "1 / 5")};
    grid-row: 1 / 4;
    background-image: ${(props) =>
      props.index ? `url(${images[props.index - 1]})` : `url(${images[0]})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    background-origin: border-box;
    background-blend-mode: multiply;
    transition: all 0.3s ease;

    &:hover {
      background-blend-mode: normal;
      background-color: #112847;
    }
  }
`;
