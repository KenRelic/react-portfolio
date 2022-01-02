import React from "react";
import styled from "@emotion/styled";
import bg from "../../images/port-bg2.png";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter id={"contact-me"}>
      <h2 className="contact-me">Let's talk about that project of yours!</h2>
      <p className="content-paragraph">
        I am open for projects or collaboration. We can also grab a cup of
        coffee while sharing ideas and planning on creating the next big thing.
      </p>
      <div className="media-icons">
        <a
          href="mailto:Simeonkenneth3@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="media-link">
          <FaEnvelope />
        </a>
        <a
          href="http://www.github.com/KenRelic"
          target="_blank"
          rel="noopener noreferrer"
          className="media-link">
          <FaGithub />
        </a>
        <a
          href=" www.linkedin.com/in/simeonkenneth"
          target="_blank"
          rel="noopener noreferrer"
          className="media-link">
          <FaLinkedin />
        </a>
        <a
          href=" www.twitter.com/semanticTSK"
          target="_blank"
          rel="noopener noreferrer"
          className="media-link">
          <FaTwitter />
        </a>
      </div>
      <small className="copy">
        Copyright &copy; - Simeon Kenneth T (Kenchi)
      </small>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  width: 100%;
  padding: 4rem 2rem 1rem 2rem;
  background-color: #071b37;
  background-image: url(${bg});
  background-blend-mode: multiply;
  color: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .footer-content {
    max-width: fit-content;
    width: 100%;
    margin: 0 auto;
  }
  .contact-me {
    font-size: 3.5rem;
  }
  .content-paragraph {
    margin: 0 auto;
    width: 100%;
  }

  .media-icons {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 3rem;
  }

  .media-link {
    font-size: 2rem;
    color: #e63946;
    &:hover {
      color: #fff;
    }
  }
  .contact-me-btn {
    text-decoration: none;
    text-align: center;
    margin-top: 30px;
    color: #e63946;
    border-bottom: 3px solid #e63946;
    padding-bottom: 4px;
    &:hover {
      color: #ffffff;
      border-bottom: 3px solid #001e5f;
    }
  }
  small {
    display: block;
    text-align: center;
    width: 100%;
    margin-top: 2rem;
  }
`;
