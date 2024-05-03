describe('Google', () => {
  it('google spec typescript', () => {
    cy.visit('https://www.google.com')
    cy.get('#APjFqb').type('something to search').type('{enter}');
  })
})