import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LumaHealthMainPage extends PageObject {
	
	  @FindBy(tagName = "h6")
	    private static WebElement header;

	    public LumaHealthMainPage(WebDriver driver) {
	        super(driver);
	    }

	    public static String confirmationHeader(){
	        return header.getText();
	    }
	    
	   
		 
		
		
			

}
