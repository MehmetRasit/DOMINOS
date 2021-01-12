package com.dominos.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Promociones {

    @FindBy(linkText = "Promociones")

    public WebElement Promociones;

    @FindBy(className = "select-selected")

    public WebElement select;




}
