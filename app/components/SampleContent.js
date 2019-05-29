import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import SampleActionCreators from "../actions/SampleActionCreators";

const SampleContent = ({ title, subtitle, text }) => {
  const handleClick = () => {
    SampleActionCreators.actionCreator001();
  };

  return (
    <div>
      <div style={{ padding: 32 }}>
        <div
          style={{
            fontWeight: 900,
            fontSize: 48
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontWeight: 300,
            fontSize: 24
          }}
        >
          {subtitle}
        </div>
        <div style={{ fontFamily: "Merriweather", padding: "40px 0" }}>
          {text}
        </div>
        <Button
          variant="contained"
          style={{ backgroundColor: "black", color: "white" }}
          size="large"
          onClick={handleClick}
        >
          Try Flux
        </Button>
      </div>
    </div>
  );
};

SampleContent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default SampleContent;
