const PROCESS_URL = 'https://tmpfiles.org/wpANoDs5xPdc/mineiros2027.1-provaobjetiva.pdf';
const ANSWER_URL = 'https://tmpfiles.org/wNAjoAsMNXFM/mineiros2027.1-gabaritodaobjetiva.pdf';

const shared = {
  exam: 'Unifimes Mineiros', year: 2027, phase: 'Prova II', originalUrl: PROCESS_URL,
  officialAnswerUrl: ANSWER_URL, kind: 'objective', correctionOrigin: 'official',
};
const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');
const prosePassage = (label, body, source) => ({
  statement: `${label}\n\n${body}\n\n${source}`,
  blockTypes: ['label', ...body.split('\n\n').map(() => 'prose'), 'source'],
});

const comic = {
  statement: 'Considere a tirinha de Bill Watterson, publicada no perfil @calvin_haroldo_br do Instagram, para responder às questões 01 e 02.',
  blockTypes: ['label'],
  images: [{ src: '/images/unifimesmineiros2027/q01-calvin.svg', alt: 'Tirinha de Calvin e Haroldo. O menino reflete sobre o leite e sobre quem primeiro decidiu beber o líquido retirado da vaca; o tigre responde que, pela manhã, deveriam falar somente o indispensável.' }],
};

const POEM = `Leia o poema de Álvares de Azevedo para responder às questões de 03 a 05.

Pálida, à luz da lâmpada sombria,
Sobre o leito de flores reclinada,
Como a lua por noite embalsamada,
Entre as nuvens de amor ela dormia!

Era a virgem do mar! na escuma fria
Pela maré das águas embalada!
Era um anjo entre nuvens d’alvorada
Que em sonhos se banhava e se esquecia!

Era mais bela! O seio palpitando...
Negros olhos, as pálpebras abrindo...
Formas nuas no leito resvalando...

Não te rias de mim, meu anjo lindo!
Por ti — as noites eu passei chorando,
Por ti — nos sonhos morrerei sorrindo!

(Antonio Candido. Melhores poemas de Álvares de Azevedo, 2013.)`;
const POEM_BLOCKS = ['label', 'poem', 'poem', 'poem', 'poem', 'source'];
const poemPassage = () => ({ statement: POEM, blockTypes: POEM_BLOCKS });

const ACUFF_BODY = `1  Sou proprietário de 48 cortes de cabelo.

Você provavelmente tem 48 a menos, mas me permita explicar minha abundância capilar. A barbearia que frequento vende pacotes de corte de cabelo. É como um plano de assinatura para a sua cabeça. Geralmente, compro seis por vez e economizo um dólar por corte ao pagar adiantado.

Da última vez que meus cortes de cabelo acabaram, minha cabeleireira disse:

— Você já usou todos e precisa comprar mais. Quer seu pacote de sempre ou aumentar um pouco?

5  — Quanto eu economizaria com o maior pacote? — perguntei.

— Nesse, o preço cai de 32 para 24 dólares por corte — disse ela.

Que bom negócio.

— São quantos cortes?

— Quarenta e oito — respondeu ela.

10  Acho que nós dois concordaríamos que são cortes de cabelo demais. Ninguém precisa pagar adiantado por 48 cortes. Nunca vi alguém dizer: “Não gosto de levar minha carteira para barbearias. Prefiro pagar adiantado. Desculpa, fui criado desse jeito.” Seria uma idiotice, e eu estava prestes a comprar os seis de sempre quando ela comentou como quem não quer nada:

— O seu amigo Chris acabou de comprar o pacote com 48.

Ah, espera um pouco. O Chris comprou?

Eu sabia o que ela estava fazendo. [...] Consigo identificar quando alguém está querendo me vender alguma coisa. Só que não foi isso que aconteceu.

Quando percebi, eu estava gritando:

15  — Então é isso aí. Quero comprar 48 cortes de cabelo!

Levei uns quatro segundos pensando antes de gastar mais de mil dólares na barbearia. Meus pensamentos costumam ter duas velocidades: demais e de menos. Adivinha qual usei neste caso?`;
const acuffPassage = () => prosePassage('Para responder às questões de 06 a 08, leia um trecho do texto do jornalista estadunidense Jon Acuff.', ACUFF_BODY, '(Trilhas sonoras da mente, 2023.)');

