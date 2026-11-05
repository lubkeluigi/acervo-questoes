const PROCESS_URL = '/documentos/saocamilo2026/prova-II-objetiva.pdf';

const shared = {
  exam: 'São Camilo', year: 2026, phase: 'Prova II', originalUrl: PROCESS_URL, kind: 'objective',
};

const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');

const SONNET = `Para responder às questões de 02 a 05, leia o soneto “Aos que sonham”, de Raul de Leoni, publicado originalmente em 1922 no livro Luz mediterrânea.

Não se pode sonhar impunemente
Um grande sonho pelo mundo afora,
Porque o veneno humano não demora
Em corrompê-lo na íntima semente…

Olhando no alto a árvore excelente,
Que os frutos de ouro esplêndidos enflora,
O Sonhador não vê, e até ignora
A cilada rasteira da Serpente.

Queres sonhar? Defende-te em segredo,
E lembra, a cada instante e a cada dia,
O que sempre acontece e aconteceu:

Prometeu¹ e o abutre no rochedo,
O Calvário do Filho de Maria
E a cicuta² que Sócrates bebeu!

(Raul de Leoni. Luz mediterrânea e outros poemas, 2001.)

¹ Prometeu: um dos titãs da mitologia grega, que teria roubado o fogo do Olimpo para dá-lo aos homens. Por esse motivo, Zeus o castigou, acorrentando-o a um rochedo para que um abutre bicasse permanentemente seu fígado.

² cicuta: um dos venenos mais letais que existem, usado na Grécia Antiga para executar condenados.`;
const SONNET_BLOCKS = ['label', 'poem', 'poem', 'poem', 'poem', 'source', 'note', 'note'];
const sonnetQuestion = (command) => ({
  statement: `${SONNET}\n\n${command}`,
  blockTypes: [...SONNET_BLOCKS, ...command.split('\n\n').map(() => 'command')],
  works: ['Luz mediterrânea e outros poemas', 'Luz mediterrânea', 'Lendas e narrativas', 'Angústia', 'Dicionário de dificuldades da língua portuguesa'],
  preview: command,
});

const AI_TEXT = `Leia o texto para responder às questões de 06 a 10.

More and more we’re exposed to vast amounts of information and highly sophisticated software that offers to do the thinking for us. In just a few seconds, tools such as ChatGPT or Gemini can draft your emails, generate a birthday message for a friend, or even summarise the plot of a novel you haven’t gotten around to reading. Such increased offloading¹ has raised the concern that people will become excessively dependant on AI. This could have unplanned consequences, such as eroding our critical thinking skills and declining our overall cognitive ability.

This fear is justified. Research has suggested the online environment exploits our cognitive tendencies — individual differences in how we think, perceive, and remember. In turn, some people only engage with information superficially. Studies have also linked high AI use to increased laziness, anxiety, lower critical engagement and feelings of dependence.

Yet it may be how we use AI that’s the problem, rather than the fact we do it at all.

Generally, relying on external sources is fine. We all constantly count on each other’s knowledge to function as a society. Doctors provide medical information, engineers are in charge of construction, financial advisers give investment tips, and so on. All this spread of expertise provides each of us with more knowledge than we can individually hold. More importantly, we don’t offload all thinking tasks to one specific person. Instead, we carefully consider the person’s trust and expertise before accepting their advice or support. We also check how the new information fits in with what we already know.

As our knowledge grows in a certain area, we rely less on outside support, just as a student relies on a teacher until they learn enough to stand on their own.

(Misia Temler. http://theconversation.com, 09.03.2026. Adaptado.)

¹ to offload: to transfer (a task or information) to something or someone else.`;
const AI_BLOCKS = ['label', 'prose', 'prose', 'prose', 'prose', 'prose', 'source', 'note'];
const aiQuestion = (command) => ({
  statement: `${AI_TEXT}\n\n${command}`,
  blockTypes: [...AI_BLOCKS, 'command'], preview: command,
});

