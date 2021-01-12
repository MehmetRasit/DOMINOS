package com.dominos.pages;

import com.dominos.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class Promociones {
    public Promociones(){ PageFactory.initElements(Driver.get(), this);
    }
    @FindBy(linkText = "Promociones")

    public WebElement Promociones;

    @FindBy(className = "select-selected")

    public WebElement select;

    public Select selectOptionsList(){
        return new Select(select);
    }


}
