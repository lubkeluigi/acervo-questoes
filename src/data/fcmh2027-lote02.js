import { q, img, tex } from './fcmh2027-helpers.js';

export const fcmh2027Lote02 = [
  q({
    n: 11, subject: 'Matemática', content: 'Razão e sistema de equações', statement: tex`No início de uma festa infantil, a razão entre o número de crianças e o de adultos era, nessa ordem, igual a $\frac{4}{3}$. Após a chegada de mais 10 crianças e 5 adultos à festa, essa razão passou a ser $\frac{3}{2}$. O número total de pessoas que estavam presentes no início dessa festa era`,
    alternatives: ['40.', '30.', '45.', '25.', '35.'], answer: 'E',
    why: tex`Sejam $4k$ crianças e $3k$ adultos. Depois das chegadas, $\frac{4k+10}{3k+5}=\frac32$, logo $8k+20=9k+15$ e $k=5$. No início havia $7k=35$ pessoas.`,
    wrong: { 0: 'O total inicial é 35; 40 não satisfaz simultaneamente as duas razões.', 1: 'Com 30 pessoas iniciais, a razão final não seria 3/2.', 2: '45 corresponderia a um valor diferente de k e não atende às chegadas indicadas.', 3: '25 pessoas não permitem obter a razão final informada com os acréscimos dados.' },
  }),
  q({
    n: 12, subject: 'Matemática', content: 'Porcentagem e composição de liga metálica', difficulty: 'Fácil', statement: 'Uma liga metálica de 250 g é constituída por 40% de ouro e 60% de prata. Um joalheiro quer diminuir o percentual de ouro nessa liga, sem alterar a massa de ouro já existente. A quantidade de prata que deve ser acrescentada a essa liga para que o percentual de ouro seja reduzido a 20% corresponde a',
    alternatives: ['450 g.', '350 g.', '300 g.', '200 g.', '250 g.'], answer: 'E',
    why: tex`A liga contém $0{,}40\cdot250=100$ g de ouro. Para que esses 100 g representem 20% da nova massa, a massa total deve ser $100/0{,}20=500$ g. Como a massa inicial era 250 g, devem ser acrescentados $\boxed{250\text{ g}}$ de prata.`,
    wrong: { 0: 'Acrescentar 450 g levaria a massa total a 700 g e o ouro a cerca de 14,3%.', 1: 'Com 350 g de prata adicionada, o percentual de ouro seria 100/600, e não 20%.', 2: 'A adição de 300 g resultaria em 18,18% de ouro.', 3: 'Com 200 g adicionados, o ouro representaria 100/450 da liga, acima de 20%.' },
  }),
  q({
    n: 13, subject: 'Matemática', content: 'Probabilidade sem reposição e combinatória', statement: 'Uma urna contém 10 bolas, sendo 5 bolas verdes, numeradas de 1 a 5, e 5 bolas azuis, numeradas de 6 a 10. Todas essas bolas têm a mesma chance de serem sorteadas.', images: [img('q13-bolas-urna.svg', 'Urna com cinco bolas verdes numeradas de 1 a 5 e cinco bolas azuis numeradas de 6 a 10.')],
    statementAfter: 'A probabilidade de se retirar, aleatoriamente, sem reposição, 2 bolas com números pares e mesma cor é igual a:', afterBlockTypes: ['command'],
    alternatives: [tex`$\frac{2}{15}$`, tex`$\frac19$`, tex`$\frac1{15}$`, tex`$\frac4{45}$`, tex`$\frac7{45}$`], answer: 'D',
    why: tex`Há $\binom{10}{2}=45$ pares equiprováveis. Os pares pares da mesma cor são $\binom22=1$ entre as verdes 2 e 4 e $\binom32=3$ entre as azuis 6, 8 e 10. Assim, $P=\frac{1+3}{45}=\boxed{\frac4{45}}$.`,
    wrong: { 0: '2/15 equivale a 6/45 e contabiliza casos além dos quatro pares favoráveis.', 1: '1/9 equivale a 5/45; há quatro pares favoráveis, não cinco.', 2: '1/15 equivale a 3/45 e considera apenas os pares azuis.', 4: '7/45 superestima os pares que têm simultaneamente número par e mesma cor.' },
  }),
  q({
    n: 14, subject: 'Matemática', content: 'Média, moda e mediana em gráfico', statement: 'Um professor de estatística apresentou a seus alunos um gráfico referente à precipitação volumétrica (mm) ocorrida nos primeiros 6 meses do ano em determinada região do país.', images: [img('q14-grafico-precipitacao.svg', 'Gráfico de precipitação: janeiro 160 mm; fevereiro 190 mm; março 220 mm; abril 190 mm; maio 220 mm; junho 220 mm.')],
    statementAfter: 'Após analisarem os dados apresentados no gráfico, os estudantes calcularam a média aritmética, a moda e a mediana desses valores e concluíram que:', afterBlockTypes: ['command'],
    alternatives: ['moda > mediana > média.', 'moda > média = mediana.', 'mediana > média > moda.', 'moda > média > mediana.', 'mediana > média = moda.'], answer: 'A',
    why: tex`Os valores são 160, 190, 190, 220, 220 e 220. A moda é 220; a mediana é $(190+220)/2=205$; e a média é $1200/6=200$. Portanto, $\boxed{\text{moda}>\text{mediana}>\text{média}}$.`,
    wrong: { 1: 'A média é 200 e a mediana é 205, portanto não são iguais.', 2: 'A moda, 220, é a maior das três medidas.', 3: 'A mediana, 205, supera a média, 200.', 4: 'A moda é 220, enquanto a média é 200; elas não são iguais.' },
  }),
  q({
    n: 15, subject: 'Matemática', content: 'Anagramas com letra repetida', statement: 'O número de anagramas da palavra HUMANITAS que terminam com as letras AS, nessa ordem, é',
    alternatives: ['2 520.', '5 040.', '720.', '360.', '120.'], answer: 'B',
    why: tex`Fixando o final AS, restam as sete letras H, U, M, A, N, I e T, todas distintas, para ocupar as sete primeiras posições. O número de possibilidades é $7!=\boxed{5\,040}$.`,
    wrong: { 0: '2 520 corresponde a 7!/2 e aplicaria indevidamente uma segunda repetição de A depois de fixar o final.', 2: '720 é 6!, mas há sete letras restantes para permutar.', 3: '360 não corresponde ao número de permutações das sete letras restantes.', 4: '120 é 5! e desconsidera duas posições.' },
  }),
  q({
    n: 16, subject: 'Matemática', content: 'Geometria espacial: distâncias e ângulos', statement: tex`Os segmentos $\overline{AB}$ e $\overline{BC}$ são perpendiculares em B e estão contidos no plano $\alpha$. O segmento $\overline{CD}$ é perpendicular a $\alpha$ e as medidas de AB, BC e CD são, respectivamente, iguais a 9 cm, 12 cm e 8 cm, conforme mostra a figura.`, images: [img('q16-geometria-espacial.svg', 'AB mede 9 cm, BC mede 12 cm e CD mede 8 cm; CD é perpendicular ao plano alfa.')],
    statementAfter: tex`O cosseno do ângulo $D\hat{A}C$ é igual a:`, afterBlockTypes: ['command'],
    alternatives: [tex`$\frac34$`, tex`$\frac35$`, tex`$\frac8{17}$`, tex`$\frac8{15}$`, tex`$\frac{15}{17}$`], answer: 'E',
    why: tex`No triângulo retângulo ABC, $AC=\sqrt{9^2+12^2}=15$. Como CD é perpendicular ao plano, o triângulo ACD é retângulo em C e $AD=\sqrt{15^2+8^2}=17$. Logo, $\cos(D\hat{A}C)=AC/AD=\boxed{15/17}$.`,
    wrong: { 0: '3/4 não relaciona os lados do triângulo retângulo ACD.', 1: '3/5 usa uma razão que não corresponde ao cosseno pedido.', 2: '8/17 é a razão CD/AD, associada ao seno do ângulo pedido.', 3: '8/15 relaciona CD e AC, não o lado adjacente à hipotenusa.' },
  }),
  q({
    n: 17, subject: 'Matemática', content: 'Função quadrática: vértice da parábola e função linear', statement: tex`Sejam as funções reais definidas por $f(x)=x^2-30x+200$ e $g(x)=kx$, $k\in\mathbb{R}$. Os gráficos das funções f e g se intersectam em V, vértice da parábola definida por f, como mostra a figura.`, images: [img('q17-grafico-parabola-reta.svg', 'Parábola de f e reta g que se intersectam no vértice V.')],
    statementAfter: 'Nessas condições, o valor de k é:', afterBlockTypes: ['command'],
    alternatives: [tex`$-\frac35$`, tex`$-\frac43$`, tex`$-\frac53$`, tex`$\frac53$`, tex`$\frac35$`], answer: 'C',
    why: tex`A abscissa do vértice é $x_V=-b/(2a)=30/2=15$ e $y_V=f(15)=225-450+200=-25$. Como $V$ pertence a $g(x)=kx$, temos $-25=15k$, logo $\boxed{k=-5/3}$.`,
    wrong: { 0: '−3/5 resultaria em g(15)=−9, não no vértice (15, −25).', 1: '−4/3 forneceria g(15)=−20.', 3: 'O coeficiente não pode ser 5/3, pois a reta passa por um ponto de ordenada negativa com abscissa positiva.', 4: '3/5 também daria ordenada positiva para x=15.' },
  }),
  q({
    n: 18, subject: 'Matemática', content: 'Volumes de cilindro e cubo', statement: 'Um cilindro de raio 5 cm está inscrito no cubo de aresta a, conforme mostra a figura.', images: [img('q18-cilindro-cubo.svg', 'Cilindro de raio 5 cm inscrito em um cubo de aresta a.')],
    statementAfter: 'A razão entre os volumes do cilindro e do cubo é igual a:', afterBlockTypes: ['command'],
    alternatives: [tex`$\frac\pi3$`, tex`$\frac\pi4$`, tex`$\frac\pi2$`, tex`$\pi$`, tex`$\frac\pi5$`], answer: 'B',
    why: tex`No cilindro inscrito, a altura é $a$ e o diâmetro da base também é $a$, logo $r=a/2$. Assim, $\frac{V_{cil}}{V_{cubo}}=\frac{\pi(a/2)^2a}{a^3}=\boxed{\frac\pi4}$. Com $r=5$, tem-se $a=10$ cm.`,
    wrong: { 0: 'π/3 não decorre das fórmulas dos dois volumes.', 2: 'π/2 dobraria a razão correta.', 3: 'A razão deve considerar o fator 1/4 do quadrado do raio.', 4: 'π/5 usaria um denominador incompatível com a relação a=2r.' },
  }),
  q({
    n: 19, subject: 'Matemática', content: 'Área de quadrilátero não convexo em malha', statement: 'A figura mostra o quadrilátero não convexo ABCD sobre uma malha quadriculada. Os vértices A, B, C e D coincidem com os vértices de quadrados de lado medindo 1 cm.', images: [img('q19-quadrilatero-malha.svg', 'Quadrilátero ABCD: BD mede 10 cm, A está 5 cm acima de BD e C está 4 cm acima de BD.')],
    statementAfter: 'Nessas condições, a área do quadrilátero ABCD é igual a', afterBlockTypes: ['command'],
    alternatives: [tex`$5\text{ cm}^2$.`, tex`$9\text{ cm}^2$.`, tex`$8\text{ cm}^2$.`, tex`$7\text{ cm}^2$.`, tex`$6\text{ cm}^2$.`], answer: 'A',
    why: tex`O quadrilátero é a diferença entre os triângulos ABD e BCD. Pela malha, $BD=10$ cm e as alturas de A e C em relação a BD são 5 cm e 4 cm. Logo, $S=\frac{10\cdot5}{2}-\frac{10\cdot4}{2}=\boxed{5\text{ cm}^2}$.`,
    wrong: { 1: '9 cm² não corresponde à diferença entre as áreas dos triângulos.', 2: '8 cm² resultaria de medidas de altura ou base diferentes das indicadas na malha.', 3: '7 cm² não é obtido com BD=10 cm e diferença de alturas de 1 cm.', 4: '6 cm² superestima a área em 1 cm².' },
  }),
  q({
    n: 20, subject: 'Matemática', content: 'Crescimento exponencial e dobragem', statement: 'Certa população de bactérias, quando colocada em determinado meio de cultura, mantém-se constante por 10 dias e, a partir do 11º dia, cresce exponencialmente, dobrando sua quantidade ao final de cada período de 12 horas. Se uma população inicial de 100 bactérias desse tipo for colocada nesse meio de cultura, ao final do 15º dia haverá',
    alternatives: ['32 000 bactérias.', '204 800 bactérias.', '88 400 bactérias.', '102 400 bactérias.', '66 000 bactérias.'], answer: 'D',
    why: tex`Do início do 11º dia ao final do 15º decorrem 5 dias, isto é, 10 períodos de 12 horas. A população final é $100\cdot2^{10}=100\cdot1\,024=\boxed{102\,400}$ bactérias.`,
    wrong: { 0: '32 000 corresponderia a um crescimento linear ou a menos duplicações.', 1: '204 800 seria o resultado após 11 duplicações.', 2: '88 400 não corresponde a potências de 2 aplicadas à população inicial.', 4: '66 000 também não representa dez duplicações sucessivas.' },
  }),
];
