// cypress explicit x implicit

it('learning assertions', () => {
  // IMPLICIT : should(), and()
  cy.visit('https://example.cypress.io/')
  cy.contains('get').click()

  cy.get('#query-btn', { timeout: 6000 })
    .should('contain', 'Button')
    .should('have.class', 'query-btn')
    .should('be.visible')
    .should('be.enabled')
    .and('have.css', 'background-color')
    .and('eq', 'rgb(51, 122, 183)')

  cy.get('#query-btn').invoke('attr', 'id')
    .should('equal', 'query-btn')

  // EXPLICIT : assert(), expect()
  let name = 'Querying'
  expect(true).to.be.true

  cy.get('h1').invoke('text').then((text) => {
    expect(text).to.equal(name)
  })

  assert.equal(4, 4, 'Not Equal')
  assert.strictEqual(4, 4, 'Not STRICTLY Equal') // validate value and type

  cy.get('#query-btn')
    .should('be.visible')
    .and('contain', 'Button')
    .and(($element) => {
      const styles = window.getComputedStyle($element[0])
      const backgroundColor = styles.getPropertyValue('background-color')

      assert.strictEqual(backgroundColor, 'rgb(51, 122, 183)');
    })
})