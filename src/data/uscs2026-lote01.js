const PROCESS_URL = 'https://tmpfiles.org/w4AQoBs7NfBj/provaobjetiva5.pdf';
const ANSWER_URL = 'https://tmpfiles.org/wZADoWsPNJCv/gabaritodaprovaobjetiva3.pdf';

const shared = {
  exam: 'USCS', year: 2026, phase: 'Prova II', originalUrl: PROCESS_URL,
  officialAnswerUrl: ANSWER_URL, kind: 'objective', correctionOrigin: 'official',
};
const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');
const img = (file, alt, caption, className) => ({
  src: `/images/uscs2026/${file}?v=20261104-pdf-vector1`, alt,
  ...(caption ? { caption } : {}), ...(className ? { className } : {}),
});

const comic = {
  statement: 'Leia a tirinha da cartunista Clara Gomes para responder às questões de 01 a 03.',
  blockTypes: ['label'],
  images: [img('p2-q01-tirinha-fases.svg', 'Tirinha em três quadrinhos: uma joaninha pede que um besouro pare um pouco com o videogame; ele pede para terminar a fase; ela pergunta em que fase ele está e ele responde: na infância.', '(https://bichinhosdejardim.com)', 'compact-image')],
};

const PIVETE = `Leia a letra da canção “Pivete”, de 1978, composta por Chico Buarque de Hollanda e Francis Hime e ambientada na cidade do Rio de Janeiro, para responder às questões de 04 a 06.

1  No sinal fechado
   Ele vende chiclete
   Capricha na flanela
   E se chama Pelé
   Pinta na janela
   Batalha algum trocado
   Aponta um canivete
   E até
   Dobra a Carioca, olerê
10 Desce a Frei Caneca, olará
   Se manda pra Tijuca
   Sobe o Borel
   Meio se maloca
   Agita numa boca
   Descola uma mutuca
   E um papel
   Sonha aquela mina, olerê
   Prancha, parafina, olará
   Dorme gente fina
20 Acorda pinel
   Zanza na sarjeta
   Fatura uma besteira
   E tem as pernas tortas
   E se chama Mané¹
   Arromba uma porta
   Faz ligação direta
   Engata uma primeira
   E até
   Dobra a Carioca, olerê
30 Desce a Frei Caneca, olará
   Se manda pra Tijuca
   Na contramão
   Dança para-lama
   Já era para-choque
   Agora ele se chama
   Emersão
   Sobe no passeio, olerê
   Pega no Recreio, olará
   Não se liga em freio
40 Nem direção
   No sinal fechado
   Ele transa chiclete
   E se chama pivete
   E pinta na janela
   Capricha na flanela
   Descola uma bereta²
   Batalha na sarjeta
   E tem as pernas tortas

(Chico Buarque de Hollanda. Tantas palavras, 2006.)

1  Mané: apelido para Mané Garrincha, importante jogador de futebol brasileiro das décadas de 1950, 60 e 70, assim como Pelé.
2  bereta: pistola portátil da marca Beretta.`;
const pivetePassage = () => ({
  statement: PIVETE, blockTypes: ['label', 'poem', 'source', 'note'], works: ['Pivete', 'Tantas palavras'],
});

