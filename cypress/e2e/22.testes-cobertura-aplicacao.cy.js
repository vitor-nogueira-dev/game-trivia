describe('22 - Desenvolva testes para atingir 95% de cobertura total', () => {
  it('Verifica a cobertura de testes unitários', () => {
    cy.getCoverage().its('total.branches.pct', { timeout: 0 }).should('be.gte', 95.00);
  });
});
