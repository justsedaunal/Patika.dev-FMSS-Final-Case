const { remote } = require('webdriverio');

let driver;

before(async () => {
  driver = await remote({
    port: 4723,
    capabilities: {
      platformName: "Android",
      platformVersion: "11.0",
      deviceName: "Android Emulator",
      app: "/path/to/your/app.apk",
      automationName: "UiAutomator2"
    }
  });
});

describe('Car Rental App Test - Sign Up', () => {
  it('should successfully sign up', async () => {

    const signUpBtn = await driver.$('~btn_sign_up');
    await signUpBtn.click();

    const usernameInput = await driver.$('~input_sign_up_username');
    await usernameInput.setValue('newuser');

    const emailInput = await driver.$('~input_sign_up_email');
    await emailInput.setValue('newuser@example.com');

    const passwordInput = await driver.$('~input_sign_up_password');
    await passwordInput.setValue('password123');

    const confirmPasswordInput = await driver.$('~input_confirm_password');
    await confirmPasswordInput.setValue('password123');

    const submitSignUpBtn = await driver.$('~btn_submit_sign_up');
    await submitSignUpBtn.click();

    const welcomePageView = await driver.$('~view_welcome_page');
    await expect(welcomePageView).toBeDisplayed();  
  });
});

after(async () => {
  await driver.deleteSession();
});
