# Testes Automatizados Android - Appium + WebdriverIO + TypeScript + Allure

Projeto de testes automatizados para o app **Watch Brasil** usando:

- [Appium](https://appium.io/)
- [WebdriverIO](https://webdriver.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Allure Reports](https://docs.qameta.io/allure/)

---

## ⚙️ Pré-requisitos

- Node.js instalado
- Appium instalado globalmente: `npm install -g appium`
- Appium rodando: `appium`
- Dispositivo Android conectado via USB ou emulador ativo
- App já instalado ou configurado via `appPackage` e `appActivity` no `wdio.conf.ts`

---

## 📦 Instalação de dependências

```bash
npm install

---

## Comandos

[npm run test] roda tudo que está dentro de ./tests/**/*.spec.ts
[npm run test:clean] roda o  fluxo de onboarding-e-login ('Teste do plataforma completa do 0')
[npm run test:normal] roda o fluxo de login ('Teste do plataforma completa com cache')
[npm run report] gera report da allure
[npm run allure] abre o reporte no navegador

---