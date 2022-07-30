# api-mailprovider



<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)

![mailtrap](https://user-images.githubusercontent.com/75326612/182003255-b1a063b5-47db-43db-8291-f1cfed3cc6fd.png)



 Projeto 'api-mailprovider' criado com typescript, com o objetivo criar uma api para envio de emails, usando o principio de SOLID, para uma melhor organização do código e experimentar esse novo modelo em aplicações.
 Simples funcionalidade de receber dados em modo POST de um programa que envia dados para uma API (insomnia) e enviar um email no mailtrap


## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* clonar o projeto com para a sua máquina local. (git clone https://github.com/Thiago-Mota-Santos/api-mailprovider.git)
* verificar de ter o node.js instalado, juntamente com o gerenciador de pacotes (npm ou yarn)


## 🚀 Instalando <api-mailprovider>

Para instalar o <api-mailprovider>, siga estas etapas:



Windows:
```
clonar o projeto com para a sua máquina local. (git clone https://github.com/Thiago-Mota-Santos/api-mailprovider.git)
cd api-rest-typescript (acessar a pasta do projeto, caso esteja em outra pasta)
npm install (para instalar as dependências do node.js na sua máquina)
npm run dev (iniciar o projeto)


 
```

## ☕ Usando <api-mailprovider>

Para usar <api-mailprovider>, siga estas etapas:


* No javascript, entre na pasta providers/implements/MailTrapMailProvider e no constructor, coloque os seus dados do mailtrap (host,port,user,pass), para funcionar na sua máquina.
* npm run dev (Para executar o projeto)
* Usar o insomnia para fazer o envio dos dados em json para a api. (Tem que ser em post), no link : http://localhost:3333/users
* ![Screenshot_77](https://user-images.githubusercontent.com/75326612/182003503-8ed3521e-8cdb-4cc5-9a73-c1d25dc1eb9a.png)

* Com os campos : Name, email, password
{
    name: "example",
    email: "example@example.com",
    password: example
}
* Verifique que deu mensagem de sucesso (201 created)
* Verificar na caixa de entrada do mailTrap a mensagem examplo
 

## 📫 Contribuindo para <api-mailprovider>
<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->
Para contribuir com <api-mailprovider>, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <api-mailprovider> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).


[⬆ Voltar ao topo](#api-mailprovider)<br>
