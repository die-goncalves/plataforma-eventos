<h1 align="center">
    <img alt="Plataforma de eventos" title="Plataforma de eventos" src="/assets/plataforma-eventos.svg" />
</h1>

<!-- TABLE OF CONTENTS -->

<h5 align="center"> 
<a href="#sobre">Sobre</a>
   •   <a href="#tecnologias">Tecnologias</a> 
   •   <a href="#instalação">Instalação</a> 
   •   <a href="#funcionalidades">Funcionalidades</a> 
   •   <a href="#layout">Layout</a> 
   •   <a href="#visão-do-projeto">Visão do projeto</a>
   •   <a href="#agradecimento">Agradecimento</a> 
   •   <a href="#licença">Licença</a>     
   •   <a href="#autor">Autor</a> 
</h5>

## Sobre
<h4>Disponibilize seu evento através desta aplicação de maneira fácil e sem complicações 📺</h4>

As informações das aulas de um evento são armazenadas no GraphCMS, essas informações contém descrições das aulas e dos desafios, o id dos vídeos das aulas que devem estar presentes no youtube, o instrutor de cada aula e os dados das inscrições.

A aplicação permite o cadastro e o login de usuários e não é possível ter acesso às aulas do evento sem estar cadastrado, ao entrar na plataforma do evento o usuário tem acesso à todas as aulas, onde podem ser práticas, formato de live, possuem data para serem disponibilizadas e cada uma possui um desafio. Também foi trabalhado a responsividade da aplicação para também permitir o acesso a dispositivos móveis.

Aplicação apresentada na segunda edição do Ignite Lab da Rocketseat.

## Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwindcss](https://tailwindcss.com/)
- [GraphCMS(Hygraph)](https://graphcms.com/)
- [GraphQL Code Generator](https://www.graphql-code-generator.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [React Router](https://reactrouter.com/)
- [js-cookie](https://github.com/js-cookie/js-cookie)
- [Apollo Client](https://www.apollographql.com/docs/react/get-started/)
- [Vime](https://vimejs.com/)
- [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
- [React Toastify](https://github.com/fkhadra/react-toastify)
- [yup](https://github.com/jquense/yup)
- [jose](https://github.com/panva/jose)

> Veja o arquivo  [package.json](/package.json) do cliente

###### Sobre as tecnologias
Listagem das principais tecnologias e porque foram utilizadas:
- Utilização do ***Vite*** para a construção de uma aplicação react + typescript pois fornece uma experiência de desenvolvimento mais rápida utilizando o que é de mais atual nos navegadores;
- O ***tailwind css*** é um framework de css que traz classes já customizadas que devem ser incluídas diretamente no html, essas classes são colocadas no atributo class/className nos elementos HTML. Com ele é possível construir componentes personalizados sem escrever CSS e ainda conta com suporte para criação de tema claro/escuro;
- Utilização do ***graphcms*** ( <ins>versão free</ins> ) para armazenar o conteúdo e informações do token de autenticação;
- O ***apollo client*** permite gerenciar dados locais e remotos com GraphQL;
- O ***GraphQL Code Generator*** identifica os esquemas e as operações de  query e mutations e gera trechos e tipos de código específicos  com base nas operações definidas. Utilizando com o React os códigos gerados para query e mutations são em forma de hooks.
- ***React Router*** para lidar com roteamento;
- ***js-cookie*** para guardar o token de acesso à plataforma do usuário autenticado;
- ***jose*** para gerenciar JSON Web Tokens (jwt);
- ***yup*** para realizar a validação dos campos do formulário no momento do cadastro e de login.
- ***React Toastify*** para emitir as notificações da aplicação. Atualmente possui notificação de sucesso ao cadastrar usuário e ao entrar após a expiração do token, notificação de erro de validação relativo ao yup como campos obrigatórios e formato de email inválido e erro do lado do graphcms como ao tentar cadastrar usuário com o mesmo email por exemplo.
- Com o ***React Syntax Highlighter*** é possível estilizar os blocos de códigos na página web.
- Com o ***Vime*** podemos reproduzir um video do Youtube fornecendo apenas o seu id.
- Todos os ícones presentes na aplicação são do ***phosphor icons***.

## Instalação

- ### **Pré-requisitos**
  - É **necessário** possuir o **[git](https://git-scm.com/)** instalado e configurado no computador.
  - É **necessário** ter um gerenciador de pacotes seja o **[npm](https://www.npmjs.com/)** ou **[yarn](https://yarnpkg.com/)**.
  - É **necessário** ter uma conta no **[graphcms](https://graphcms.com/)**.
  - Criação dos esquemas no graphcms e relacionamentos entre eles:
    - Enumeração Lesson Type:
      <img src="assets\graphcms-schema-enumerations-lesson-type.png" alt="Enumeração de tipo de lição" />
    - Modelo Challenge:
      <img src="assets\graphcms-schema-models-challenge.png" alt="Esquema do modelo Challenge" />
    - Modelo Lesson:
      <img src="assets\graphcms-schema-models-lesson.png" alt="Esquema do modelo Lesson" />
      Relacionamento com Challenge:
      <img src="assets\graphcms-schema-models-lesson-relation-challenge.png" alt="Relacionamento com challenge" />
      Relacionamento com Teacher:
      <img src="assets\graphcms-schema-models-lesson-relation-teacher.png" alt="Relacionamento com teacher" />
    - Modelo Subscriber:
      <img src="assets\graphcms-schema-models-subscriber.png" alt="Esquema do modelo Subscriber" />
    - Modelo Teacher:
      <img src="assets\graphcms-schema-models-teacher.png" alt="Esquema do modelo Teacher" />
      Relacionamento com Lesson:
      <img src="assets\graphcms-schema-models-teacher-relation-lesson.png" alt="Relacionamento com teacher" />
  
    Após a criação dos modelos crie também algum exemplo para depois testar a aplicação.

- ### **Próximo passo**
1. Faça um clone deste repositório:
   ```sh
   $ git clone https://github.com/die-goncalves/plataforma-eventos.git
   ```

2. Instale as dependências:
   ```sh
   # Entre no diretório do repositório clonado
   $ cd plataforma-eventos
   # Instale as dependências do projeto.
   $ yarn #ou $ npm install
   ```

3. Crie o arquivo **.env.local** na raiz do projeto com as seguintes variáveis: 
    ```
    VITE_URI_GRAPHCMS=
    VITE_API_TOKEN=
    VITE_JWT_SECRET=
    VITE_JWT_EXPIRES_IN=
    ``` 
    ---
    Agora vamos preencher essas variáveis.
    - `VITE_JWT_SECRET` e `VITE_JWT_EXPIRES_IN` diz respeito a criação de tokens jwt ([JSON Web Tokens](https://jwt.io/)) para o serviço de autenticação. Em `VITE_JWT_EXPIRES_IN` você pode colocar `xm`, `xh` ou `xd` sendo x o tempo em minutos, horas ou dias respectivamente. Por exemplo, no arquivo **env.local** ficaria assim para uma data de expiração de 7 dias: `VITE_JWT_EXPIRES_IN=7d`. 
    Em `VITE_JWT_SECRET` você pode colocar qualquer valor sem as aspas, eu por exemplo gerei um [MD5 Hash](https://www.md5hashgenerator.com/) de um nome qualquer.
    - **GRAPHCMS**
        - Crie uma conta em [GraphCMS](https://graphcms.com) ou utilize uma já criada. 
        - Crie um novo projeto.
        - Navegue até `Project Settings`
          <img src="assets\graphcms-project-settings.png" alt="Configurações do projeto" />
        - Copie o valor `Content API` de Endpoints na variável ambiente `VITE_URI_GRAPHCMS=`.
          <img src="assets\graphcms-endpoints.png" alt="Content API" />
        - Em `Public Content API` crie as permissões como na imagem.
          <img src="assets\graphcms-public-content-api.png" alt="Permissões públicas" />
        - Crie um novo token em Permanent Auth Tokens
          <img src="assets\graphcms-permanent-auth-tokens.png" alt="Criar token" />
        - Entre nas configurações do token
          <img src="assets\graphcms-config-permanent-auth-tokens.png" alt="Auth0 - configurações da API" />
        - Copie o valor do token na variável de ambiente `VITE_API_TOKEN=`.
          <img src="assets\graphcms-value-permanent-auth-tokens.png" alt="Auth0 - permissões" />
        - Em `Content API` do token crie as seguintes permissões.
        <img src="assets\graphcms-permissions-permanent-auth-tokens.png" alt="Auth0 - criar usuário" />
<br />

4. Execute a aplicação:
    ```sh
    $ yarn dev #ou $ npm run dev
    # A aplicação inciará na porta 3000 - acesse <http://localhost:3000>
    ```

## Funcionalidades
- [X] Criar o esquema de banco de dados no GraphCMS com as tabelas ...
- [X] Criar um serviço de autenticação utilizando a tabela Subscriber no GraphCMS.
  - Apenas usuários autenticados podem acessar a rota `http://localhost:3000/plataform/` e suas rotas internas;
  - Usuários já autenticados são automaticamente redirecionados para a plataforma ao acessar `http://localhost:3000/`;
  - O cadastro e o login do usuário devem ser feitos na rota `http://localhost:3000/`.
  - Redirecionamento automático para a plataforma quando o usuário já está logado e para a página de login quando o usuário não está logado e tenta acessar a plataforma.
- [x] Criar Sidebar mostrando todas as aulas disponíveis ou não e diferenciação com link ativo baseado no slug da aula na URL.
- [x] Estilizar a página de desafio, conteúdo que pode conter código, imagem, videos, textos, palavras em negrito e itálico, listas e links.
- [X] Responsividade com largura mínima 360px e máxima de 1440px.

## Layout

<div>
    <p>A implementação da interface foi construída conforme o layout fornecido a seguir. Para observar o layout no Figma acesse:</p>
    <p align="center">
        <a href="https://www.figma.com/file/J0hCDvDauXwnhZMYhG5Rvz/Plataforma-de-evento-Ignite-Lab-i">
            <img alt="Link do site" src="https://img.shields.io/static/v1?label=Figma&message=layout&color=FFC700&style=flat-square&logo=figma" />
        </a>
    </p>
</div>


## Visão do projeto

<img src="/assets/ignitelab-02.gif" alt="Plataforma de eventos" />

<img src="/assets/ignitelab-02-responsividade.gif" alt="Responsividade da aplicação" />

## Agradecimento

<table width="100%" align="center">
    <tr>
        <th>
            <a href="https://rocketseat.com.br/">
                <img width="100" height="150" src="/assets/logo-rocketseat.svg" />
                <br /><sub><b>Rocketseat</b></sub>
            </a>
        </th>
        <th>
            <img width="150" height="150" src="/assets/logo-ignitelab.svg" />
            <br /><sub><b>Ignite Lab #02</b></sub>
        </th>
    </tr>
</table>

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Feito por Diego Gonçalves, contato:

[![Badge](https://img.shields.io/static/v1?label=Linkedin&message=Diego%20Gonçalves&color=208BEE&style=flat-square&logo=linkedin&link=https://www.linkedin.com/in/diego-goncalves1990)](https://www.linkedin.com/in/diego-goncalves1990)
[![Badge](https://img.shields.io/static/v1?label=Gmail&message=die.goncalves1990@gmail.com&color=EA5134&style=flat-square&logo=gmail&link=mailto:die.goncalves1990@gmail.com)](mailto:die.goncalves1990@gmail.com)
