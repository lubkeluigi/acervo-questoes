const PROCESS_URL = 'https://tmpfiles.org/wpANoDs5xPdc/mineiros2027.1-provaobjetiva.pdf';
const ANSWER_URL = 'https://tmpfiles.org/wNAjoAsMNXFM/mineiros2027.1-gabaritodaobjetiva.pdf';

const shared = {
  exam: 'Unifimes Mineiros', year: 2027, phase: 'Prova II', originalUrl: PROCESS_URL,
  officialAnswerUrl: ANSWER_URL, kind: 'objective', correctionOrigin: 'official',
};
const tex = String.raw;

export const unifimesmineiros2027Lote02 = [
  {
    ...shared,
    id: 'unifimesmineiros2027-prova2-q11', number: 'Questão 11', subject: 'Matemática', content: 'Sistema de equações', difficulty: 'Fácil',
    statement: 'O Ministério da Saúde divulgou recentemente o resultado do estudo “Demografia e Mercado de Trabalho em Enfermagem no Brasil”. Esse estudo mostrou que, no período estudado, houve um aumento total de 680 000 postos de trabalho formal para profissionais de enfermagem, nas categorias técnico e enfermeiro.\n\nSupondo que para a categoria técnico o aumento foi de 120 000 postos a mais do que para a categoria enfermeiro, o aumento de postos de trabalho formal para a categoria enfermeiro foi de', blockTypes: ['prose', 'command'], preview: 'Determine o aumento de postos para a categoria enfermeiro.',
    alternatives: ['560 000.', '340 000.', '280 000.', '520 000.', '400 000.'], correct: 2,
    resolution: [tex`Sendo $e$ o aumento para enfermeiros, o aumento para técnicos foi $e+120\,000$. Como o total foi $680\,000$, tem-se $e+(e+120\,000)=680\,000$, logo $2e=560\,000$ e $\boxed{e=280\,000}$.`],
    analyses: ['Incorreta. 560 000 é o dobro do aumento da categoria enfermeiro, não o valor pedido.', 'Incorreta. Esse valor não satisfaz simultaneamente o total e a diferença de 120 000.', 'Correta. Enfermeiro: 280 000; técnico: 400 000; a soma é 680 000 e a diferença, 120 000.', 'Incorreta. Esse valor excede o aumento obtido para a categoria enfermeiro.', 'Incorreta. 400 000 corresponde ao aumento da categoria técnico.'],
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova2-q12', number: 'Questão 12', subject: 'Matemática', content: 'Função exponencial', difficulty: 'Média',
    statement: tex`Um artista plástico produz obras, de modo que o número de peças $P$ utilizadas em seu trabalho, em função do mês $t$, é dado por $P(t)=3^t$, em que $t=1$ corresponde a janeiro, $t=2$ corresponde a fevereiro, e assim por diante. Em determinado mês, ao fazer a previsão de materiais, o artista percebeu que a soma do número de peças utilizadas nesse mês com o número de peças a serem utilizadas no mês seguinte totalizará 108 peças.

Nessas condições, o artista fez essa previsão de materiais no mês de`, blockTypes: ['prose', 'command'], preview: 'Determine o mês a partir da soma de duas produções consecutivas.',
    alternatives: ['abril.', 'maio.', 'fevereiro.', 'junho.', 'março.'], correct: 4,
    resolution: [tex`No mês $t$ e no seguinte, serão utilizadas $3^t$ e $3^{t+1}$ peças. Assim, $3^t+3^{t+1}=108$, ou $3^t(1+3)=108$. Logo, $4\cdot3^t=108$, $3^t=27=3^3$ e $t=3$. O mês é, portanto, $\boxed{\text{março}}$.`],
    analyses: ['Incorreta. Abril corresponde a t = 4, para o qual a soma seria 81 + 243 = 324.', 'Incorreta. Maio corresponde a t = 5 e produz uma soma muito superior a 108.', 'Incorreta. Em fevereiro e março, a soma seria 9 + 27 = 36.', 'Incorreta. Junho não satisfaz a equação 3ᵗ + 3ᵗ⁺¹ = 108.', 'Correta. Em março e abril, serão usadas 27 + 81 = 108 peças.'],
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova2-q13', number: 'Questão 13', subject: 'Matemática', content: 'Regra de três e vazão constante', difficulty: 'Fácil',
    statement: 'Uma bomba de infusão foi programada para administrar 500 mL de soro a cada 2 horas. Para um paciente de 60 kg, o protocolo de administração desse soro é de 10 mL/kg.\n\nSe a administração do soro pela bomba é constante, esse paciente deverá receber o soro por um tempo total de', blockTypes: ['prose', 'command'], preview: 'Calcule o tempo de infusão para o volume prescrito.',
    alternatives: ['2 horas e 44 minutos.', '2 horas e 24 minutos.', '3 horas e 24 minutos.', '2 horas e 48 minutos.', '2 horas.'], correct: 1,
    resolution: [tex`O paciente deve receber $60\cdot10=600\ \mathrm{mL}$. A vazão da bomba é $500/2=250\ \mathrm{mL/h}$. Portanto, o tempo é $600/250=2{,}4\ \mathrm{h}=2\ \mathrm{h}+0{,}4\cdot60\ \mathrm{min}=\boxed{2\ \mathrm{h}\ 24\ \mathrm{min}}$.`],
    analyses: ['Incorreta. Esse tempo não corresponde à razão entre 600 mL e 250 mL/h.', 'Correta. São necessários 600 mL; a 250 mL/h, a infusão dura 2,4 h, isto é, 2 h 24 min.', 'Incorreta. Nesse tempo, a bomba administraria mais que o volume previsto.', 'Incorreta. 2,8 h resultaria de uma conversa incorreta da parte decimal ou de outra vazão.', 'Incorreta. Em 2 horas seriam administrados apenas 500 mL.'],
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova2-q14', number: 'Questão 14', subject: 'Matemática', content: 'Combinação simples', difficulty: 'Fácil',
    statement: 'Em um hospital, uma equipe de 3 médicos ortopedistas deve ser formada para trabalhar em um plantão. O hospital conta com um grupo de 8 médicos dessa especialidade.\n\nConsiderando que o grupo tenha disponibilidade para trabalhar no plantão e que todos desempenharão a mesma função, a quantidade de maneiras distintas que a equipe pode ser formada é', blockTypes: ['prose', 'command'], preview: 'Conte as equipes de três médicos sem distinção de função.',
    alternatives: ['168.', '112.', '56.', '28.', '336.'], correct: 2,
    resolution: [tex`Como todos terão a mesma função, a ordem dos escolhidos não importa. O número de equipes é $\binom{8}{3}=\frac{8!}{3!5!}=\frac{8\cdot7\cdot6}{3\cdot2\cdot1}=\boxed{56}$.`],
    analyses: ['Incorreta. 168 é o triplo do número de combinações e não o total de equipes distintas.', 'Incorreta. 112 é o dobro do resultado correto.', 'Correta. Há C(8,3) = 56 maneiras de escolher três médicos, sem considerar a ordem.', 'Incorreta. 28 corresponde a C(8,2), isto é, a equipes de dois médicos.', 'Incorreta. 336 conta ordenações dos três escolhidos: 8 · 7 · 6.'],
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova2-q15', number: 'Questão 15', subject: 'Matemática', content: 'Volume de esfera e cilindro', difficulty: 'Média',
    statement: 'Um recipiente de laboratório é constituído por duas partes: uma esférica, de raio 6 cm, e outra cilíndrica, de raio da base 2 cm e altura 10 cm. A parte cilíndrica está acoplada à parte esférica, como mostra a figura.', blockTypes: ['prose'],
    images: [{ src: '/images/unifimesmineiros2027/q15-recipiente.svg?v=20261104-recursos2', alt: 'Recipiente formado por uma esfera de raio 6 cm acoplada a um cilindro de raio 2 cm e altura 10 cm. Figura fora de escala.' }],
    statementAfter: tex`Considere que o volume da parte esférica pode ser calculado por $V=\frac{4}{3}\pi r^3$, em que $V$ é o volume e $r$ o raio, e que $1\ \mathrm{L}=1\,000\ \mathrm{cm}^3$.

Considerando $\pi=3$, o volume do recipiente todo é de, aproximadamente,`, afterBlockTypes: ['prose', 'command'], preview: 'Some os volumes das partes esférica e cilíndrica e converta para litros.',
    alternatives: ['0,192 L.', '0,864 L.', '1,944 L.', '0,984 L.', '0,120 L.'], correct: 3,
    resolution: [tex`O volume esférico é $V_e=\frac43\pi\cdot6^3=288\pi$. O cilindro tem volume $V_c=\pi\cdot2^2\cdot10=40\pi$. Assim, $V=328\pi$. Com $\pi=3$, $V=984\ \mathrm{cm}^3=\boxed{0{,}984\ \mathrm{L}}$.`],
    analyses: ['Incorreta. Esse valor não reúne os volumes das duas partes do recipiente.', 'Incorreta. 0,864 L corresponde a usar 288π com π = 3, considerando somente a parte esférica.', 'Incorreta. Esse valor resulta de um cálculo de volume incompatível com as dimensões dadas.', 'Correta. O total é 328π cm³; com π = 3, são 984 cm³ = 0,984 L.', 'Incorreta. 0,120 L corresponde apenas a 40π cm³ com π = 3, isto é, à parte cilíndrica.'],
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova2-q16', number: 'Questão 16', subject: 'Matemática', content: 'Geometria analítica: área de triângulo', difficulty: 'Média',
    statement: tex`Os gráficos da reta $r$, de equação $y=4-x$, e da reta $s$, de equação $y=x-2$, estão representados no plano cartesiano a seguir.`, blockTypes: ['prose'],
    images: [{ src: '/images/unifimesmineiros2027/q16-grafico-retas.svg?v=20261104-recursos2', alt: 'Gráfico das retas r: y = 4 − x e s: y = x − 2. Os pontos A(0,4), B(3,1) e C(0,−2) delimitam um triângulo sombreado.' }],
    statementAfter: 'A área da região poligonal ABC, delimitada entre as retas r e s e o eixo Oy, em unidades de área, é', afterBlockTypes: ['command'], preview: 'Calcule a área do triângulo determinado pelas retas e pelo eixo y.',
    alternatives: ['6.', '9.', '3.', '12.', '18.'], correct: 1,
    resolution: [tex`Os interceptos no eixo $y$ são $A=(0,4)$ e $C=(0,-2)$, portanto $AC=6$. Na interseção, $4-x=x-2$, logo $x=3$ e $y=1$, ou seja, $B=(3,1)$. A altura em relação a $AC$ é 3. Assim, $S=\frac{6\cdot3}{2}=\boxed{9}$.`],
    analyses: ['Incorreta. 6 é a medida da base AC, não a área do triângulo.', 'Correta. A base mede 6, a altura mede 3 e a área é 6 · 3/2 = 9.', 'Incorreta. 3 é a distância horizontal de B ao eixo y, isto é, a altura do triângulo.', 'Incorreta. O valor não corresponde a metade do produto da base pela altura.', 'Incorreta. 18 é o produto 6 · 3, sem a divisão por 2 exigida na área triangular.'],
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova2-q17', number: 'Questão 17', subject: 'Matemática', content: 'Trigonometria no triângulo retângulo', difficulty: 'Fácil',
    statement: 'Uma caixa de leite no formato de prisma retangular reto sofreu uma inclinação no processo de envase. Uma representação dessa situação é mostrada na figura.', blockTypes: ['prose'],
    images: [{ src: '/images/unifimesmineiros2027/q17-caixa-leite.svg?v=20261104-recursos2', alt: 'Caixa inclinada 30 graus em relação ao plano horizontal, com lado de 14 cm e altura vertical h do nível do leite.' }],
    statementAfter: tex`Nessa situação, considerando $\sqrt3=1{,}7$, a altura $h$ do nível do leite em relação ao plano horizontal era de`, afterBlockTypes: ['command'], preview: 'Use o cosseno de 30 graus para obter a altura vertical.',
    alternatives: ['11,9 cm.', '16,5 cm.', '28,0 cm.', '7,0 cm.', '23,8 cm.'], correct: 0,
    resolution: [tex`O lado de 14 cm é a hipotenusa do triângulo retângulo cuja projeção vertical é $h$. Assim, $\cos30^\circ=\frac{h}{14}$ e $h=14\cdot\frac{\sqrt3}{2}=14\cdot\frac{1{,}7}{2}=\boxed{11{,}9\ \mathrm{cm}}$.`],
    analyses: ['Correta. h = 14 cos 30° = 14 · 1,7/2 = 11,9 cm.', 'Incorreta. Esse valor não corresponde à projeção vertical de 14 cm a 30°.', 'Incorreta. 28 cm é o dobro da medida de 14 cm e excede a própria hipotenusa.', 'Incorreta. 7 cm seria 14 sen 30°, ou seja, a projeção horizontal associada ao outro cateto.', 'Incorreta. 23,8 cm é 14 · 1,7, sem dividir por 2.'],
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova2-q18', number: 'Questão 18', subject: 'Matemática', content: 'Números triangulares', difficulty: 'Fácil',
    statement: 'Números triangulares são aqueles que podem ser representados geometricamente por meio de pontos em um triângulo equilátero. Observe, na figura, os 3 primeiros números triangulares.', blockTypes: ['prose'],
    images: [{ src: '/images/unifimesmineiros2027/q18-numeros-triangulares.svg?v=20261104-recursos2', alt: 'Os três primeiros números triangulares representados por pontos: 1, 3 e 6.' }],
    statementAfter: 'Seguindo a sequência apresentada dos 3 primeiros números triangulares, o sétimo número triangular será', afterBlockTypes: ['command'], preview: 'Determine o sétimo número triangular.',
    alternatives: ['21.', '18.', '7.', '28.', '36.'], correct: 3,
    resolution: [tex`Os acréscimos são $2,3,4,5,6,7$. A sequência é $1,3,6,10,15,21,28$; portanto, o sétimo termo é $\boxed{28}$. Equivalentemente, $T_7=\frac{7\cdot8}{2}=28$.`],
    analyses: ['Incorreta. 21 é o sexto número triangular.', 'Incorreta. 18 não pertence à sequência dos números triangulares.', 'Incorreta. 7 indica a posição do termo, não seu valor.', 'Correta. Somando 7 ao sexto termo, 21, obtém-se 28.', 'Incorreta. 36 é o oitavo número triangular.'],
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova2-q19', number: 'Questão 19', subject: 'Matemática', content: 'Porcentagem em infográfico', difficulty: 'Fácil',
    statement: 'O dia 18 de maio foi instituído no Brasil, por lei, o Dia Nacional de Combate ao Abuso e à Exploração Sexual de Crianças e Adolescentes. Os dados de um estudo que fornece um panorama nacional das notificações de violência sexual contra crianças e adolescentes, entre 2015 e 2021, foram publicados no Boletim Epidemiológico do Ministério da Saúde em 2024.', blockTypes: ['prose'],
    images: [{ src: '/images/unifimesmineiros2027/q19-infografico-violencia.svg?v=20261104-q19-vetorial1', alt: 'Infográfico com 202.831 casos notificados com sexo informado: 174.786 meninas e 28.045 meninos. Entre as meninas, 56,3% são pretas ou pardas. Fonte indicada no caderno: imagem gerada por IA, chatgpt.com.' }],
    statementAfter: 'Segundo o infográfico, qual foi o total de casos de violência sexual notificados contra meninas pretas ou pardas?', afterBlockTypes: ['command'], preview: 'Aplique o percentual de meninas pretas ou pardas ao total de casos entre meninas.',
    alternatives: ['112 371.', '114 194.', '56 300.', '13 966.', '98 405.'], correct: 4,
    resolution: [tex`O infográfico informa 174.786 casos entre meninas e $56{,}3\%$ de meninas pretas ou pardas. Assim, $174\,786\cdot0{,}563=98\,404{,}518$. Arredondando o produto para o número inteiro mais próximo, obtém-se $\boxed{98\,405}$, que corresponde à alternativa oficial E.`],
    analyses: ['Incorreta. Esse valor não corresponde a aproximadamente 56,3% de 174.786.', 'Incorreta. O total pedido é de cerca de 98,4 mil, não 114,2 mil.', 'Incorreta. 56 300 confunde o percentual 56,3% com uma contagem de casos.', 'Incorreta. 13 966 corresponde aproximadamente a 8% de 174.786, percentual de outra categoria do infográfico.', 'Correta, conforme o gabarito oficial. O produto é 98.404,518; arredondado para o inteiro mais próximo, resulta em 98.405.'],
  },
  {
    ...shared,
    id: 'unifimesmineiros2027-prova2-q20', number: 'Questão 20', subject: 'Matemática', content: 'Notação científica e razão', difficulty: 'Fácil',
    statement: tex`O coronavírus SARS-CoV-2, causador da covid-19, tem diâmetro médio de $1\times10^{-7}\ \mathrm{m}$. O vírus da influenza, causador da gripe, tem, em média, $8\times10^{-8}\ \mathrm{m}$ de diâmetro.

Comparando-se os dois vírus, a razão entre os diâmetros médios do coronavírus e do vírus da gripe é`, blockTypes: ['prose', 'command'], preview: 'Divida os diâmetros expressos em notação científica.',
    alternatives: ['8,00.', '12,50.', '1,25.', '0,12.', '0,80.'], correct: 2,
    resolution: [tex`A razão pedida é $\frac{1\times10^{-7}}{8\times10^{-8}}=\frac{10}{8}=\boxed{1{,}25}$.`],
    analyses: ['Incorreta. 8 é apenas o coeficiente do diâmetro do vírus da gripe.', 'Incorreta. A razão é 1,25, e não 12,5.', 'Correta. Como 10⁻⁷ = 10 · 10⁻⁸, a razão é 10/8 = 1,25.', 'Incorreta. Esse valor resultaria de uma inversão e aproximação indevidas da razão.', 'Incorreta. 0,80 é o inverso de 1,25, ou seja, a razão na ordem contrária.'],
  },
];
