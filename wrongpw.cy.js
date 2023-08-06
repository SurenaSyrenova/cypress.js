describe('Проверка на правильный логин и неправильный пароль', function () {
   it('Ввожу правильный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').click();
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').click();
        cy.get('#pass').type('qaqaqaqaqaqa')
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
})
