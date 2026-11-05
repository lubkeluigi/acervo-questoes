const DAY2_URL = 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/santacasa/2027/2dia/santacasa2027_2dia_prova.pdf';

const shared = {
  exam: 'Santa Casa', year: 2027, phase: '2º dia', originalUrl: DAY2_URL,
  officialAnswerUrl: '/sources/santacasa2027-respostas-esperadas.pdf', kind: 'discursive',
  officialNotes: [
    'Resposta correta acrescida de informação errada implicou perda de ponto.',
    'A pontuação deve seguir o atendimento a cada critério; esta é uma autoavaliação, não uma correção automática.',
  ],
};

export const santaCasa2027Lote09 = [
  {
    ...shared,
    id: 'santacasa2027-2dia-q02', number: 'Questão 02', subject: 'Biologia', content: 'Nitrogênio, poluição e eutrofização', difficulty: 'Média',
    statement: 'De acordo com a Avaliação de Ecossistemas do Milênio (2005), as atividades humanas mais do que duplicaram a liberação anual de nitrogênio dos ecossistemas terrestres para o restante do ambiente desde 1950. Esse fenômeno decorre, majoritariamente, do aumento expressivo no uso de fertilizantes nitrogenados na agricultura, com previsões de que esse volume dobre novamente até 2050. Essa inserção excessiva de nitrogênio no ar e na água gera poluição e severos desequilíbrios ecológicos. Assim, a sobrecarga de nitrogênio consolidou-se como um problema ambiental grave e crescente em escalas local, regional e global, embora ainda receba pouca atenção pública.\n\nG. Tyler Miller e Scott E. Spoolman. Ecologia e sustentabilidade, 2012. Adaptado.',
    blockTypes: ['prose', 'source'],
    parts: [
      {
        id: 'a', prompt: 'Cite um polímero orgânico nitrogenado que integra a membrana plasmática das células. Que tipo de poluição atmosférica pode ser ocasionada pela liberação excessiva de óxidos de nitrogênio (NOx)?', maxScore: 2,
        expected: 'Proteína. A liberação excessiva de óxidos de nitrogênio pode ocasionar chuva ácida.',
        criteria: [
          { points: 1, text: 'Cita proteína como polímero orgânico nitrogenado presente na membrana plasmática.' },
          { points: 1, text: 'Identifica a chuva ácida como poluição atmosférica associada à liberação excessiva de NOx.' },
        ],
      },
      {
        id: 'b', prompt: 'Por que o uso excessivo de fertilizantes nitrogenados na agricultura tende a desencadear a eutrofização de rios e lagos? Qual condição abiótica da água causa a morte dos animais durante a eutrofização?', maxScore: 2,
        expected: 'Porque a chuva transporta o excesso de fertilizantes nitrogenados, como o nitrato, do solo para os corpos d’água. Isso aumenta a carga de nutrientes e provoca o crescimento descontrolado de algas. A condição que causa a morte dos animais é a falta de gás oxigênio na água.',
        criteria: [
          { points: 1, text: 'Relaciona o transporte do excesso de fertilizantes do solo para rios e lagos ao aumento de nutrientes e ao crescimento descontrolado de algas.' },
          { points: 1, text: 'Identifica a falta de gás oxigênio na água como causa da morte dos animais.' },
        ],
      },
    ],
    preview: 'Relacione fertilizantes nitrogenados, poluição atmosférica e eutrofização.',
  },
  {
    ...shared,
    id: 'santacasa2027-2dia-q03', number: 'Questão 03', subject: 'Biologia', content: 'AME, genética e terapia gênica', difficulty: 'Média',
    statement: 'A atrofia muscular espinhal (AME) é uma doença genética irreversível causada pela perda de função das duas cópias (materna e paterna) do gene SMN1, localizado no cromossomo 5. Esse gene codifica a proteína SMN, que promove a sobrevivência dos neurônios motores. Sem ela, esses neurônios degeneram e deixam de transmitir os comandos do cérebro aos músculos. Como consequência, ocorre perda progressiva do tônus e da força muscular, e a criança apresenta dificuldades para manter o corpo ereto, sentar-se, segurar objetos, engolir e respirar. Um dos tratamentos aprovados para AME é a terapia gênica, na qual um vírus modificado em laboratório transporta às células da medula espinhal uma cópia funcional do SMN1. Em um teste com 126 participantes de 14 países, entre eles o Brasil, a terapia melhorou significativamente a capacidade de crianças e adolescentes de manter a postura e realizar alguns movimentos.\n\nhttps://revistapesquisa.fapesp.br, 03.02.2026. Adaptado.',
    blockTypes: ['prose', 'source'],
    parts: [
      {
        id: 'a', prompt: 'Qual deve ser o genótipo dos pais de uma criança com AME, considerando que essa doença é autossômica recessiva? Em quantas moléculas de DNA o gene SMN1 é encontrado em uma célula somática na fase G1 de uma pessoa homozigótica dominante?', maxScore: 2,
        expected: 'Os pais devem apresentar genótipo Aa. Em uma célula somática na fase G1 de uma pessoa homozigótica dominante, o gene SMN1 é encontrado em duas moléculas de DNA.',
        accepted: 'Para o genótipo dos pais, também foi aceita a resposta “heterozigoto”.',
        criteria: [
          { points: 1, text: 'Indica que os pais apresentam genótipo Aa.' },
          { points: 1, text: 'Informa que o gene SMN1 é encontrado em duas moléculas de DNA na condição e fase indicadas.' },
        ],
      },
      {
        id: 'b', prompt: 'Como é denominada a unidade funcional contrátil presente no interior de uma fibra muscular esquelética? Como a técnica do DNA recombinante é utilizada na terapia gênica para o tratamento da AME?', maxScore: 2,
        expected: 'A unidade funcional contrátil é o sarcômero. Na técnica de DNA recombinante, enzimas de restrição e ligases são utilizadas para inserir o gene de interesse, SMN1, no material genético do vírus. O vírus transporta o DNA recombinante, formado pelo DNA viral e pelo gene SMN1, até as células da medula espinhal.',
        criteria: [
          { points: 1, text: 'Identifica o sarcômero como unidade funcional contrátil da fibra muscular esquelética.' },
          { points: 1, text: 'Explica o uso de enzimas de restrição e ligases para inserir o SMN1 no material genético viral e o transporte desse DNA recombinante às células da medula.' },
        ],
      },
    ],
    preview: 'Analise a herança da AME e o uso de DNA recombinante na terapia gênica.',
  },
  {
    ...shared,
    id: 'santacasa2027-2dia-q04', number: 'Questão 04', subject: 'Biologia', content: 'Desenvolvimento, mimetismo e evolução', difficulty: 'Média',
    statement: 'Quando são pequenas, as lagartas das borboletas-cauda-de-andorinha cítricas são facilmente confundidas com fezes de pássaros. Elas também emitem um cheiro ruim quando predadores se aproximam demais. As lagartas conseguem se disfarçar quando são pequenas, mas à medida que envelhecem, mudam de estratégia. As lagartas desbotam para um verde claro à medida que crescem e se misturam às folhas em que vivem.',
    blockTypes: ['prose'],
    images: [{ src: '/images/santacasa2027/2dia-q04-lagarta.jpg', alt: 'Lagarta de borboleta-cauda-de-andorinha cítrica sobre uma folha, com coloração escura e manchas claras que a fazem parecer fezes de pássaro.', caption: 'www.nhm.ac.uk. Adaptado.' }],
    parts: [
      {
        id: 'a', prompt: 'Por qual etapa de desenvolvimento uma lagarta de borboleta passará até chegar à fase adulta? Qual é o nível trófico ocupado por essa lagarta?', maxScore: 2,
        expected: 'A lagarta passará pela fase de casulo antes de chegar à fase adulta. Ela ocupa o nível trófico de consumidor primário, ou segundo nível trófico.',
        accepted: 'Para a etapa de desenvolvimento, também foram aceitas “pupa” e “crisálida”; para o nível trófico, “segundo nível trófico”.',
        criteria: [
          { points: 1, text: 'Identifica a fase de casulo entre a lagarta e o adulto.' },
          { points: 1, text: 'Classifica a lagarta como consumidor primário.' },
        ],
      },
      {
        id: 'b', prompt: 'Como é denominado o mecanismo adaptativo de defesa em que as lagartas de borboletas-cauda-de-andorinha cítricas se confundem com as fezes de pássaros? Como a Teoria Sintética da Evolução explica a semelhança dessas lagartas com as fezes de pássaros?', maxScore: 2,
        expected: 'O mecanismo é o mimetismo. A Teoria Sintética da Evolução explica essa semelhança como resultado de mutações e/ou recombinações gênicas aleatórias, que geram variabilidade. As variantes que conferem maior proteção contra predação são selecionadas naturalmente, aumentando a sobrevivência e a reprodução dos indivíduos.',
        criteria: [
          { points: 1, text: 'Denomina o mecanismo adaptativo como mimetismo.' },
          { points: 1, text: 'A explicação contém os três pontos oficiais: mutações e/ou recombinações gênicas, proteção contra predação e aumento da reprodução por seleção natural.' },
        ],
      },
    ],
    preview: 'Identifique o desenvolvimento da lagarta e explique seu mimetismo pela evolução.',
  },
  {
    ...shared,
    id: 'santacasa2027-2dia-q05', number: 'Questão 05', subject: 'Biologia', content: 'Fotoperiodismo e floração', difficulty: 'Difícil',
    statement: 'O esquema mostra a resposta fisiológica de floração de determinada planta, em função da duração do período de luz e do período de escuridão ao longo de um dia.',
    blockTypes: ['prose'],
    images: [{ src: '/images/santacasa2027/2dia-q05-fotoperiodo.svg', alt: 'Três situações de fotoperíodo em 24 horas. Na primeira, a escuridão termina antes do fotoperíodo crítico e não há flores. Na segunda, a escuridão ultrapassa o fotoperíodo crítico e há flores. Na terceira, um flash de luz interrompe a escuridão longa e não há flores. Os rótulos indicam escuridão, flash de luz, fotoperíodo crítico e luz.', caption: 'https://gardening.stackexchange.com. Adaptado.' }],
    parts: [
      {
        id: 'a', prompt: 'Em condições naturais, em qual estação do ano é mais provável que essa planta floresça? Como essa planta é classificada quanto à resposta fisiológica de floração?', maxScore: 2,
        expected: 'É mais provável que floresça no inverno ou outono, quando os períodos de escuridão são mais longos. É uma planta de dia curto, cuja floração ocorre quando o período de escuro ultrapassa o fotoperíodo crítico.',
        accepted: 'Para a classificação, foram aceitas: PDC, planta de noite longa, planta de fotoperíodo diurno curto, fotoperíodo curto, fotoperíodo reduzido, longo período noturno e curto período de luz.',
        rejected: 'Não foram aceitas: “período curto”, “planta de pouca luz”, “planta noturna”, “planta de escuro”, “fototropismo negativo”, “baixo ou pequeno fotoperíodo”, “ombrófila”, “de sombra”, “invernal” e “sazonal”.',
        criteria: [
          { points: 1, text: 'Indica inverno ou outono, relacionando a estação a períodos mais longos de escuridão.' },
          { points: 1, text: 'Classifica como planta de dia curto e relaciona a floração ao período de escuro que ultrapassa o fotoperíodo crítico.' },
        ],
      },
      {
        id: 'b', prompt: 'Como é denominado o pigmento proteico sensível à luz que regula a floração dessa planta? Por que o período de escuridão é determinante para a floração dessa planta?', maxScore: 2,
        expected: 'O pigmento é o fitocromo. A planta necessita de um período de escuridão longo e contínuo para florescer. Um flash de luz durante a noite interrompe esse período e altera o estado do fitocromo, impedindo a floração.',
        accepted: 'Para o pigmento, foram aceitas: pigmento fitocrômico, sistema fitocrômico, fitocromo vermelho, fitocromo C, pigmento fotoregulador, fotoregulador vermelho, fotorreceptor vermelho, Pfr ou Pr. Na explicação, era necessário relacionar noite longa e contínua à floração e interrupção da noite por luz à não floração. Também foram aceitas explicações coerentes com a interconversão entre Pr e Pfr e com a inibição da floração pelo flash de luz.',
        rejected: 'Para o pigmento, não foram aceitas: florígeno, clorofila, cromófito, citocromo, pigmento vermelho, vermelho distante, fototropismo de vermelho curto, fotocrômio, fitohormônio, PO700, Fpr ou Fr, Fv, Pf, Pfp, Fcv e Fc. Na explicação, não bastaram respostas genéricas como “a planta precisa de pouca luz”, “o fitocromo controla a floração”, “a planta precisa de um dia curto” ou apenas afirmar que o flash interrompe a floração, sem explicar a necessidade de escuridão longa e contínua.',
        criteria: [
          { points: 1, text: 'Identifica o fitocromo como pigmento proteico sensível à luz.' },
          { points: 1, text: 'Explica a necessidade de escuridão longa e contínua e como o flash de luz interrompe esse período, altera o fitocromo e impede a floração.' },
        ],
      },
    ],
    preview: 'Interprete o fotoperíodo crítico, o fitocromo e a interrupção da noite.',
  },
  {
    ...shared,
    id: 'santacasa2027-2dia-q06', number: 'Questão 06', subject: 'Biologia', content: 'Enfisema e equilíbrio ácido-base', difficulty: 'Média',
    statement: 'O enfisema pulmonar é um distúrbio caracterizado pela destruição das paredes alveolares, que produz espaços aéreos anormalmente grandes que permanecem cheios de ar durante a exalação. Com menor área para troca gasosa, a passagem de gás oxigênio ($O_2$) pelos capilares e alvéolos é reduzida. O nível sanguíneo de gás oxigênio é também um pouco diminuído, e qualquer exercício leve que aumente a demanda celular de gás oxigênio deixa o paciente sem fôlego.\n\nGerard J. Tortora e Bryan Derrickson. Corpo Humano: fundamentos de anatomia e fisiologia, 2017. Adaptado.',
    blockTypes: ['prose', 'source'],
    parts: [
      {
        id: 'a', prompt: 'Qual tipo de transporte passivo permite a passagem do gás oxigênio pelo endotélio dos capilares e pelo epitélio alveolar? Que estruturas celulares movimentam o muco presente na superfície da traqueia?', maxScore: 2,
        expected: 'O transporte é a difusão simples. Os cílios são as estruturas celulares que movimentam o muco presente na superfície da traqueia.',
        criteria: [
          { points: 1, text: 'Identifica a difusão simples como transporte passivo do gás oxigênio.' },
          { points: 1, text: 'Indica os cílios como estruturas que movimentam o muco na traqueia.' },
        ],
      },
      {
        id: 'b', prompt: 'Qual íon pode ser eliminado pelos rins em caso de acidose sanguínea decorrente do enfisema pulmonar? Por que uma pessoa com enfisema pulmonar tende a apresentar acidose sanguínea?', maxScore: 2,
        expected: 'Os rins podem eliminar prótons, ou íons de hidrogênio ($H^+$). Uma pessoa com enfisema tende a apresentar acidose porque seu organismo não consegue eliminar adequadamente o gás carbônico.',
        criteria: [
          { points: 1, text: 'Indica a eliminação renal de prótons ou íons de hidrogênio ($H^+$).' },
          { points: 1, text: 'Relaciona a acidose à dificuldade de eliminar o gás carbônico do organismo.' },
        ],
      },
    ],
    preview: 'Relacione enfisema, difusão, cílios e acidose sanguínea.',
  },
];
