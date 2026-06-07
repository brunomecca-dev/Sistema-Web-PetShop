# Sistema-Web-PetShop


Este repositório contém o desenvolvimento da **Fase 1** do Projeto Prático da Disciplina. O objetivo principal foi construir a arquitetura de informação e a estrutura fundamental do sistema utilizando estritamente **HTML5 Semântico**, sem a aplicação de folhas de estilo (CSS), frameworks (Bootstrap) ou rotinas de programação (JavaScript).

## Arquitetura e Organização do Projeto

Para garantir um código limpo, de fácil manutenção e escalável para as próximas fases, optou-se por **modularizar a aplicação em arquivos separados por contexto de conteúdo**, evitando arquivos únicos extensos e facilitando futuras correções na estrutura e no design.

## Árvore de Arquivos:
*   `index.html`: Página inicial e de acolhimento do sistema web. Apresenta o cabeçalho de navegação unificado e notas institucionais do petshop.
*   `produtos.html`: Seção dedicada exclusivamente à exibição do catálogo de produtos. Organizada em 3 categorias distintas, com 2 itens detalhados por categoria (incluindo imagens, descrições e valores).
*   `servicos.html`: Seção voltada para a listagem dos serviços oferecidos pelo estabelecimento, detalhando valores e a especificação sobre a disponibilidade de tele-busca.
*   `README.md`: Este arquivo de documentação técnica e ajuda.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Funcionalidades Implementadas

### 1. Cabeçalho Semântico (`<header>`)
Presente no topo de todas as páginas para manter a identidade unificada do sistema, contendo:
*   Nome oficial e slogan do Petshop.
*   Menu de navegação (`<nav>`) com links estruturais interligando os arquivos `index.html`, `produtos.html` e `servicos.html`.

### 2. Corpo das Páginas (`<main>`)
O conteúdo principal foi distribuído de forma limpa entre os arquivos:
*   **Catálogo de Produtos (`produtos.html`):** Divisão clara usando títulos e artigos para as categorias *Cães*, *Gatos* e *Pequenos Pets*. Cada produto possui marcação para foto (`<img>`), descrição contextual e preço destacado.
*   **Painel de Serviços (`servicos.html`):** Detalha os procedimentos do petshop com seus respectivos valores e a indicação explícita sobre o serviço de Tele-busca (Ativo/Inativo), conforme exigido pelos requisitos.

### 3. Rodapé Unificado (`<footer>`)
Fixado na base de todas as páginas da plataforma, agregando:
*   Informações de direitos autorais e propriedade legal da autoria do projeto.
*   Dados de contato (E-mail e Telefone simulados).
*   Links rápidos para navegação de retorno.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Links de Acesso

*   **Repositório de Código-Fonte:** https://github.com/brunomecca-dev/Sistema-Web-PetShop
*   **Acesso ao Sistema (GitHub Pages):** https://brunomecca-dev.github.io/Sistema-Web-PetShop/

## 📝 Autoria
*   **Desenvolvedor(es):** Bruno Mecca
*   **Contexto:** Fase 1 - Disciplina de Desenvolvimento Web (Construção Estrutural Pura).
