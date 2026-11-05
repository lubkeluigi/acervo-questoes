const PROCESS_URL = 'https://tmpfiles.org/w2Atoes4Ntqn/provaii-objetiva3.pdf';
const ANSWER_URL = 'https://tmpfiles.org/wkAFoLsqN17m/gabaritodaprovaii-objetiva3.pdf';
const shared = {
  exam: 'Unifunec', year: 2027, phase: 'Prova II', originalUrl: PROCESS_URL,
  officialAnswerUrl: ANSWER_URL, kind: 'objective', correctionOrigin: 'official',
};
const tex = String.raw;

export const unifunec2027Lote02 = [
  {
    ...shared,
    id: 'unifunec2027-prova2-q11', number: 'Questão 11', subject: 'Matemática', content: 'Razão, proporção e sistema de equações', difficulty: 'Média',
    statement: tex`Em determinado curso de uma faculdade, a razão do número de alunos da turma P para o número de alunos da turma Q é $\frac{4}{5}$. Após a desistência de 5 alunos da turma Q, e de nenhum aluno da turma P, a razão do número de alunos da turma P para o número de alunos da turma Q passou a ser $\frac{9}{10}$. O número total de alunos dessas duas turmas juntas, após as desistências, passou a ser igual a`,
    blockTypes: ['prose'], preview: 'Calcule o total de alunos das turmas P e Q após cinco desistências.',
    alternatives: ['72.', '78.', '76.', '74.', '70.'], correct: 2,
    resolution: [tex`Sejam $P=4k$ e $Q=5k$. Após as desistências, $\frac{4k}{5k-5}=\frac{9}{10}$. Logo, $40k=45k-45$, de onde $k=9$. Assim, $P=36$ e a turma Q ficou com $45-5=40$ alunos, totalizando $\boxed{76}$.`],
    analyses: ['Incorreta. Esse total não satisfaz simultaneamente as duas razões informadas.', 'Incorreta. O total correto é 76, não 78.', 'Correta. As turmas ficaram com 36 e 40 alunos, somando 76.', 'Incorreta. Subtrair 5 do total inicial, que era 81, resulta 76, não 74.', 'Incorreta. Esse valor não corresponde ao total após as desistências.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q12', number: 'Questão 12', subject: 'Matemática', content: 'Progressões aritméticas', difficulty: 'Média',
    statement: tex`Considere duas progressões aritméticas (PA) distintas:

$(a, 6, b)$, de razão $r>0$;
$(12, c, d)$, de razão $2r$.

Se $10a=c$, o valor de $(d-b)$ é`,
    blockTypes: ['prose', 'list', 'command'], preview: 'Determine d − b a partir de duas progressões aritméticas relacionadas.',
    alternatives: ['10.', '16.', '14.', '12.', '18.'], correct: 4,
    resolution: [tex`Na primeira PA, $a=6-r$ e $b=6+r$. Na segunda, $c=12+2r$ e $d=12+4r$. Como $10a=c$, temos $10(6-r)=12+2r$, logo $r=4$. Portanto, $b=10$ e $d=28$, de modo que $\boxed{d-b=18}$.`],
    analyses: ['Incorreta. Esse é o valor de b, não a diferença d − b.', 'Incorreta. A diferença calculada é 18.', 'Incorreta. A substituição correta fornece r = 4 e d − b = 18.', 'Incorreta. O valor não coincide com d − b.', 'Correta. Com r = 4, obtém-se d = 28 e b = 10; portanto, d − b = 18.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q13', number: 'Questão 13', subject: 'Matemática', content: 'Trigonometria e áreas em triângulos retângulos', difficulty: 'Difícil',
    statement: tex`Considere o triângulo retângulo ABC, reto em B, com o ângulo $B\hat{A}C=\alpha$, o triângulo retângulo AED, reto em E, com o ponto E sobre o lado $\overline{AB}$, o ângulo $A\hat{D}E=\alpha$, $DE=16\ \mathrm{cm}$, e o prolongamento do lado $\overline{DE}$ intersectando o lado $\overline{AC}$ no ponto F, conforme mostra a figura.`,
    blockTypes: ['prose'],
    images: [{ src: '/images/unifunec2027/q13-triangulos.svg', alt: 'Triângulo ABC reto em B e triângulo AED reto em E, com E sobre AB e o prolongamento de DE encontrando AC em F; indicação de figura fora de escala.' }],
    statementAfter: tex`Sabendo que os lados $\overline{AB}$ e $\overline{AD}$ têm a mesma medida e que $\cos\alpha=\frac{4}{5}$, a área do quadrilátero BCFE é igual a`, afterBlockTypes: ['command'], preview: 'Calcule a área do quadrilátero BCFE usando semelhança e trigonometria.',
    alternatives: [tex`$96\ \mathrm{cm^2}$.`, tex`$100\ \mathrm{cm^2}$.`, tex`$90\ \mathrm{cm^2}$.`, tex`$84\ \mathrm{cm^2}$.`, tex`$75\ \mathrm{cm^2}$.`], correct: 0,
    resolution: [tex`No triângulo AED, $\cos\alpha=DE/AD$; portanto, $AD=16\cdot\frac{5}{4}=20$ e $AB=20$. Como $\tan\alpha=3/4$, $AE=DE\tan\alpha=12$. No triângulo ABC, $AC=AB/\cos\alpha=25$ e $BC=20\cdot\frac{3}{4}=15$, logo sua área é $\frac{20\cdot15}{2}=150$. No triângulo AEF, $EF=AE\tan\alpha=9$, e sua área é $\frac{12\cdot9}{2}=54$. A área pedida é $150-54=\boxed{96\ \mathrm{cm^2}}$.`],
    analyses: ['Correta. Subtraindo a área de AEF da área de ABC, obtém-se 96 cm².', 'Incorreta. A área do triângulo ABC é 150 cm² e a de AEF é 54 cm²; a diferença é 96 cm².', 'Incorreta. O valor não corresponde à diferença entre as áreas.', 'Incorreta. O valor resulta de cálculo incompatível com os lados obtidos.', 'Incorreta. A área correta do quadrilátero é 96 cm².'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q14', number: 'Questão 14', subject: 'Matemática', content: 'Análise combinatória com restrições', difficulty: 'Média',
    statement: `Deise comprou 7 tipos diferentes de frutas: mamão, abacaxi, morango, manga, uva, maçã e abacate, e pretende usar somente 4 tipos para fazer uma salada de frutas. No entanto, ao preparar a salada de frutas, Deise tem as seguintes preferências:

Mamão sempre deve estar presente;
Abacaxi e abacate não devem ficar juntos;
Morango e abacaxi sempre devem ficar juntos.

Respeitando suas preferências, o número de maneiras distintas de Deise preparar essa salada de frutas é`,
    blockTypes: ['prose', 'list', 'command'], preview: 'Conte as saladas de quatro frutas respeitando três preferências.',
    alternatives: ['9.', '8.', '7.', '10.', '6.'], correct: 2,
    resolution: ['Como o mamão é obrigatório, restam três escolhas. Se houver abacaxi, o morango também deve estar presente e o abacate é excluído; a quarta fruta pode ser manga, uva ou maçã: 3 maneiras. Sem abacaxi, o morango também não pode aparecer; escolhemos 3 entre abacate, manga, uva e maçã: 4 maneiras. Ao todo, 3 + 4 = 7.'],
    analyses: ['Incorreta. A contagem por casos fornece 7 possibilidades.', 'Incorreta. Há 3 possibilidades com abacaxi e 4 sem abacaxi, totalizando 7.', 'Correta. São 3 saladas com abacaxi e morango e 4 sem essas duas frutas.', 'Incorreta. Esse total inclui combinações que violam as preferências.', 'Incorreta. A contagem correta é 7.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q15', number: 'Questão 15', subject: 'Matemática', content: 'Função afim e função exponencial', difficulty: 'Média',
    statement: tex`Em um plano cartesiano, os gráficos das funções $f(x)=2x+b$ e $g(x)=2^{(x/2)}$, em que b é uma constante real, se intersectam no ponto $P(2,2)$. O valor de $g(b)$ é igual a:`,
    blockTypes: ['prose'], preview: 'Use o ponto de interseção para determinar b e calcular g(b).',
    alternatives: [tex`$-2$`, tex`$\frac{1}{2}$`, tex`$-\frac{1}{2}$`, tex`$2$`, tex`$-1$`], correct: 1,
    resolution: [tex`Como $P(2,2)$ pertence ao gráfico de f, $2=2\cdot2+b$, logo $b=-2$. Então $g(b)=g(-2)=2^{-2/2}=2^{-1}=\boxed{\frac12}$.`],
    analyses: ['Incorreta. −2 é o valor de b, não o de g(b).', 'Correta. Com b = −2, g(b) = 2⁻¹ = 1/2.', 'Incorreta. A função exponencial tem valores positivos; além disso, g(−2) = 1/2.', 'Incorreta. O expoente em g(−2) é −1, e não 1.', 'Incorreta. Uma potência de base 2 e expoente real é positiva.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q16', number: 'Questão 16', subject: 'Matemática', content: 'Porcentagem e sistema de equações', difficulty: 'Fácil',
    statement: tex`Uma empresa tem 2 filiais, $F_1$ e $F_2$. Juntas, essas duas filiais totalizam 143 funcionários, sendo que o número de funcionários da filial $F_1$ é 20% superior ao número de funcionários da filial $F_2$. Após a transferência de 5 funcionários da filial $F_1$ para a filial $F_2$, a diferença entre o número de funcionários dessas duas filiais passou a ser igual a`,
    blockTypes: ['prose'], preview: 'Determine a diferença de funcionários após uma transferência entre filiais.',
    alternatives: ['4.', '2.', '5.', '3.', '1.'], correct: 3,
    resolution: [tex`Se $F_2=x$, então $F_1=1{,}2x$ e $2{,}2x=143$, logo $x=65$. Inicialmente, $F_1=78$ e $F_2=65$. Após a transferência, ficam com 73 e 70 funcionários, respectivamente, cuja diferença é $\boxed{3}$.`],
    analyses: ['Incorreta. Após a transferência, as filiais têm 73 e 70 funcionários; a diferença é 3.', 'Incorreta. A diferença correta é 3 funcionários.', 'Incorreta. Cinco é o número de transferidos, não a diferença final.', 'Correta. A diferença final é 73 − 70 = 3.', 'Incorreta. A transferência reduz em 10 a diferença inicial de 13, resultando 3.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q17', number: 'Questão 17', subject: 'Matemática', content: 'Probabilidade e razão', difficulty: 'Fácil',
    statement: tex`Uma caixa contém determinado número de canetas do mesmo modelo, sendo 80 delas azuis e as demais vermelhas. Ao retirar-se aleatoriamente uma caneta dessa caixa, a probabilidade de ela ser vermelha é $\frac{1}{3}$. Sabendo que nessa caixa 5 canetas azuis foram substituídas por 5 canetas vermelhas, após as substituições, a probabilidade de retirar-se aleatoriamente uma caneta vermelha dessa caixa passou a ser igual a:`,
    blockTypes: ['prose'], preview: 'Calcule a nova probabilidade de retirar uma caneta vermelha.',
    alternatives: [tex`$\frac{1}{4}$`, tex`$\frac{3}{4}$`, tex`$\frac{1}{8}$`, tex`$\frac{5}{8}$`, tex`$\frac{3}{8}$`], correct: 4,
    resolution: [tex`As 80 canetas azuis correspondem a $1-\frac13=\frac23$ do total; portanto, a caixa tem $80\cdot\frac32=120$ canetas, das quais 40 são vermelhas. Após a substituição, há 45 vermelhas entre 120: $P=\frac{45}{120}=\boxed{\frac38}$.`],
    analyses: ['Incorreta. A nova proporção é 45/120 = 3/8, e não 1/4.', 'Incorreta. Essa é a proporção de canetas que não são vermelhas após a troca, que passa a ser 75/120 = 5/8; 3/4 não se aplica.', 'Incorreta. O aumento de 5 vermelhas representa 1/24 do total, e não 1/8.', 'Incorreta. 5/8 é a probabilidade de retirar uma caneta azul após as substituições.', 'Correta. Há 45 vermelhas em 120 canetas; 45/120 = 3/8.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q18', number: 'Questão 18', subject: 'Matemática', content: 'Geometria analítica: retas e área de triângulo', difficulty: 'Média',
    statement: tex`Em um plano cartesiano, as retas r, de equação $y=\frac{x}{2}-1$, e s, de equação $y=-\frac{x}{2}+2$, se intersectam no ponto $P(a,b)$.`,
    blockTypes: ['prose'],
    images: [{ src: '/images/unifunec2027/q18-retas.svg', alt: 'Gráfico das retas r e s, com interceptos A e B no eixo y e interseção P, destacando o triângulo ABP.' }],
    statementAfter: 'Sabendo que as retas r e s intersectam o eixo das ordenadas nos pontos A e B, respectivamente, a área do triângulo ABP, destacado na figura, é igual a', afterBlockTypes: ['command'], preview: 'Calcule a área do triângulo formado pelos interceptos e pela interseção das retas.',
    alternatives: ['5,5.', '6,0.', '7,5.', '4,5.', '9,0.'], correct: 3,
    resolution: [tex`Os interceptos são $A=(0,-1)$ e $B=(0,2)$, logo $AB=3$. Na interseção, $\frac{x}{2}-1=-\frac{x}{2}+2$, de onde $x=3$ e $y=\frac12$. A distância de P ao eixo y, altura do triângulo, é 3. Assim, $S=\frac{3\cdot3}{2}=\boxed{4{,}5}$.`],
    analyses: ['Incorreta. A base mede 3 e a altura horizontal mede 3; a área é 4,5.', 'Incorreta. O triângulo não tem área 6; sua base e altura são ambas iguais a 3.', 'Incorreta. O valor correto é 4,5.', 'Correta. A área é (3 × 3)/2 = 4,5.', 'Incorreta. Nove é o produto da base pela altura, sem dividir por 2.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q19', number: 'Questão 19', subject: 'Matemática', content: 'Volume de prisma e cubo', difficulty: 'Fácil',
    statement: 'Um recipiente no formato de um prisma reto de base quadrada, com arestas internas da base medindo x cm e com 25 cm de altura interna, está totalmente preenchido com água. Parte dessa água foi transferida para um recipiente menor, no formato de um cubo, com arestas internas medindo 14 cm, de forma a preencher totalmente esse cubo, sem transbordar.',
    blockTypes: ['prose'],
    images: [{ src: '/images/unifunec2027/q19-prisma-cubo.svg', alt: 'Prisma reto de base quadrada com lados x e altura 25 cm, ao lado de um cubo de aresta 14 cm; indicação de figura fora de escala.' }],
    statementAfter: 'Sabendo que ainda restaram 856 cm³ de água dentro do prisma, a medida da aresta da base desse prisma, indicada na figura pela letra x, é igual a', afterBlockTypes: ['command'], preview: 'Determine a aresta da base do prisma a partir dos volumes de água.',
    alternatives: ['12 cm.', '14 cm.', '16 cm.', '13 cm.', '15 cm.'], correct: 0,
    resolution: [tex`O cubo recebeu $14^3=2744\ \mathrm{cm^3}$. Somando os $856\ \mathrm{cm^3}$ restantes, o prisma continha inicialmente $3600\ \mathrm{cm^3}$. Logo, $25x^2=3600$, $x^2=144$ e, como $x>0$, $\boxed{x=12\ \mathrm{cm}}$.`],
    analyses: ['Correta. A aresta positiva que satisfaz 25x² = 3600 é 12 cm.', 'Incorreta. Quatorze centímetros é a aresta do cubo, não a aresta da base do prisma.', 'Incorreta. Com x = 16, o volume inicial seria maior que o calculado.', 'Incorreta. O valor não satisfaz x² = 144.', 'Incorreta. O valor não satisfaz x² = 144.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q20', number: 'Questão 20', subject: 'Matemática', content: 'Média aritmética e sistema de equações', difficulty: 'Média',
    statement: 'Uma pessoa comprou 7 peças diferentes de roupa, e a média aritmética dos preços dessas 7 peças foi R$ 152,00. Desconsiderando-se o preço das duas peças mais caras, a média aritmética dos preços das demais peças foi R$ 127,00. Sabendo que a diferença entre os preços das duas peças mais caras era R$ 31,00, o preço da peça mais cara era',
    blockTypes: ['prose'], preview: 'Determine o preço da peça mais cara a partir de duas médias e uma diferença.',
    alternatives: ['R$ 210,00.', 'R$ 233,00.', 'R$ 230,00.', 'R$ 227,00.', 'R$ 218,00.'], correct: 2,
    resolution: ['As sete peças custaram 7 × 152 = R$ 1.064,00, e as cinco mais baratas somaram 5 × 127 = R$ 635,00. Portanto, as duas mais caras somaram R$ 429,00. Se x é o preço da mais cara, a outra custa x − 31; assim, 2x − 31 = 429 e x = R$ 230,00.'],
    analyses: ['Incorreta. Esse preço não satisfaz a soma de R$ 429,00 e a diferença de R$ 31,00.', 'Incorreta. A peça mais cara custa R$ 230,00.', 'Correta. As duas peças custam R$ 230,00 e R$ 199,00, com soma 429 e diferença 31.', 'Incorreta. O valor não é solução do sistema formado pela soma e pela diferença.', 'Incorreta. O preço correto é R$ 230,00.'],
  },
];
