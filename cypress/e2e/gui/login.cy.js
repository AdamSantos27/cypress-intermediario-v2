describe('Login', () => {
  it('inserindo usuario e senha e efetuando o login', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })
})