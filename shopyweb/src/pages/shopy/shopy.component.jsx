import React from "react";
import SHOP_DATA from "./shopydata.js";

class ShopyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { collection: SHOP_DATA };
  }
  render() {
    return <div>SHOPY PAGE</div>;
  }
}

export default ShopyPage;
