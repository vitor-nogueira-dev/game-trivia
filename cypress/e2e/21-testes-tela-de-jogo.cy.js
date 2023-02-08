describe('21 - [TELA DE JOGO] Desenvolva testes para atingir 90% de cobertura da tela de Jogo', () => {
  it('Verifica a cobertura de testes unitários', () => {
    cy.getCoverage().its('Game.functions.pct', { timeout: 0 }).should('be.gte', 90.00);
    cy.getCoverage().its('Game.lines.pct', { timeout: 0 }).should('be.gte', 90.00);
  });
});
