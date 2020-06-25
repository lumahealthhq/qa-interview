import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ReferralsPage extends LoginPage {
	

	public ReferralsPage(WebDriver driver) {
		super(driver);
		
	}
	
	 public static String confirmationHeaderReferral(){	    	
	        return header.getText();
	    }	  
		 
	 	@FindBy(tagName = "h6")
	    private static WebElement header;
	 
	 	@FindBy(css="button.jss356.jss396.jss407.jss408.jss410.jss411")
		private static WebElement referralbutton;
	 
	 	@FindBy(name= "")
		private WebElement firstname;
		
		@FindBy(name="patientValues.dateOfBirth")
		private WebElement date;
	
		@FindBy(name="patientValues.contact[0].value")
		private static WebElement phonenumber;
		
		@FindBy(className="Select-placeholder")
	    private static WebElement facility;
		
		@FindBy(className="Select-placeholder")
	    private static WebElement save;
		
		
		
		public void enterUserInformation(String firstname, String date, String phonenumber, String facility){
			this.firstname.click();
			this.firstname.sendKeys(firstname);
			this.date.click();
			this.date.sendKeys(date);	
			ReferralsPage.phonenumber.sendKeys(phonenumber);
			ReferralsPage.facility.click();
			ReferralsPage.facility.sendKeys();
			
		}
		
		 public static ReferralsPage save(){
			 save.click();
			return new ReferralsPage(driver);
		}
	 
	 	
		 public static ReferralsPage addReferral(){
			 referralbutton.click();
		return new ReferralsPage(driver);
		 }
		 



	     
	    
}
