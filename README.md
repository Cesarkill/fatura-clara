# Fatura Clara

Analisador inteligente de faturas de cartão de crédito exportadas em formato **OFX**, com processamento **100% local no navegador** (nenhum arquivo é enviado para servidores).

**Site em produção (Firebase Hosting):** https://ofx-pulse-fatura-9284.web.app

## Funcionalidades

- **Suporte a múltiplas faturas e filtro por cartão (OFX 1.x SGML e 2.x XML):** importe vários meses e cartões diferentes, filtre a **Visão consolidada** por cartão/banco, acompanhe a evolução mês a mês e consulte os dados salvos localmente no navegador (`localStorage`).
- **Conciliação com o saldo oficial do banco:** utiliza o valor oficial informado na tag `<LEDGERBAL>` do OFX, exclui saldo pendente de faturas anteriores do total de gastos novos e separa compras, parcelamento de fatura e encargos (juros, multas e IOF).
- **Categorização automática e editável:** classifica estabelecimentos automaticamente e memoriza alterações de categoria por estabelecimento entre faturas.
- **Acerto de contas e reembolsos:** marque gastos como **Reembolsável (100%)** ou **Dividido (50%)**, veja o total a receber calculado automaticamente e copie o resumo formatado para o WhatsApp.
- **Mini-relatório de busca:** ao pesquisar qualquer estabelecimento na tabela, exibe total gasto, quantidade de compras, ticket médio, maior compra e evolução ao longo dos meses importados.
- **Radar de auditoria:** detecta possíveis cobranças duplicadas, assinaturas recorrentes, pequenas compras acumuladas e projeção de parcelas futuras.
- **Assistente de voz em português:** leitura em voz alta do resumo da fatura ou da lista completa de gastos filtrados via Web Speech API.
- **Exportação para Excel (`.xlsx`) e CSV:** gera planilha formatada com abas **Resumo** e **Lançamentos**, larguras ajustadas, parcelas em texto (`"1 de 2"`), filtro automático e linhas de total (`SUMIFS` e `SUBTOTAL`).
- **Tema claro e escuro:** alternância persistida no navegador e layout responsivo.

## Estrutura do projeto

- `index.html` — Estrutura da aplicação e interface principal.
- `styles.css` — Design system, temas claro/escuro e estilos responsivos e de impressão.
- `app.js` — Parser OFX, motor de métricas, gráficos (`Chart.js`), leitura por voz e exportação `.xlsx` (`ExcelJS`) / `.csv`.
- `fatura-exemplo.ofx` — Arquivo OFX de demonstração.
- `firebase.json` e `.firebaserc` — Configuração de hospedagem no Firebase Hosting.

## Como executar localmente

Abra o arquivo `index.html` diretamente no navegador ou sirva a pasta com qualquer servidor estático (por exemplo, `npx -y firebase-tools@latest emulators:start --only hosting`).
