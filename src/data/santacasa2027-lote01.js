const DAY1_URL = 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/santacasa/2027/1dia/santacasa2027_1dia_prova.pdf';
const DAY2_URL = 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/santacasa/2027/2dia/santacasa2027_2dia_prova.pdf';

const day1 = {
  exam: 'Santa Casa', year: 2027, phase: '1º dia', originalUrl: DAY1_URL, kind: 'objective',
};

const CAMOES_BLOCKS = ['label', 'poem', 'poem', 'poem', 'poem', 'source', 'note', 'command'];
const camoes = (command) => ({
  statement: `Leia o soneto de Luís de Camões para responder às questões de 01 a 05.\n\nSete anos de pastor Jacó servia\nLabão, pai de Raquel, serrana¹ bela;\nMas não servia ao pai, servia a ela,\nE a ela só por prêmio pretendia.\n\nOs dias, na esperança de um só dia,\nPassava, contentando-se com vê-la;\nPorém o pai, usando de cautela,\nEm lugar de Raquel lhe dava Lia.\n\nVendo o triste pastor que com enganos\nLhe fora assim negada a sua pastora,\nComo se a não tivera merecida,\n\nComeça de servir outros sete anos,\nDizendo: — Mais servira, se não fora\nPara tão longo amor tão curta a vida!\n\nLuís de Camões. Lírica, 1997.\n\n¹ serrana: camponesa.\n\n${command}`,
  blockTypes: CAMOES_BLOCKS,
  works: ['Lírica, 1997.'],
  preview: command,
});

const CHRONICLE = `Para responder às questões de 07 a 10, leia a crônica intitulada “Pão em pílulas”, de Olavo Bilac, publicada originalmente em 06.09.1901.\n\nPassando em certa rua do centro da cidade, vi à porta de uma loja uma prateleira grande em que havia, em grande número, umas pequeninas pílulas de um amarelo tostado. Defronte da prateleira, um cavalheiro, cuja atenção provavelmente fora como a minha atraída na passagem, gesticulava e resmungava:\n\n— Nunca imaginei que fosse verdade o que dizem os jornais! Como se rouba o povo!\n\nIntrigado, resolvi interpelar esse indignado cavalheiro:\n\n— Que pílulas são estas, meu estimado senhor?\n\nO homem olhou-me com espanto:\n\n— Pílulas?! Que pílulas?\n\n— Estas que aqui estão sobre a tábua, meu estimável senhor! Estes grânulos dosimétricos...\n\n— Que grânulos dosimétricos, homem? Pois não está vendo que estas bolinhas são pães, pães de trigo, verdadeiros pães, pães legítimos?!\n\nEnfiei... Mirei longamente o homem, mirei depois as bolinhas. Aproximei-me ainda mais da prateleira, e vi que o homem dizia a verdade: eram pães! Eram pães de quarenta réis!\n\nA princípio, fiquei indignado. Sem demora, porém, caminhando para a rua do Ouvidor, a reflexão me acalmou a cólera. Uma pílula de pão, por quarenta réis... realmente não é caro! Há pílulas menos baratas: as de arsênico, as de morfina, as de estricnina. E essas matam! Ao passo que as de pão não matam ninguém, — nem mesmo de indigestão!\n\nDe que se queixa o povo? Acredita o povo que os padeiros reduzam a tão fracas dimensões o pão nosso de cada dia apenas com o intuito de enriquecer à nossa custa? Não sabe o povo que o maior inimigo da saúde é o excesso de alimentação? Pode acaso ter saúde quem se empanturra de sol a sol, comendo desabaladamente? Não sabe o povo que o jejum é a base do aperfeiçoamento moral?\n\nNa Índia, os fakirs, quando querem embeber a alma na contemplação divina, a primeira coisa que fazem é deixar de comer. A Santa Madre Igreja Católica muito sabiamente coloca entre as penitências indispensáveis o jejum. Encher o estômago é ficar igual às bestas; trazê-lo vazio é ficar igual aos anjos!\n\nOs padeiros do Rio de Janeiro sabem perfeitamente disso. Não vão ao extremo de deixar o povo sem pão: mas procedem com sabedoria, servindo-lhe o trigo em glóbulos dosimétricos... Abençoada e providente classe!\n\nOlavo Bilac. Registro: crônicas da Belle Époque carioca, 2011.`;

