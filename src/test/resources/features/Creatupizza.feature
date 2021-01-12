@anchoa
Feature: Creatupizza
  Scenario: Create Your pizza mediana with anchoas without salsa
    Given Go to Url
And Click Creatupizza module
When Select Pizza Tamanio Mediana
    And Select  "Pan" in Masa
    And Select  Sin Salsa
    And Add Anchoa for your Pizza

Then Click Add button




