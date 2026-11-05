const DAY2_URL = 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/santacasa/2027/2dia/santacasa2027_2dia_prova.pdf';

const shared = {
  exam: 'Santa Casa', year: 2027, phase: '2º dia', originalUrl: DAY2_URL,
  officialAnswerUrl: '/sources/santacasa2027-respostas-esperadas.pdf', kind: 'discursive',
  officialNotes: [
    'Resposta correta acrescida de informação errada implicou perda de ponto.',
    'A pontuação deve seguir o atendimento a cada critério; esta é uma autoavaliação, não uma correção automática.',
  ],
};

const rnaTable = {
  ariaLabel: 'RNA mensageiros e enzimas relacionadas à produção hormonal', className: 'sequence-table',
  headerRows: [['RNAm', 'Controle da enzima']],
  rows: [
    ['UUAGGCAAAUUGCAU', 'Produção de insulina'],
    ['UCCUUAUAUAGGGGU', 'Produção de calcitonina'],
    ['UCCUUAUGGCCGUUU', 'Produção de vasopressina'],
  ],
};

const dnaTable = {
  ariaLabel: 'Sequências de bases nitrogenadas no DNA de Felipe, Lorena e Natália', className: 'sequence-table',
  headerRows: [['Pessoa', 'Sequência de bases nitrogenadas no DNA']],
  rows: [
    [{ text: 'Felipe', header: true }, 'AGGAATATATCCCCA'],
    [{ text: 'Lorena', header: true }, 'AATCCGTTTAACGTA'],
    [{ text: 'Natália', header: true }, 'AGGAATACCGACAAA'],
  ],
};

