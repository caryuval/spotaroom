import React from "react";
import PropTypes from "prop-types";

const Nav = ({ brand, routes }) => (
  <nav>
    <div className="container-fluid">
      <div className="row mt-2 mx-2">
        <div className="col-sm-auto">
          <a href={brand.url}>{brand.name}</a>
        </div>
        <div className="row align-items-center mr-0 ml-auto d-none d-md-flex">
          {routes.map((route, index, array) => (
            <React.Fragment key={route.url}>
              <div className="col-sm-auto">
                <a href={route.url}>{route.name}</a>
              </div>
              <TabSeparation
                length={array.length}
                index={index}
                separationChar="-"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

const TabSeparation = ({ length, index, separationChar }) => {
  const content =
    index === length - 1 ? null : (
      <div className="col-sm-auto text-center p-0">{separationChar}</div>
    );
  return content;
};

Nav.propTypes = {
  brand: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

export default Nav;