const CASO_DE_SECRETARIA = `Leia um trecho da crônica “Caso de secretária”, de Carlos Drummond de Andrade, para responder às questões de 07 a 10.

1  Foi trombudo para o escritório. Era dia de seu aniversário, e a esposa nem sequer o abraçara, não fizera a mínima alusão à data. As crianças também tinham se esquecido. Então era assim que a família o tratava? Ele que vivia para os seus, que se arrebentava de trabalhar, não merecer um beijo, uma palavra ao menos!

Mas no escritório, havia flores à sua espera, sobre a mesa. Havia o sorriso e o abraço da secretária, que poderia muito bem ter ignorado o aniversário, e entretanto o lembrara. Era mais do que uma auxiliar, atenta, experimentada e eficiente, pé-de-boi da firma, como até então a considerara; era um coração amigo.

Passada a surpresa, sentiu-se ainda mais borocoxô: o carinho da secretária não curava, abria mais a ferida. Pois então uma estranha se lembrava dele com tais requintes, e a mulher e os filhos, nada? [...]

Durante o dia, a secretária redobrou de atenções. Parecia querer consolá-lo, como se medisse toda a sua solidão moral, o seu abandono. Sorria, tinha palavras amáveis, e o ditado da correspondência foi entremeado de suaves brincadeiras da parte dela.

[...]

5  — Se o senhor quisesse, podíamos jantar juntos — insinuou ela, discretamente.

E não é que podiam mesmo? Em vez de passar uma noite besta, ressentida — o pessoal lá em casa pouco está me ligando —, teria horas amenas, em companhia de uma mulher que — reparava agora — era bem bonita.

Daí por diante o trabalho foi nervoso, nunca mais que se fechava o escritório. Teve vontade de mandar todos embora, para que todos comemorassem o seu aniversário, ele principalmente. Conteve-se, no prazer ansioso da espera.

— Aonde você prefere ir? — perguntou, ao saírem.

— Se não se importa, vamos passar primeiro em meu apartamento. Preciso trocar de roupa.

10  Ótimo, pensou ele; — faz-se a inspeção prévia do terreno, e, quem sabe?

— Mas antes quero um drinque, para animar — ela retificou.

[...]

No apartamento, ela apontou-lhe o banheiro e disse-lhe que o usasse sem cerimônia. Dentro de quinze minutos ele poderia entrar no quarto, não precisava bater — e o sorriso dela, dizendo isto, era uma promessa de felicidade.

Ele nem percebeu ao certo se estava se arrumando ou se desarrumando, de tal modo os quinze minutos se atropelaram, querendo virar quinze segundos, no calor escaldante do banheiro e da situação. Liberto da roupa incômoda, abriu a porta do quarto. Lá dentro, sua mulher e seus filhos, em coro com a secretária, esperavam-no atacando “Parabéns pra você”.

(Carlos Drummond de Andrade. 70 historinhas, 2016.)`;
const SECRETARIA_BLOCKS = ['label', ...Array(15).fill('prose'), 'source'];
const secretariaPassage = () => ({
  statement: CASO_DE_SECRETARIA, blockTypes: SECRETARIA_BLOCKS, works: ['Caso de secretária', '70 historinhas'],
});

