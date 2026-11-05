const ORIGINAL_URL = 'https://documento.vunesp.com.br/documento/stream/NzkyMDMxMg%3d%3d';

const shared = {
  exam: 'UNISA', year: 2027, phase: 'Prova I', originalUrl: ORIGINAL_URL,
  kind: 'discursive', correctionOrigin: 'editorial',
  studyNotes: [
    'Proposta de correção elaborada pelo acervo, com respostas diretas e formulações equivalentes; não é um documento oficial da Vunesp.',
    'Rubrica de estudo: cada item vale de 0 a 2 pontos, com 1 ponto para cada resposta exigida. Cada questão soma 4 pontos e as oito questões totalizam 32 pontos de estudo.',
  ],
};

export const unisa2027Lote04 = [
  {
    ...shared,
    id: 'unisa2027-prova1-q01', number: 'Questão 01', subject: 'Química', content: 'Fórmulas de Lewis, polaridade e interações intermoleculares', difficulty: 'Média',
    statement: 'A amônia ($\\mathrm{NH_3}$) apresenta propriedades relacionadas tanto às ligações existentes em suas moléculas quanto às interações estabelecidas entre elas. No estado líquido, moléculas de amônia podem estabelecer ligações de hidrogênio, embora essas interações sejam mais fracas que as observadas na água ($\\mathrm{H_2O}$), que apresenta uma rede tridimensional. As fórmulas de Lewis da amônia e da água estão representadas a seguir.',
    blockTypes: ['prose'],
    images: [{ src: '/images/unisa2027/p1-q01-lewis.svg', alt: 'Fórmulas de Lewis da amônia e da água, com os pares de elétrons ligantes e não ligantes.', className: 'compact-image' }],
    parts: [
      {
        id: 'a', prompt: 'Determine o número de elétrons presentes na camada de valência do átomo de nitrogênio (N). Classifique a molécula de amônia quanto à sua polaridade.', maxScore: 2,
        expected: 'O nitrogênio tem 5 elétrons de valência. A molécula de amônia é $\\boxed{\\text{polar}}$: sua geometria é assimétrica e os momentos dipolares não se anulam.',
        accepted: 'A distribuição eletrônica $2,5$ também permite identificar os 5 elétrons da camada de valência.',
        criteria: [
          { points: 1, text: 'Determina 5 elétrons na camada de valência do nitrogênio.' },
          { points: 1, text: 'Classifica a molécula de amônia como polar.' },
        ],
      },
      {
        id: 'b', prompt: 'Qual é a geometria molecular da amônia? Que tipo de interação intermolecular ocorre entre uma molécula de amônia e uma de água?', maxScore: 2,
        expected: 'A amônia tem geometria piramidal trigonal. Entre $\\mathrm{NH_3}$ e $\\mathrm{H_2O}$ ocorrem ligações de hidrogênio.',
        accepted: 'Também são equivalentes “pirâmide trigonal” e a representação de uma ponte de hidrogênio $\\mathrm{N-H\\cdots O}$ ou $\\mathrm{O-H\\cdots N}$.',
        criteria: [
          { points: 1, text: 'Indica a geometria piramidal trigonal para a amônia.' },
          { points: 1, text: 'Identifica ligação de hidrogênio entre amônia e água.' },
        ],
      },
    ],
    preview: 'Determine a valência do nitrogênio, a polaridade e a geometria da amônia e sua interação com a água.',
  },
  {
    ...shared,
    id: 'unisa2027-prova1-q02', number: 'Questão 02', subject: 'Química', content: 'Balanceamento e estequiometria da combustão do DME', difficulty: 'Média',
    statement: 'O dimetil éter (DME), $\\mathrm{C_2H_6O}$, $M=46\\ \\mathrm{g/mol}$, pode ser utilizado como combustível em motores do ciclo diesel. A combustão completa do DME no ar produz dióxido de carbono, $\\mathrm{CO_2}$, $M=44\\ \\mathrm{g/mol}$, e água, $\\mathrm{H_2O}$, conforme a equação:',
    blockTypes: ['prose'],
    math: '\\mathrm{C_2H_6O}+3X\\ \\longrightarrow\\ 2\\mathrm{CO_2}+y\\mathrm{H_2O}',
    statementAfter: 'Considere que uma amostra de DME sofreu combustão completa, produzindo $132\\ \\mathrm g$ de $\\mathrm{CO_2}$.', afterBlockTypes: ['prose'],
    parts: [
      {
        id: 'a', prompt: 'Qual é a espécie X e qual é o coeficiente estequiométrico y para que a reação esteja balanceada?', maxScore: 2,
        expected: 'A espécie X é o gás oxigênio, $\\boxed{\\mathrm{O_2}}$, e o coeficiente é $\\boxed{y=3}$. A equação balanceada é $\\mathrm{C_2H_6O+3O_2\\rightarrow2CO_2+3H_2O}$.',
        criteria: [
          { points: 1, text: 'Identifica X como $\\mathrm{O_2}$ (gás oxigênio).' },
          { points: 1, text: 'Determina $y=3$ no balanceamento da água.' },
        ],
      },
      {
        id: 'b', prompt: 'Quantos mols de CO2 foram produzidos na combustão completa da amostra de DME? Calcule a massa de DME, em gramas, que sofreu combustão nesse processo.', maxScore: 2,
        expected: 'Foram produzidos $\\boxed{3\\ \\mathrm{mol\\ de\\ CO_2}}$, pois $n=132/44=3$. Pela estequiometria, $1\\ \\mathrm{mol}$ de DME produz $2\\ \\mathrm{mol}$ de $\\mathrm{CO_2}$; logo, reagiram $1{,}5\\ \\mathrm{mol}$ de DME, correspondentes a $\\boxed{69\\ \\mathrm g}$ de DME.',
        accepted: 'Cálculo equivalente: $n(\\mathrm{DME})=3/2=1{,}5\\ \\mathrm{mol}$ e $m=1{,}5\\cdot46=69\\ \\mathrm g$.',
        criteria: [
          { points: 1, text: 'Calcula $n(\\mathrm{CO_2})=132/44=3\\ \\mathrm{mol}$.' },
          { points: 1, text: 'Usa a proporção estequiométrica e obtém $69\\ \\mathrm g$ de DME.' },
        ],
      },
    ],
    preview: 'Balanceie a combustão do dimetil éter e calcule os mols de CO2 e a massa de DME.',
  },
  {
    ...shared,
    id: 'unisa2027-prova1-q03', number: 'Questão 03', subject: 'Química', content: 'Composição nuclear e decaimento do césio-137', difficulty: 'Fácil',
    statement: 'Em 1998, uma fonte de césio-137 ($^{137}\\mathrm{Cs}$), radioisótopo que apresenta meia-vida de aproximadamente 30 anos, foi acidentalmente fundida em um forno de uma indústria de aço inoxidável localizada no município de Los Barrios, na Espanha. O acidente provocou a dispersão de material radioativo e a contaminação de resíduos provenientes do processo industrial.\n\n(www.iaea.org. Adaptado.)',
    blockTypes: ['prose', 'source'],
    parts: [
      {
        id: 'a', prompt: 'Determine o número de prótons e o número de nêutrons presentes no núcleo do césio-137.', maxScore: 2,
        expected: 'O césio tem número atômico $Z=55$; portanto, o núcleo contém $\\boxed{55\\text{ prótons}}$. O número de nêutrons é $N=A-Z=137-55=\\boxed{82\\text{ nêutrons}}$.',
        criteria: [
          { points: 1, text: 'Determina 55 prótons no núcleo do césio-137.' },
          { points: 1, text: 'Calcula $137-55=82$ nêutrons.' },
        ],
      },
      {
        id: 'b', prompt: 'Considere que um resíduo contaminado no acidente apresentava, inicialmente, 80 mg de césio-137. Calcule a massa, em mg, de césio-137 que permanecerá nesse resíduo após 90 anos. Calcule a porcentagem da massa inicial desse radioisótopo que terá sofrido decaimento nesse período.', maxScore: 2,
        expected: 'Como $90/30=3$ meias-vidas, restam $80\\cdot(1/2)^3=\\boxed{10\\ \\mathrm{mg}}$. Decaíram $80-10=70\\ \\mathrm{mg}$, isto é, $\\boxed{87{,}5\\%}$ da massa inicial.',
        accepted: 'A porcentagem restante é $12{,}5\\%$; portanto, a porcentagem decaída também pode ser obtida por $100\\%-12{,}5\\%=87{,}5\\%$.',
        criteria: [
          { points: 1, text: 'Reconhece três meias-vidas e calcula 10 mg de césio-137 restantes.' },
          { points: 1, text: 'Calcula 70 mg decaídos e obtém 87,5% da massa inicial.' },
        ],
      },
    ],
    preview: 'Determine prótons e nêutrons do césio-137 e calcule massa restante e porcentagem de decaimento.',
  },
  {
    ...shared,
    id: 'unisa2027-prova1-q04', number: 'Questão 04', subject: 'Química', content: 'Função orgânica e isomeria geométrica do cinamaldeído', difficulty: 'Média',
    statement: 'O cinamaldeído, um dos principais componentes do óleo essencial da canela, é empregado na produção de aromas e fragrâncias. Por meio de uma reação de redução, o cinamaldeído pode ser convertido em uma outra substância, também utilizada na indústria de fragrâncias, e identificada como substância X. As fórmulas estruturais dessas substâncias estão representadas a seguir.',
    blockTypes: ['prose'],
    images: [{ src: '/images/unisa2027/p1-q04-cinamaldeido-x.svg', alt: 'Fórmulas estruturais do cinamaldeído e da substância X, que apresenta uma hidroxila terminal.' }],
    parts: [
      {
        id: 'a', prompt: 'Qual é a fórmula molecular da substância X? Qual o nome da função orgânica oxigenada dessa substância?', maxScore: 2,
        expected: 'A substância X tem fórmula molecular $\\boxed{\\mathrm{C_9H_{10}O}}$ e pertence à função orgânica $\\boxed{\\text{álcool}}$, pois apresenta o grupo hidroxila $\\mathrm{-OH}$ ligado a carbono saturado.',
        accepted: 'A substância X é o álcool cinâmico; a contagem pode ser conferida pela estrutura $\\mathrm{C_6H_5-CH=CH-CH_2OH}$.',
        criteria: [
          { points: 1, text: 'Determina a fórmula molecular $\\mathrm{C_9H_{10}O}$.' },
          { points: 1, text: 'Identifica a função orgânica álcool.' },
        ],
      },
      {
        id: 'b', prompt: 'Qual o nome da isomeria espacial que está associada à ligação dupla carbono-carbono presente no cinamaldeído? Represente a fórmula estrutural do outro isômero espacial possível para essa substância.', maxScore: 2,
        expected: 'A dupla carbono-carbono apresenta isomeria cis-trans (geométrica ou E/Z). O cinamaldeído representado é o isômero trans (E); o outro é o cis-cinamaldeído (Z), com o grupo fenila e o grupo aldeído do mesmo lado da dupla.',
        expectedImages: [{ src: '/images/unisa2027/p1-q04-cis-cinamaldeido-resposta.svg', alt: 'Fórmula estrutural do cis-cinamaldeído, com fenila e grupo aldeído do mesmo lado da dupla carbono-carbono.', caption: 'Proposta de representação do outro isômero: cis-cinamaldeído (Z).' }],
        accepted: 'São nomes equivalentes para o tipo de isomeria: geométrica, cis-trans ou E/Z. A representação estrutural equivalente deve preservar a configuração cis (Z).',
        criteria: [
          { points: 1, text: 'Nomeia a isomeria geométrica (cis-trans ou E/Z).' },
          { points: 1, text: 'Representa o isômero cis (Z), com fenila e grupo aldeído do mesmo lado da dupla.' },
        ],
      },
    ],
    preview: 'Determine a fórmula e a função da substância X e represente o outro isômero geométrico do cinamaldeído.',
  },
  {
    ...shared,
    id: 'unisa2027-prova1-q05', number: 'Questão 05', subject: 'Biologia', content: 'Produtividade primária, biomassa e comunidade clímax', difficulty: 'Média',
    statement: 'Analise a figura, que mostra como a temperatura (termômetro), a luminosidade (Sol), a disponibilidade de água (nuvens) e a distribuição da biomassa (organismos) variam em diferentes intervalos de latitudes, identificados por 1, 2 e 3.',
    blockTypes: ['prose'],
    images: [{ src: '/images/unisa2027/p1-q05-latitudes-ppl.svg', alt: 'Mapa dividido em três intervalos de latitude, com temperatura, luminosidade, chuva e biomassa crescentes do intervalo 1 ao 3.', caption: '(https://ncstate.pressbooks.pub. Adaptado.)' }],
    parts: [
      {
        id: 'a', prompt: 'Na figura, qual número corresponde ao intervalo de latitude em que a produtividade primária líquida (PPL) é relativamente maior? Em qual nível trófico de uma cadeia alimentar a PPL é quantificada?', maxScore: 2,
        expected: 'A PPL é relativamente maior no intervalo $\\boxed{3}$. Ela é quantificada no primeiro nível trófico, formado pelos produtores.',
        accepted: 'A resposta pode associar o intervalo 3 às maiores disponibilidades de luz, água e calor e à maior biomassa de produtores.',
        criteria: [
          { points: 1, text: 'Identifica o intervalo 3 como o de maior PPL.' },
          { points: 1, text: 'Indica o primeiro nível trófico, dos produtores.' },
        ],
      },
      {
        id: 'b', prompt: 'Em ambientes marinhos, a biomassa do fitoplâncton é maior, menor ou igual à do zooplâncton? Em uma comunidade clímax, qual a razão entre respiração e fotossíntese?', maxScore: 2,
        expected: 'Nos ambientes marinhos considerados, a biomassa do fitoplâncton é $\\boxed{\\text{menor}}$ que a do zooplâncton, embora sua renovação e produtividade sejam elevadas. Na comunidade clímax, respiração e fotossíntese se equivalem: $\\boxed{R/F=1}$.',
        accepted: 'Também são equivalentes $R=F$, razão $1:1$ ou $100\\%$ para a relação entre respiração e fotossíntese.',
        criteria: [
          { points: 1, text: 'Indica que a biomassa do fitoplâncton é menor que a do zooplâncton.' },
          { points: 1, text: 'Estabelece $R/F=1$ na comunidade clímax.' },
        ],
      },
    ],
    preview: 'Interprete a PPL por latitude e relacione biomassa planctônica, respiração e fotossíntese.',
  },
  {
    ...shared,
    id: 'unisa2027-prova1-q06', number: 'Questão 06', subject: 'Biologia', content: 'Glicólise e fermentações lática e alcoólica', difficulty: 'Média',
    statement: 'O esquema ilustra o processo de glicólise e as duas subsequentes vias biossintéticas, demonstrando como diferentes microrganismos, os Lactobacillus e as Saccharomyces, geram subprodutos essenciais para a produção de alguns alimentos e de algumas bebidas.',
    blockTypes: ['prose'],
    images: [{ src: '/images/unisa2027/p1-q06-fermentacoes.svg?v=20261104-revisao', alt: 'Esquema da glicólise formando dois piruvatos, seguida pela fermentação lática em Lactobacillus e pela fermentação alcoólica em Saccharomyces.', caption: '(https://bio.libretexts.org. Adaptado.)' }],
    parts: [
      {
        id: 'a', prompt: 'Como é denominada a via biossintética de formação dos piruvatos? Em que local da célula ocorre essa via biossintética?', maxScore: 2,
        expected: 'A via de formação dos piruvatos é a $\\boxed{\\text{glicólise}}$, que ocorre no $\\boxed{\\text{citosol}}$ da célula.',
        accepted: 'Citoplasma ou hialoplasma são formulações usualmente equivalentes para o local da glicólise.',
        criteria: [
          { points: 1, text: 'Denomina a via como glicólise.' },
          { points: 1, text: 'Indica o citosol como local de ocorrência.' },
        ],
      },
      {
        id: 'b', prompt: 'Em qual via biossintética representada no esquema ocorre o processo de descarboxilação? Por que as leveduras do gênero Saccharomyces são classificadas como microrganismos anaeróbios facultativos?', maxScore: 2,
        expected: 'A descarboxilação ocorre na fermentação alcoólica realizada por Saccharomyces, quando o piruvato perde $\\mathrm{CO_2}$. Essas leveduras são anaeróbias facultativas porque sobrevivem com ou sem oxigênio: respiram aerobicamente na presença de $\\mathrm{O_2}$ e fermentam em sua ausência.',
        accepted: 'Fermentação etílica é equivalente a fermentação alcoólica. A conversão do piruvato em acetaldeído com liberação de $\\mathrm{CO_2}$ identifica a descarboxilação.',
        criteria: [
          { points: 1, text: 'Identifica a fermentação alcoólica como a via com descarboxilação.' },
          { points: 1, text: 'Explica a obtenção de energia por respiração com O2 ou fermentação sem O2.' },
        ],
      },
    ],
    preview: 'Identifique a glicólise, seu local celular, a descarboxilação e o metabolismo das leveduras.',
  },
  {
    ...shared,
    id: 'unisa2027-prova1-q07', number: 'Questão 07', subject: 'Biologia', content: 'Sistema reprodutor masculino, vasectomia e próstata', difficulty: 'Média',
    statement: 'Analise as estruturas que compõem o sistema reprodutor masculino.',
    blockTypes: ['prose'],
    images: [{ src: '/images/unisa2027/p1-q07-sistema-reprodutor.svg?v=20261104-revisao', alt: 'Sistema reprodutor masculino com bexiga, ducto ejaculatório, testículo e pênis identificados e estruturas numeradas de 1 a 4; o número 3 indica o ducto deferente.', caption: '(https://lomalindafertility.com. Adaptado.)' }],
    parts: [
      {
        id: 'a', prompt: 'Qual número na figura corresponde à estrutura modificada na cirurgia de vasectomia? Por que a vasectomia torna o homem estéril?', maxScore: 2,
        expected: 'A estrutura é a de número $\\boxed{3}$, o ducto deferente. A vasectomia corta ou liga esse ducto e impede o transporte dos espermatozoides até o ejaculado; assim, eles não chegam ao sistema reprodutor feminino para fecundar o ovócito.',
        accepted: 'Vaso deferente é equivalente a ducto deferente. A produção de espermatozoides e a maior parte do volume do sêmen podem continuar, mas o ejaculado fica sem espermatozoides.',
        criteria: [
          { points: 1, text: 'Identifica o número 3 como o ducto deferente.' },
          { points: 1, text: 'Explica que a interrupção do ducto impede a presença dos espermatozoides no ejaculado e a fecundação.' },
        ],
      },
      {
        id: 'b', prompt: 'Como o aumento da próstata compromete a micção? Por que as substâncias alcalinas presentes no líquido seminal são importantes para a sobrevivência dos espermatozoides quando há contato com o fluido do canal vaginal?', maxScore: 2,
        expected: 'O aumento da próstata pode comprimir a uretra, estreitando seu lúmen e dificultando a saída da urina. As substâncias alcalinas do sêmen neutralizam a acidez do fluido vaginal, favorecendo um pH compatível com a sobrevivência dos espermatozoides.',
        accepted: 'Também é equivalente mencionar aumento da resistência ao fluxo urinário, jato fraco ou dificuldade de esvaziamento da bexiga como consequência da compressão uretral.',
        criteria: [
          { points: 1, text: 'Relaciona o aumento da próstata à compressão da uretra e à dificuldade de micção.' },
          { points: 1, text: 'Explica a neutralização da acidez vaginal e a proteção dos espermatozoides.' },
        ],
      },
    ],
    preview: 'Identifique o ducto alterado na vasectomia e explique próstata, micção e alcalinidade seminal.',
  },
  {
    ...shared,
    id: 'unisa2027-prova1-q08', number: 'Questão 08', subject: 'Biologia', content: 'Evolução, resistência bacteriana e expressão gênica', difficulty: 'Média',
    statement: 'As bactérias do gênero Salmonella estão se adaptando às mudanças climáticas — e isso está tornando essas bactérias geneticamente mais resistentes aos antibióticos. Eis a descoberta feita por pesquisadores chineses que analisaram o genoma de mais de 480 mil amostras coletadas entre 1940 e 2023. Os cientistas observaram que, no período, houve um aumento de 38% na expressão de genes associados à resistência antimicrobiana.\n\n(https://saude.abril.com.br, 06.08.2026. Adaptado.)',
    blockTypes: ['prose', 'source'],
    parts: [
      {
        id: 'a', prompt: 'A qual ideia evolucionista o primeiro período do excerto está relacionado? Cite um fenômeno genético que causa resistência em bactérias.', maxScore: 2,
        expected: 'O primeiro período relaciona-se à seleção natural de variantes adaptadas e mais resistentes. Um fenômeno genético que pode gerar resistência é a mutação gênica.',
        accepted: 'Também é válido citar transferência horizontal de genes de resistência, por conjugação, transformação ou transdução, incluindo a aquisição de plasmídeos com genes de resistência.',
        criteria: [
          { points: 1, text: 'Relaciona a adaptação à seleção natural de variantes resistentes.' },
          { points: 1, text: 'Cita mutação ou um mecanismo válido de transferência horizontal de genes de resistência.' },
        ],
      },
      {
        id: 'b', prompt: 'O que são os plasmídeos encontrados nas bactérias? Em que consiste o processo de expressão gênica?', maxScore: 2,
        expected: 'Plasmídeos são moléculas de DNA extracromossômico, geralmente circulares e de fita dupla, capazes de replicação autônoma. Expressão gênica é o uso da informação de um gene para formar um produto funcional: ocorre a $\\boxed{\\text{transcrição}}$ do DNA em RNA e, nos genes que codificam proteínas, a $\\boxed{\\text{tradução}}$ do RNAm em proteína.',
        accepted: 'Os plasmídeos podem transportar genes de resistência a antibióticos. A expressão gênica pode ser resumida, para genes codificadores de proteínas, pela sequência DNA $\\rightarrow$ RNAm $\\rightarrow$ proteína.',
        criteria: [
          { points: 1, text: 'Define plasmídeos como DNA extracromossômico bacteriano, usualmente circular e de replicação autônoma.' },
          { points: 1, text: 'Explica a expressão gênica por transcrição e tradução, distinguindo o RNAm e a proteína.' },
        ],
      },
    ],
    preview: 'Relacione seleção natural e resistência bacteriana e defina plasmídeos e expressão gênica.',
  },
];
