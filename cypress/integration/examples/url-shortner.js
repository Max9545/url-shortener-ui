describe('URL Shortner', () => {

  it('Should show the previous cards of URL data from the api', () => {

    cy.intercept('http://localhost:3001/api/v1/url', { fixture: 'mock-url-data'})
    .visit('http://localhost:3000')
    .get('h1').should('contain', 'URL')
    .get('div').should('contain', 'Awesome')
  })
  it('Should render a new card with a shortened url link to the url a user inputs and submits', () => {
    // cy.intercept()
    cy.intercept('http://localhost:3001/api/v1/url', { fixture: 'mock-url-data'})
    .visit('http://localhost:3000')
    .get('.title-input')
    .type('Big Fish')
    .get('.url-input')
    .type('https://cdn0.wideopenpets.com/wp-content/uploads/2019/10/Fish-Names-770x405.png')
    .get('button').click()
  })
})


