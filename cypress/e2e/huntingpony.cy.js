describe('Проверка добавления товара в корзину и оформление заказа', function () {
   it('Проверяю добавление товара в корзину и оформляю заказ', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="1"] > .header__collections-controls > .header__collections-link').click();
        cy.get('[data-product-id="338934699"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.wait(3000)
        cy.get('.add-cart-counter__btn').click();
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.header__cart > .icon').click();
        cy.get('.cart-controls > .button').click();
        cy.get('#client_surname').type('Syrenova')
        cy.get('#client_contact_name').type('Surena')
        cy.get('#client_phone').type('+79230000000')
        cy.get('#client_email').type('german@dolnikov.ru')
        cy.get('#shipping_address_street').type('Пупкова')
        cy.get('#shipping_address_house').type('1')
        cy.get('#shipping_address_flat').type('6')
        cy.get('#order_comment').type('Ничего я у вас заказывать не буду, у меня нету денег! ХЕХЕ')
        })    
})
