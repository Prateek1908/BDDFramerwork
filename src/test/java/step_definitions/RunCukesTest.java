package step_definitions;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import com.cucumber.listener.Reporter;
import java.io.File;

@RunWith(Cucumber.class)
@CucumberOptions(features = "classpath:features", plugin = {
		"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html" }, monochrome = true)
public class RunCukesTest {
	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(
				new File(System.getProperty("user.dir")) + "//src//test//java//helpers//extent-config.xml");
		Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
		Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
		Reporter.setSystemInfo("Machine", "Windows 10" + "64 Bit");
		Reporter.setSystemInfo("Selenium", "2.44.0");
		Reporter.setSystemInfo("Maven", "3.3.7");
		Reporter.setSystemInfo("Java Version", "11.0.1");
	}
}