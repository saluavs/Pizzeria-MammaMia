

describe('Test del carrito', () => {
  it('Botón para agregar una pizza al carrito', () => {
    cy.visit('/')
    const btn = cy.get(':nth-child(1) > .card .btn-danger')
    btn.click({ force: true })
    cy.visit('/carrito')
    cy.contains("h6", "napolitana")
  })
  it('Botón para eliminar una pizza del carrito', () => {
    cy.get('.btn-danger').click()
    cy.get("h6").should('not.exist')
  })
})
