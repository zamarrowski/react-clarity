describe('Checkbox', function() {
  it('Checked on click', function() {
    cy.visit('http://localhost:6006')
    cy.contains('Checkbox').click()
    cy.contains('with text').click()
    cy.get('#storybook-preview-iframe').then(($iframe) => {
      const $doc = $iframe.contents()
      let checkbox = cy.wrap($doc.find('input'))
      checkbox.click({ force: true }).then((elements) => {
        expect(elements[0].checked).to.equal(true)      
      })
    })
  })
})

