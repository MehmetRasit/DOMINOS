$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Creatupizza.feature");
formatter.feature({
  "name": "Creatupizza",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@anchoa"
    }
  ]
});
formatter.scenario({
  "name": "Create Your pizza mediana with anchoas without salsa",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@anchoa"
    }
  ]
});
formatter.step({
  "name": "Go to Url",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Click Creatupizza module",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Select Pizza Tamanio Mediana",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Select  \"Pan\" in Masa",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Select  Sin Salsa",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Add Anchoa for your Pizza",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Click Add button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});