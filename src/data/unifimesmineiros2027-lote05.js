const PROCESS_URL = 'https://tmpfiles.org/waAho1sxNQGw/mineiros2027.1-provadiscursiva.pdf';

const shared = {
  exam: 'Unifimes Mineiros', year: 2027, phase: 'Prova I', originalUrl: PROCESS_URL,
  kind: 'discursive', correctionOrigin: 'editorial',
  studyNotes: [
    'Proposta de correção elaborada pelo acervo, com respostas diretas, justificativas e formulações equivalentes; não é um documento oficial da Unifimes ou da Vunesp.',
    'Rubrica editorial de estudo: cada item vale de 0 a 2 pontos, com 1 ponto para cada resposta exigida. Cada questão soma 4 pontos e as oito questões totalizam 32 pontos de estudo.',
  ],
};
const tex = String.raw;

export const unifimesmineiros2027Lote05 = [
  {
    ...shared,
    id: 'unifimesmineiros2027-prova1-q01', number: 'Questão 01', subject: 'Química', content: 'Equilíbrio, entalpia e energia de ativação', difficulty: 'Média', mathClass: 'compact-math extra-compact-math',
    statement: tex`A química verde é uma área da química que estuda formas de diminuir a poluição. Uma dessas formas acontece por meio da captura do gás dióxido de carbono ($\mathrm{CO_2}$) da atmosfera e o converte em produtos úteis, a fim de diminuir o aquecimento global. O equilíbrio químico descrito a seguir demonstra a conversão do $\mathrm{CO_2}$ em metanol ($\mathrm{CH_3OH}$), um álcool que pode ser empregado como solvente industrial.`, blockTypes: ['prose'],
    math: tex`\mathrm{CO_2(g)+3H_2(g)\rightleftharpoons CH_3OH(\ell)+H_2O(\ell)}\qquad\Delta H=-131\ \mathrm{kJ/mol}`,
    statementAfter: 'O gráfico representa esse processo de duas maneiras: com o uso de catalisador e sem o uso de catalisador.', afterBlockTypes: ['prose'],
    afterImages: [{ src: '/images/unifimesmineiros2027/p1-q01-grafico-energia.svg?v=20261104-recursos2', alt: 'Gráfico de entalpia em kJ/mol pelo caminho da reação. Reagentes a 0; produtos a −131 kJ/mol. O pico sem catalisador está a 100 kJ/mol e o pico com catalisador a 50 kJ/mol.' }],
    parts: [
      {
        id: 'a', prompt: tex`Escreva a fórmula estrutural da molécula do $\mathrm{CO_2}$. Considerando a quantidade de energia armazenada nos reagentes e produtos, por que o processo descrito no gráfico é exotérmico?`, maxScore: 2,
        expected: tex`A fórmula estrutural é $\boxed{\mathrm{O=C=O}}$. O processo é exotérmico porque os produtos armazenam menor energia/entalpia que os reagentes: $\Delta H=H_{\text{produtos}}-H_{\text{reagentes}}=-131\ \mathrm{kJ/mol}<0$. A diferença de energia é liberada ao ambiente.`,
        accepted: 'Também é adequado afirmar que a entalpia dos produtos é menor que a dos reagentes e que há liberação de 131 kJ por mol de reação.',
        criteria: [{ points: 1, text: 'Representa o CO₂ com duas ligações duplas: O=C=O.' }, { points: 1, text: 'Explica o caráter exotérmico pela menor entalpia dos produtos e pela liberação de energia.' }],
      },
      {
        id: 'b', prompt: 'Qual o valor da energia de ativação, em kJ/mol, para o processo que utiliza catalisador? Considerando o princípio de Le Chatelier, por que a diminuição da temperatura favorece o rendimento da produção de metanol?', maxScore: 2,
        expected: tex`No caminho catalisado, a energia de ativação direta é a diferença entre o pico e os reagentes: $\boxed{E_a=50-0=50\ \mathrm{kJ/mol}}$. A formação de metanol é exotérmica; pela diminuição da temperatura, o sistema se opõe à perturbação favorecendo o sentido que libera calor, isto é, o sentido direto, aumentando o rendimento de $\mathrm{CH_3OH}$.`,
        accepted: 'É equivalente explicar que, em um equilíbrio exotérmico no sentido direto, o resfriamento desloca o equilíbrio para os produtos.',
        criteria: [{ points: 1, text: 'Lê o pico catalisado e calcula Ea = 50 kJ/mol.' }, { points: 1, text: 'Relaciona o resfriamento ao deslocamento do equilíbrio no sentido exotérmico de formação do metanol.' }],
      },
    ],
    preview: 'Represente o CO₂ e analise entalpia, catalisador e o efeito da temperatura no equilíbrio.',
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova1-q02', number: 'Questão 02', subject: 'Química', content: 'Ouro: classificação, ligação metálica, reatividade e estequiometria', difficulty: 'Difícil', mathClass: 'compact-math',
    statement: 'O ouro (Au) é um elemento com alta capacidade de reciclagem e reutilização. Em naufrágios, por exemplo, ele se mantém praticamente intacto na sua forma sólida. Isso ocorre devido à sua configuração eletrônica e baixa reatividade química.', blockTypes: ['prose'],
    images: [{ src: '/images/unifimesmineiros2027/p1-q02-serie-reatividade.svg?v=20261104-reatividade-vetorial2-seta', alt: 'Série de reatividade dos metais: K, Na, Ca, Mg, Al, Zn, Fe, Ni, Sn, Pb, (H), Cu, Ag, Au. A reatividade cresce no sentido da direita para a esquerda; entre cobre, ferro e magnésio, o cobre é o menos reativo. Indicação do caderno: imagem gerada por IA, chatgpt.com.' }],
    parts: [
      {
        id: 'a', prompt: 'Classifique o elemento químico ouro de acordo com sua posição na Classificação Periódica. Considerando os tipos de ligação química, por que o ouro no estado sólido é um bom condutor de eletricidade?', maxScore: 2,
        expected: 'O ouro é um metal de transição, situado no bloco d, grupo 11 e 6º período da Classificação Periódica. No estado sólido, seus átomos estão unidos por ligação metálica; os elétrons deslocalizados do “mar de elétrons” podem se movimentar pela estrutura, permitindo boa condução elétrica.',
        accepted: 'Também se admite “metal de transição externa” e a explicação pela mobilidade dos elétrons livres/deslocalizados na rede metálica.',
        criteria: [{ points: 1, text: 'Classifica o ouro como metal de transição, grupo 11, 6º período/bloco d.' }, { points: 1, text: 'Relaciona a ligação metálica e os elétrons deslocalizados à condução elétrica.' }],
      },
      {
        id: 'b', prompt: tex`Considerando a posição dos metais cobre, ferro e magnésio na série de reatividade, complete a equação química presente no campo de Resolução e Resposta, devidamente balanceada, com o metal menos reativo. Sabendo que o valor da constante de Avogadro é $6\times10^{23}\ \mathrm{mol^{-1}}$ e considerando uma taça confeccionada com 200 g de ouro 18 quilates (75% de ouro, em massa), calcule o número aproximado de átomos do elemento químico ouro ($M=197\ \mathrm{g/mol}$), contido nessa taça.

Equação apresentada no campo de resposta:

$$\underline{\qquad\qquad}+\underline{\quad}\ \mathrm{AgNO_3(aq)}\longrightarrow\underline{\qquad\qquad}+\underline{\qquad\qquad}$$`, maxScore: 2,
        expected: tex`Entre Cu, Fe e Mg, o menos reativo é o cobre, que desloca a prata do nitrato de prata: $\boxed{\mathrm{Cu(s)+2AgNO_3(aq)\rightarrow Cu(NO_3)_2(aq)+2Ag(s)}}$. A taça contém $200\cdot0{,}75=150\ \mathrm g$ de ouro. Assim, $n=150/197$ mol e $N=\frac{150}{197}\cdot6\times10^{23}\approx\boxed{4{,}57\times10^{23}\text{ átomos de Au}}$.`,
        accepted: tex`Admite-se aproximadamente $4{,}6\times10^{23}$ átomos. A equação iônica $\mathrm{Cu+2Ag^+\rightarrow Cu^{2+}+2Ag}$ é equivalente para a transformação, mas o preenchimento do campo deve apresentar as espécies completas.`,
        criteria: [{ points: 1, text: 'Escolhe o cobre e apresenta a equação completa e balanceada com 2 AgNO₃ e 2 Ag.' }, { points: 1, text: 'Calcula 150 g de Au e obtém aproximadamente 4,57 × 10²³ átomos.' }],
      },
    ],
    preview: 'Classifique o ouro, complete a reação de deslocamento e calcule seus átomos em uma taça.',
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova1-q03', number: 'Questão 03', subject: 'Química', content: 'Funções orgânicas, cadeia carbônica e isomeria óptica', difficulty: 'Difícil',
    statement: 'O composto 29, também conhecido como colírio VP1-001, vem sendo estudado para uso no tratamento de catarata. Esse composto atua desfazendo o acúmulo de proteínas no cristalino, evitando o procedimento cirúrgico.', blockTypes: ['prose'],
    images: [{ src: '/images/unifimesmineiros2027/p1-q03-composto29.svg?v=20261104-recursos2', alt: 'Fórmula estrutural do composto 29, de esqueleto esteroide, com uma hidroxila, uma carbonila de cetona e diversos centros estereogênicos indicados por ligações em cunha e tracejadas.' }],
    parts: [
      {
        id: 'a', prompt: 'Indique a função orgânica presente no composto 29 que apresenta carbonila. Classifique a cadeia carbônica quanto à natureza de seus átomos.', maxScore: 2,
        expected: 'A carbonila está ligada a dois carbonos; portanto, a função orgânica é cetona. Quanto à natureza dos átomos, a cadeia carbônica é homogênea: não há heteroatomo intercalado entre carbonos da cadeia. Os oxigênios da carbonila e da hidroxila não estão entre dois carbonos da cadeia.',
        accepted: 'É suficiente identificar “cetona” e “cadeia homogênea”; a justificativa pode mencionar que o oxigênio não se encontra intercalado na cadeia.',
        criteria: [{ points: 1, text: 'Identifica a função cetona.' }, { points: 1, text: 'Classifica a cadeia como homogênea.' }],
      },
      {
        id: 'b', prompt: 'As proteínas que acumulam no cristalino são compostas por α-aminoácidos. O que é um α-aminoácido? Qual é o tipo de isomeria espacial presente no composto 29?', maxScore: 2,
        expected: tex`Um $\alpha$-aminoácido é um composto que apresenta um grupo amino e um grupo carboxila ligados ao mesmo carbono, o carbono $\alpha$, que também se liga a um hidrogênio e a uma cadeia lateral R, de forma geral $\mathrm{H_2N-CHR-COOH}$. O composto 29 apresenta $\boxed{\text{isomeria óptica}}$, pois possui carbonos quirais/centros estereogênicos, indicados pelas ligações em cunha e tracejadas.`,
        accepted: 'Também são equivalentes “estereoisomeria óptica” e a definição pela presença dos grupos –NH₂ e –COOH no carbono α. A justificativa pode destacar a existência de enantiômeros não sobreponíveis.',
        criteria: [{ points: 1, text: 'Define α-aminoácido pela presença de amino e carboxila no carbono α.' }, { points: 1, text: 'Identifica isomeria óptica e a associa a centros quirais.' }],
      },
    ],
    preview: 'Analise a carbonila, a cadeia e os centros estereogênicos do composto 29.',
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova1-q04', number: 'Questão 04', subject: 'Química', content: 'Radioatividade: camadas, nêutrons, decaimento e meia-vida', difficulty: 'Média',
    statement: 'A tabela apresenta alguns dados relacionados aos estudos feitos na área de radioatividade.', blockTypes: ['prose'],
    tables: [{ ariaLabel: 'Elementos radioativos, meias-vidas, emissões e aplicações', headerRows: [['Elemento', 'Meia-vida', 'Emissão', 'Aplicação']], rows: [['Lutécio-177', '6,7 dias', 'Beta (⁰₋₁β)', 'Radiofármacos'], ['Amerício-241', '432 anos', 'Alfa (⁴₊₂α)', 'Detectores de fumaça'], ['Actínio-225', '10 dias', 'Alfa (⁴₊₂α)', 'Tratamento do câncer']] }],
    parts: [
      {
        id: 'a', prompt: 'Considerando a Classificação Periódica, qual o número de camadas do amerício-241? Qual o número de nêutrons do lutécio-177?', maxScore: 2,
        expected: tex`O amerício está no 7º período, portanto possui $\boxed{7\text{ camadas eletrônicas}}$. O lutécio tem número atômico $Z=71$; no isótopo 177, $N=A-Z=177-71=\boxed{106\text{ nêutrons}}$.`,
        criteria: [{ points: 1, text: 'Determina 7 camadas para o amerício.' }, { points: 1, text: 'Usa Z = 71 e calcula 106 nêutrons no lutécio-177.' }],
      },
      {
        id: 'b', prompt: 'Apresente a equação que representa a emissão de partícula do amerício-241. Após quanto tempo determinada massa de actínio-225 será reduzida a 25%?', maxScore: 2,
        expected: tex`O amerício-241 emite partícula alfa: $\boxed{{}^{241}_{95}\mathrm{Am}\rightarrow{}^{237}_{93}\mathrm{Np}+{}^{4}_{2}\alpha}$. Para restarem 25% da massa inicial de actínio-225, são necessárias duas meias-vidas: $100\%\rightarrow50\%\rightarrow25\%$. Como cada meia-vida é de 10 dias, o tempo é $\boxed{20\text{ dias}}$.`,
        accepted: tex`A partícula alfa também pode ser representada por $^{4}_{2}\mathrm{He}$. O cálculo pode ser escrito como $t=2\cdot10=20$ dias.`,
        criteria: [{ points: 1, text: 'Escreve o decaimento alfa do Am-241 formando Np-237, com conservação de A e Z.' }, { points: 1, text: 'Reconhece duas meias-vidas e calcula 20 dias.' }],
      },
    ],
    preview: 'Determine camadas e nêutrons, escreva o decaimento alfa e calcule duas meias-vidas.',
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova1-q05', number: 'Questão 05', subject: 'Biologia', content: 'Núcleo celular, RER e síntese proteica', difficulty: 'Média',
    statement: 'A figura representa parte das estruturas que compõem uma célula eucariótica.', blockTypes: ['prose'],
    images: [{ src: '/images/unifimesmineiros2027/p1-q05-celula-nucleo.svg?v=20261104-nucleo-vectorink2-setas', alt: 'Núcleo celular com envoltório nuclear, poros, cromatina e nucléolo. Ao redor, retículo endoplasmático rugoso com ribossomos aderidos. Fonte: alevelbiology.co.uk, adaptado.' }],
    parts: [
      {
        id: 'a', prompt: 'Qual lipídio é o mais abundante na composição química do envoltório nuclear? Qual a organela membranosa presente na figura?', maxScore: 2,
        expected: 'Os lipídios mais abundantes no envoltório nuclear são os fosfolipídios, organizados em bicamadas membranosas. A organela membranosa representada ao redor do núcleo é o retículo endoplasmático rugoso (RER), reconhecido pelos ribossomos aderidos à sua membrana.',
        accepted: 'Também é adequado especificar “retículo endoplasmático granular” para o RER.',
        criteria: [{ points: 1, text: 'Identifica os fosfolipídios.' }, { points: 1, text: 'Identifica o retículo endoplasmático rugoso.' }],
      },
      {
        id: 'b', prompt: 'Qual a molécula de ácido nucleico que carrega a informação genética e passa pelos poros do núcleo? Por que células com nucléolos desenvolvidos estão relacionadas à alta síntese proteica?', maxScore: 2,
        expected: 'A molécula é o RNA mensageiro (RNAm), que carrega a transcrição da informação do DNA para o citoplasma, onde será traduzida. Nucléolos desenvolvidos produzem intensamente RNA ribossômico e as subunidades dos ribossomos; com mais ribossomos disponíveis, a célula pode sustentar elevada síntese de proteínas.',
        accepted: 'É equivalente mencionar que o nucléolo participa da produção e do processamento dos ribossomos, estruturas responsáveis pela tradução do RNAm.',
        criteria: [{ points: 1, text: 'Identifica o RNAm.' }, { points: 1, text: 'Relaciona o nucléolo à produção de ribossomos e estes à alta síntese proteica.' }],
      },
    ],
    preview: 'Identifique componentes do núcleo e relacione nucléolo, ribossomos e síntese proteica.',
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova1-q06', number: 'Questão 06', subject: 'Biologia', content: 'Insetos, predação e transporte no floema', difficulty: 'Média',
    statement: 'Para muitos animais, o pulgão é uma benção. Para alguns, como as joaninhas, ele serve de alimento. Já outros, como as formigas, adoram o sumo açucarado que o pulgão excreta e o consomem assim que o líquido sai do animal. E, para que nenhum outro consumidor tenha a ideia de simplesmente devorar os valiosos pulgões, as formigas os protegem.\n\n(Peter Wohlleben. A vida secreta das árvores, 2017. Adaptado.)', blockTypes: ['quote', 'source'], works: ['A vida secreta das árvores'],
    parts: [
      {
        id: 'a', prompt: 'A que classe taxonômica dos artrópodes pertencem os pulgões, as joaninhas e as formigas? Qual relação ecológica ocorre entre pulgões e joaninhas?', maxScore: 2,
        expected: 'Pulgões, joaninhas e formigas pertencem à classe Insecta. Entre pulgões e joaninhas ocorre predação: a joaninha é a predadora e o pulgão, a presa.',
        accepted: 'Também se admite “predatismo” e a identificação dos organismos como insetos.',
        criteria: [{ points: 1, text: 'Identifica a classe Insecta.' }, { points: 1, text: 'Identifica a predação, com a joaninha como predadora.' }],
      },
      {
        id: 'b', prompt: 'O sumo açucarado é proveniente dos vegetais de que os pulgões se alimentam. Qual tecido vegetal conduz o sumo açucarado? Qual mecanismo fisiológico é responsável pelo deslocamento dos açúcares nesse tecido vegetal?', maxScore: 2,
        expected: 'O sumo açucarado, ou seiva elaborada, é conduzido pelo floema. Seu deslocamento ocorre principalmente por fluxo em massa, explicado pelo modelo de fluxo por pressão: o carregamento de açúcares nas fontes e sua retirada nos drenos geram diferenças de potencial hídrico e pressão que movimentam a seiva.',
        accepted: 'Também são equivalentes “hipótese do fluxo em massa/por pressão” e a explicação pelo gradiente de pressão entre fonte e dreno.',
        criteria: [{ points: 1, text: 'Identifica o floema como tecido condutor da seiva elaborada.' }, { points: 1, text: 'Explica o fluxo em massa/por pressão entre fontes e drenos.' }],
      },
    ],
    preview: 'Classifique os artrópodes e explique a predação e o transporte de açúcares no floema.',
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova1-q07', number: 'Questão 07', subject: 'Biologia', content: 'Lipídios, suco gástrico e fibras alimentares', difficulty: 'Fácil',
    statement: 'Leia a tirinha “Minduim”, do cartunista Charles M. Schulz.', blockTypes: ['prose'], works: ['Minduim'],
    images: [{ src: '/images/unifimesmineiros2027/p1-q07-minduim.svg?v=20261104-recursos2', alt: 'Tirinha Minduim. Uma personagem questiona quem come palitos de cenoura todos os dias. Ouve que a vida é mais do que isso e que ela nunca tentou. Ela pergunta o que um estômago que espera uma barra de chocolate diria ao receber um palito de cenoura. A resposta final brinca que todos fazem parte do mesmo time e que ele agradecerá por participar. Fonte: estadao.com.br, 29.04.2026.' }],
    parts: [
      {
        id: 'a', prompt: 'Qual alimento citado na tirinha é rico em lipídios? Qual o ácido inorgânico presente no suco gástrico?', maxScore: 2,
        expected: tex`O alimento rico em lipídios é o chocolate, especialmente pela presença de gorduras. O ácido inorgânico presente no suco gástrico é o ácido clorídrico ($\mathrm{HCl}$).`,
        accepted: 'Também se admite “barra de chocolate” e “ácido muriático” como denominação histórica do HCl.',
        criteria: [{ points: 1, text: 'Identifica o chocolate.' }, { points: 1, text: 'Identifica o ácido clorídrico/HCl.' }],
      },
      {
        id: 'b', prompt: 'Cite uma função das fibras vegetais no intestino humano. Por que os carboidratos estruturais das fibras vegetais não fornecem nutrientes para o metabolismo celular?', maxScore: 2,
        expected: 'As fibras aumentam o volume e a retenção de água do bolo fecal e estimulam os movimentos peristálticos e o trânsito intestinal. Seu principal carboidrato estrutural, a celulose, não é hidrolisado pelo aparelho digestório humano porque não produzimos celulase; assim, suas unidades de glicose não são liberadas e absorvidas para o metabolismo celular.',
        accepted: 'Basta citar uma função, como estimular o peristaltismo ou facilitar a evacuação, e explicar a ausência de enzimas humanas capazes de digerir a celulose.',
        criteria: [{ points: 1, text: 'Cita uma função intestinal válida das fibras.' }, { points: 1, text: 'Explica que a falta de celulase impede a digestão da celulose e a liberação de nutrientes.' }],
      },
    ],
    preview: 'Relacione a tirinha a lipídios, HCl e à função digestiva das fibras.',
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova1-q08', number: 'Questão 08', subject: 'Biologia', content: 'GH e herança autossômica dominante', difficulty: 'Difícil',
    statement: 'Existem diferentes tipos de nanismo e de alterações ósseas, extremamente variáveis, envolvendo as heranças genéticas autossômica dominante, autossômica recessiva e ligada ao sexo. Para orientar pessoas que têm nanismo e desejam ter filhos, é preciso saber o tipo de nanismo de que são portadoras, pois nem sempre seus descendentes terão a mesma condição, explica a médica geneticista Dafne Horovitz.\n\n(www.sbgm.org.br. Adaptado.)', blockTypes: ['quote', 'source'],
    images: [{ src: '/images/unifimesmineiros2027/p1-q08-heredograma.svg?v=20261104-recursos2', alt: 'Heredograma: o homem 1 e a mulher 2 são afetados. Seus filhos são: mulher 3 não afetada, homem 4 afetado, mulher 5 não afetada, mulher 6 afetada e homem 7 não afetado.' }],
    parts: [
      {
        id: 'a', prompt: 'O nanismo pode ser causado por deficiência na produção do hormônio GH. Qual glândula secreta esse hormônio? Por qual via de transporte esse hormônio chega aos tecidos ósseos?', maxScore: 2,
        expected: 'O GH é secretado pela hipófise, mais especificamente pela adeno-hipófise. Por ser um hormônio endócrino, é liberado no sangue e chega aos tecidos ósseos pela circulação sanguínea sistêmica.',
        accepted: 'Também são equivalentes “glândula pituitária” e “via sanguínea/corrente sanguínea”.',
        criteria: [{ points: 1, text: 'Identifica a hipófise/adeno-hipófise.' }, { points: 1, text: 'Indica o transporte pela circulação sanguínea.' }],
      },
      {
        id: 'b', prompt: 'No heredograma, as pessoas 1, 2, 4 e 6 apresentam o mesmo tipo de nanismo. O nanismo que ocorre nessa família é determinado por qual tipo de gene: autossômico recessivo, autossômico dominante ou dominante ligado ao X? Qual a probabilidade de o casal formado por 1 e 2 gerar uma filha com esse mesmo tipo de nanismo?', maxScore: 2,
        expected: tex`O padrão é $\boxed{\text{autossômico dominante}}$. Pais afetados têm filhos não afetados, o que exclui o modelo recessivo; além disso, o pai afetado tem filhas não afetadas, incompatível com dominância ligada ao X. Como há filhos $aa$, os pais 1 e 2 são $Aa\times Aa$. A probabilidade de uma criança afetada é $3/4$ e, independentemente, a de ser menina é $1/2$. Logo, $P(\text{filha afetada})=\frac34\cdot\frac12=\boxed{\frac38=37{,}5\%}$.`,
        accepted: 'Admite-se a representação de outros símbolos para os alelos, desde que o cruzamento heterozigoto e a multiplicação por 1/2 para o sexo feminino estejam corretos.',
        criteria: [{ points: 1, text: 'Determina herança autossômica dominante e reconhece os pais como heterozigotos.' }, { points: 1, text: 'Calcula 3/4 × 1/2 = 3/8 = 37,5% para filha afetada.' }],
      },
    ],
    preview: 'Identifique a origem e o transporte do GH e calcule a probabilidade no heredograma.',
  },
];
