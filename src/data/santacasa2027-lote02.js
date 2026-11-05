const ORIGINAL_URL = 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/santacasa/2027/1dia/santacasa2027_1dia_prova.pdf';
const shared = { exam: 'Santa Casa', year: 2027, phase: '1º dia', originalUrl: ORIGINAL_URL, kind: 'objective' };
const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');

const quoteQuestion = (command) => ({
  statement: 'Read the quote published on the English Literature Facebook page, in order to answer questions 11 and 12.',
  images: [{ src: '/images/santacasa2027/q11-12-livros.jpg', alt: 'Livro aberto e a citação “People are like books: Some deceive you with their cover and others surprise you with their content.”', caption: 'www.facebook.com, 26.10.2024.' }],
  statementAfter: command,
  afterBlockTypes: ['command'],
  preview: command,
});

const SCIENCE_ARTICLE = `Leia o texto para responder às questões de 14 a 18.\n\nPublished research from the University of Vienna and the Swiss Federal Institute of Technology Zurich now establishes that human activity has pushed the planet’s rotation into territory unlike anything in 3.6 million years — and the engineers who keep Global Positioning System (GPS) working are already watching the numbers.\n\nThe finding, published in March 2026 in the Journal of Geophysical Research: Solid Earth, quantifies precisely what glaciologists and geodesists had been building toward: Earth’s days are currently lengthening at 1.33 milliseconds per century due to climate-driven ice melt and sea-level rise. ${underline('That rate')} is, by the geological record stretching back to the Late Pliocene (a period in Earth’s history that lasted from ${underline('about')} 5.33 million to 2.58 million years ago), without precedent.\n\nA companion finding — from a separate 2023 study by Ki-Weon Seo and colleagues at Seoul National University — adds a second human fingerprint: agricultural groundwater extraction shifted Earth’s rotational pole roughly 80 centimeters eastward between 1993 and 2010 alone, making groundwater pumping the single largest climate-related driver of polar drift, according to that research.\n\nTogether, the two lines of work establish something that the prior generation of Earth scientists could not have stated with confidence: humanity has become, ${underline('in the span of decades')}, a geological force potent enough to alter the mechanics of how the planet moves through space.\n\nMaxwell Templeton. www.techtimes.com, 04.06.2026. Adaptado.`;
const scienceQuestion = (command) => ({ statement: `${SCIENCE_ARTICLE}\n\n${command}`, preview: command });

const comicQuestion = (command) => ({
  statement: 'Read the comic strip by Jim Davis to answer questions 19 and 20.',
  images: [{ src: '/images/santacasa2027/q19-20-garfield.jpg', alt: 'Tirinha de Garfield em quatro painéis: a revelação de um assassino é interrompida por um alerta de tempestade, e Garfield decide reclamar com a emissora.', caption: 'Jim Davis. Garfield weighs in, 2012.' }],
  statementAfter: command,
  afterBlockTypes: ['command'],
  preview: command,
});

