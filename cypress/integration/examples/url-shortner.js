describe('URL Shortner', () => {
  it('Should show the previous cards of URL data from the api', () => {

    cy.intercept('http://localhost:3001/api/v1/url', { fixture: 'mock-url-data'})
    .visit('http://localhost:3000')
    .get('h1').should('contain', 'URL Shortner')

  })
})


// Should render a new card with a shortened url link to the url a user inputs