const GRACILIANO_BODY = `1  Um dia destes, à porta de certa livraria, um poeta queixava-se amargamente dos donos da literatura.

— Que donos? perguntou alguém.

E surgiram na conversa alguns nomes, que não se reproduzem aqui porque isto seria indiscrição. Em todo o caso fica registrada a amargura do poeta.

Há realmente uns figurões que se tornaram, com habilidade, proprietários da literatura nacional, como poderiam ser proprietários de estabelecimentos comerciais, arranha-céus, usinas, charqueadas ou seringais. São muito importantes e formam um pequeno sindicato que representa a inteligência indígena lá fora, nos pontos em que ela precisa aparecer de casaca.

5  Impossível saber por que esses cavalheiros fingem adotar ofício tão ruim, podendo dedicar-se a negócios rendosos, a política por exemplo, ou outra qualquer indústria. É preciso admitir que ser literato é bonito, embora o tipo que se enfeita com este nome nunca tenha escrito coisa nenhuma. [...]

Mas é uma concorrência desleal, é uma desonestidade. O poeta que se lamentava na porta da livraria tem razão. [...]

A literatura honorária, escorada e oficial, vive sempre lá fora, chega aqui de passagem e quando aparece, é vista de longe, rolando em automóvel; a literatura efetiva, mal vestida e de segunda classe, mora no interior ou vegeta aqui, no subúrbio, e viaja a bonde¹, às vezes de pingente².

Está errado tudo. Por que é que essas duas instituições, que não têm parentesco e usam o mesmo nome, não entram na combinação? [...]

1 bonde: antigo meio de transporte coletivo, semelhante ao ônibus.
2 pingente: referência às pessoas que, num bonde lotado, viajam pendurados nas laterais do veículo.`;
const gracilianoPassage = () => prosePassage('Leia a crônica de Graciliano Ramos, publicada originalmente em setembro de 1937, para responder às questões 09 e 10.\nOs donos da literatura', GRACILIANO_BODY, '(Linhas tortas, 2016.)');

