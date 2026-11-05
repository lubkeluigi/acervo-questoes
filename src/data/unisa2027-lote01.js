const ORIGINAL_URL = 'https://documento.vunesp.com.br/documento/stream/NzkyMDMxMw%3d%3d';

const shared = {
  exam: 'UNISA', year: 2027, phase: 'Prova II', originalUrl: ORIGINAL_URL, kind: 'objective',
};

export const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');

const comicQuestion = (command) => ({
  statement: 'Considere a tirinha de Caetano Cury para responder às questões 01 e 02.',
  images: [{
    src: '/images/unisa2027/q01-q02-tirinha.png',
    alt: 'Tirinha em quatro quadros: um personagem recebe a orientação de ficar de olhos fechados por 30 minutos debaixo do chuveiro para ouvir a voz da consciência; ao seguir a orientação, ouve a repreensão “Quanto desperdício de água e energia!”.',
    caption: 'Caetano Cury. https://teoeominimundo.com.br, 18.08.2022.',
  }],
  statementAfter: command,
  afterBlockTypes: ['command'],
  preview: command,
});

const CHRONICLE = `Leia a crônica “O exercício da crônica”, de Vinicius de Moraes, para responder às questões de 03 a 07.

Escrever prosa é uma arte ingrata. Eu digo prosa fiada, como faz um cronista; não a prosa de um ficcionista, na qual este é levado meio a tapas pelas personagens e situações que, azar dele, criou porque quis. Com um prosador do cotidiano, a coisa fia mais fino. Senta-se ele diante de sua máquina, acende um cigarro, olha através da janela e busca fundo em sua imaginação um fato qualquer, de preferência colhido no noticiário matutino, ou da véspera, em que, com suas artimanhas peculiares, possa injetar um sangue novo. Se nada houver, resta-lhe o recurso de olhar em torno e esperar que, através de um processo associativo, surja-lhe de repente a crônica, provinda dos fatos e feitos de sua vida emocionalmente despertados pela concentração. Ou então, em última instância, recorrer ao assunto da falta de assunto, já bastante gasto, mas do qual, no ato de escrever, pode surgir o inesperado.

Alguns fazem-no de maneira simples e direta, sem caprichar demais no estilo, mas enfeitando-o aqui e ali desses pequenos achados que são a sua marca registrada e constituem um tópico infalível nas conversas do alheio naquela noite. Outros, de modo lento e elaborado, que o leitor deixa para mais tarde como um convite ao sono: a estes se lê como quem mastiga com prazer grandes bolas de chicletes. Outros, ainda, e constituem a maioria, “tacam peito” na máquina e cumprem o dever cotidiano da crônica com uma espécie de desespero, numa atitude ou-vai-ou-racha. Há os eufóricos, cuja prosa procura sempre infundir vida e alegria em seus leitores, e há os tristes, que escrevem com o fito exclusivo de desanimar o gentio não só quanto à vida, como quanto à condição humana e às razões de viver. Há também os modestos, que ocultam cuidadosamente a própria personalidade atrás do que dizem e, em contrapartida, os vaidosos, que castigam no pronome na primeira pessoa e colocam-se geralmente como a personagem principal de todas as situações. Como se diz que é preciso um pouco de tudo para fazer um mundo, todos estes “marginais da imprensa”, por assim dizer, têm o seu papel a cumprir. Uns afagam vaidades, outros as espicaçam¹; este é lido por puro deleite, aquele por puro vício. Mas uma coisa é certa: o público não dispensa a crônica, e o cronista afirma-se cada vez mais como o cafezinho quente seguido de um bom cigarro, que tanto prazer dão depois que se come.

Coloque-se porém o leitor, o ingrato leitor, no papel do cronista. Dias há em que, positivamente, a crônica “não baixa”. O cronista levanta-se, senta-se, lava as mãos, levanta-se de novo, chega à janela, dá uma telefonada a um amigo, põe um disco na vitrola, relê crônicas passadas em busca de inspiração — e nada. Ele sabe que o tempo está correndo, que a sua página tem uma hora certa para fechar, que os linotipistas² o estão esperando com impaciência, que o diretor do jornal está provavelmente coçando a cabeça e dizendo aos seus auxiliares: “É... não há nada a fazer com Fulano...”. Aí então é que, se ele é cronista mesmo, ele se pega pela gola e diz: “Vamos, escreve, ó mascarado! Escreve uma crônica sobre esta cadeira que está aí em tua frente! E que ela seja benfeita e divirta os leitores!”. E o negócio sai de qualquer maneira.

O ideal para um cronista é ter sempre uma ou duas crônicas adiantadas. Mas eu conheço muito poucos que o façam. Alguns tentam, quando começam, no afã de dar uma boa impressão ao diretor e ao secretário do jornal. Mas se ele é um verdadeiro cronista, um cronista que se preza, ao fim de duas semanas estará gastando a metade do seu ordenado em mandar sua crônica de táxi — e a verdade é que, em sua inocente maldade, tem um certo prazer em imaginar o suspiro de alívio e a correria que ela causa, quando, tal uma filha desaparecida, chega de volta à casa paterna.

Augusto Massi (org.). Os sabiás da crônica, 2021.

¹ espicaçar: magoar, torturar.

² linotipista: profissional da área gráfica quem opera o linotipo, uma máquina de digitação que funde cada linha de caracteres num bloco.`;

