describe('The Home Page', function() {
    it('successfully loads homepage', function() {
      cy.visit('/')
    })
  })

  describe('Login ', function() {
    it('successfully logs in', function () {
      cy.visit('/')
      cy.get('.form-label-username').type('testaccount')
      cy.get('.form-label-password').type('test@1234')
      cy.get('.form-submit-button').click()
      .get('.welcome-messge').should('have.text', 'Welcome! Feel free to leave ')

    })
  })

  describe ('Failed login', function() {
    it('fails to login', function() {
      cy.visit('/')
      cy.get('.form-label-username').type('wrongaccountname')
      cy.get('.form-label-password').type('wrongpassword@1234')
      cy.get('.form-submit-button').click()
      .get('.error-message').should('have.text', 'Wrong username or password provided')

    })
  })