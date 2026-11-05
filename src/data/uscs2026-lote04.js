const PROCESS_URL = 'https://tmpfiles.org/w4AQoBs7NfBj/provaobjetiva5.pdf';
const ANSWER_URL = 'https://tmpfiles.org/wZADoWsPNJCv/gabaritodaprovaobjetiva3.pdf';
const shared = {
  exam: 'USCS', year: 2026, phase: 'Prova II', originalUrl: PROCESS_URL,
  officialAnswerUrl: ANSWER_URL, kind: 'objective', correctionOrigin: 'official',
};
const tex = String.raw;
const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');
const recreatedVectors = new Set(['p2-q37-termometro.svg', 'p2-q38-espelhos.svg', 'p2-q39-pendulo-grafico.svg']);
const img = (file, alt, caption, className) => ({
  src: `/images/uscs2026/${file}?v=${recreatedVectors.has(file) ? '20261104-esquemas-vetoriais2-legibilidade' : '20261104-pdf-vector1'}`, alt,
  ...(caption ? { caption } : {}), ...(className ? { className } : {}),
});

const advertisement = {
  statement: 'Analise o anúncio criado por estudantes de um curso de publicidade para responder às questões 31 e 32.', blockTypes: ['label'],
  images: [img('p2-q31-anuncio-nescafe.svg', 'Anúncio da Nescafé com uma xícara de café vista de cima, cuja superfície forma um símbolo de yin-yang. O texto diz que adolescentes mudam de escolha todos os dias e que a Nescafé resolve esse problema para satisfazer seus altos e baixos.', '(www.adsoftheworld.com, 2019. Adaptado.)')],
};

const adolescenceReview = {
  statement: 'Leia a resenha crítica sobre a minissérie Adolescência para responder às questões de 33 a 35.\n\nAdolescence Review — The closest thing to TV perfection in decades',
  blockTypes: ['label', 'headline'],
  images: [img('p2-q33-adolescencia.svg', 'Cena da minissérie Adolescência: uma detetive sentada conversa com um adolescente em pé, em uma sala de delegacia. Crédito: Ben Blackall/Netflix.')],
  statementAfter: `The four-part series Adolescence, a drama about a teen accused of murder, is astonishing. Its brilliant performances, and the devastating questions it asks, will linger with you.

It begins with the police bursting into 14-year-old Jamie Miller’s family home and arresting him on suspicion of murdering his classmate Katie the night before. The first two episodes immerse us in the world of the police station, and the detectives’ building of the case against Jamie, although he denies involvement. He chooses his dad, Eddie, as his appropriate adult. We will watch this man’s disbelief turn over the course of the story into immeasurable sorrow. It is no spoiler to say that Jamie killed Katie — the evidence is given to us early and incontrovertibly. The drama’s concern is with why.

We are led into a teenage world that is lived primarily online and which adults are, whatever they might think, incapable of properly monitoring or understanding. Detective Luke only really begins to understand the possible “why” when his own teenage son translates the emojis used in Katie’s comments under some of Jamie’s Instagram posts. The world of “incel” culture — the message spread between boys and young men about what they are entitled to expect and to take from girls and women — comes alive.

If the final episode, which concentrates on the family’s desperate attempts to hold themselves together, feels slightly weaker, it is only in the context of what has gone before. Its refusal to offer easy solutions (no abusive parents, no dark family secrets), no clear explanation as to what leads one boy to murder and others not, feels brave and real.

Adolescence asks who and what we are teaching boys and how we expect them to navigate this increasingly toxic and impossible world when our concept of masculinity still seems to depend on boys and men doing so alone. And it keeps the victim present enough that the question of how many girls and women will die while we try to work it all out stays with us, too.

(Lucy Mangan. www.theguardian.com, 13.03.2025. Adaptado.)`,
  afterBlockTypes: ['prose', 'prose', 'prose', 'prose', 'prose', 'source'], works: ['Adolescence'],
};

