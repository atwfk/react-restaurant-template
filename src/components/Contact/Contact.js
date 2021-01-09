import React, { useState } from "react";
import styled from "styled-components";
import layer from "../../assets/images/Layer.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [contactData] = useState([
    { icon: faMapMarkerAlt, content: "Main Road, Building Name, Country" },
    { icon: faEnvelope, content: "info@companyname.com" },
  ]);
  const [links] = useState([faInstagram, faFacebookF, faTwitter, faWhatsapp]);
  return (
    <StyledContact>
      <div className="contact">
        <div className="logo">
          <FontAwesomeIcon icon={faHamburger} size="3x" />
          <h3>BURGER HOUSE</h3>
        </div>
        <div className="content">
          <div className="par">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viver ra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>
          <div className="contact-infos">
            {contactData.map((contact, index) => (
              <div className="contact-info" key={index}>
                <FontAwesomeIcon icon={contact.icon} size="2x" />
                <h3>{contact.content}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="contact-links">
          <div className="copyrights">
            <h3>© Company Name 2020. All rights reserved.</h3>
          </div>
          <div className="links">
            {links.map((link, index) => (
              <div className="link" key={index}>
                <FontAwesomeIcon icon={link} size="1x" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled.footer`
  padding: 120px 70px 40px 70px;
  @media (max-width: 775px) {
    padding: 120px 20px;
  }
  .contact {
    padding: 70px 50px 50px 50px;
    background-image: url(${layer});
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    @media (max-width: 575px) {
      padding: 50px 20px 20px 20px;
    }
    .logo {
      display: flex;
      align-items: center;

      h3 {
        margin-left: 20px;
      }
    }
    .content {
      margin-top: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 1000px) {
        flex-direction: column;
        align-items: flex-start;
      }
      .par {
        width: 40%;
        @media (max-width: 1100px) {
          width: 60%;
        }
        @media (max-width: 1000px) {
          width: 100%;
        }
        p {
          line-height: 30px;
          @media (max-width: 575px) {
            line-height: 20px;
          }
        }
      }
      .contact-infos {
        .contact-info {
          display: flex;
          justify-content: flex-start;
          margin-top: 20px;
          h3 {
            font-size: 20px;
            margin-left: 40px;
          }
        }
      }
    }
    .contact-links {
      margin-top: 70px;
      display: flex;
      justify-content: space-between;
      @media (max-width: 775px) {
        flex-direction: column;
      }
      h3 {
        font-size: 15px;
      }
      .links {
        display: flex;
        @media (max-width: 775px) {
          margin-top: 20px;
        }
        .link {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #fff;
          color: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          :not(:last-of-type) {
            margin-right: 20px;
          }
        }
      }
    }
  }
`;

export default Contact;