export const santaCasa2027Lote02 = [
  {
    ...shared, ...quoteQuestion('According to the quote,'),
    id: 'santacasa2027-1dia-q11', number: 'Questão 11', subject: 'Inglês', content: 'Interpretação de texto', difficulty: 'Fácil',
    alternatives: [
      'people’s inner qualities tend to match the image they present in society.',
      'first impressions are generally enough to evaluate someone’s personality.',
      'outward appearances can differ from the qualities found within.',
      'people’s appearance usually reflects their true character and intentions.',
      'external features provide the most reliable basis for judging others.',
    ],
    correct: 2,
    resolution: [
      'A metáfora compara a capa de um livro à aparência externa de uma pessoa e seu conteúdo às qualidades internas.',
      'Ao afirmar que algumas pessoas enganam pela capa e outras surpreendem pelo conteúdo, o texto sustenta que a aparência externa pode não corresponder ao que existe no interior.',
    ],
    analyses: [
      'Incorreta. A correspondência entre qualidades internas e imagem externa é justamente colocada em dúvida pela citação.',
      'Incorreta. O texto adverte que a primeira impressão pode enganar, não que ela seja suficiente para avaliar alguém.',
      'Correta. A oposição entre cover e content representa a possível diferença entre aparência externa e qualidades internas.',
      'Incorreta. A citação não afirma que a aparência normalmente revele caráter e intenções verdadeiros.',
      'Incorreta. Considerar características externas a base mais confiável contradiz a ideia de que a capa pode enganar.',
    ],
  },
  {
    ...shared, ...quoteQuestion(`In the excerpt from the quote “Some ${underline('deceive')} you with their cover”, the underlined word can be replaced, with no change in meaning, by:`),
    id: 'santacasa2027-1dia-q12', number: 'Questão 12', subject: 'Inglês', content: 'Vocabulário', difficulty: 'Fácil',
    alternatives: ['mislead.', 'attract.', 'influence.', 'persuade.', 'surprise.'],
    correct: 0,
    resolution: [
      'No contexto, deceive significa levar alguém a acreditar em algo que não corresponde à realidade: a capa pode causar uma impressão falsa sobre o conteúdo.',
      'Mislead apresenta esse mesmo sentido de induzir a uma compreensão equivocada e, por isso, substitui deceive sem alterar a mensagem.',
    ],
    analyses: [
      'Correta. Mislead e deceive expressam induzir alguém a uma percepção ou conclusão equivocada.',
      'Incorreta. Attract significa atrair e não contém a ideia de enganar.',
      'Incorreta. Influence é mais amplo e não necessariamente envolve falsidade ou decepção.',
      'Incorreta. Persuade significa convencer alguém a fazer ou aceitar algo, sem implicar engano.',
      'Incorreta. Surprise aparece na segunda parte da citação, mas não é sinônimo de deceive.',
    ],
  },
  {
    ...shared,
    id: 'santacasa2027-1dia-q13', number: 'Questão 13', subject: 'Inglês', content: 'Expressões idiomáticas', difficulty: 'Média',
    statement: 'Examine the IKEA¹ advertisement below. One of IKEA’s most recognizable symbols is the blue bag, often associated with practicality, storage, and everyday use.',
    images: [{ src: '/images/santacasa2027/q13-ikea.jpg', alt: 'Anúncio da IKEA com objetos saindo de uma sacola azul e o texto “New wonders can come out of the blue”.', caption: 'https://sarahparkercreative.com' }],
    statementAfter: '¹ IKEA: a Swedish multinational company known for its furniture and home accessories.\n\nIn the sentence from the advertisement “New wonders can come out of the blue”, the expression “out of the blue”, in this context, means:',
    afterBlockTypes: ['note', 'command'],
    preview: 'Na expressão publicitária “out of the blue”, qual é o sentido idiomático empregado?',
    alternatives: [
      'from a familiar and predictable source.',
      'in a sudden and unexpected way.',
      'from a distant and inaccessible place.',
      'through careful planning and organization.',
      'as a result of technological innovation.',
    ],
    correct: 1,
    resolution: [
      'A expressão idiomática out of the blue significa de repente, inesperadamente, sem aviso.',
      'O anúncio explora também um jogo visual com a sacola azul: os produtos saem literalmente de algo azul e, ao mesmo tempo, surgem como novidades inesperadas.',
    ],
    analyses: [
      'Incorreta. Familiar e previsível é contrário ao sentido de surpresa da expressão.',
      'Correta. In a sudden and unexpected way equivale ao uso idiomático de out of the blue.',
      'Incorreta. A expressão não se refere a um lugar distante ou inacessível.',
      'Incorreta. Planejamento cuidadoso elimina a ideia de acontecimento inesperado.',
      'Incorreta. O texto não atribui a expressão a inovação tecnológica.',
    ],
  },
  {
    ...shared, ...scienceQuestion('According to the text,'),
    id: 'santacasa2027-1dia-q14', number: 'Questão 14', subject: 'Inglês', content: 'Interpretação de texto científico', difficulty: 'Média',
    alternatives: [
      'the eastward displacement of Earth’s rotational pole was too small to be detected by scientific measurements.',
      'agricultural groundwater extraction is the main cause of the current increase in day length.',
      'observed changes in Earth’s rotation are part of a natural cycle unrelated to human influence.',
      'earlier scientists had already proven that human activity was driving the increase in day length and the eastward shift of Earth’s rotational pole.',
      'human activity has altered both the length of Earth’s days and the position of its rotational pole.',
    ],
    correct: 4,
    resolution: [
      'O primeiro estudo relaciona o derretimento de gelo e a elevação do nível do mar ao aumento da duração dos dias em 1,33 milissegundo por século.',
      'O segundo estudo associa a extração de água subterrânea ao deslocamento de aproximadamente 80 centímetros do polo de rotação. Assim, a ação humana alterou tanto a duração dos dias quanto a posição do polo.',
    ],
    analyses: [
      'Incorreta. O deslocamento de cerca de 80 centímetros foi medido e descrito no texto.',
      'Incorreta. A extração de água subterrânea é relacionada ao deslocamento do polo; o aumento da duração dos dias é associado ao degelo e ao nível do mar.',
      'Incorreta. As mudanças são apresentadas como consequências da atividade humana, não de um ciclo natural independente.',
      'Incorreta. O texto afirma que a geração anterior de cientistas não podia afirmar essas relações com confiança.',
      'Correta. As duas linhas de pesquisa documentam alterações na duração dos dias e na posição do polo de rotação.',
    ],
  },
  {
    ...shared, ...scienceQuestion(`In the excerpt from the second paragraph “${underline('That rate')} is, by the geological record stretching back to the Late Pliocene”, the underlined expression refers to the`),
    id: 'santacasa2027-1dia-q15', number: 'Questão 15', subject: 'Inglês', content: 'Coesão referencial', difficulty: 'Média',
    alternatives: [
      'geological record of unprecedented climate changes in the Late Pliocene period.',
      'publication describing recent findings about changes in Earth’s dynamics.',
      'amount of polar ice contributing to changes in planetary movement.',
      'current pace at which the length of Earth’s days is increasing.',
      'rise in sea level associated with long-term environmental changes.',
    ],
    correct: 3,
    resolution: [
      'A frase anterior informa que os dias estão ficando mais longos a uma taxa de 1,33 milissegundo por século.',
      'That rate retoma diretamente essa velocidade de aumento da duração dos dias, que é considerada sem precedentes no registro geológico apresentado.',
    ],
    analyses: [
      'Incorreta. O registro geológico é a referência usada para avaliar a taxa, não o referente de That rate.',
      'Incorreta. A publicação é mencionada como a sede do estudo, mas não é uma taxa.',
      'Incorreta. A quantidade de gelo não é a velocidade retomada pela expressão.',
      'Correta. That rate refere-se ao ritmo atual de 1,33 milissegundo por século no aumento da duração dos dias.',
      'Incorreta. A elevação do nível do mar é uma das causas apontadas, não o referente da taxa.',
    ],
  },
  {
    ...shared, ...scienceQuestion(`No trecho do segundo parágrafo “a period in Earth’s history that lasted from ${underline('about')} 5.33 million to 2.58 million years ago”, o termo sublinhado é empregado com o mesmo sentido do termo sublinhado em:`),
    id: 'santacasa2027-1dia-q16', number: 'Questão 16', subject: 'Inglês', content: 'Vocabulário em contexto', difficulty: 'Média',
    alternatives: [
      `The novel is ${underline('about')} a young musician trying to find his place in the world.`,
      `The journey took ${underline('about')} eight hours due to heavy traffic.`,
      `The children ran ${underline('about')} the playground during the break.`,
      `That waiter in the restaurant told them not to worry ${underline('about')} their order.`,
      `There is something unusual ${underline('about')} his explanation of the incident.`,
    ],
    correct: 1,
    resolution: [
      'No enunciado, about significa aproximadamente e apresenta uma estimativa numérica para a duração do período.',
      'Em “The journey took about eight hours”, a palavra também indica uma duração aproximada. Nas demais alternativas, about significa sobre/acerca de ou, em “ran about”, indica movimento por diferentes lugares.',
    ],
    analyses: [
      'Incorreta. Nessa frase, about significa “sobre” e apresenta o tema do romance.',
      'Correta. About oito horas significa aproximadamente oito horas, preservando o sentido de estimativa.',
      'Incorreta. Em ran about the playground, about indica circulação pelo espaço, não aproximação numérica.',
      'Incorreta. Em worry about their order, about faz parte da regência de worry e significa “com” ou “sobre”.',
      'Incorreta. Nessa frase, about significa “em” ou “a respeito de” sua explicação, sem valor de aproximação.',
    ],
  },
  {
    ...shared, ...scienceQuestion('According to the context of the third paragraph, the phrase “adds a second human fingerprint” indicates that the study from Seoul National University'),
    id: 'santacasa2027-1dia-q17', number: 'Questão 17', subject: 'Inglês', content: 'Interpretação de texto científico', difficulty: 'Média',
    alternatives: [
      'denies the idea that the human element contributes positively to climate change.',
      'demonstrates the need for double-checking previous scientific evidence.',
      'claims that until recently no human activity had a great impact on polar drift.',
      'shows that a new layer of human authorship can be seen in Earth’s polar change.',
      'monitors the evidence related to human groundwater pumping in early societies.',
    ],
    correct: 3,
    resolution: [
      'A metáfora human fingerprint representa um indício ou marca da ação humana sobre o planeta.',
      'Ao acrescentar uma segunda marca, o estudo identifica outra evidência de autoria humana: a extração de água subterrânea alterando o polo de rotação terrestre.',
    ],
    analyses: [
      'Incorreta. O texto não trata de contribuição positiva nem nega a participação humana; ele a evidencia.',
      'Incorreta. A expressão não se refere à necessidade de checar duas vezes dados anteriores.',
      'Incorreta. O estudo demonstra um impacto relevante da atividade humana, não sua ausência.',
      'Correta. A “segunda impressão digital humana” é uma nova evidência da participação humana na mudança polar.',
      'Incorreta. O período analisado é 1993–2010, não sociedades antigas.',
    ],
  },
  {
    ...shared, ...scienceQuestion(`No trecho do quarto parágrafo “humanity has become, ${underline('in the span of decades')}, a geological force”, a expressão sublinhada pode ser substituída, sem alteração de sentido, por:`),
    id: 'santacasa2027-1dia-q18', number: 'Questão 18', subject: 'Inglês', content: 'Vocabulário em contexto', difficulty: 'Média',
    alternatives: ['as a consequence of.', 'with the exception of.', 'over the course of.', 'by the end of.', 'at the beginning of.'],
    correct: 2,
    resolution: [
      'In the span of decades situa a transformação ao longo de um intervalo de algumas décadas.',
      'Over the course of tem o mesmo sentido temporal: durante ou ao longo de. Portanto, pode substituir a expressão sem alterar a mensagem.',
    ],
    analyses: [
      'Incorreta. As a consequence of introduz uma causa ou consequência, não um intervalo de tempo.',
      'Incorreta. With the exception of apresenta exclusão e não expressa duração.',
      'Correta. Over the course of decades significa ao longo de décadas, como in the span of decades.',
      'Incorreta. By the end of situa algo no limite final do período, não em toda a sua duração.',
      'Incorreta. At the beginning of marca somente o início de um período.',
    ],
  },
  {
    ...shared, ...comicQuestion(`In the sentence from the third panel “${underline('How dare they')} break into my favorite TV show for a weather report!”, the underlined phrase expresses:`),
    id: 'santacasa2027-1dia-q19', number: 'Questão 19', subject: 'Inglês', content: 'Interpretação de tirinha', difficulty: 'Fácil',
    alternatives: [
      'support for the decision made by the TV station.',
      'uncertainty regarding the interruption of the program.',
      'curiosity about an unexpected event.',
      'disbelief regarding the precision of weather reports.',
      'indignation towards an action considered unacceptable.',
    ],
    correct: 4,
    resolution: [
      'A construção How dare they não formula uma pergunta objetiva; ela expressa reprovação e indignação diante da atitude de alguém.',
      'Garfield considera inaceitável que a emissora interrompa seu programa favorito justamente no momento da revelação do assassino.',
    ],
    analyses: [
      'Incorreta. Garfield se opõe à decisão da emissora, não a apoia.',
      'Incorreta. A fala não expressa dúvida sobre a interrupção, mas reação negativa a ela.',
      'Incorreta. O personagem não busca informação nem demonstra simples curiosidade.',
      'Incorreta. A precisão da previsão do tempo não é discutida na tirinha.',
      'Correta. How dare they expressa indignação diante de uma ação julgada inaceitável.',
    ],
  },
  {
    ...shared, ...comicQuestion(`In the sentence from the fourth panel “I’m calling the station ${underline('to give them a piece of my mind')}!” the underlined fragment indicates that Garfield is about to`),
    id: 'santacasa2027-1dia-q20', number: 'Questão 20', subject: 'Inglês', content: 'Expressões idiomáticas', difficulty: 'Média',
    alternatives: [
      'complain about the interruption of the TV program.',
      'find out why his program was interrupted.',
      'ask them to plan for interruptions in the future.',
      'suggest a better way of presenting weather updates.',
      'contribute possible ideas for TV programs.',
    ],
    correct: 0,
    resolution: [
      'A expressão to give someone a piece of your mind significa dizer com franqueza e irritação o que se pensa, geralmente para repreender ou reclamar.',
      'Ao telefonar para a emissora, Garfield pretende manifestar sua insatisfação com a interrupção do programa.',
    ],
    analyses: [
      'Correta. Garfield vai reclamar com a emissora pela interrupção do programa.',
      'Incorreta. A expressão não indica um pedido de explicação sobre os motivos da interrupção.',
      'Incorreta. O personagem não está solicitando um planejamento de interrupções futuras.',
      'Incorreta. Não há proposta de um formato melhor para os boletins meteorológicos.',
      'Incorreta. Piece of my mind não significa contribuir com ideias para programas, mas expressar uma queixa de modo direto.',
    ],
  },
];
