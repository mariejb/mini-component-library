/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--borderRadius": "4px",
  },
  medium: {
    "--height": "12px",
    "--borderRadius": "4px",
  },
  large: {
    "--height": "16px",
    "--borderRadius": "8px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <BarContainer
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={styles}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      {/* Bar wrapper (for rounded corners) */}
      <BarWrapper>
        {/* Actual progress bar */}
        <Bar style={{ ...styles, "--width": value + "%" }} />
      </BarWrapper>
    </BarContainer>
  );
};

const BarContainer = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  padding: var(--padding);
  border-radius: var(--borderRadius);
`;

const BarWrapper = styled.div`
  border-radius: 4px;

  /* Trim off corners when progress bar is almost full */
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};

  height: var(--height);
  width: var(--width);
`;

export default ProgressBar;
