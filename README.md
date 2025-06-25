## Testes Automatizados - App Watch Brasil (Android)
Este projeto contém a automação de testes mobile para o aplicativo Watch Brasil, utilizando as seguintes tecnologias:

-WebdriverIO com Appium

-Mocha como framework de testes

-TypeScript

-Relatórios com Allure

1. Clonando o repositório do GitLab
Antes de tudo, abra o terminal na sua máquina e execute o comando abaixo para clonar o projeto:

````bash

git clone <URL-do-repositório-no-GitLab>
````
Depois de clonar, entre na pasta do projeto:

````bash
cd teste-watch-android
git clone https://gitlab.com/seu-usuario/nome-do-repo.git
````

2. Instalando as dependências
Este projeto usa Node.js. Certifique-se de que você tenha uma versão igual ou superior à 18 instalada. Com isso feito, rode:

````bash
npm install
npm install -g appium
````
Esse comando vai instalar todas as bibliotecas necessárias, incluindo WebdriverIO, Appium, TypeScript, Allure Reporter, entre outras.

3. Ativar conexão remota (por IP)
-Conecte o celular via USB.
-Modo desenvolvedor ativado
-Depuração USB ativada

Ative o modo de conexão TCP/IP:

````bash
adb tcpip 5555
````
Descubra o IP do celular:

````bash
adb shell ip route
Exemplo de IP: 192.168.0.101
````

Conecte remotamente:

````bash
adb connect 192.168.0.101:5555
````
Você pode desconectar o USB agora. Verifique se está conectado:

````bash
adb devices
````

4. Atualizar configurações no projeto
Abra o arquivo de configuração de testes:
[wdio.conf.ts]

Atualize os campos com os dados do seu Android:

````ts
capabilities: [{
  platformName: 'Android',              // plataforma
  deviceName: 'Android-XYZ',            // nome visível em `adb devices`
  automationName: 'UiAutomator2',
  appPackage: 'br.tv.watch.watchbrasil',
  appActivity: 'br.tv.watch.android.activities.MainActivity',
  udid: '192.168.0.101:5555',           // IP do dispositivo remoto
  noReset: true,
}]
````
!!!Não esquecer de trocar o IP (udid) e o deviceName pelo seu!!!!

5. Iniciar o Appium e rodar os testes
Inicie o servidor Appium:

```_bash
appium
````
