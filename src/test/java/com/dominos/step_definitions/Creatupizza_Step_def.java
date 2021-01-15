package com.dominos.step_definitions;

import com.dominos.utilities.ConfigurationReader;
import com.dominos.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Creatupizza_Step_def {
    @Given("Go to Url")
    public void go_to_Url() {
        Driver.get().get(ConfigurationReader.get("url"));
    }
    @Given("click\"Crea tu pizza\"")
    public void click_Crea_tu_pizza() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("Select  {string} ,{string},")
    public void select(String PizzaSize, String TypeBread) {
        System.out.printf("");
    }
    @When("Add {string},{string}")
    public void add(String salsa, String Ingredients) {
        System.out.printf("");
    }

    @Then("click {string}")
    public void click(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

}


