# Petshop - Fase 2

Este repositório contém o desenvolvimento da **Fase 2** do Projeto Prático da Disciplina. O objetivo principal desta etapa foi evoluir a estrutura semântica construída anteriormente, aplicando conceitos de design responsivo com o framework **Bootstrap 5**, inclusão de componentes dinâmicos com foco em **acessibilidade**, e estruturação de formulários complexos para a interação do usuário.

## Evolução e Novas Tecnologias

Diferente da estrutura estática anterior, a Fase 2 foca na experiência do usuário (UX/UI) e na adaptabilidade do sistema para diferentes tamanhos de tela (computadores, tablets e smartphones).

### Principais Implementações:

- **Integração do Framework:** Inclusão do Bootstrap 5 via CDN (CSS e JavaScript Bundle) para estilização padronizada e moderna.
- **Design Responsivo:** Utilização do sistema de malha (_Grid System_ com `row` e `col`) para garantir que o layout se ajuste automaticamente em dispositivos móveis.
- **Componentes Avançados:** Implementação de um Carrossel de Imagens rotativo e dinâmico na página inicial.
- **Acessibilidade (Web Accessibility):** Inclusão rigorosa de atributos descritivos (`alt`) em todas as novas mídias para leitura de tela, além de marcações semânticas de contraste.

---

## Arquitetura de Páginas na Fase 2

- `index.html`: Página inicial revitalizada com contêineres fluidos, tipografia limpa e um **Carrossel de Banners** rotativo com temporizador automático de 4 segundos.
- `produtos.html`: Seção de catálogo reformulada visualmente para exibição dos produtos.
- `servicos.html`: O coração da Fase 2. Transforma a antiga lista simples em **Cards interativos** com emblemas (_badges_) informativos e adiciona o **Formulário de Cadastro e Agendamento**.
- `README.md`: Este arquivo de documentação focada nas tecnologias da Fase 2.

---

## O Formulário de Agendamento (Requisitos HTML5)

Dentro da página de serviços, foi estruturado um sistema de agendamento completo dividido em três blocos visuais, utilizando validações nativas do HTML5 e componentes do Bootstrap:

1.  **Dados do Cliente:** Campos específicos para Nome (`text`), CPF (`number`), Sexo (`radio button` de seleção única), Telefone (`tel`) e E-mail (`email`).
2.  **Dados do Pet:** Identificação do animal com nome, raça e idade (campo numérico com limite mínimo zero).
3.  **Agenda e Logística:** Caixas de seleção (`checkbox`) para escolha múltipla de serviços (Banho/Tosa), botões de escolha de entrega (Tele-busca ou Local) e **Calendário/Horário Interativos** usando os tipos nativos `date` e `time`.

---

## Links de Acesso

- **Repositório de Código-Fonte:** https://github.com/brunomecca-dev/Sistema-Web-PetShop
- **Acesso ao Sistema (GitHub Pages - Fase 2):** https://brunomecca-dev.github.io/Sistema-Web-PetShop/Fase%202/index.html

## Autoria

- **Desenvolvedor:** Bruno Mecca
- **Contexto:** Fase 2 - Disciplina de Desenvolvimento Web (Bootstrap, Responsividade & Componentes).
