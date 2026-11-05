const PROCESS_URL = 'https://tmpfiles.org/wwAsoTsXxAJi/unisul2027-provaobjetiva.pdf';
const ANSWER_URL = 'https://tmpfiles.org/wkABoSsaNGju/unisul2027-gabaritodaprovaobjetiva.pdf';
const shared = {
  exam: 'Unisul', year: 2027, phase: 'Prova II', originalUrl: PROCESS_URL,
  officialAnswerUrl: ANSWER_URL, kind: 'objective', correctionOrigin: 'official',
};
const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');
const tex = String.raw;

const ENGLISH_TEXT = `Leia o texto para responder às questões de 31 a 33.

New York City Department of Transportation (NYC DOT) Commissioner Ydanis Rodriguez announced on November 17, 2025, the launch of a public awareness campaign. The powerful new advertisements feature the tagline: “One Choice Can Change Everything. You Can’t Rewind a Crash.” The ads show individuals choosing to engage in dangerous driving behavior that result in deadly consequences, stressing that in real life you can’t rewind a crash. The primary TV ad features a speeding driver who elects to run a red light, crashing into a mother and her young child as they step into a crosswalk.

“Crashes often are a result of a small decision that end with life altering consequences for everyone involved — and these powerful new Vision Zero¹ advertisements remind drivers that one choice can change everything — you can’t rewind a crash,” said NYC DOT Commissioner Ydanis Rodriguez. “Beginning today, these ads will allow New Yorkers to see for themselves the horrible aftermath of dangerous driving — and seek to motivate New Yorkers to make safer driving choices to help prevent crashes before they occur.”

The campaign, which launches with an initial investment of $3 million, is designed to connect critical messaging to newer audiences, including harder-to-reach demographic groups — among them, male drivers. According to the National Highway Traffic Safety Administration (NHTSA), male drivers are 37 percent more likely than females to be behind the wheel in serious motor vehicle crashes.

¹ Vision Zero: a citywide safety program.

(www.nyc.gov, 17.11.2025. Adaptado.)`;
const ENGLISH_BLOCKS = ['label', 'prose', 'prose', 'prose', 'note', 'source'];
const englishQuestion = (command) => ({ statement: `${ENGLISH_TEXT}\n\n${command}`, blockTypes: [...ENGLISH_BLOCKS, 'command'], preview: command });

const garfield = {
  statement: 'Leia a tirinha de Jim Davis para responder às questões 34 e 35.', blockTypes: ['label'],
  images: [{ src: '/images/unisul2027/q34-garfield.svg', alt: 'Tirinha de Garfield: no primeiro quadrinho, o gato pede TV mais informativa e intelectualmente estimulante; no segundo, promete criar um movimento por programação socialmente consciente; no terceiro, adia o movimento para assistir a um programa fútil.', caption: '(Garfield weighs in, 2012.)' }],
};

