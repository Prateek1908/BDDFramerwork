$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/OrderConfirmation.feature");
formatter.feature({
  "line": 1,
  "name": "Order Confirmation",
  "description": "",
  "id": "order-confirmation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12718389800,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Verify order confirmation page and order successful",
  "description": "",
  "id": "order-confirmation;verify-order-confirmation-page-and-order-successful",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I open automationpractice website",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "I sign in",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I select a dress and proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I verify details on shoppingCart summary page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I verify address and proceed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify shipping details and proceed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify payment details page and proceed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify order summary page and proceed",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify order confirmation page details and verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_open_automationpractice_website()"
});
formatter.result({
  "duration": 13184774000,
  "status": "passed"
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_sign_in()"
});
formatter.result({
  "duration": 24232906300,
  "status": "passed"
});
formatter.match({
  "location": "SelectCheckoutSteps.i_select_a_dress_and_proceed_to_checkout()"
});
formatter.result({
  "duration": 15841409200,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSummarySteps.i_verify_details_on_shoppingCart_summary_page()"
});
formatter.result({
  "duration": 2994968900,
  "status": "passed"
});
formatter.match({
  "location": "AddressSteps.i_verify_address_and_proceed()"
});
formatter.result({
  "duration": 202001300,
  "error_message": "java.lang.AssertionError: expected:\u003cADDRESSES\u003e but was:\u003cAUTHENTICATION\u003e\r\n\tat org.testng.AssertJUnit.assertEquals(AssertJUnit.java:101)\r\n\tat org.testng.AssertJUnit.assertEquals(AssertJUnit.java:108)\r\n\tat modules.VerifyAddressProceed.Execute(VerifyAddressProceed.java:11)\r\n\tat step_definitions.AddressSteps.i_verify_address_and_proceed(AddressSteps.java:29)\r\n\tat ✽.And I verify address and proceed(features/OrderConfirmation.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShippingSteps.i_verify_shipping_details_and_proceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PaymentSteps.i_verify_payment_details_page_and_proceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSummarySteps.i_verify_order_summary_page_and_proceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderConfirmationSteps.i_verify_order_confirmation_page_details_and_verify_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is http://automationpractice.com/index.php?controller\u003dauthentication\u0026multi-shipping\u003d0\u0026display_guest_checkout\u003d0\u0026back\u003dhttp%3A%2F%2Fautomationpractice.com%2Findex.php%3Fcontroller%3Dorder%26step%3D1%26multi-shipping%3D0");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2106487700,
  "status": "passed"
});
});