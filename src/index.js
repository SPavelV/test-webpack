import _ from "lodash";
import "./style.css";
import Apple from "./apple.jpg";
import Data from "./data.xml";

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Apple;
  
  element.appendChild(myIcon);

  console.log(Data);
  
  return element;
}

document.body.appendChild(component());