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

describe('Car Rental App Test - Sign Up and Logout', () => {
  it('should successfully sign up and log out', async () => {

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
    await expect(welcomePageView).toBeDisplayed();  // Verifying if the welcome page is displayed after sign-up.

    const profileBtn = await driver.$('~btn_profile');
    await profileBtn.click();

    const logoutBtn = await driver.$('~btn_logout');
    await logoutBtn.click();

    const loginPageView = await driver.$('~view_login_page');
    await expect(loginPageView).toBeDisplayed();  // Verifying if it redirects to the login page after logging out.
  });
});

after(async () => {
  await driver.deleteSession();
});
