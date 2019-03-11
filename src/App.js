import React from "react";
import Titles from "./components/Titles"

//initialise a componet
class App extends React.Component {
  render(){
    return (
        <div>
          <Titles />
        </div>
    );
  }
}

//make componet available for other files to import
export default App;