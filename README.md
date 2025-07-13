
# 📊 Testes de Performance com K6 - Banco API  
[Repositório no GitHub](https://github.com/CarlosBerenguer/banco-api-performance)

## 📌 Introdução  

Este projeto foi criado para realizar testes de performance utilizando **K6** para uma API bancária fictícia, simulando cenários de autenticação, login e operações bancárias como transferências. O propósito é fornecer uma base para análise da saúde e estabilidade dos serviços da API sob diferentes condições de carga. A estrutura do repositório está organizada para facilitar tanto o desenvolvimento como a manutenção dos testes, bem como a geração de relatórios para visualização e documentação dos resultados obtidos em tempo real ou exportados. A execução depende de variáveis de ambiente, como `BASE_URL`, para facilitar a adaptação a diferentes ambientes de teste.

## 🛠️ Tecnologias Utilizadas  

- **JavaScript (ES6+)** para estruturação e execução dos testes.  
- **K6** como ferramenta principal de testes de performance.  
- **JSON** para fixtures e simulação de payloads estáticos.  
- **Variáveis de ambiente do K6** para flexibilidade no apontamento de URLs e configuração dos relatórios.  
- **K6 Web Dashboard** para monitoramento em tempo real e exportação em `.html` para visualização posterior.  

## 📂 Estrutura do Repositório  

```
banco-api-performance
│   .gitignore
│   html-report.html
│   README.md
│
├───config
│       config.local.json
│
├───Fixtures
│       postLogin.json
│
├───Helpers
│       autenticacao.js
│
├───tests
│       login.test.js
│       transferencia.test.js
│
└───Utils
        variaveis.js
```

## 🎯 Objetivo de Cada Grupo de Arquivos  

### `config/`  
Contém arquivos de configuração específicos para ambientes locais ou remotos, como o `config.local.json`, que pode guardar variáveis sensíveis ou dados simulados necessários para a execução dos testes.

### `Fixtures/`  
Armazena arquivos JSON usados como payloads estáticos ou respostas simuladas para requests da API. No caso, `postLogin.json` guarda dados necessários para autenticação durante os testes.

### `Helpers/`  
Concentra arquivos JavaScript que agrupam funções auxiliares. `autenticacao.js` é responsável por abstrair a lógica de login e geração de tokens ou sessões válidas para que os testes possam prosseguir.

### `tests/`  
É o núcleo onde estão localizados os arquivos de testes propriamente ditos, escritos com a sintaxe do K6. `login.test.js` e `transferencia.test.js` executam os fluxos principais da aplicação, simulando usuários acessando e utilizando as funcionalidades da API.

### `Utils/`  
Armazena arquivos utilitários usados para centralizar variáveis reutilizáveis ou funções genéricas. O arquivo `variaveis.js` contém informações como a URL base e outros parâmetros reutilizados durante os testes.

### Arquivos na Raiz  
- `.gitignore`: Arquivos e pastas ignorados pelo Git.  
- `html-report.html`: Exemplo de relatório exportado usando o recurso `K6_WEB_DASHBOARD_EXPORT`.  
- `README.md`: Este documento que descreve todo o projeto.

## ⚙️ Modo de Instalação e Execução  

### 1️⃣ Clonar o Repositório  

```bash
git clone https://github.com/CarlosBerenguer/banco-api-performance.git
cd banco-api-performance
```

### 2️⃣ Configurar Variáveis de Ambiente  

Antes de rodar, é necessário definir a URL da API que será testada com a variável `BASE_URL`. Você pode definir diretamente no terminal ou em um arquivo `config.local.json` se preferir, conforme o exemplo abaixo:

```json
{
        "BASE_URL" = "http://localhost:3000"
}

```

## 🚀 Executando os Testes  

### Execução padrão com K6 (real-time dashboard):  
```bash
K6_WEB_DASHBOARD=true k6 run tests/login.test.js
```

### Execução padrão com K6 Sem "config.local.json" (real-time dashboard):  
```bash
K6_WEB_DASHBOARD=true k6 run tests/login.test.js -e BASE_URL=http://localhost:3000
```

### Execução com exportação de relatório HTML:  
```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/transferencia.test.js
```

## 🔍 Outras Dicas de Execução  

Você pode ajustar facilmente o volume de usuários virtuais e a duração de testes utilizando os parâmetros `--vus` e `--duration`, por exemplo:  
```bash
k6 run --vus 50 --duration 2m tests/login.test.js
```

Esse comando rodará o teste `login.test.js` com **50 usuários simultâneos por 2 minutos**.
