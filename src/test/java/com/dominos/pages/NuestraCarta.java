package com.dominos.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class NuestraCarta extends com.dominos.pages.BasePage {





    @FindBy(linkText = "Pizzas")

    public WebElement Pizzas;

    @FindBy(linkText = "Entrantes")

    public WebElement Entrantes;

    @FindBy(xpath = "//a[contains(text(),'Postres')]")

    public WebElement Postres;

    @FindBy (xpath = "//a[contains(text(),'Bebidas')]")
    public WebElement Bebidas;




}
