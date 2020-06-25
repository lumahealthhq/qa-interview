import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

	/**
	 * LoginPage handles setup of Login in Luma Health.
	 * @author Nadia Fornaro
	 */
	
	public class LoginPage extends PageObject {
		
		public LoginPage(WebDriver driver) {
			super(driver);
				 
		}
	
		@FindBy(name="email")
		private WebElement email;
		
		@FindBy(name="password")
		private WebElement password;
	
		@FindBy(className="jss223")
		private static WebElement submitButton;
		
		@FindBy(className="jss397")
	    private static WebElement add;
			
		
		public void enterLogin(String email, String password){
			this.email.clear();
			this.email.sendKeys(email);

			this.password.clear();
			this.password.sendKeys(password);
		}
		
		public void enterReferral(){
			this.add.click();
		}
		
		 public static LumaHealthMainPage submit(){
	    	 submitButton.click();
			return new LumaHealthMainPage(driver);
		}
		 
		 public static LumaHealthMainPage gotoRefferal(){
	    	 add.click();
			return new LumaHealthMainPage(driver);
		}
		 
		 public boolean isInitialized() {
				return email.isDisplayed();
			}

	
	}

