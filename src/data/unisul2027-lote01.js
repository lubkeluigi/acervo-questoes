const PROCESS_URL = 'https://tmpfiles.org/wwAsoTsXxAJi/unisul2027-provaobjetiva.pdf';
const ANSWER_URL = 'https://tmpfiles.org/wkABoSsaNGju/unisul2027-gabaritodaprovaobjetiva.pdf';

const shared = {
  exam: 'Unisul', year: 2027, phase: 'Prova II', originalUrl: PROCESS_URL,
  officialAnswerUrl: ANSWER_URL, kind: 'objective', correctionOrigin: 'official',
};
const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');

const comic = {
  statement: 'Examine a tirinha de André Dahmer, publicada no perfil @andredahmer do Instagram em 10.04.2026, para responder às questões 01 e 02.',
  blockTypes: ['label'],
  images: [{ src: '/images/unisul2027/q01-tirinha.svg', alt: 'Tirinha de André Dahmer em três quadrinhos: um homem diz que roubaram seu celular e que não pode se comunicar com ninguém; no último quadrinho, conclui que está adorando.' }],
};

const POEM = `Leia o poema “Mar”, de Sophia de Mello Breyner Andresen, para responder às questões de 03 a 06.

I
De todos os cantos do mundo
Amo com um amor mais forte e mais profundo
Aquela praia extasiada e nua,
Onde me uni ao mar, ao vento e à lua.

II
Cheiro a terra as árvores e o vento
Que a Primavera enche de perfumes
Mas neles só quero e só procuro
A selvagem exalação das ondas
Subindo para os astros como um grito puro.

(Coral e outros poemas, 2015.)`;
const POEM_BLOCKS = ['label', 'poem', 'poem', 'source'];
const poemQuestion = (command) => ({ statement: `${POEM}\n\n${command}`, blockTypes: [...POEM_BLOCKS, 'command'], preview: command });

const KRENAK = `Leia o trecho do livro Ideias para adiar o fim do mundo, de Ailton Krenak, para responder às questões de 07 a 10.

Nosso tempo é especialista em criar ausências: do sentido de viver em sociedade, do próprio sentido da experiência da vida. Isso gera uma intolerância muito grande com relação a quem ainda é capaz de experimentar o prazer de estar vivo, de dançar, de cantar. E está cheio de pequenas constelações de gente espalhada pelo mundo que dança, canta, faz chover. O tipo de humanidade zumbi que estamos sendo convocados a integrar não tolera tanto prazer, tanta fruição de vida. Então, pregam o fim do mundo como uma possibilidade de fazer a gente desistir dos nossos próprios sonhos. E a minha provocação sobre adiar o fim do mundo é exatamente sempre poder contar mais uma história. Se pudermos fazer isso, estaremos adiando o fim.

É importante viver a experiência da nossa própria circulação pelo mundo, não como uma metáfora, mas como fricção, poder contar uns com os outros. [...] Quando você sentir que o céu está ficando muito baixo, é só empurrá-lo e respirar.

Como os povos originários do Brasil lidaram com a colonização, que queria acabar com o seu mundo? Quais estratégias esses povos utilizaram para cruzar esse pesadelo e chegar ao século XXI ainda esperneando, reivindicando e desafinando o coro dos contentes? Vi as diferentes manobras que os nossos antepassados fizeram e me alimentei delas, da criatividade e da poesia que inspirou a resistência desses povos. A civilização chamava aquela gente de bárbaros e imprimiu uma guerra sem fim contra eles, com o objetivo de transformá-los em civilizados que poderiam integrar o clube da humanidade. Muitas dessas pessoas não são indivíduos, mas “pessoas coletivas”, células que conseguem transmitir através do tempo suas visões sobre o mundo.

(Ideias para adiar o fim do mundo, 2019.)`;
const KRENAK_BLOCKS = ['label', 'prose', 'prose', 'prose', 'source'];
const krenakQuestion = (command) => ({ statement: `${KRENAK}\n\n${command}`, blockTypes: [...KRENAK_BLOCKS, 'command'], preview: command });

