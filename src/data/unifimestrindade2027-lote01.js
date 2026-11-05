const PROCESS_URL = 'https://tmpfiles.org/wZAeoKsBNGYT/provaii-objetiva.pdf';
const ANSWER_URL = 'https://tmpfiles.org/wVAPoVs4xolm/gabaritodaprovaii-objetiva2.pdf';

const shared = {
  exam: 'Unifimes Trindade', year: 2027, phase: 'Prova II', originalUrl: PROCESS_URL,
  officialAnswerUrl: ANSWER_URL, kind: 'objective', correctionOrigin: 'official',
};
const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');
const img = (file, alt, caption) => ({
  src: `/images/unifimestrindade2027/${file}?v=20261104-pdf-vector1`, alt, ...(caption ? { caption } : {}),
});

const comic = {
  statement: 'Considere a tirinha do cartunista Alexandre Beck, publicada na página do Facebook @tirasarmandinho, em 26.07.2017, para responder às questões 01 e 02.',
  blockTypes: ['label'],
  images: [img('p2-q01-tirinha-solidao.svg', 'Tirinha de Armandinho em três quadrinhos. O pai diz que estar sem emprego o deixa triste; o filho responde que ele não está sozinho, pois a cada dia há mais pessoas como ele.')],
};

const VIDAS_SECAS = `Leia o trecho do romance “Vidas secas”, de Graciliano Ramos, para responder às questões de 03 a 07.

1  A cachorra Baleia estava para morrer. Tinha emagrecido, o pelo caíra-lhe em vários pontos, as costelas avultavam num fundo róseo, onde manchas escuras supuravam e sangravam, cobertas de moscas. As chagas da boca e a inchação dos beiços dificultavam-lhe a comida e a bebida.

Por isso Fabiano imaginara que ela estivesse com um princípio de hidrofobia e amarrara-lhe no pescoço um rosário de sabugos de milho queimados. Mas Baleia, sempre de mal a pior, roçava-se nas estacas do curral ou metia-se no mato, impaciente, enxotava os mosquitos sacudindo as orelhas murchas, agitando a cauda pelada e curta, grossa na base, cheia de roscas, semelhante a uma cauda de cascavel.

Então Fabiano resolveu matá-la. Foi buscar a espingarda de pederneira, lixou-a, limpou-a com o saca-trapo e fez tenção de carregá-la bem para a cachorra não sofrer muito. [...]

2  Ao chegar às catingueiras, modificou a pontaria e puxou o gatilho. A carga alcançou os quartos traseiros e inutilizou uma perna de Baleia, que se pôs a latir desesperadamente. [...]

3  Uma sede horrível queimava-lhe a garganta. Procurou ver as pernas e não as distinguiu: um nevoeiro impedia-lhe a visão. Pôs-se a latir e desejou morder Fabiano. Realmente não latia: uivava baixinho, e os uivos iam diminuindo, tornavam-se quase imperceptíveis. [...]

4  A tremura subia, deixava a barriga e chegava ao peito de Baleia. Do peito para trás era tudo insensibilidade e esquecimento. Mas o resto do corpo se arrepiava, espinhos de mandacaru penetravam na carne meio comida pela doença. [...]

Baleia queria dormir. Acordaria feliz, num mundo cheio de preás. E lamberia as mãos de Fabiano, um Fabiano enorme. As crianças se espojariam com ela, rolariam com ela num pátio enorme, num chiqueiro enorme. O mundo ficaria todo cheio de preás, gordos, enormes.

(Vidas secas, 2011.)`;
const VIDAS_BLOCKS = ['label', 'prose', 'prose', 'prose', 'prose', 'prose', 'prose', 'prose', 'source'];
const vidasPassage = () => ({ statement: VIDAS_SECAS, blockTypes: VIDAS_BLOCKS, works: ['Vidas secas'] });

const SAMURAI = `Leia um trecho da letra de canção “Samurai”, composta por Djavan, para responder às perguntas de 08 a 10.

Ai...
Quanto querer
Cabe em meu coração
Ai...
Me faz sofrer
Faz que me mata
E se não mata, fere
Vai...
Sem me dizer
Na casa da paixão
Sai...
Quando bem quer
Traz uma praga
E me afaga a pele

Crescei, luar
Pra iluminar as trevas
Fundas da paixão
Eu quis lutar
Contra o poder do amor
Caí nos pés do vencedor
Para ser o serviçal
De um samurai
Mas eu tô tão feliz!
Dizem que o amor
Atrai...

(www.youtube.com)`;
const samuraiPassage = () => ({ statement: SAMURAI, blockTypes: ['label', 'poem', 'poem', 'source'], works: ['Samurai'] });

