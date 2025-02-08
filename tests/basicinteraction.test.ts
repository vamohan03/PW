import { expect, test } from "@playwright/test"

/*test("Test with interaction", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const messageInput = page.locator("input#user-message")
    await messageInput.scrollIntoViewIfNeeded()
    console.log(await messageInput.getAttribute("placeholder"))
    expect(messageInput).toHaveAttribute("placeholder","Please enter your Message")
    console.log('Before entering data' + await messageInput.inputValue())
    await messageInput.type('Hi Vamshi')
    console.log('After entering data' + await messageInput.inputValue())
    
}) */

test("Sum", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const num1input = page.locator("#sum1")
    const num2input = page.locator("#sum2")
    const getSumbtn = page.locator("//button[normalize-space(text())='Get Sum']")

    let num1 = 121
    let num2 = 434
    await num1input.type('' + num1)
    await num2input.type('' + num2)
    await getSumbtn.click()

    const result = page.locator("#addmessage")
    console.log(await result.textContent())
    let expectedResult = num1 + num2;
    expect(result).toHaveText('' + expectedResult)

})

test.only("Checkbox", async({page})=> {

    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    const singleCheckbox = page.locator("#isAgeSelected")
    expect(singleCheckbox).not.toBeChecked()
    await singleCheckbox.check()
    expect(singleCheckbox).toBeChecked()
})