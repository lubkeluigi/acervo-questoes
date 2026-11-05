const PROCESS_URL = 'https://tmpfiles.org/wwAsoTsXxAJi/unisul2027-provaobjetiva.pdf';
const ANSWER_URL = 'https://tmpfiles.org/wkABoSsaNGju/unisul2027-gabaritodaprovaobjetiva.pdf';
const shared = {
  exam: 'Unisul', year: 2027, phase: 'Prova II', originalUrl: PROCESS_URL,
  officialAnswerUrl: ANSWER_URL, kind: 'objective', correctionOrigin: 'official',
};
const tex = String.raw;

export const unisul2027Lote02 = [
  {
    ...shared,
    id: 'unisul2027-prova2-q11', number: 'Questão 11', subject: 'Matemática', content: 'Divisão em partes inversamente proporcionais', difficulty: 'Fácil',
    statement: 'O valor total de um passeio de barco é fixo e será dividido igualmente entre os passageiros. Se 3 passageiros participarem do passeio, cada um pagará R$ 200,00. Então, se participarem 5 passageiros, o valor pago pelo passeio por passageiro será igual a', blockTypes: ['prose'], preview: 'Calcule o valor por passageiro em um passeio de custo fixo.',
    alternatives: ['R$ 140,00.', 'R$ 120,00.', 'R$ 100,00.', 'R$ 150,00.', 'R$ 180,00.'], correct: 1,
    resolution: ['O passeio custa 3 × R$ 200,00 = R$ 600,00. Dividindo igualmente entre 5 passageiros, cada um pagará 600/5 = R$ 120,00.'],
    analyses: ['Incorreta. O valor por pessoa é 600/5 = 120 reais.', 'Correta. O custo total é R$ 600,00 e, com cinco passageiros, cada um paga R$ 120,00.', 'Incorreta. Esse valor corresponderia a seis passageiros.', 'Incorreta. Esse valor corresponderia a quatro passageiros.', 'Incorreta. O quociente correto é 120, não 180.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q12', number: 'Questão 12', subject: 'Matemática', content: 'Análise combinatória: combinação simples', difficulty: 'Fácil',
    statement: 'Uma aposta simples no jogo da Mega Sena consiste em escolher um conjunto de 6 números distintos dentre os 60 números inteiros de 1 a 60. Como a ordem de escolha dos números não é relevante, o total de apostas simples diferentes que se pode fazer é dado por:', blockTypes: ['prose'], preview: 'Expresse o total de apostas simples da Mega Sena.',
    alternatives: [tex`$60\cdot59\cdot58\cdot57\cdot56\cdot55$`, tex`$\frac{60\cdot59\cdot58\cdot57\cdot56\cdot55}{6!}$`, tex`$\frac{60^6}{6!}$`, tex`$60^6$`, tex`$\frac{60\cdot59\cdot58\cdot57\cdot56\cdot55}{6!\cdot2!}$`], correct: 1,
    resolution: [tex`Como a ordem não importa, conta-se uma combinação de 60 elementos tomados 6 a 6: $\binom{60}{6}=\frac{60!}{6!54!}=\frac{60\cdot59\cdot58\cdot57\cdot56\cdot55}{6!}$.`],
    analyses: ['Incorreta. Esse produto conta as escolhas ordenadas, sem dividir pelas 6! permutações.', 'Correta. É a combinação de 60 números tomados 6 a 6.', 'Incorreta. O numerador 60⁶ admite repetição e não corresponde ao caso.', 'Incorreta. Além de admitir repetição, essa expressão considera a ordem.', 'Incorreta. Há um fator 2! indevido no denominador.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q13', number: 'Questão 13', subject: 'Matemática', content: 'Probabilidade do evento complementar', difficulty: 'Média',
    statement: 'Restam duas rodadas para o término de um campeonato de futebol de pontos corridos e o time A será o campeão se conquistar pelo menos mais 1 ponto, ou seja, poderá perder uma partida desde que vença ou empate a outra. As probabilidades de ocorrer cada um dos resultados possíveis nessas duas partidas restantes do time A estão indicadas na tabela:', blockTypes: ['prose'],
    tables: [{ ariaLabel: 'Probabilidades de vitória, empate e derrota nas duas últimas rodadas', headerRows: [['', 'Vitória', 'Empate', 'Derrota']], rows: [[{ text: 'Penúltima rodada', header: true }, '40%', '30%', '30%'], [{ text: 'Última rodada', header: true }, '80%', '10%', '10%']] }],
    statementAfter: 'Considerando as probabilidades indicadas na tabela, a probabilidade de o time A ser o campeão faltando duas rodadas é de', afterBlockTypes: ['command'], preview: 'Calcule a probabilidade de o time conquistar ao menos um ponto.',
    alternatives: ['80%.', '93%.', '87%.', '97%.', '60%.'], correct: 3,
    resolution: [tex`O time só não será campeão se perder as duas partidas. Admitindo os resultados independentes, a probabilidade desse evento é $0{,}30\cdot0{,}10=0{,}03$. Pelo complementar, a probabilidade de ser campeão é $1-0{,}03=0{,}97=\boxed{97\%}$.`],
    analyses: ['Incorreta. Esse é apenas o percentual de vitória na última rodada.', 'Incorreta. Esse é o complementar de uma derrota de 7%, não das duas derrotas.', 'Incorreta. O evento complementar correto tem probabilidade 3%, e não 13%.', 'Correta. A chance de perder ambas é 30% × 10% = 3%; portanto, a de ser campeão é 97%.', 'Incorreta. Sessenta por cento não corresponde ao evento nem ao seu complementar.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q14', number: 'Questão 14', subject: 'Matemática', content: 'Sistema de equações lineares', difficulty: 'Fácil',
    statement: 'Marcelo foi cuidar do quiosque de salgados de um amigo, mas esqueceu de perguntar os preços do pastel especial e da coxinha creme. O primeiro cliente pediu exatamente um pastel especial e uma coxinha creme. Felizmente, Marcelo tinha o registro de vendas do dia anterior, com os itens de cada pedido e o valor total. Ele observou que 3 pastéis especiais e 2 coxinhas creme custavam R$ 82,00, enquanto 2 pastéis especiais e 3 coxinhas creme custavam R$ 78,00. Com essas informações, Marcelo conseguiu cobrar o valor correto do seu primeiro cliente. Esse valor é', blockTypes: ['prose'], preview: 'Determine o preço de um pastel e uma coxinha.',
    alternatives: ['R$ 32,00.', 'R$ 20,00.', 'R$ 28,00.', 'R$ 36,00.', 'R$ 40,00.'], correct: 0,
    resolution: [tex`Sendo $p$ e $c$ os preços, tem-se $3p+2c=82$ e $2p+3c=78$. Somando as equações, $5p+5c=160$, logo $p+c=32$. O primeiro cliente pagou $\boxed{\mathrm{R\$}\ 32{,}00}$.`],
    analyses: ['Correta. A soma das duas vendas fornece 5(p + c) = 160; portanto, p + c = 32.', 'Incorreta. Esse valor não corresponde à soma dos dois preços.', 'Incorreta. O valor correto é R$ 32,00.', 'Incorreta. A soma das equações não fornece 36.', 'Incorreta. Esse valor excede a média necessária entre os totais informados.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q15', number: 'Questão 15', subject: 'Matemática', content: 'Função afim e simetria em relação ao eixo y', difficulty: 'Média',
    statement: 'No sistema de coordenadas a seguir, estão representados os gráficos de duas funções do 1º grau, simétricos entre si em relação ao eixo y.', blockTypes: ['prose'],
    images: [{ src: '/images/unisul2027/q15-funcoes-simetricas.svg', alt: 'Gráficos 1 e 2 de duas retas simétricas em relação ao eixo y, com o mesmo intercepto nesse eixo.' }],
    statementAfter: tex`Se o gráfico 1 é o gráfico da função $f(x)=-\frac{x}{4}+3$, então o gráfico 2 é o gráfico da função:`, afterBlockTypes: ['command'], preview: 'Determine a função cujo gráfico é simétrico ao de f em relação ao eixo y.',
    alternatives: [tex`$g(x)=-\frac{x}{4}-3$`, tex`$g(x)=4x+3$`, tex`$g(x)=-4x+3$`, tex`$g(x)=\frac{x}{4}-3$`, tex`$g(x)=\frac{x}{4}+3$`], correct: 4,
    resolution: [tex`Na reflexão em relação ao eixo $y$, substitui-se $x$ por $-x$. Assim, $g(x)=f(-x)=-\frac{-x}{4}+3=\boxed{\frac{x}{4}+3}$.`],
    analyses: ['Incorreta. Essa função inverte também o intercepto, o que não ocorre na reflexão em relação ao eixo y.', 'Incorreta. O coeficiente angular deve ser 1/4, não 4.', 'Incorreta. O gráfico 2 é crescente e seu coeficiente angular é positivo.', 'Incorreta. O intercepto em y deve permanecer igual a 3.', 'Correta. A reflexão troca x por −x e produz g(x) = x/4 + 3.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q16', number: 'Questão 16', subject: 'Matemática', content: 'Função trigonométrica — divergência no item', difficulty: 'Difícil',
    statement: 'Em uma roda gigante, as cabines acopladas à roda sobem e descem conforme ela gira, de modo que a altura h (em metros) do piso de uma das cabines em relação ao chão ao longo do tempo t (em minutos), é dada pela função', blockTypes: ['prose'],
    math: tex`h(t)=10+8\cdot\operatorname{sen}\left(\frac{\pi}{12}\right)`,
    images: [{ src: '/images/unisul2027/q16-roda-gigante.svg?v=20261104-vet1', alt: 'Roda gigante com cabines e indicação da altura h entre o piso de uma cabine e o chão.' }],
    statementAfter: 'As alturas mínima e máxima do piso dessa cabine em relação ao chão, que poderão ser atingidas, são, respectivamente,', afterBlockTypes: ['command'], preview: 'Identifique as alturas extrema e a inconsistência da fórmula impressa.',
    alternatives: ['0 m e 10 m.', '6 m e 14 m.', '2 m e 18 m.', '6 m e 18 m.', '2 m e 14 m.'], correct: 2,
    resolution: [tex`O gabarito oficial registra C, correspondente à função pretendida $h(t)=10+8\operatorname{sen}(\pi t/12)$: como o seno varia de −1 a 1, os extremos seriam $10-8=2$ m e $10+8=18$ m. Entretanto, o PDF imprime $h(t)=10+8\operatorname{sen}(\pi/12)$, sem $t$ no argumento; nessa redação, h é constante e não existem os extremos variáveis descritos. A chave oficial é preservada e a provável omissão editorial fica explicitada.`],
    analyses: ['Incorreta. Mesmo na função pretendida, a amplitude é 8 em torno de 10, e não de 0 a 10.', 'Incorreta. Esses extremos corresponderiam a amplitude 4 e centro 10.', 'Alternativa oficial. Com o argumento pretendido πt/12, o seno varia de −1 a 1 e as alturas são 2 m e 18 m; o enunciado impresso, porém, omite t.', 'Incorreta. A altura mínima pretendida é 2 m, não 6 m.', 'Incorreta. A altura máxima pretendida é 18 m, não 14 m.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q17', number: 'Questão 17', subject: 'Matemática', content: 'Reflexões no plano cartesiano', difficulty: 'Média',
    statement: tex`No sistema de coordenadas a seguir, está representado o triângulo ABC, com vértices $A(-3,5)$, $B(-2,4)$ e $C(-4,2)$.`, blockTypes: ['prose'],
    images: [{ src: '/images/unisul2027/q17-triangulo-coordenadas.svg', alt: 'Triângulo ABC no plano cartesiano, com A(−3,5), B(−2,4) e C(−4,2).' }],
    statementAfter: tex`A partir desses pontos, obtêm-se os pontos $A_2$, $B_2$ e $C_2$ da seguinte forma: primeiro, reflete-se cada vértice do triângulo ABC em relação ao eixo x, obtendo $A_1$, $B_1$ e $C_1$; depois, reflete-se cada um desses pontos em relação ao eixo y, obtendo $A_2$, $B_2$ e $C_2$.

Assim, as coordenadas dos vértices do triangulo $A_2B_2C_2$ são:`, afterBlockTypes: ['prose', 'command'], preview: 'Aplique duas reflexões sucessivas aos vértices do triângulo.',
    alternatives: [tex`$A_2(5,-3)$, $B_2(4,-2)$ e $C_2(2,-4)$.`, tex`$A_2(-5,-3)$, $B_2(-4,-2)$ e $C_2(-2,-4)$.`, tex`$A_2(3,-5)$, $B_2(2,-4)$ e $C_2(4,-2)$.`, tex`$A_2(-3,-5)$, $B_2(-2,-4)$ e $C_2(-4,-2)$.`, tex`$A_2(3,5)$, $B_2(2,4)$ e $C_2(4,2)$.`], correct: 2,
    resolution: [tex`A reflexão no eixo $x$ transforma $(x,y)$ em $(x,-y)$; a reflexão posterior no eixo $y$ transforma esse resultado em $(-x,-y)$. Assim, $A(-3,5)\mapsto A_2(3,-5)$, $B(-2,4)\mapsto B_2(2,-4)$ e $C(-4,2)\mapsto C_2(4,-2)$.`],
    analyses: ['Incorreta. As coordenadas foram trocadas de posição.', 'Incorreta. Além da troca de posição, os sinais não correspondem às duas reflexões.', 'Correta. A composição das reflexões leva (x,y) a (−x,−y), gerando exatamente esses vértices.', 'Incorreta. Esses são os resultados apenas da primeira reflexão, no eixo x.', 'Incorreta. As ordenadas deveriam ser negativas após a primeira reflexão.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q18', number: 'Questão 18', subject: 'Matemática', content: 'Semelhança e altura de pirâmide', difficulty: 'Média',
    statement: `O templo El Castillo, em Chichén Itzá (México), pode ser aproximado por um tronco de pirâmide de base quadrada com um paralelepípedo retangular no topo, desde que se desconsiderem os degraus e se trate as escadarias como rampas inclinadas. O tronco da pirâmide tem aproximadamente 24 m de altura, a base inferior quadrada aproximadamente 54 m de lado e a base superior quadrada aproximadamente 24 m de lado.

Suponha que os construtores do El Castillo, em vez de interromperem a pirâmide no nível do topo do tronco, tivessem prolongado as arestas laterais do tronco para cima até que elas se encontrassem em um único vértice, formando assim uma pirâmide completa (não truncada), conforme indicado na imagem.`, blockTypes: ['prose', 'prose'],
    images: [{ src: '/images/unisul2027/q18-el-castillo.svg', alt: 'Fotografia do templo El Castillo com linhas vermelhas que prolongam as arestas do tronco até o vértice da pirâmide completa.' }],
    statementAfter: 'De acordo com as medidas fornecidas, a altura dessa pirâmide completa seria igual a', afterBlockTypes: ['command'], preview: 'Calcule a altura da pirâmide completa por semelhança.',
    alternatives: ['36 m.', '43,2 m.', '40 m.', '30,8 m.', '48 m.'], correct: 1,
    resolution: [tex`Se $H$ é a altura total, a pirâmide superior removida tem altura $H-24$. Por semelhança, $\frac{H-24}{H}=\frac{24}{54}$. Logo, $54H-1296=24H$, $30H=1296$ e $\boxed{H=43{,}2\ \mathrm m}$.`],
    analyses: ['Incorreta. Esse valor não satisfaz a razão de semelhança entre as bases.', 'Correta. Da relação (H − 24)/H = 24/54 obtém-se H = 43,2 m.', 'Incorreta. Com 40 m, a razão das alturas não seria 24/54.', 'Incorreta. Esse valor é inferior ao obtido pela proporção correta.', 'Incorreta. A altura calculada é 43,2 m.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q19', number: 'Questão 19', subject: 'Matemática', content: 'Mediana em distribuição de frequências', difficulty: 'Média',
    statement: 'Uma pesquisa consultou 300 estudantes de uma escola para saber o número de livros que cada estudante tinha lido ao longo de um ano. O resultado dessa pesquisa é mostrado no gráfico:', blockTypes: ['prose'],
    images: [{ src: '/images/unisul2027/q19-livros-lidos.svg', alt: 'Gráfico de barras: 65 estudantes leram 0 livro, 85 leram 1, 70 leram 2, 50 leram 3 e 30 leram 4 livros.' }],
    statementAfter: 'Com base nesse gráfico e considerando os 300 estudantes participantes, a mediana do número de livros lidos no ano é igual a', afterBlockTypes: ['command'], preview: 'Calcule a mediana do número de livros lidos.',
    alternatives: ['1,5.', '2.', '1,8.', '1,65.', '1.'], correct: 0,
    resolution: ['Em 300 observações ordenadas, a mediana é a média da 150ª e da 151ª. Até 0 livro há 65 estudantes; incluindo quem leu 1 livro, acumulam-se 150. Portanto, a 150ª observação é 1 e a 151ª é 2, e a mediana é (1 + 2)/2 = 1,5.'],
    analyses: ['Correta. A 150ª observação é 1 e a 151ª é 2, cuja média é 1,5.', 'Incorreta. Dois é apenas a 151ª observação, não a média das duas centrais.', 'Incorreta. A mediana não é a média aritmética de todos os dados.', 'Incorreta. Esse valor não resulta das duas posições centrais.', 'Incorreta. Um é apenas a 150ª observação.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q20', number: 'Questão 20', subject: 'Matemática', content: 'Sistema binário de numeração', difficulty: 'Fácil',
    statement: `O sistema binário de numeração utilizado em computação usa apenas os símbolos 0 e 1 para representar números inteiros. Nesse sistema, o número é pensado como uma soma de potências de base 2, e cada algarismo informa se a potência de 2 correspondente à sua posição faz parte dessa decomposição.

Examine, na tabela a seguir, os oito primeiros números inteiros escritos na numeração binária.`, blockTypes: ['prose', 'prose'],
    tables: [{ ariaLabel: 'Números de um a oito nos sistemas decimal e binário', headerRows: [['Sistema decimal', 'Decomposição na base 2', 'Sistema binário']], rows: [
      ['1', '1 = 1 · 2⁰', '1'], ['2', '2 = 1 · 2¹ + 0 · 2⁰', '10'], ['3', '2 + 1 = 1 · 2¹ + 1 · 2⁰', '11'], ['4', '4 = 1 · 2² + 0 · 2¹ + 0 · 2⁰', '100'], ['5', '4 + 1 = 1 · 2² + 0 · 2¹ + 1 · 2⁰', '101'], ['6', '4 + 2 = 1 · 2² + 1 · 2¹ + 0 · 2⁰', '110'], ['7', '4 + 2 + 1 = 1 · 2² + 1 · 2¹ + 1 · 2⁰', '111'], ['8', '8 = 1 · 2³ + 0 · 2² + 0 · 2¹ + 0 · 2⁰', '1000'],
    ] }],
    statementAfter: 'O número 12 escrito no sistema binário é', afterBlockTypes: ['command'], preview: 'Converta o número decimal 12 para o sistema binário.',
    alternatives: ['1010.', '1101.', '1001.', '1100.', '1111.'], correct: 3,
    resolution: [tex`Como $12=8+4=1\cdot2^3+1\cdot2^2+0\cdot2^1+0\cdot2^0$, os algarismos binários, da maior à menor potência, são $\boxed{1100}$.`],
    analyses: ['Incorreta. 1010 representa 8 + 2 = 10.', 'Incorreta. 1101 representa 8 + 4 + 1 = 13.', 'Incorreta. 1001 representa 8 + 1 = 9.', 'Correta. 1100 representa 8 + 4 = 12.', 'Incorreta. 1111 representa 8 + 4 + 2 + 1 = 15.'],
  },
];
