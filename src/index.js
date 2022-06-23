import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import StartRatings from "./StarRatings";

class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>Ratings: </Col>
          <StartRatings />
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
