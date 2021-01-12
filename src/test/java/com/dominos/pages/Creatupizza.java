package com.dominos.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Creatupizza extends com.dominos.pages.BasePage {

   @FindBy(xpath = "//select[@id='selectTamanioDet']")
    WebElement Tamanio;


    @FindBy(xpath = "//select[@id='selectMasaDet']")
    WebElement Masa;

    @FindBy(xpath = "//select[@id='selectCantidad-relacionado']")
    WebElement extra;


    @FindBy(className = "ico ico-circle-white inc-plus")
    WebElement anchoas;
@FindBy (css = "#PizzaName")
    WebElement pizzaName;

}
