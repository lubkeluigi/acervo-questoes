const PROCESS_URL = '/documentos/saocamilo2026/prova-I-discursiva.pdf';
const shared = {
  exam: 'São Camilo', year: 2026, phase: 'Prova I', originalUrl: PROCESS_URL,
  kind: 'discursive', correctionOrigin: 'official',
  officialAnswerUrl: '/documentos/saocamilo2026/criterios-prova-I.pdf',
  officialNotes: [
    'Para cada questão, foi atribuída pontuação de 0 a 4, conforme o atendimento integral aos critérios oficiais.',
    'Resposta correta acrescida de informação errada implicou perda do ponto.',
    'Não foram aceitos resultados sem a apresentação dos cálculos, nem resultados com erro de cálculo ou sem a unidade de medida correta, quando couber.',
  ],
};

const CHRONICLE = `Para responder às questões 01 e 02, leia o início da crônica “O VIP sem querer”, de Carlos Drummond de Andrade.

João Brandão foi ao Aeroporto Internacional para abraçar um amigo dileto, que viajava com destino ao Paraguai. Pessoa comum despedindo-se de pessoa comum. Mas acontecem coisas. Alguém, informado da viagem, pedira ao amigo que levasse uma encomenda a Assunção. A encomenda apareceu na hora, entregue por um senhor que foi logo dizendo:

— O doutor não precisa se incomodar. Eu providencio o despacho e tudo mais.

O avião estava atrasado duas horas [...]. O senhor da encomenda procurou amenizar a espera:

— O doutor não vai ficar duas horas sentado numa dessas cadeiras aí, vendo os minutos se arrastarem. Espere um momento, que eu dou um jeitinho.

Saiu para confabular mais adiante e voltou com a boa nova:

— Por obséquio, me acompanhe até a sala VIP.

— Não é preciso — objetou o meu amigo. — Posso esperar perfeitamente por aqui mesmo.

— Não senhor. Estará melhor lá em cima.

— Acontece que estou aqui com um amigo.

— Ele também vai com o doutor.

Não havia remédio senão subir à sala VIP. Seu amigo, encabulado, e João Brandão mais ainda. Seria indelicado insistir na recusa. E depois, por que não ir àquela sala?

Subiram pelas escadas rolantes, precedidos de um abridor de caminhos, que com o indicador ia pedindo passagem para os dois ilustres desconhecidos.

Na sala VIP, enorme e vazia, pois há uma hora na vida em que até os VIP escasseiam, João Brandão e seu amigo foram convidados por um garçom solícito a beber qualquer coisa, a ler revistas, a pedir o que lhes aprouvesse.

— Obrigado — respondeu o amigo. — Não desejamos nada. Ou você, João, deseja alguma coisa?

— Também não. Obrigado.

O garçom insistia:

— Nem um cafezinho, doutor?

Vá lá, um cafezinho. Sorvendo-o a lentos goles, pareciam sorver o espanto de serem promovidos a VIP.

— Veja como são as coisas, João. Nós aqui na maciota, em poltronas deleitáveis, contemplando quadros abstratos, e lá embaixo o povo concreto fazendo fila para conferir as passagens ou esperando em cadeiras padronizadas a hora do embarque.

— É mesmo, sô.

— Entretanto eles pagaram imposto como nós, custearam como nós a construção deste edifício, têm direitos iguais ao nosso, de desfrutar as comodidades deste salão, mas na hora de desfrutá-las só nós dois é que somos convocados.

(Carlos Drummond de Andrade. Boca de luar, 2014.)`;

// Cada um dos 21 parágrafos do original permanece em um bloco próprio, incluindo o 11º, cobrado em Q01.
const CHRONICLE_BLOCKS = ['label', ...Array(21).fill('prose'), 'source'];
const chronicleQuestion = () => ({ statement: CHRONICLE, blockTypes: CHRONICLE_BLOCKS, works: ['Boca de luar'] });

