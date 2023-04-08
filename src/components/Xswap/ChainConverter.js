import React from "react";
import {
  ArrowLeftRight,
  ArrowRightShort,
  ChevronDown,
} from "react-bootstrap-icons";
import setting from "../../assets/Icons/settings.png";
import { Button } from "react-bootstrap";

export default function ChainConverter() {
  const [isToggled, setIsToggled] = React.useState(false);
  return (
    <div
      className="row"
      style={{
        justifyContent: "center",
      }}>
      <div
        className="col-12"
        style={{
          background:
            "linear-gradient(90deg, rgba(23,39,72,1) 0%, rgba(45,54,88,1) 45%, rgba(47,30,59,1) 100%)",
          width: "90%",
          borderRadius: "10px",
        }}>
        <div
          className="row text-white my-2"
          style={{
            justifyContent: "space-between",
          }}>
          <div
            style={{
              textAlign: "left",
              marginTop: "2px",
            }}
            className="col-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 ">
            <ArrowLeftRight size={35} style={{ color: "lightblue" }} />
          </div>

          <div
            className="col-8"
            style={{
              display: "flex",
              flexDirection: "column",
            }}>
            <h5
              style={{
                textAlign: "left",
                color:
                  "linear-gradient(90deg, rgba(23,39,72,1) 0%, rgba(45,54,88,1) 45%, rgba(47,30,59,1) 100%)",
              }}>
              Cross Chain
            </h5>
            <h7
              style={{
                textAlign: "left",
                color: "#94a3b8",
              }}>
              Swap tokens from one network to another.
            </h7>
          </div>
          <div
            className="form-check form-switch col-2"
            style={{
              //make the content on right
              textAlign: "right",
            }}>
            <input
              style={{
                float: "right",
                width: "50px",
                height: "30px",
              }}
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              width={100}
              height={100}
              onClick={() => setIsToggled(!isToggled)}
            />
          </div>
        </div>

        {isToggled ? (
          <div
            className="row"
            style={{
              justifyContent: "center",
              marginBottom: "10px",
            }}>
            <div
              style={{
                //glassmorphism
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",

                borderRadius: "10px",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              }}
              className="col-5">
              {" "}
              <h5
                className="my-2"
                style={{
                  textAlign: "left",
                  color: "#94a3b8",
                }}>
                From
              </h5>
              <div
                className="my-2"
                style={{
                  //backgroundColor: "#1e2633",
                  display: "flex",

                  background: "transparent",
                }}>
                <img
                  className="my-1"
                  alt="coin"
                  src={setting}
                  style={{
                    height: "25px",
                    width: "25px",
                    marginRight: "10px",
                  }}
                />
                <h5
                  style={{
                    textAlign: "left",
                    paddingRight: "30px",
                  }}
                  className="mx-1 my-1 text-light">
                  {"Polygon"}
                </h5>

                <ChevronDown
                  style={{
                    textAlign: "left",
                  }}
                  className="mx-1 my-1 "
                  color={"#6b85ad"}
                  size={25}
                />
              </div>
            </div>
            <div className="col-1 mx-2">
              <ArrowRightShort
                style={{
                  marginTop: "20px",
                  marginLeft: "-5px",
                }}
                color={"lightblue"}
                size={30}></ArrowRightShort>
            </div>
            <div
              style={{
                //glassmorphism
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                // border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              }}
              className="col-5 ">
              <h5
                className="my-2"
                style={{
                  textAlign: "left",
                  color: "#94a3b8",
                }}>
                To
              </h5>
              <div
                className="my-2"
                style={{
                  //backgroundColor: "#1e2633",
                  display: "flex",

                  background: "transparent",
                }}>
                <img
                  className="my-1"
                  alt="coin"
                  src={setting}
                  style={{
                    height: "25px",
                    width: "25px",
                    marginRight: "10px",
                  }}
                />
                <h5
                  style={{
                    textAlign: "left",
                    paddingRight: "30px",
                  }}
                  className="mx-1 my-1 text-light">
                  {"Polygon"}
                </h5>

                <ChevronDown
                  style={{
                    textAlign: "left",
                  }}
                  className="mx-1 my-1 "
                  color={"#6b85ad"}
                  size={25}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