export const unisul2027Lote01 = [
  {
    ...shared, ...comic,
    id: 'unisul2027-prova2-q01', number: 'Questão 01', subject: 'Português', content: 'Interpretação de tirinha e humor', difficulty: 'Fácil',
    statementAfter: 'O efeito de humor da tirinha decorre, principalmente, do fato de o personagem', afterBlockTypes: ['command'], preview: 'O humor decorre da reação do personagem à falta de comunicação.',
    alternatives: ['reagir positivamente à impossibilidade de se comunicar.', 'fazer apologia explícita ao abandono definitivo do celular.', 'ter dificuldades para recuperar o aparelho roubado.', 'mudar sua expressão bruscamente ao se dar conta do roubo.', 'demonstrar aversão a equipamentos tecnológicos.'], correct: 0,
    resolution: ['Depois de lamentar a impossibilidade de se comunicar, o personagem conclui “Estou adorando”. O humor nasce dessa inversão: a situação inicialmente apresentada como problema passa a ser recebida positivamente.'],
    analyses: ['Correta. A fala final revela reação positiva à impossibilidade de se comunicar.', 'Incorreta. A tirinha não propõe explicitamente abandonar o celular para sempre.', 'Incorreta. Não há tentativa de recuperar o aparelho.', 'Incorreta. O efeito principal está na mudança de avaliação expressa pela fala, não em uma mudança brusca ao perceber o roubo.', 'Incorreta. O personagem não manifesta aversão a equipamentos tecnológicos.'],
  },
  {
    ...shared, ...comic,
    id: 'unisul2027-prova2-q02', number: 'Questão 02', subject: 'Português', content: 'Relações lógico-semânticas entre enunciados', difficulty: 'Fácil',
    statementAfter: 'Em relação à fala do primeiro quadrinho, “Roubaram meu celular”, a fala do segundo quadrinho, “Não tenho como me comunicar com ninguém”, é uma', afterBlockTypes: ['command'], preview: 'Identifique a relação entre as falas dos dois primeiros quadrinhos.',
    alternatives: ['concessão.', 'comparação.', 'oposição.', 'condição.', 'conclusão.'], correct: 4,
    resolution: ['O roubo do celular é apresentado como causa, e a impossibilidade de comunicação é a consequência ou conclusão tirada pelo personagem: como roubaram seu celular, ele não tem como se comunicar.'],
    analyses: ['Incorreta. A segunda fala não apresenta um fato contrário a uma expectativa.', 'Incorreta. Não se estabelece comparação entre os enunciados.', 'Incorreta. As falas não se opõem; a segunda decorre da primeira.', 'Incorreta. O roubo não é apresentado como condição hipotética.', 'Correta. A impossibilidade de comunicação é concluída a partir do roubo do celular.'],
  },
  {
    ...shared, ...poemQuestion('No poema, a relação do eu lírico com os elementos da natureza se caracteriza'),
    id: 'unisul2027-prova2-q03', number: 'Questão 03', subject: 'Literatura', content: 'Sophia de Mello Breyner Andresen: relação com a natureza', difficulty: 'Fácil',
    alternatives: ['pela conexão do eu lírico com o mar, com o vento e com a lua, a partir do intenso apreço que sente pela paisagem litorânea.', 'pela impossibilidade de compreender a imensidão da natureza, o que provoca no eu lírico profunda angústia.', 'por uma aversão racional do eu lírico ao caos indomável do oceano, preferindo a calmaria da natureza terrestre.', 'por uma melancolia que o eu lírico sente ao se voltar para um passado bucólico de exaltação da vida no campo.', 'pela contemplação distante da paisagem, marcada por uma recusa de envolvimento do eu lírico com tudo que é natural.'], correct: 0,
    resolution: ['O eu lírico declara amor intenso pela praia e recorda sua união ao mar, ao vento e à lua. Mesmo diante das árvores e do vento da terra, procura a exalação das ondas: há conexão afetiva e sensorial com a paisagem litorânea.'],
    analyses: ['Correta. O poema expressa intenso apreço e união com os elementos da paisagem litorânea.', 'Incorreta. Não há angústia diante da imensidão natural.', 'Incorreta. O eu lírico prefere o mar, mas não demonstra aversão racional ao oceano.', 'Incorreta. O poema não se organiza pela melancolia ligada à vida no campo.', 'Incorreta. A postura é de envolvimento, não de distanciamento ou recusa da natureza.'],
  },
  {
    ...shared, ...poemQuestion('No trecho “Mas neles só quero e só procuro / A selvagem exalação das ondas” (7º e 8º versos), o pronome “neles” se refere a'),
    id: 'unisul2027-prova2-q04', number: 'Questão 04', subject: 'Português', content: 'Referenciação pronominal no poema', difficulty: 'Média',
    alternatives: ['“os astros” (9º verso).', '“ao mar, ao vento e à lua”. (4º verso).', '“todos os cantos do mundo” (1º verso).', '“perfumes” (6º verso).', '“a terra as árvores e o vento” (5º verso).'], correct: 4,
    resolution: ['O pronome retoma os elementos mencionados no quinto verso, “a terra as árvores e o vento”. É neles, mesmo perfumados pela Primavera, que o eu lírico procura a exalação das ondas.'],
    analyses: ['Incorreta. Os astros aparecem depois e não são o referente do pronome.', 'Incorreta. O pronome não retoma os elementos do quarto verso.', 'Incorreta. A referência não são os cantos do mundo do primeiro verso.', 'Incorreta. “Perfumes” está no verso seguinte ao grupo retomado e não concorda com a construção pretendida.', 'Correta. “Neles” retoma os elementos naturais apresentados no quinto verso.'],
  },
  {
    ...shared, ...poemQuestion(`Em “A ${underline('selvagem exalação')} das ondas” (8º verso), a expressão sublinhada deve ser entendida em sentido`),
    id: 'unisul2027-prova2-q05', number: 'Questão 05', subject: 'Português', content: 'Sentido denotativo e conotativo', difficulty: 'Média',
    alternatives: ['denotativo, pois descreve com precisão objetiva um fenômeno marítimo.', 'denotativo, pois informa literalmente que as ondas liberam um odor acentuado.', 'denotativo, pois registra uma propriedade física das ondas em movimento.', 'conotativo, pois personifica as ondas ao atribuir a elas intenção comunicativa.', 'conotativo, pois constrói uma imagem poética resultante das ondulações do mar.'], correct: 4,
    resolution: ['“Selvagem exalação” forma uma imagem poética para a presença intensa do mar, associada às ondas e à sua movimentação. A expressão é conotativa; não descreve literalmente uma propriedade física nem atribui intenção comunicativa às ondas.'],
    analyses: ['Incorreta. A expressão não é uma descrição objetiva e precisa de um fenômeno.', 'Incorreta. Não se informa literalmente a liberação de odor acentuado.', 'Incorreta. A construção não registra denotativamente uma propriedade física.', 'Incorreta. Embora haja sentido figurado, não se atribui às ondas uma intenção comunicativa.', 'Correta. A expressão cria, em sentido conotativo, uma imagem poética ligada às ondulações do mar.'],
  },
  {
    ...shared, ...poemQuestion(`Na passagem “Aquela praia extasiada e nua, / ${underline('Onde me uni ao mar, ao vento e à lua.')}” (1ª estrofe), o verso sublinhado é uma oração com valor adjetivo, porque caracteriza o substantivo do verso anterior. Outro verso do poema que se caracteriza por ser uma oração com valor adjetivo é:`),
    id: 'unisul2027-prova2-q06', number: 'Questão 06', subject: 'Português', content: 'Oração subordinada adjetiva', difficulty: 'Média',
    alternatives: ['“Cheiro a terra as árvores e o vento” (5º verso).', '“Que a Primavera enche de perfumes” (6º verso).', '“Amo com um amor mais forte e mais profundo” (2º verso).', '“Mas neles só quero e só procuro” (7º verso).', '“A selvagem exalação das ondas” (8º verso).'], correct: 1,
    resolution: ['Em “Que a Primavera enche de perfumes”, o pronome relativo “que” retoma “as árvores e o vento” e introduz uma oração subordinada adjetiva, que caracteriza esses elementos, assim como “onde” introduz a oração que caracteriza “praia”.'],
    analyses: ['Incorreta. O verso apresenta a oração principal, sem pronome relativo.', 'Correta. “Que” introduz oração adjetiva restritiva relacionada às árvores e ao vento.', 'Incorreta. Não há oração adjetiva nesse verso.', 'Incorreta. O verso não apresenta pronome relativo nem oração adjetiva.', 'Incorreta. Trata-se de segmento nominal, não de oração com verbo.'],
  },
  {
    ...shared, ...krenakQuestion('No 1º parágrafo, a expressão “humanidade zumbi” é empregada para criticar'),
    id: 'unisul2027-prova2-q07', number: 'Questão 07', subject: 'Português', content: 'Interpretação de texto: humanidade zumbi', difficulty: 'Fácil',
    alternatives: ['a permanência de tradições coletivas pela humanidade contemporânea.', 'a incapacidade dos povos originários de se adaptar ao mundo contemporâneo.', 'a resistência dos indígenas aos efeitos históricos da colonização.', 'o esvaziamento de sentido, prazer e imaginação vivido pela humanidade.', 'o excessivo enaltecimento da alegria, da dança e do canto na vida social.'], correct: 3,
    resolution: ['A metáfora “humanidade zumbi” sintetiza a perda do sentido de viver, da fruição, da criatividade e da capacidade de contar histórias. O autor critica uma humanidade que se torna intolerante ao prazer e à imaginação.'],
    analyses: ['Incorreta. As tradições coletivas aparecem como resistência, não como alvo da crítica.', 'Incorreta. A expressão não se refere à adaptação dos povos originários.', 'Incorreta. A resistência indígena é valorizada no texto.', 'Correta. A expressão critica o esvaziamento de sentido, prazer e imaginação.', 'Incorreta. O autor não critica a alegria; critica a intolerância a ela.'],
  },
  {
    ...shared, ...krenakQuestion('Ao mencionar que alguns povos chegaram ao século XXI “ainda esperneando, reivindicando e desafinando o coro dos contentes” (3º parágrafo), o autor refere-se ao fato de esses povos'),
    id: 'unisul2027-prova2-q08', number: 'Questão 08', subject: 'Português', content: 'Interpretação de texto: resistência dos povos originários', difficulty: 'Fácil',
    alternatives: ['enfrentarem a tentativa de apagamento de seus modos de vida.', 'se conformarem com as imposições da colonização.', 'adotarem integralmente os valores da civilização dominante.', 'rejeitarem qualquer forma de contato com outras culturas e sociedades.', 'abdicarem de suas tradições em prol do chamado “clube da humanidade”.'], correct: 0,
    resolution: ['Os verbos destacam resistência ativa. Os povos originários atravessaram a colonização sem abandonar suas reivindicações, enfrentando o projeto de apagar seus mundos e seus modos de vida.'],
    analyses: ['Correta. A passagem ressalta a resistência à tentativa de apagamento de seus modos de vida.', 'Incorreta. “Esperneando” e “reivindicando” contrariam a ideia de conformação.', 'Incorreta. O texto não afirma adesão integral aos valores dominantes.', 'Incorreta. Não se afirma rejeição absoluta a qualquer contato cultural.', 'Incorreta. Os povos preservam suas tradições em vez de abdicar delas.'],
  },
  {
    ...shared, ...krenakQuestion('Em “Se pudermos fazer isso, estaremos adiando o fim” (1º parágrafo), as formas verbais “pudermos” e “estaremos” expressam, respectivamente,'),
    id: 'unisul2027-prova2-q09', number: 'Questão 09', subject: 'Português', content: 'Valores semânticos das formas verbais', difficulty: 'Fácil',
    alternatives: ['certeza futura e ordem futura.', 'hipótese passada e ação presente.', 'possibilidade futura e ação futura.', 'dúvida passada e ação presente.', 'certeza presente e ação futura.'], correct: 2,
    resolution: ['“Se pudermos” introduz uma possibilidade ou hipótese projetada para o futuro; “estaremos adiando” situa no futuro a ação consequente.'],
    analyses: ['Incorreta. A primeira forma indica possibilidade, não certeza ou ordem.', 'Incorreta. Nenhuma das formas situa a ação no passado ou no presente.', 'Correta. “Pudermos” expressa possibilidade futura e “estaremos” indica ação futura.', 'Incorreta. Não há referência a dúvida passada nem a ação presente.', 'Incorreta. A conjunção “se” e o infinitivo pessoal constroem possibilidade, não certeza presente.'],
  },
  {
    ...shared,
    statement: `${KRENAK}\n\n“Quando você sentir que o céu está ficando muito baixo, é só empurrá-lo e respirar” (2º parágrafo)\n\nNesse período, a inversão das orações preserva o sentido original em:`,
    blockTypes: [...KRENAK_BLOCKS, 'quote', 'command'], preview: 'Identifique a inversão das orações que preserva o sentido original.',
    id: 'unisul2027-prova2-q10', number: 'Questão 10', subject: 'Português', content: 'Reescrita e relações entre orações', difficulty: 'Média',
    alternatives: ['Para que seja possível empurrar o céu e respirar, você sente que ele está ficando muito baixo.', 'Quando for só empurrar o céu e respirar, você sentirá que ele está ficando muito baixo.', 'É só empurrar o céu e respirar, ainda que você sinta que ele está ficando muito baixo.', 'É só empurrar o céu e respirar, visto que você sente que ele está ficando muito baixo.', 'É só empurrar o céu e respirar sempre que você sentir que ele está ficando muito baixo.'], correct: 4,
    resolution: ['Na construção original, “quando” estabelece a circunstância em que se deve empurrar o céu e respirar. A inversão de E preserva essa relação: a recomendação vale sempre que você sentir que o céu está ficando muito baixo.'],
    analyses: ['Incorreta. A reescrita introduz finalidade e altera a relação entre as ações.', 'Incorreta. A circunstância temporal passa a ser atribuída à ação errada.', 'Incorreta. “Ainda que” introduz concessão inexistente no período original.', 'Incorreta. “Visto que” introduz causa, substituindo a relação original.', 'Correta. “Sempre que” preserva a relação de ocasião estabelecida por “quando”.'],
  },
];
