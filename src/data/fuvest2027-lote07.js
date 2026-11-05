const ORIGINAL_URL = 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/fuvest/2027_1fase/fuvest2027_1fase_prova_V1.pdf';
const base = { exam: 'FUVEST', year: 2027, phase: '1ª fase · V1', originalUrl: ORIGINAL_URL };

const SKATE_TEXT = 'Texto para as questões 73 e 74\n\nEm outubro de 2025, o skatista Sandro Dias (o “Mineirinho”) realizou o que foi considerado o maior drop de skate do mundo, descendo em uma rampa montada na lateral do Centro Administrativo Fernando Ferrari, em Porto Alegre (vide foto). Partindo do repouso de uma plataforma montada a 70 m do solo, o skatista desceu pela rampa, passando por uma parte curva (“transição”) até chegar ao ponto mais baixo da rampa, a uma altura de 9,70 m do solo. O percurso termina em um leve aclive (“flat”), conforme ilustrado na segunda figura.\n\nConsidere que Sandro pesa 70 kg e que o trabalho das forças de atrito e arrasto do ar foi de 10.710 J durante a primeira parte do percurso (até o ponto mais baixo da rampa).';
const SKATE_BLOCKS = ['label', 'prose', 'prose'];
const SKATE_PHOTO = [{ src: '/images/fuvest2027/q73-sandro-dias.jpg', alt: 'Sandro Dias na rampa de skate montada na lateral do Centro Administrativo Fernando Ferrari, em Porto Alegre.', caption: 'Foto do site G1.' }];
const SKATE_NOTE = 'Note e adote:\nAceleração da gravidade: $g = 10\\ \\mathrm{m/s^2}$.';

