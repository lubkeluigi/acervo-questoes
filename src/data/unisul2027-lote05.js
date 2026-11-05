const PROCESS_URL = 'https://tmpfiles.org/wwAXoqszNt2s/unisul2027-provadiscursiva.pdf';
const shared = {
  exam: 'Unisul', year: 2027, phase: 'Prova I', originalUrl: PROCESS_URL,
  kind: 'discursive', correctionOrigin: 'editorial',
  studyNotes: [
    'Proposta de correção elaborada pelo acervo, com respostas diretas e formulações equivalentes; não é um documento oficial da Vunesp.',
    'Rubrica de estudo: cada item vale de 0 a 2 pontos, com 1 ponto para cada resposta exigida. Cada questão soma 4 pontos e as oito questões totalizam 32 pontos de estudo.',
  ],
};
const tex = String.raw;

export const unisul2027Lote05 = [
  {
    ...shared,
    id: 'unisul2027-prova1-q01', number: 'Questão 01', subject: 'Química', content: 'NaCl: ligação iônica e concentração', difficulty: 'Fácil',
    statement: 'Para o preparo de macarrão, cozinheiros italianos recomendam salgar a água do cozimento na seguinte proporção: duas colheres de sal de cozinha, equivalente a aproximadamente 5,85 g de cloreto de sódio (NaCl), para cada 500 mL de água fervente.', blockTypes: ['prose'],
    parts: [
      {
        id: 'a', prompt: 'A qual grupo da Classificação Periódica pertence o elemento que forma o ânion do NaCl? Escreva o nome da ligação química que ocorre no NaCl.', maxScore: 2,
        expected: 'O ânion é o cloreto, formado pelo cloro, elemento do $\\text{grupo 17}$ da Classificação Periódica, a família dos halogênios. No NaCl, a ligação entre Na⁺ e Cl⁻ é $\\text{iônica}$.',
        accepted: 'Também são equivalentes “família VIIA” para o grupo e “ligação eletrovalente” para a ligação iônica.',
        criteria: [{ points: 1, text: 'Identifica o cloro como elemento do grupo 17, os halogênios.' }, { points: 1, text: 'Identifica a ligação iônica no NaCl.' }],
      },
      {
        id: 'b', prompt: 'Considerando que o volume de líquido não é alterado significativamente com a adição do sal, calcule a concentração de NaCl, em g/L e em mol/L, presente na água do cozimento do macarrão.', maxScore: 2,
        expected: tex`O volume é $500\ \mathrm{mL}=0{,}500\ \mathrm L$. Em massa, $C=\frac{5{,}85}{0{,}500}=\boxed{11{,}7\ \mathrm{g/L}}$. Como $M(\mathrm{NaCl})=58{,}5\ \mathrm{g/mol}$, a concentração em quantidade de matéria é $\frac{11{,}7}{58{,}5}=\boxed{0{,}200\ \mathrm{mol/L}}$.`,
        accepted: tex`São equivalentes $0{,}2\ \mathrm{mol/L}$ e o cálculo por etapas: $n=5{,}85/58{,}5=0{,}100$ mol em $0{,}500$ L.`,
        criteria: [{ points: 1, text: 'Converte 500 mL para 0,500 L e calcula 11,7 g/L.' }, { points: 1, text: 'Usa a massa molar 58,5 g/mol e obtém 0,200 mol/L.' }],
      },
    ],
    preview: 'Identifique o grupo do cloro e a ligação no NaCl e calcule suas concentrações.',
  },
  {
    ...shared,
    id: 'unisul2027-prova1-q02', number: 'Questão 02', subject: 'Química', content: 'Neodímio: isótopo, íon e entalpia de formação', difficulty: 'Difícil', mathClass: 'compact-math',
    statement: 'As terras-raras compreendem um conjunto de elementos químicos que apresentam aplicações tecnológicas em componentes eletrônicos e ímãs. O neodímio (Nd) é um dos elementos designados como terra-rara e seu isótopo mais abundante é o neodímio-142. As informações a seguir referem-se ao estudo termoquímico de algumas reações envolvendo seus compostos.', blockTypes: ['prose'],
    math: tex`\begin{gathered}\mathrm{Nd(s)+3HCl(aq)\rightarrow NdCl_3(aq)+\frac32H_2(g)}\\ \Delta H^0_{\text{reação}}=-690\ \mathrm{kJ/mol}\\ \mathrm{\frac12H_2(g)+\frac12Cl_2(g)\rightarrow HCl(aq)}\\ \Delta H^0_{\text{reação}}=-160\ \mathrm{kJ/mol}\\ \mathrm{NdCl_3(s)\rightarrow NdCl_3(aq)}\\ \Delta H^0_{\text{solução}}=-130\ \mathrm{kJ/mol}\end{gathered}`,
    statementAfter: tex`A entalpia de formação ($\Delta H^0_{\text{formação}}$) do $\mathrm{NdCl_3}$ sólido é dada pela equação:

$$\begin{gathered}\mathrm{Nd(s)+\frac32Cl_2(g)\rightarrow NdCl_3(s)}\\ \Delta H^0_{\text{formação}}\end{gathered}$$`, afterBlockTypes: ['prose', 'prose'],
    parts: [
      {
        id: 'a', prompt: 'Qual é o número de nêutrons presentes no isótopo neodímio-142? Quantos elétrons há no íon Nd³⁺?', maxScore: 2,
        expected: tex`O neodímio tem $Z=60$. No isótopo 142, $N=A-Z=142-60=\boxed{82\text{ nêutrons}}$. O átomo neutro tem 60 elétrons; ao formar $\mathrm{Nd^{3+}}$, perde três, restando $\boxed{57\text{ elétrons}}$.`,
        criteria: [{ points: 1, text: 'Calcula 82 nêutrons no neodímio-142.' }, { points: 1, text: 'Determina 57 elétrons no íon Nd³⁺.' }],
      },
      {
        id: 'b', prompt: 'Calcule a entalpia de formação (ΔH⁰formação) do composto NdCl₃ (s). Classifique a reação de formação do composto NdCl₃ (s) quanto ao seu caráter termoquímico.', maxScore: 2,
        expected: tex`Pela lei de Hess, soma-se a primeira reação a três vezes a segunda, obtendo $\mathrm{Nd(s)+\frac32Cl_2(g)\rightarrow NdCl_3(aq)}$, com $\Delta H=-690+3(-160)=-1170\ \mathrm{kJ/mol}$. Em seguida, inverte-se a dissolução: $\mathrm{NdCl_3(aq)\rightarrow NdCl_3(s)}$, com $\Delta H=+130\ \mathrm{kJ/mol}$. Portanto, $\boxed{\Delta H^0_{\text{formação}}=-1040\ \mathrm{kJ/mol}}$ e a formação é $\boxed{\text{exotérmica}}$.`,
        accepted: tex`O resultado pode ser obtido diretamente por $-690+3(-160)+130=-1040\ \mathrm{kJ/mol}$, desde que as reações e seus sentidos estejam corretamente considerados.`,
        criteria: [{ points: 1, text: tex`Aplica a lei de Hess e calcula $\Delta H^0_{\text{formação}}=-1040\ \mathrm{kJ/mol}$.` }, { points: 1, text: 'Classifica a formação como exotérmica devido ao sinal negativo da entalpia.' }],
      },
    ],
    preview: 'Determine nêutrons e elétrons do neodímio e aplique a lei de Hess.',
  },
  {
    ...shared,
    id: 'unisul2027-prova1-q03', number: 'Questão 03', subject: 'Química', content: 'Dióxido de enxofre: estado físico e oxirredução', difficulty: 'Média',
    statement: tex`O dióxido de enxofre ($\mathrm{SO_2}$) apresenta ponto de fusão $-72\ ^\circ\mathrm C$ e ponto de ebulição $-20\ ^\circ\mathrm C$. A $25\ ^\circ\mathrm C$, sua densidade é $2{,}63\ \mathrm{g/L}$. Na indústria de alimentos e bebidas, o $\mathrm{SO_2}$ é empregado como conservante e sua concentração nos alimentos e bebidas é regulamentada pela Agência Nacional de Vigilância Sanitária (Anvisa) e controlada por métodos analíticos.

A análise química de quantificação do $\mathrm{SO_2}$ em bebidas se baseia na reação com o peróxido de hidrogênio ($\mathrm{H_2O_2}$), resultando na formação do ácido sulfúrico ($\mathrm{H_2SO_4}$), conforme representado na equação:`, blockTypes: ['prose', 'prose'],
    math: tex`\mathrm{SO_2+H_2O_2\rightarrow H_2SO_4}`,
    parts: [
      {
        id: 'a', prompt: 'Qual é o estado físico do dióxido de enxofre a 20 °C? Calcule a massa, em gramas, de SO₂ presente em 2 L desse composto a 25 °C.', maxScore: 2,
        expected: tex`Como $20\ ^\circ\mathrm C$ está acima do ponto de ebulição, $-20\ ^\circ\mathrm C$, o $\mathrm{SO_2}$ está no estado $\boxed{\text{gasoso}}$. A massa em 2 L a 25 °C é $m=d\cdot V=2{,}63\cdot2=\boxed{5{,}26\ \mathrm g}$.`,
        accepted: 'Também se admite “estado de vapor” para o estado físico, com a justificativa baseada no ponto de ebulição.',
        criteria: [{ points: 1, text: 'Identifica o estado gasoso a 20 °C.' }, { points: 1, text: 'Calcula 5,26 g de SO₂ em 2 L.' }],
      },
      {
        id: 'b', prompt: 'Qual é o agente oxidante da reação entre o SO₂ e o H₂O₂? Quantos mols de elétrons participam dessa reação, na formação de um mol de H₂SO₄?', maxScore: 2,
        expected: tex`O agente oxidante é o $\boxed{\mathrm{H_2O_2}}$: o oxigênio do peróxido, com NOX −1, é reduzido a −2. O enxofre do $\mathrm{SO_2}$ passa de +4 a +6 no $\mathrm{H_2SO_4}$, perdendo dois elétrons por átomo. Assim, para formar 1 mol de $\mathrm{H_2SO_4}$, participam $\boxed{2\ \mathrm{mol}\text{ de elétrons}}$ transferidos.`,
        accepted: 'É suficiente apresentar a variação dos números de oxidação do enxofre e do oxigênio para justificar o agente oxidante e a quantidade de elétrons.',
        criteria: [{ points: 1, text: 'Identifica H₂O₂ como agente oxidante.' }, { points: 1, text: 'Determina 2 mol de elétrons por mol de H₂SO₄ formado.' }],
      },
    ],
    preview: 'Determine o estado físico e a massa de SO₂ e analise a oxirredução.',
  },
  {
    ...shared,
    id: 'unisul2027-prova1-q04', number: 'Questão 04', subject: 'Química', content: 'Polaridade, ligações de hidrogênio e oxidação de aldeído', difficulty: 'Média',
    statement: 'Os dois compostos orgânicos representados pelas fórmulas estruturais a seguir são usados na formulação de um aromatizante artificial para a indústria de alimentos.', blockTypes: ['prose'],
    images: [{ src: '/images/unisul2027/p1-q04-compostos.svg', alt: 'Composto 1: CH3–CO–CH(OH)–CH3, com carbonila e hidroxila. Composto 2: aldeído de cadeia com seis carbonos, CH3–(CH2)4–CHO.' }],
    parts: [
      {
        id: 'a', prompt: 'Classifique a molécula do composto 1 quanto à polaridade. Qual é a interação intermolecular mais intensa que ocorre entre as moléculas do composto 1 no estado líquido?', maxScore: 2,
        expected: tex`A molécula do composto 1 é $\boxed{\text{polar}}$, devido à distribuição assimétrica de cargas e à presença dos grupos carbonila e hidroxila. A interação intermolecular mais intensa entre suas moléculas no estado líquido é a $\boxed{\text{ligação de hidrogênio}}$, formada pelo grupo $\mathrm{-OH}$.`,
        accepted: 'Também são aceitas as denominações “ponte de hidrogênio” e a justificativa pela presença de H diretamente ligado ao oxigênio.',
        criteria: [{ points: 1, text: 'Classifica a molécula como polar.' }, { points: 1, text: 'Identifica ligações/pontes de hidrogênio como a interação mais intensa.' }],
      },
      {
        id: 'b', prompt: 'A oxidação do composto 2 resulta em um composto cuja fórmula é C₆H₁₂O₂. Qual é a fórmula estrutural do composto resultante da oxidação do composto 2? A qual função orgânica o composto C₆H₁₂O₂ pertence?', maxScore: 2,
        expected: tex`O composto 2 é um aldeído; sua oxidação produz o ácido carboxílico correspondente, sem alterar o número de carbonos. Uma representação da fórmula estrutural é $\boxed{\mathrm{CH_3-CH_2-CH_2-CH_2-CH_2-C(=O)-OH}}$, também escrita $\mathrm{CH_3(CH_2)_4COOH}$. O produto é o ácido hexanoico, da função $\boxed{\text{ácido carboxílico}}$.`,
        accepted: 'É equivalente apresentar a fórmula estrutural completa, com todas as ligações, ou a forma condensada que mostre explicitamente o grupo carboxila –COOH na extremidade.',
        criteria: [{ points: 1, text: 'Representa o ácido hexanoico com o grupo –COOH na extremidade da cadeia de seis carbonos.' }, { points: 1, text: 'Identifica a função orgânica ácido carboxílico.' }],
      },
    ],
    preview: 'Classifique a polaridade do composto 1 e represente a oxidação do composto 2.',
  },
  {
    ...shared,
    id: 'unisul2027-prova1-q05', number: 'Questão 05', subject: 'Biologia', content: 'Pâncreas endócrino e mobilização do tecido adiposo', difficulty: 'Média',
    statement: `Certos medicamentos originalmente prescritos para o tratamento do diabetes tipo 2 contêm a substância ativa semaglutida, que atua no pâncreas sobre aglomerados de células endócrinas. Isso ajuda a reduzir os níveis de açúcar no sangue, pois estimula a liberação de insulina, hormônio que regula esses níveis. Apesar de primariamente destinados a diabéticos, esses medicamentos têm sido bastante consumidos, de forma arriscada, por indivíduos que desejam emagrecer sem o acompanhamento de um profissional qualificado na área da saúde, já que esses fármacos levam à perda de peso por promoverem a redução no apetite.

(https://remunom.ojsbr.com. Adaptado.)`, blockTypes: ['prose', 'source'],
    parts: [
      {
        id: 'a', prompt: 'Como são chamados os aglomerados de células endócrinas pancreáticas que sofrem a ação da semaglutida? Que células desses aglomerados produzem a insulina?', maxScore: 2,
        expected: 'Os aglomerados são as $\\text{ilhotas de Langerhans}$ (ou ilhotas pancreáticas). A insulina é produzida pelas $\\text{células beta}$ dessas ilhotas.',
        criteria: [{ points: 1, text: 'Identifica as ilhotas de Langerhans.' }, { points: 1, text: 'Identifica as células beta como produtoras de insulina.' }],
      },
      {
        id: 'b', prompt: 'As estratégias de emagrecimento visam diminuir o estoque de gordura presente no tecido adiposo. Qual o principal tipo de gordura que é armazenada nesse tecido? Como a perda de apetite promovida pela semaglutida resulta na redução do tecido adiposo?', maxScore: 2,
        expected: 'O tecido adiposo armazena principalmente $\\text{triglicerídeos}$ (triacilgliceróis). A redução do apetite tende a diminuir a ingestão energética; se o gasto superar a ingestão, o organismo mobiliza os triglicerídeos estocados por lipólise e utiliza os ácidos graxos como fonte de energia, reduzindo o volume do tecido adiposo.',
        accepted: 'A explicação deve relacionar menor consumo de alimentos ao balanço energético negativo e à mobilização/oxidação das reservas lipídicas.',
        criteria: [{ points: 1, text: 'Identifica triglicerídeos/triacilgliceróis como principal gordura armazenada.' }, { points: 1, text: 'Relaciona a menor ingestão ao uso das reservas de gordura para obtenção de energia.' }],
      },
    ],
    preview: 'Identifique ilhotas e células beta e explique a redução do tecido adiposo.',
  },
  {
    ...shared,
    id: 'unisul2027-prova1-q06', number: 'Questão 06', subject: 'Biologia', content: 'Fotossíntese, carbono do solo e decomposição aeróbica', difficulty: 'Média',
    statement: 'Considere o esquema.', blockTypes: ['prose'],
    images: [{ src: '/images/unisul2027/p1-q06-solo-carbono.svg?v=20261104-solo-vectorink1', alt: 'Esquema “O solo protege o clima armazenando carbono”: plantas absorvem carbono da atmosfera, liberam O2 e incorporam carbono à matéria orgânica e ao solo pela decomposição.', caption: '(https://arvoresertecnologico.com.br. Adaptado.)' }],
    statementAfter: 'Parte da matéria orgânica proveniente das plantas é degradada pelos decompositores do solo e utilizada na respiração aeróbica e parte é incorporada ao solo. Porém, em áreas de lavoura onde a terra é revolvida, há maior oxigenação do solo e isso favorece a decomposição aeróbica dessa matéria orgânica incorporada, reduzindo, assim, o estoque de carbono armazenado.', afterBlockTypes: ['prose'],
    parts: [
      {
        id: 'a', prompt: 'Que organela vegetal executa a função de absorver o carbono da atmosfera e liberar oxigênio? Como é denominado o processo biológico no qual essa organela executa essa função?', maxScore: 2,
        expected: 'A organela é o $\\text{cloroplasto}$. Nela ocorre a $\\text{fotossíntese}$, processo que fixa o carbono do CO₂ atmosférico em matéria orgânica e libera O₂.',
        accepted: 'Também se admite “plastídio clorofilado” para a organela, desde que a associação com a fotossíntese esteja correta.',
        criteria: [{ points: 1, text: 'Identifica o cloroplasto.' }, { points: 1, text: 'Identifica a fotossíntese como o processo de fixação de carbono e liberação de O₂.' }],
      },
      {
        id: 'b', prompt: 'Por que, ao armazenar carbono, o solo protege o clima, como afirma o título do esquema? Como a decomposição aeróbica, promovida pela prática de revolver a terra, facilita a liberação do carbono armazenado?', maxScore: 2,
        expected: 'Ao manter carbono na matéria orgânica, o solo reduz sua permanência imediata na atmosfera como CO₂, gás de efeito estufa, ajudando a limitar a intensificação do aquecimento global. Revolver a terra aumenta a oxigenação e favorece a respiração aeróbica dos decompositores, que degradam a matéria orgânica e liberam o carbono, principalmente na forma de CO₂.',
        accepted: 'É equivalente explicar que o solo atua como reservatório/sumidouro de carbono e que a decomposição aeróbica acelera a mineralização da matéria orgânica.',
        criteria: [{ points: 1, text: 'Relaciona o armazenamento no solo à menor disponibilidade de CO₂ na atmosfera e ao efeito estufa.' }, { points: 1, text: 'Explica que a respiração dos decompositores degrada a matéria orgânica e libera CO₂.' }],
      },
    ],
    preview: 'Relacione cloroplastos, fotossíntese, estoque de carbono e decomposição.',
  },
  {
    ...shared,
    id: 'unisul2027-prova1-q07', number: 'Questão 07', subject: 'Biologia', content: 'Analogia, ciclo celular e seleção natural', difficulty: 'Difícil',
    statement: 'Os morcegos são os únicos mamíferos que apresentam asas e capacidade de realizar voo ativo, uma característica que eles compartilham com as aves, embora não exista um ancestral alado comum a esses animais. Ao analisar a figura, é possível comparar as asas de morcegos e de aves.', blockTypes: ['prose'],
    images: [{ src: '/images/unisul2027/p1-q07-asas.svg?v=20261104-asas-vectorink2-animais', alt: 'Comparação anatômica entre a asa de um morcego, sustentada por dedos alongados, e a asa de uma ave, com estrutura óssea diferente.', caption: '(https://evolution.berkeley.edu. Adaptado.)' }],
    statementAfter: 'Outra característica que destaca os morcegos entre os mamíferos é o fato de que eles raramente desenvolvem câncer. Um dos motivos para isso é a presença de múltiplas cópias do gene p53, que impede a divisão de células que sofreram mutações ou danos no DNA. Assim, o gene regula o ciclo celular e atua de modo a evitar a progressão de tumores. Enquanto os humanos têm apenas duas cópias desse gene, os morcegos possuem oito cópias.', afterBlockTypes: ['prose'],
    parts: [
      {
        id: 'a', prompt: 'Cite uma estrutura tegumentar ou glandular dos morcegos que os caracteriza como mamíferos e não como aves. No contexto evolutivo, como se denomina a semelhança de função existente entre estruturas anatomicamente diferentes, como acontece com as asas de morcegos e de aves?', maxScore: 2,
        expected: 'É possível citar os $\\text{pelos}$ do corpo ou as $\\text{glândulas mamárias}$. A semelhança de função entre as asas, apesar das diferenças anatômicas e da ausência de ancestral alado comum, é denominada $\\text{analogia}$; as asas são estruturas análogas.',
        accepted: 'Também são estruturas válidas as glândulas sudoríparas ou sebáceas. A analogia pode ser associada à convergência evolutiva.',
        criteria: [{ points: 1, text: 'Cita pelos ou glândulas características dos mamíferos.' }, { points: 1, text: 'Identifica a relação como analogia/estruturas análogas.' }],
      },
      {
        id: 'b', prompt: 'O gene p53, que os morcegos apresentam em múltiplas cópias, atua na fase da interfase que antecede a duplicação do DNA. Como essa fase é denominada? De que maneira a presença de múltiplas cópias do gene p53 pode ter sido favorecida pela seleção natural ao longo da evolução desses animais?', maxScore: 2,
        expected: tex`A fase que antecede a duplicação do DNA é a $\boxed{\text{fase G}_1}$ da interfase. Indivíduos com mais cópias funcionais do p53 puderam ter controle mais eficiente do ciclo celular, interrompendo a divisão de células com DNA danificado e reduzindo a formação de tumores. Se isso aumentou sobrevivência e sucesso reprodutivo, essas variantes foram preservadas e se tornaram mais frequentes pela seleção natural.`,
        accepted: tex`Também é aceita a grafia “subfase G1” ou “período G1”, acompanhada da explicação de vantagem adaptativa e maior representação na descendência.`,
        criteria: [{ points: 1, text: 'Identifica a fase G1 da interfase.' }, { points: 1, text: 'Explica a vantagem seletiva da supressão tumoral e sua relação com sobrevivência/reprodução.' }],
      },
    ],
    preview: 'Compare as asas, identifique a fase G1 e explique a seleção do p53.',
  },
  {
    ...shared,
    id: 'unisul2027-prova1-q08', number: 'Questão 08', subject: 'Biologia', content: 'Doenças negligenciadas: protozoários e esquistossomose', difficulty: 'Média',
    statement: `Doenças negligenciadas são aquelas causadas por agentes infecciosos ou parasitas e são consideradas endêmicas em populações de baixa renda. Essas enfermidades também apresentam indicadores inaceitáveis e investimentos reduzidos em pesquisas, em produção de medicamentos e em políticas de controle. As doenças tropicais, como a malária, a doença de Chagas, a leishmaniose visceral, a dengue e a esquistossomose continuam sendo algumas das principais causas de morbidade e mortalidade em todo o mundo. São doenças negligenciadas típicas que incapacitam ou matam milhões de pessoas e representam uma necessidade médica importante que permanece não atendida.

(https://agencia.fiocruz.br. Adaptado.)`, blockTypes: ['prose', 'source'],
    parts: [
      {
        id: 'a', prompt: 'Dentre as doenças mencionadas no excerto, cite uma que é causada por protozoário. Qual é o vetor que transmite essa doença?', maxScore: 2,
        expected: 'Uma resposta possível é $\\text{malária}$, causada por protozoários do gênero Plasmodium e transmitida pela picada de $\\text{fêmeas do mosquito Anopheles}$.',
        accepted: 'Também são pares válidos: doença de Chagas — triatomíneo conhecido como barbeiro; leishmaniose visceral — flebotomíneo conhecido como mosquito-palha. O vetor deve corresponder à doença escolhida.',
        criteria: [{ points: 1, text: 'Cita malária, doença de Chagas ou leishmaniose visceral como doença causada por protozoário.' }, { points: 1, text: 'Identifica corretamente o vetor da doença escolhida.' }],
      },
      {
        id: 'b', prompt: 'Qual das doenças mencionadas no excerto é causada por verme? Por que a coleta e o tratamento de esgoto desfavorecem o ciclo de transmissão dessa doença?', maxScore: 2,
        expected: 'A doença é a $\\text{esquistossomose}$, causada pelo verme Schistosoma mansoni. A coleta e o tratamento do esgoto impedem que fezes com ovos do parasita contaminem coleções de água doce; assim, reduzem a contaminação dos caramujos hospedeiros intermediários e interrompem ou dificultam a continuação do ciclo de transmissão.',
        accepted: 'É suficiente relacionar o saneamento à interrupção do contato dos ovos com ambientes aquáticos e caramujos, sem exigir o nome da espécie do parasita.',
        criteria: [{ points: 1, text: 'Identifica a esquistossomose como doença causada por verme.' }, { points: 1, text: 'Explica que o saneamento impede os ovos de alcançar a água e os caramujos, interrompendo o ciclo.' }],
      },
    ],
    preview: 'Associe doenças negligenciadas a protozoários, vetores e saneamento básico.',
  },
];
