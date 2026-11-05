const PROCESS_URL = 'https://tmpfiles.org/w4Afonsgx26G/provadiscursiva.pdf';
const ANSWER_URL = 'https://tmpfiles.org/wiAVoBs8NRv8/criteriosdecorrecaodaprovadiscursiva.pdf';
const shared = {
  exam: 'USCS', year: 2026, phase: 'Prova I', originalUrl: PROCESS_URL,
  kind: 'discursive', correctionOrigin: 'official', officialAnswerUrl: ANSWER_URL,
  officialNotes: [
    'Para cada questão, foi atribuída pontuação de 0 a 4, conforme o atendimento integral aos critérios oficiais.',
    'Resposta correta acrescida de informação errada implicou na perda do ponto.',
    'Não foram aceitos resultados sem a apresentação dos cálculos.',
    'Não foram aceitos resultados com erro de cálculo ou sem a unidade de medida correta, quando couber.',
  ],
};
const tex = String.raw;
const img = (file, alt, caption) => ({
  src: `/images/uscs2026/${file}?v=${file === 'p1-q08-polinizacao.svg' ? '20261104-esquemas-vetoriais2-legibilidade' : '20261104-pdf-vector1'}`, alt,
  ...(caption ? { caption } : {}),
});

export const uscs2026Lote05 = [
  {
    ...shared,
    id: 'uscs2026-prova1-q01', number: 'Questão 01', subject: 'Química', content: 'Magnesita: caráter do óxido, pureza e neutralização', difficulty: 'Média',
    statement: tex`O magnésio é o oitavo elemento mais abundante na crosta terrestre, sendo encontrado em minerais como a magnesita ($\mathrm{MgCO_3}$). A calcinação da magnesita produz óxido de magnésio (MgO), matéria-prima para a produção de materiais refratários e produtos farmacêuticos destinados ao combate à azia. A azia é um mal-estar associado ao excesso de acidez gástrica causada principalmente pela presença de ácido clorídrico (HCl) no estômago. A calcinação da magnesita é representada pela equação balanceada:`, blockTypes: ['prose'],
    math: tex`\mathrm{MgCO_3(s)\longrightarrow MgO(s)+CO_2(g)}`,
    statementAfter: tex`Em uma indústria de produção de óxido de magnésio ($M=40\ \mathrm{g/mol}$), a calcinação de 500 kg de magnesita ($M=84\ \mathrm{g/mol}$) impura produziu 220 kg de óxido de magnésio.`, afterBlockTypes: ['prose'],
    parts: [
      {
        id: 'a', prompt: 'Classifique o óxido de magnésio em relação ao seu caráter ácido-base. Escreva a fórmula da substância formada quando o óxido de magnésio é dissolvido em água (H₂O).', maxScore: 2,
        expected: tex`O óxido de magnésio é um $\boxed{\text{óxido básico}}$. Em contato com a água, forma o hidróxido de magnésio: $\mathrm{MgO+H_2O\rightarrow Mg(OH)_2}$; portanto, a fórmula é $\boxed{\mathrm{Mg(OH)_2}}$.`,
        criteria: [
          { points: 1, text: 'Classifica o óxido de magnésio como óxido básico.' },
          { points: 1, text: 'Indica Mg(OH)₂ como a base formada pela reação do MgO com água.' },
        ],
      },
      {
        id: 'b', prompt: 'Calcule, em kg, a massa de impurezas presentes na amostra de magnesita calcinada pela indústria. Equacione a reação de neutralização que ocorre quando o óxido de magnésio reage com o ácido clorídrico.', maxScore: 2,
        expected: tex`Pela estequiometria da calcinação, $84$ kg de $\mathrm{MgCO_3}$ produzem $40$ kg de MgO. Assim, a massa de magnesita que reagiu foi $m=220\cdot\frac{84}{40}=462$ kg. Logo, as impurezas somam $500-462=\boxed{38\ \mathrm{kg}}$. A neutralização é $\boxed{\mathrm{MgO+2HCl\rightarrow MgCl_2+H_2O}}$.`,
        criteria: [
          { points: 1, text: 'Calcula 462 kg de magnesita e obtém 38 kg de impurezas, com a resolução.' },
          { points: 1, text: 'Equaciona MgO + 2 HCl → MgCl₂ + H₂O.' },
        ],
      },
    ],
    preview: 'Calcule as impurezas da magnesita e equacione reações do óxido de magnésio.',
  },
  {
    ...shared,
    id: 'uscs2026-prova1-q02', number: 'Questão 02', subject: 'Química', content: 'Meniscos, polaridade e geometria da água', difficulty: 'Média',
    statement: tex`Quando tubos cilíndricos são imersos em um líquido, a superfície do líquido no interior do tubo se curva, formando o chamado menisco. O formato desse menisco depende do equilíbrio entre duas forças: a adesão, que é a atração entre o líquido e o material do tubo, e a coesão, que é a atração entre as próprias moléculas do líquido. A figura ilustra três tubos, constituídos por materiais com diferentes polaridades, imersos em água ($\mathrm{H_2O}$), e mostra as diferenças no formato do menisco em cada situação: se a afinidade entre o líquido e o tubo for alta, a adesão é maior do que a coesão, fazendo com que o líquido “suba” pelas paredes do tubo e forme um menisco côncavo mais acentuado (situação 1). Se a afinidade entre o líquido e o tubo for baixa, a coesão predomina e a superfície do líquido tende a ficar mais plana (situação 2) ou até ligeiramente convexa (situação 3), quando a diferença de afinidade é muito acentuada. O quadro a seguir apresenta as estruturas simplificadas de três possíveis materiais que constituem os tubos.`, blockTypes: ['prose'],
    images: [img('p1-q02-meniscos.svg', 'Três tubos em água: situação 1 com menisco côncavo, situação 2 quase plana e situação 3 convexa. Materiais: Teflon (–CF₂–CF₂–)n, vidro ≡Si–OH e poliéster (–R–COO–R–)n.')],
    parts: [
      {
        id: 'a', prompt: 'Qual a principal interação intermolecular responsável pela coesão entre as moléculas de água? Represente a geometria molecular da molécula de água.', maxScore: 2,
        expected: tex`A coesão entre moléculas de água decorre principalmente de $\boxed{\text{ligações de hidrogênio}}$ (ou pontes de hidrogênio). A molécula apresenta $\boxed{\text{geometria angular}}$, com o oxigênio no vértice e dois hidrogênios ligados a ele.`,
        expectedImages: [img('p1-q02-geometria-agua-resposta.svg', 'Representação oficial da geometria angular da água: O no vértice superior e dois átomos H nas extremidades inferiores.')],
        rejected: 'Não foi aceita resposta sem a representação da geometria, mesmo que escrito “geometria angular”.',
        criteria: [
          { points: 1, text: 'Identifica ligação ou ponte de hidrogênio como a interação coesiva da água.' },
          { points: 1, text: 'Representa explicitamente a geometria angular da molécula de água.' },
        ],
      },
      {
        id: 'b', prompt: 'Considerando as estruturas simplificadas dos materiais apresentados no quadro, qual das situações (1, 2 ou 3) corresponde ao tubo de vidro? Utilizando a figura existente no campo de Resolução e Resposta, represente o menisco esperado quando um tubo feito de vidro é imerso em um recipiente contendo hexano (C₆H₁₄).', maxScore: 2,
        expected: tex`O vidro corresponde à $\boxed{\text{situação 1}}$, que apresenta menisco côncavo em água. Em hexano, a baixa afinidade entre o líquido apolar e o vidro produz um $\boxed{\text{menisco convexo}}$, com a superfície abaulada para cima no interior do tubo.`,
        expectedImages: [img('p1-q02-menisco-hexano-resposta.svg', 'Representação oficial de tubo de vidro imerso em hexano, com menisco convexo, abaulado para cima.')],
        rejected: 'Não foi aceita resposta em que o desenho não estivesse claro.',
        criteria: [
          { points: 1, text: 'Identifica o tubo de vidro como o de número 1, com menisco côncavo em água.' },
          { points: 1, text: 'Representa claramente o menisco convexo do hexano no tubo de vidro.' },
        ],
      },
    ],
    preview: 'Relacione adesão e coesão aos meniscos e represente a geometria da água.',
  },
  {
    ...shared,
    id: 'uscs2026-prova1-q03', number: 'Questão 03', subject: 'Química', content: 'Eletrólise da água e diluição de ácido sulfúrico', difficulty: 'Média',
    statement: tex`A figura representa o sistema utilizado em um experimento de produção dos gases oxigênio e hidrogênio por meio da eletrólise de uma solução aquosa de ácido sulfúrico ($\mathrm{H_2SO_4}$).`, blockTypes: ['prose'],
    images: [img('p1-q03-eletrolise.svg', 'Eletrólise de solução de ácido sulfúrico 0,5 mol/L com eletrodos de aço: o ânodo produz O₂ no tubo esquerdo e o cátodo produz H₂ no tubo direito, com volume de hidrogênio maior. Fonte de corrente contínua e sentido dos elétrons indicados.', '(Marlon M. S. Silveira et al. Quim. Nova, 2021. Adaptado.)')],
    statementAfter: tex`As semirreações envolvidas no processo são:

Cátodo: $\mathrm{2H^+(aq)+2e^-\longrightarrow H_2(g)}$

Ânodo: $\mathrm{2H_2O(\ell)\longrightarrow O_2(g)+4H^+(aq)+4e^-}$

Para preparar a solução de ácido sulfúrico 0,5 mol/L utilizada no experimento, uma alíquota de 10 mL de $\mathrm{H_2SO_4}$ de concentração 18 mol/L foi diluída em água suficiente para o preparo da solução.`, afterBlockTypes: ['prose', 'list', 'list', 'prose'],
    parts: [
      {
        id: 'a', prompt: 'Qual a quantidade, em mol, de elétrons consumida na formação de 4 g de H₂(g) (M = 2 g/mol) no cátodo? Explique por que o volume de gás coletado no cátodo é maior que o volume de gás coletado no ânodo.', maxScore: 2,
        expected: tex`A formação de 4 g de $\mathrm{H_2}$ corresponde a $4/2=2$ mol de gás. Pela semirreação, cada mol de $\mathrm{H_2}$ consome 2 mol de elétrons; logo, são consumidos $\boxed{4\ \mathrm{mol}\text{ de elétrons}}$. O volume no cátodo é maior porque a eletrólise produz $\mathrm{H_2}$ e $\mathrm{O_2}$ na proporção de $\boxed{2:1}$.`,
        criteria: [
          { points: 1, text: 'Calcula 4 mol de elétrons consumidos na formação de 4 g de H₂.' },
          { points: 1, text: 'Explica o maior volume de H₂ pela proporção H₂:O₂ de 2:1.' },
        ],
      },
      {
        id: 'b', prompt: 'Calcule, em mol, a quantidade de matéria de H₂SO₄ presente na alíquota da solução 18 mol/L utilizada na preparação da solução diluída. Considerando a diluição realizada no experimento, determine, em mL, o volume da solução preparada a partir da diluição do ácido sulfúrico concentrado.', maxScore: 2,
        expected: tex`Na alíquota: $n=C\cdot V=18\cdot0{,}010=\boxed{0{,}18\ \mathrm{mol}}$. Na diluição, a quantidade de matéria permanece constante: $V_f=n/C_f=0{,}18/0{,}5=0{,}36\ \mathrm L=\boxed{360\ \mathrm{mL}}$.`,
        criteria: [
          { points: 1, text: 'Calcula 0,18 mol de H₂SO₄ na alíquota de 10 mL.' },
          { points: 1, text: 'Determina 360 mL para o volume final da solução 0,5 mol/L.' },
        ],
      },
    ],
    preview: 'Calcule elétrons na eletrólise e o volume final após a diluição.',
  },
  {
    ...shared,
    id: 'uscs2026-prova1-q04', number: 'Questão 04', subject: 'Química', content: 'Microalgas: funções orgânicas e esterificação', difficulty: 'Média',
    statement: 'Microalgas são microrganismos com alto potencial biotecnológico, sendo matéria-prima para a produção de compostos químicos economicamente importantes — como biocombustíveis (produzidos pela transesterificação de lipídeos que apresentam ácidos graxos poli-insaturados) e produtos de interesse para as indústrias alimentícia (antioxidantes solúveis em água) e farmacêutica (antioxidantes lipossolúveis para cosméticos lipídicos). O quadro apresenta algumas espécies de microalgas e os compostos de interesse produzidos por elas.', blockTypes: ['prose'],
    images: [img('p1-q04-microalgas.svg', 'Quadro com P. moriformis e ácido ascórbico; D. salina e betacaroteno; E. gracilis e alfa-tocoferol; S. platensis e ácido linolênico, com suas fórmulas estruturais.')],
    parts: [
      {
        id: 'a', prompt: 'Considerando os compostos de interesse presentes no quadro, dê o nome daquele que apresenta em sua estrutura a função fenol. Nomeie o composto de interesse que apresenta ligações duplas conjugadas na configuração trans.', maxScore: 2,
        expected: tex`A função fenol está presente no $\boxed{\alpha\text{-tocoferol}}$. As ligações duplas conjugadas na configuração trans estão no $\boxed{\beta\text{-caroteno}}$.`,
        criteria: [
          { points: 1, text: 'Identifica o α-tocoferol como o composto com função fenol.' },
          { points: 1, text: 'Identifica o β-caroteno como o composto com duplas conjugadas trans.' },
        ],
      },
      {
        id: 'b', prompt: 'Considerando os compostos de interesse presentes no quadro, escreva a fórmula molecular do composto de interesse que é utilizado como antioxidante solúvel em água. Substituindo a cadeia carbônica por R, escreva a equação que representa a esterificação do ácido graxo presente no quadro que, ao reagir com metanol (CH₃OH), produz um éster (biodiesel), além de uma molécula de água.', maxScore: 2,
        expected: tex`O antioxidante solúvel em água é o ácido ascórbico, de fórmula molecular $\boxed{\mathrm{C_6H_8O_6}}$. Generalizando a cadeia do ácido graxo por R, a esterificação é $\boxed{\mathrm{R-COOH+CH_3OH\rightarrow R-COOCH_3+H_2O}}$.`,
        criteria: [
          { points: 1, text: 'Fornece C₆H₈O₆ como fórmula molecular do ácido ascórbico.' },
          { points: 1, text: 'Equaciona R–COOH + CH₃OH → R–COOCH₃ + H₂O.' },
        ],
      },
    ],
    preview: 'Reconheça fenol, duplas trans e escreva a esterificação do ácido graxo.',
  },
  {
    ...shared,
    id: 'uscs2026-prova1-q05', number: 'Questão 05', subject: 'Biologia', content: 'Febre amarela: vetor, agente e vacinação', difficulty: 'Fácil',
    statement: `O médico do exército dos Estados Unidos, Walter Reed, comandou o estudo para esclarecer a origem da febre amarela em 1900. Na ilha de Cuba, Reed reuniu seis voluntários, entre membros do exército e imigrantes espanhóis, para se submeterem à picada de mosquitos suspeitos de transmitirem a doença, que matava um terço dos acometidos: voluntários corajosos! O estudo comprovou a transmissão da febre amarela por esses mosquitos.

(Stefan Cunha Ujvari. Pandemias: a humanidade em risco, 2011. Adaptado.)`, blockTypes: ['quote', 'source'], works: ['Pandemias: a humanidade em risco'],
    parts: [
      {
        id: 'a', prompt: 'Qual a espécie de mosquito que transmite a febre amarela no ambiente urbano? Qual o agente etiológico dessa doença?', maxScore: 2,
        expected: tex`No ambiente urbano, o vetor é o $\boxed{\textit{Aedes aegypti}}$. O agente etiológico é um $\boxed{\text{vírus}}$, o vírus da febre amarela.`,
        accepted: 'Para o agente etiológico, foram aceitas: Flavivírus; do grupo arbovírus.',
        criteria: [
          { points: 1, text: 'Identifica Aedes aegypti como o mosquito transmissor urbano.' },
          { points: 1, text: 'Identifica vírus como agente etiológico da febre amarela.' },
        ],
      },
      {
        id: 'b', prompt: 'Qual a medida profilática fornecida pelo Sistema Único de Saúde (SUS) contra a febre amarela? Como essa medida profilática age no corpo humano?', maxScore: 2,
        expected: 'A medida é a vacina contra a febre amarela. Ela contém antígenos atenuados, que estimulam o organismo a produzir anticorpos específicos contra o vírus da doença.',
        criteria: [
          { points: 1, text: 'Indica a vacina como medida profilática fornecida pelo SUS.' },
          { points: 1, text: 'Explica que antígenos atenuados estimulam a produção de anticorpos específicos.' },
        ],
      },
    ],
    preview: 'Identifique o vetor urbano e explique a ação da vacina contra a febre amarela.',
  },
  {
    ...shared,
    id: 'uscs2026-prova1-q06', number: 'Questão 06', subject: 'Biologia', content: 'Ácidos nucleicos: DNA, RNA e composição de bases', difficulty: 'Média',
    statement: 'Três moléculas de ácidos nucleicos foram analisadas em relação às suas estruturas moleculares e em relação às porcentagens de bases nitrogenadas que as compõem. Os dados foram sistematizados na tabela:', blockTypes: ['prose'],
    tables: [{
      ariaLabel: 'Estrutura molecular e porcentagens de bases nitrogenadas de três ácidos nucleicos',
      headerRows: [
        [{ text: 'Ácidos nucleicos', rowSpan: 2 }, { text: 'Estrutura molecular', rowSpan: 2 }, { text: 'Bases nitrogenadas (%)', colSpan: 5 }],
        ['Citosina', 'Uracila', 'Timina', 'Guanina', 'Adenina'],
      ],
      rows: [
        [{ text: '1', header: true }, 'Fita simples', '34', 'Ausente', '21', '26', '?'],
        [{ text: '2', header: true }, 'Dupla hélice', '13', 'Ausente', '37', '13', '?'],
        [{ text: '3', header: true }, 'Fita simples', '15', '28', 'Ausente', '33', '?'],
      ],
    }],
    parts: [
      {
        id: 'a', prompt: 'Na tabela, que ácido nucleico está representado pelo número 2? Qual tipo de atração química ocorre entre as bases nitrogenadas desse ácido nucleico?', maxScore: 2,
        expected: tex`O ácido nucleico 2 é $\boxed{\text{DNA}}$, pois apresenta dupla hélice e timina, sem uracila. As bases nitrogenadas das fitas complementares se atraem por $\boxed{\text{ligações de hidrogênio}}$.`,
        criteria: [
          { points: 1, text: 'Identifica o ácido nucleico 2 como DNA.' },
          { points: 1, text: 'Indica ligações de hidrogênio entre as bases nitrogenadas.' },
        ],
      },
      {
        id: 'b', prompt: 'Qual dos ácidos nucleicos, 1, 2 ou 3, foi extraído de um retrovírus? Qual porcentagem de bases adenina foi encontrada no ácido nucleico extraído desse retrovírus?', maxScore: 2,
        expected: tex`O material do retrovírus é o de número $\boxed{3}$, pois é RNA de fita simples e contém uracila, sem timina. A porcentagem de adenina é $100-(15+28+33)=\boxed{24\%}$.`,
        criteria: [
          { points: 1, text: 'Identifica o ácido nucleico 3 como o material do retrovírus.' },
          { points: 1, text: 'Calcula 24% de adenina pela soma total de 100%.' },
        ],
      },
    ],
    preview: 'Diferencie DNA e RNA e complete a porcentagem de adenina do retrovírus.',
  },
  {
    ...shared,
    id: 'uscs2026-prova1-q07', number: 'Questão 07', subject: 'Biologia', content: 'Circulação sistêmica e pulso carotídeo', difficulty: 'Média',
    statement: `Ainda sentado no chão, pressionando a lateral do pescoço, Joe disse: — Escute. Você é muito boa. Cortou minha aorta. A artéria do pescoço.

Dando um risinho, ela levou a mão à boca.

— Meu Deus, você é ignorante mesmo. Quero dizer, você erra as palavras todas. A aorta é no peito, você quer dizer a carótida.

(Philip K. Dick. O homem do castelo alto, 2019. Adaptado.)`, blockTypes: ['quote', 'quote', 'quote', 'source'], works: ['O homem do castelo alto'],
    parts: [
      {
        id: 'a', prompt: 'De qual câmara cardíaca sai a artéria aorta? Como é a concentração de gás oxigênio no interior dessa artéria?', maxScore: 2,
        expected: tex`A artéria aorta sai do $\boxed{\text{ventrículo esquerdo}}$ e transporta sangue arterial com $\boxed{\text{alta concentração de gás oxigênio}}$.`,
        criteria: [
          { points: 1, text: 'Identifica o ventrículo esquerdo como origem da aorta.' },
          { points: 1, text: 'Indica alta concentração de oxigênio no sangue da aorta.' },
        ],
      },
      {
        id: 'b', prompt: 'Para qual órgão vital é direcionada a maior parte do sangue contido no interior dessa artéria? Além da posição superficial das carótidas, por que é possível sentir o efeito do batimento cardíaco nas carótidas ao se tocar o pescoço com a ponta dos dedos?', maxScore: 2,
        expected: 'A maior parte do sangue das carótidas é direcionada ao cérebro (encéfalo/cabeça). A sístole do coração gera uma onda de pressão que se propaga pelas artérias e provoca a dilatação de suas paredes, perceptível ao toque como pulso.',
        criteria: [
          { points: 1, text: 'Indica o cérebro, encéfalo ou cabeça como destino da maior parte do sangue carotídeo.' },
          { points: 1, text: 'Explica o pulso pela onda de pressão da sístole e pela dilatação das paredes arteriais.' },
        ],
      },
    ],
    preview: 'Relacione aorta, carótidas, oxigenação e percepção do pulso.',
  },
  {
    ...shared,
    id: 'uscs2026-prova1-q08', number: 'Questão 08', subject: 'Biologia', content: 'Polinização, atrativos florais e fecundação', difficulty: 'Média',
    statement: 'A figura ilustra três tipos de polinização, X, W ou T, que ocorrem nas plantas 1 e 2 e entre elas.', blockTypes: ['prose'],
    images: [img('p1-q08-polinizacao.svg', 'Duas plantas com flores amarelas e insetos. X indica polinização na mesma flor, T entre flores da mesma planta e W entre plantas diferentes. Estruturas reprodutivas florais estão destacadas.')],
    parts: [
      {
        id: 'a', prompt: 'Além da forma e do néctar, cite outra característica das flores que atrai os insetos polinizadores. Qual o nome da estrutura floral, representada na figura, no interior da qual ocorre a produção do grão de pólen?', maxScore: 2,
        expected: tex`Uma característica atrativa é o $\boxed{\text{cheiro}}$ das flores. O grão de pólen é produzido no interior da $\boxed{\text{antera}}$.`,
        accepted: 'Para a característica atrativa, foram aceitas: néctar ou a cor das pétalas ou grão de pólen comestível ou produção de óleos e resinas. Para a estrutura: estame ou saco polínico.',
        criteria: [
          { points: 1, text: 'Cita cheiro ou outro atrativo floral admitido oficialmente para insetos polinizadores.' },
          { points: 1, text: 'Identifica a antera como estrutura de produção do grão de pólen.' },
        ],
      },
      {
        id: 'b', prompt: 'Qual dos três tipos de polinização, X, W ou T, gera maior variabilidade genética entre os descendentes ao longo das gerações? Caso a polinização seja bem sucedida, o que ocorre com um dos gametas contidos no interior do tubo polínico para que ocorra a formação do embrião?', maxScore: 2,
        expected: tex`O tipo $\boxed{W}$, que representa polinização cruzada entre plantas diferentes, gera maior variabilidade genética. Para formar o embrião, um dos núcleos masculinos do tubo polínico $\boxed{\text{funde-se com a oosfera}}$, ocorrendo a fecundação.`,
        criteria: [
          { points: 1, text: 'Identifica o tipo W como o de maior variabilidade genética.' },
          { points: 1, text: 'Explica que um núcleo masculino se funde com a oosfera para formar o embrião.' },
        ],
      },
    ],
    preview: 'Compare os tipos de polinização e explique a formação do embrião.',
  },
];
