package step_definitions;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;

import com.cucumber.listener.Reporter;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	public static WebDriver driver;

	@Before
	/**
	 * Delete all cookies at the start of each scenario to avoid shared state
	 * between tests
	 */
	public void openBrowser() throws MalformedURLException {
		System.out.println("Called openBrowser");
		System.setProperty("webdriver.chrome.driver",
				new File(System.getProperty("user.dir")) + "\\src\\test\\resources\\executables\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
	}

	public void beforeScenario(Scenario scenario) {
		Reporter.assignAuthor("QA Automation Engineer");
	}

	@After(order = 1)
	/**
	 * Embed a screenshot in test report if test is marked as failed
	 */
	public void embedScreenshot(Scenario scenario) throws IOException {

		if (scenario.isFailed()) {
			String screenShotName = scenario.getName().replaceAll(" ", "_");
			try {
				scenario.write("Current Page URL is " + driver.getCurrentUrl());
				File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
				File dest = new File(System.getProperty("user.dir") + "/target/cucumber-reports/screenshots/" + screenShotName + ".png");
				FileUtils.copyFile(src, dest);
				Reporter.addScreenCaptureFromPath(dest.toString(), "Failed Screenshot");
			} catch (WebDriverException somePlatformsDontSupportScreenshots) {
				System.err.println(somePlatformsDontSupportScreenshots.getMessage());
			}

		}
	}
	@After(order = 0)
	public void AfterSteps() {
		driver.quit();
	}
}