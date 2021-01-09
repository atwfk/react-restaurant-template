import React from "react";
import styled from "styled-components";
import upcomingOfferImg from "../../assets/images/upcomingOffer.jpg";

const UpcomingOffers = () => {
  return (
    <StyledUpcomingEvents>
      <div className="upcomig-offers">
        <div className="upcoming-offer">
          <div className="offer-content">
            <span>DISCOVER</span>
            <h3>Upcoming Events</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
          <div className="offer-image">
            <img src={upcomingOfferImg} alt="offer" />
          </div>
        </div>
      </div>
      <div className="bullets">
        <div className="bullet active"></div>
        <div className="bullet"></div>
        <div className="bullet"></div>
      </div>
    </StyledUpcomingEvents>
  );
};

const StyledUpcomingEvents = styled.section`
  position: relative;
  padding: 0 70px 70px 70px;
  @media (max-width: 775px) {
    padding: 0 30px 30px 30px;
  }
  .upcomig-offers {
    padding: 20px;
    box-shadow: 0px 13px 30px rgba(0, 0, 0, 0.1);
    .upcoming-offer {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      @media (max-width: 600px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }
      .offer-content {
        padding: 30px;
        @media (max-width: 1200px) {
          padding: 0;
          margin-bottom: 40px;
        }
        span {
          font-size: 30px;
        }
        h3 {
          font-size: 55px;
          @media (max-width: 775px) {
            font-size: 40px;
          }
        }
        p {
          font-size: 20px;
          line-height: 30px;
          margin-top: 20px;
          @media (max-width: 575px) {
            font-size: 15px;
            line-height: 20px;
          }
        }
      }
      .offer-image {
        img {
          max-width: 100%;
        }
      }
    }
  }
  .bullets {
    display: flex;
    position: absolute;
    bottom: 120px;
    left: 120px;
    @media (max-width: 1300px) {
      bottom: 100px;
    }
    @media (max-width: 775px) {
      bottom: 60px;
      left: 60px;
    }
    .bullet {
      width: 15px;
      height: 15px;
      background-color: #dcdcdc;
      border-radius: 50%;
      transition: all 0.4s ease;
      cursor: pointer;
      :not(:last-of-type) {
        margin-right: 10px;
      }
      :hover {
        background-color: #ffc045;
      }
    }
    .bullet.active {
      background-color: #ffc045;
    }
  }
`;

export default UpcomingOffers;
