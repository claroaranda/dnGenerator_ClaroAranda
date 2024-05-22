/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net", ".us", ".io"];

  function buildDN(extDN) {
    let outputDN = [];

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          outputDN.push(pronoun[i] + adj[j] + noun[k] + extDN);
        }
      }
    }

    return outputDN;
  }

  function buildDIV(extension) {
    let dn = buildDN(extension);
    let outputDIV = `<div style="box-shadow: 3px 5px 20px #312f2f; background-color: white; width: 300px; height: 300px; margin: 10px auto;">
          <p>
            <h4 style="text-align: center">${extension} options</h4>
            <ul>`;

    for (let i = 0; i < dn.length; i++) {
      outputDIV += `<li>${dn[i]}</li>`;
    }

    outputDIV += "</ul></p></div>";
    return outputDIV;
  }

  function buildHTML() {
    let outputHTML = `<div style="display: flex;">`;

    for (let i = 0; i < ext.length; i++) {
      outputHTML += buildDIV(ext[i]);
    }

    outputHTML += `</div>`;
    return outputHTML;
  }

  const element = document.getElementById("dnGenerator");
  element.innerHTML = buildHTML();
};
