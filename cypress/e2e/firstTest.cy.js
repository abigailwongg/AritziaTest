describe('template spec', () => {
  it('passes', () => {

    //Aritzia website Home page
    cy.visit('https://www.aritzia.com/en/home') 

    // Scrolls 'footer' into view
    cy.get('footer').scrollIntoView() 

    //Input test email and submit 
    cy.get('.newsletter-container').type('test123@gmail.com{enter}') 

    cy.wait(1000)
    cy.scrollTo('top')

    //Navigate to the clothing category using the UI 
    cy.get('[data-link-type="nav-primary"]').contains('Clothing').click()

    //Navigate to any product page from the clothing category 
    cy.scrollTo(0,1000)
    cy.get('[aria-label="View full details for TONKA BLOUSE"]').click()

    //Select size and add the item to cart 
    cy.get('[data-selid="pdp-size-dropdown"]').click()
    cy.get('[title="2XS"').click()

    cy.get('button').contains('Add to Bag').click()

    //Navigate to cart and initiate checkout as a guest 
    cy.visit('https://www.aritzia.com/en/cart')
    cy.get('button').contains('Checkout').click()
    cy.get('button').contains('Continue as Guest').click({force : true})

  })
})
