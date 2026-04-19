import styled from "styled-components";

const MapWrapper = styled("div")`
  height: ${props => props.$height};
  position: relative;
  width: ${props => props.$width};

  .leaflet-container {
    height: 100%;
    width: 100%;
  }
`;

export const Styles = {
  MapWrapper,
};