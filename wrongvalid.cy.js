describe('Тестирование ввода логина без @', function () {
   it('Ввожу логин без @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').click();
        cy.get('#mail').type('germandolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').click();
       })
})