describe('Dropdown', function() {

  it('Menu is hidden', function() {
    cy.visit('http://localhost:6006')
    cy.contains('Dropdown').click()
    cy.contains('with text').click()
    cy.get('#storybook-preview-iframe').then(($iframe) => {
      const $doc = $iframe.contents()
      cy.wrap($doc.find('#root > div > div')).then(elements => {
        let visibility = getComputedStyle(elements[0]).visibility
        expect(visibility).to.equal('hidden')      
      })
    })
  })

  it('Show menu on click', function() {
    cy.visit('http://localhost:6006')
    cy.contains('Dropdown').click()
    cy.contains('with text').click()
    cy.get('#storybook-preview-iframe').then(($iframe) => {
      const $doc = $iframe.contents()
      let dropdownButton = cy.wrap($doc.find('#root > div > button'))
      dropdownButton.click({ force: true }).then(() => {
        cy.wrap($doc.find('#root > div > div')).then(elements => {
          let visibility = getComputedStyle(elements[0]).visibility
          expect(visibility).to.equal('visible')      
        })
      })
    })
  })


  it('Close menu on click', function() {
    cy.visit('http://localhost:6006')
    cy.contains('Dropdown').click()
    cy.contains('with text').click()
    cy.get('#storybook-preview-iframe').then(($iframe) => {
      const $doc = $iframe.contents()
      let dropdownButton = cy.wrap($doc.find('#root > div > button'))
      dropdownButton.click({ force: true }).then(() => {
        cy.wrap($doc.find('#root > div > div')).then(elements => {
          let menu = elements.contents()
          cy.wrap(menu[1]).click().then(e => {
            cy.wrap($doc.find('#root > div > div')).then(elements => {
              let visibility = getComputedStyle(elements[0]).visibility
              expect(visibility).to.equal('hidden')      
            })
          })
        })
      })
    })
  })

})

