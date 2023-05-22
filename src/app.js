/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  const dotCom = ".com";

  //FORMA 1 - MAPS
  const domainNameMap = (pronouns, adjs, nouns) => {
    pronouns.map(pronoun =>
      adjs.map(adj =>
        nouns.map(noun => console.log(`${pronoun}${adj}${noun}${dotCom}`))
      )
    );
  };
  console.log("MAP:", domainNameMap(pronoun, adj, noun));

  //FORMA 2 - BUCLE FOR
  const domainNameFor = (pronouns, adjs, nouns) => {
    let generatedDomains = [];

    for (let i = 0; i < pronouns.length; i++) {
      for (let j = 0; j < adjs.length; j++) {
        for (let k = 0; k < nouns.length; k++) {
          generatedDomains.push(`${pronouns[i]}${adjs[j]}${nouns[k]}${dotCom}`);
        }
      }
    }
    return generatedDomains;
  };

  let domains = domainNameFor(pronoun, adj, noun).join("\n");

  console.log("FOR", domains);
};
