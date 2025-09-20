import React from "react";
import advimg from "../../../src/assets/advertisement.jpeg";

const Advertisement = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "50px" }}>
        <div>
          <h1 className="head-text">Elevate You Travel Brand</h1>
          <h3 className="subhead-text">
            Advertise with Us for Unmatched Reach and Impact
          </h3>
        </div>
        <div className="row">
          <div className="col-sm-7">
            <div className="adv-para">
              <div class="custom-border">01</div>
              <div className="adv-sub-para">
                <h3>Seamless Journeys, Anytime, Anywhere</h3>
                <p>
                  Discover unbeatable flight deals to destinations around the
                  globe. Whether you're planning a quick getaway or a grand
                  adventure, we offer a seamless booking experience with
                  real-time availability and exclusive discounts.
                </p>
              </div>
            </div>
            <div className="adv-para">
              <div class="custom-border">02</div>
              <div className="adv-sub-para">
                <h3>Fly in Comfort, Save in Style</h3>
                <p>
                  Enjoy premium travel experiences without the premium price
                  tag. Our curated selection of airlines ensures comfort and
                  convenience, while our special offers and bundles help you
                  save on every trip.
                </p>
              </div>
            </div>
            <div className="adv-para">
              <div class="custom-border">03</div>
              <div className="adv-sub-para">
                <h3>Expert Guidance, Personalized Service</h3>
                <p>
                  Our dedicated team of travel experts is here to assist you
                  every step of the way. From choosing the best flights to
                  navigating travel options, we provide personalized support to
                  make your journey as smooth as possible.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div>
              <img className="adv-img" src={advimg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Advertisement;
