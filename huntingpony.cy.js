describe('Проверка добавления товара в корзину и оформление заказа', function () {
   it('Проверяю добавление товара в корзину и оформляю заказ', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="5"] > .header__collections-controls > .header__collections-link').click();
        cy.get('[data-product-id="338932894"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click()
        cy.get('.add-cart-counter__btn').click();
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.header__cart > .icon').click();
        cy.get('.cart-controls > .button').click();
   })
})
