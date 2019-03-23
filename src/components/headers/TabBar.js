import React from "react";
import styled from "styled-components";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";

const StyledTabs = styled(Tabs)`
  background-color: #fff;
  z-index: 11;
  position: -webkit-sticky;
  position: sticky;
  top: 125px;
  margin-bottom: 30px;
  stroke-linecap: round;
`;
const TabStyle = theme => ({
  /* Styles applied to the root element. */
  indicator: {
    top: 0,
    height: 4,
    borderRadius: 2 
  }
});
const TabsStyled = withStyles(TabStyle)(StyledTabs);

const CenteredTabs = ({ currValue, headers, handleChange }) => (
  <TabsStyled
    value={currValue}
    // onChange={(event, currValue) => handleChange(currValue)}
    indicatorColor="primary"
    centered
  >
    {(headers || []).map((text, index) => (
      <Tab key={text} label={<strong>{text}</strong>} />
    ))}
  </TabsStyled>
);

export default CenteredTabs;