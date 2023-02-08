import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "../img/eproduct.jpg";
import "./offers.css";

const data = [
  {
    img: { Image },
    titel: "Get flat 12% Off",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ut labore et dolore.",
    coupen: "GOS1210",
  },
  {
    img: { Image },
    titel: "Get flat 12% Off",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ut labore et dolore.",
    coupen: "GOS1210",
  },
  {
    img: { Image },
    titel: "Get flat 12% Off",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ut labore et dolore.",
    coupen: "GOS1210",
  },
];

function Offers() {
  return (
    <>
      <div className="d-flex justify-content-between pb-4 title">
        <div className="offer-titel">
          <span>
          <i class="fa-regular fa-star"></i>
          </span>
          Gos offers for you
        </div>
        <a className="view-all">
          View All
          <span className="view-all">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </a>
      </div>
      <div className="d-flex justify-content-between gap-3">
        {data.map((val, i) => {
          return (
            <div className="card mb-4" style={{ maxWidth: "540px" }} key={i}>
              <div className="row g-0">
                <div className="col-md-6 image">
                  <img
                    src={Image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-6 text-left">
                  <div className="card-body">
                    <h5 className="card-title">{val.titel}</h5>
                    <p className="card-text">{val.desc}</p>
                  </div>
                </div>
                <div className="card-text">
                  <div className="text-muted row">
                    <span className="code col-md-4 col-sm-12">Copy Code :</span>
                    <span className="coup col-md-4 col-sm-12">
                      {val.coupen}
                    </span>
                    <span className="col-md-4 col-sm-12">
                      <i className="fa-solid fa-clone"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Offers;