export const unifimestrindade2027Lote01 = [
  {
    ...shared, ...comic,
    id: 'unifimestrindade2027-prova2-q01', number: 'Questão 01', subject: 'Português', content: 'Interpretação de tirinha: tema central', difficulty: 'Fácil',
    statementAfter: 'O tema central da tirinha é', afterBlockTypes: ['command'], preview: 'Identifique o tema central da tirinha de Alexandre Beck.',
    alternatives: ['a infância.', 'o desemprego.', 'a solidão.', 'a solidariedade.', 'o otimismo.'], correct: 1,
    resolution: ['A fala inicial do pai apresenta explicitamente a falta de emprego, e a resposta do filho generaliza essa situação a muitas pessoas. O desemprego é, portanto, o tema central.'],
    analyses: ['Incorreta. A infância do filho não é o assunto desenvolvido nos três quadrinhos.', 'Correta. “Estar sem emprego” introduz o tema, retomado pela multiplicação de pessoas na mesma condição.', 'Incorreta. “Não está sozinho” é um recurso de humor, não uma reflexão central sobre solidão.', 'Incorreta. A fala do filho não descreve uma ação solidária; produz ironia ao mencionar outros desempregados.', 'Incorreta. A tirinha não apresenta perspectiva otimista, mas um comentário irônico sobre a situação do pai.'],
  },
  {
    ...shared, ...comic,
    id: 'unifimestrindade2027-prova2-q02', number: 'Questão 02', subject: 'Português', content: 'Sujeito oracional', difficulty: 'Média',
    statementAfter: 'Sujeito oracional ocorre quando uma oração exerce a função de sujeito. Verifica-se a presença de sujeito oracional', afterBlockTypes: ['command'], preview: 'Localize a oração que funciona como sujeito na tirinha.',
    alternatives: ['no terceiro quadrinho, apenas.', 'no segundo e no terceiro quadrinhos.', 'no segundo quadrinho, apenas.', 'no primeiro e no terceiro quadrinhos.', 'no primeiro quadrinho, apenas.'], correct: 4,
    resolution: ['No primeiro quadrinho, “Estar sem emprego” é a oração de infinitivo que exerce a função de sujeito de “deixa”. Nos demais quadrinhos não há oração com essa função.'],
    analyses: ['Incorreta. No terceiro quadrinho, “há” é existencial e não admite sujeito.', 'Incorreta. As orações do segundo quadrinho têm sujeitos simples ou ocultos, não oracionais.', 'Incorreta. Em “Não fique” e “O senhor não está sozinho”, não há oração funcionando como sujeito.', 'Incorreta. O primeiro quadrinho contém o exemplo, mas o terceiro não.', 'Correta. “Estar sem emprego” é sujeito oracional de “me deixa triste”.'],
  },
  {
    ...shared, ...vidasPassage(),
    id: 'unifimestrindade2027-prova2-q03', number: 'Questão 03', subject: 'Literatura', content: 'Vidas secas: inferência narrativa', difficulty: 'Fácil',
    statementAfter: 'Infere-se que, no final do episódio narrado,', afterBlockTypes: ['command'], preview: 'Infira o desfecho do episódio da cachorra Baleia.',
    alternatives: ['a cachorra foge de Fabiano.', 'Fabiano acorda de um sonho.', 'a cachorra finalmente morre.', 'Fabiano ampara a cachorra.', 'a cachorra pede ajuda às crianças.'], correct: 2,
    resolution: ['Os uivos diminuem, a sensibilidade desaparece e Baleia quer dormir imaginando um mundo feliz. Esses sinais indicam que a cachorra morre ao final do episódio.'],
    analyses: ['Incorreta. Baleia está ferida e enfraquecida; não há indicação de fuga.', 'Incorreta. A fantasia final pertence à cachorra e não revela um sonho de Fabiano.', 'Correta. A perda progressiva de sentidos e os uivos quase imperceptíveis indicam a morte de Baleia.', 'Incorreta. Fabiano atira na cachorra e não aparece amparando-a ao final.', 'Incorreta. As crianças aparecem apenas na imaginação de Baleia.'],
  },
  {
    ...shared, ...vidasPassage(),
    id: 'unifimestrindade2027-prova2-q04', number: 'Questão 04', subject: 'Português', content: 'Referenciação pronominal', difficulty: 'Fácil',
    statementAfter: `“A carga alcançou os quartos traseiros e inutilizou uma perna de Baleia, ${underline('que')} se pôs a latir desesperadamente”. (4º parágrafo)\n\nNo contexto dado, a palavra sublinhada substitui`, afterBlockTypes: ['quote', 'command'], preview: 'Identifique o referente do pronome relativo no episódio de Baleia.',
    alternatives: ['“Baleia”.', '“carga”.', '“quartos traseiros”.', '“perna”.', '“inutilizou”.'], correct: 0,
    resolution: ['O pronome relativo “que” retoma “Baleia”: foi ela quem se pôs a latir desesperadamente depois de ser ferida.'],
    analyses: ['Correta. “Baleia” é o referente de “que”, sujeito de “se pôs a latir”.', 'Incorreta. A carga alcançou os quartos traseiros, mas não latia.', 'Incorreta. “Quartos traseiros” não pode ser o sujeito semântico de latir.', 'Incorreta. A perna foi inutilizada; não é quem late.', 'Incorreta. “Inutilizou” é verbo, não um referente nominal do pronome.'],
  },
  {
    ...shared, ...vidasPassage(),
    id: 'unifimestrindade2027-prova2-q05', number: 'Questão 05', subject: 'Literatura', content: 'Figuras de linguagem: hipérbole', difficulty: 'Média',
    statementAfter: 'Verifica-se a presença de hipérbole no seguinte trecho:', afterBlockTypes: ['command'], preview: 'Reconheça a hipérbole na fantasia final de Baleia.',
    alternatives: ['“agitando a cauda pelada e curta (...) semelhante a uma cauda de cascavel”.', '“O mundo ficaria todo cheio de preás, gordos, enormes”.', '“o resto do corpo se arrepiava, espinhos de mandacaru penetravam na carne meio comida pela doença”.', '“Baleia, sempre de mal a pior, roçava-se nas estacas do curral”.', '“Procurou ver as pernas e não as distinguiu: um nevoeiro impedia-lhe a visão”.'], correct: 1,
    resolution: ['A hipérbole consiste no exagero expressivo. A ideia de o mundo ficar “todo cheio de preás, gordos, enormes” amplifica grandemente a abundância imaginada por Baleia.'],
    analyses: ['Incorreta. Há uma comparação entre a cauda de Baleia e a de uma cascavel, não hipérbole.', 'Correta. A multiplicação exagerada dos preás por todo o mundo configura hipérbole.', 'Incorreta. O trecho descreve a dor e as sensações da cachorra sem o exagero presente na alternativa correta.', 'Incorreta. “Sempre de mal a pior” descreve a piora do estado de Baleia, sem a ampliação fantasiosa pedida.', 'Incorreta. O nevoeiro representa a perda de visão, funcionando como imagem metafórica, não como hipérbole.'],
  },
  {
    ...shared, ...vidasPassage(),
    id: 'unifimestrindade2027-prova2-q06', number: 'Questão 06', subject: 'Português', content: 'Polissemia do verbo imaginar', difficulty: 'Média',
    statementAfter: 'No trecho “Por isso Fabiano imaginara que ela estivesse com um princípio de hidrofobia e amarrara-lhe no pescoço um rosário de sabugos de milho queimados” (2º parágrafo), o verbo imaginar tem o sentido de', afterBlockTypes: ['command'], preview: 'Determine o sentido contextual de “imaginar” em Vidas secas.',
    alternatives: ['transformar fatos em figuras mentais.', 'antever uma circunstância futura.', 'evitar intencionalmente a realidade factual.', 'inventar uma realidade, fantasiar.', 'presumir, formular uma interpretação.'], correct: 4,
    resolution: ['Fabiano interpreta os sinais da doença e supõe que Baleia esteja com hidrofobia. “Imaginar” significa presumir, e não criar deliberadamente uma fantasia.'],
    analyses: ['Incorreta. Fabiano não está apenas convertendo fatos em imagens mentais; ele formula uma hipótese.', 'Incorreta. A suposição se refere ao estado atual da cachorra, não a um acontecimento futuro.', 'Incorreta. Não há intenção consciente de fugir da realidade.', 'Incorreta. A conclusão pode estar errada, mas decorre de uma interpretação dos sintomas, não de fantasia deliberada.', 'Correta. Fabiano presume que a cachorra tem hidrofobia com base no que observa.'],
  },
  {
    ...shared, ...vidasPassage(),
    id: 'unifimestrindade2027-prova2-q07', number: 'Questão 07', subject: 'Português', content: 'Voz passiva e concordância verbal', difficulty: 'Média',
    statementAfter: 'A oração “As chagas da boca e a inchação dos beiços dificultavam-lhe a comida e a bebida”, quando transposta para a voz passiva, assume a seguinte forma:', afterBlockTypes: ['command'], preview: 'Transpose a oração para a voz passiva mantendo o tempo verbal.',
    alternatives: ['A comida e a bebida lhe são dificultadas pelas chagas da boca e pela inchação dos beiços.', 'A comida e a bebida lhe seriam dificultadas pelas chagas da boca e pela inchação dos beiços.', 'A comida e a bebida lhe eram dificultadas pelas chagas da boca e pela inchação dos beiços.', 'A comida e a bebida lhe foram dificultadas pelas chagas da boca e pela inchação dos beiços.', 'A comida e a bebida lhe serão dificultadas pelas chagas da boca e pela inchação dos beiços.'], correct: 2,
    resolution: ['Na voz passiva analítica, “a comida e a bebida” torna-se sujeito paciente, e o agente passa a “pelas chagas... e pela inchação...”. O pretérito imperfeito “dificultavam” exige “eram dificultadas”.'],
    analyses: ['Incorreta. “São dificultadas” está no presente e altera o tempo original.', 'Incorreta. “Seriam” está no futuro do pretérito e não preserva o pretérito imperfeito.', 'Correta. “Eram dificultadas” mantém o pretérito imperfeito e concorda com o sujeito composto feminino.', 'Incorreta. “Foram” corresponde ao pretérito perfeito, não ao imperfeito “dificultavam”.', 'Incorreta. “Serão” desloca a ação para o futuro.'],
  },
  {
    ...shared, ...samuraiPassage(),
    id: 'unifimestrindade2027-prova2-q08', number: 'Questão 08', subject: 'Literatura', content: 'Samurai: sentimento do eu lírico', difficulty: 'Média',
    statementAfter: 'O eu lírico expressa, sobretudo, sentimento de', afterBlockTypes: ['command'], preview: 'Interprete o sentimento predominante na canção Samurai.',
    alternatives: ['decepção.', 'sofrimento.', 'submissão.', 'tranquilidade.', 'abandono.'], correct: 2,
    resolution: ['O eu lírico se apresenta como vencido pelo amor e declara que caiu “nos pés do vencedor” para ser “serviçal” de um samurai. Essas imagens constroem a submissão amorosa.'],
    analyses: ['Incorreta. Embora haja sofrimento, a conclusão “tô tão feliz” não centra a canção na decepção.', 'Incorreta. O sofrimento aparece, mas a metáfora central do samurai enfatiza a entrega submissa.', 'Correta. “Vencedor”, “serviçal” e “samurai” expressam a posição de submissão assumida pelo eu lírico.', 'Incorreta. A intensidade dos versos não produz predominância de tranquilidade.', 'Incorreta. O eu lírico não é abandonado; ele se entrega voluntariamente ao amor.'],
  },
  {
    ...shared, ...samuraiPassage(),
    id: 'unifimestrindade2027-prova2-q09', number: 'Questão 09', subject: 'Português', content: 'Modo imperativo', difficulty: 'Fácil',
    statementAfter: 'O verbo destacado está no modo imperativo em', afterBlockTypes: ['command'], preview: 'Identifique a forma verbal no imperativo na letra de Djavan.',
    alternatives: ['“Cabe em meu coração”.', '“E se não mata, fere”.', '“Eu quis lutar”.', '“Crescei, luar”.', '“Caí nos pés do vencedor”.'], correct: 3,
    resolution: ['“Crescei” é uma ordem ou solicitação dirigida ao luar e corresponde ao imperativo afirmativo na segunda pessoa do plural.'],
    analyses: ['Incorreta. “Cabe” está no presente do indicativo.', 'Incorreta. “Fere” está no presente do indicativo.', 'Incorreta. “Quis” está no pretérito perfeito do indicativo.', 'Correta. “Crescei” é forma de imperativo dirigida ao interlocutor “luar”.', 'Incorreta. “Caí” está no pretérito perfeito do indicativo.'],
  },
  {
    ...shared, ...samuraiPassage(),
    id: 'unifimestrindade2027-prova2-q10', number: 'Questão 10', subject: 'Português', content: 'Relações semânticas: finalidade', difficulty: 'Média',
    statementAfter: `“Crescei, luar\n${underline('Pra iluminar as trevas')}\n${underline('Fundas da paixão')}” (2ª estrofe)\n\nNo contexto em que se encontra, a oração sublinhada expressa:`, afterBlockTypes: ['quote', 'command'], preview: 'Reconheça a relação semântica da oração “Pra iluminar as trevas”.',
    alternatives: ['proporção.', 'finalidade.', 'causa.', 'comparação.', 'tempo.'], correct: 1,
    resolution: ['“Pra iluminar” apresenta o objetivo do crescimento do luar. A preposição “pra” introduz uma oração reduzida de infinitivo com valor de finalidade.'],
    analyses: ['Incorreta. Não há relação de crescimento proporcional entre duas grandezas.', 'Correta. Iluminar as trevas é a finalidade pretendida com o crescimento do luar.', 'Incorreta. A oração não apresenta a causa do crescimento, mas seu objetivo.', 'Incorreta. Não se estabelece comparação entre o luar e outro elemento.', 'Incorreta. A oração não situa um momento ou duração.'],
  },
];
