@anchoa
Feature: Creatupizza

  Background:  Given Go to Url


  Scenario Outline:  Create Your pizza
    Given click"Crea tu pizza"
    When Select  "<Pizza Size>" ,"<Type Bread>",
  And Add "<Salsa>","<Ingredients>"
    Then click "Añadir"


   Examples:
     | Pizza Size |Type Bread|   Ingredients      |   Salsa           |
     | Mediana    | Pan      |        Anchoas     |   Sin Salsa        |
     | Mediana    | Orginal  |        Anchoas     |   Salsa de Tomate |
     | Mediana    | Finizzima|        Anchoas     |     Crema Fresca  |



