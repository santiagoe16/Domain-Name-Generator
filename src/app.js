/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let domainNames = [];

// Recorre cada pronombre
for (let i = 0; i < pronoun.length; i++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      let domain = pronoun[i] + adj[a] + noun[n];
      domainNames.push(domain + ".com");
    }
  }
}

// Imprime los nombres de dominio generados
domainNames.forEach(domain => {
  console.log(domain);
});
