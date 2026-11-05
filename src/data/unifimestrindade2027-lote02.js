const PROCESS_URL = 'https://tmpfiles.org/wZAeoKsBNGYT/provaii-objetiva.pdf';
const ANSWER_URL = 'https://tmpfiles.org/wVAPoVs4xolm/gabaritodaprovaii-objetiva2.pdf';
const shared = {
  exam: 'Unifimes Trindade', year: 2027, phase: 'Prova II', originalUrl: PROCESS_URL,
  officialAnswerUrl: ANSWER_URL, kind: 'objective', correctionOrigin: 'official',
};
const tex = String.raw;
const RESOURCE_VERSIONS = { 'p2-q17-blocos.svg': '20261104-blocos-vectorink3-numeros' };
const img = (file, alt) => ({
  src: `/images/unifimestrindade2027/${file}?v=${RESOURCE_VERSIONS[file] || '20261104-pdf-vector1'}`, alt,
});

export const unifimestrindade2027Lote02 = [
  {
    ...shared,
    id: 'unifimestrindade2027-prova2-q11', number: 'Questão 11', subject: 'Matemática', content: 'Sequências e contagem em intervalo de tempo', difficulty: 'Média',
    statement: 'Considere que, em determinado dia, às 10h, em um centro de compras, entraram os primeiros 11 clientes. Depois desse horário, a cada 1 minuto, entraram mais 11 clientes, e nenhum cliente saiu desse centro de compras até às 12h. Nessas condições, o número de clientes nesse centro às 11h11 era igual a', blockTypes: ['prose'],
    alternatives: ['858.', '814.', '770.', '792.', '836.'], correct: 3,
    resolution: ['Entre 10h e 11h11 decorrem 71 minutos. Aos 11 clientes iniciais somam-se 71 grupos de 11: $N=11+71\cdot11=72\cdot11=792$.'],
    analyses: ['Incorreta. 858 corresponderia a 78 grupos de 11, quantidade incompatível com o intervalo.', 'Incorreta. 814 resulta de 74 grupos de 11 e não considera corretamente os 71 minutos.', 'Incorreta. 770 corresponde a apenas 70 grupos de 11 e desconsidera um grupo.', 'Correta. São 72 grupos de 11 clientes: o inicial e mais 71, totalizando 792.', 'Incorreta. 836 corresponde a 76 grupos de 11 e supera o total do horário pedido.'],
    preview: 'Calcule quantos grupos de 11 clientes entraram entre 10h e 11h11.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova2-q12', number: 'Questão 12', subject: 'Matemática', content: 'Combinação simples', difficulty: 'Fácil',
    statement: 'Um grupo de 5 adultos e 8 crianças estão em um parque. Uma das atrações desse parque exige a presença de dois desses adultos para que as 8 crianças brinquem ao mesmo tempo. Os adultos decidiram formar duplas para que as crianças fossem sempre todas juntas, mas de maneira que cada dupla distinta de adultos acompanharia as crianças uma única vez. Nessas condições, o número máximo de vezes que as crianças poderão participar dessa atração é', blockTypes: ['prose'],
    alternatives: ['20.', '144.', '56.', '156.', '10.'], correct: 4,
    resolution: [tex`Cada participação corresponde a uma dupla não ordenada de adultos. O número de duplas é $\binom{5}{2}=\frac{5\cdot4}{2}=10$.`],
    analyses: ['Incorreta. 20 conta as duplas como se a ordem dos adultos importasse.', 'Incorreta. 144 não corresponde ao número de subconjuntos de dois adultos.', tex`Incorreta. 56 é $\binom{8}{2}$ e utiliza incorretamente o número de crianças.`, 'Incorreta. 156 não tem relação com a combinação de cinco adultos dois a dois.', tex`Correta. Há $\binom{5}{2}=10$ duplas distintas, portanto 10 participações.`],
    preview: 'Conte as duplas distintas que podem ser formadas com cinco adultos.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova2-q13', number: 'Questão 13', subject: 'Matemática', content: 'Porcentagem, probabilidade e sistema de equações', difficulty: 'Difícil',
    statement: tex`Em uma competição, participam 8% dos alunos da escola A e 15% dos alunos da escola B, totalizando 195 alunos. Se um dos alunos participantes da competição for escolhido ao acaso, a probabilidade de que seja da escola A é igual a $\frac{4}{5}$. A soma do número total de alunos da escola A com o número total de alunos da escola B é igual a`, blockTypes: ['prose'],
    alternatives: ['2 210.', '1 940.', '1 820.', '2 020.', '2 160.'], correct: 0,
    resolution: [tex`Como a probabilidade de escolher um participante de A é $4/5$, há $195\cdot4/5=156$ participantes de A e $39$ de B. Assim, $0{,}08A=156$ e $0{,}15B=39$, logo $A=1950$ e $B=260$. A soma é $\boxed{2210}$.`],
    analyses: ['Correta. As escolas têm 1 950 e 260 alunos, respectivamente, somando 2 210.', 'Incorreta. Esse total não produz 156 participantes de A e 39 de B com as taxas dadas.', 'Incorreta. O valor é inferior ao total de alunos da escola A isoladamente.', 'Incorreta. A soma correta deve incluir 260 alunos da escola B além dos 1 950 da escola A.', 'Incorreta. 2 160 não satisfaz simultaneamente as duas porcentagens informadas.'],
    preview: 'Use a probabilidade para separar os 195 participantes e calcular o total das duas escolas.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova2-q14', number: 'Questão 14', subject: 'Matemática', content: 'Equação do primeiro grau e divisão em embalagens', difficulty: 'Média',
    statement: 'Uma empresa transportou para uma feira de materiais escolares várias caixas, cada uma contendo 8 lapiseiras. Na feira, essas lapiseiras foram reorganizadas em estojos, cada estojo com 3 lapiseiras, de maneira que o número de estojos necessários para essa reorganização excedeu em 25 unidades o número de caixas que foram usadas no transporte das lapiseiras. O número de lapiseiras que essa empresa levou para a feira é igual a', blockTypes: ['prose'],
    alternatives: ['160.', '120.', '180.', '240.', '280.'], correct: 1,
    resolution: [tex`Se $x$ é o número de caixas, há $8x$ lapiseiras e $8x/3$ estojos. Logo, $\frac{8x}{3}=x+25$, donde $5x=75$ e $x=15$. Foram levadas $8\cdot15=\boxed{120}$ lapiseiras.`],
    analyses: ['Incorreta. 160 lapiseiras formariam 20 caixas e não satisfazem a diferença de 25 estojos.', 'Correta. São 15 caixas com 8 lapiseiras, ou 120 lapiseiras, reorganizadas em 40 estojos; $40-15=25$.', 'Incorreta. 180 lapiseiras não são divisíveis em caixas de 8 nas condições apresentadas.', 'Incorreta. 240 lapiseiras dariam 30 caixas e 80 estojos, diferença de 50.', 'Incorreta. 280 lapiseiras dariam 35 caixas e não atendem à diferença indicada.'],
    preview: 'Relacione caixas de 8 e estojos de 3 lapiseiras com diferença de 25 unidades.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova2-q15', number: 'Questão 15', subject: 'Matemática', content: 'Geometria analítica: distância e coeficiente angular', difficulty: 'Média',
    statement: tex`No plano cartesiano, o ponto $B(3,-1)$ é equidistante dos pontos $A(0,3)$ e $C$, sendo $C$ um ponto que pertence ao quarto quadrante. Sabendo que os pontos $B$ e $C$ estão sobre uma reta paralela ao eixo $x$, o coeficiente angular da reta que passa pelos pontos $A$ e $C$ é`, blockTypes: ['prose'],
    images: [img('p2-q15-grafico-pontos.svg', 'No plano cartesiano, A está em (0, 3), B em (3, −1) e C no quarto quadrante sobre a mesma reta horizontal de B; o segmento AC é oblíquo. Figura fora de escala.')],
    alternatives: ['1,5.', '1.', '–0,5.', '–1,5.', '–1.'], correct: 2,
    resolution: [tex`Temos $AB=\sqrt{3^2+(-4)^2}=5$. Como $BC$ é horizontal e $C$ está à direita de $B$, $BC=5$ implica $C=(8,-1)$. Portanto, $m_{AC}=\frac{-1-3}{8-0}=-\frac12=\boxed{-0{,}5}$.`],
    analyses: ['Incorreta. O coeficiente angular é negativo porque a reta desce de A para C.', 'Incorreta. A variação vertical é −4 e a horizontal é 8, portanto a razão não é 1.', 'Correta. Com $C=(8,-1)$, o coeficiente angular é $-4/8=-0{,}5$.', 'Incorreta. −1,5 não é a razão entre as variações de A até C.', 'Incorreta. Para coeficiente −1, a variação horizontal teria de ser 4, mas ela é 8.'],
    preview: 'Determine C pela equidistância e calcule o coeficiente angular de AC.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova2-q16', number: 'Questão 16', subject: 'Matemática', content: 'Trigonometria e áreas de triângulos retângulos', difficulty: 'Difícil',
    statement: tex`No plano, o ponto $B$ pertence ao lado $AE$ do triângulo retângulo $ADE$, e o ponto $D$ pertence ao lado $AC$ do triângulo retângulo $ABC$, conforme mostra a figura. Sabendo que $\operatorname{tg}\alpha=0{,}6$ e $\operatorname{tg}\beta=1{,}5$, a diferença entre as áreas dos triângulos $ADE$ e $ABC$ é igual a`, blockTypes: ['prose'],
    images: [img('p2-q16-triangulos.svg', 'Triângulos retângulos ADE e ABC com vértice A comum, AC medindo 9 cm, AE medindo 10 cm, D sobre AC e B sobre AE; ângulo alfa em E e beta em B.')],
    alternatives: [tex`$3\ \mathrm{cm^2}$.`, tex`$5\ \mathrm{cm^2}$.`, tex`$1\ \mathrm{cm^2}$.`, tex`$4\ \mathrm{cm^2}$.`, tex`$2\ \mathrm{cm^2}$.`], correct: 0,
    resolution: [tex`Em $ADE$, $\operatorname{tg}\alpha=AD/AE=0{,}6$ e $AE=10$, logo $AD=6$ e sua área é $30\ \mathrm{cm^2}$. Em $ABC$, $\operatorname{tg}\beta=AC/AB=1{,}5$ e $AC=9$, logo $AB=6$ e sua área é $27\ \mathrm{cm^2}$. A diferença é $\boxed{3\ \mathrm{cm^2}}$.`],
    analyses: [tex`Correta. As áreas são $30$ e $27\ \mathrm{cm^2}$, com diferença $3\ \mathrm{cm^2}$.`, 'Incorreta. A diferença de 5 não decorre das tangentes e das dimensões dadas.', 'Incorreta. O cálculo completo das duas áreas fornece diferença 3, não 1.', 'Incorreta. A diferença 4 não corresponde a $30-27$.', 'Incorreta. A diferença 2 não corresponde às áreas obtidas.'],
    preview: 'Use as tangentes para obter AD e AB e compare as áreas dos triângulos.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova2-q17', number: 'Questão 17', subject: 'Matemática', content: 'Volume de blocos retangulares', difficulty: 'Média',
    statement: tex`No interior de um bloco retangular oco, foram colocados dois blocos retangulares sólidos, o que diminuiu para $48\,960$ litros o volume máximo de água que o bloco oco comporta, conforme mostra a figura. Dada a constante real $x$, as dimensões do bloco sólido de menor volume, em metros, são $x$, $x$ e 3, e as dimensões do bloco sólido de maior volume, em metros, são $x$, $2x$ e 3. Nessas condições, o valor da constante $x$ é`, blockTypes: ['prose'],
    images: [img('p2-q17-blocos.svg', 'Bloco retangular oco de dimensões 8 m, 3 m e 3 m, com dois blocos retangulares sólidos em seu interior.')],
    alternatives: ['1,4.', '1,8.', '1,3.', '1,5.', '1,6.'], correct: 4,
    resolution: [tex`O volume interno total é $8\cdot3\cdot3=72\ \mathrm{m^3}$, e o volume restante é $48{,}960\ \mathrm{m^3}$. Os sólidos ocupam $3x^2+6x^2=9x^2$. Assim, $72-9x^2=48{,}96$, logo $x^2=2{,}56$ e, como $x>0$, $\boxed{x=1{,}6}$.`],
    analyses: ['Incorreta. Com $x=1{,}4$, os sólidos não ocupariam os $23{,}04\ \mathrm{m^3}$ necessários.', 'Incorreta. $x=1{,}8$ produziria volume de sólidos maior que o calculado.', 'Incorreta. $x=1{,}3$ não satisfaz $9x^2=23{,}04$.', 'Incorreta. $x=1{,}5$ resulta em $9x^2=20{,}25$, diferente de 23,04.', 'Correta. $x=1{,}6$ dá $9x^2=23{,}04$ e deixa $48{,}96\ \mathrm{m^3}=48\,960$ litros para a água.'],
    preview: 'Desconte o volume dos dois sólidos do bloco de 8 m × 3 m × 3 m.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova2-q18', number: 'Questão 18', subject: 'Matemática', content: 'Média aritmética e sequência de degraus', difficulty: 'Difícil',
    statement: 'Priscila mora em um prédio com as seguintes características: para ir do térreo (andar zero) ao 1º andar, é preciso subir 30 degraus; para ir de um andar de numeração ímpar para um andar de numeração par, é preciso subir 18 degraus; e para subir de um andar par para um andar ímpar é preciso subir 20 degraus. Para subir do térreo até o andar ímpar onde mora, de degrau em degrau, Priscila sobe, em média, 19,2 degraus por andar. Em qual andar Priscila mora?', blockTypes: ['prose'],
    alternatives: ['45º andar.', '51º andar.', '63º andar.', '55º andar.', '39º andar.'], correct: 3,
    resolution: [tex`Para chegar ao andar $2k+1$, ela percorre $30+38k$ degraus em $2k+1$ mudanças de andar. Logo, $\frac{30+38k}{2k+1}=19{,}2$, donde $10{,}8=0{,}4k$ e $k=27$. O andar é $2\cdot27+1=\boxed{55}$.`],
    analyses: ['Incorreta. No 45º andar, a média calculada não seria 19,2 degraus por andar.', 'Incorreta. O 51º andar corresponde a $k=25$, que não satisfaz a equação.', 'Incorreta. O 63º andar corresponde a $k=31$ e produz outra média.', 'Correta. Até o 55º andar são $30+27\cdot38=1056$ degraus em 55 mudanças; $1056/55=19{,}2$.', 'Incorreta. O 39º andar não atende à média informada.'],
    preview: 'Modele o total de degraus até um andar ímpar e use a média de 19,2.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova2-q19', number: 'Questão 19', subject: 'Matemática', content: 'Vértices de parábolas e área de triângulo', difficulty: 'Difícil',
    statement: tex`No plano cartesiano, os vértices de um triângulo coincidem com os vértices das parábolas definidas pelas funções quadráticas $f$, $g$ e $h$. Sabendo que $f(x)=x^2-16x+64$, $g(x)=x^2+6x+11$ e $h(x)=-x^2-6x-13$, a área desse triângulo é`, blockTypes: ['prose'],
    alternatives: ['45.', '33.', '36.', '57.', '30.'], correct: 1,
    resolution: [tex`Completando quadrados: $f(x)=(x-8)^2$, $g(x)=(x+3)^2+2$ e $h(x)=-(x+3)^2-4$. Os vértices são $(8,0)$, $(-3,2)$ e $(-3,-4)$. A base vertical mede 6 e a altura horizontal mede 11; portanto, $A=\frac{6\cdot11}{2}=\boxed{33}$.`],
    analyses: ['Incorreta. 45 não corresponde ao produto da base 6 pela altura 11 dividido por 2.', 'Correta. Os vértices formam triângulo de base 6 e altura 11, cuja área é 33.', 'Incorreta. 36 resultaria de altura 12, mas a distância horizontal é 11.', 'Incorreta. 57 não corresponde às coordenadas dos três vértices.', 'Incorreta. 30 usaria altura 10; a altura correta é $8-(-3)=11$.'],
    preview: 'Complete quadrados, encontre os três vértices e calcule a área do triângulo.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova2-q20', number: 'Questão 20', subject: 'Matemática', content: 'Razão, proporção e quantidade restante', difficulty: 'Média',
    statement: tex`Uma apresentação acontecerá em determinado fim de semana, com uma sessão no sábado e uma no domingo. Para essa apresentação, já foram vendidos 798 ingressos, de maneira que a razão entre o número de ingressos vendidos para a sessão de domingo e o número de ingressos vendidos para a sessão de sábado é igual a $\frac{6}{15}$. Se para cada sessão foram disponibilizados 1 000 ingressos, o número de ingressos ainda disponíveis para a sessão de domingo dessa apresentação é`, blockTypes: ['prose'],
    alternatives: ['404.', '654.', '772.', '202.', '588.'], correct: 2,
    resolution: [tex`As vendas de domingo e sábado podem ser escritas como $6k$ e $15k$. Então $21k=798$, logo $k=38$. No domingo foram vendidos $6\cdot38=228$ ingressos, restando $1000-228=\boxed{772}$.`],
    analyses: ['Incorreta. 404 não é o saldo correspondente às 228 vendas de domingo.', 'Incorreta. 654 não decorre da razão de vendas $6/15$.', 'Correta. Foram vendidos 228 ingressos para domingo; restam 772 dos 1 000 disponíveis.', 'Incorreta. 202 não corresponde ao total restante após a venda calculada.', 'Incorreta. 588 é próximo das vendas de sábado e não representa o saldo de domingo.'],
    preview: 'Divida as 798 vendas na razão 6:15 e calcule o saldo de domingo.',
  },
];
