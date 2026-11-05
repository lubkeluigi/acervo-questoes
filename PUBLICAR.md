# Publicar o Acervo gratuitamente

O site é estático depois do build. A pasta `dist/` contém tudo o que precisa ser hospedado: HTML, JavaScript, CSS, fontes, SVGs e imagens. Não é necessário contratar servidor nem manter este ambiente ligado.

## Opção mais simples: Netlify, sem GitHub

1. Crie uma conta gratuita em https://app.netlify.com/signup. Não é necessário informar cartão.
2. Abra https://app.netlify.com/drop.
3. Descompacte o arquivo `acervo-deploy.zip` e arraste a pasta resultante para a área de deploy. Se preferir compilar você mesmo, use `npm install && npm run build` e arraste a pasta `dist/`.
4. O Netlify publicará o site em um endereço como `https://nome-gerado.netlify.app`.
5. Para escolher um endereço mais legível, abra **Site configuration → Site details → Change site name** e tente, por exemplo, `acervo-fuvest-2027`. O endereço definitivo dependerá da disponibilidade do nome.

O plano gratuito é suficiente para este acervo. O site continua no ar depois que você fechar este chat. Um domínio próprio, como `www.seudominio.com.br`, é opcional e precisa ser registrado separadamente.

## Atualizar um site já publicado, mantendo o mesmo link

1. Baixe e descompacte a nova versão de `acervo-deploy.zip`.
2. No Netlify, abra o site já publicado — não crie um site novo.
3. Entre em **Deploys** e localize a área de **Deploy manually** / arrastar arquivos.
4. Arraste a nova pasta `acervo-deploy` para essa área e aguarde o deploy terminar.
5. Atualize a página do endereço anterior. O domínio `netlify.app` permanece o mesmo.

Se o navegador mostrar a versão antiga, force uma atualização com Ctrl+F5 (Windows/Linux) ou Cmd+Shift+R (Mac).

Pelo terminal, depois de fazer login e vincular o site uma única vez, a atualização também pode ser feita com `npm run build && npx netlify-cli deploy --dir=dist --prod`.

## Alternativa: Vercel

O arquivo `vercel.json` já contém a configuração do build. Com uma conta gratuita, você pode publicar pelo terminal:

```bash
npx vercel login
npx vercel --prod
```

A Vercel solicitará confirmação do projeto e fornecerá um endereço `vercel.app`.

## Atualizações automáticas com GitHub (opcional)

1. Crie um repositório no GitHub e envie os arquivos-fonte do projeto, incluindo `package.json`, `src/`, `public/`, `netlify.toml` e `vercel.json`.
2. No Netlify, escolha **Add new site → Import an existing project → GitHub** e autorize o acesso ao repositório.
3. O Netlify lerá `netlify.toml`, executará `npm run build` e publicará `dist/`.
4. Novos envios ao repositório gerarão novos deploys automaticamente.

Não envie a pasta `node_modules/` nem a pasta `dist/` ao repositório; elas já estão no `.gitignore` e serão recriadas no deploy.

## Gerar uma lista em PDF

1. No menu **Fazedor de listas**, escolha prova, tipo, disciplina, conteúdo e dificuldade; selecione questões manualmente ou use o sorteio por quantidade.
2. Defina título, ordenação, **estilo do caderno** — **Preto e branco** ou **Detalhes azuis** — e se o gabarito deve ocupar uma página separada.
3. Abra **Visualizar PDF** e confira a paginação A4. As questões podem continuar da coluna esquerda para a direita na mesma página, mas nunca são divididas entre duas páginas. Recursos gráficos muito extensos, como os da Q44, podem ocupar uma página ampla.
4. Clique em **Gerar PDF / Imprimir**. Na janela do navegador, escolha **Salvar como PDF**, papel **A4**, escala **100%**, margens **Nenhuma** e ative **gráficos de fundo** para preservar os detalhes azuis. A configuração `@page` já remove as margens externas.
5. Para responder no site, use **Responder lista**. As respostas só são corrigidas quando o estudante pede; resultado, resoluções, estatísticas e histórico ficam disponíveis depois da correção.
6. Nas **discursivas**, escreva a resolução de cada item e depois escolha **Concluir e comparar**. O site apresenta a resposta oficial esperada e os critérios; o estudante registra a autoavaliação por item. Essa pontuação fica separada dos acertos das objetivas. A redação não recebe nota automática.

A fonte condensada usada nos dois estilos é distribuída localmente com o site. A prévia e o PDF não dependem de Google Fonts nem de outro serviço externo.

## Segurança e dados dos usuários

Respostas, marcações, salvos, configurações de listas, resoluções em andamento e histórico de correções ficam no `localStorage` do navegador de cada usuário. Não há backend, credenciais ou banco de dados nesta versão. A publicação estática não compartilha esses dados com a hospedagem.
