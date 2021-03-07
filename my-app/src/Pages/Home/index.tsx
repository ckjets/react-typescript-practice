import React from "react";
import { Link } from "react-router-dom";
import {  StyledButton } from "../../Components/Atoms/Button/index"
import Button from '@material-ui/core/Button';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: 110,
          }}
        >
          <Link to="/">Home</Link>
          {/* <Link to="/about">About</Link> */}
          <Link to="/demo">demo</Link>
        </div>
        <h1>Home</h1>
        <StyledButton color="primary">
        Hello World
        </StyledButton>
        <Button>
        Hello World
        </Button>
      </div>
    );
  }
}

export default Home;