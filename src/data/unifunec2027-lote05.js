const PROCESS_URL = 'https://tmpfiles.org/wCAgolsZxrTc/provai-discursiva3.pdf';
const shared = {
  exam: 'Unifunec', year: 2027, phase: 'Prova I', originalUrl: PROCESS_URL,
  kind: 'discursive', correctionOrigin: 'editorial',
  studyNotes: [
    'Proposta de correção elaborada pelo acervo, com respostas diretas e formulações equivalentes; não é um documento oficial da Vunesp.',
    'Rubrica de estudo: cada item vale de 0 a 2 pontos, com 1 ponto para cada resposta exigida. Cada questão soma 4 pontos e as oito questões totalizam 32 pontos de estudo.',
  ],
};
const tex = String.raw;

export const unifunec2027Lote05 = [
  {
    ...shared,
    id: 'unifunec2027-prova1-q01', number: 'Questão 01', subject: 'Química', content: 'Amido: funções orgânicas, polímeros e densidade', difficulty: 'Fácil',
    statement: `O amido é um macronutriente essencial na geração de energia para o organismo humano. Trata-se de um polímero natural presente em alimentos como trigo, batata e milho.\n\nA figura mostra um recipiente de vidro contendo uma amostra de amido de milho e a fórmula estrutural do amido.`, blockTypes: ['prose', 'prose'],
    images: [{ src: '/images/unifunec2027/p1-q01-amido.svg?v=20261104-rec2', alt: 'Recipiente com 300 gramas de amido de milho e fórmula estrutural do amido, com unidades de glicose repetidas e grupos hidroxila; indicação de imagem gerada por IA no caderno.' }],
    parts: [
      {
        id: 'a', prompt: 'Dê o nome da função orgânica presente em maior quantidade na estrutura do amido de milho. Qual o nome do grupo de macronutrientes a que pertence o amido?', maxScore: 2,
        expected: 'A função orgânica predominante é a de $\\text{álcool}$, devido aos diversos grupos hidroxila ($\\text{–OH}$) ligados a carbonos saturados. O amido pertence ao grupo dos $\\text{carboidratos}$.',
        accepted: 'Também é adequado especificar que o amido é um polissacarídeo, ou seja, um carboidrato formado por unidades de glicose.',
        criteria: [
          { points: 1, text: 'Identifica a função orgânica álcool.' },
          { points: 1, text: 'Classifica o amido como carboidrato (polissacarídeo).' },
        ],
      },
      {
        id: 'b', prompt: 'Analisando a fórmula estrutural do amido, por que ele é considerado um polímero? Calcule o volume, em litros, correspondente à massa de amido contida no recipiente de vidro, sabendo que sua densidade é, aproximadamente, 1,5 g/cm³.', maxScore: 2,
        expected: tex`Ele é um polímero porque apresenta muitas unidades repetitivas de glicose (monossacarídeos) unidas por ligações glicosídicas, representadas pelo índice $n$. Pela densidade, $V=m/d=300/1{,}5=200\ \mathrm{cm^3}$. Como $1000\ \mathrm{cm^3}=1\ \mathrm L$, o volume é $\boxed{0{,}2\ \mathrm L}$.`,
        accepted: tex`São equivalentes 200 mL e $2\times10^{-1}$ L. A explicação pode mencionar monômeros de glicose ou unidades de repetição do polissacarídeo.`,
        criteria: [
          { points: 1, text: 'Explica o caráter polimérico pela repetição de unidades de glicose.' },
          { points: 1, text: 'Calcula 200 cm³ e converte corretamente para 0,2 L.' },
        ],
      },
    ],
    preview: 'Identifique funções e macronutrientes do amido e calcule o volume de 300 g.',
  },
  {
    ...shared,
    id: 'unifunec2027-prova1-q02', number: 'Questão 02', subject: 'Química', content: 'Água: mudança de estado, geometria e número de moléculas', difficulty: 'Média',
    statement: `O cientista Omar Yaghi, um dos laureados com o Prêmio Nobel de Química de 2025, desenvolveu uma tecnologia baseada em química reticular capaz de extrair umidade do ar e produzir água potável mesmo em regiões áridas. O dispositivo funciona com energia solar e pode gerar até 1 000 litros de água por dia, oferecendo uma alternativa para comunidades afetadas por secas, furacões ou interrupções no abastecimento de água e energia.

(www.theguardian.com, 21.02.2026. Adaptado.)`,
    blockTypes: ['prose', 'source'],
    parts: [
      {
        id: 'a', prompt: 'Dê o nome da mudança de estado físico que ocorre quando água é obtida do ar atmosférico. Qual é a geometria da molécula da água?', maxScore: 2,
        expected: 'O vapor de água presente no ar passa ao estado líquido por $\\text{condensação}$ (ou liquefação). A molécula de água tem geometria $\\text{angular}$.',
        criteria: [
          { points: 1, text: 'Identifica condensação/liquefação do vapor de água.' },
          { points: 1, text: 'Indica a geometria angular da molécula.' },
        ],
      },
      {
        id: 'b', prompt: 'Qual o nome da interação intermolecular estabelecida quando a água passa para o estado líquido? Considerando a constante de Avogadro igual a 6 × 10²³ mol⁻¹ e a densidade da água igual a 1 g/cm³, calcule o número de moléculas de água extraídas do ar atmosférico em 1 dia e meio pelo dispositivo mencionado no excerto.', maxScore: 2,
        expected: tex`Entre as moléculas de água líquida estabelecem-se $\text{ligações de hidrogênio}$. Em 1,5 dia, são produzidos $1500\ \mathrm L=1{,}5\times10^6\ \mathrm{cm^3}$, correspondentes a $1{,}5\times10^6\ \mathrm g$. Com $M(\mathrm{H_2O})=18\ \mathrm{g/mol}$, $N=\frac{1{,}5\times10^6}{18}\cdot6\times10^{23}=\boxed{5\times10^{28}\text{ moléculas}}$.`,
        accepted: tex`Também são aceitas as denominações “pontes de hidrogênio” e o cálculo por etapas, com aproximadamente $8{,}33\times10^4$ mol de água.`,
        criteria: [
          { points: 1, text: 'Identifica ligações/pontes de hidrogênio.' },
          { points: 1, text: tex`Calcula 1 500 L em 1,5 dia e obtém $5\times10^{28}$ moléculas.` },
        ],
      },
    ],
    preview: 'Relacione condensação e geometria da água e calcule as moléculas produzidas em 1,5 dia.',
  },
  {
    ...shared,
    id: 'unifunec2027-prova1-q03', number: 'Questão 03', subject: 'Química', content: 'Clorofila e grupo heme: distribuição eletrônica e estrutura orgânica', difficulty: 'Difícil',
    statement: 'As figuras ilustram como a molécula da clorofila a e a molécula do grupo heme da hemoglobina são estruturalmente semelhantes. Em ambas há um átomo metálico central envolto por um anel porfirínico. Na molécula da clorofila a, esse átomo central é o magnésio, responsável por ajudar as plantas a capturar energia da luz solar durante a fotossíntese. Na molécula do grupo heme da hemoglobina, o átomo central é o ferro, responsável pelo transporte de gás oxigênio (O₂) pelas células do corpo humano.', blockTypes: ['prose'],
    images: [{ src: '/images/unifunec2027/p1-q03-clorofila-heme.svg?v=20261104-rec2', alt: 'Fórmulas estruturais da clorofila a, com magnésio central e longa cadeia lateral, e do grupo heme da hemoglobina, com ferro central; fontes de Química Nova indicadas no caderno.' }],
    parts: [
      {
        id: 'a', prompt: 'Segundo o Diagrama de Pauling em subníveis de energia, escreva a distribuição eletrônica do íon ferro, cuja carga é +2, presente na estrutura do grupo heme da hemoglobina. Escreva a fórmula química do sal formado pelo elemento metálico central na estrutura da clorofila a com o ânion cloreto (Cℓ–).', maxScore: 2,
        expected: tex`O ferro tem $Z=26$; ao formar $\mathrm{Fe^{2+}}$, perde os dois elétrons do subnível $4s$. A distribuição é $\boxed{1s^2\,2s^2\,2p^6\,3s^2\,3p^6\,3d^6}$. O magnésio forma $\mathrm{Mg^{2+}}$, que se combina a dois cloretos: $\boxed{\mathrm{MgCl_2}}$.`,
        accepted: 'É equivalente apresentar $4s^0$ ao final ou escrever a distribuição por camadas: 2, 8, 14. O sal pode ser nomeado cloreto de magnésio.',
        criteria: [
          { points: 1, text: tex`Apresenta a distribuição eletrônica correta do $\mathrm{Fe^{2+}}$, sem elétrons no $4s$ e com $3d^6$.` },
          { points: 1, text: tex`Escreve $\mathrm{MgCl_2}$.` },
        ],
      },
      {
        id: 'b', prompt: 'Classifique a cadeia carbônica quanto às ligações entre os carbonos nos anéis porfirínicos presentes nas estruturas da clorofila a e do grupo heme da hemoglobina. Justifique, com base na estrutura química das respectivas moléculas, por que a massa molecular da clorofila a é maior do que a massa molecular do grupo heme da hemoglobina.', maxScore: 2,
        expected: 'Quanto às ligações entre carbonos, as cadeias são $\\text{insaturadas}$, pois apresentam ligações duplas entre carbonos, alternadas com ligações simples nos anéis. A clorofila a possui estrutura orgânica mais extensa, especialmente a longa cadeia lateral hidrocarbônica (fitol), e maior número de átomos; esses grupos adicionais superam o fato de o magnésio ser menos massivo que o ferro.',
        accepted: 'A justificativa pode comparar as fórmulas moleculares ou mencionar explicitamente a longa cadeia fitol e os grupos funcionais adicionais da clorofila a.',
        criteria: [
          { points: 1, text: 'Classifica as cadeias como insaturadas devido às ligações duplas entre carbonos.' },
          { points: 1, text: 'Justifica a maior massa molecular pela estrutura orgânica mais extensa, em especial a cadeia lateral de fitol.' },
        ],
      },
    ],
    preview: 'Compare clorofila e grupo heme quanto aos íons, às cadeias e à massa molecular.',
  },
  {
    ...shared,
    id: 'unifunec2027-prova1-q04', number: 'Questão 04', subject: 'Química', content: 'Rádio: isótopos, reação, meia-vida e estequiometria gasosa', difficulty: 'Difícil',
    statement: tex`O rádio (Ra), elemento químico metálico de número atômico 88, é extremamente raro e radioativo. Por ser um emissor de luminescência, foi usado na tinta luminosa de ponteiros de relógios, causando adoecimento e até mesmo a morte de trabalhadores expostos a ele. Hoje em dia, o rádio ainda é empregado no tratamento de algumas formas de câncer, porém é mais aplicado na produção de outros radionuclídeos.

O rádio metálico apresenta brilho prateado e reage com a água ($\mathrm{H_2O}$), formando hidróxido de rádio ($\mathrm{Ra(OH)_2}$) e gás hidrogênio ($\mathrm{H_2}$). Esse elemento químico tem quatro isótopos naturais: $^{223}\mathrm{Ra}$, $^{224}\mathrm{Ra}$, $^{226}\mathrm{Ra}$ e $^{228}\mathrm{Ra}$, sendo que o mais comum e mais estável é o rádio-226, cujo período de meia-vida é de aproximadamente 1 600 anos. O decaimento desse radioisótopo resulta no gás radônio (Rn), que também é radioativo. O decaimento de 1 g de rádio-226 emite cerca de $10^{-5}\ \mathrm{mL}$ de gás radônio ($^{222}_{86}\mathrm{Rn}$) nas Condições Normais de Temperatura e Pressão (CNTP), nas quais 1 mol de gás ocupa 22,4 litros.

(https://crqs.org.br. Adaptado.)`,
    blockTypes: ['prose', 'prose', 'source'],
    parts: [
      {
        id: 'a', prompt: 'Qual o número de nêutrons do isótopo natural mais pesado do elemento químico rádio? Escreva a equação química, devidamente balanceada, que representa a reação do rádio metálico com a água.', maxScore: 2,
        expected: tex`O isótopo mais pesado é o $^{228}\mathrm{Ra}$; portanto, $N=A-Z=228-88=\boxed{140\text{ nêutrons}}$. A reação balanceada é $\boxed{\mathrm{Ra(s)+2H_2O(l)\rightarrow Ra(OH)_2(aq)+H_2(g)}}$.`,
        criteria: [
          { points: 1, text: 'Calcula 140 nêutrons no rádio-228.' },
          { points: 1, text: tex`Apresenta a equação correta e balanceada: $\mathrm{Ra+2H_2O\rightarrow Ra(OH)_2+H_2}$.` },
        ],
      },
      {
        id: 'b', prompt: 'Calcule o tempo, em anos, para que os ponteiros luminosos de um relógio tenham sua massa de rádio-226 reduzida a 12,5%. Encontre a massa, em gramas, aproximada de gás radônio-222 formada pelo decaimento de 1 g de rádio-226.', maxScore: 2,
        expected: tex`Como $12{,}5\%=\frac18=(\frac12)^3$, são necessárias três meias-vidas: $t=3\times1600=\boxed{4800\text{ anos}}$. Para o radônio, $10^{-5}\ \mathrm{mL}=10^{-8}\ \mathrm L$; assim, $n=\frac{10^{-8}}{22{,}4}$ mol e $m=n\cdot222\approx9{,}9\times10^{-8}\ \mathrm g$, ou aproximadamente $\boxed{1{,}0\times10^{-7}\ \mathrm g}$.`,
        accepted: tex`Arredondamentos próximos de $9{,}9\times10^{-8}$ g são equivalentes. O cálculo do radônio utiliza o volume fornecido no enunciado e o volume molar nas CNTP.`,
        criteria: [
          { points: 1, text: 'Reconhece três meias-vidas e calcula 4 800 anos.' },
          { points: 1, text: tex`Converte o volume de radônio, calcula os mols e obtém aproximadamente $1{,}0\times10^{-7}$ g.` },
        ],
      },
    ],
    preview: 'Determine nêutrons e reação do rádio e calcule meia-vida e massa de radônio.',
  },
  {
    ...shared,
    id: 'unifunec2027-prova1-q05', number: 'Questão 05', subject: 'Biologia', content: 'Cascata trófica, herbivoria e dinâmica de cursos fluviais', difficulty: 'Média',
    statement: `Em 1995, a reintrodução de lobos-cinzentos no Parque Nacional de Yellowstone iniciou uma das cascatas tróficas mais estudadas do mundo. Os lobos voltaram a um ambiente que os humanos haviam deixado sem esse predador por cerca de 70 anos. Nesse período, cervos viveram sem pressão constante de predação e, consequentemente, alteraram profundamente a paisagem. Como consequência, os cervos aumentaram em número e passaram a consumir intensamente as gramíneas em áreas sensíveis, como margens de rios e vales abertos. Com a volta dos lobos, porém, o medo foi recolocado no sistema ecológico, o que alterou o uso do espaço pelos cervos e desencadeou uma sucessão de efeitos que se espalharam da fauna até a geologia da própria paisagem, integrando processos biológicos e físicos.

(www.terra.com.br, 12.04.2026. Adaptado.)`,
    blockTypes: ['prose', 'source'],
    parts: [
      {
        id: 'a', prompt: 'Esquematize uma cadeia alimentar composta por três níveis tróficos ocupados pelas espécies citadas no excerto. Qual a relação ecológica que ocorre entre os cervos e as gramíneas?', maxScore: 2,
        expected: tex`Uma cadeia possível é $\boxed{\text{gramíneas}\rightarrow\text{cervos}\rightarrow\text{lobos-cinzentos}}$. Entre cervos e gramíneas ocorre $\text{herbivoria}$, relação em que o herbívoro consome o produtor.`,
        accepted: 'A relação pode ser descrita como consumo de vegetais pelo herbívoro ou predação de produtores, desde que os papéis estejam corretamente identificados.',
        criteria: [
          { points: 1, text: 'Organiza os três níveis na ordem gramíneas → cervos → lobos-cinzentos.' },
          { points: 1, text: 'Identifica a relação de herbivoria entre cervos e gramíneas.' },
        ],
      },
      {
        id: 'b', prompt: 'Apresente um impacto geológico que o consumo excessivo de gramíneas pelos cervos nas margens dos rios pode causar nos cursos fluviais. Qual o efeito da introdução dos lobos-cinzentos na biomassa de produtores nas cadeias alimentares do parque de Yellowstone?', maxScore: 2,
        expected: 'A retirada da vegetação reduz a proteção e a retenção do solo pelas raízes, podendo intensificar a $\\text{erosão das margens}$ e aumentar o aporte de sedimentos, com $\\text{assoreamento}$ e alterações do canal fluvial. A introdução dos lobos tende a reduzir a pressão de herbivoria e, por essa cascata trófica, $\\text{aumentar a biomassa de produtores}$.',
        accepted: 'São impactos equivalentes: desestabilização das margens, maior transporte/deposição de sedimentos ou modificação do leito associada à perda da cobertura vegetal.',
        criteria: [
          { points: 1, text: 'Relaciona a perda de gramíneas à erosão e/ou sedimentação nos cursos fluviais.' },
          { points: 1, text: 'Indica aumento da biomassa de produtores após a introdução dos lobos.' },
        ],
      },
    ],
    preview: 'Monte a cadeia alimentar e relacione lobos, herbivoria, erosão e produtores.',
  },
  {
    ...shared,
    id: 'unifunec2027-prova1-q06', number: 'Questão 06', subject: 'Biologia', content: 'Código genético, tradução e degeneração', difficulty: 'Difícil',
    statement: 'Em 1955, o bioquímico Francis Crick propôs que a tradução de RNA em proteínas obedecesse a um conjunto de associações, posteriormente denominado de código genético. Ele afirmou que trios de bases nitrogenadas do RNA, chamados códons, correspondem a aminoácidos específicos na proteína sintetizada. Além disso, ele concluiu que o código genético é degenerado. Com o desenvolvimento da Bioquímica, as ideias de Crick foram confirmadas e o código genético foi decifrado integralmente, conforme disposto na tabela a seguir.', blockTypes: ['prose'],
    images: [{ src: '/images/unifunec2027/p1-q06-codigo-genetico.svg', alt: 'Tabela do código genético com os 64 códons de RNA, organizados pela primeira, segunda e terceira bases, e os aminoácidos ou sinais de parada correspondentes.' }],
    parts: [
      {
        id: 'a', prompt: 'Qual organela celular não membranosa é responsável pela tradução de RNA em proteínas? Que tipo de RNA é traduzido nesse processo?', maxScore: 2,
        expected: 'A tradução ocorre nos $\\text{ribossomos}$. O RNA traduzido em proteína é o $\\text{RNA mensageiro (mRNA)}$.',
        accepted: 'Também são grafias equivalentes “ribossomo” e “RNAm”.',
        criteria: [
          { points: 1, text: 'Identifica o ribossomo como organela responsável pela tradução.' },
          { points: 1, text: 'Identifica o RNA mensageiro como o RNA traduzido.' },
        ],
      },
      {
        id: 'b', prompt: 'Quantos aminoácidos compõem a proteína transcrita a partir da sequência de nucleotídeos 5’TACGGGTTCAATTATATCGCCTTA3’ de um gene? O que significa o código genético ser degenerado?', maxScore: 2,
        expected: tex`Seguindo a leitura didática pretendida para a fita apresentada, a transcrição fornece os códons AUG–CCC–AAG–UUA–AUA–UAG. A tradução se encerra no códon de parada UAG e incorpora $\boxed{5\text{ aminoácidos}}$: Met–Pro–Lys–Leu–Ile. A degeneração significa que $\text{um mesmo aminoácido pode ser especificado por mais de um códon}$.`,
        accepted: 'A resposta de cinco aminoácidos adota a convenção de leitura dos códons na ordem transcrita indicada acima. Como a sequência de DNA é apresentada com orientação 5′→3′, uma análise estritamente antiparalela da fita molde exigiria o complemento reverso; a redação, portanto, admite discussão quanto à orientação. A definição de degeneração não exige que todos os aminoácidos tenham múltiplos códons.',
        criteria: [
          { points: 1, text: 'Obtém cinco aminoácidos antes do códon de parada, com a sequência de códons explicitada.' },
          { points: 1, text: 'Explica que um mesmo aminoácido pode corresponder a diferentes códons.' },
        ],
      },
    ],
    preview: 'Interprete o código genético, conte os aminoácidos e explique a degeneração.',
  },
  {
    ...shared,
    id: 'unifunec2027-prova1-q07', number: 'Questão 07', subject: 'Biologia', content: 'Bactérias: reprodução, DNA, parede e resistência', difficulty: 'Média',
    statement: `Os antibióticos são agrupados por classe para identificar grupos semelhantes que atuam sobre tipos específicos de bactérias. Os antibióticos glicopeptídicos bloqueiam a síntese do peptidoglicano que compõe um dos envoltórios celulares, impedindo sua conclusão e, consequentemente, a sobrevivência da bactéria. As fluoroquinolonas são antibióticos que atuam contra um amplo espectro de bactérias bloqueando a síntese do ácido desoxirribonucleico (DNA) dentro da célula, impedindo sua multiplicação.

(www.ebsco.com. Adaptado.)`,
    blockTypes: ['prose', 'source'],
    parts: [
      {
        id: 'a', prompt: 'Que tipo de reprodução assexuada é realizada pelas bactérias? Além do DNA localizado no nucleoide, que outra forma de DNA presente nas bactérias pode ser afetada pelas fluoroquinolonas?', maxScore: 2,
        expected: 'As bactérias reproduzem-se assexuadamente por $\\text{divisão binária}$ (bipartição ou cissiparidade). Além do cromossomo do nucleoide, elas podem apresentar DNA circular extracromossômico chamado $\\text{plasmídeo}$.',
        criteria: [
          { points: 1, text: 'Identifica divisão binária/bipartição.' },
          { points: 1, text: 'Cita o DNA plasmidial (plasmídeo).' },
        ],
      },
      {
        id: 'b', prompt: 'Qual envoltório celular das bactérias é constituído por peptidoglicanos? Por que bactérias que realizam o fenômeno de transformação podem adquirir resistência aos antibióticos?', maxScore: 2,
        expected: 'O envoltório é a $\\text{parede celular}$. Na transformação, a bactéria capta DNA livre do ambiente; se esse DNA contiver e incorporar genes de resistência, a célula passa a expressá-los e pode tornar-se resistente, transmitindo essa característica à descendência.',
        accepted: 'É suficiente explicar a incorporação e a expressão de um gene de resistência obtido por transferência horizontal de DNA.',
        criteria: [
          { points: 1, text: 'Identifica a parede celular como envoltório constituído por peptidoglicanos.' },
          { points: 1, text: 'Explica a aquisição de resistência pela captação/incorporação de DNA com genes de resistência.' },
        ],
      },
    ],
    preview: 'Relacione antibióticos à divisão binária, plasmídeos, parede celular e transformação.',
  },
  {
    ...shared,
    id: 'unifunec2027-prova1-q08', number: 'Questão 08', subject: 'Biologia', content: 'Herança ligada ao X, daltonismo e corpúsculo de Barr', difficulty: 'Média',
    statement: 'Marcos e Joana são casados e desejam ter filhos. Marcos apresenta protanopia, um tipo específico de daltonismo que resulta em dificuldade de distinguir as cores vermelha e verde. Sabendo da condição do marido, Joana fez um exame genético e descobriu ser portadora da mutação causadora da protanopia, apesar de não manifestar essa condição genética.', blockTypes: ['prose'],
    parts: [
      {
        id: 'a', prompt: 'Em qual tipo de herança genética o daltonismo é classificado? Qual célula na retina dos olhos é afetada por essa condição genética?', maxScore: 2,
        expected: 'O daltonismo é classificado como herança $\\text{recessiva ligada ao cromossomo X}$. A condição afeta os $\\text{cones}$ da retina, especificamente os cones associados à percepção do vermelho (cones L) na protanopia.',
        criteria: [
          { points: 1, text: 'Classifica a herança como recessiva ligada ao X.' },
          { points: 1, text: 'Identifica os cones, preferencialmente especificando os cones L/vermelhos.' },
        ],
      },
      {
        id: 'b', prompt: 'Qual a probabilidade de Marcos e Joana gerarem uma criança com protanopia? O que é o corpúsculo de Barr observado em células somáticas de Joana ao microscópio óptico?', maxScore: 2,
        expected: tex`Representando o alelo da protanopia por $X^p$, o cruzamento é $X^pY\times X^PX^p$. Entre os quatro genótipos igualmente prováveis, dois apresentam protanopia ($X^pX^p$ e $X^pY$); portanto, a probabilidade é $\boxed{1/2=50\%}$. O corpúsculo de Barr é um dos cromossomos X de Joana que permanece $\text{inativado e altamente condensado}$ no núcleo das células somáticas.`,
        accepted: 'A probabilidade pode ser detalhada como 25% de menina afetada e 25% de menino afetado entre todos os nascimentos. O corpúsculo de Barr também pode ser descrito como cromatina sexual ou heterocromatina do X inativo.',
        criteria: [
          { points: 1, text: 'Calcula 50% de probabilidade considerando os genótipos do casal.' },
          { points: 1, text: 'Define o corpúsculo de Barr como um cromossomo X inativado e condensado.' },
        ],
      },
    ],
    preview: 'Determine a herança e a probabilidade da protanopia e defina o corpúsculo de Barr.',
  },
];
