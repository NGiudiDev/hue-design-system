import styled from "styled-components";

const MarkersListPanel = styled("div")((props) => `
  background-color: ${props.theme.colors.white.surface};
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: calc(100% - 16px);
  margin: 8px;
  position: absolute;
  right: 0;
  top: 0;
  width: 220px;
  z-index: 1000;
`);

const MarkersList = styled("div")(() => `
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`);

export const Styles = {
  MarkersListPanel,
  MarkersList,
};