export const unifimesmineiros2027Lote01 = [
  {
    ...shared, ...comic,
    id: 'unifimesmineiros2027-prova2-q01', number: 'Questão 01', subject: 'Português', content: 'Interpretação de tirinha', difficulty: 'Fácil',
    statementAfter: 'Na tirinha, o tigre considera que a reflexão do menino sobre o leite é', afterBlockTypes: ['command'], preview: 'Interprete a reação do tigre à reflexão de Calvin.',
    alternatives: ['incompreensível.', 'inevitável.', 'inverossímil.', 'inoportuna.', 'inquestionável.'], correct: 3,
    resolution: ['No último quadrinho, o tigre encerra a conversa dizendo que, pela manhã, se deve falar somente o indispensável. Ele, portanto, considera aquela reflexão inoportuna para o momento, e não incompreensível.'],
    analyses: ['Incorreta. O tigre entende a reflexão, mas acha que ela não é conveniente para aquele momento.', 'Incorreta. A fala final não apresenta a reflexão como algo que necessariamente teria de ocorrer.', 'Incorreta. Embora o tema seja inusitado, a reação do tigre é marcar a conversa como desnecessária pela manhã.', 'Correta. “De manhã, a gente deve falar somente o indispensável” torna a reflexão inoportuna.', 'Incorreta. O tigre não afirma que a reflexão esteja acima de questionamentos.'],
  },
  {
    ...shared, ...comic,
    id: 'unifimesmineiros2027-prova2-q02', number: 'Questão 02', subject: 'Português', content: 'Relação entre orações', difficulty: 'Média',
    statementAfter: 'No primeiro quadrinho, a fala do garoto é composta por duas orações separadas por vírgula. A primeira oração expressa, em relação à segunda, ideia de', afterBlockTypes: ['command'], preview: 'Identifique a relação semântica entre as orações da fala inicial.',
    alternatives: ['proporção.', 'finalidade.', 'condição.', 'tempo.', 'comparação.'], correct: 0,
    resolution: ['A estrutura “quanto mais..., mais...” estabelece proporcionalidade: conforme aumenta o quanto se pensa nas coisas, mais esquisitas elas parecem.'],
    analyses: ['Correta. A construção “quanto mais a gente pensa..., mais esquisitas elas parecem” relaciona dois crescimentos proporcionais.', 'Incorreta. A primeira oração não apresenta o propósito da segunda.', 'Incorreta. Não há condição introduzida por “se” ou sentido equivalente.', 'Incorreta. A relação não situa um fato anterior ou posterior ao outro.', 'Incorreta. Não se compara dois elementos por meio de “como” ou “tal qual”; há proporcionalidade.'],
  },
  {
    ...shared, ...poemPassage(),
    id: 'unifimesmineiros2027-prova2-q03', number: 'Questão 03', subject: 'Literatura', content: 'Ultrarromantismo e idealização', difficulty: 'Média',
    statementAfter: 'Frequente na literatura ultrarromântica, é uma característica do poema a idealização', afterBlockTypes: ['command'], preview: 'Reconheça o tema ultrarromântico idealizado no poema.',
    alternatives: ['das relações extraconjugais.', 'da intimidade física.', 'do casamento.', 'do ciúme.', 'da morte.'], correct: 4,
    resolution: ['O eu lírico transforma a mulher amada em figura celestial e conclui que morrerá sorrindo por ela nos sonhos. A morte é poetizada e idealizada, traço recorrente do ultrarromantismo.'],
    analyses: ['Incorreta. O poema não trata de relações extraconjugais.', 'Incorreta. Embora haja descrição da figura amada, o desfecho idealiza a morte, não a intimidade física.', 'Incorreta. O casamento não é tema do poema.', 'Incorreta. O ciúme não orienta o discurso do eu lírico.', 'Correta. “Por ti — nos sonhos morrerei sorrindo!” apresenta a morte de forma idealizada.'],
  },
  {
    ...shared, ...poemPassage(),
    id: 'unifimesmineiros2027-prova2-q04', number: 'Questão 04', subject: 'Português', content: 'Verbo reflexivo', difficulty: 'Média',
    statementAfter: 'Um verbo é reflexivo quando a ação praticada pelo sujeito recai sobre o próprio sujeito, isto é, o sujeito que pratica a ação é também objeto dessa ação.\n\nOcorre um verbo reflexivo em:', afterBlockTypes: ['prose', 'command'], preview: 'Identifique o verbo em que a ação recai sobre o próprio sujeito.',
    alternatives: ['“Por ti — nos sonhos morrerei sorrindo!” (4ª estrofe).', '“Que em sonhos se banhava e se esquecia!” (2ª estrofe).', '“Entre as nuvens de amor ela dormia!” (1ª estrofe).', '“Formas nuas no leito resvalando…” (3ª estrofe).', '“Era mais bela! O seio palpitando...” (3ª estrofe).'], correct: 1,
    resolution: ['Em “se banhava”, o sujeito “ela” pratica e recebe a ação de banhar-se; portanto, o verbo está empregado na forma reflexiva.'],
    analyses: ['Incorreta. “Morrerei” não apresenta o sujeito como objeto da ação.', 'Correta. Em “ela se banhava”, a ação de banhar recai sobre a própria pessoa que a pratica.', 'Incorreta. “Dormia” é ação do sujeito, mas não recai sobre um objeto reflexivo.', 'Incorreta. “Resvalando” descreve as formas, sem construção de verbo reflexivo.', 'Incorreta. “Palpitando” descreve o seio e não contém pronome reflexivo.'],
  },
  {
    ...shared, ...poemPassage(),
    id: 'unifimesmineiros2027-prova2-q05', number: 'Questão 05', subject: 'Português', content: 'Adjetivo e caracterização', difficulty: 'Fácil',
    statementAfter: 'Nesse poema, o eu lírico dedica-se a descrever a mulher amada. Um adjetivo que a qualifica está sublinhado em:', afterBlockTypes: ['command'], preview: 'Localize o adjetivo que caracteriza a mulher amada.',
    alternatives: [`“Como a ${underline('lua')} por noite embalsamada,” (1ª estrofe).`, `“Era um ${underline('anjo')} entre nuvens d’alvorada” (2ª estrofe).`, `“${underline('Pálida')}, à luz da lâmpada sombria,” (1ª estrofe).`, `“Formas ${underline('nuas')} no leito resvalando…” (3ª estrofe).`, `“Era a virgem do mar! na escuma ${underline('fria')}” (2ª estrofe).`], correct: 2,
    resolution: ['“Pálida” é um adjetivo que atribui uma característica à mulher descrita pelo eu lírico logo no primeiro verso.'],
    analyses: ['Incorreta. “Lua” é substantivo, não um adjetivo que qualifique a mulher.', 'Incorreta. “Anjo” é substantivo usado na idealização da mulher.', 'Correta. “Pálida” é adjetivo e qualifica diretamente a mulher amada.', 'Incorreta. “Nuas” é adjetivo, mas caracteriza “formas”, não a mulher diretamente.', 'Incorreta. “Fria” é adjetivo, mas qualifica “escuma”, e não a mulher.'],
  },
  {
    ...shared, ...acuffPassage(),
    id: 'unifimesmineiros2027-prova2-q06', number: 'Questão 06', subject: 'Português', content: 'Interpretação de crônica', difficulty: 'Média',
    statementAfter: '“‘Não gosto de levar minha carteira para barbearias. Prefiro pagar adiantado. Desculpa, fui criado desse jeito.’” (10º parágrafo)\n\nNo contexto em que está inserido, esse trecho representa uma resposta', afterBlockTypes: ['quote', 'command'], preview: 'Analise a função da fala hipotética no 10º parágrafo.',
    alternatives: ['planejada, que o narrador gostaria de ter dado à cabeleireira, mas não deu.', 'ponderada, que uma pessoa racional daria à cabeleireira.', 'agressiva, que, se dada, traria ao narrador problemas que ele gostaria de evitar.', 'protocolar, que serviria para recusar a oferta feita pela cabeleireira.', 'improvável, que ilustra o absurdo da situação em que o narrador se envolvia.'], correct: 4,
    resolution: ['O narrador inventa uma justificativa que ninguém daria para pagar adiantado por 48 cortes. A fala improvável é um recurso humorístico para evidenciar o absurdo da compra que ele estava prestes a fazer.'],
    analyses: ['Incorreta. A fala não é um plano frustrado, mas uma construção hipotética e humorística.', 'Incorreta. O narrador considera a própria situação uma “idiotice”; a fala não é apresentada como exemplo de ponderação.', 'Incorreta. O objetivo não é imaginar uma agressão à cabeleireira.', 'Incorreta. A fala imaginada justifica pagar adiantado; não recusa a oferta.', 'Correta. A resposta inventada é improvável e enfatiza o absurdo de adquirir 48 cortes.'],
  },
  {
    ...shared, ...acuffPassage(),
    id: 'unifimesmineiros2027-prova2-q07', number: 'Questão 07', subject: 'Português', content: 'Intenção comunicativa e sublinhado', difficulty: 'Média',
    statementAfter: `A expressão sublinhada em “ela comentou ${underline('como quem não quer nada')}” (10º parágrafo) indica que a cabeleireira`, afterBlockTypes: ['command'], preview: 'Infira a intenção oculta no comentário da cabeleireira.',
    alternatives: ['estava distraída enquanto falava.', 'queria ser gentil com o narrador.', 'interagia de maneira apática.', 'disfarçava uma intenção oculta.', 'repetia um procedimento pré-estabelecido.'], correct: 3,
    resolution: ['A cabeleireira menciona casualmente que Chris comprou 48 cortes para despertar no narrador uma reação competitiva e induzi-lo à compra. A casualidade é aparente e esconde a intenção de vender.'],
    analyses: ['Incorreta. O comentário é estrategicamente dirigido ao narrador, não fruto de distração.', 'Incorreta. A gentileza aparente encobre o objetivo comercial.', 'Incorreta. A expressão não descreve apatia, mas uma maneira calculada de introduzir o assunto.', 'Correta. O narrador percebe que o comentário casual escondia a intenção de levá-lo a comprar o pacote maior.', 'Incorreta. Não há indicação de que a fala fosse um roteiro repetido automaticamente.'],
  },
  {
    ...shared, ...acuffPassage(),
    id: 'unifimesmineiros2027-prova2-q08', number: 'Questão 08', subject: 'Português', content: 'Discurso indireto', difficulty: 'Difícil',
    statementAfter: '“minha cabeleireira disse:\n— Você já usou todos e precisa comprar mais.” (3º e 4º parágrafos)\n\nAo se transpor a fala da cabeleireira para o discurso indireto, o trecho assume a seguinte forma: minha cabeleireira disse que', afterBlockTypes: ['quote', 'command'], preview: 'Transpose a fala para o discurso indireto com a concordância verbal adequada.',
    alternatives: ['eu já tinha usado todos e precisava comprar mais.', 'eu já usei todos e precisara comprar mais.', 'se eu já tinha usado todos, precisava comprar mais.', 'se eu já tivesse usado todos, precisaria comprar mais.', 'eu já usara todos e precisarei comprar mais.'], correct: 0,
    resolution: ['No discurso indireto, “você” passa a “eu”; o pretérito perfeito “já usou” passa ao pretérito mais-que-perfeito “já tinha usado”; e o presente “precisa” passa ao pretérito imperfeito “precisava”.'],
    analyses: ['Correta. “Disse que eu já tinha usado todos e precisava comprar mais” preserva pessoa, tempos verbais e sentido.', 'Incorreta. “Usei” e “precisarei” não fazem a transposição exigida pelo verbo “disse”.', 'Incorreta. A conjunção “se” introduz uma condição inexistente na fala original.', 'Incorreta. A forma condicional cria uma hipótese e elimina a afirmação direta da cabeleireira.', 'Incorreta. “Precisarei” está no futuro do presente e não realiza a concordância com “disse”.'],
  },
  {
    ...shared, ...gracilianoPassage(),
    id: 'unifimesmineiros2027-prova2-q09', number: 'Questão 09', subject: 'Literatura', content: 'Graciliano Ramos: os donos da literatura', difficulty: 'Média',
    statementAfter: 'Segundo o que afirma o cronista, “os donos da literatura” são', afterBlockTypes: ['command'], preview: 'Interprete a crítica de Graciliano Ramos aos chamados donos da literatura.',
    alternatives: ['uma espécie de aristocracia da cultura que faz da literatura um meio para desfrutar de prestígio público.', 'os poetas que levam sua arte aos extremos da experimentação, apesar de serem mal remunerados por isso.', 'os escritores que superam adversidades sociais e, com seu trabalho, obtêm reconhecimento público.', 'um conjunto de escritores, escolhidos a partir de critérios artísticos para representar o país no exterior.', 'um grupo de empresários de si mesmos, que conseguem associar o talento literário a uma boa habilidade comercial.'], correct: 0,
    resolution: ['A crônica ironiza figurões que se apropriam do prestígio da literatura sem necessariamente produzi-la. Eles formam uma elite cultural interessada em status e aparências, uma “aristocracia” que usa a literatura socialmente.'],
    analyses: ['Correta. Os “donos” são figurões que transformam a literatura em instrumento de prestígio e distinção social.', 'Incorreta. A crítica não se dirige aos poetas experimentais mal remunerados.', 'Incorreta. Os escritores efetivos aparecem justamente do lado oposto, associados à literatura “mal vestida e de segunda classe”.', 'Incorreta. Os critérios de escolha são poder e habilidade social, não mérito artístico.', 'Incorreta. A ironia não elogia uma associação virtuosa entre talento e comércio; critica a apropriação do campo literário.'],
  },
  {
    ...shared, ...gracilianoPassage(),
    id: 'unifimesmineiros2027-prova2-q10', number: 'Questão 10', subject: 'Português', content: 'Relações semânticas: contraste', difficulty: 'Fácil',
    statementAfter: 'Dentro da simbologia do texto, há entre as palavras “automóvel” e “bonde” (7º parágrafo) uma relação de', afterBlockTypes: ['command'], preview: 'Analise a oposição simbólica entre automóvel e bonde.',
    alternatives: ['reciprocidade.', 'harmonia.', 'complementaridade.', 'contraste.', 'equivalência.'], correct: 3,
    resolution: ['O automóvel representa a literatura oficial, prestigiada e distante; o bonde representa a literatura efetiva, popular e de segunda classe. Os meios de transporte constroem uma oposição, isto é, um contraste social e simbólico.'],
    analyses: ['Incorreta. Não há ação recíproca entre os dois meios de transporte.', 'Incorreta. As imagens compõem posições sociais opostas, não harmonia.', 'Incorreta. Um termo não completa o outro; ambos marcam realidades contrastantes.', 'Correta. Automóvel e bonde opõem prestígio e simplicidade, reforçando a desigualdade entre as duas literaturas.', 'Incorreta. Os termos não são apresentados como equivalentes.'],
  },
];
