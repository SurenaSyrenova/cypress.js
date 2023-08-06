describe('Проверка на приведение к строчным буквам в логине', function () {
   it('Ввожу логин строчными буквами', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').click();
        cy.get('#mail').type('GerMan@Dolnikov.ru')
        cy.get('#pass').click();
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();
       })
})
