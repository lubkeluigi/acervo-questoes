# UEA — fontes de provas e gabaritos (2022–2026)

Esta pasta contém **50 PDFs-fonte**: 26 do Vestibular Unificado e 24 do SIS. **1.802 questões foram importadas** para o acervo, separadas por modalidade, caderno/grupo, acompanhamento/série e ano de aplicação. O detalhamento e as pendências estão em `indice.json`.

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

## Status da importação

- Importadas: **1.802 questões objetivas**, com gabarito oficial (`officialAnswerOnly: true`).
- Exames no app: `UEA Unificado — Conhecimentos Gerais`, `UEA Unificado — Específicos Grupo I/II/III`, `UEA SIS — Acompanhamento I/II/III`.
- Pendências: **2022 Específicos Grupo III** sem gabarito válido no PDF combinado (36 questões); **42 questões** com alternativas apenas em imagem/vetor não recuperável.
- As matérias foram atribuídas pelos blocos de disciplina dos cadernos VUNESP, com refinamento para Português/Literatura/Artes, Humanas e língua estrangeira. A dificuldade é heurística (SIS I/II/III e tipo de caderno), não uma medida oficial.