export const saocamilo2026Lote05 = [
  {
    ...shared, ...chronicleQuestion(),
    id: 'saocamilo2026-prova1-q01', number: 'Questão 01', subject: 'Português', content: 'Crônica e discurso indireto livre', difficulty: 'Difícil',
    parts: [
      {
        id: 'a', prompt: 'De que modo a ideia expressa em “Pessoa comum despedindo-se de pessoa comum.” (1º parágrafo) é transformada ao longo da crônica?', maxScore: 2,
        expected: 'Inicialmente pessoas comuns, os dois amigos acabam sendo levados a uma sala VIP, exclusiva para pessoas “não comuns”, e desfrutam de privilégios dessas pessoas. A própria expressão VIP (Very Important Person) denota a ideia de “incomum”: pessoas comuns são tornadas incomuns por um evento fortuito.',
        criteria: [
          { points: 1, text: 'Explica que os dois amigos, inicialmente comuns, passam a desfrutar da sala VIP e de privilégios de pessoas “não comuns”.' },
          { points: 1, text: 'Relaciona VIP à ideia de “incomum” e explica que o evento fortuito transforma pessoas comuns em incomuns.' },
        ],
      },
      {
        id: 'b', prompt: 'O chamado discurso indireto livre é aquele em que a voz de um personagem se mescla à voz do narrador. Considerando os parágrafos 11º, 12º, 13º e 14º, em qual deles ocorre discurso indireto livre? Justifique sua resposta.', maxScore: 2,
        expected: 'Ocorre no 11º parágrafo. O trecho “E depois, por que não ir àquela sala?” constitui um questionamento dos personagens inserido, sem qualquer mediação, no discurso do narrador.',
        criteria: [
          { points: 1, text: 'Identifica o 11º parágrafo.' },
          { points: 1, text: 'Justifica pela presença do questionamento dos personagens inserido sem mediação na fala do narrador.' },
        ],
      },
    ],
    preview: 'Analise a transformação das pessoas comuns em VIP e identifique o discurso indireto livre.',
  },
  {
    ...shared, ...chronicleQuestion(),
    id: 'saocamilo2026-prova1-q02', number: 'Questão 02', subject: 'Português', content: 'Paradoxo e expressão expletiva', difficulty: 'Difícil',
    parts: [
      {
        id: 'a', prompt: 'Na crônica, que expressão, composta por um substantivo e um adjetivo, configura um paradoxo? Justifique sua resposta.', maxScore: 2,
        expected: 'A expressão é “ilustres desconhecidos” (12º parágrafo). Se são “desconhecidos”, indivíduos cuja existência se ignora, não podem ser “ilustres”, isto é, conhecidos ou famosos.',
        criteria: [
          { points: 1, text: 'Cita “ilustres desconhecidos”.' },
          { points: 1, text: 'Explica a oposição entre “desconhecidos” e “ilustres” (conhecidos ou famosos).' },
        ],
      },
      {
        id: 'b', prompt: 'Expressão expletiva é aquela que não exerce nenhuma função sintática na oração em que está inserida. Cite a expressão expletiva que ocorre no último parágrafo da crônica. Com qual finalidade a expressão expletiva é utilizada, já que ela não exerce nenhuma função sintática?', maxScore: 2,
        expected: 'A expressão é “é que”. Embora não tenha função sintática, ela dá ênfase e chama a atenção para “nós dois”, reforçando o contraste entre os dois amigos e as demais pessoas que não estão na sala VIP.',
        criteria: [
          { points: 1, text: 'Cita a expressão “é que”.' },
          { points: 1, text: 'Explica a finalidade de ênfase em “nós dois” e o contraste com as demais pessoas fora da sala VIP.' },
        ],
      },
    ],
    preview: 'Identifique o paradoxo e a expressão expletiva na crônica de Drummond.',
  },
  {
    ...shared,
    id: 'saocamilo2026-prova1-q03', number: 'Questão 03', subject: 'Inglês', content: 'Compreensão e produção de respostas em português', difficulty: 'Média',
    statement: `Cutting back on food. Saving on utilities (e.g. water, electricity, gas). Driving less. Borrowing money. These are the sacrifices that people in the United States are making to afford their health care expenses, according to a Gallup survey recently published. About one-third of respondents — equivalent to more than 82 million Americans — said they have had to cut back on at least one daily living expense to cover their health care bills. “It’s a time when health care spending is on the rise, in part because the country’s health is on the decline”, says Tim Lash, president of a nonprofit group focused on health care delivery. “It’s not just that health care is expensive,” he says, “it’s that we use more and more health care as Americans.”

Although the uninsured¹ and those lower on the income ladder have to make more sacrifices, they aren’t the only ones having trouble paying for their health care expenses. Even middle-class and upper-middle-class Americans are having to make decisions about what to cut back on. The situation will probably get worse in the coming months and years: millions more people are expected to become uninsured after new laws approved more than $1 trillion in cuts to federal support for health care and after Congress did not renew the subsidies on health insurance at the end of 2025.

(Tami Luhby. https://edition.cnn.com, 12.03.2026. Adapted.)

¹ uninsured: people who do not have a healthcare plan.

Answer the questions, in Portuguese. Be concise and direct, and do not repeat the question in your answer.`,
    blockTypes: ['prose', 'prose', 'source', 'note', 'command'],
    parts: [
      {
        id: 'a', prompt: 'In the first paragraph, identify one example of a daily living expense Americans have had to sacrifice so they can pay for their health costs. Mention one of the reasons why, according to Tim Lash, health care has had such a great impact on the lives of Americans nowadays.', maxScore: 2,
        expected: 'Um exemplo é a redução de gastos com serviços básicos, como água, eletricidade ou gás. Um dos motivos é que os americanos estão utilizando cada vez mais serviços de saúde, o que aumenta os gastos com cuidados médicos.',
        accepted: 'Exemplos aceitos: cortar gastos; economizar com custos da casa / alimentação / comida / água / eletricidade / gás / combustível / transporte / dirigir menos; pedir dinheiro emprestado. Para o motivo, foram aceitas: os gastos com saúde estão aumentando; a saúde está piorando; os americanos estão usando mais a saúde; os custos da saúde são altos.',
        rejected: 'Não foram aceitas como exemplos, nas formulações indicadas pelo documento: economizar (dinheiro / com hábitos) / alimentação / comida / água / carro / gás.',
        criteria: [
          { points: 1, text: 'Apresenta um exemplo válido de despesa cotidiana sacrificada para pagar os custos de saúde.' },
          { points: 1, text: 'Menciona um motivo válido para o grande impacto atual da saúde na vida dos americanos.' },
        ],
      },
      {
        id: 'b', prompt: 'According to the second paragraph, which two groups of people are mostly affected by health care expenses? Cite one of the factors which will contribute to making it even harder for the American people to afford health care.', maxScore: 2,
        expected: 'Os grupos mais afetados são os não segurados (sem plano de saúde) e as pessoas de baixa renda. Um fator que dificultará ainda mais o acesso à saúde é o corte de mais de US$ 1 trilhão no apoio federal à área da saúde.',
        accepted: 'Para os grupos: pessoas sem seguro / plano / convênio de saúde + pessoas de baixa renda / abaixo da classe média / pobres / vulneráveis / classe baixa, com menção de ambos. Para o fator: milhões de pessoas ficarão sem seguro de saúde; cortes (de mais de US$ 1 trilhão) no apoio federal à saúde; Congresso não aprovou financiamento / subsídio à saúde.',
        rejected: 'Não foram aceitos como grupos: desempregados, moradores de rua, imigrantes, pessoas com planos baratos, classe média, classe média alta, classe alta. Não foram aceitos como fator: as novas leis; a lei que foi aprovada; criação de novas leis; alto custo da saúde.',
        criteria: [
          { points: 1, text: 'Identifica os dois grupos: pessoas sem seguro de saúde e pessoas de baixa renda.' },
          { points: 1, text: 'Cita um fator válido que dificultará ainda mais o acesso à saúde.' },
        ],
      },
    ],
    preview: 'Responda em português sobre sacrifícios cotidianos e acesso à saúde nos Estados Unidos.',
  },
  {
    ...shared,
    id: 'saocamilo2026-prova1-q04', number: 'Questão 04', subject: 'Biologia', content: 'Células NK, sinalização e ciclo celular', difficulty: 'Média',
    statement: `Uma pesquisa, apoiada pela Fundação de Amparo à Pesquisa do Estado de São Paulo (FAPESP) e publicada na revista Scientific Reports, investigou as células natural killer (NK), um tipo de linfócito do sistema imune, de nove indivíduos com média de 64 anos de idade, divididos entre praticantes e não praticantes de endurance, uma atividade física prolongada, como corrida de longa duração, ciclismo, natação, remo e caminhada. No trabalho, os pesquisadores expuseram as células NK de idosos praticantes e de não praticantes de endurance a diferentes bloqueadores farmacológicos, dentre eles o propranolol e a rapamicina. O propranolol é um bloqueador pós-sináptico do circuito neural ativado pela adrenalina e pela noradrenalina, já a rapamicina atua na inibição do período de crescimento da célula, interrompendo a interfase e impedindo a proliferação celular. A via ativada pela adrenalina e pela noradrenalina é responsável por ativar a proliferação celular para a manutenção da função imunológica. Nos indivíduos praticantes de endurance, as células NK mantiveram a função imunológica, enquanto nos indivíduos não praticantes de endurance, foi constatada exaustão celular ou falha na resposta imunológica.

(Maria Fernanda Ziegler. https://agencia.fapesp.br, 16.10.2025. Adaptado.)`,
    blockTypes: ['prose', 'source'], works: ['Scientific Reports'],
    parts: [
      {
        id: 'a', prompt: 'Em qual glândula endócrina a adrenalina é produzida? Em relação ao ciclo celular, qual período da interfase é interrompido pela rapamicina?', maxScore: 2,
        expected: 'A adrenalina é produzida na glândula suprarrenal (ou adrenal). A rapamicina interrompe o período G1 da interfase.',
        criteria: [
          { points: 1, text: 'Identifica a glândula suprarrenal (adrenal).' },
          { points: 1, text: 'Identifica o período G1.' },
        ],
      },
      {
        id: 'b', prompt: 'Qual a função das células NK na defesa do organismo durante uma infecção viral? Considerando os mecanismos de sinalização celular, de que forma o propranolol bloqueia a ação da adrenalina e da noradrenalina nas células-alvo desses neurotransmissores?', maxScore: 2,
        expected: 'Durante a infecção viral, as células NK identificam e eliminam as células infectadas por vírus. O propranolol se liga aos receptores na superfície da membrana plasmática das células-alvo, bloqueando a acoplagem da noradrenalina e da adrenalina.',
        criteria: [
          { points: 1, text: 'Explica que as células NK identificam e eliminam células infectadas por vírus.' },
          { points: 1, text: 'Explica a ligação do propranolol aos receptores da membrana e o bloqueio da acoplagem dos neurotransmissores.' },
        ],
      },
    ],
    preview: 'Relacione adrenalina, rapamicina, células NK e bloqueio de receptores.',
  },
  {
    ...shared,
    id: 'saocamilo2026-prova1-q05', number: 'Questão 05', subject: 'Química', content: 'Fórmula eletrônica, equilíbrio químico e pH', difficulty: 'Difícil',
    statement: 'Indivíduos diagnosticados com Doença Pulmonar Obstrutiva Crônica (DPOC) apresentam dificuldade para eliminar dióxido de carbono ($\\mathrm{CO_2}$) do organismo. O $\\mathrm{CO_2}$ dissolvido no sangue participa de um importante sistema para controle do pH sanguíneo, representado pela equação:', blockTypes: ['prose'],
    math: '\\mathrm{CO_2(g)+H_2O(l)}\\rightleftharpoons\\mathrm{H_2CO_3(aq)}\\rightleftharpoons\\mathrm{H^+(aq)+HCO_3^-(aq)}',
    statementAfter: 'Para avaliar o comportamento desse sistema em pacientes com DPOC, foram comparadas amostras sanguíneas de indivíduos saudáveis e de pacientes com DPOC em estágio moderado. Os resultados estão apresentados na tabela:', afterBlockTypes: ['prose'],
    afterTables: [{ ariaLabel: 'Pressão parcial de gás carbônico e concentração de bicarbonato no sangue', headerRows: [['Grupo de estudo', 'Pressão parcial de CO2 no sangue (mmHg)', '[HCO3−] (mmol/L)']], rows: [['Indivíduos saudáveis', '40', '24'], ['Indivíduos com DPOC', '60', '28']] }],
    parts: [
      {
        id: 'a', prompt: 'Escreva a fórmula eletrônica do $\\mathrm{CO_2}$ e identifique a geometria molecular desse composto.', maxScore: 2,
        expected: 'A fórmula eletrônica apresenta o carbono ligado por duas duplas ligações aos oxigênios, com dois pares de elétrons não ligantes em cada oxigênio. A geometria molecular é linear.',
        expectedImages: [{ src: '/images/saocamilo2026/p1-q05-lewis-co2-resposta.svg?v=20261104-vet2', alt: 'Fórmula eletrônica do CO2: O igual C igual O, com dois pares de pontos acima e dois pares abaixo de cada oxigênio.', caption: '' }],
        rejected: 'Não foram aceitas: o uso de representação de fórmula estrutural (=); somente a representação dos elétrons, mesmo havendo elétrons nas pontinhas das ligações.',
        criteria: [
          { points: 1, text: 'Representa corretamente a fórmula eletrônica do CO2, com elétrons ligantes e não ligantes.' },
          { points: 1, text: 'Identifica a geometria linear.' },
        ],
      },
      {
        id: 'b', prompt: 'Utilizando o princípio de Le Chatelier, justifique a diferença entre as concentrações de bicarbonato ($\\mathrm{HCO_3^-}$) em indivíduos saudáveis e em indivíduos diagnosticados com DPOC. Qual é a diferença esperada entre o pH sanguíneo de indivíduos com DPOC e o pH sanguíneo de indivíduos saudáveis?', maxScore: 2,
        expected: 'Como pacientes com DPOC têm dificuldade de eliminar CO2, o aumento de CO2 no sangue desloca o equilíbrio no sentido dos produtos, elevando a concentração de íons bicarbonato. O mesmo deslocamento aumenta a concentração de H+, produzindo pH sanguíneo menor (meio mais ácido) que o dos indivíduos saudáveis.',
        accepted: 'Também foi aceita a explicação de que o aumento da pressão força o CO2 gasoso a se dissolver na água, deslocando todo o sistema para a direita e aumentando as concentrações de bicarbonato e de H+.',
        rejected: 'Era necessário justificar pelo princípio de Le Chatelier; sem essa justificativa, a resposta não foi aceita. Para o pH, não bastava escrever “pH ácido”: era necessário indicar corretamente a diminuição do pH.',
        criteria: [
          { points: 1, text: 'Aplica Le Chatelier ao aumento de CO2 e justifica o deslocamento para os produtos e a elevação de bicarbonato.' },
          { points: 1, text: 'Relaciona o aumento de H+ ao pH menor nos indivíduos com DPOC.' },
        ],
      },
    ],
    preview: 'Represente o CO2 e use Le Chatelier para explicar bicarbonato e pH na DPOC.',
  },
  {
    ...shared,
    id: 'saocamilo2026-prova1-q06', number: 'Questão 06', subject: 'Física', content: 'Energia cinética e atrito no movimento circular', difficulty: 'Média',
    statement: 'Ao descer de um carrossel, uma criança esquece sua mochila, de massa total igual a 4 kg, apoiada no piso horizontal, a 5 m de distância do eixo vertical de rotação desse carrossel.', blockTypes: ['prose'],
    images: [{ src: '/images/saocamilo2026/p1-q06-carrossel.svg?v=20261104-vet2', alt: 'Carrossel com uma mochila no piso, ligada por uma medida de 5 metros ao eixo vertical de rotação.', caption: '' }],
    statementAfter: 'Adotando $\\pi=3$ e $g=10\\ \\mathrm{m/s^2}$, calcule:', afterBlockTypes: ['command'],
    officialNotes: [...shared.officialNotes, 'Nota de transcrição: os critérios oficiais trazem “Tmin = 1,5 s” no item b, mas o enunciado estabelece 15 s e o próprio cálculo oficial usa 15 s no denominador, obtendo 2 m/s. A inconsistência foi sinalizada, sem alterar a resposta oficial.'],
    parts: [
      {
        id: 'a', prompt: 'A energia cinética da mochila, em joules, se o carrossel girar completando uma volta em 20 s em movimento uniforme e a mochila não escorregar em relação ao piso do carrossel.', maxScore: 2,
        expected: 'Para $T=20$ s, $v=\\frac{2\\pi r}{T}=\\frac{2\\cdot3\\cdot5}{20}=1{,}5\\ \\mathrm{m/s}$. Assim, $E_{cin}=\\frac{mv^2}{2}=\\frac{4\\cdot1{,}5^2}{2}=\\boxed{4{,}5\\ \\mathrm J}$.',
        criteria: [
          { points: 1, text: 'Calcula a velocidade escalar da mochila: $v=1{,}5\\ \\mathrm{m/s}$.' },
          { points: 1, text: 'Calcula a energia cinética com unidade correta: $E_{cin}=4{,}5\\ \\mathrm J$.' },
        ],
      },
      {
        id: 'b', prompt: 'O coeficiente de atrito estático entre o piso do carrossel e a mochila, sabendo que o menor intervalo de tempo em que o carrossel pode completar uma volta, em movimento uniforme, sem que a mochila escorregue sobre o piso, é de 15 s.', maxScore: 2,
        expected: 'Para $T_{min}=15$ s, $v_{máx}=\\frac{2\\pi r}{T_{min}}=\\frac{30}{15}=2\\ \\mathrm{m/s}$. Na iminência de escorregar, $A_{est,máx}=R_{cp}$: $\\mu mg=\\frac{mv_{máx}^2}{r}$. Logo, $\\mu=\\frac{v_{máx}^2}{gr}=\\frac{2^2}{10\\cdot5}=\\boxed{0{,}08}$.',
        criteria: [
          { points: 1, text: 'Calcula a maior velocidade sem escorregamento: $v_{máx}=2\\ \\mathrm{m/s}$.' },
          { points: 1, text: 'Usa o atrito estático máximo como resultante centrípeta e obtém $\\mu=0{,}08$.' },
        ],
      },
    ],
    preview: 'Calcule energia cinética e coeficiente de atrito estático de uma mochila no carrossel.',
  },
];