export const santaCasa2027Lote01 = [
  {
    ...day1, ...camoes('No soneto, o personagem Labão é caracterizado como'),
    id: 'santacasa2027-1dia-q01', number: 'Questão 01', subject: 'Literatura', content: 'Classicismo e interpretação', difficulty: 'Fácil',
    alternatives: ['ardiloso.', 'abnegado.', 'resignado.', 'compassivo.', 'subserviente.'],
    correct: 0,
    resolution: [
      'Labão usa de cautela e entrega Lia a Jacó no lugar de Raquel, embora o pastor tivesse trabalhado pelo casamento com Raquel.',
      'A terceira estrofe reforça a ação enganosa ao mencionar “enganos”. Portanto, a caracterização adequada é ardiloso: alguém que age com astúcia para enganar.',
    ],
    analyses: [
      'Correta. A substituição planejada de Raquel por Lia e a referência a “enganos” caracterizam Labão como ardiloso.',
      'Incorreta. Abnegado é quem renuncia aos próprios interesses em benefício de outra pessoa, comportamento não atribuído a Labão.',
      'Incorreta. Resignado é quem aceita uma situação sem reagir; Labão, ao contrário, interfere ativamente no casamento.',
      'Incorreta. Não há compaixão no modo como Labão conduz o acordo e engana Jacó.',
      'Incorreta. O soneto não apresenta Labão como submisso; ele exerce poder sobre o destino de Jacó e das filhas.',
    ],
  },
  {
    ...day1, ...camoes('Explorado por Camões em seu soneto, o tema da vassalagem amorosa remete, sobretudo, à lírica'),
    id: 'santacasa2027-1dia-q02', number: 'Questão 02', subject: 'Literatura', content: 'Trovadorismo', difficulty: 'Fácil',
    alternatives: ['trovadoresca.', 'simbolista.', 'naturalista.', 'árcade.', 'parnasiana.'],
    correct: 0,
    resolution: [
      'Na vassalagem amorosa, o homem se coloca como servidor de uma mulher idealizada e praticamente inatingível, assim como um vassalo se submete ao senhor feudal.',
      'Esse tema é característico das cantigas de amor da lírica trovadoresca medieval e é reelaborado por Camões no soneto.',
    ],
    analyses: [
      'Correta. As cantigas de amor trovadorescas apresentam a relação amorosa por meio da submissão e do serviço do eu lírico à dama.',
      'Incorreta. O simbolismo valoriza sugestão, musicalidade e transcendência, não sendo a origem da convenção da vassalagem amorosa.',
      'Incorreta. O naturalismo é uma escola do século XIX associada à determinação científica do comportamento, sem relação com essa convenção medieval.',
      'Incorreta. A poesia árcade busca simplicidade, equilíbrio e vida bucólica; não é a matriz da vassalagem amorosa.',
      'Incorreta. O parnasianismo cultiva a forma perfeita e a impessoalidade, características distintas do tema apresentado.',
    ],
  },
  {
    ...day1, ...camoes('Considerando o contexto histórico e cultural de produção do soneto, depreende-se da última estrofe uma concepção amorosa de matriz'),
    id: 'santacasa2027-1dia-q03', number: 'Questão 03', subject: 'Literatura', content: 'Humanismo e concepção amorosa', difficulty: 'Média',
    alternatives: ['positivista.', 'platônica.', 'epicurista.', 'naturalista.', 'iluminista.'],
    correct: 1,
    resolution: [
      'Na última estrofe, Jacó afirma que serviria ainda mais se a vida não fosse tão curta para um amor tão longo. O sentimento se projeta além da duração da existência material.',
      'A valorização de um amor ideal, duradouro e elevado acima das limitações terrenas aproxima a concepção da matriz platônica presente na tradição poética renascentista.',
    ],
    analyses: [
      'Incorreta. O positivismo não fundamenta a idealização amorosa expressa no soneto.',
      'Correta. O amor é apresentado como ideal e superior às limitações temporais e materiais, em consonância com a tradição platônica.',
      'Incorreta. A busca do prazer e da serenidade epicurista não explica a entrega prolongada e idealizada do pastor.',
      'Incorreta. Não há abordagem determinista ou científica do comportamento amoroso.',
      'Incorreta. A razão e o conhecimento, valores associados ao Iluminismo, não constituem a matriz da concepção amorosa do poema.',
    ],
  },
  {
    ...day1, ...camoes('Possui valor anafórico a palavra sublinhada no seguinte verso:'),
    id: 'santacasa2027-1dia-q04', number: 'Questão 04', subject: 'Português', content: 'Coesão referencial', difficulty: 'Média',
    alternatives: [
      '“E a̲ ela só por prêmio pretendia.” (1ª estrofe)',
      '“Lhe fora assim negada a̲ sua pastora,” (3ª estrofe)',
      '“Mas não servia ao pai, servia a̲ ela,” (1ª estrofe)',
      '“Como se a̲ não tivera merecida,” (3ª estrofe)',
      '“Para tão longo amor tão curta a̲ vida!” (4ª estrofe)',
    ],
    correct: 3,
    resolution: [
      'A referência anafórica ocorre quando um elemento retoma algo já apresentado no texto.',
      'Em “Como se a não tivera merecida”, o “a” é pronome oblíquo e retoma “a sua pastora”, mencionada no verso anterior. A construção equivale a “como se não tivesse merecido a sua pastora”.',
    ],
    analyses: [
      'Incorreta. Em “a ela”, o elemento sublinhado é preposição e não retoma um referente anterior.',
      'Incorreta. Em “a sua pastora”, trata-se de artigo que acompanha a expressão nominal.',
      'Incorreta. Em “servia a ela”, o “a” é preposição exigida pela regência verbal.',
      'Correta. O “a” funciona como pronome e retoma “a sua pastora”, estabelecendo coesão anafórica.',
      'Incorreta. Em “a vida”, o elemento é artigo determinante do substantivo.',
    ],
  },
  {
    ...day1, ...camoes('Na linguagem poética, visando obter maior expressividade, pode-se empregar um tempo verbal em lugar de outro, a exemplo do que ocorre no seguinte verso:'),
    id: 'santacasa2027-1dia-q05', number: 'Questão 05', subject: 'Português', content: 'Tempos verbais', difficulty: 'Difícil',
    alternatives: [
      '“E a ela só por prêmio pretendia.” (1ª estrofe)',
      '“Vendo o triste pastor que com enganos” (3ª estrofe)',
      '“Mas não servia ao pai, servia a ela,” (1ª estrofe)',
      '“Passava, contentando-se com vê-la;” (2ª estrofe)',
      '“Dizendo: — Mais servira, se não fora” (4ª estrofe)',
    ],
    correct: 4,
    resolution: [
      'Em “Mais servira, se não fora”, a forma “servira”, do pretérito mais-que-perfeito do indicativo, adquire valor de futuro do pretérito: “mais serviria”.',
      'O emprego expressivo de uma forma temporal com valor de outra produz a construção condicional característica da linguagem camoniana.',
    ],
    analyses: [
      'Incorreta. “Pretendia” mantém o valor regular do pretérito imperfeito do indicativo.',
      'Incorreta. “Vendo” é forma nominal do verbo, no gerúndio, e não exemplifica a substituição temporal solicitada.',
      'Incorreta. “Servia” expressa ação habitual ou contínua no passado, sem assumir o valor de outro tempo.',
      'Incorreta. “Passava” também apresenta uso regular do pretérito imperfeito.',
      'Correta. “Servira” assume o valor condicional de “serviria”, com o pretérito mais-que-perfeito empregado no lugar do futuro do pretérito.',
    ],
  },
  {
    ...day1,
    id: 'santacasa2027-1dia-q06', number: 'Questão 06', subject: 'Português', content: 'Semântica e humor', difficulty: 'Média',
    statement: 'Examine o meme publicado pelo perfil @ancientcringe no Instagram em 18.12.2025.',
    images: [{ src: '/images/santacasa2027/q06-meme.jpg', alt: 'Pintura antiga com os textos “Have you seen my TikTok?” e “Good God. How old are you? It’s called a watch.”', caption: 'Meme publicado pelo perfil @ancientcringe.' }],
    statementAfter: 'Contribui para o efeito de humor do meme o fenômeno linguístico denominado',
    preview: 'Contribui para o efeito de humor do meme o fenômeno linguístico denominado',
    alternatives: [
      'antonímia: duas palavras que têm significados opostos.',
      'hiponímia: relação entre uma palavra de sentido mais específico e outra de sentido mais amplo.',
      'onomatopeia: palavra ou conjunto de palavras que representa um ruído ou som.',
      'homografia: duas palavras idênticas na grafia que têm significados diferentes.',
      'sinonímia: duas palavras que têm significados muito próximos.',
    ],
    correct: 2,
    resolution: [
      'O nome “TikTok” remete à sonoridade de “tick-tock”, representação convencional do som produzido por um relógio.',
      'A resposta “It’s called a watch” explora essa associação: a pessoa mais velha entende a expressão como o tique-taque de um relógio, e não como o nome da rede social. O humor se apoia, portanto, na onomatopeia.',
    ],
    analyses: [
      'Incorreta. O meme não opõe palavras de significados contrários.',
      'Incorreta. Não se estabelece uma relação de inclusão entre termos específicos e gerais.',
      'Correta. “TikTok” é associado ao tique-taque do relógio, som representado linguisticamente por uma onomatopeia.',
      'Incorreta. O efeito não decorre de duas palavras com grafia idêntica e significados diferentes.',
      'Incorreta. Não há aproximação de significado entre sinônimos; o jogo envolve a sonoridade do relógio.',
    ],
  },
  {
    ...day1,
    id: 'santacasa2027-1dia-q07', number: 'Questão 07', subject: 'Literatura', content: 'Crônica e ironia', difficulty: 'Média',
    statement: `${CHRONICLE}\n\nO principal recurso retórico mobilizado pelo cronista nos últimos quatro parágrafos do texto é`,
    preview: 'O principal recurso retórico mobilizado pelo cronista nos últimos quatro parágrafos do texto é',
    alternatives: ['a ironia.', 'o eufemismo.', 'a hipérbole.', 'o paradoxo.', 'a personificação.'],
    correct: 0,
    resolution: [
      'O narrador passa a elogiar a redução dos pães como se ela fosse benéfica à saúde e à moral da população.',
      'Esse elogio aparente contradiz a crítica ao lucro dos padeiros e à exploração do povo. A ironia consiste em afirmar o contrário do juízo efetivamente defendido.',
    ],
    analyses: [
      'Correta. O elogio dos padeiros e das supostas virtudes do pão minúsculo comunica, ironicamente, uma crítica.',
      'Incorreta. O eufemismo suaviza uma expressão, enquanto a passagem intensifica a crítica por meio do elogio aparente.',
      'Incorreta. Embora haja exageros pontuais, o recurso estruturante dos parágrafos é a ironia.',
      'Incorreta. O efeito não se organiza principalmente como uma contradição lógica paradoxal.',
      'Incorreta. Não há atribuição predominante de características humanas a seres inanimados.',
    ],
  },
  {
    ...day1,
    id: 'santacasa2027-1dia-q08', number: 'Questão 08', subject: 'Literatura', content: 'Discurso e interpretação', difficulty: 'Difícil',
    statement: `${CHRONICLE}\n\nNa crônica, referências ao discurso científico (“maior inimigo da saúde”, “excesso de alimentação” etc) e ao discurso religioso (“jejum”, “aperfeiçoamento moral” etc) são mobilizadas para justificar a diminuição do tamanho dos pães. Tal procedimento contribui para`,
    preview: 'Os discursos científico e religioso são mobilizados para justificar a diminuição do tamanho dos pães, contribuindo para',
    alternatives: [
      'reforçar a ideia de que diferentes sistemas de pensamento convergem para explicar e solucionar um problema social.',
      'questionar a legitimidade do uso de discursos de autoridade para racionalizar e mascarar um problema social.',
      'evidenciar a neutralidade dos discursos científicos e religiosos na orientação das práticas alimentares da época.',
      'demonstrar que o avanço técnico elimina as contradições entre os discursos da ciência, da religião e da economia.',
      'defender a substituição das explicações religiosas por explicações estritamente científicas no campo da alimentação.',
    ],
    correct: 1,
    resolution: [
      'A ciência e a religião são convocadas pelo narrador irônico para transformar a redução interesseira do pão em suposto benefício físico e espiritual.',
      'Ao satirizar essa justificativa, Bilac questiona o uso de discursos de autoridade para encobrir a exploração econômica e dar aparência racional a um problema social.',
    ],
    analyses: [
      'Incorreta. A convergência aparente não resolve o problema; ela serve à racionalização irônica da exploração.',
      'Correta. A crônica desmascara o uso interessado de autoridades científica e religiosa para legitimar a redução do pão.',
      'Incorreta. Os discursos são apresentados como ideologicamente mobilizados, não como neutros.',
      'Incorreta. O texto não celebra avanço técnico nem elimina contradições entre os campos.',
      'Incorreta. Ciência e religião são igualmente incluídas na sátira; não há defesa da substituição de uma pela outra.',
    ],
  },
  {
    ...day1,
    id: 'santacasa2027-1dia-q09', number: 'Questão 09', subject: 'Português', content: 'Discurso direto e indireto', difficulty: 'Média',
    statement: `${CHRONICLE}\n\n“— Nunca imaginei que fosse verdade o que dizem os jornais! Como se rouba o povo!” (2º parágrafo)\n\nAo se transpor a fala do cavalheiro para o discurso indireto, os seguintes verbos deverão sofrer alteração em sua forma:`,
    preview: 'Na transposição da fala do cavalheiro para o discurso indireto, quais verbos deverão sofrer alteração?',
    alternatives: [
      '“imaginei” e “dizem”, apenas.',
      '“imaginei”, “dizem” e “rouba”, apenas.',
      '“fosse” e “dizem”, apenas.',
      '“imaginei”, “fosse” e “dizem”, apenas.',
      '“imaginei”, “fosse”, “dizem” e “rouba”.',
    ],
    correct: 1,
    resolution: [
      'Na transposição, “imaginei” pode tornar-se “imaginara”, “dizem” passa a “diziam” e “rouba” passa a “roubava”, acompanhando a mudança para um quadro de narração no passado.',
      'A forma “fosse” já está no pretérito imperfeito do subjuntivo e pode permanecer: “disse que nunca imaginara que fosse verdade o que diziam os jornais e como se roubava o povo”.',
    ],
    analyses: [
      'Incorreta. Além de “imaginei” e “dizem”, a forma “rouba” também se altera para “roubava”.',
      'Correta. “Imaginei”, “dizem” e “rouba” sofrem alteração; “fosse” pode ser mantido.',
      'Incorreta. “Imaginei” também precisa ser alterado, enquanto “fosse” pode permanecer.',
      'Incorreta. A lista omite “rouba” e inclui indevidamente “fosse”.',
      'Incorreta. “Fosse” já se encontra em forma adequada à transposição e não precisa mudar.',
    ],
  },
  {
    ...day1,
    id: 'santacasa2027-1dia-q10', number: 'Questão 10', subject: 'Português', content: 'Orações subordinadas adverbiais', difficulty: 'Fácil',
    statement: `${CHRONICLE}\n\n“Na Índia, os fakirs, quando querem embeber a alma na contemplação divina, a primeira coisa que fazem é deixar de comer.” (12º parágrafo)\n\nNo contexto em que se insere, a oração adverbial expressa ideia de`,
    preview: 'Na oração “quando querem embeber a alma na contemplação divina”, a oração adverbial expressa ideia de',
    alternatives: ['consequência.', 'finalidade.', 'causa.', 'tempo.', 'concessão.'],
    correct: 3,
    resolution: [
      'A conjunção “quando” introduz a circunstância em que os fakirs deixam de comer.',
      'A oração “quando querem embeber a alma na contemplação divina” situa temporalmente a ação principal e, por isso, é classificada como adverbial temporal.',
    ],
    analyses: [
      'Incorreta. Não se apresenta um resultado introduzido por relação consecutiva.',
      'Incorreta. Embora exista uma finalidade na contemplação, a conjunção “quando” estabelece diretamente uma relação temporal.',
      'Incorreta. A oração não apresenta a causa da ação principal, mas a circunstância temporal.',
      'Correta. “Quando” introduz uma oração adverbial temporal.',
      'Incorreta. Não há ideia de concessão, que seria expressa por construções como “embora” ou “ainda que”.',
    ],
  },
  {
    exam: 'Santa Casa', year: 2027, phase: '2º dia', originalUrl: DAY2_URL,
    officialAnswerUrl: '/sources/santacasa2027-respostas-esperadas.pdf', kind: 'discursive',
    id: 'santacasa2027-2dia-q01', number: 'Questão 01', subject: 'Biologia', content: 'Fungos e ciclo de vida', difficulty: 'Média',
    statement: 'Analise a imagem do ciclo de vida de um fungo basidiomiceto.',
    images: [{ src: '/images/santacasa2027/2dia-q01-fungo.jpg', alt: 'Ciclo de vida de um basidiomiceto, com plasmogamia, fusão dos núcleos e formação de basidiósporos; os pontos H, Z e W estão identificados.', caption: 'Sônia Lopes e Sergio Rosso. Conecte Bio 3, 2014. Adaptado.' }],
    parts: [
      {
        id: 'a', prompt: 'Por que os fungos não podem ocupar o primeiro nível trófico em uma cadeia alimentar? O que é a plasmogamia?', maxScore: 2,
        expected: 'Porque eles são heterótrofos. Plasmogamia é a fusão dos citoplasmas, e não dos núcleos.',
        accepted: 'Também foram aceitas as explicações de que os fungos não são autótrofos ou não realizam fotossíntese.',
        criteria: [
          { points: 1, text: 'Explica que os fungos são heterótrofos, não autótrofos ou não realizam fotossíntese.' },
          { points: 1, text: 'Define plasmogamia como fusão dos citoplasmas, e não dos núcleos.' },
        ],
      },
      {
        id: 'b', prompt: 'Em que momento do ciclo de vida (H, Z ou W) representado na imagem ocorre a segregação independente dos cromossomos homólogos? Como a estrutura ramificada do micélio vegetativo otimiza o processo de digestão extracelular nos basidiomicetos?', maxScore: 2,
        expected: 'Ocorre em Z. Um micélio vegetativo ramificado aumenta a superfície de contato com a matéria orgânica, o que permite secretar mais enzimas digestivas no ambiente e absorver os nutrientes resultantes da digestão.',
        criteria: [
          { points: 1, text: 'Identifica Z como o momento da segregação independente dos cromossomos homólogos.' },
          { points: 1, text: 'Relaciona a ramificação ao aumento da superfície de contato, da secreção de enzimas e da absorção de nutrientes.' },
        ],
      },
    ],
    officialNotes: [
      'Resposta correta acrescida de informação errada implicou perda de ponto.',
      'A pontuação deve seguir o atendimento a cada critério; esta é uma autoavaliação, não uma correção automática.',
    ],
    preview: 'Analise o ciclo de vida de um fungo basidiomiceto e responda aos itens a e b.',
  },
];
