<h1 id="top" align="center">Frevo</h1>
<h2 align="center">A simple starter static code generator to Front-End development</h2>

<div align="center">
    <img src="https://img.shields.io/static/v1?label=node&message=v10.19.0&color=8bc790&style=for-the-badge&logo=node.js"/>
    <space></space>
    <img src="https://img.shields.io/static/v1?label=npm&message=v6.13.7&color=cf4647&style=for-the-badge&logo=npm"/>
    <space></space>
    <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=8bc790&style=for-the-badge&logo=mit"/>
    <space></space>
</div>

<br>

## Tabela de conteúdos
<!--ts-->
   * [Overview](#overview)
   * [Tecnologias](#tecnologias)
   * [Instalando o Frevo](#instalando-o-frevo)
   * [Instalando as dependências](#instalando-as-dependências)
   * [Scripts de execução](#scripts-de-execução)
   * [Autor](#autor)

<!--te-->

## Overview

Este Boilerplate contém um style-guide próprio configurado através do ESLint, EditorConfig, e Git Hooks (utilizando o Husky).

Todo o projeto foi construído e pensado em cima de uma arquitetura modular para que seja possível trabalhar facilmente com componentes, tanto no Sass como no Javascript.

Através de alguns recursos, conseguimos um ambiente de desenvolvimento e produção com uma grande compatibilidade entre navegadores (Cross-Browser), tanto no CSS (através do Autoprefixer e PostCSS) como no Javascript (através do Babel).

Ir para o [topo](#top).

## Tecnologias
As seguintes tecnologias foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Gulp](https://gulpjs.com/)
- [Gulp File Include](https://www.npmjs.com/package/gulp-file-include)
- [Bootstrap (Bootstrap-Grid)](https://getbootstrap.com/)
- [Sass](https://sass-lang.com/)
- [Husky](https://typicode.github.io/husky/)
- [ESLint](https://eslint.org/)
- [EditorConfig](https://editorconfig.org/)
- [BrowserSync](https://www.browsersync.io/)
- [Babel](https://babeljs.io/)

Ir para o [topo](#top).

## Instalando o Frevo

Abra um terminal de comandos na pasta onde deseja salvar o projeto e digite o comando abaixo:

```bash
$ npm install -g frevo
```

Ou baixe o arquivo comprimido diretamente do repositório do projeto no Github e descompacte onde desejar.


Ir para o [topo](#top).

## Scripts de execução

Os comandos abaixo podem ser encontrados no arquivo `package.json` localizado na raíz do projeto.

```bash
# Create a project
# Para criar um projeto execute no terminal o comando:

$ frevo create { ProjectName }

# Create Component
# Para criar um componente execute no terminal o comando:

$ frevo generate:component { ComponentName }

# or (ou)

$ frevo gc { ComponentName }

# Create Service
# Para criar um serviço execute no terminal o comando:

$ frevo generate:service { ServiceName }

# or (ou)

$ frevo gs { ServiceName }

# Create Page
# Para criar uma página execute no terminal o comando:

$ frevo generate:page { PageName }

# or (ou)

$ frevo gp { PageName }
```

Ir para o [topo](#top).


## Autor

### [José Monte](https://jmontejr.github.io)
<p>Desenvolvido com :heart:</p>

Ir para o [topo](#top).
