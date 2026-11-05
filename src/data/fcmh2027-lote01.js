import { q, COMIC, dedicatorias, petalas, underline as u } from './fcmh2027-helpers.js';

export const fcmh2027Lote01 = [
  q({
    n: 1, subject: 'Português', content: 'Interpretação de tirinha e caracterização de personagem', difficulty: 'Fácil', ...COMIC,
    statementAfter: 'O personagem Chico Bacon (de blusa amarela) mostra-se', afterBlockTypes: ['command'],
    alternatives: ['altruísta.', 'narcisista.', 'conformista.', 'pessimista.', 'oportunista.'], answer: 'D',
    why: 'Chico Bacon associa a alegria ao espeto e ao amor, a solidão à dor e ao fracasso e a velhice a arrependimentos e crises. Seu discurso enfatiza aspectos negativos da existência, revelando pessimismo.',
    wrong: { 0: 'Ele não se dedica ao bem do outro; comenta a própria visão de vida.', 1: 'Não há exaltação de si mesmo, mas queixas e receios.', 2: 'Ele não demonstra acomodação; pelo contrário, manifesta insatisfação.', 4: 'Não se aproveita das circunstâncias para obter vantagem.' },
  }),
  q({
    n: 2, subject: 'Português', content: 'Figuras de linguagem em tirinha: antítese', difficulty: 'Fácil', ...COMIC,
    statementAfter: 'Ao empregar as palavras “juventude” e “velhice”, no segundo quadrinho, o autor recorre ao recurso expressivo conhecido como', afterBlockTypes: ['command'],
    alternatives: ['personificação.', 'sinestesia.', 'antítese.', 'pleonasmo.', 'eufemismo.'], answer: 'C',
    why: '“Juventude” e “velhice” são ideias opostas colocadas em relação no mesmo enunciado: as preocupações de uma são contrastadas com os arrependimentos da outra. Esse contraste é antítese.',
    wrong: { 0: 'Não se atribuem características humanas a seres inanimados.', 1: 'Não há mistura de sensações de órgãos sensoriais diferentes.', 3: 'Não há repetição redundante de uma ideia.', 4: 'As palavras não suavizam uma expressão; elas se opõem.' },
  }),
  q({
    n: 3, subject: 'Português', content: 'Interpretação de crônica: a dedicatória de Machado', ...dedicatorias,
    statementAfter: 'No artigo, o autor', afterBlockTypes: ['command'],
    alternatives: [
      'enaltece o caráter inusitado da dedicatória redigida por Machado de Assis em Memórias Póstumas de Brás Cubas.',
      'considera que a empáfia atribuída aos escritores profissionais pode se revelar nas relações que mantêm com o público leitor.',
      'critica a pretensão daquele escritor que pensa que uma dedicatória pode se tornar uma peça rara.',
      'estabelece uma gradação entre o grau de profundidade de um autor ao escrever um bilhete, uma dedicatória e uma carta.',
      'despreza a ideia de que um escritor profissional possa vir a ser considerado uma celebridade pelo público leitor.',
    ], answer: 'A',
    why: 'Drummond diz que ficou “de queixo caído” diante da dedicatória “mais original” e “mais imprevista”, dirigida por um autor morto a um verme. Ele, portanto, enaltece seu caráter inusitado.',
    wrong: { 1: 'O texto não atribui empáfia aos escritores nem discute uma relação arrogante com leitores.', 2: 'A possibilidade de conservação da dedicatória é apresentada como cuidado do escritor, não como pretensão criticada.', 3: 'Bilhete, dedicatória e carta são associados pelo cuidado na escrita, sem gradação de profundidade.', 4: 'A celebridade é mencionada na fala hipotética do escritor, sem desprezo do autor da crônica.' },
  }),
  q({
    n: 4, subject: 'Português', content: 'Valor semântico do advérbio lá em contexto', ...dedicatorias,
    statementAfter: '“Não é que o escritor tenha lá uma mentalidade mais complicada ou enrustida que o comum dos mortais.” (2º parágrafo)\n\nNo contexto em que se insere, o termo “lá” aproxima-se, pelo sentido, da seguinte expressão:', afterBlockTypes: ['quote', 'command'],
    alternatives: ['desse modo.', 'em todo caso.', 'por isso.', 'de fato.', 'com isso.'], answer: 'D',
    why: 'Nesse uso, “lá” não indica lugar, mas reforça uma avaliação: o escritor não tem, de fato, uma mentalidade mais complicada que a das outras pessoas.',
    wrong: { 0: '“Desse modo” indicaria maneira, não o realce de veracidade.', 1: '“Em todo caso” introduziria ressalva ou conclusão condicionada.', 2: '“Por isso” indicaria consequência.', 4: '“Com isso” retomaria um instrumento ou uma circunstância anterior.' },
  }),
  q({
    n: 5, subject: 'Português', content: 'Relações de sentido: causa', ...dedicatorias,
    statementAfter: 'No contexto em que se insere, o trecho do artigo que expressa a causa de uma ação está em:', afterBlockTypes: ['command'],
    alternatives: [
      '“se torna mais exigente consigo mesmo nas relações escritas.” (2º parágrafo)',
      '“Há tempos, andei catando e copiando algumas […].” (5º parágrafo)',
      '“Vamos caprichar!” (3º parágrafo)',
      '“Mas de um autor já morto a… um verme.” (5º parágrafo)',
      '“pelo fato de fazer da escrita uma profissão e um trabalho de arte” (2º parágrafo)',
    ], answer: 'E',
    why: 'A locução “pelo fato de” explicita a causa de o escritor se tornar mais exigente nas relações escritas: ele faz da escrita uma profissão e um trabalho de arte.',
    wrong: { 0: 'Esse trecho apresenta a consequência, e não sua causa.', 1: 'Indica uma ação situada no passado, sem expressar sua causa.', 2: 'É uma exortação à ação.', 3: 'Caracteriza a dedicatória incomum, sem marcar relação causal.' },
  }),
  q({
    n: 6, subject: 'Português', content: 'Sentido figurado e expressão idiomática', ...dedicatorias,
    statementAfter: 'O autor faz uso de uma expressão em sentido figurado no seguinte trecho:', afterBlockTypes: ['command'],
    alternatives: ['“ocorreu-me lembrar o assunto” (1º parágrafo)', '“fiquei mais uma vez de queixo caído” (5º parágrafo)', '“um ser dotado de sentimentos bons e maus” (2º parágrafo)', '“sem maior preocupação” (2º parágrafo)', '“— Quando eu ficar célebre” (3º parágrafo)'], answer: 'B',
    why: '“Ficar de queixo caído” significa ficar muito surpreso ou impressionado; não descreve literalmente a posição do queixo.',
    wrong: { 0: '“Ocorreu-me lembrar” conserva o sentido de vir à memória.', 2: 'A expressão informa que o escritor possui sentimentos contrastantes.', 3: '“Sem maior preocupação” tem sentido literal no contexto.', 4: '“Ficar célebre” significa tornar-se famoso, sem expressão figurada.' },
  }),
  q({
    n: 7, subject: 'Português', content: 'Coesão e elipse', ...dedicatorias,
    statementAfter: 'Como recurso de coesão, o autor omite uma palavra, que, no entanto, pode ser depreendida pelo contexto, no trecho:', afterBlockTypes: ['command'],
    alternatives: ['“e três antes de entregá-la ao impressor” (2º parágrafo)', '“suposto autor do romance” (5º parágrafo)', '“esta dedicatória vai ser conservada em museu” (3º parágrafo)', '“as outras pessoas manifestam seu temperamento” (2º parágrafo)', '“Há especialistas em dedicatórias” (4º parágrafo)'], answer: 'A',
    why: 'Em “Pensa duas vezes [...] e três [...]”, o termo “vezes” está omitido na segunda ocorrência. O contexto permite recuperar “e pensa três vezes”, caracterizando elipse.',
    wrong: { 1: '“Suposto” está expresso e não resulta de omissão.', 2: 'A oração apresenta seus termos necessários no contexto.', 3: 'Não há uma palavra elíptica no trecho indicado.', 4: 'A estrutura “Há especialistas” não depende da recuperação de um termo omitido.' },
  }),
  q({
    n: 8, subject: 'Português', content: 'Relações de sentido: hipótese', ...dedicatorias,
    statementAfter: `“${u('Como se')} o autor pensasse (e quase sempre pensa isso mesmo):” (2º parágrafo)\n\nO trecho sublinhado expressa ideia de`, afterBlockTypes: ['quote', 'command'],
    alternatives: ['concessão.', 'hipótese.', 'adição.', 'tempo.', 'conformidade.'], answer: 'B',
    why: '“Como se” apresenta uma suposição sobre o pensamento do autor, introduzindo a fala hipotética que vem a seguir.',
    wrong: { 0: 'Não se apresenta um obstáculo que não impede outro fato.', 2: 'A expressão não acrescenta uma ideia a outra.', 3: 'Embora a fala mencione o futuro, “como se” não marca relação temporal.', 4: 'Não se indica que algo ocorre conforme uma regra ou modelo.' },
  }),
  q({
    n: 9, subject: 'Português', content: 'Pontuação: travessão e explicação', ...petalas,
    statementAfter: 'No verso “[gosto de mangas com fio — dão sorrisos mais amarelos].”, o travessão introduz uma', afterBlockTypes: ['command'],
    alternatives: ['enumeração.', 'ressalva.', 'explicação.', 'objeção.', 'consequência.'], answer: 'C',
    why: 'O segmento após o travessão explica por que o eu lírico gosta de mangas com fio: elas proporcionariam “sorrisos mais amarelos”.',
    wrong: { 0: 'Não há apresentação de uma sequência de itens.', 1: 'O segundo segmento não restringe nem corrige o anterior.', 3: 'Não se opõe à afirmação anterior.', 4: 'O travessão introduz a justificativa do gosto, não o resultado de uma ação.' },
  }),
  q({
    n: 10, subject: 'Literatura', content: 'Arcadismo e Marília de Dirceu', statement: `Na maioria das liras que consagra a Marília, Tomás Antônio Gonzaga, pela interposta figura de Dirceu, cria um campo elocutório marcado pela proximidade entre o pastor e sua musa. Um mundo em perfeita harmonia é o que se depreende no primeiro contato com o texto.

(Antonio Carlos Secchin. Percursos da poesia brasileira, 2018. Adaptado.)

Depreende-se das informações presentes no excerto que o autor se refere a um poema pertencente à estética`, blockTypes: ['quote', 'source', 'command'], works: ['Percursos da poesia brasileira'],
    alternatives: ['árcade.', 'romântica.', 'parnasiana.', 'naturalista.', 'simbolista.'], answer: 'A',
    why: 'Tomás Antônio Gonzaga é representante do Arcadismo. As figuras pastoris de Dirceu e Marília e a busca de harmonia com a natureza são marcas dessa estética.',
    wrong: { 1: 'O Romantismo privilegia subjetividade e nacionalismo, não o código árcade descrito.', 2: 'O Parnasianismo valoriza a forma objetiva e a arte pela arte, em contexto posterior.', 3: 'O Naturalismo enfatiza determinismo e análise objetiva da realidade.', 4: 'O Simbolismo explora sugestão, musicalidade e mistério, não o pastoralismo neoclássico.' },
  }),
];
