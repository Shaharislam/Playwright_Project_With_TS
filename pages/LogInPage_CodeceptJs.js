const { I } = inject();

module.exports = {

  //Locators
  loginForm: '#login_form',
  username: '#user_login',
  password: '#user_password',
  submitButton: '.btn-primary',

  //create page methods

  submitLogin(username,password){
    I.fillField(this.username,username)
    I.fillField(this.password,password)
    I.click(this.submitButton)
  },
  assertLoginFormVisible(){
    I.seeElement(this.loginForm)
  },
}
