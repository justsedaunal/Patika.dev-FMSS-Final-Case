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

describe('Car Rental App Test', () => {
  it('should successfully log in and log out', async () => {

    const loginBtn = await driver.$('~btn_login');
    await loginBtn.click();

    const usernameInput = await driver.$('~input_username');
    await usernameInput.setValue('FMSS Software');

    const passwordInput = await driver.$('~input_password');
    await passwordInput.setValue('FmSs1234');

    const submitBtn = await driver.$('~btn_submit');
    await submitBtn.click();

    const dashboardElement = await driver.$('~dashboard_view');
    await expect(dashboardElement).toBeDisplayed();  

    const userProfileBtn = await driver.$('~btn_user_profile');
    await userProfileBtn.click();

    const logoutBtn = await driver.$('~btn_logout');
    await logoutBtn.click();

    const loginPageView = await driver.$('~view_login_page');
    await expect(loginPageView).toBeDisplayed();  
  });
});

after(async () => {
  await driver.deleteSession();
});
