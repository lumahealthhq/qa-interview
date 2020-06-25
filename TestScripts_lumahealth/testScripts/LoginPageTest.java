
import static org.junit.Assert.assertEquals;


import org.junit.Test;

/**
 * LoginPageTest handles a test script for login
 * @author Nadia Fornaro
 * To run this test script click on Run -> Run as -> JUnit Test
 */

public class LoginPageTest extends FunctionalTest {
	

    @Test
    public void LoginPage(){
    	
    	//Open Luma Health page
        driver.get("https://next.lumahealthstaging.com/login");
        LoginPage login = new LoginPage(driver);
        
        // Input Login credencials
        login.enterLogin("marcelo+qainterview@lumahealth.io", "Lumaqainterview2020!");
        
        //Click on Sign in button
        LumaHealthMainPage mainpage = LoginPage.submit();
     
        assertEquals("Filter Activity", LumaHealthMainPage.confirmationHeader());
       
        
    }


}
