import React from "react";
import PropTypes from "prop-types";

export const RoomCard = ({
  currencySymbol,
  pricePerMonth,
  photoUrls,
  title
}) => {
  return (
    <article className="my-3 p-4 border">
      <div className="row">
        <div className="col-md-3 mb-2 mb-md-0">
          <img
            src={photoUrls.homecardHidpi}
            alt={title}
            className="hover w-100"
          />
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-9 col-lg-10">
              <p className="font-weight-normal font-italic d-inline-block">
                {title}
              </p>
            </div>
            <div className="col-12 col-md-auto ml-auto mr-0 text-right">
              <span className="badge-price">
                {pricePerMonth + currencySymbol}
              </span>
            </div>
          </div>
          <div className="action-buttons-gap"></div>
          <div className="action-buttons-wrap">
            <button className="btn second-color d-none d-md-inline-block mr-3">
              More details
            </button>
            <button className="btn first-color">Book now!</button>
          </div>
        </div>
      </div>
    </article>
  );
};

RoomCard.propTypes = {
  currencySymbol: PropTypes.string.isRequired,
  pricePerMonth: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  photoUrls: PropTypes.shape({
    homecardHidpi: PropTypes.string.isRequired
  }).isRequired
};
