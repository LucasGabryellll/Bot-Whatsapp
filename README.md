# API Para Whatsapp Vinculada com o Zabbix

## 💻 A aplicação está integrada com o Zabbix, Sistema de monitoramento de Redes.

## 💭 Sobre o projeto:
 - A aplicação faz uma requisição no Zabbix em busca de novas Trigger, sempre que é encontrada uma nova Trigger, com Status de Incidente. É enviado uma mensagem automáticamente no Whatsapp em um Grupo criado para receber essas notificações.

## 🎯 Dependencias do Projeto:
 1. Execute: `git clone https://github.com/LucasGabryellll/Bot-Whatsapp.git` Ou baixe o Zip do projeto.
 2. Com o projeto baixado abra o terminal e execute: `npm install` ou `yarn add`.
 3. Caso a instalação automatica das bibliotecas não funcione Instale as depencidas e bibliotecas do arquivo `Package.json` manualmente.
 4. Com tudo instalado execute o seguinte comando: `yarn dev` ou `npm run dev`.

## <img src="https://cdn-icons-png.flaticon.com/512/4192/4192761.png" width="25px">  Como utilizar a aplicação: 
  1. Após executar o comando `yarn dev` ou `npm run dev`. Será exibido um QR code. Escanei ele com o Whatssapp, para a aplicação tem acesso ao whatsapp. As mensagem serão enviadas para ele.
  2. Sempre que tiver um novo incidente ativo na rede, a aplicação lhe notificará em um grupo de sua preferencia.

## ❗Observações:
 - A aplicação está vinculada ao sistema de Monitoramento Zabbix, porém a base do projeto utiliza a biblioteca Venom-bot, na qual pode ser modificada e utilizada para outros fins de acordo com sua vontade.

## 🚀 Ferramentas e Tecnologías:
 - <img src="https://img.icons8.com/color/344/typescript.png" width="25px"> Typescript.
 - <img src="https://nodejs.org/static/images/logo.svg" width="25px"> Node JS e Express.
 - <img src="https://www.made4it.com.br/wp-content/uploads/2020/10/zabbix_logo_500x131.png" width="40px"> Zabbix.

## 🎓 Autor:
 - Lucas Gabryel Monteiro de Lima.
