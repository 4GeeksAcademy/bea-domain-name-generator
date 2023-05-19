/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  const selectedPronoun = pronoun[getRandomInt(pronoun.length)];
  const selectedAdj = adj[getRandomInt(adj.length)];
  const selectedNoun = noun[getRandomInt(noun.length)];

  const domainName = `${selectedPronoun}${selectedAdj}${selectedNoun}.com`;

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  console.log(domainName);
};
