import React from "react";
import ReactDOM from "react-dom";
import Pet from "./pet"
import pf from "petfinder-client";

  // under imports
  const petfinder = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
  });
class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      pets: []
    };
  }
  // replace cDM
  componentDidMount() {
    petfinder.pet
      .find({ location: "Seattle, WA", output: "full" })
      .then(data => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = []
        }
        this.setState({
          pets
        });
      });
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        // inside render, under h1
       <pre>
         <code>{JSON.stringify(this.state, null, 2)}</code>
       </pre>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));