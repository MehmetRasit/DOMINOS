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
formatter.scenarioOutline({
  "name": "Create Your pizza",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "click\"Crea tu pizza\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Select  \"\u003cPizza Size\u003e\" ,\"\u003cType Bread\u003e\",",
  "keyword": "When "
});
formatter.step({
  "name": "Add \"\u003cSalsa\u003e\",\"\u003cIngredients\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click \"Añadir\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Pizza Size",
        "Type Bread",
        "Ingredients",
        "Salsa"
      ]
    },
    {
      "cells": [
        "Mediana",
        "Pan",
        "Anchoas",
        "Sin Salsa"
      ]
    },
    {
      "cells": [
        "Mediana",
        "Orginal",
        "Anchoas",
        "Salsa de Tomate"
      ]
    },
    {
      "cells": [
        "Mediana",
        "Finizzima",
        "Anchoas",
        "Crema Fresca"
      ]
    }
  ]
});
formatter.background({
  "name": "Given Go to Url",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Create Your pizza",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@anchoa"
    }
  ]
});
formatter.step({
  "name": "click\"Crea tu pizza\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.dominos.step_definitions.Creatupizza_Step_def.click_Crea_tu_pizza()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select  \"Mediana\" ,\"Pan\",",
  "keyword": "When "
});
formatter.match({
  "location": "com.dominos.step_definitions.Creatupizza_Step_def.select(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Add \"Sin Salsa\",\"Anchoas\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click \"Añadir\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.dominos.step_definitions.Creatupizza_Step_def.click(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Given Go to Url",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Create Your pizza",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@anchoa"
    }
  ]
});
formatter.step({
  "name": "click\"Crea tu pizza\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.dominos.step_definitions.Creatupizza_Step_def.click_Crea_tu_pizza()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select  \"Mediana\" ,\"Orginal\",",
  "keyword": "When "
});
formatter.match({
  "location": "com.dominos.step_definitions.Creatupizza_Step_def.select(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Add \"Salsa de Tomate\",\"Anchoas\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click \"Añadir\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.dominos.step_definitions.Creatupizza_Step_def.click(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Given Go to Url",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Create Your pizza",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@anchoa"
    }
  ]
});
formatter.step({
  "name": "click\"Crea tu pizza\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.dominos.step_definitions.Creatupizza_Step_def.click_Crea_tu_pizza()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select  \"Mediana\" ,\"Finizzima\",",
  "keyword": "When "
});
formatter.match({
  "location": "com.dominos.step_definitions.Creatupizza_Step_def.select(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Add \"Crema Fresca\",\"Anchoas\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click \"Añadir\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.dominos.step_definitions.Creatupizza_Step_def.click(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
});