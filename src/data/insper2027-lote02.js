import { q, img, tex } from './insper2027-helpers.js';

export const insper2027Lote02 = [
  q({
    n: 16, subject: 'Matemática', content: 'Conjuntos e razões',
    statement: tex`Em um hotel trabalham 129 funcionários, alguns fluentes em português, outros fluentes em espanhol e os demais, em um total de 9 funcionários, são fluentes nessas duas línguas. A razão entre o número de funcionários que são fluentes apenas em português e o número de funcionários que são fluentes apenas em espanhol é igual a $\frac{3}{5}$.

A razão entre o número de funcionários fluentes em português e o número de funcionários fluentes em espanhol é igual a:`,
    alternatives: [tex`$\frac{7}{12}$`, tex`$\frac{9}{14}$`, tex`$\frac{3}{4}$`, tex`$\frac{2}{3}$`, tex`$\frac{7}{10}$`], answer: 'B',
    why: tex`Há $129-9=120$ funcionários fluentes em apenas uma língua. Como a razão é $3/5$, são 45 apenas em português e 75 apenas em espanhol. Somando os 9 bilíngues a cada grupo, obtêm-se 54 e 84; portanto, $\frac{54}{84}=\frac{9}{14}$.`,
  }),
  q({
    n: 17, subject: 'Matemática', content: 'Porcentagem', difficulty: 'Fácil',
    statement: 'Certo dia, às 18h, 92% do público esperado para o início de um espetáculo já havia chegado. Após esse horário, mais 111 pessoas chegaram, de maneira que, assim que o espetáculo começou, 98% do público esperado estava presente e mais ninguém chegou.\n\nO número de pessoas esperadas para esse espetáculo e que não compareceram foi de',
    alternatives: ['24.', '65.', '74.', '81.', '37.'], answer: 'E',
    why: 'As 111 pessoas correspondem a 98% − 92% = 6% do público esperado. Logo, o total esperado era 111 ÷ 0,06 = 1 850. Não compareceram 2%: 0,02 × 1 850 = 37 pessoas.',
  }),
  q({
    n: 18, subject: 'Matemática', content: 'Análise combinatória',
    statement: 'Seis livros, diferentes dois a dois, serão divididos entre seis alunos. Apenas um dos livros é de ficção científica e apenas um dos livros é uma biografia. Giovana quer o livro de ficção científica e Henrique não quer a biografia. O número de maneiras distintas de esses livros serem distribuídos de modo a atender as preferências de Giovana e Henrique é',
    alternatives: ['96.', '120.', '144.', '256.', '480.'], answer: 'A',
    why: 'Giovana recebe o livro de ficção científica. Restam cinco livros, dos quais Henrique pode receber qualquer um, exceto a biografia: 4 possibilidades. Os quatro livros restantes podem ser distribuídos de 4! = 24 maneiras. Assim, 4 × 24 = 96.',
  }),
  q({
    n: 19, subject: 'Matemática', content: 'Probabilidade e contagem',
    statement: tex`Uma escola tem dois terceiros anos: 3º A e 3º B. O número de alunos com 16 anos ou menos no 3º A é igual a 18 e no 3º B é igual a 20. A probabilidade de se sortear 1 aluno com mais de 16 anos no 3º A é igual a $\frac{1}{3}$. Se os alunos dessas duas turmas estiverem juntos em um auditório, a probabilidade de se sortear 1 aluno com 16 anos ou menos é igual a $\frac{2}{3}$.

O número de alunos com mais de 16 anos no 3º B é igual a`,
    alternatives: ['8.', '12.', '10.', '6.', '14.'], answer: 'C',
    why: tex`No 3º A, os 18 alunos com 16 anos ou menos representam $\frac{2}{3}$ da turma; logo, há 27 alunos no A. Entre as turmas, $18+20=38$ alunos têm 16 anos ou menos e representam $\frac{2}{3}$ do total, que é 57. O 3º B tem, portanto, $57-27=30$ alunos, dos quais $30-20=10$ têm mais de 16 anos.`,
  }),
  q({
    n: 20, subject: 'Matemática', content: 'Progressão aritmética',
    statement: 'Uma progressão aritmética possui 280 termos, sendo –5 seu menor termo e 1 111 seu maior termo. O número de termos dessa progressão que são maiores do que 1 000 é igual a',
    alternatives: ['33.', '24.', '19.', '28.', '25.'], answer: 'D',
    why: tex`A razão é $r=\frac{1\,111-(-5)}{279}=4$. O termo geral é $a_n=-5+4(n-1)$. Para $a_n>1\,000$, temos $n>252{,}25$; logo, o primeiro termo que atende é $a_{253}=1\,003$. Há $280-253+1=28$ termos.`,
  }),
  q({
    n: 21, subject: 'Matemática', content: 'Sistemas de equações', difficulty: 'Fácil',
    statement: 'No andar térreo de um edifício, dois elevadores ficam lado a lado, um deles com capacidade para 10 pessoas e o outro com capacidade para 14 pessoas. Em certa manhã, esses elevadores fizeram um total de 101 viagens de subida, cada viagem iniciando no andar térreo e transportando o número máximo de passageiros permitido. No total, 1 250 passageiros foram transportados nessas viagens, de maneira que o número de viagens feitas pelo elevador com capacidade para 10 pessoas foi igual a',
    alternatives: ['38.', '42.', '41.', '40.', '39.'], answer: 'C',
    why: tex`Se $x$ e $y$ são as viagens dos elevadores de 10 e 14 pessoas, então $x+y=101$ e $10x+14y=1\,250$. Substituindo $y=101-x$, obtém-se $10x+1\,414-14x=1\,250$, logo $x=41$.`,
  }),
  q({
    n: 22, subject: 'Matemática', content: 'Geometria analítica — equação da reta',
    statement: 'No plano cartesiano, as retas r = AB e s = AC intersectam o eixo y respectivamente nos pontos B = (0, 1) e C = (0, 7). Ambas as retas intersectam o eixo x no ponto A.',
    images: [img('q22-plano-cartesiano.svg', 'Triângulo ABC no plano cartesiano: A está sobre o eixo x, à esquerda da origem; B = (0, 1) e C = (0, 7) estão sobre o eixo y.')],
    statementAfter: 'Sabendo que a área do triângulo ABC é 27, a equação da reta r é', afterBlockTypes: ['command'],
    alternatives: [tex`$y=\frac{x+1}{9}$`, tex`$y=\frac{x+9}{9}$`, tex`$y=\frac{x+3}{9}$`, tex`$y=\frac{x+6}{9}$`, tex`$y=\frac{x+7}{9}$`], answer: 'B',
    why: tex`O segmento BC mede $7-1=6$. Como a área é 27, a distância horizontal de A ao eixo y é $\frac{2\cdot27}{6}=9$. Pela figura, $A=(-9,0)$. A reta que passa por A e B tem coeficiente angular $\frac{1-0}{0-(-9)}=\frac19$ e coeficiente linear 1; portanto, $y=\frac{x+9}{9}$.`,
  }),
  q({
    n: 23, subject: 'Matemática', content: 'Função logarítmica',
    statement: tex`Considere o gráfico que representa a função $f(x)=\log_{0{,}3}(x-1)$, em que $f(m)=2$, $f(n)=0$ e $f(p)=-2$.`,
    images: [img('q23-grafico-logaritmo.svg', 'Gráfico decrescente da função logarítmica, com f(m) = 2, f(n) = 0 e f(p) = −2.')],
    statementAfter: tex`O valor de $\frac{mn}{p}$ é igual a:`, afterBlockTypes: ['command'],
    alternatives: [tex`$\frac{27}{50}$`, tex`$\frac{27}{100}$`, tex`$\frac{9}{100}$`, tex`$\frac{27}{200}$`, tex`$\frac{9}{50}$`], answer: 'E',
    why: tex`Das igualdades dadas, $m-1=(0{,}3)^2=0{,}09$, $n-1=1$ e $p-1=(0{,}3)^{-2}=\frac{100}{9}$. Assim, $m=\frac{109}{100}$, $n=2$ e $p=\frac{109}{9}$. Logo, $\frac{mn}{p}=\frac{2\cdot109/100}{109/9}=\frac{9}{50}$.`,
  }),
  q({
    n: 24, subject: 'Matemática', content: 'Geometria plana e trigonometria',
    statement: tex`Sobre a reta que contém a diagonal AC de um retângulo ABCD está o ponto F, e sobre a reta que contém o lado AB desse retângulo está o ponto E, de maneira que $\overleftrightarrow{AB}\perp\overleftrightarrow{EF}$, conforme mostra a figura.`,
    images: [img('q24-retangulo.svg', 'Retângulo ABCD com AB = 18 cm, BE = 12 cm, F na vertical por E e A, C e F alinhados; o ângulo em A é beta.')],
    statementAfter: tex`Sabendo que $\operatorname{tg}\beta=\frac{8}{9}$, a área do triângulo BCF é`, afterBlockTypes: ['command'],
    alternatives: ['84 cm².', '108 cm².', '96 cm².', '72 cm².', '120 cm².'], answer: 'C',
    why: tex`No triângulo retângulo ABC, $\operatorname{tg}\beta=\frac{BC}{AB}=\frac{8}{9}$. Como $AB=18$, temos $BC=16$. Tomando BC como base do triângulo BCF, a altura relativa é a distância horizontal de F à reta BC, igual a $BE=12$. Portanto, a área é $\frac{16\cdot12}{2}=96\ \text{cm}^2$.`,
  }),
  q({
    n: 25, subject: 'Matemática', content: 'Circunferências tangentes', difficulty: 'Difícil',
    statement: 'Um dos lados de um retângulo mede 8 cm. Em seu interior, a circunferência λ₂ tangencia as circunferências λ₁ e λ₃. A circunferência λ₁ tangencia o retângulo em 3 pontos, a circunferência λ₃ tangencia o retângulo em 2 pontos e a circunferência λ₂ tangencia o retângulo em 1 ponto, conforme mostra a figura.',
    images: [img('q25-circunferencias.svg', 'Retângulo de altura 8 cm com três circunferências tangentes; os centros O1, O2 e O3 estão alinhados.')],
    statementAfter: 'Sabendo que o raio de λ₁ tem a mesma medida que o diâmetro de λ₂ e que o raio de λ₂ mede o dobro do raio de λ₃, o perímetro do retângulo, em cm, é igual a', afterBlockTypes: ['command'],
    alternatives: [tex`$12\sqrt{2}+26$`, tex`$16\sqrt{2}+16$`, tex`$16\sqrt{2}+12$`, tex`$12\sqrt{2}+20$`, tex`$16\sqrt{2}+20$`], answer: 'A',
    why: tex`Se $r_3=r$, então $r_2=2r$ e $r_1=4r$. A altura do retângulo é $2r_1=8r=8$, logo $r=1$. Entre O1 e O2, a distância é 6 e a diferença vertical é 2, de modo que a diferença horizontal é $\sqrt{36-4}=4\sqrt2$. Entre O2 e O3, a diferença horizontal é $\sqrt{9-1}=2\sqrt2$. A largura é $5+6\sqrt2$ e o perímetro $2(8+5+6\sqrt2)=26+12\sqrt2$.`,
  }),
  q({
    n: 26, subject: 'Matemática', content: 'Volume do prisma', difficulty: 'Fácil',
    statement: 'A base de um prisma reto é um triângulo isósceles, conforme mostra a figura.',
    images: [img('q26-prisma.svg', 'Prisma reto com base triangular isósceles de lados raiz de 40 cm, raiz de 40 cm e base de 4 cm.')],
    statementAfter: 'Seja h a altura relativa ao lado de medida 4 cm do triângulo isósceles que é base desse prisma. Se a altura desse prisma também mede h, então seu volume é', afterBlockTypes: ['command'],
    alternatives: ['64 cm³.', '72 cm³.', tex`$24\sqrt{10}\ \text{cm}^3$`, tex`$20\sqrt{10}\ \text{cm}^3$`, '78 cm³.'], answer: 'B',
    why: tex`A altura da base triangular divide o lado de 4 cm em dois segmentos de 2 cm. Por Pitágoras, $h=\sqrt{40-2^2}=6$ cm. A área da base é $\frac{4\cdot6}{2}=12\ \text{cm}^2$ e, como a altura do prisma também é 6 cm, o volume é $12\cdot6=72\ \text{cm}^3$.`,
  }),
  q({
    n: 27, subject: 'Matemática', content: 'Média aritmética e porcentagem', difficulty: 'Fácil',
    statement: 'Um edifício possui 40 salas comerciais, sendo que 18 delas são destinadas para o uso em comércio exterior e as demais são escritórios de advocacia. Considerando todos os funcionários de todas as salas desse edifício, 48% trabalham em comércio exterior e a média aritmética do número de funcionários por sala é igual a 7,5.\n\nConsiderando apenas as salas que atuam pelo comércio exterior, a média aritmética dos números de funcionários por sala é igual a',
    alternatives: ['10.', '9.', '12.', '8.', '15.'], answer: 'D',
    why: 'O edifício tem 40 × 7,5 = 300 funcionários. No comércio exterior trabalham 48% de 300 = 144 pessoas, distribuídas em 18 salas. A média é 144 ÷ 18 = 8 funcionários por sala.',
  }),
  q({
    n: 28, subject: 'Matemática', content: 'Algoritmos e sequências',
    statement: 'Em uma linguagem de programação natural, a função NumTriang(n) recebe um inteiro positivo n e retorna a soma de todos os inteiros positivos menores ou iguais a n. Por exemplo, NumTriang(4) = 4 + 3 + 2 + 1 = 10. Nessa linguagem, para aumentar o valor já armazenado em uma variável v de um valor i, usa-se o código v += i, em que v e i são quaisquer variáveis que já contenham algum valor. Por exemplo, se v = 2 e i = 5, após a execução do código v += i, o valor armazenado na variável v passará a ser 7, pois é o resultado da soma 2 + 5. De maneira análoga, para diminuir o valor já armazenado em uma variável v de um valor i, usa-se o código v -= i. Considere o seguinte código escrito nessa linguagem:',
    statementAfter: 'x = NumTriang(8)\ny = NumTriang(5)\nz = 10\nRepita 3 vezes o código entre chaves\n{\n  z += x\n  x -= y\n}\nImprima o valor de z – x\n\nO valor da subtração z – x impresso por esse programa foi',
    afterBlockTypes: ['note-box', 'command'],
    alternatives: ['82.', '64.', '70.', '51.', '77.'], answer: 'A',
    why: 'Inicialmente, x = 36, y = 15 e z = 10. Após as três repetições, os pares (z, x) são (46, 21), (67, 6) e (73, −9). O programa imprime z − x = 73 − (−9) = 82.',
  }),
  q({
    n: 29, subject: 'Matemática', content: 'Áreas em figuras planas',
    statement: 'Um quadrado ABCD tem 32 cm de perímetro. Sobre o lado BC desse quadrado está o ponto E, e o ponto M é médio do lado CD.',
    images: [img('q29-quadrado.svg', 'Quadrado ABCD de lado 8 cm, com E sobre BC, M ponto médio de CD e triângulo AME destacado.')],
    statementAfter: 'Sabendo que a medida do segmento CE excede em 4 cm a medida do segmento BE, então a área do triângulo AME é', afterBlockTypes: ['command'],
    alternatives: ['24 cm².', '36 cm².', '28 cm².', '32 cm².', '40 cm².'], answer: 'C',
    why: tex`O lado do quadrado mede 8 cm. Se $BE=x$, então $CE=x+4$ e $2x+4=8$, logo $BE=2$. Adotando $A=(0,0)$, $M=(4,8)$ e $E=(8,2)$, a área de AME é $\frac12|4\cdot2-8\cdot8|=28\ \text{cm}^2$.`,
  }),
  q({
    n: 30, subject: 'Matemática', content: 'Função quadrática — vértice',
    statement: tex`A forma canônica de uma função quadrática f pode ser expressa por: $f(x)=a\cdot(x-h)^2+k$, em que a é o coeficiente do termo de segundo grau e $V=(h,k)$ é o vértice da parábola que representa f.

Seja $f:\mathbb{R}\to\mathbb{R}$ uma função quadrática. O vértice da parábola que representa a função f coincide com a intersecção das retas r: $y=x+2$ e s: $y=-2x+5$. Sabendo que $f(6)=-7$, o valor de $f(0)$ é`,
    alternatives: ['2,1.', '2,8.', '2,4.', '2,5.', '2,6.'], answer: 'E',
    why: tex`Na intersecção das retas, $x+2=-2x+5$, logo $x=1$ e $y=3$. Assim, $f(x)=a(x-1)^2+3$. De $f(6)=-7$, segue $25a+3=-7$, portanto $a=-0{,}4$. Finalmente, $f(0)=-0{,}4(0-1)^2+3=2{,}6$.`,
  }),
];
