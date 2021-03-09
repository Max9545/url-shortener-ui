describe('URL Shortner', () => {

  it('Should show the previous cards of URL data from the api', () => {

    cy.intercept('http://localhost:3001/api/v1/url', { fixture: 'mock-url-data'})
    .visit('http://localhost:3000')
    .get('h1').should('contain', 'URL')
    .get('div').should('contain', 'Awesome')
  })

  it('Should render a new card with a shortened url link to the url a user inputs and submits', () => {

    // cy.intercept('POST','http://localhost:3001/api/v1/url', (req) => {
    //   expect(req.body.title).to.include('Big Fish')
    //   expect(req.body.long_url).to.include('https://cdn0.wideopenpets.com/wp-content/uploads/2019/10/Fish-Names-770x405.png')
    // })

    cy.intercept('GET','http://localhost:3001/api/v1/url', { fixture: 'mock-url-data'})

    cy.intercept('POST','http://localhost:3001/api/v1/url', {body: 
              {id:23,
              long_url:"https://cdn0.wideopenpets.com/wp-content/uploads/2019/10/Fish-Names-770x405.png",
              short_url:"http://localhost:3001/useshorturl/21",title:"Big Fish"}
    })

    .visit('http://localhost:3000')
    .get('.title-input')
    .type('Big Fish')
    .get('.url-input')
    .type('https://cdn0.wideopenpets.com/wp-content/uploads/2019/10/Fish-Names-770x405.png')
    .get('button').click()
    .get('div.url').last()
  })
})