export const santaCasa2027Lote10 = [
  {
    ...shared,
    id: 'santacasa2027-2dia-q07', number: 'Questão 07', subject: 'Biologia', content: 'Herança ligada ao sexo em Drosophila', difficulty: 'Média',
    statement: 'Thomas Morgan queria analisar o comportamento de dois alelos de um gene para cor dos olhos da mosca-das-frutas (Drosophila melanogaster). Morgan e colaboradores cruzaram uma fêmea do tipo selvagem (olhos vermelhos) com um macho mutante de olhos brancos. Todas as moscas de F1 tinham olhos vermelhos. Então, Morgan cruzou uma fêmea F1 de olhos vermelhos com um macho de F1 de olhos vermelhos para produzir a geração F2. Essa geração F2 mostrou uma proporção típica de 3 moscas de olhos vermelhos para 1 mosca de olhos brancos. Todas as moscas de olhos brancos eram machos e nenhuma fêmea apresentou a característica de olhos brancos.\n\nJane B. Reece et al. Biologia de Campbell, 2015. Adaptado.',
    blockTypes: ['prose', 'source'],
    parts: [
      {
        id: 'a', prompt: 'Segundo os experimentos de Morgan, qual fenótipo é dominante para a cor dos olhos das moscas-das-frutas? Qual padrão de herança genética é responsável por determinar a cor dos olhos nas moscas-das-frutas?', maxScore: 2,
        expected: 'O fenótipo dominante é olhos vermelhos. O padrão de herança é herança ligada ao sexo, ou ligada ao X.',
        rejected: 'Não foram aceitas: herança sexual; herança recessiva/dominante.',
        criteria: [
          { points: 1, text: 'Identifica olhos vermelhos como o fenótipo dominante.' },
          { points: 1, text: 'Identifica o padrão como herança ligada ao sexo ou ligada ao X.' },
        ],
      },
      {
        id: 'b', prompt: 'Qual o fenótipo dos descendentes machos resultantes do cruzamento entre uma mosca fêmea de olhos brancos com um macho de olhos vermelhos? Qual é a probabilidade de o cruzamento entre uma fêmea de olhos vermelhos portadora do alelo para olhos brancos e um macho de olhos vermelhos produzir um descendente macho com olhos brancos?', maxScore: 2,
        expected: 'No primeiro cruzamento, 100% dos descendentes machos terão olhos brancos. No segundo cruzamento, a probabilidade de produzir um descendente macho com olhos brancos é $P=\\frac{1}{4}$, ou 25%.',
        criteria: [
          { points: 1, text: 'Indica que 100% dos machos do primeiro cruzamento apresentam olhos brancos.' },
          { points: 1, text: 'Calcula a probabilidade solicitada no segundo cruzamento como $\\frac{1}{4}$, ou 25%.' },
        ],
      },
    ],
    preview: 'Analise os cruzamentos de Morgan e calcule a probabilidade de machos com olhos brancos.',
  },
  {
    ...shared,
    id: 'santacasa2027-2dia-q08', number: 'Questão 08', subject: 'Biologia', content: 'Tradução, mutação e diabetes', difficulty: 'Média',
    statement: 'O quadro mostra os RNA mensageiros (RNAm) que codificam três enzimas diferentes no corpo humano e que controlam a produção dos hormônios insulina, calcitonina e vasopressina.',
    blockTypes: ['prose'], tables: [rnaTable],
    statementAfter: 'Considere as sequências de bases nitrogenadas presentes no DNA de Felipe, Lorena e Natália relacionadas à síntese dessas enzimas:', afterBlockTypes: ['prose'], afterTables: [dnaTable],
    parts: [
      {
        id: 'a', prompt: 'Quantos aminoácidos estão presentes em cada uma dessas enzimas? Em que local da célula os RNAm são traduzidos?', maxScore: 2,
        expected: 'Cada enzima apresenta cinco aminoácidos. Os RNAm são traduzidos nos ribossomos localizados no citosol, também chamado citoplasma ou hialoplasma, da célula.',
        criteria: [
          { points: 1, text: 'Indica cinco aminoácidos em cada enzima.' },
          { points: 1, text: 'Localiza a tradução nos ribossomos do citosol, citoplasma ou hialoplasma.' },
        ],
      },
      {
        id: 'b', prompt: 'Qual das pessoas citadas apresenta um tipo de diabetes causada por mutação no DNA? Cite um sintoma decorrente desse tipo de diabetes.', maxScore: 2,
        expected: 'Natália. Um sintoma é a eliminação de alto volume de urina (poliúria) ou a sede intensa (polidipsia).',
        criteria: [
          { points: 1, text: 'Identifica Natália.' },
          { points: 1, text: 'Cita poliúria ou polidipsia como sintoma desse tipo de diabetes.' },
        ],
      },
    ],
    preview: 'Interprete sequências de RNAm e DNA, tradução e sintomas de diabetes.',
  },
  {
    ...shared,
    id: 'santacasa2027-2dia-q09', number: 'Questão 09', subject: 'Química', content: 'Ácido lático e decaimento do hólmio-166', difficulty: 'Média',
    statement: 'O radioisótopo hólmio-166 (${}_{67}^{166}\\mathrm{Ho}$) é empregado no tratamento do câncer hepático em uma terapia que destrói os tumores por fixação de microesferas radioativas diretamente nos vasos sanguíneos que alimentam o câncer. As microesferas que contém o hólmio-166 são feitas de um polímero biodegradável do ácido lático, cuja estrutura está representada a seguir.',
    blockTypes: ['prose'],
    images: [{ src: '/images/santacasa2027/2dia-q09-acido-latico.svg', alt: 'Fórmula estrutural do ácido lático, com três carbonos, um grupo carboxila e um grupo hidroxila.', className: 'compact-image' }],
    statementAfter: 'O hólmio-166 decai por emissão de radiação gama (${}_{0}^{0}\\gamma$) e de partículas beta (${}_{-1}^{0}\\beta$). O gráfico representa a curva de decaimento radioativo desse radioisótopo.', afterBlockTypes: ['prose'],
    afterImages: [{ src: '/images/santacasa2027/2dia-q09-decaimento.svg', alt: 'Gráfico da atividade do hólmio-166 em megabecquerel pelo tempo em dias. A atividade cai de 1000 MBq no tempo zero a 250 MBq em aproximadamente 56 dias e segue diminuindo até 110 dias.' }],
    parts: [
      {
        id: 'a', prompt: 'Escreva a fórmula molecular do ácido lático. Classifique a cadeia carbônica do ácido lático quanto à sua saturação.', maxScore: 2,
        expected: 'A fórmula molecular é $\\mathrm{C_3H_6O_3}$. A cadeia carbônica do ácido lático é saturada.',
        rejected: 'Não foi aceito: $\\mathrm{CH_2O}$.',
        criteria: [
          { points: 1, text: 'Apresenta a fórmula molecular $\\mathrm{C_3H_6O_3}$.' },
          { points: 1, text: 'Classifica a cadeia carbônica como saturada.' },
        ],
      },
      {
        id: 'b', prompt: 'Usando a notação ${}_{Z}^{A}\\mathrm{X}$, represente o símbolo químico do radioisótopo formado no decaimento radioativo do hólmio-166. Calcule a meia-vida, em dias, do hólmio-166.', maxScore: 2,
        expected: 'No decaimento, ${}_{67}^{166}\\mathrm{Ho}\\rightarrow{}_{-1}^{0}\\beta+{}_{0}^{0}\\gamma+{}_{68}^{166}\\mathrm{Er}$. O radioisótopo formado é ${}_{68}^{166}\\mathrm{Er}$. Pela curva, $1000\\ \\mathrm{MBq}\\rightarrow500\\ \\mathrm{MBq}\\rightarrow250\\ \\mathrm{MBq}$ corresponde a duas meias-vidas em 56 dias; portanto, $t_{1/2}=28$ dias.',
        rejected: 'Não foi aceito: ${}_{166}^{68}\\mathrm{Er}$.',
        criteria: [
          { points: 1, text: 'Representa corretamente o radioisótopo formado como ${}_{68}^{166}\\mathrm{Er}$.' },
          { points: 1, text: 'Interpreta a curva e calcula a meia-vida como 28 dias.' },
        ],
      },
    ],
    preview: 'Determine a fórmula do ácido lático, o produto do decaimento e a meia-vida do hólmio-166.',
  },
  {
    ...shared,
    id: 'santacasa2027-2dia-q10', number: 'Questão 10', subject: 'Química', content: 'Titulação, pH e concentração de ácido sulfúrico', difficulty: 'Média',
    statement: 'A determinação da concentração de soluções ácidas e de soluções alcalinas pode ser feita pela técnica da titulação volumétrica de neutralização. A figura ilustra o aparato experimental usado na titulação de uma amostra de 10 mL de solução de ácido sulfúrico ($\\mathrm{H_2SO_4}$) com uma solução de hidróxido de sódio ($\\mathrm{NaOH}$) de concentração conhecida e um indicador adequado. O resultado da titulação constatou que a amostra continha $1{,}0\\times10^{-2}\\ \\mathrm{mol}$ de íons $\\mathrm{H^+}$.',
    blockTypes: ['prose'],
    images: [{ src: '/images/santacasa2027/2dia-q10-titulacao.svg', alt: 'Aparato de titulação no início e no final: bureta com NaOH sobre frasco com 10 mL de H2SO4. O nível da bureta diminui e o líquido do frasco muda de azul para rosado.', className: 'compact-image' }],
    statementAfter: 'A reação de neutralização ocorrida na titulação é representada pela equação:', afterBlockTypes: ['prose'],
    afterMath: '\\mathrm{H_2SO_4(aq)+2NaOH(aq)}\\longrightarrow\\mathrm{Na_2SO_4(aq)+2H_2O(l)}',
    parts: [
      {
        id: 'a', prompt: 'A qual grupo da Classificação Periódica pertence o cátion da base empregada nessa titulação? Calcule a quantidade, em mol de água, que se formou na reação da titulação.', maxScore: 2,
        expected: 'O cátion é o sódio, pertencente ao grupo dos metais alcalinos, ou Grupo 1. Pela neutralização $\\mathrm{H^+ + OH^- \\rightarrow H_2O}$, a proporção entre $\\mathrm{H^+}$ e água é 1:1; logo, formaram-se $1{,}0\\times10^{-2}\\ \\mathrm{mol}$ de $\\mathrm{H_2O}$.',
        criteria: [
          { points: 1, text: 'Identifica o cátion sódio e o grupo dos metais alcalinos, ou Grupo 1.' },
          { points: 1, text: 'Calcula $1{,}0\\times10^{-2}\\ \\mathrm{mol}$ de água formada.' },
        ],
      },
      {
        id: 'b', prompt: 'Determine o pH da solução de H2SO4 analisada. Calcule a concentração, em mol/L desse ácido na solução, considerando a ionização total.', maxScore: 2,
        expected: 'A concentração de $\\mathrm{H^+}$ é $\\frac{10^{-2}\\ \\mathrm{mol}}{10\\ \\mathrm{mL}}\\cdot\\frac{10^3\\ \\mathrm{mL}}{1\\ \\mathrm{L}}=1\\ \\mathrm{mol/L}$. Assim, $\\mathrm{pH}=-\\log[H^+]=-\\log 1=0$. Na ionização total, 1 mol de $\\mathrm{H_2SO_4}$ libera 2 mol de $\\mathrm{H^+}$; portanto, a concentração do ácido é $0{,}5\\ \\mathrm{mol/L}$.',
        criteria: [
          { points: 1, text: 'Determina $[\\mathrm{H^+}]=1\\ \\mathrm{mol/L}$ e conclui que o pH é 0.' },
          { points: 1, text: 'Considera a ionização total e calcula a concentração de $\\mathrm{H_2SO_4}$ como $0{,}5\\ \\mathrm{mol/L}$.' },
        ],
      },
    ],
    preview: 'Use a titulação para calcular água formada, pH e concentração do ácido.',
  },
  {
    ...shared,
    id: 'santacasa2027-2dia-q11', number: 'Questão 11', subject: 'Química', content: 'Hidrazina, ligações e oxirredução', difficulty: 'Média',
    statement: 'Os reagentes líquidos, hidrazina ($\\mathrm{N_2H_4}$) e peróxido de hidrogênio ($\\mathrm{H_2O_2}$), são empregados na reação que ocorre no sistema propelente de lançamento de foguetes. A reação entre a $\\mathrm{N_2H_4}$ e $\\mathrm{H_2O_2}$ forma como produtos nitrogênio ($\\mathrm{N_2}$) e água ($\\mathrm{H_2O}$), ambos no estado gasoso. A formação desses gases em alta temperatura e pressão faz com que eles sejam expelidos em alta velocidade, impulsionando o foguete.',
    blockTypes: ['prose'],
    images: [{ src: '/images/santacasa2027/2dia-q11-foguete.jpg', alt: 'Foguete durante o lançamento, com chama intensa e grande nuvem de gases junto à plataforma.', caption: 'https://spacenews.com.' }],
    parts: [
      {
        id: 'a', prompt: 'Sabendo que os valores da eletronegatividade de Pauling para o nitrogênio é 3,0 e para o hidrogênio é 2,2, classifique a ligação química entre esses dois átomos. Represente a fórmula de Lewis para a N2H4.', maxScore: 2,
        expected: 'A ligação entre nitrogênio e hidrogênio é covalente polar. Uma representação da fórmula de Lewis da hidrazina, com um par isolado em cada nitrogênio, é:$$\\begin{array}{ccccc} & \\ddot{\\mathrm{N}} & & \\ddot{\\mathrm{N}} & \\\\ \\mathrm{H}- & \\mathrm{N} & - & \\mathrm{N} & -\\mathrm{H} \\\\ & | & & | & \\\\ & \\mathrm{H} & & \\mathrm{H} & \\end{array}$$',
        accepted: 'Foram aceitas: “balões” entre os pares de elétrons compartilhados; ausência dos “balões” também, desde que os elétrons fossem claramente representados, nas quantidades corretas, e o compartilhamento entre os pares eletrônicos fosse indicado, pelo menos, pela proximidade entre eles; diferentes desenhos para representar os elétrons, como bolinha, pontinho ou estrelinha.',
        rejected: 'Não foram aceitas: indicação de mais de um tipo de ligação química; não indicar claramente o compartilhamento entre os pares de elétrons; número incorreto de elétrons; não indicar claramente os pares de elétrons que estavam sendo compartilhados.',
        criteria: [
          { points: 1, text: 'Classifica a ligação N–H como covalente polar, sem indicar outro tipo de ligação.' },
          { points: 1, text: 'Representa a hidrazina com quatro ligações N–H, uma ligação N–N e um par isolado em cada nitrogênio, com o número correto de elétrons.' },
        ],
      },
      {
        id: 'b', prompt: 'Escreva a equação balanceada da reação entre N2H4 e H2O2. Qual é a fórmula da espécie oxidante dessa reação?', maxScore: 2,
        expected: 'A equação balanceada é $1\\mathrm{N_2H_4(l)}+2\\mathrm{H_2O_2(l)}\\rightarrow1\\mathrm{N_2(g)}+4\\mathrm{H_2O(g)}$. A espécie oxidante é o $\\mathrm{H_2O_2}$.',
        accepted: 'Foram aceitos múltiplos dos coeficientes estequiométricos apresentados, desde que mantida a correta proporção entre as substâncias. Para o oxidante, foram aceitas a fórmula estrutural ou de Lewis correta e o nome peróxido de hidrogênio.',
        rejected: 'Não foi aceita fórmula estrutural ou de Lewis incorreta para o oxidante.',
        criteria: [
          { points: 1, text: 'Apresenta a equação balanceada com a proporção 1:2:1:4 e os estados físicos indicados.' },
          { points: 1, text: 'Identifica $\\mathrm{H_2O_2}$ como a espécie oxidante.' },
        ],
      },
    ],
    preview: 'Classifique a ligação N–H, represente a hidrazina e balanceie a reação propelente.',
  },
  {
    ...shared,
    id: 'santacasa2027-2dia-q12', number: 'Questão 12', subject: 'Química', content: 'Funções orgânicas, isomeria e oxidação', difficulty: 'Difícil',
    statement: 'Metabólitos secundários são compostos orgânicos vegetais que podem ser empregados como princípios ativos para medicamentos em fitoterapia. As moléculas de três desses compostos estão representadas a seguir.',
    blockTypes: ['prose'],
    images: [{ src: '/images/santacasa2027/2dia-q12-compostos.svg', alt: 'Três fórmulas estruturais. O composto 1 tem uma amida de cadeia longa; o composto 2 é um éter aromático com uma dupla ligação na cadeia lateral; o composto 3 apresenta grupos amino e hidroxilas.' }],
    parts: [
      {
        id: 'a', prompt: 'A qual função orgânica pertence o grupo funcional nitrogenado do composto 1? Classifique a cadeia lateral mais longa do composto 1 quanto à polaridade.', maxScore: 2,
        expected: 'O grupo funcional nitrogenado pertence à função amida. A cadeia lateral mais longa é apolar, ou não polar.',
        criteria: [
          { points: 1, text: 'Identifica a função amida.' },
          { points: 1, text: 'Classifica a cadeia lateral como apolar ou não polar.' },
        ],
      },
      {
        id: 'b', prompt: 'Classifique o composto 2 em relação à isomeria geométrica que ele apresenta. A oxidação do composto 3 resulta em um composto cuja solução aquosa tem caráter ácido. Represente a fórmula estrutural desse composto.', maxScore: 2,
        expected: 'O composto 2 apresenta configuração trans, ou E. Na oxidação do composto 3, o grupo $\\mathrm{-CH_2OH}$ é convertido em $\\mathrm{-COOH}$. A estrutura do produto é:',
        expectedImages: [{ src: '/images/santacasa2027/2dia-q12-produto-oxidacao.svg', alt: 'Produto da oxidação do composto 3: cadeia com amina secundária, metil, hidroxila terciária e grupo carboxila.' }],
        criteria: [
          { points: 1, text: 'Classifica a isomeria geométrica do composto 2 como trans ou E.' },
          { points: 1, text: 'Representa o produto da oxidação com o grupo carboxila e a demais estrutura do composto 3 preservada.' },
        ],
      },
    ],
    preview: 'Reconheça amida, cadeia apolar, isomeria trans/E e o produto de oxidação.',
  },
];
