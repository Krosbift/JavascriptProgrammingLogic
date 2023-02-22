'use strict'

// information of the graph to be traversed
const graph = [
  { node: "hotel", edge: ["ecological reserve","science museum","carhedral"] },
  { node: "ecological reserve", edge: ["hotel","aqyarium","park"] },
  { node: "park", edge: ["ecological reserve","noria"] },
  { node: "noria", edge: ["park","toy store","wax museum"] },
  { node: "toy store", edge: ["noria","ferry","science museum"] },
  { node: "science museum", edge: ["hotel","toy store"] },
  { node: "cathedral", edge: ["hotel","castle","aquarium"] },
  { node: "castle", edge: ["cathedral","ferry"] },
  { node: "aquarium", edge: ["exological reserve","art gallery","cathedral"] },
  { node: "art gallery", edge: ["wax museum","aquarium"] },
  { node: "wax museum", edge: ["art gallery","noria","ferry"] },
  { node: "ferry", edge: ["wax museum","castle","toy store"]
}];

// save initial position
let position = "";

// keep all the way
let path = [""];

// is in charge of choosing the path to take
const searchPath = (arrayPost, posCurrent) => {
  //

  // 
  if (condition) {
    //
    
  } else {
    //

  }
}

// is responsible for finding the position in which we are
const searchPosition = (posCurrent) => {
  // searching posible routes
  for (let i = 0; i < graph.length; i++) {
    // stores the search position of this operation and checks if it matches the current position
    let searchCurrentPosition = graph[i].node === posCurrent;
    // the cycle ends when the position is found
    if (!searchCurrentPosition) {
      // cycle end
      searchPath(i, posCurrent);
      return false;
    }
  }
}

// defines the end of the path
const end = (posCurrent) => {
  if (path.length != 12 && posCurrent === position) {
    // continue with the next path
    return true;
  } else {
    // end of path
    return false;
  }
}

// is in charge of managing the control for the search of a route
const directing = (posCurrent) => {
  // determine the end
  if (end(posCurrent)) {
    // continue
    searchPosition(posCurrent);
  }
}

// function for the execution execution of the program
function central(stay) {
  // defining the starting point
  position = stay;
  console.log(`the route we take as a starting point and arrival point is the ${stay}`);
  // adding that exit point to the path
  path = path.push(stay);
  // starting the search for the best route
  directing(position);
}

central("hotel");