const PROCESS_URL = 'https://tmpfiles.org/wpANoDs5xPdc/mineiros2027.1-provaobjetiva.pdf';
const ANSWER_URL = 'https://tmpfiles.org/wNAjoAsMNXFM/mineiros2027.1-gabaritodaobjetiva.pdf';

const shared = {
  exam: 'Unifimes Mineiros', year: 2027, phase: 'Prova II', originalUrl: PROCESS_URL,
  officialAnswerUrl: ANSWER_URL, kind: 'objective', correctionOrigin: 'official',
};
const tex = String.raw;
const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');

const ENGLISH_BODY = `A continuing rise in obesity around the world is not inevitable, research suggests, with rates in some countries keeping the same level or potentially in decline. Researchers say focusing on what has been described as a global epidemic of obesity hides large variations in trends across different countries, sexes and age groups.

Majid Ezzati, a professor of global environmental health at Imperial College London and author of the study, said: “I think the thing that’s really important is this diversity exists even across countries that have really similar economic, environmental, technological features. So countries may look the same on the surface of it but obesity looks different.”

Slowdowns were often seen in children and adolescents before adults. For the former group, the slowdown started as early as 1990 in Denmark and rates stabilized in most high-income countries by the mid-2000s. Meanwhile, obesity among young people and adults in many low-income and middle-income countries continues to rise and in some cases this is accelerating.

The researchers say it is important now to analyze what is behind the trends in different countries. The situation is complex: while there may be shared reasons for obesity, such as easy access to unhealthy foods or a decrease in physical activity, the team say country-specific factors rooted in social, economic and policy considerations could also be important, from perceptions around body image to the presence or absence of interventions such as healthy school meals.`;
const englishPassage = () => ({
  statement: `Leia o texto para responder às questões de 31 a 34.\n\n${ENGLISH_BODY}\n\n(Nicola Davis. www.theguardian.com, 13.05.2026. Adaptado.)`,
  blockTypes: ['label', ...ENGLISH_BODY.split('\n\n').map(() => 'prose'), 'source'],
});

