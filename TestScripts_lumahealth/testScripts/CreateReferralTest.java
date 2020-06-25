
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;


/**
 * LoginPage handles the creation of a Referral in Luma Health.
 * @author Nadia Fornaro
 */


public class CreateReferralTest extends FunctionalTest{
	
    @Test
	public void CreateRefferal() {
 	
    	//Open Luma Health page
        driver.get("https://next.lumahealth.io/referrals");

        // Input Login credencials
        LoginPage login = new LoginPage(driver);
        assertTrue(login.isInitialized()); //verify if login has the right content
        
        login.enterLogin("marcelo+qainterview@lumahealth.io", "Lumaqainterview2020!");
        
        //Click on Sign in button
        LumaHealthMainPage mainpage = LoginPage.submit();  
        
        ReferralsPage referral = new ReferralsPage(driver);
        
        referral.addReferral();
        
        //Sending Form Inputs

        driver.findElement(By.name("")).click();
        driver.findElement(By.name("")).sendKeys("Nadia Fornaro");        
        
        driver.findElement(By.name("patientValues.dateOfBirth")).click();
        driver.findElement(By.name("patientValues.dateOfBirth")).sendKeys("12141987"); 
        
        driver.findElement(By.name("patientValues.contact[0].value")).click();
        driver.findElement(By.name("patientValues.contact[0].value")).sendKeys("4155552671"); 
        
  
        driver.findElement(By.id("react-select-4--value")).click();
        driver.findElement(By.className("Select-menu-outer")).click();;
        
        driver.findElement(By.id("react-select-9--value")).click();
        driver.findElement(By.xpath("//*[text() = 'Bob Smith']")).click();
      
        //Look for Save and click on it
        driver.findElement(By.xpath("//*[text() = 'Save']")).click();
        
        //Referrals page is displayed and Referral is created
        assertEquals("", LumaHealthMainPage.confirmationHeader());
       
	}

}