export const unisul2027Lote04 = [
  {
    ...shared, ...englishQuestion('According to the text, the public awareness campaign launched by the NYC DOT aims to'),
    id: 'unisul2027-prova2-q31', number: 'Questão 31', subject: 'Inglês', content: 'Compreensão de texto: campanha de segurança no trânsito', difficulty: 'Fácil',
    alternatives: ['encourage drivers to adopt more responsible behavior behind the wheel during their journeys.', 'mandate stricter legal penalties for individuals who run red lights in crosswalks.', 'reduce motor vehicle speed limits and traffic congestion in New York City.', 'convince newer audiences that television advertisements can accurately simulate real life.', 'target male drivers because they represent the entire percentage of citywide road accidents.'], correct: 0,
    resolution: ['A campanha usa anúncios para alertar sobre as consequências de escolhas perigosas e motivar decisões mais seguras. Seu objetivo é estimular comportamento mais responsável dos motoristas.'],
    analyses: ['Correta. O texto diz que os anúncios buscam motivar escolhas mais seguras e prevenir acidentes.', 'Incorreta. Não se anunciam novas penas legais.', 'Incorreta. O texto não menciona redução de limites de velocidade ou do congestionamento.', 'Incorreta. A campanha mostra consequências, mas não pretende provar que anúncios simulam a vida real.', 'Incorreta. Motoristas do sexo masculino são público relevante, mas não representam 100% dos acidentes.'],
  },
  {
    ...shared, ...englishQuestion('The excerpt from the text that highlights a perilous decision is:'),
    id: 'unisul2027-prova2-q32', number: 'Questão 32', subject: 'Inglês', content: 'Identificação de informação no texto', difficulty: 'Fácil',
    alternatives: ['“The campaign, which launches with an initial investment of $3 million, is designed to connect critical messaging to newer audiences” (3rd paragraph).', '“Commissioner Ydanis Rodriguez announced on November 17, 2025, the launch of a public awareness campaign” (1st paragraph).', '“a speeding driver who elects to run a red light, crashing into a mother and her young child” (1st paragraph).', '“including harder-to-reach demographic groups — among them, male drivers” (3rd paragraph).', '“The powerful new advertisements feature the tagline: ‘One Choice Can Change Everything’” (1st paragraph).'], correct: 2,
    resolution: ['A decisão perigosa é descrita como a do motorista em alta velocidade que escolhe avançar o sinal vermelho e atinge uma mãe e sua criança.'],
    analyses: ['Incorreta. O trecho informa investimento e público da campanha.', 'Incorreta. O trecho apenas anuncia o lançamento da campanha.', 'Correta. Avançar deliberadamente o sinal vermelho em alta velocidade é a decisão perigosa.', 'Incorreta. O trecho identifica um grupo demográfico, não uma decisão de direção.', 'Incorreta. O slogan resume a campanha, mas não descreve a decisão perigosa.'],
  },
  {
    ...shared, ...englishQuestion(`In the excerpt from the third paragraph “male drivers are 37 percent more ${underline('likely')} than females to be behind the wheel”, the underlined word conveys the idea of`),
    id: 'unisul2027-prova2-q33', number: 'Questão 33', subject: 'Inglês', content: 'Vocabulário em contexto: likely', difficulty: 'Fácil',
    alternatives: ['certainty.', 'probability.', 'capability.', 'obligation.', 'preference.'], correct: 1,
    resolution: ['Nesse contexto, “likely” significa “provável”. A frase compara a probabilidade de homens e mulheres estarem ao volante em acidentes graves.'],
    analyses: ['Incorreta. A comparação estatística não expressa certeza absoluta.', 'Correta. “Likely” expressa probabilidade.', 'Incorreta. A palavra não se refere à capacidade de dirigir.', 'Incorreta. Não há ideia de obrigação.', 'Incorreta. A frase não trata de preferência dos motoristas.'],
  },
  {
    ...shared, ...garfield,
    id: 'unisul2027-prova2-q34', number: 'Questão 34', subject: 'Inglês', content: 'Interpretação de tirinha e ironia', difficulty: 'Fácil',
    statementAfter: `¹ Sandra Dee: an American actress who starred in films that were designed purely for teenage entertainment in the 1960s.

A ironia da tirinha é construída, principalmente, pelo contraste direto entre o discurso do primeiro quadrinho e a atitude do gato, que`, afterBlockTypes: ['note', 'command'], preview: 'Explique a ironia entre o discurso e a atitude de Garfield.',
    alternatives: ['quer realizar uma revolução cultural sem sair da poltrona.', 'dá preferência a programas de TV informativos.', 'aponta o dedo para a antena do aparelho de TV.', 'decide assistir a um conteúdo alienante.', 'permanece olhando fixamente para a TV.'], correct: 3,
    resolution: ['Garfield defende programação mais informativa e estimulante, mas adia seu suposto movimento para assistir a “The beach creature annoys Sandra Dee”, um conteúdo fútil. A ironia está na contradição entre o discurso e a escolha de assistir a esse programa.'],
    analyses: ['Incorreta. A poltrona aparece no contexto, mas a oposição principal é entre exigir qualidade e escolher um programa fútil.', 'Incorreta. O gato escolhe justamente um programa que não é informativo.', 'Incorreta. Apontar para a antena não constrói a ironia central.', 'Correta. A decisão de assistir ao conteúdo alienante contradiz o discurso do primeiro quadrinho.', 'Incorreta. Olhar para a TV, isoladamente, não explica o contraste irônico.'],
  },
  {
    ...shared, ...garfield,
    id: 'unisul2027-prova2-q35', number: 'Questão 35', subject: 'Inglês', content: 'Relações semânticas: as soon as', difficulty: 'Fácil',
    statementAfter: `¹ Sandra Dee: an American actress who starred in films that were designed purely for teenage entertainment in the 1960s.

Na frase do terceiro quadrinho “Just ${underline('as soon as')} I’m finished watching ‘The beach creature annoys Sandra Dee’”, a expressão sublinhada é usada, nesse contexto, para indicar`, afterBlockTypes: ['note', 'command'], preview: 'Identifique o valor semântico de “as soon as” na tirinha.',
    alternatives: ['finalidade.', 'adição.', 'comparação.', 'ênfase.', 'tempo.'], correct: 4,
    resolution: ['“As soon as” significa “assim que” e introduz uma relação temporal: o movimento começará assim que Garfield terminar de assistir ao programa.'],
    analyses: ['Incorreta. A expressão não apresenta a finalidade da ação.', 'Incorreta. Não há adição de ideias.', 'Incorreta. Apesar de “as”, a construção não estabelece comparação.', 'Incorreta. “Just” reforça a expressão, mas “as soon as” indica tempo.', 'Correta. “As soon as” equivale a “assim que” e marca relação temporal.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q36', number: 'Questão 36', subject: 'Física', content: 'Velocidade escalar média e encontro', difficulty: 'Fácil',
    statement: 'O aplicativo de transporte público informa a um usuário que o próximo ônibus está a 3,0 km do ponto de embarque onde esse usuário deseja embarcar. Sabendo que a velocidade escalar média do ônibus no trajeto até o ponto de embarque é de 24 km/h e que o usuário se encontra a 750 m desse ponto, a velocidade escalar média com que esse usuário deverá caminhar para chegar ao ponto de embarque no mesmo instante que o ônibus é de', blockTypes: ['prose'], preview: 'Calcule a velocidade do usuário para chegar junto com o ônibus.',
    alternatives: ['10 km/h.', '4 km/h.', '2 km/h.', '8 km/h.', '6 km/h.'], correct: 4,
    resolution: [tex`O ônibus chega em $t=\frac{3{,}0}{24}=0{,}125\ \mathrm h$. O usuário percorre $750\ \mathrm m=0{,}75\ \mathrm{km}$ no mesmo tempo; logo, $v=\frac{0{,}75}{0{,}125}=\boxed{6\ \mathrm{km/h}}$.`],
    analyses: ['Incorreta. Com essa velocidade, o usuário chegaria antes do ônibus.', 'Incorreta. A razão correta entre 0,75 km e 0,125 h é 6 km/h.', 'Incorreta. O usuário precisa andar mais rápido que 2 km/h.', 'Incorreta. Oito quilômetros por hora não corresponde à razão entre distância e tempo.', 'Correta. O tempo comum é 0,125 h e 0,75/0,125 = 6 km/h.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q37', number: 'Questão 37', subject: 'Física', content: 'Transformação isotérmica de gás ideal', difficulty: 'Fácil',
    statement: 'Uma bisnaga de mel está parcialmente preenchida com ar a 1,00 atm, conforme a figura 1. Devido à alta viscosidade do mel, uma pessoa precisa comprimir a bisnaga a fim de extrair o mel de seu interior, conforme a figura 2.', blockTypes: ['prose'],
    images: [{ src: '/images/unisul2027/q37-bisnaga-mel.svg', alt: 'Duas bisnagas de mel: na figura 1, ar a 1,00 atm sobre o mel; na figura 2, a bisnaga comprimida tem menor volume de ar.' }],
    statementAfter: 'Considere que o ar se comporte como um gás ideal e que não houve alteração de temperatura. Sabendo que, no instante representado na figura 2, o volume do ar no interior da bisnaga reduziu 20% em relação ao seu volume inicial, a pressão do ar no interior da bisnaga comprimida é de', afterBlockTypes: ['command'], preview: 'Aplique a lei de Boyle à compressão do ar.',
    alternatives: ['1,25 atm.', '1,30 atm.', '1,20 atm.', '1,35 atm.', '1,40 atm.'], correct: 0,
    resolution: [tex`Em uma transformação isotérmica, $P_1V_1=P_2V_2$. Como o volume final é $V_2=0{,}80V_1$, tem-se $P_2=\frac{1{,}00V_1}{0{,}80V_1}=\boxed{1{,}25\ \mathrm{atm}}$.`],
    analyses: ['Correta. Pela lei de Boyle, a pressão final é 1,00/0,80 = 1,25 atm.', 'Incorreta. A pressão não aumenta por uma simples soma de 0,30 atm.', 'Incorreta. O aumento de pressão não é de 20%; é o inverso do fator de volume.', 'Incorreta. Esse valor não satisfaz P₁V₁ = P₂V₂.', 'Incorreta. A pressão calculada é 1,25 atm.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q38', number: 'Questão 38', subject: 'Física', content: 'Reflexão em espelho plano', difficulty: 'Difícil',
    statement: 'Uma pessoa, do interior de uma sala, observa algumas palmeiras através de uma vidraça plana de espessura desprezível, como mostra a figura. Ainda no interior dessa sala, há uma luminária acesa, cuja luz é parcialmente refletida pela face interna da vidraça e chega até os olhos da pessoa.', blockTypes: ['prose'],
    images: [{ src: '/images/unisul2027/q38-vidraca-palmeiras.svg?v=20261104-vet1', alt: 'Esquema com cinco palmeiras numeradas, uma vidraça entre trechos de parede, uma luminária e uma pessoa no interior da sala.' }],
    statementAfter: 'Considerando que os olhos da pessoa, a luminária e as copas das palmeiras estejam sobre o mesmo plano horizontal, a pessoa observará o reflexo da luminária sobreposto à copa da palmeira', afterBlockTypes: ['command'], preview: 'Determine a palmeira alinhada ao reflexo da luminária.',
    alternatives: ['2.', '3.', '1.', '4.', '5.'], correct: 1,
    resolution: ['Na reflexão da vidraça plana, a imagem virtual da luminária é simétrica em relação ao plano do vidro. Traçando a reta dessa imagem virtual aos olhos da pessoa e prolongando o alinhamento para o exterior, a copa correspondente é a da palmeira 3.'],
    analyses: ['Incorreta. O alinhamento da imagem virtual com os olhos não passa pela palmeira 2.', 'Correta. A construção por simetria da imagem na superfície plana leva à palmeira 3.', 'Incorreta. A palmeira 1 fica fora do alinhamento do reflexo.', 'Incorreta. A posição 4 não corresponde ao alinhamento formado.', 'Incorreta. A palmeira 5 não é interceptada pela direção do reflexo.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q39', number: 'Questão 39', subject: 'Física', content: 'Frequência e comprimento de onda', difficulty: 'Média',
    statement: 'Uma pessoa caminha por um calçadão cujo piso é decorado com ondulações formadas pela união entre vários blocos quadrados de 20 cm x 20 cm, como mostra a figura.', blockTypes: ['prose'],
    images: [{ src: '/images/unisul2027/q39-calcadao.svg', alt: 'Piso de ondulações português com blocos de 20 cm, uma pessoa caminhando a 1,2 m/s e setas indicando os sentidos relativos.' }],
    statementAfter: 'No referencial dessa pessoa, ela enxerga as ondas do calçadão se propagando no sentido contrário ao sentido em que ela caminha. Sabendo que essa pessoa caminha com velocidade constante de 1,20 m/s, a frequência associada às ondas do calçadão que é percebida por essa pessoa é de', afterBlockTypes: ['command'], preview: 'Calcule a frequência das ondas percebidas no referencial da pessoa.',
    alternatives: ['12,5 Hz.', '7,2 Hz.', '9,0 Hz.', '3,0 Hz.', '5,5 Hz.'], correct: 3,
    resolution: [tex`O padrão ondulado se repete a cada dois blocos, portanto $\lambda=2\cdot20\ \mathrm{cm}=40\ \mathrm{cm}=0{,}40\ \mathrm m$. No referencial da pessoa, a velocidade relativa tem módulo $1{,}20\ \mathrm{m/s}$ e $f=\frac{v}{\lambda}=\frac{1{,}20}{0{,}40}=\boxed{3{,}0\ \mathrm{Hz}}$.`],
    analyses: ['Incorreta. Esse valor decorre de usar um comprimento de onda incompatível com o padrão.', 'Incorreta. Sete vírgula dois hertz não corresponde a 1,20/0,40.', 'Incorreta. Nove hertz resultaria de comprimento de onda diferente do indicado.', 'Correta. Como λ = 0,40 m, f = 1,20/0,40 = 3,0 Hz.', 'Incorreta. A frequência obtida da relação fundamental é 3,0 Hz.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q40', number: 'Questão 40', subject: 'Física', content: 'Lei de Ohm e proteção por fusível', difficulty: 'Fácil',
    statement: 'Fusíveis são dispositivos de resistência elétrica desprezível, projetados para se romperem quando correntes demasiadamente elevadas tendem a se estabelecer em um circuito, danificando seus componentes. Em um automóvel, por exemplo, um fusível capaz de suportar correntes de até 15 A é utilizado no circuito composto pela buzina e pela bateria, conforme a figura.', blockTypes: ['prose'],
    images: [{ src: '/images/unisul2027/q40-circuito-buzina.svg', alt: 'Circuito de automóvel com bateria de 12 V, buzina, fusível de 15 A e interruptor no volante.' }],
    statementAfter: 'Considerando a bateria desse automóvel como uma fonte ideal de 12 V, a resistência mínima que o circuito da buzina deve possuir para que o fusível não se rompa quando ela for acionada é de', afterBlockTypes: ['command'], preview: 'Calcule a resistência mínima para limitar a corrente ao valor do fusível.',
    alternatives: [tex`$2{,}0\ \Omega$.`, tex`$3{,}2\ \Omega$.`, tex`$2{,}6\ \Omega$.`, tex`$1{,}4\ \Omega$.`, tex`$0{,}8\ \Omega$.`], correct: 4,
    resolution: [tex`Pela lei de Ohm, $R=U/I$. Para que a corrente não ultrapasse 15 A com uma bateria ideal de 12 V, a menor resistência admissível é $R_{\min}=\frac{12}{15}=\boxed{0{,}8\ \Omega}$.`],
    analyses: ['Incorreta. Com 2,0 Ω, a corrente seria 6 A, mas a resistência mínima possível é menor.', 'Incorreta. Esse valor não corresponde ao limite calculado pela lei de Ohm.', 'Incorreta. A razão correta é 12/15 = 0,8 Ω.', 'Incorreta. A resistência mínima é 0,8 Ω.', 'Correta. Doze volts divididos por 15 A fornecem 0,8 Ω.'],
  },
];
