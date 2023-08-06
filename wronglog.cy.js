
describe('Тестирование ввода неправильного логина', function () {
   it('Ввожу не верный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').click();
        cy.get('#mail').type('surena@syrenova.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
       })
})
