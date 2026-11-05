# Acervo — Banco de questões

Aplicação estática em React + Vite para revisar questões de vestibulares com resolução comentada, filtros, listas, correção e histórico local no navegador.

**Acervo atual:** 2.595 questões objetivas, incluindo UEA (Vestibular Unificado e SIS) separada por modalidade, caderno/grupo, acompanhamento/série e ano de aplicação. As questões UEA importadas usam gabarito oficial; a classificação por matéria segue os blocos de disciplina dos cadernos VUNESP.

## Rodar localmente

```bash
npm ci
npm run dev
```

## Gerar versão de produção

```bash
npm run build
npm run preview
```

O build gera a pasta `dist/`, que pode ser publicada em qualquer hospedagem estática.

## Publicação

- **Netlify:** o arquivo `netlify.toml` já configura `npm run build` e publica `dist/`.
- **Vercel:** o arquivo `vercel.json` já configura o framework Vite e o diretório de saída.

Veja também [`PUBLICAR.md`](./PUBLICAR.md) para um passo a passo de publicação e atualização.

## Estrutura principal

- `src/`: código da aplicação e banco de questões.
- `public/`: imagens, fontes, documentos e arquivos públicos servidos pelo site.
- `provas/`: PDFs e materiais de prova organizados por banca/instituição.

## Dados do usuário

Respostas, marcações, salvos, listas e histórico ficam no `localStorage` do navegador. Não há backend nesta versão.
