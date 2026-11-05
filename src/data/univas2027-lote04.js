import { q, img, tex } from './univas2027-helpers.js';

export const univas2027Lote04 = [
  q({
    n: 46, subject: 'Física', content: 'Imagem em espelho esférico côncavo', statement: 'Quando um objeto é colocado sobre o eixo principal de um espelho esférico côncavo, entre o centro de curvatura e o foco desse espelho, a imagem conjugada desse objeto terá dimensão ______ que a do objeto, estando verticalmente em posição ______. Para que essa imagem seja vista, ela deve ser projetada sobre um anteparo, uma vez que se trata de uma imagem ______.\n\nAs lacunas do texto são preenchidas, respectivamente, por:', blockTypes: ['quote', 'command'],
    alternatives: ['maior – invertida – virtual.', 'menor – invertida – real.', 'menor – direita – virtual.', 'maior – invertida – real.', 'maior – direita – virtual.'], answer: 'D',
    why: 'Entre o centro de curvatura e o foco, o espelho côncavo forma imagem real, invertida e maior que o objeto.',
    wrong: { 0: 'Imagens reais podem ser projetadas; a imagem não é virtual.', 1: 'Nessa posição, a imagem é ampliada.', 2: 'A imagem não é menor, direita e virtual.', 3: 'A imagem é real e invertida, não direita e virtual.' },
  }),
  q({
    n: 47, subject: 'Física', content: 'Frequência e período de um movimento periódico', statement: 'Um aparelho massageador pulsa repetidamente golpes à frequência de 1 200 rpm na região a ser massageada, gerando ondas mecânicas responsáveis pelo relaxamento dos músculos.', blockTypes: ['quote'], images: [img('q47-massageador.svg', 'Aparelho massageador pulsatil.')],
    statementAfter: 'Nessas condições, cada golpe desse aparelho massageador acontece em um intervalo de tempo de', afterBlockTypes: ['command'],
    alternatives: [tex`$1\times10^{-2}\ \mathrm s$.`, tex`$6\times10^{-2}\ \mathrm s$.`, tex`$4\times10^{-2}\ \mathrm s$.`, tex`$2\times10^{-2}\ \mathrm s$.`, tex`$5\times10^{-2}\ \mathrm s$.`], answer: 'E',
    why: tex`$1200\ \mathrm{rpm}=1200/60=20\ \mathrm{Hz}$. O período é $T=1/f=1/20=\boxed{5\times10^{-2}\ \mathrm s}$.`,
    wrong: { 0: 'Isso corresponderia a 100 Hz.', 1: 'O período correto é 0,05 s, não 0,06 s.', 2: 'Isso corresponderia a 25 Hz.', 3: 'Isso corresponderia a 50 Hz.' },
  }),
  q({
    n: 48, subject: 'Física', content: 'Corrente elétrica e carga elementar', statement: 'O gráfico mostra a quantidade de elétrons, n, que passam por uma secção reta de um fio condutor em função do tempo.', blockTypes: ['label'], images: [img('q48-grafico-corrente.svg', 'Gráfico linear da quantidade de elétrons em função do tempo.')],
    statementAfter: tex`Sabendo que o valor absoluto da carga de um elétron é igual a $1{,}6\times10^{-19}\ \mathrm C$, a intensidade da corrente elétrica que passa por esse fio condutor é de`, afterBlockTypes: ['command'],
    alternatives: ['40 A.', '50 A.', '20 A.', '80 A.', '10 A.'], answer: 'D',
    why: tex`Em $2\ \mathrm s$, passam $10\times10^{20}=10^{21}$ elétrons. A carga é $Q=10^{21}\cdot1{,}6\times10^{-19}=160\ \mathrm C$ e $I=Q/t=160/2=\boxed{80\ \mathrm A}$.`,
    wrong: { 0: 'O valor 40 A corresponde a metade da corrente calculada.', 1: 'O gráfico e a carga elementar não resultam em 50 A.', 2: 'O valor 20 A subestima a carga por segundo.', 4: 'O valor 10 A não usa corretamente a potência de dez.' },
  }),
  q({
    n: 49, subject: 'Física', content: 'Associação de resistores e curto-circuito', statement: 'Dois resistores foram associados de tal modo que, por intermédio de uma chave, pode-se modificar o valor da resistência elétrica entre dois pontos, P e Q, como mostra a figura.', blockTypes: ['label'], images: [img('q49-circuito-resistores.svg', 'Resistores R1 e R2 com chave que modifica a resistência entre P e Q.')],
    statementAfter: tex`Quando a chave está na posição aberta, a resistência medida entre os pontos P e Q vale 600 Ω. No momento que a chave é fechada, a resistência entre esses pontos passa a ser de 400 Ω. Nessas condições, a resistência elétrica do resistor $R_1$ é`, afterBlockTypes: ['command'],
    alternatives: ['1 200 Ω.', '900 Ω.', '500 Ω.', '1 100 Ω.', '200 Ω.'], answer: 'E',
    why: tex`Com a chave aberta, $R_1+R_2=600\ \Omega$. Fechada, $R_1$ fica curto-circuitado e $R_2=400\ \Omega$. Portanto, $R_1=600-400=\boxed{200\ \Omega}$.`,
    wrong: { 0: 'O resistor não é obtido multiplicando as resistências.', 1: 'A soma e a diferença fornecidas não resultam em 900 Ω.', 2: 'O valor 500 Ω não satisfaz as duas medições.', 3: 'O valor 1100 Ω excede a resistência equivalente aberta.' },
  }),
  q({
    n: 50, subject: 'Física', content: 'Polaridades e interações entre ímãs', statement: tex`Os polos magnéticos de quatro ímãs em formato de barra estão definidos nos extremos das barras. Desses ímãs, apenas um tem seus polos conhecidos. Sobre os ímãs $I_1$, $I_2$ e $I_3$, não se sabe qual dos extremos é o polo Norte e qual é o polo Sul.`, blockTypes: ['quote'], images: [img('q50-imas-iniciais.svg', 'Quatro ímãs em barra, com polos conhecidos apenas no primeiro.')],
    statementAfter: tex`O ímã $I_1$ é, então, quebrado ao meio, como mostra a figura.

Em seguida, sem permitir que os ímãs tenham suas disposições alteradas, são feitas três comparações, resultando em atração magnética ou repulsão magnética.`, afterBlockTypes: ['quote', 'quote'], afterImages: [{ ...img('q50-ima-quebrado.svg', 'Ímã I1 quebrado ao meio.'), className: 'image-span-all' }, { ...img('q50-comparacoes-magneticas.svg', 'Três comparações entre ímãs com atração e repulsão.'), className: 'image-span-all' }],
    statementTail: tex`Considerando os comportamentos observados nas três comparações, as polaridades dos ímãs $I_1$, $I_2$ e $I_3$ são, respectivamente:`, tailBlockTypes: ['command'],
    alternatives: ['', '', '', '', ''], answer: 'C',
    alternativeImages: [
      [img('q50-alternativa-a.svg', 'Alternativa A: I1 N-S, I2 S-N e I3 S-N.')],
      [img('q50-alternativa-b.svg', 'Alternativa B: I1 N-S, I2 N-S e I3 N-S.')],
      [img('q50-alternativa-c.svg', 'Alternativa C: I1 N-S, I2 N-S e I3 S-N.')],
      [img('q50-alternativa-d.svg', 'Alternativa D: I1 S-N, I2 N-S e I3 N-S.')],
      [img('q50-alternativa-e.svg', 'Alternativa E: I1 S-N, I2 S-N e I3 S-N.')],
    ],
    shortAlternatives: ['I₁ N–S; I₂ S–N; I₃ S–N', 'I₁ N–S; I₂ N–S; I₃ N–S', 'I₁ N–S; I₂ N–S; I₃ S–N', 'I₁ S–N; I₂ N–S; I₃ N–S', 'I₁ S–N; I₂ S–N; I₃ S–N'],
    why: 'Polos opostos se atraem e polos iguais se repelem. As três comparações só são simultaneamente compatíveis com I₁ N–S, I₂ N–S e I₃ S–N.',
    wrong: { 0: 'A polaridade de I₂ não reproduz as interações observadas.', 1: 'A polaridade de I₃ está invertida em relação à comparação correspondente.', 3: 'A quebra de I₁ e as interações não confirmam essa sequência.', 4: 'As polaridades atribuídas a I₁ e I₂ contradizem as comparações.' },
  }),
  q({
    n: 51, subject: 'Matemática', content: 'Média aritmética com incógnitas', statement: 'A tabela mostra as notas de um grupo de cinco estudantes em determinada disciplina. As notas de Cláudia e Elisa estão representadas por X e Y, respectivamente.', blockTypes: ['label'],
    tables: [{ ariaLabel: 'Notas dos cinco estudantes', headerRows: [['Estudante', 'Ana', 'Breno', 'Cláudia', 'Douglas', 'Elisa']], rows: [['Nota', '5,5', '8', 'X', '6,5', 'Y']] }],
    statementAfter: 'Sabe-se que a média das notas de Ana, Breno e Cláudia é 7, e que a média das notas dos cinco estudantes é 7,2. A soma das notas de Cláudia e Elisa é', afterBlockTypes: ['command'],
    alternatives: ['14,5.', '16.', '14.', '15,5.', '16,5.'], answer: 'B',
    why: tex`Pela primeira média, $(5{,}5+8+X)/3=7$, logo $X=7{,}5$. Pela segunda, $(5{,}5+8+7{,}5+6{,}5+Y)/5=7{,}2$, logo $Y=8{,}5$. Assim, $X+Y=\boxed{16}$.`,
    wrong: { 0: 'O valor não satisfaz as duas médias.', 2: 'Subestima a soma em 2 pontos.', 3: 'O resultado correto é 16, não 15,5.', 4: 'O valor excede a soma calculada.' },
  }),
  q({
    n: 52, subject: 'Matemática', content: 'Vértice e valor máximo da função quadrática', statement: tex`Considere a função quadrática $f(x)=-2x^2+bx+c$, em que b e c são dois números reais. Sabendo que o maior valor atingido por essa função é 19 e que esse valor é atingido quando $x=2$, a constante c é igual a`,
    alternatives: ['13.', '12.', '11.', '10.', '14.'], answer: 'C',
    why: tex`No vértice, $x=-b/(2a)=b/4=2$, portanto $b=8$. Como $f(2)=19$, temos $-2\cdot2^2+8\cdot2+c=19$, logo $c=\boxed{11}$.`,
    wrong: { 0: 'Com c = 13, o máximo seria 21.', 1: 'Com c = 12, o máximo seria 20.', 3: 'Com c = 10, o máximo seria 18.', 4: 'Com c = 14, o máximo seria 22.' },
  }),
  q({
    n: 53, subject: 'Matemática', content: 'Probabilidade e diagrama de Venn', statement: 'Em um grupo formado por 30 estudantes universitários do curso de Medicina, verificou-se que 25 deles são assinantes de pelo menos uma plataforma de streaming de filme, 20 deles são assinantes de pelo menos uma plataforma de streaming de música, e não há estudantes que não assinem pelo menos uma plataforma de streaming de filme ou de música. Ao selecionar, aleatoriamente, um estudante desse grupo, a probabilidade de que ele assine apenas um dos dois tipos de plataforma de streaming (de filme ou de música) é:',
    alternatives: [tex`$\frac{1}{2}$`, tex`$\frac{1}{3}$`, tex`$\frac{2}{3}$`, tex`$\frac{3}{5}$`, tex`$\frac{5}{6}$`], answer: 'A',
    why: tex`A interseção tem $25+20-30=15$ estudantes. Apenas um tipo corresponde a $(25-15)+(20-15)=15$ estudantes. A probabilidade é $15/30=\boxed{1/2}$.`,
    wrong: { 1: 'O valor 1/3 não corresponde aos 15 casos favoráveis.', 2: 'O valor 2/3 excede a proporção calculada.', 3: 'O valor 3/5 corresponde a 18 estudantes.', 4: 'O valor 5/6 corresponde a 25 estudantes.' },
  }),
  q({
    n: 54, subject: 'Matemática', content: 'Altura de triângulo isósceles e teorema de Pitágoras', statement: tex`O triângulo ABC é isósceles com $\overline{AB}=\overline{BC}$ e $\overline{AB}=\frac{5}{6}\overline{AC}$.`, blockTypes: ['label'], images: [img('q54-triangulo-isosceles.svg', 'Triângulo isósceles ABC com vértice superior B e base AC.')],
    statementAfter: tex`A razão entre a altura do triângulo ABC relativa ao lado $\overline{AC}$ e a medida do lado $\overline{AC}$ é igual a:`, afterBlockTypes: ['command'],
    alternatives: [tex`$\frac{5}{6}$`, tex`$\frac{4}{5}$`, tex`$\frac{1}{2}$`, tex`$\frac{1}{4}$`, tex`$\frac{2}{3}$`], answer: 'E',
    why: tex`Faça $AC=6k$; então $AB=BC=5k$. A altura divide a base em $3k$ e, por Pitágoras, $h=\sqrt{(5k)^2-(3k)^2}=4k$. Assim, $h/AC=4k/6k=\boxed{2/3}$.`,
    wrong: { 0: '5/6 é a razão entre o lado igual e a base, não entre altura e base.', 1: 'A razão 4/5 não usa a base completa.', 2: 'A altura não é metade da base.', 3: 'A altura não é um quarto da base.' },
  }),
  q({
    n: 55, subject: 'Matemática', content: 'Volume do cilindro e vazão', statement: 'Um reservatório de água possui formato de cilindro circular reto, com raio da base igual a 4 m e altura de 6 m, conforme a figura.', blockTypes: ['label'], images: [img('q55-cilindro-reservatorio.svg', 'Cilindro circular reto de raio 4 m e altura 6 m.')],
    statementAfter: tex`Esse reservatório será abastecido a uma taxa de 8 000 litros de água por dia. Utilizando a aproximação de $\pi=3$ e considerando que em 1 m³ cabem 1 000 litros de água, a quantidade de dias necessários para que o reservatório seja completamente preenchido é`, afterBlockTypes: ['command'],
    alternatives: ['36.', '22.', '26.', '29.', '31.'], answer: 'A',
    why: tex`O volume é $V=\pi r^2h=3\cdot4^2\cdot6=288\ \mathrm{m^3}=288000\ \mathrm L$. A taxa de 8000 L/dia fornece $288000/8000=\boxed{36\ \mathrm{dias}}$.`,
    wrong: { 1: 'O valor subestima o volume do cilindro.', 2: 'A divisão pelo volume correto não resulta em 26 dias.', 3: 'O valor não corresponde a 288 000 litros.', 4: 'Ainda faltariam dias para completar o reservatório.' },
  }),
];