export const saocamilo2026Lote01 = [
  {
    ...shared,
    id: 'saocamilo2026-prova2-q01', number: 'Questão 01', subject: 'Português', content: 'Interpretação de meme', difficulty: 'Fácil',
    statement: 'Examine o meme publicado pelo perfil @freud.intensifies no Instagram, em 08.01.2026.', blockTypes: ['label'],
    images: [{ src: '/images/saocamilo2026/q01-meme.svg', alt: 'Meme com a frase “Me doing anything other than the thing I need to do” sobre a imagem de uma pessoa aspirando uma encosta de areia.' }],
    statementAfter: 'Depreende-se do meme que a pessoa que o compartilha quer caracterizar a si mesma como', afterBlockTypes: ['command'], preview: 'Depreende-se do meme que a pessoa que o compartilha quer caracterizar a si mesma como',
    alternatives: ['resiliente.', 'confusa.', 'distraída.', 'empreendedora.', 'procrastinadora.'], correct: 4,
    resolution: ['A frase “eu fazendo qualquer coisa diferente daquilo que preciso fazer” descreve a substituição de uma tarefa necessária por outra atividade. Esse adiamento da obrigação caracteriza procrastinação.'],
    analyses: ['Incorreta. Resiliência seria a capacidade de superar adversidades, não de evitar a tarefa.', 'Incorreta. O meme não enfatiza dúvida ou confusão mental.', 'Incorreta. A pessoa age de modo deliberado ao fazer outra coisa; não se trata apenas de distração.', 'Incorreta. Não há criação ou gestão de um empreendimento.', 'Correta. Fazer qualquer outra coisa para não realizar a tarefa necessária é procrastinar.'],
  },
  {
    ...shared, ...sonnetQuestion('Do ponto de vista temático, o soneto de Raul de Leoni aproxima-se da seguinte citação:'),
    id: 'saocamilo2026-prova2-q02', number: 'Questão 02', subject: 'Literatura', content: 'Interpretação de soneto', difficulty: 'Média',
    alternatives: ['“O homem é o lobo do homem.” (Plauto)', '“Os fins justificam os meios.” (Ovídio)', '“A razão é, e só pode ser, escrava das paixões.” (David Hume)', '“O homem está condenado a ser livre.” (Jean-Paul Sartre)', '“Onde não há lei, não há liberdade.” (John Locke)'], correct: 0,
    resolution: ['O “veneno humano” corrompe o grande sonho, e os exemplos finais associam sofrimento e perseguição a figuras que desafiaram poderes ou convenções. O poema, portanto, enfatiza a ameaça que os próprios seres humanos representam uns para os outros, ideia próxima de “O homem é o lobo do homem”.'],
    analyses: ['Correta. A hostilidade humana que corrompe os sonhos aproxima o poema da máxima de Plauto.', 'Incorreta. O soneto não discute a justificação moral de meios pelos fins.', 'Incorreta. A relação entre razão e paixões não é o tema desenvolvido.', 'Incorreta. A liberdade como condição humana não orienta o poema.', 'Incorreta. O texto não estabelece uma relação entre lei e liberdade.'],
  },
  {
    ...shared, ...sonnetQuestion('No soneto, o eu lírico dirige-se explicitamente a um interlocutor'),
    id: 'saocamilo2026-prova2-q03', number: 'Questão 03', subject: 'Literatura', content: 'Eu lírico e interlocução', difficulty: 'Média',
    alternatives: ['na segunda e na terceira estrofes.', 'na terceira e na quarta estrofes.', 'na segunda estrofe, apenas.', 'na terceira estrofe, apenas.', 'na primeira e na segunda estrofes.'], correct: 3,
    resolution: ['Na terceira estrofe, a pergunta “Queres sonhar?” e o imperativo “Defende-te” dirigem-se diretamente a um interlocutor. Nas demais estrofes, predominam a exposição e a exemplificação, sem essa interpelação explícita.'],
    analyses: ['Incorreta. A segunda estrofe descreve o Sonhador, sem interpelar o leitor.', 'Incorreta. A quarta estrofe apresenta exemplos mitológicos e históricos, sem chamamento direto.', 'Incorreta. A segunda estrofe não contém segunda pessoa ou imperativo dirigido ao interlocutor.', 'Correta. “Queres” e “Defende-te” marcam a interlocução somente na terceira estrofe.', 'Incorreta. Nem a primeira nem a segunda estrofe contêm o chamamento explícito.'],
  },
  {
    ...shared, ...sonnetQuestion('O soneto de Raul de Leoni caracteriza-se, sobretudo, pelo seu teor'),
    id: 'saocamilo2026-prova2-q04', number: 'Questão 04', subject: 'Literatura', content: 'Temática filosófica do soneto', difficulty: 'Fácil',
    alternatives: ['nostálgico.', 'satírico.', 'lírico-amoroso.', 'metalinguístico.', 'filosófico.'], correct: 4,
    resolution: ['O poema reflete sobre a fragilidade dos sonhos diante da corrupção e da hostilidade humanas, recorrendo a Prometeu, Cristo e Sócrates. Essa meditação sobre a condição humana e os ideais confere predominância filosófica.'],
    analyses: ['Incorreta. Não há evocação saudosista de um passado pessoal.', 'Incorreta. Embora haja tom crítico, o poema não se organiza pelo deboche ou pela sátira.', 'Incorreta. O tema não é uma relação amorosa.', 'Incorreta. O poema não toma a própria linguagem ou a criação poética como tema central.', 'Correta. A reflexão sobre sonhos, sofrimento e condição humana é predominantemente filosófica.'],
  },
  {
    ...shared, ...sonnetQuestion('Objeto direto interno é o complemento constituído por substantivo cognato do verbo (ou seja, o substantivo tem a mesma raiz ou origem etimológica do verbo) ou da esfera semântica deste: “Tinha a testa enrugada, como quem vivera vida de contínuo pesar” (Alexandre Herculano, Lendas e narrativas) / “Os olhos pestanejavam e choravam lágrimas quentes, que eu enxugava na manga.” (Graciliano Ramos, Angústia).\n\n(Domingos Paschoal Cegalla. Dicionário de dificuldades da língua portuguesa, 2009. Adaptado.)\n\nOcorre objeto direto interno no seguinte trecho do soneto:'),
    id: 'saocamilo2026-prova2-q05', number: 'Questão 05', subject: 'Português', content: 'Sintaxe: objeto direto interno', difficulty: 'Média',
    alternatives: ['“Não se pode sonhar impunemente / Um grande sonho pelo mundo afora,” (1ª estrofe)', '“Porque o veneno humano não demora / Em corrompê-lo na íntima semente…” (1ª estrofe)', '“Queres sonhar? Defende-te em segredo,” (3ª estrofe)', '“O Sonhador não vê, e até ignora / A cilada rasteira da Serpente.” (2ª estrofe)', '“E lembra, a cada instante e a cada dia, / O que sempre acontece e aconteceu:” (3ª estrofe)'], correct: 0,
    resolution: ['Em “sonhar um grande sonho”, o substantivo “sonho” é cognato do verbo “sonhar” e funciona como objeto direto interno, reforçando semanticamente a ação verbal.'],
    analyses: ['Correta. “Um grande sonho” complementa “sonhar” com substantivo da mesma raiz.', 'Incorreta. “Corrompê-lo” retoma um termo anterior e não apresenta substantivo cognato de “corromper”.', 'Incorreta. Não há objeto direto interno em “queres sonhar” ou em “defende-te”.', 'Incorreta. “A cilada” é objeto direto de “ignora”, mas não é cognata desse verbo.', 'Incorreta. O pronome “o que” introduz uma oração substantiva, sem substantivo cognato de “lembra”.'],
  },
  {
    ...shared, ...aiQuestion('The text discusses one major preoccupation about AI use nowadays, which is the'),
    id: 'saocamilo2026-prova2-q06', number: 'Questão 06', subject: 'Inglês', content: 'Compreensão de texto: inteligência artificial', difficulty: 'Fácil',
    alternatives: ['fear that AI users will at some point develop mental illnesses such as anxiety.', 'deterioration of mental capabilities if people delegate their thinking tasks to AI.', 'excessive number of hours addicted AI users spend before the screen.', 'considerable number of wrong facts AI delivers as if they were real or correct.', 'fact AI has become many people’s exclusive source of knowledge.'], correct: 1,
    resolution: ['O primeiro parágrafo apresenta a preocupação de que a transferência excessiva do pensamento para a IA eroda o pensamento crítico e reduza a capacidade cognitiva. Isso corresponde à deterioração das capacidades mentais.'],
    analyses: ['Incorreta. Ansiedade é mencionada entre associações de estudos, mas não sintetiza a preocupação central apresentada.', 'Correta. O texto teme a erosão do pensamento crítico e o declínio cognitivo pela delegação de tarefas intelectuais.', 'Incorreta. O tempo de tela não é discutido.', 'Incorreta. A produção de fatos incorretos não é abordada.', 'Incorreta. O texto não afirma que a IA já seja fonte exclusiva de conhecimento para muitas pessoas.'],
  },
  {
    ...shared, ...aiQuestion(`No trecho do primeiro parágrafo “This could have ${underline('unplanned')} consequences”, a palavra sublinhada pode ser substituída, sem alteração de sentido, por`),
    id: 'saocamilo2026-prova2-q07', number: 'Questão 07', subject: 'Inglês', content: 'Vocabulário em contexto', difficulty: 'Fácil',
    alternatives: ['undesirable.', 'inevitable.', 'unexpected.', 'irreversible.', 'unfortunate.'], correct: 2,
    resolution: ['Unplanned significa “não planejado”. No contexto de consequências, a equivalência mais precisa é unexpected, isto é, consequências inesperadas.'],
    analyses: ['Incorreta. Undesirable significa indesejável, ideia diferente de não planejado.', 'Incorreta. Inevitable significa inevitável.', 'Correta. Unexpected, inesperado, preserva o sentido de unplanned no trecho.', 'Incorreta. Irreversible significa irreversível.', 'Incorreta. Unfortunate significa infeliz ou lamentável.'],
  },
  {
    ...shared, ...aiQuestion('A expressão “This fear”, que introduz o segundo parágrafo, refere-se a receios em relação'),
    id: 'saocamilo2026-prova2-q08', number: 'Questão 08', subject: 'Inglês', content: 'Referenciação e coesão', difficulty: 'Média',
    alternatives: ['à queda veloz em índices de saúde mental devido ao excesso de tela.', 'ao apagamento de diferenças individuais em ambientes online.', 'à crescente inabilidade das pessoas para desenvolver tarefas intelectuais simples.', 'à falta de engajamento aprofundado das pessoas com a informação.', 'ao risco de uma dependência extrema da inteligência artificial.'], correct: 4,
    resolution: ['A expressão retoma a preocupação do parágrafo anterior de que as pessoas se tornem excessivamente dependentes da IA. As consequências cognitivas aparecem como desdobramentos desse receio.'],
    analyses: ['Incorreta. Excesso de tela não é o referente da expressão.', 'Incorreta. As diferenças individuais são mencionadas como características cognitivas, não como algo que seria apagado.', 'Incorreta. O texto não formula o medo como inabilidade para tarefas simples.', 'Incorreta. O engajamento superficial é uma evidência relacionada, não o referente imediato de “This fear”.', 'Correta. “This fear” retoma diretamente o receio de dependência excessiva da IA.'],
  },
  {
    ...shared, ...aiQuestion('In the fourth paragraph, the author of the text uses the example of doctors, engineers and financial advisers to argue that the'),
    id: 'saocamilo2026-prova2-q09', number: 'Questão 09', subject: 'Inglês', content: 'Estratégia argumentativa', difficulty: 'Média',
    alternatives: ['examination of a source’s degree of reliability is vital for the acceptance of a statement as truth.', 'search for necessary information should not be deposited in one sole person or source.', 'expertise of specialists is essential to guarantee the functioning of society as a whole.', 'information received daily will only make sense if related to previous knowledge.', 'amount of information needed nowadays cannot be properly offered by a limited number of specialists.'], correct: 0,
    resolution: ['Após exemplificar especialistas, o autor destaca que consideramos cuidadosamente a confiança e a competência da pessoa antes de aceitar seu conselho. O exemplo sustenta a importância de avaliar a confiabilidade da fonte.'],
    analyses: ['Correta. A avaliação da confiança e da expertise da fonte é o ponto enfatizado antes de aceitar orientação.', 'Incorreta. Embora o texto diga que não delegamos tudo a uma pessoa, a sequência dos exemplos enfatiza a avaliação crítica da fonte, não uma regra de distribuição da busca.', 'Incorreta. Os especialistas ilustram a partilha social do conhecimento, mas a afirmação de que são indispensáveis a toda a sociedade extrapola a argumentação.', 'Incorreta. A relação com conhecimentos prévios é outra verificação mencionada, não a tese principal ilustrada pelos três profissionais.', 'Incorreta. O argumento não se limita à quantidade de informação nem à quantidade de especialistas.'],
  },
  {
    ...shared, ...aiQuestion(`In the fragment from the fourth paragraph “${underline('Instead')}, we carefully consider the person’s trust and expertise”, the underlined word signals`),
    id: 'saocamilo2026-prova2-q10', number: 'Questão 10', subject: 'Inglês', content: 'Relações discursivas', difficulty: 'Fácil',
    alternatives: ['a conclusion.', 'a result.', 'an alternative.', 'a sequence.', 'an addition.'], correct: 2,
    resolution: ['Instead introduz uma conduta em substituição à mencionada anteriormente: em vez de delegar todo o pensamento a uma única pessoa, avaliamos sua confiabilidade e competência. Portanto, marca alternativa.'],
    analyses: ['Incorreta. O período não apresenta uma conclusão.', 'Incorreta. Não há relação de causa e resultado introduzida por “instead”.', 'Correta. “Instead” apresenta uma alternativa à ação anterior.', 'Incorreta. A palavra não enumera etapas de uma sequência.', 'Incorreta. Não se trata de simples acréscimo, mas de substituição de uma conduta por outra.'],
  },
];