export const unifimesmineiros2027Lote04 = [
  {
    ...shared, ...englishPassage(),
    id: 'unifimesmineiros2027-prova2-q31', number: 'Questão 31', subject: 'Inglês', content: 'Reading: causas da obesidade', difficulty: 'Média',
    statementAfter: 'According to the text, obesity rates', afterBlockTypes: ['command'], preview: 'Identify what the text says about causes and variations in obesity rates.',
    alternatives: ['might be considered as stabilized in low-income countries.', 'may be stimulated by multiple reasons in different countries.', 'could be decreasing in many countries across the world.', 'should be seen as a global epidemic in high-income countries.', 'can be increasing in high-income countries such as Denmark.'], correct: 1,
    resolution: ['O último parágrafo afirma que a situação é complexa: há razões compartilhadas e fatores específicos de cada país, de natureza social, econômica e de políticas públicas. Assim, as taxas podem ser estimuladas por múltiplas causas, que variam entre países.'],
    analyses: ['Incorreta. O texto diz que a obesidade continua aumentando em muitos países de baixa e média renda.', 'Correta. O texto apresenta causas compartilhadas e fatores específicos de cada país.', 'Incorreta. A possibilidade de declínio é mencionada para alguns países, não para muitos países de forma generalizada.', 'Incorreta. O texto critica tratar a obesidade apenas como uma epidemia global homogênea, pois isso esconde variações.', 'Incorreta. A Dinamarca é citada como exemplo de desaceleração iniciada já em 1990, não de aumento atual.'],
  },
  {
    ...shared, ...englishPassage(),
    id: 'unifimesmineiros2027-prova2-q32', number: 'Questão 32', subject: 'Inglês', content: 'Vocabulário em contexto: meanwhile', difficulty: 'Fácil',
    statementAfter: `In the excerpt from the third paragraph “${underline('Meanwhile')}, obesity among young people and adults”, the underlined word can be replaced, with no change in meaning, by:`, afterBlockTypes: ['command'], preview: 'Choose a synonym for “meanwhile” in the given excerpt.',
    alternatives: ['Until now.', 'Every now and then.', 'On the contrary.', 'At the same time.', 'To sum up.'], correct: 3,
    resolution: ['“Meanwhile” significa “enquanto isso” ou “ao mesmo tempo”. No parágrafo, o conectivo introduz uma tendência simultânea à estabilização observada em muitos países ricos. A substituição equivalente é “At the same time”.'],
    analyses: ['Incorreta. “Until now” significa “até agora”.', 'Incorreta. “Every now and then” significa “de vez em quando”.', 'Incorreta. “On the contrary” significa “pelo contrário” e não marca simultaneidade.', 'Correta. “At the same time” preserva o sentido de “meanwhile”: ao mesmo tempo.', 'Incorreta. “To sum up” significa “em resumo”.'],
  },
  {
    ...shared, ...englishPassage(),
    id: 'unifimesmineiros2027-prova2-q33', number: 'Questão 33', subject: 'Inglês', content: 'Leitura e inferência: fatores culturais', difficulty: 'Média',
    statementAfter: 'De acordo com o quarto parágrafo,', afterBlockTypes: ['command'], preview: 'Interprete os fatores específicos de cada país mencionados no quarto parágrafo.',
    alternatives: ['o modo como as pessoas enxergam o corpo pode variar em diferentes países.', 'as políticas econômicas mundiais de combate à obesidade precisam ser estimuladas.', 'a ausência de refeições saudáveis nas escolas é o principal fator da obesidade.', 'a prática de atividades físicas tem contribuído para o declínio da obesidade no mundo.', 'os pesquisadores buscam encontrar uma causa frequente para a obesidade no mundo.'], correct: 0,
    resolution: ['O parágrafo cita fatores específicos de cada país, incluindo “perceptions around body image”, isto é, percepções relacionadas à imagem corporal. Infere-se que o modo de enxergar o corpo pode variar entre países.'],
    analyses: ['Correta. As percepções sobre a imagem corporal são apresentadas como fatores específicos de cada contexto nacional.', 'Incorreta. O texto não faz um apelo geral ao estímulo de políticas econômicas mundiais.', 'Incorreta. Refeições escolares saudáveis são apenas um exemplo de intervenção; não se afirma que sua ausência seja o principal fator.', 'Incorreta. A diminuição da atividade física é citada como possível causa compartilhada, não como explicação para um declínio mundial.', 'Incorreta. Os pesquisadores destacam a complexidade e a diversidade de causas, não a busca por uma única causa frequente.'],
  },
  {
    ...shared, ...englishPassage(),
    id: 'unifimesmineiros2027-prova2-q34', number: 'Questão 34', subject: 'Inglês', content: 'Modal verb: possibilidade', difficulty: 'Fácil',
    statementAfter: `In the fragment from the fourth paragraph “social, economic and policy considerations ${underline('could')} also be important”, the underlined word indicates`, afterBlockTypes: ['command'], preview: 'Identify the meaning expressed by the modal verb “could”.',
    alternatives: ['permission.', 'advice.', 'certainty.', 'command.', 'possibility.'], correct: 4,
    resolution: ['Nesse contexto, “could” introduz uma possibilidade: fatores sociais, econômicos e de políticas públicas também podem ser importantes. Não expressa certeza, ordem, conselho ou permissão.'],
    analyses: ['Incorreta. O verbo não está sendo usado para autorizar uma ação.', 'Incorreta. “Could” pode aparecer em sugestões, mas aqui não há conselho sendo dado.', 'Incorreta. A forma modal justamente evita afirmar certeza.', 'Incorreta. A frase não contém uma ordem.', 'Correta. “Could also be important” significa “também poderiam ser importantes”, expressando possibilidade.'],
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova2-q35', number: 'Questão 35', subject: 'Inglês', content: 'Referência pronominal em pôster', difficulty: 'Fácil',
    statement: 'Examine o pôster da instituição Steps to Health.', blockTypes: ['prose'],
    images: [{ src: '/images/unifimesmineiros2027/q35-poster-steps-to-health.svg?v=20261104-recursos2', alt: 'Pôster com uma mulher e uma criança preparando uma salada. Textos: “They learn from watching you” e “Eat fruits and veggies, and your kids will too”. Instituições Steps to Health e NC State Extension.' }],
    statementAfter: `No trecho do pôster “${underline('They')} learn from watching you”, o termo sublinhado refere-se`, afterBlockTypes: ['command'], preview: 'Identifique o referente do pronome “they” no pôster.',
    alternatives: ['aos universitários.', 'aos leitores.', 'às crianças.', 'às mães.', 'aos agentes de saúde.'], correct: 2,
    resolution: ['A segunda frase esclarece o referente: “Eat fruits and veggies, and your kids will too”. “They” corresponde a “your kids”, isto é, às crianças, que aprendem observando os adultos.'],
    analyses: ['Incorreta. O pôster não se refere especificamente a universitários.', 'Incorreta. Os leitores são representados por “you”, não por “they”.', 'Correta. “They” retoma “your kids”: as crianças aprendem observando o comportamento dos adultos.', 'Incorreta. A mulher ilustra o adulto observado, não o referente do pronome.', 'Incorreta. Os agentes de saúde não são mencionados no texto do pôster.'],
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova2-q36', number: 'Questão 36', subject: 'Física', content: 'Gráfico posição × tempo', difficulty: 'Média',
    statement: 'Uma máquina agrícola movimenta-se ao longo de uma estrada reta, assumindo as posições indicadas no gráfico, cujo eixo vertical representa os marcos quilométricos distribuídos ao longo da estrada e o eixo horizontal representa o tempo.', blockTypes: ['prose'],
    images: [{ src: '/images/unifimesmineiros2027/q36-grafico-maquina.svg?v=20261104-recursos2', alt: 'Gráfico posição em quilômetros versus tempo em horas. A curva passa por (0 h; 10 km), (1,5 h; 40 km), (2 h; 70 km), (3 h; 80 km), (3,5 h; 90 km) e permanece em 90 km até 4 h.' }],
    statementAfter: 'De acordo com o gráfico, a maior velocidade desenvolvida por essa máquina durante o intervalo de 4 horas foi de', afterBlockTypes: ['command'], preview: 'Calcule a velocidade no trecho de maior inclinação do gráfico.',
    alternatives: ['60 km/h.', '25 km/h.', '30 km/h.', '50 km/h.', '15 km/h.'], correct: 0,
    resolution: [tex`Em um gráfico $s\times t$, a velocidade é a inclinação de cada trecho. A maior inclinação ocorre entre $1{,}5\ \mathrm{h}$ e $2\ \mathrm{h}$, quando a posição passa de $40$ para $70\ \mathrm{km}$. Assim, $v=\frac{\Delta s}{\Delta t}=\frac{70-40}{2-1{,}5}=\frac{30}{0{,}5}=\boxed{60\ \mathrm{km/h}}$.`],
    analyses: ['Correta. O trecho mais inclinado tem Δs = 30 km e Δt = 0,5 h, logo v = 60 km/h.', 'Incorreta. Nenhum dos trechos do gráfico tem velocidade de 25 km/h.', 'Incorreta. 30 km é a variação de posição no trecho mais rápido, não a velocidade.', 'Incorreta. O cálculo do trecho mais rápido resulta em 60 km/h, não 50 km/h.', 'Incorreta. Esse valor não corresponde à inclinação máxima do gráfico.'],
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova2-q37', number: 'Questão 37', subject: 'Física', content: 'Energia mecânica e dissipação', difficulty: 'Média',
    statement: tex`Uma rocha de 800 kg, que estava em repouso no alto de uma colina, desprende-se e inicia uma queda de 50 m de altura. Enquanto a rocha cai, choca-se várias vezes com a encosta da colina, atingindo o chão com velocidade de 30 m/s.

Admitindo que a aceleração da gravidade seja de $10\ \mathrm{m/s}^2$, a quantidade de energia mecânica dissipada pela rocha no decorrer de sua descida pela encosta, até a iminência de atingir o chão, foi de`, blockTypes: ['prose', 'command'], preview: 'Compare a energia potencial inicial com a energia cinética final.',
    alternatives: ['10 kJ.', '50 kJ.', '80 kJ.', '40 kJ.', '20 kJ.'], correct: 3,
    resolution: [tex`A energia potencial inicial é $E_p=mgh=800\cdot10\cdot50=400\,000\ \mathrm{J}$. A energia cinética final é $E_c=\frac12mv^2=\frac12\cdot800\cdot30^2=360\,000\ \mathrm{J}$. Logo, a energia dissipada é $400\,000-360\,000=40\,000\ \mathrm{J}=\boxed{40\ \mathrm{kJ}}$.`],
    analyses: ['Incorreta. A diferença entre a energia inicial e a final é de 40 kJ.', 'Incorreta. 50 kJ não corresponde à energia perdida nos choques.', 'Incorreta. 80 kJ excede a diferença calculada entre as energias.', 'Correta. E dissipada = 400 kJ − 360 kJ = 40 kJ.', 'Incorreta. 20 kJ é apenas metade da energia dissipada calculada.'],
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova2-q38', number: 'Questão 38', subject: 'Física', content: 'Calorimetria: calor específico', difficulty: 'Fácil',
    statement: tex`Embora sejam de mesma natureza molecular, o gelo e a água líquida apresentam calores específicos diferentes, sendo o calor específico do gelo igual a $0{,}5\ \mathrm{cal/(g\cdot{}^\circ C)}$ e o da água líquida igual a $1{,}0\ \mathrm{cal/(g\cdot{}^\circ C)}$. Considerando massas iguais de gelo e de água líquida e que essas massas iguais não passem por mudança de fase, a quantidade de energia térmica que, absorvida pelo gelo, faz sua temperatura aumentar em $4\ ^\circ\mathrm{C}$ faria com que a temperatura da água líquida aumentasse em`, blockTypes: ['command'], preview: 'Use a mesma quantidade de calor e massas iguais para comparar os aquecimentos.',
    alternatives: ['10 °C.', '2 °C.', '8 °C.', '4 °C.', '1 °C.'], correct: 1,
    resolution: [tex`Para massas iguais, $Q=mc\Delta T$. No gelo, $Q=m\cdot0{,}5\cdot4=2m$ (em calorias, com $m$ em gramas). Na água, $2m=m\cdot1{,}0\cdot\Delta T$, logo $\Delta T=\boxed{2\ ^\circ\mathrm{C}}$.`],
    analyses: ['Incorreta. A água tem calor específico maior e, com a mesma energia, aquece menos que o gelo.', 'Correta. Como o calor específico da água é o dobro do gelo, sua variação de temperatura é a metade: 4 °C/2 = 2 °C.', 'Incorreta. 8 °C corresponderia a inverter a relação entre os calores específicos.', 'Incorreta. As variações só seriam iguais se os calores específicos fossem iguais.', 'Incorreta. A razão correta produz 2 °C, não 1 °C.'],
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova2-q39', number: 'Questão 39', subject: 'Física', content: 'Ondulatória: comprimento de onda e frequência', difficulty: 'Fácil',
    statement: 'Um trem de ondas gerado em uma corda tensionada foi representado sobre uma malha quadriculada, cujas quadrículas medem 1 m × 1 m.', blockTypes: ['prose'],
    images: [{ src: '/images/unifimesmineiros2027/q39-onda-malha.svg?v=20261104-recursos2', alt: 'Onda periódica desenhada sobre malha quadriculada. A distância horizontal entre duas cristas consecutivas corresponde a quatro quadrículas, cada uma com 1 metro de lado.' }],
    statementAfter: 'Se a velocidade de propagação de um pulso nessa corda é de 8 m/s, a frequência do trem de ondas gerado é', afterBlockTypes: ['command'], preview: 'Meça o comprimento de onda na malha e aplique v = λf.',
    alternatives: ['1 Hz.', '4 Hz.', '5 Hz.', '8 Hz.', '2 Hz.'], correct: 4,
    resolution: [tex`Entre duas cristas consecutivas há quatro quadrículas; como cada uma mede $1\ \mathrm{m}$, $\lambda=4\ \mathrm{m}$. Pela equação fundamental da ondulatória, $v=\lambda f$, tem-se $f=\frac{v}{\lambda}=\frac{8}{4}=\boxed{2\ \mathrm{Hz}}$.`],
    analyses: ['Incorreta. Essa frequência resultaria de um comprimento de onda de 8 m.', 'Incorreta. 4 Hz corresponderia a λ = 2 m, que é apenas meio comprimento de onda na figura.', 'Incorreta. O valor não satisfaz v = λf com os dados fornecidos.', 'Incorreta. 8 Hz seria obtido ao confundir a velocidade com a frequência ou ao usar λ = 1 m.', 'Correta. Com λ = 4 m e v = 8 m/s, f = 8/4 = 2 Hz.'],
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova2-q40', number: 'Questão 40', subject: 'Física', content: 'Eletrização por indução', difficulty: 'Difícil',
    statement: 'Tentando reproduzir o processo de eletrização por indução, um aluno realiza um procedimento em quatro etapas, a partir de um corpo eletricamente neutro, nomeado como induzido, e de outro eletricamente negativo, nomeado como indutor.', blockTypes: ['prose'],
    images: [{ src: '/images/unifimesmineiros2027/q40-eletrizacao-inducao.svg?v=20261104-recursos2', alt: 'Quatro etapas: 1, o indutor negativo se aproxima do induzido neutro; 2, fica próximo, sem contato; 3, o induzido é aterrado com o indutor próximo; 4, o indutor é afastado enquanto o aterramento do induzido permanece conectado.' }],
    statementAfter: 'Ao fim do procedimento, o aluno constatou que o corpo que estava eletricamente neutro, e que se desejava eletrizar, continuava eletricamente neutro. Observando-se as etapas realizadas pelo aluno, verifica-se que o erro cometido por ele foi o de', afterBlockTypes: ['command'], preview: 'Identifique o erro na sequência de aterramento e afastamento do indutor.',
    alternatives: ['impedir o estabelecimento do contato entre o corpo indutor e o corpo induzido, na etapa 2.', 'manter o aterramento do corpo induzido enquanto o corpo indutor era afastado dele, na etapa 4.', 'utilizar um corpo eletricamente neutro ao invés de um com carga oposta à do corpo indutor, na etapa 1.', 'conectar o corpo induzido ao aterramento ao invés de conectar o corpo indutor ao aterramento, na etapa 3.', 'iniciar o processo com um corpo indutor carregado eletricamente com carga negativa, na etapa 1.'], correct: 1,
    resolution: ['Na indução, depois de aproximar o indutor e aterrar o induzido, deve-se primeiro desfazer o aterramento, mantendo o indutor próximo; somente depois se afasta o indutor. O aluno manteve o aterramento durante o afastamento, permitindo que a carga adquirida escoasse e que o induzido voltasse à neutralidade.'],
    analyses: ['Incorreta. Na eletrização por indução, o indutor e o induzido não devem se tocar.', 'Correta. O aterramento deveria ser removido antes do afastamento do indutor.', 'Incorreta. O corpo a ser eletrizado por indução deve começar neutro, como no procedimento.', 'Incorreta. É justamente o induzido que deve ser aterrado nessa etapa.', 'Incorreta. Um indutor negativo é perfeitamente adequado; o resultado seria um induzido com carga positiva se a sequência correta fosse seguida.'],
  },
];
