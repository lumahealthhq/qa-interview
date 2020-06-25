import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ReffearsMainPage extends PageObject {
	
	  public ReffearsMainPage(WebDriver driver) {
		super(driver);
	}

	@FindBy(tagName = "h6")
	    private static WebElement header;


	    public static String confirmationHeader(){
	        return header.getText();
	    }
	    
	   
		 
		
		
			

}