const CHRONICLE_BLOCKS = ['label', 'prose', 'prose', 'prose', 'prose', 'source', 'note', 'note'];
export const chronicleQuestion = (command, preview = command) => ({
  statement: `${CHRONICLE}\n\n${command}`,
  blockTypes: [...CHRONICLE_BLOCKS, ...command.split('\n\n').map(() => 'command')],
  works: ['Os sabiás da crônica'],
  preview,
});

export const unisa2027Lote01 = [
  {
    ...shared,
    ...comicQuestion('O humor da tirinha é construído por uma quebra de expectativa, uma vez que'),
    id: 'unisa2027-prova2-q01', number: 'Questão 01', subject: 'Português', content: 'Interpretação de tirinha e humor', difficulty: 'Fácil',
    alternatives: [
      'a consciência reprova a ação que o personagem executa para ouvi-la.',
      'a consciência endossa a orientação inicialmente apresentada.',
      'o personagem não consegue ouvir a consciência apesar de seguir a orientação dada por ela.',
      'o personagem percebe que interpretou a orientação equivocadamente.',
      'a consciência critica a dificuldade do personagem em ouvi-la.',
    ],
    correct: 0,
    resolution: [
      'A orientação inicial cria a expectativa de que o personagem terá uma experiência de reflexão ou autoconhecimento ao ouvir sua consciência.',
      'No último quadro, essa expectativa é quebrada: a consciência se manifesta para repreender o desperdício de água e energia provocado pelo próprio procedimento indicado. O humor nasce desse contraste entre o objetivo esperado e a crítica recebida.',
    ],
    analyses: [
      'Correta. A fala “Quanto desperdício de água e energia!” reprova a ação praticada pelo personagem para ouvir a consciência.',
      'Incorreta. A consciência não aprova a orientação; ao contrário, condena o desperdício resultante dela.',
      'Incorreta. O personagem ouve a consciência, cuja fala aparece no último quadro. O problema é o conteúdo inesperado dessa manifestação.',
      'Incorreta. A tirinha não apresenta uma tomada de consciência do personagem sobre um erro de interpretação; o efeito humorístico decorre da crítica final.',
      'Incorreta. A crítica se dirige ao desperdício de água e energia, não a uma dificuldade do personagem em ouvir.',
    ],
  },
  {
    ...shared,
    ...comicQuestion('Para caracterizar a “consciência” na tirinha, o autor recorre, sobretudo, à seguinte figura de linguagem:'),
    id: 'unisa2027-prova2-q02', number: 'Questão 02', subject: 'Português', content: 'Figuras de linguagem', difficulty: 'Fácil',
    alternatives: ['antítese.', 'hipérbole.', 'ironia.', 'eufemismo.', 'personificação.'],
    correct: 4,
    resolution: [
      'A consciência é uma faculdade ou instância abstrata do ser humano, mas, na tirinha, é representada como alguém que orienta, fala e faz uma repreensão.',
      'A atribuição de ações e características humanas a um ser abstrato configura personificação, também chamada prosopopeia.',
    ],
    analyses: [
      'Incorreta. Não é a aproximação de termos ou ideias opostas que caracteriza a consciência na tirinha.',
      'Incorreta. A caracterização da consciência não depende de um exagero expressivo.',
      'Incorreta. Embora a tirinha produza humor por quebra de expectativa, a consciência não é caracterizada por uma afirmação de sentido contrário ao pretendido, o que configuraria ironia.',
      'Incorreta. Não há suavização de uma ideia ou expressão, recurso próprio do eufemismo.',
      'Correta. A consciência, entidade abstrata, recebe voz e comportamento humanos, caracterizando personificação ou prosopopeia.',
    ],
  },
  {
    ...shared,
    ...chronicleQuestion('No 2º parágrafo, o autor defende que a maioria dos cronistas'),
    id: 'unisa2027-prova2-q03', number: 'Questão 03', subject: 'Português', content: 'Interpretação de crônica', difficulty: 'Média',
    alternatives: [
      'dependem de acontecimentos extraordinários para escrever.',
      'produzem suas crônicas sem compromisso com prazos.',
      'enfrentam a escrita de modo decidido mesmo sob pressão.',
      'abandonam frequentemente o texto antes de concluí-lo.',
      'escrevem de maneira cuidadosa e sem pressa.',
    ],
    correct: 2,
    resolution: [
      'No segundo parágrafo, Vinicius de Moraes identifica a maioria com os cronistas que “tacam peito” na máquina e cumprem o “dever cotidiano” em uma atitude “ou-vai-ou-racha”.',
      'Essas expressões apresentam escritores que, apesar do desespero e da pressão, assumem a tarefa com decisão e a levam adiante.',
    ],
    analyses: [
      'Incorreta. O texto não atribui à maioria a necessidade de fatos extraordinários; a crônica nasce do cotidiano e até da falta de assunto.',
      'Incorreta. A maioria “cumpre o dever cotidiano”, e o terceiro parágrafo reforça a pressão do horário de fechamento da página.',
      'Correta. “Tacam peito” e “ou-vai-ou-racha” expressam decisão diante da pressão e do desespero de produzir a crônica.',
      'Incorreta. O grupo descrito cumpre a tarefa; não há afirmação de abandono frequente do texto.',
      'Incorreta. A escrita lenta e elaborada é atribuída a outro grupo, não à maioria caracterizada pela atitude “ou-vai-ou-racha”.',
    ],
  },
  {
    ...shared,
    ...chronicleQuestion('Assíndeto é um recurso expressivo em que as orações de um período se sucedem sem conjunção coordenativa, como ocorre em “O cronista levanta-se, senta-se, lava as mãos, levanta-se de novo, chega à janela, dá uma telefonada a um amigo [...]” (3º parágrafo). Esse encadeamento das orações tem como principal efeito'),
    id: 'unisa2027-prova2-q04', number: 'Questão 04', subject: 'Português', content: 'Coesão e assíndeto', difficulty: 'Média',
    alternatives: [
      'expressar que o cronista prefere outras atividades à escrita jornalística.',
      'mostrar a organização rigorosa da rotina do cronista.',
      'indicar que a produção da crônica exige várias etapas previamente definidas.',
      'representar a inquietação do cronista diante da falta de inspiração.',
      'destacar o prazer do cronista em interromper o trabalho para se distrair.',
    ],
    correct: 3,
    resolution: [
      'A sequência de ações ocorre em um contexto de bloqueio: a crônica “não baixa”, e o cronista tenta sucessivamente encontrar inspiração.',
      'Sem conjunções que organizem ou hierarquizem as ações, o assíndeto acelera o encadeamento e sugere movimento contínuo e inquieto. O recurso traduz a agitação do cronista diante da falta de inspiração e da aproximação do prazo.',
    ],
    analyses: [
      'Incorreta. As ações não revelam preferência por outras atividades; são tentativas inquietas de superar o bloqueio da escrita.',
      'Incorreta. A sucessão acelerada não descreve uma rotina rigorosamente organizada, mas um estado de agitação.',
      'Incorreta. As ações não constituem etapas previamente definidas de um método de produção.',
      'Correta. O encadeamento sem conjunções intensifica o ritmo e representa a inquietação causada pela falta de inspiração.',
      'Incorreta. O contexto é de tensão diante do prazo, não de prazer em se distrair do trabalho.',
    ],
  },
  {
    ...shared,
    ...chronicleQuestion('Aposto é a expressão de caráter nominal que serve para explicar, detalhar ou especificar outro termo da oração de valor substantivo. Geralmente, o aposto aparece isolado por vírgulas, dois-pontos ou travessões.\n\nCumpre função de aposto a expressão sublinhada em:', 'Cumpre função de aposto a expressão sublinhada em:'),
    id: 'unisa2027-prova2-q05', number: 'Questão 05', subject: 'Português', content: 'Sintaxe: aposto', difficulty: 'Fácil',
    alternatives: [
      `“Coloque-se porém o leitor, ${underline('o ingrato leitor')}, no papel do cronista” (3º parágrafo).`,
      `“Alguns tentam, ${underline('quando começam')}, no afã de dar uma boa impressão” (4º parágrafo).`,
      `“Com um prosador do cotidiano, ${underline('a coisa fia mais fino')}” (1º parágrafo).`,
      `“Ou então, ${underline('em última instância')}, recorrer ao assunto da falta de assunto” (1º parágrafo).`,
      `“Vamos, escreve, ${underline('ó mascarado')}!” (3º parágrafo).`,
    ],
    correct: 0,
    resolution: [
      'Em “Coloque-se porém o leitor, o ingrato leitor, no papel do cronista”, a expressão “o ingrato leitor” retoma e especifica o sintagma nominal “o leitor”, acrescentando-lhe uma caracterização.',
      'Por ter valor nominal e explicar outro termo substantivo, a expressão funciona como aposto explicativo, isolada por vírgulas.',
    ],
    analyses: [
      'Correta. “O ingrato leitor” é um sintagma nominal que explica e caracteriza “o leitor”, exercendo função de aposto.',
      'Incorreta. “Quando começam” é uma oração subordinada adverbial temporal, e não uma expressão nominal que explique outro termo.',
      'Incorreta. “A coisa fia mais fino” é uma oração, não um aposto relacionado a “prosador do cotidiano”.',
      'Incorreta. “Em última instância” é uma locução adverbial que indica circunstância, sem valor substantivo de aposto.',
      'Incorreta. “Ó mascarado” é vocativo: serve para chamar ou interpelar o interlocutor, e não para explicar um termo substantivo.',
    ],
  },
];
