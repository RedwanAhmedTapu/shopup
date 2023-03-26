import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import CableIcon from "@mui/icons-material/Cable";
import CastleIcon from "@mui/icons-material/Castle";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import React from "react";
import styled from "styled-components";

const Trusted = () => {
  const Trusted = styled.section`
    position: relative;
    top: 8rem;
    padding: 0rem 0rem;
    .trusted {
      width: 100%;
      height: 40rem;
      padding: 10rem 20rem;
      display: flex;
      background-color: #e9e9e9;
      opacity: 0.8;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .trustText {
        background: -webkit-linear-gradient(#39b5e0, #301e67);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 600;
        font-size: 3.5rem;
      }

      .companyLogo {
        width: 100%;

        height: 30rem;
        display: flex;

        /* background-color: red; */
        justify-content: center;
        align-items: center;
        padding: 5rem;
        gap: 3rem;
        box-sizing: border-box;
        .logo {
          width: 10rem;
          height: 10rem;
          padding: 5rem 13rem;
          border-radius: 50%;
          box-sizing: border-box;
          background-color: #e9e9e9;

          display: flex;
          gap: 3rem;
          justify-content: center;
          align-items: center;
          .innerLogo {
            width: 8rem;
            height: 8rem;
            border-radius: 50%;
          }

          .cmpnyName {
            font-size: 3rem;

            background: -webkit-linear-gradient(#39b5e0, #301e67);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 600;
          }
        }
      }
    }
    /* tab responsive */
    @media (max-width: 1488px) {
      .trusted {
        height: 120rem;
        padding: 3rem 3rem;
        .companyLogo {
          width: 50rem;
          display: flex;
          /* flex-direction: column; */
          flex-wrap: wrap;
        }
      }
    }
    /* mobile responsive */
    @media (max-width: 743px) {
      .trusted {
        height: 100rem;
        padding: 6rem 8rem;

        .companyLogo {
          height: 90rem;
          display: flex;
          flex-direction: column;

          justify-content: center;
          align-items: center;
          gap: 3rem;
          .logo {
            width: 5rem;
            height: 5rem;
          }
        }
      }
    }
  `;
  return (
    <Trusted>
      <div className="trusted">
        <p className="trustText">Trusted By 1000+ Companies</p>
        <div className="companyLogo">
          <div className="logo">
            <div className="innerLogo">
              <AccessibleForwardIcon
                sx={{
                  width: "8rem",
                  height: "8rem",
                  color: "blue",
                  opacity: "0.5",
                }}
              />
            </div>
            <p className="cmpnyName">Trust</p>
          </div>
          <div className="logo">
            <div className="innerLogo">
              <LocalFireDepartmentIcon
                sx={{
                  width: "8rem",
                  height: "8rem",
                  color: "blue",
                  opacity: "0.5",
                }}
              />
            </div>
            <p className="cmpnyName">Fire</p>
          </div>
          <div className="logo">
            <div className="innerLogo">
              <AgricultureIcon
                sx={{
                  width: "8rem",
                  height: "8rem",
                  color: "blue",
                  opacity: "0.5",
                }}
              />
            </div>
            <p className="cmpnyName">Agri</p>
          </div>
          <div className="logo">
            <div className="innerLogo">
              <CableIcon
                sx={{
                  width: "8rem",
                  height: "8rem",
                  color: "blue",
                  opacity: "0.5",
                }}
              />
            </div>
            <p className="cmpnyName">Cable</p>
          </div>
          <div className="logo">
            <div className="innerLogo">
              <CastleIcon
                sx={{
                  width: "8rem",
                  height: "8rem",
                  color: "blue",
                  opacity: "0.5",
                }}
              />
            </div>
            <p className="cmpnyName">Castle</p>
          </div>
        </div>
      </div>
    </Trusted>
  );
};

export default Trusted;
