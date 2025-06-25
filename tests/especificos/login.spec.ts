import loginPage from "pageobjects/login.page";
describe('Login', () => {
    it('Deve realizar login com sucesso', async () => {

        await browser.pause(2000); // Aguarda abertura inicial    
        // THEN preencher email e senha
        await loginPage.realizarLogin();
    
        // THEN aguarda resultado do login
        await browser.pause(5000);
});
});