package com.dominos.pages;

import com.dominos.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class IniciarPedido extends com.dominos.pages.BasePage {


    @FindBy(css = "#IdProvinciaSeleccionada")
    public WebElement SelecionaProvincia;
    @FindBy(css = "#IdLocalidadSeleccionada")
    public WebElement SelecionaLocalidad;
    @FindBy(className = "ui-autocomplete-input error")
    public WebElement SelecionaCalle;

    @FindBy(css = "#Direccion_NumeroPortal")
    public WebElement SelecionaNum;

}