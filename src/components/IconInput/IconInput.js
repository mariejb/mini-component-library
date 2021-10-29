import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    nativeInputStyles: {
      "--borderWidth": "1px",
      "--height": `${24 / 16}rem`,
      "--fontSize": `${14 / 16}rem`,
    },
    iconSize: 16,
  },
  large: {
    nativeInputStyles: {
      "--borderWidth": "2px",
      "--height": `${36 / 16}rem`,
      "--fontSize": `${18 / 16}rem`,
    },
    iconSize: 24,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Invalid size: ${size}`);
  }

  const { nativeInputStyles, iconSize } = styles;

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <NativeInput
        type="text"
        placeholder={placeholder}
        style={{ "--width": width + "px", ...nativeInputStyles }}
      />
      <IconWrapper style={{ "--size": iconSize + "px" }}>
        <Icon id={icon} size={iconSize} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  width: max-content;

  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeInput = styled.input`
  font-weight: 700;
  border: transparent;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  color: inherit;

  font-size: var(--fontSize);
  padding-left: var(--height);
  height: var(--height);
  width: var(--width);

  &:focus {
    outline-offset: 2px;
  }

  &::placeholder {
    font-weight: initial;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
`;

export default IconInput;