export const uscs2026Lote01 = [
  {
    ...shared, ...comic,
    id: 'uscs2026-prova2-q01', number: 'Questão 01', subject: 'Português', content: 'Tirinha: ambiguidade e humor', difficulty: 'Fácil',
    statementAfter: 'O recurso estilístico que, principalmente, é utilizado na construção do humor da tirinha é', afterBlockTypes: ['command'], preview: 'Reconheça o recurso de linguagem que produz o humor da tirinha.',
    alternatives: ['a ambiguidade.', 'o paradoxo.', 'o pleonasmo.', 'o eufemismo.', 'a metalinguagem.'], correct: 0,
    resolution: ['A palavra “fase” é empregada em dois sentidos: etapa de um videogame e etapa da vida. O diálogo final explora essa ambiguidade ao responder “Na infância!”.'],
    analyses: ['Correta. O humor nasce do duplo sentido de “fase”: etapa do jogo e fase da vida.', 'Incorreta. Não há contradição lógica entre duas ideias apresentadas como simultaneamente verdadeiras.', 'Incorreta. Não há repetição redundante de um mesmo sentido.', 'Incorreta. A tirinha não suaviza uma ideia desagradável; explora dois sentidos de uma palavra.', 'Incorreta. A linguagem não se volta para o próprio código ou para a produção da tirinha.'],
  },
  {
    ...shared, ...comic,
    id: 'uscs2026-prova2-q02', number: 'Questão 02', subject: 'Português', content: 'Modo imperativo', difficulty: 'Fácil',
    statementAfter: 'Os verbos no modo imperativo expressam sugestões, pedidos, ordens.\n\nEstá no modo imperativo o verbo sublinhado em:', afterBlockTypes: ['prose', 'command'], preview: 'Identifique a forma verbal usada para fazer um pedido na tirinha.',
    alternatives: [`“${underline('Tá')} na hora” (1º quadrinho).`, `“eu ${underline('terminar')} essa fase” (2º quadrinho).`, `“${underline('deixa')} só” (2º quadrinho).`, `“de ${underline('parar')} um pouco com o videogame” (1º quadrinho).`, `“${underline('Tá')} bem” (1º quadrinho).`], correct: 2,
    resolution: ['“Deixa” exprime um pedido dirigido à interlocutora e está no imperativo afirmativo. As demais formas destacadas estão no indicativo ou no infinitivo.'],
    analyses: ['Incorreta. “Tá”, forma reduzida de “está”, está no presente do indicativo.', 'Incorreta. “Terminar” é infinitivo.', 'Correta. “Deixa” é imperativo afirmativo e introduz um pedido.', 'Incorreta. “Parar” é infinitivo.', 'Incorreta. “Tá” está no presente do indicativo, na expressão “Tá bem”.'],
  },
  {
    ...shared, ...comic,
    id: 'uscs2026-prova2-q03', number: 'Questão 03', subject: 'Português', content: 'Valor semântico de expressão adverbial', difficulty: 'Fácil',
    statementAfter: 'Na primeira fala da joaninha, a expressão “um pouco” equivale, em sentido, a', afterBlockTypes: ['command'], preview: 'Interprete o sentido de “parar um pouco” no contexto da tirinha.',
    alternatives: ['gentilmente.', 'urgentemente.', 'raramente.', 'temporariamente.', 'inicialmente.'], correct: 3,
    resolution: ['Em “parar um pouco com o videogame”, a expressão indica uma interrupção por certo tempo, isto é, temporariamente.'],
    analyses: ['Incorreta. “Um pouco” não caracteriza a maneira gentil da ação.', 'Incorreta. Não há ideia de urgência nessa expressão.', 'Incorreta. A fala não trata da frequência da interrupção.', 'Correta. A proposta é interromper o jogo por algum tempo, temporariamente.', 'Incorreta. “Um pouco” não significa no início.'],
  },
  {
    ...shared, ...pivetePassage(),
    id: 'uscs2026-prova2-q04', number: 'Questão 04', subject: 'Literatura', content: 'Pivete: interpretação da letra', difficulty: 'Média',
    statementAfter: 'Na letra da canção, os autores', afterBlockTypes: ['command'], preview: 'Interprete as cenas de trabalho e criminalidade na canção Pivete.',
    alternatives: ['mostram como os jogadores Pelé e Garrincha, diferentemente de outros jovens, fizeram escolhas virtuosas em suas vidas.', 'criticam os indivíduos que escolhem a criminalidade em vez de se engajarem nos trabalhos que lhes são acessíveis.', 'defendem a ideia de que aqueles que trabalham e se esforçam ascendem por seu próprio mérito.', 'apresentam cenas da vida da população pobre, nas quais um mesmo personagem pode trabalhar e cometer atos criminosos.', 'estabelecem uma comparação entre a vida de jovens pobres e jovens ricos numa mesma cidade.'], correct: 3,
    resolution: ['O personagem vende chiclete, capricha na flanela e batalha trocado, mas também aponta canivete, arromba portas e faz ligação direta. A letra reúne trabalho precário e criminalidade na mesma trajetória de pobreza.'],
    analyses: ['Incorreta. Pelé e Mané são referências usadas em uma trajetória ficcional, não exemplos biográficos de escolhas virtuosas.', 'Incorreta. A canção não formula essa crítica moral direta nem opõe trabalho acessível a uma escolha deliberada pelo crime.', 'Incorreta. Não há ascensão social apresentada como recompensa pelo esforço.', 'Correta. O mesmo personagem trabalha e pratica delitos, em cenas associadas à pobreza urbana.', 'Incorreta. Não há contraste entre jovens pobres e ricos.'],
  },
  {
    ...shared, ...pivetePassage(),
    id: 'uscs2026-prova2-q05', number: 'Questão 05', subject: 'Português', content: 'Metáfora em letra de canção', difficulty: 'Média',
    statementAfter: 'Na letra da canção, a seguinte palavra pode ser entendida como uma metáfora da lei:', afterBlockTypes: ['command'], preview: 'Relacione a palavra usada na canção à ideia de limite imposto pela lei.',
    alternatives: ['“Engata” (27ª linha).', '“freio” (39ª linha).', '“tortas” (23ª linha).', '“flanela” (45ª linha).', '“sarjeta” (21ª linha).'], correct: 1,
    resolution: ['O freio limita ou interrompe um movimento. Em “Não se liga em freio”, a palavra pode representar metaforicamente os limites e as restrições impostos pela lei.'],
    analyses: ['Incorreta. “Engata” se refere à ação de colocar uma marcha, sem representar a lei.', 'Correta. O freio é imagem de restrição e controle, associável à lei.', 'Incorreta. “Tortas” descreve as pernas e não estabelece essa relação metafórica.', 'Incorreta. “Flanela” pertence às cenas de trabalho informal.', 'Incorreta. “Sarjeta” situa espacialmente a trajetória do personagem.'],
  },
  {
    ...shared, ...pivetePassage(),
    id: 'uscs2026-prova2-q06', number: 'Questão 06', subject: 'Português', content: 'Registro informal de linguagem', difficulty: 'Fácil',
    statementAfter: 'O registro de linguagem utilizado na canção é, predominantemente, informal, a exemplo do que ocorre nas expressões:', afterBlockTypes: ['command'], preview: 'Identifique o par de expressões marcadamente coloquiais na letra.',
    alternatives: ['“E tem as pernas tortas” (23ª linha) e “E se chama Mané” (24ª linha).', '“Ele vende chiclete” (2ª linha) e “E se chama Pelé” (4ª linha).', '“Se manda pra Tijuca” (11ª linha) e “Dorme gente fina” (19ª linha).', '“Aponta um canivete” (7ª linha) e “No sinal fechado” (41ª linha).', '“No sinal fechado” (1ª linha) e “Zanza na sarjeta” (21ª linha).'], correct: 2,
    resolution: ['“Se manda” é empregado coloquialmente no sentido de ir embora, e “gente fina” é uma expressão informal de avaliação social. As duas expressões exemplificam o registro predominante.'],
    analyses: ['Incorreta. O primeiro enunciado tem construção denotativa usual; o segundo contém um apelido próprio, sem formar o par mais representativo do registro informal.', 'Incorreta. As duas orações seguem construção usual e apresentam nomes próprios.', 'Correta. “Se manda” e “gente fina” são usos tipicamente coloquiais.', 'Incorreta. As duas expressões têm sentido denotativo e estrutura usual.', 'Incorreta. Embora “Zanza” seja informal, “No sinal fechado” é uma expressão denotativa usual; a alternativa C apresenta o par integralmente coloquial.'],
  },
  {
    ...shared, ...secretariaPassage(),
    id: 'uscs2026-prova2-q07', number: 'Questão 07', subject: 'Literatura', content: 'Caso de secretária: estados emocionais', difficulty: 'Fácil',
    statementAfter: 'Segundo o que está expresso nos dois primeiros parágrafos, o marido sente-se, ao se deparar com os fatos,', afterBlockTypes: ['command'], preview: 'Compare os sentimentos do personagem em casa e no escritório.',
    alternatives: ['reconhecido (1º parágrafo) e empolgado (2º parágrafo).', 'incluído (1º parágrafo) e apático (2º parágrafo).', 'magoado (1º parágrafo) e consternado (2º parágrafo).', 'triste (1º parágrafo) e alheio (2º parágrafo).', 'decepcionado (1º parágrafo) e acolhido (2º parágrafo).'], correct: 4,
    resolution: ['No primeiro parágrafo, o esquecimento da família causa decepção. No segundo, as flores, o sorriso e o abraço da secretária fazem com que ele se sinta lembrado e acolhido.'],
    analyses: ['Incorreta. Ele não se sente reconhecido pela família no primeiro parágrafo.', 'Incorreta. O personagem se sente excluído em casa e não apático no escritório.', 'Incorreta. Embora esteja magoado, o segundo momento é de acolhimento, não de consternação.', 'Incorreta. A atenção da secretária não o deixa alheio.', 'Correta. O esquecimento decepciona; a lembrança da secretária acolhe.'],
  },
  {
    ...shared, ...secretariaPassage(),
    id: 'uscs2026-prova2-q08', number: 'Questão 08', subject: 'Português', content: 'Oração subordinada de finalidade', difficulty: 'Fácil',
    statementAfter: `“Teve vontade de mandar todos embora, ${underline('para que')} todos comemorassem o seu aniversário, ele principalmente.” (7º parágrafo)\n\nNo contexto em que está inserida, a locução sublinhada inicia uma oração que expressa`, afterBlockTypes: ['quote', 'command'], preview: 'Reconheça a relação semântica introduzida por “para que”.',
    alternatives: ['finalidade.', 'tempo.', 'causa.', 'conclusão.', 'proporção.'], correct: 0,
    resolution: ['“Para que” introduz a finalidade pretendida com a vontade de mandar todos embora: que comemorassem seu aniversário.'],
    analyses: ['Correta. A oração expressa o objetivo da ação.', 'Incorreta. Não se indica momento ou duração.', 'Incorreta. A oração não apresenta a causa da vontade, mas sua finalidade.', 'Incorreta. Não há conclusão decorrente de uma premissa.', 'Incorreta. Não existe relação de proporcionalidade.'],
  },
  {
    ...shared, ...secretariaPassage(),
    id: 'uscs2026-prova2-q09', number: 'Questão 09', subject: 'Português', content: 'Discurso indireto e concordância de tempos', difficulty: 'Média',
    statementAfter: `“— Aonde ${underline('você prefere ir')}? — perguntou, ao saírem.” (8º parágrafo)\n\nAo transpor a fala do personagem para o discurso indireto e mantendo o sentido original, o trecho sublinhado assume a forma:`, afterBlockTypes: ['quote', 'command'], preview: 'Transpose a pergunta para o discurso indireto com a pessoa e o tempo adequados.',
    alternatives: ['aonde ela prefere ir.', 'aonde ela preferia ir.', 'aonde ele preferia ir.', 'aonde ele preferiu ir.', 'aonde ela preferiu ir.'], correct: 1,
    resolution: ['A pergunta é dirigida à mulher; portanto, “você” passa a “ela”. Como o verbo introdutório “perguntou” está no passado, o presente “prefere” passa ao pretérito imperfeito “preferia”.'],
    analyses: ['Incorreta. Mantém o presente, sem a adequação temporal ao discurso indireto introduzido por “perguntou”.', 'Correta. Preserva a referência à mulher e emprega o pretérito imperfeito.', 'Incorreta. A pergunta se refere ao destino preferido pela mulher, não pelo homem.', 'Incorreta. Além da pessoa inadequada, o pretérito perfeito não realiza a correspondência esperada.', 'Incorreta. A pessoa está correta, mas “preferiu” altera a relação temporal.'],
  },
  {
    ...shared, ...secretariaPassage(),
    id: 'uscs2026-prova2-q10', number: 'Questão 10', subject: 'Português', content: 'Pronome relativo com função de sujeito', difficulty: 'Média',
    statementAfter: `Em “Ele que vivia para os seus, ${underline('que')} se arrebentava de trabalhar” (1º parágrafo), o termo sublinhado exerce a mesma função sintática do termo sublinhado em:`, afterBlockTypes: ['command'], preview: 'Identifique a função de sujeito exercida pelo pronome relativo.',
    alternatives: [`“No apartamento, ela apontou-${underline('lhe')} o banheiro” (12º parágrafo).`, `“Então era assim que ${underline('a família')} o tratava” (1º parágrafo).`, `“${underline('havia')} flores à sua espera, sobre a mesa” (2º parágrafo).`, `“e a esposa nem sequer ${underline('o')} abraçara” (1º parágrafo).`, `“era ${underline('um coração amigo')}” (2º parágrafo).`], correct: 1,
    resolution: ['O segundo “que” é pronome relativo e retoma “Ele”, exercendo a função de sujeito de “se arrebentava”. Em “a família o tratava”, “a família” também é sujeito.'],
    analyses: ['Incorreta. “Lhe” exerce função de objeto indireto.', 'Correta. “A família” é sujeito de “tratava”, assim como o pronome relativo é sujeito de “se arrebentava”.', 'Incorreta. “Havia” é verbo, não sujeito.', 'Incorreta. “O” é objeto direto de “abraçara”.', 'Incorreta. “Um coração amigo” é predicativo do sujeito.'],
  },
];
