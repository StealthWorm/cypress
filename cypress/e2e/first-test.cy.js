describe('google spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
    cy.get('#APjFqb').type('something to search').type('{enter}');
  })
})

describe('login template spec', () => {
  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
  })

  it('should retrieve an error if the form is invalid', () => {
    cy.get('#submit').click();
    cy.get('#error')
      .should('be.visible')
      .and('contain', 'Your username is invalid!')
      .and('have.css', 'background-color')
      .and('eq', 'rgb(227, 72, 72)')
  })

  it('should validate the login', () => {
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click();
    cy.url().should('include', 'https://practicetestautomation.com/logged-in-successfully/')

    cy.get('.post-title').should('contain', 'Logged In Successfully')
    cy.get('.wp-block-button__link').should('be.visible')
  })

  it('should visit the pages after login', () => {
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click();

    cy.get('#menu-item-20 > a').click()
    cy.url().should('include', 'https://practicetestautomation.com/practice/')

    cy.get('#menu-item-21 > a').click()
    cy.url().should('include', 'https://practicetestautomation.com/courses/')

    cy.get('#menu-item-19 > a').click()
    cy.url().should('include', 'https://practicetestautomation.com/blog/')

    cy.get('#menu-item-18 > a').click()
    cy.url().should('include', 'https://practicetestautomation.com/contact/')
  })
})