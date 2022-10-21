//CodeCeptJS Page
const LogInPage_CodeceptJs = require('./pages/LogInPage_CodeceptJs')
Feature('Zero bank Test-E2E')

Before(({I})=>{
    console.log('Before Hook')
    I.amOnPage('http://zero.webappsecurity.com/index.html')
})

After(({I})=>{
    console.log('After Hook') 
})



Scenario('Login-Test -Negative',({I,LogInPage_CodeceptJs})=>{
    // I.amOnPage('http://zero.webappsecurity.com/index.html')
    I.click('#signin_button')
    // I.seeElement('#login_form')
    // I.fillField('#user_login','invalid name')
    // I.fillField('#user_password','invalid pass')
    // I.click('.btn-primary')
    LogInPage_CodeceptJs.submitLogin('Invalid Username','Invalid Password')
    LogInPage_CodeceptJs.assertLoginFormVisible()
    I.seeElement('.alert-error')
})