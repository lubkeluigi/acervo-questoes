# UEA — fontes de provas e gabaritos (2022–2026)

Esta pasta contém **50 PDFs-fonte**: 26 do Vestibular Unificado e 24 do SIS. Os arquivos ainda não representam questões importadas no acervo.

## Separação obrigatória na importação

Não agrupar todas as provas em um único exame chamado apenas “UEA”. Cada questão deverá identificar, no mínimo:

- instituição: **UEA — Universidade do Estado do Amazonas**;
- banca: **Fundação VUNESP**, conforme os cadernos;
- modalidade: **Vestibular Unificado** ou **SIS — Sistema de Ingresso Seriado**;
- ano da aplicação;
- caderno/grupo, no Vestibular Unificado;
- acompanhamento/etapa e série correspondente, no SIS;
- ano de ingresso ou triênio, sem confundi-lo com o ano da aplicação.

### Vestibular Unificado

Usar identificadores distintos para Conhecimentos Gerais e para cada grupo de Conhecimentos Específicos. Exemplo: `uea-vestibular-2026-conhecimentos-gerais` e `uea-vestibular-2026-especificos-grupo-1`.

O ano do arquivo é o ano da prova. O Vestibular 2026, por exemplo, corresponde ao ingresso em 2027.

### SIS — seriado

Criar um exame separado para cada acompanhamento. Exemplo: `uea-sis-2026-acompanhamento-1`, `uea-sis-2026-acompanhamento-2` e `uea-sis-2026-acompanhamento-3`.

- Acompanhamento I: 1ª série;
- Acompanhamento II: 2ª série;
- Acompanhamento III: 3ª série.

O SIS 2026 corresponde ao triênio 2027–2029. Não misturar questões de acompanhamentos diferentes nem tratar o SIS como Vestibular Unificado.

## Arquivos

- `vestibular/`: 26 PDFs do Vestibular Unificado;
- `sis/`: 24 PDFs do SIS;
- `indice.json`: inventário com classificação, páginas e SHA-256 de cada PDF;
- `LINKS.md`: referências e observações do levantamento recebido.

Antes da importação, ainda será necessário conferir cada caderno, separar prova e gabarito quando estiverem no mesmo PDF e validar as respostas oficiais individualmente.
