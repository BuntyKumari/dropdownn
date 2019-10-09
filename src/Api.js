import React, { Component } from "react";
import Dropdown from "./Dropdown";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      selectedOption1: {},
      selectedOption2: {},
      selectedOption1: {}
    };
  }

  componentDidMount() {
    const url =
      "http://s3.ap-south-1.amazonaws.com/ypui-resources/InterviewQns/Products.json";

    fetch(url)
      .then(result => result.json())
      .then(data => {
        //console.log("data", data);
        // console.log("selectedoption1",data.Id)
        this.setState({
          data: data
        });
      });
  }

 dataManupulate(){
   
 }

  render() {
    const { data } = this.state;
    let products = [];
    let bands = [];
    let subbands =[];
    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    };
    for (let i = 0; i < data.length; i++) {
      var id = data ? data[i].Id:"";
      var product = data ? data[i].Productid.name : "";
    console.log("Id",id);

      var band = data ? data[i].Band.val : "";
      var subband = data ? data[i].Subband.val: "";
      products.push(product);
      bands.push(band);
      subbands.push(subband);
    }
    const productNames = products.filter(unique);
    const BandValues = bands.filter(unique);
    const subbandValues = subbands.filter(unique);
    // console.log(productNames);
    // console.log("Bands",BandValues)
    // console.log("Subbands",subbandValues)
    return (
      <div>
        <Dropdown
          productName={productNames}
          productTitle={"Products"}
          band={BandValues}
          bandTitle={"Bands"}
          subBand={subbandValues}
          subTitle={"Sub Bands"}
        />
      </div>
    );
  }
}

export default App;