export const fuvest2027Lote07 = [
  {
    ...base, id: 'fuvest2027-v1-q73', number: 'Questão 73', subject: 'Física', content: 'Energia mecânica e forças dissipativas', difficulty: 'Média',
    statement: SKATE_TEXT, blockTypes: SKATE_BLOCKS, images: SKATE_PHOTO, afterDiagram: 'fuvest2027Q73Ramp', afterFigureCaption: 'Ilustração inspirada em figura de vídeo do canal Ciência Todo Dia do Youtube.',
    statementTail: `${SKATE_NOTE}\n\nConsiderando os efeitos das forças dissipativas mencionadas, qual a velocidade, em km/h, que Sandro alcançou no ponto mais baixo da rampa?`, tailBlockTypes: ['note-box', 'command'],
    alternatives: ['10', '30', '47', '108', '126'], correct: 3,
    resolution: [
      'O desnível entre a plataforma e o ponto mais baixo é:$$\\Delta h = 70 - 9{,}70 = 60{,}30\\ \\text{m}$$',
      'Pela conservação da energia com perdas, a energia cinética final é a energia potencial perdida menos o módulo do trabalho dissipativo:$$K = mg\\Delta h - |W_d|$$$$K = 70 \\cdot 10 \\cdot 60{,}30 - 10.710$$$$K = 31.500\\ \\text{J}$$',
      'Como Sandro parte do repouso:$$v = \\sqrt{\\frac{2K}{m}} = \\sqrt{\\frac{2 \\cdot 31.500}{70}}$$$$v = 30\\ \\text{m/s} = 30 \\cdot 3{,}6 = \\boxed{108\\ \\text{km/h}}$$',
    ],
    analyses: [
      'Incorreta. O valor 10 km/h não corresponde à velocidade obtida pelo balanço entre energia potencial, trabalho dissipativo e energia cinética.',
      'Incorreta. O resultado intermediário é 30 m/s; ao converter para km/h, obtém-se 108 km/h.',
      'Incorreta. O valor 47 km/h desconsidera o balanço energético correto para o desnível e as perdas informados.',
      'Correta. A velocidade é 30 m/s, equivalente a 108 km/h.',
      'Incorreta. O valor 126 km/h não resulta da energia cinética de 31.500 J para uma massa de 70 kg.',
    ],
  },
  {
    ...base, id: 'fuvest2027-v1-q74', number: 'Questão 74', subject: 'Física', content: 'Dinâmica do movimento curvilíneo', difficulty: 'Média',
    statement: SKATE_TEXT, blockTypes: SKATE_BLOCKS, images: SKATE_PHOTO, afterDiagram: 'fuvest2027Q73Ramp', afterFigureCaption: 'Ilustração inspirada em figura de vídeo do canal Ciência Todo Dia do Youtube.',
    statementTail: `${SKATE_NOTE}\n\nQuando Sandro está na zona de “transição”, marcada por um ponto azul na figura, antes do ponto mais baixo da rampa, é correto afirmar:`, tailBlockTypes: ['note-box', 'command'],
    alternatives: [
      'O módulo da força normal que o skate exerce sobre Sandro é zero, fazendo com que o skatista tenha a sensação de “estar flutuando”.',
      'O módulo da força normal que o skate exerce sobre Sandro é maior que o módulo da componente radial da força peso, cujos efeitos incluem uma sobrecarga em seus joelhos.',
      'A única força atuando sobre Sandro é a força peso, uma vez que ele está em queda livre nesse trecho.',
      'O módulo da força normal que o skate exerce sobre Sandro é igual ao módulo da força peso, já que Sandro está em equilíbrio mecânico neste ponto do percurso.',
      'Sandro está em um movimento retilíneo uniformemente variado com aceleração constante nessa parte do trajeto.',
    ], correct: 1,
    resolution: [
      'Na transição, Sandro descreve uma trajetória curva e possui aceleração centrípeta dirigida para o centro de curvatura.',
      'Na direção radial, a resultante é dada por $N - P_r = \\frac{mv^2}{R}$, em que $P_r$ é a componente radial do peso.',
      'Portanto, $N = P_r + \\frac{mv^2}{R} > P_r$. A normal supera a componente radial do peso, produzindo a sensação de sobrecarga mencionada na alternativa B.',
    ],
    analyses: [
      'Incorreta. Se a normal fosse zero, não haveria a força de contato necessária para sustentar a trajetória curva descrita na transição.',
      'Correta. A normal precisa superar a componente radial do peso para fornecer a resultante centrípeta.',
      'Incorreta. Sandro mantém contato com o skate e a rampa; além do peso, atuam a normal e forças dissipativas.',
      'Incorreta. Há aceleração centrípeta, não equilíbrio mecânico, e a normal não é simplesmente igual ao peso.',
      'Incorreta. A trajetória na transição é curva, não retilínea.',
    ],
  },
  {
    ...base, id: 'fuvest2027-v1-q75', number: 'Questão 75', subject: 'Física', content: 'Calorimetria e mudança de fase', difficulty: 'Média',
    statement: 'Para vender água no Carnaval, uma pessoa colocou em uma caixa de isopor 15 copinhos de água com 350 mL cada, à temperatura de 25 °C, e 1,0 kg de gelo em blocos. Para preencher todo o volume do isopor, acrescentou 0,5 kg de gelo triturado na caixa, que foi fechada e lacrada. Sabendo que o gelo, em blocos e triturado, estava à temperatura negativa de −15 °C, qual a temperatura do conteúdo dos copinhos após toda a mistura no interior do isopor atingir o equilíbrio térmico e qual o estado físico da água na caixa?',
    statementTail: 'Note e adote:\nAssuma que (i) o isopor é um isolante térmico ideal, (ii) a embalagem dos copinhos é um condutor térmico ideal e (iii) as possíveis variações de volume ou pressão dos processos térmicos envolvidos são desprezíveis.\nA definição do módulo do calor trocado, quando existir transição de fase do material, é igual à quantidade de massa que mudou de fase ($m$) multiplicada pelo calor latente ($L$), ou seja, $Q = m \\cdot L$, e, quando não existir transição de fase, é igual à massa ($m$) multiplicada pelo calor específico ($c$) e a variação de temperatura ($\\Delta T$), ou seja, $Q = m \\cdot c \\cdot \\Delta T$.\nDados: Densidade da água = 1 kg/L; Calor específico da água = 1 cal/g·°C; Calor específico do gelo = 0,5 cal/g·°C; Calor latente de evaporação da água = 540 cal/g; Calor latente de fusão do gelo = 80 cal/g.', tailBlockTypes: ['note-box'],
    alternatives: [
      'É menor que 0 °C. A água dos copinhos congelou, e o gelo não derreteu.',
      'É igual a 0 °C. O gelo derreteu parcialmente, e restou uma mistura de água líquida e gelo na caixa.',
      'É igual a 0 °C. Todo o gelo derreteu, e restou apenas água líquida na caixa.',
      'É maior que 0 °C e menor que 10 °C. Todo o gelo derreteu, e restou apenas água líquida na caixa.',
      'É igual ou maior que 10 °C. Todo o gelo derreteu, e restou apenas água líquida na caixa.',
    ], correct: 2,
    resolution: [
      'Há $15 \\cdot 350 = 5.250\\ \\text{mL}$ de água, correspondentes a 5.250 g. O calor que essa água pode ceder ao resfriar de 25 °C até 0 °C é:$$Q_{\\text{água}} = mc\\Delta T$$$$Q_{\\text{água}} = 5.250 \\cdot 1 \\cdot 25 = 131.250\\ \\text{cal}$$',
      'A massa total de gelo é 1.500 g. Para aquecê-lo de −15 °C até 0 °C:$$Q_1 = 1.500 \\cdot 0{,}5 \\cdot 15 = 11.250\\ \\text{cal}$$Para fundir todo o gelo a 0 °C:$$Q_2 = 1.500 \\cdot 80 = 120.000\\ \\text{cal}$$',
      'A quantidade total necessária é:$$Q_1 + Q_2 = 131.250\\ \\text{cal}$$Esse valor é exatamente igual ao calor cedido pela água até 0 °C. Assim, todo o gelo se funde e o equilíbrio ocorre a 0 °C, restando somente água líquida.',
    ],
    analyses: [
      'Incorreta. A água não congela; ela cede calor ao resfriar até 0 °C, e esse calor é suficiente para fundir o gelo.',
      'Incorreta. O gelo não derrete apenas parcialmente: a energia disponível é exatamente suficiente para fundir toda a massa.',
      'Correta. Os 131.250 cal cedidos pela água aquecem e fundem os 1.500 g de gelo, com equilíbrio final a 0 °C e somente água líquida.',
      'Incorreta. Não há excesso de energia para elevar a temperatura da água resultante acima de 0 °C.',
      'Incorreta. O balanço térmico conduz ao equilíbrio a 0 °C, não a uma temperatura igual ou superior a 10 °C.',
    ],
  },
  {
    ...base, id: 'fuvest2027-v1-q76', number: 'Questão 76', subject: 'Literatura', content: 'Celebração, lúdico e cultura popular', difficulty: 'Média',
    statement: 'Como estou bela, vestida de branco. Como é bonito o meu marido, trajado de preto. Este anel no meu dedo brilha como o sol. Como é emocionante esta melodia com que o povo nos saúda, e que sempre pensei que era apenas dedicada aos anjos. [...] O sol caminhava rápido para o leito animado pelo ritmo dos atabaques. O tantã embriagava ainda mais as gentes já inebriadas pelo álcool, e as mulheres, agrupadas num círculo, moviam-se extasiadas, batendo palmas, aumentando o delírio com vozes roufenhas, descompassadas, e, no centro da roda, outras tantas anestesiavam-se na dança, ausentando-se da vida e do mundo. A alegria já ultrapassava o auge quando minha tia ordenou uma pausa.\n\nPaulina Chiziane. Balada de amor ao vento.\n\nE assim, em um sábado, véspera de Páscoa, no exato momento em que a molecada alma-florense cuidava da malhação de Judas, na cercania bem próxima da estação, a locomotiva chegou. O trem vinha da cidade de Monte Vazio, e lentamente foi parando na estação. Um fino silvado se intrometeu na gritaria dos meninos a espancar o Judas. Três cavalheiros desceram. O do meio, o mais belo, sorriu ao rever uma das brincadeiras de sua infância. “A malhação do Judas”, o acabar com o sujeito traidor de Cristo.\n\nConceição Evaristo. Canção para ninar menino grande.',
    blockTypes: ['quote', 'source', 'quote', 'source'], works: ['Balada de amor ao vento', 'Canção para ninar menino grande'],
    statementAfter: 'Considerando os excertos apresentados, é correto afirmar:', afterBlockTypes: ['command'],
    alternatives: [
      'A dança circular é uma prática específica da cultura moçambicana, enquanto a malhação do Judas é específica da cultura popular brasileira.',
      'A dança e a brincadeira retratadas neutralizam, respectivamente, os valores comunitários e a masculinidade dos praticantes.',
      'Os sentimentos de animação e alegria são motivações que sempre acompanham a ocorrência de danças e brincadeiras.',
      'Em relação aos eventos comemorativos descritos, a dança e a brincadeira são apresentadas de forma descontextualizada.',
      'Nos eventos comemorativos descritos, o componente lúdico desempenha papel fundamental ao favorecer a ocorrência da dança e da brincadeira.',
    ], correct: 4,
    resolution: [
      'Os excertos apresentam práticas inseridas em celebrações coletivas: a dança na festa de casamento e a malhação de Judas na véspera de Páscoa.',
      'Nos dois casos, a dimensão lúdica articula participação, memória e convivência comunitária, favorecendo a realização da dança e da brincadeira.',
      'As cenas são culturalmente contextualizadas e não sustentam generalizações sobre exclusividade geográfica ou alegria permanente.',
    ],
    analyses: [
      'Incorreta. Os textos não estabelecem que essas práticas sejam exclusivas de Moçambique ou do Brasil.',
      'Incorreta. A dança reúne a comunidade, e a brincadeira não é apresentada como neutralização da masculinidade dos participantes.',
      'Incorreta. O termo “sempre” generaliza indevidamente os sentimentos descritos em cenas específicas.',
      'Incorreta. As práticas aparecem vinculadas a eventos comemorativos e a contextos culturais definidos.',
      'Correta. O componente lúdico favorece a participação coletiva na dança e na malhação de Judas.',
    ],
  },
  {
    ...base, id: 'fuvest2027-v1-q77', number: 'Questão 77', subject: 'Biologia', content: 'Sistema nervoso autônomo e resposta ao medo', difficulty: 'Média',
    statement: 'Em torno dele a multidão se debatia na fuga, empurrava-se, era toda um só grito e um só pavor.\n\nUm tremor violento agitava a criança, os bracinhos se sacudiam, tiritando, os olhinhos se envesgavam, cegos, a boca se torcia num esforço mudo e apavorante. Não gritava, não chorava era como se lutasse com uma coisa estranha invisível que a raptava do mundo, lhe apertava na garganta os sons estrangulados, lhe deformara o corpo e o rosto naquelas contorções desesperadas.',
    blockTypes: ['quote', 'quote'],
    statementAfter: 'Os dois trechos apresentados pertencem à obra Caminho de Pedras, de Rachel de Queiroz, e têm em comum a descrição de respostas desencadeadas primariamente pelo sistema', afterBlockTypes: ['command'], works: ['Caminho de Pedras'],
    alternatives: ['nervoso autônomo.', 'cardiovascular.', 'motor.', 'sensorial.', 'respiratório.'], correct: 0,
    resolution: [
      'Os trechos descrevem reações agudas de pavor, fuga, tremor e sensação de sufocamento diante de situações de perigo.',
      'Essas respostas automáticas são coordenadas pelo sistema nervoso autônomo, especialmente pela divisão simpática, que prepara o organismo para reações de luta ou fuga.',
      'Os sistemas cardiovascular, respiratório e motor participam das manifestações, mas como consequência ou execução dos comandos nervosos, não como origem primária comum das reações.',
    ],
    analyses: [
      'Correta. As reações automáticas de pavor e fuga são desencadeadas pelo sistema nervoso autônomo, em especial sua divisão simpática.',
      'Incorreta. O sistema cardiovascular responde aos comandos autônomos, mas não constitui a origem primária da reação.',
      'Incorreta. O sistema motor executa movimentos como fuga e tremores a partir de comandos já disparados.',
      'Incorreta. O sistema sensorial capta estímulos, mas não é o sistema apresentado como desencadeador primário das respostas corporais.',
      'Incorreta. Alterações respiratórias podem acompanhar o pavor, porém são consequência da resposta nervosa autônoma.',
    ],
  },
  {
    ...base, id: 'fuvest2027-v1-q78', number: 'Questão 78', subject: 'Literatura', content: 'Paulina Chiziane, gênero e patriarcado', difficulty: 'Média',
    statement: 'Em Balada de Amor ao Vento, de Paulina Chiziane, as relações afetivas são atravessadas por hierarquias de gênero que naturalizam a desigualdade e a violência contra as mulheres. Ao relacionar essa perspectiva com dados contemporâneos sobre ocorrências de estupro e feminicídio no Brasil, Balada de Amor ao Vento contribui para compreender tais fenômenos como', works: ['Balada de Amor ao Vento'],
    alternatives: [
      'eventos isolados decorrentes de desvios individuais de caráter, sem vínculo com estruturas sociais mais amplas.',
      'consequências diretas do colonialismo europeu, sem relação com dinâmicas culturais internas.',
      'manifestações de sistemas patriarcais que atravessam diferentes contextos históricos e geográficos.',
      'fenômenos recentes, próprios da modernidade urbana latino-americana.',
      'expressões inevitáveis de conflitos amorosos, independentes de fatores históricos ou sociais.',
    ], correct: 2,
    resolution: [
      'A obra relaciona desigualdades afetivas e violência contra as mulheres a hierarquias de gênero socialmente construídas.',
      'Ao aproximar essa representação de dados contemporâneos, o enunciado destaca a continuidade de estruturas patriarcais em diferentes tempos e lugares.',
      'Assim, estupro e feminicídio não são tratados como casos isolados ou inevitáveis, mas como manifestações de relações sociais mais amplas.',
    ],
    analyses: [
      'Incorreta. A perspectiva apresentada vincula a violência a estruturas sociais, não apenas a desvios individuais.',
      'Incorreta. A alternativa reduz os fenômenos a uma causa externa única e exclui as dinâmicas culturais internas.',
      'Correta. A obra permite compreender a violência de gênero como manifestação de sistemas patriarcais presentes em diferentes contextos.',
      'Incorreta. A desigualdade e a violência de gênero não são fenômenos exclusivamente recentes nem próprios da modernidade urbana latino-americana.',
      'Incorreta. Os fenômenos não são inevitáveis nem independentes de fatores históricos e sociais.',
    ],
  },
  {
    ...base, id: 'fuvest2027-v1-q79', number: 'Questão 79', subject: 'Literatura', content: 'Dupla consciência e performance de gênero', difficulty: 'Difícil',
    statement: 'Em Almas do Povo Negro, W. E. B. Du Bois descreve a experiência de uma dupla consciência, em que a pessoa negra aprende a se ver tanto por sua própria perspectiva quanto pelo olhar racializado da sociedade. O negro norte-americano teria sua experiência definida pela hifenização de ser afro-americano. Ele também fala de um “véu” que cobre os negros em sociedade, metáfora que representa os estereótipos que moldam como o negro é percebido e como ele se percebe, impedindo que eles sejam vistos como as pessoas que são.\n\nEm Canção para ninar menino grande, de Conceição Evaristo, a narradora constrói a experiência de Fio Jasmim por meio das múltiplas relações encetadas com mulheres, também negras. Sua caracterização da personagem destaca uma virilidade aventureira, opressora e repressora de seus próprios sentimentos.',
    blockTypes: ['prose', 'prose'], works: ['Almas do Povo Negro', 'Canção para ninar menino grande', 'performance'],
    statementAfter: 'Considerando essas ideias, qual alternativa melhor interpreta a performance da virilidade por Fio Jasmim?', afterBlockTypes: ['command'],
    alternatives: [
      'Em sua relação com as mulheres, Fio Jasmim desempenha um papel forjado por sua experiência individual de modo independente das expectativas raciais e de gênero, ignorando o olhar social.',
      'A forma como Fio Jasmim se apresenta e age é determinada pelo “véu” que lhe impõe estereótipos coloniais, impedindo mudanças.',
      'A consciência racial serve a Fio Jasmim para fornecer um guia de como se comportar e eliminar quaisquer conflitos internos, permitindo que aja sempre com segurança.',
      'A experiência de Fio Jasmim ilustra a dupla consciência porque ele aprende a ajustar sua performance — como homem e negro — ao perceber como é visto através de estereótipos sociais.',
      'O comportamento de Fio Jasmim é definido por um padrão de performance de masculinidade independente de sua racialização e da dupla consciência que pode advir dela.',
    ], correct: 3,
    resolution: [
      'A dupla consciência envolve perceber-se por si mesmo e, ao mesmo tempo, pelo olhar social marcado por estereótipos raciais.',
      'A virilidade de Fio Jasmim é uma performance social: sua maneira de agir e de se apresentar como homem negro é ajustada às expectativas e aos olhares que o cercam.',
      'A alternativa D articula racialização, gênero e autopercepção, sem apagar os conflitos internos da personagem.',
    ],
    analyses: [
      'Incorreta. A performance não é independente das expectativas sociais; ela se constitui também em relação ao olhar racializado e de gênero.',
      'Incorreta. O “véu” condiciona percepções e comportamentos, mas a alternativa transforma essa influência em determinação absoluta e ausência de mudança.',
      'Incorreta. A consciência racial não elimina os conflitos internos nem garante segurança permanente à personagem.',
      'Correta. Fio Jasmim ajusta sua performance de homem negro ao perceber o olhar e os estereótipos sociais, ilustrando a dupla consciência.',
      'Incorreta. A masculinidade representada é inseparável da racialização e da dupla consciência discutidas no enunciado.',
    ],
  },
  {
    ...base, id: 'fuvest2027-v1-q80', number: 'Questão 80', subject: 'Literatura', content: 'Enumeração, trabalho e memória em Djaimilia', difficulty: 'Média',
    statement: 'Obstinado, abriu as arcas da roupa das mulheres. Cavou uma vala e deitou nela os vestidos, as combinações, as toalhas, os lençóis, as colchas, as mantas, os travesseiros, os cueiros, as meias, os aventais, as luvas, os xailes e as toucas. Ateou-lhes fogo. Não houve nisso dramatismo algum. Viu crepitarem nas chamas as rendas de bilros derretidas e as bainhas e galões dos tecidos encardidos. Ardendo, a história dos lavores diluía-se na cacimba. Os bordados acendiam o silvado e soltavam faíscas, num adeus para sempre sem direito a palmas.\n\nDjaimilia Pereira de Almeida. A visão das plantas.',
    blockTypes: ['quote', 'source'], works: ['A visão das plantas'],
    statementAfter: 'No texto, a citação de objetos ligados ao espaço doméstico acompanha o gesto narrado e participa diretamente da construção do sentido da cena, permitindo afirmar que tal enumeração', afterBlockTypes: ['command'],
    alternatives: [
      'cria um efeito de acumulação que, associado à destruição, relaciona a queima dos objetos ao apagamento do trabalho que eles representam.',
      'organiza a descrição do espaço doméstico, contribuindo para a visualização da cena, ao mesmo tempo que dilui o impacto da ação narrada.',
      'estabelece diferenças entre os objetos citados, sugerindo valores simbólicos distintos dentro do conjunto apresentado.',
      'sugere a possibilidade de recompor simbolicamente o que é destruído pela personagem, reduzindo o impacto do gesto narrado.',
      'indica hesitação da personagem, marcada pela repetição de elementos concretos que compõem a ação principal da cena.',
    ], correct: 0,
    resolution: [
      'A longa enumeração de roupas, tecidos e objetos domésticos produz um efeito de acumulação material.',
      'A queima desses itens destrói também a história dos lavores, isto é, o trabalho de costura, bordado, lavagem e cuidado que eles materializam.',
      'A alternativa A relaciona corretamente a forma enumerativa à destruição e ao apagamento desse trabalho e de sua memória.',
    ],
    analyses: [
      'Correta. A acumulação dos objetos e sua destruição associam a queima ao apagamento do trabalho doméstico e dos lavores.',
      'Incorreta. A enumeração intensifica o impacto da destruição, em vez de diluí-lo.',
      'Incorreta. O efeito principal não é diferenciar valores simbólicos de cada item, mas acumulá-los em um conjunto de trabalho e memória.',
      'Incorreta. A cena enfatiza a perda e o “adeus para sempre”, não a recomposição simbólica dos objetos.',
      'Incorreta. A personagem age de forma obstinada; a enumeração não indica hesitação.',
    ],
  },
];
