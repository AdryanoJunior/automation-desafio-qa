describe('Bank - Tests', () => {

const selectorsList = {
  understandbutton: "button",
  clickUserJoao: ".transition-shadow",
  inputValue: "[placeholder='Valor']",
  clickDeposit: ".text-white",
  inputWithdrawalAmount: "[placeholder='Valor']",
  withdrawButton: ".text-white",
  inputRecipient: "[placeholder='Destinatário']",
  inputTransferValue: "[placeholder='Valor']",
  transferButton: ".text-white"
}

  it('Send money - Success', () => {
    cy.visit('vaga-qa')
    cy.get(selectorsList.understandbutton).eq(1).click()
    cy.get(selectorsList.clickUserJoao).eq(0).click()

    cy.get('body').should('contain', 'Histórico de Transações')
    cy.get('body').should('contain', 'Saldo Atual')
    cy.get('body').should('contain', 'Depósito')
    cy.get('body').should('contain', 'Saque')
    cy.get('body').should('contain', 'Transferência')

    cy.get(selectorsList.inputValue).eq(0).clear().type('1000')
    cy.get(selectorsList.clickDeposit).eq(1).click()
    cy.get(selectorsList.inputWithdrawalAmount).eq(1).clear().type('1500')
    cy.get(selectorsList.withdrawButton).eq(2).click()
    cy.get(selectorsList.inputRecipient).type('Maria Santos')
    cy.get(selectorsList.inputTransferValue).eq(2).clear().type('500')
    cy.get(selectorsList.transferButton).eq(3).click()
    cy.get('body').should('contain', 'Transferência para Maria Santos')
  })
})