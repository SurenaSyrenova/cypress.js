
describe('Тестирование ввода логина и пароля', function () {
   it('Ввожу верный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').click();
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').click();
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
})
