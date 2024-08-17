describe('template spec', () => {
  beforeEach(() => {
    cy.fixture('data').then(json => {
      cy.intercept('https://newsapi.org/v2/everything?q=general&pageSize=100&apiKey=7e9027e541ce47f2afa21b9c19591a5c', {
        statusCode: 200,
        fixture: 'data'
      })
    })
    cy.visit('http://localhost:5173')
  })
  it('User should be able to see all contents on a successful load', () => {
    cy.get('nav').should('exist')
    cy.get('nav h1').should('contain.text','News Reader')
    cy.get('h2').should('contain.text','List of 100 General Articles in the US')
    cy.get('.categories-wrapper').should('exist')
    cy.get('#categories').should('exist')
    cy.get('.btn-container button').should('have.length',5)
    cy.get('.card-container .card').should('have.length',20)
    cy.get('.card .card-info-wrapper h3').first().should('contain.text','General Hospital Spoilers August 19: Alarming News Hits Dante Hard')
    cy.get('.card .card-info-wrapper p').first().should('contain.text', 'August 16, 2024')
  })
  it('User should be able to make a selection from select dropdown and get different news articles', () => {
    cy.fixture('businessData').then(json => {
      cy.intercept('https://newsapi.org/v2/everything?q=business&pageSize=100&apiKey=7e9027e541ce47f2afa21b9c19591a5c', {
        statusCode: 200,
        fixture: 'businessData'
      })
    })
    cy.get('#categories').select('Business')
    cy.get('.card .card-info-wrapper h3').first().should('contain.text',"He worked 2 nursing jobs to help fund his real estate side hustle. Now, at 29, it's his main focus.")
  })
  it('User should be able to filter through the shown articles', () => {
    cy.get('input').type('harris')
    cy.get('input').should('have.value','harris')
    cy.get('.filter-btn').click()
    cy.get('.card-container .card').should('have.length', 2)
  })
  
  it('User should be able to navigate to different pages on main page and go back to main page', () => {
    cy.get('.btn-container button').last().click()
    cy.get('.card-container .card').first().should('contain.text','July 19, 2024')
    cy.get('h1').click()
    cy.url().should('not.contain','/5')
  })
  it('User should be able to click on an article to go to the details page', () => {
    cy.get('.card-container .card').should('exist')
    cy.get('.card-container .card').first().click()
    cy.url().should('contain','/detail')
    cy.get('h2').should('contain.text','General Hospital Spoilers August 19: Alarming News Hits Dante Hard')
    cy.get('.detail-info-wrapper').should('exist')
    cy.get('.detail-info-wrapper > :nth-child(3)').should('contain.text','No description to show..')
    cy.get('.detail-info-wrapper > :nth-child(4)').should('contain.text','No image to show..')
    cy.get('.detail-info-wrapper > a').should('have.attr','href')
  })
  it('User should be able to navigate back to home page from detail page', () => {
    cy.get('.card-container .card').first().click()
    cy.go('back')
    cy.url().should('not.contain','/detail')
  })
  it('Application should resize on first breakpoint', () => {
    cy.viewport(1045,800)
    cy.get('.card-container .card h3').first().should('have.css','font-size','16px')

  })
  it('Application should resize on second breakpoint', () => {
    cy.viewport(650,800)
    cy.get('.card-container .card h3').first().should('have.css','font-size','14.4px')
    cy.get('.source-container').first().should('have.css','width','61.703125px')
  })
  it('Application should resize on third breakpoint', () => {
    cy.viewport(510,800)
    cy.get('.categories-wrapper').should('have.css','flex-direction','column')
  })
  it.only('Detail page should resize on breakpoint', () => {
    cy.viewport(400,800)
    cy.get('.card-container .card').first().click()
    cy.get('.detail-page-container').should('have.css','min-width','360px')
    cy.get('.detail-page-container').should('have.css','margin-left','0px')
  })
})