export const uscs2026Lote04 = [
  {
    ...shared, ...advertisement,
    id: 'uscs2026-prova2-q31', number: 'Questão 31', subject: 'Inglês', content: 'Advertising: inferência de características', difficulty: 'Fácil',
    statementTail: 'The advertisement portrays teenagers as being', tailBlockTypes: ['command'],
    alternatives: ['understanding.', 'committed.', 'reliable.', 'stubborn.', 'moody.'], correct: 4,
    resolution: ['O anúncio afirma que adolescentes mudam de escolha todos os dias e menciona seus “ups and downs”. Isso os apresenta como moody, isto é, de humor variável.'],
    analyses: ['Incorreta. Understanding significa compreensivo, característica não atribuída aos adolescentes.', 'Incorreta. Committed significa dedicado ou comprometido.', 'Incorreta. Reliable significa confiável, o oposto da instabilidade enfatizada.', 'Incorreta. Stubborn significa teimoso; o texto destaca mudança, não resistência.', 'Correta. Moody descreve mudanças de humor, associadas às escolhas variáveis e aos altos e baixos.'],
    preview: 'Infira no anúncio a característica atribuída aos adolescentes.',
  },
  {
    ...shared, ...advertisement,
    id: 'uscs2026-prova2-q32', number: 'Questão 32', subject: 'Inglês', content: 'Vocabulário: conectivo de conclusão', difficulty: 'Fácil',
    statementTail: `In the excerpt “We know that teens change their choices everyday. ${underline('So')}, Nescafé has solved this problem”, the underlined word can be replaced, with no change in meaning, by:`, tailBlockTypes: ['command'],
    alternatives: ['Thus.', 'Notably.', 'Meanwhile.', 'Moreover.', 'Likewise.'], correct: 0,
    resolution: ['Nesse período, “So” introduz uma consequência e equivale a “Therefore” ou “Thus”: portanto, assim, desse modo.'],
    analyses: ['Correta. Thus substitui So com valor de consequência.', 'Incorreta. Notably significa notavelmente, em especial.', 'Incorreta. Meanwhile significa enquanto isso.', 'Incorreta. Moreover significa além disso, com valor de adição.', 'Incorreta. Likewise significa igualmente ou da mesma forma.'],
    preview: 'Substitua o conectivo So sem alterar a relação de consequência.',
  },
  {
    ...shared, ...adolescenceReview,
    id: 'uscs2026-prova2-q33', number: 'Questão 33', subject: 'Inglês', content: 'Adolescence: tema central da resenha', difficulty: 'Média',
    statementTail: 'De acordo com a resenha, um dos temas centrais da minissérie Adolescência é', tailBlockTypes: ['command'],
    alternatives: ['o impacto da violência policial.', 'a ação de pais abusivos.', 'o mundo da masculinidade tóxica.', 'o ensino de novas tecnologias.', 'o feminismo da era digital.'], correct: 2,
    resolution: ['A resenha discute a cultura incel, as expectativas sobre meninos e um conceito de masculinidade associado à solidão e à toxicidade. O tema central é, portanto, a masculinidade tóxica.'],
    analyses: ['Incorreta. A prisão inicia a trama, mas a resenha não centra sua análise na violência policial.', 'Incorreta. A autora ressalta justamente que a série não oferece a explicação fácil de pais abusivos.', 'Correta. A cultura incel e a crítica ao modelo de masculinidade são temas explícitos da resenha.', 'Incorreta. As tecnologias aparecem no enredo, mas não como tema de ensino.', 'Incorreta. A violência contra mulheres é discutida, mas a resenha não define a série pelo feminismo da era digital.'],
    preview: 'Identifique o tema social destacado pela resenha de Adolescência.',
  },
  {
    ...shared, ...adolescenceReview,
    id: 'uscs2026-prova2-q34', number: 'Questão 34', subject: 'Inglês', content: 'Compreensão e referenciação no texto', difficulty: 'Média',
    statementTail: 'O trecho do terceiro parágrafo “We are led into a teenage world that is lived primarily online and which adults are, whatever they might think, incapable of properly monitoring or understanding” está relacionado ao fato de que', tailBlockTypes: ['command'],
    alternatives: ['a performance dos atores é digna de ser premiada e o roteiro proporciona uma experiência profundamente comovente.', 'a ajuda que o detetive do caso recebeu de seu filho adolescente foi essencial para que as pistas sobre o crime fossem decifradas.', 'Jamie escolhe o pai como seu responsável para lhe garantir tratamento justo e auxiliar na comunicação durante sua detenção.', 'a família passa por um período de desespero e imensa tristeza quando Jamie é acusado de ter cometido homicídio.', 'a série mantém a vítima presente a ponto de fazer com que o telespectador se questione sobre a insistência do feminicídio na sociedade.'], correct: 1,
    resolution: ['Logo após afirmar que adultos não compreendem adequadamente o mundo on-line dos adolescentes, a resenha informa que o filho do detetive traduz os emojis das postagens. Essa ajuda permite compreender pistas e o possível motivo do crime.'],
    analyses: ['Incorreta. A atuação é elogiada no início, mas não explica a incomunicabilidade entre adultos e adolescentes.', 'Correta. O filho do detetive decifra os emojis e ajuda a compreender as pistas.', 'Incorreta. A escolha do pai como adulto responsável aparece em outro parágrafo e não se relaciona à compreensão do mundo on-line.', 'Incorreta. O sofrimento familiar não é o fato que ilustra a dificuldade de monitoramento on-line.', 'Incorreta. A presença da vítima pertence ao último parágrafo e não explica a tradução dos emojis.'],
    preview: 'Relacione a barreira geracional on-line à ajuda do filho do detetive.',
  },
  {
    ...shared, ...adolescenceReview,
    id: 'uscs2026-prova2-q35', number: 'Questão 35', subject: 'Inglês', content: 'Vocabulário: linger', difficulty: 'Fácil',
    statementTail: `In the excerpt from the first paragraph “the devastating questions it asks, will ${underline('linger')} with you”, the underlined term expresses the idea of`, tailBlockTypes: ['command'],
    alternatives: ['division.', 'collaboration.', 'agreement.', 'communication.', 'permanence.'], correct: 4,
    resolution: ['“Linger” significa permanecer, demorar a desaparecer. As perguntas continuarão presentes na memória do espectador; portanto, expressam permanence.'],
    analyses: ['Incorreta. Division significa divisão.', 'Incorreta. Collaboration significa colaboração.', 'Incorreta. Agreement significa concordância.', 'Incorreta. Communication significa comunicação.', 'Correta. Linger indica permanência, continuação na memória.'],
    preview: 'Reconheça o sentido de linger no contexto da resenha.',
  },
  {
    ...shared,
    id: 'uscs2026-prova2-q36', number: 'Questão 36', subject: 'Física', content: 'Movimento de rotação e avanço de parafuso', difficulty: 'Fácil',
    statement: 'Uma parafusadeira está sendo utilizada para fixar um parafuso em uma peça de madeira que já possui rosca interna, como mostra a figura. O passo da rosca desse parafuso, definido como a distância entre duas hélices consecutivas da rosca, possui o valor de 1,5 mm.', blockTypes: ['prose'],
    images: [img('p2-q36-parafusadeira.svg', 'Parafusadeira com velocidade angular de 3 rotações por segundo. O parafuso avança para a madeira e o detalhe da rosca indica passo de 1,5 mm.')],
    statementAfter: tex`Sabendo que a ponta da parafusadeira está rotacionando com velocidade angular de 3 rotações por segundo, o módulo da velocidade $\vec v$ com que o parafuso se aproxima da peça de madeira é de`, afterBlockTypes: ['command'],
    alternatives: [tex`$4{,}5\times10^{-3}\ \mathrm{m/s}$.`, tex`$4{,}5\times10^{-2}\ \mathrm{m/s}$.`, tex`$2{,}0\times10^{-3}\ \mathrm{m/s}$.`, tex`$2{,}0\times10^{-2}\ \mathrm{m/s}$.`, tex`$2{,}0\times10^{-1}\ \mathrm{m/s}$.`], correct: 0,
    resolution: [tex`A cada rotação, o parafuso avança um passo. Em 3 rotações por segundo, o avanço é $v=3\cdot1{,}5=4{,}5\ \mathrm{mm/s}=\boxed{4{,}5\times10^{-3}\ \mathrm{m/s}}$.`],
    analyses: ['Correta. Três voltas por segundo produzem avanço de 4,5 mm/s, ou 4,5 × 10⁻³ m/s.', 'Incorreta. Esse valor é dez vezes maior que o avanço calculado.', 'Incorreta. O produto da frequência pelo passo não é 2,0 mm/s.', 'Incorreta. Além do valor incorreto, a escala é inadequada.', 'Incorreta. O avanço correto é 0,0045 m/s.'],
    preview: 'Multiplique o passo da rosca pelo número de rotações por segundo.',
  },
  {
    ...shared,
    id: 'uscs2026-prova2-q37', number: 'Questão 37', subject: 'Física', content: 'Dilatação linear de lâmina bimetálica', difficulty: 'Média',
    statement: 'Alguns termômetros utilizam uma lâmina bimetálica enrolada em formato de espira. A lâmina bimetálica tem uma de suas extremidades fixada ao corpo do termômetro, enquanto na outra extremidade está preso um ponteiro, conforme a figura. Quando o termômetro é submetido a uma variação de temperatura, a diferença entre as dilatações lineares das fitas metálicas que compõem a lâmina faz com que a espira se enrole ou se desenrole.', blockTypes: ['prose'],
    images: [img('p2-q37-termometro.svg', 'Termômetro de lâmina bimetálica. Fita 1: comprimento 51,0 cm a 0 °C e coeficiente 2,0 × 10⁻⁵ °C⁻¹. Fita 2: comprimento 50,0 cm a 0 °C e coeficiente 1,2 × 10⁻⁶ °C⁻¹.')],
    statementAfter: 'Com base nas informações da figura, caso o termômetro sofra uma variação de temperatura de 0 a 100 ºC, a diferença entre as dilatações lineares das fitas metálicas 1 e 2 será de', afterBlockTypes: ['command'],
    alternatives: ['0,74 mm.', '1,18 mm.', '1,02 mm.', '0,96 mm.', '0,52 mm.'], correct: 3,
    resolution: [tex`Usando $\Delta L=L_0\alpha\Delta T$: para a fita 1, $\Delta L_1=51{,}0\cdot(2{,}0\times10^{-5})\cdot100=0{,}102$ cm $=1{,}02$ mm. Para a fita 2, $\Delta L_2=50{,}0\cdot(1{,}2\times10^{-6})\cdot100=0{,}006$ cm $=0{,}06$ mm. A diferença é $1{,}02-0{,}06=\boxed{0{,}96\ \mathrm{mm}}$.`],
    analyses: ['Incorreta. O valor não corresponde às duas dilatações calculadas.', 'Incorreta. Não se deve somar valores ou trocar os coeficientes.', 'Incorreta. 1,02 mm é apenas a dilatação da fita 1; falta subtrair a da fita 2.', 'Correta. As dilatações são 1,02 mm e 0,06 mm; a diferença é 0,96 mm.', 'Incorreta. O cálculo correto fornece 0,96 mm.'],
    preview: 'Aplique ΔL = L₀αΔT às duas fitas e subtraia as dilatações.',
  },
  {
    ...shared,
    id: 'uscs2026-prova2-q38', number: 'Questão 38', subject: 'Física', content: 'Reflexão da luz em espelhos planos', difficulty: 'Difícil',
    statement: 'Para resolver um quebra-cabeça de um jogo de videogame, o jogador precisa alinhar os espelhos planos da sala retangular representada na figura de forma que a luz proveniente de uma pequena fenda atinja, por reflexão pelos espelhos, o quadro da parede.', blockTypes: ['prose'],
    images: [img('p2-q38-espelhos.svg', 'Sala retangular com fenda e quadro na parede esquerda, espelho 1 fixo na parede superior, posições X, Y e Z para o espelho 2 na parede direita e X linha, Y linha e Z linha para o espelho 3 na parede inferior.')],
    statementAfter: 'Sabendo que o espelho 1 é fixo, que o espelho 2 pode ser colocado nas posições X, Y ou Z e que o espelho 3 pode ser colocado nas posições X’, Y’ e Z’, os locais onde os espelhos 2 e 3 devem ser colocados para que o quebra-cabeça seja resolvido são, respectivamente,', afterBlockTypes: ['command'],
    alternatives: ['Z e Y’.', 'Z e Z’.', 'X e Y’.', 'Y e Y’.', 'Y e X’.'], correct: 4,
    resolution: ['Pela lei da reflexão, o ângulo de incidência deve ser igual ao de reflexão em cada espelho. Prolongando os segmentos a partir do caminho definido pelo espelho 1, a reflexão seguinte deve ocorrer em Y; de lá, o feixe deve ser dirigido a X’ para, após nova reflexão, alcançar o quadro.'],
    analyses: ['Incorreta. A posição Z não recebe o feixe na direção necessária.', 'Incorreta. Nem Z nem Z’ completam o caminho exigido.', 'Incorreta. X desvia o feixe para uma trajetória que não alcança o quadro após Y’.', 'Incorreta. Y’ não é o ponto da parede inferior compatível com o caminho até o quadro.', 'Correta. O caminho compatível com reflexões de igual ângulo passa por Y e depois por X’.'],
    preview: 'Aplique a igualdade dos ângulos de incidência e reflexão ao trajeto.',
  },
  {
    ...shared,
    id: 'uscs2026-prova2-q39', number: 'Questão 39', subject: 'Física', content: 'Pêndulo simples e coeficiente angular', difficulty: 'Média',
    statement: tex`Para determinar a aceleração da gravidade local, $g$, pode-se utilizar um pêndulo simples com comprimento variável, $L$, e um cronômetro. O pêndulo deve ser colocado para oscilar com diferentes comprimentos e o período de oscilação, $T$, deve ser anotado para cada comprimento. Os dados de comprimento e período podem ser lançados num gráfico de $T^2$ vs. $L$, como mostra a figura.`, blockTypes: ['prose'],
    images: [img('p2-q39-pendulo-grafico.svg', 'Pêndulos de comprimentos L1 a L4 e gráfico de T ao quadrado em função de L, com quatro pontos sobre uma reta crescente que passa pela origem.', null, 'compact-image')],
    statementAfter: tex`Sabendo que a relação entre o período de oscilação e o comprimento de um pêndulo simples é dada por $T=2\pi\sqrt{\frac{L}{g}}$, o coeficiente angular da reta desse gráfico é igual a`, afterBlockTypes: ['command'],
    alternatives: [tex`$2\pi g$`, tex`$\frac{4\pi^2}{g}$`, tex`$\frac{2\pi}{g}$`, tex`$\frac{g}{4\pi^2}$`, tex`$\frac{g}{2\pi}$`], correct: 1,
    resolution: [tex`Elevando a relação ao quadrado: $T^2=4\pi^2\frac{L}{g}=\frac{4\pi^2}{g}L$. Em um gráfico de $T^2$ no eixo vertical e $L$ no horizontal, a forma é $y=ax$; logo, o coeficiente angular é $\boxed{a=\frac{4\pi^2}{g}}$.`],
    analyses: ['Incorreta. A constante não contém apenas 2π e g aparece no denominador.', 'Correta. T² = (4π²/g)L; portanto, a inclinação é 4π²/g.', 'Incorreta. Falta elevar 2π ao quadrado.', 'Incorreta. Essa é a recíproca da inclinação correta.', 'Incorreta. A relação não produz g/(2π).'],
    preview: 'Eleve o período ao quadrado e compare T² com a forma y = ax.',
  },
  {
    ...shared,
    id: 'uscs2026-prova2-q40', number: 'Questão 40', subject: 'Física', content: 'Potência elétrica e energia dissipada', difficulty: 'Média',
    statement: 'A bateria de um celular foi carregada de 0 a 100% em um período de 1 hora e 20 minutos, com o aparelho desligado, utilizando um carregador que fornece uma tensão de 10 V e corrente de 2,0 A. Considere que os únicos componentes que consumiram energia durante o processo foram aqueles que compõem o circuito de carregamento do celular. Sabendo que a energia total armazenada por essa bateria carregada em 100% é de 46 kJ e que a corrente durante o todo carregamento foi constante, a quantidade de energia dissipada nesse processo foi de', blockTypes: ['command'],
    alternatives: ['40 kJ.', '30 kJ.', '50 kJ.', '20 kJ.', '60 kJ.'], correct: 2,
    resolution: [tex`O tempo é $80$ min $=4.800$ s. A energia fornecida pelo carregador é $E=Uit=10\cdot2{,}0\cdot4.800=96.000$ J $=96$ kJ. Subtraindo os $46$ kJ armazenados, a energia dissipada é $96-46=\boxed{50\ \mathrm{kJ}}$.`],
    analyses: ['Incorreta. A diferença entre energia fornecida e armazenada não é 40 kJ.', 'Incorreta. O cálculo da energia total fornece 96 kJ.', 'Correta. Foram fornecidos 96 kJ e armazenados 46 kJ; dissiparam-se 50 kJ.', 'Incorreta. O valor não corresponde ao balanço energético.', 'Incorreta. Esse valor excede a dissipação calculada em 10 kJ.'],
    preview: 'Calcule E = UIt e subtraia a energia armazenada na bateria.',
  },
];
