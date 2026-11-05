import { chronicleQuestion, underline } from './unisa2027-lote01.js';

const ORIGINAL_URL = 'https://documento.vunesp.com.br/documento/stream/NzkyMDMxMw%3d%3d';
const shared = { exam: 'UNISA', year: 2027, phase: 'Prova II', originalUrl: ORIGINAL_URL, kind: 'objective' };
const tex = String.raw;

const POEM = `Leia o poema “O Ídolo”, publicado em 1878, do poeta parnasiano Alberto de Oliveira, para responder às questões de 08 a 10.

Sobre um trono de mármore sombrio,
Em templo escuro, há muito abandonado,
Em seu grande silêncio, austero¹ e frio
Um ídolo de gesso está sentado.

E como à estranha mão, a paz silente²
Quebrando em torno às funerárias urnas,
Ressoa um órgão compassadamente
Pelas amplas abóbadas soturnas.

Cai fora a noite — mar que se retrata
Em outro mar — dois pélagos³ azuis;
Num as ondas — alcíones⁴ de prata,
No outro os astros — alcíones de luz.

E de seu negro mármore no trono
O ídolo de gesso está sentado.
${underline('Assim')} um coração repousa em sono...
Assim meu coração vive fechado.

(www.academia.org.br)

¹ austero: sóbrio, rigoroso.

² silente: silencioso.

³ pélago: alto-mar.

⁴ alcíone: ave mitológica que fazia seu ninho no mar quando calmo.`;
const POEM_BLOCKS = ['label', 'poem', 'poem', 'poem', 'poem', 'source', 'note', 'note', 'note', 'note'];
const poemQuestion = (command) => ({
  statement: `${POEM}\n\n${command}`,
  blockTypes: [...POEM_BLOCKS, ...command.split('\n\n').map(() => 'command')],
  preview: command,
});

export const unisa2027Lote02 = [
  {
    ...shared,
    ...chronicleQuestion(`“Senta-se ele diante de sua máquina, acende um cigarro, olha através da janela e busca fundo em sua imaginação um fato qualquer, de preferência colhido no noticiário matutino, ou da véspera, ${underline('em que')}, com as suas artimanhas peculiares, possa injetar um sangue novo”. (1º parágrafo)\n\nA expressão sublinhada se refere a`),
    id: 'unisa2027-prova2-q06', number: 'Questão 06', subject: 'Português', content: 'Coesão referencial', difficulty: 'Média',
    alternatives: ['“noticiário matutino”.', '“um fato qualquer”.', '“véspera”.', '“em sua imaginação”.', '“máquina”.'],
    correct: 1,
    resolution: [
      'A expressão “em que” exerce função de pronome relativo e retoma um termo anterior, equivalendo, nesse contexto, a “no qual”.',
      'O referente é “um fato qualquer”: o cronista pode, com suas artimanhas, injetar um sangue novo em um fato. “Noticiário matutino” e “véspera” indicam de onde o fato pode ser colhido, mas não são o antecedente do relativo.',
    ],
    analyses: [
      'Incorreta. O noticiário matutino é um possível lugar de origem do fato, não o termo retomado por “em que”.',
      'Correta. A relação pode ser explicitada como “injetar um sangue novo em um fato qualquer”; logo, esse é o referente do relativo.',
      'Incorreta. “Véspera” se relaciona ao noticiário do dia anterior e não completa adequadamente a ideia de injetar sangue novo.',
      'Incorreta. “Em sua imaginação” se liga à busca realizada pelo cronista, não ao relativo “em que”.',
      'Incorreta. A máquina é mencionada no início da cena e não tem relação sintática com a expressão sublinhada.',
    ],
  },
  {
    ...shared,
    ...chronicleQuestion('Apresenta uma construção na voz passiva o trecho:'),
    id: 'unisa2027-prova2-q07', number: 'Questão 07', subject: 'Português', content: 'Vozes verbais', difficulty: 'Fácil',
    alternatives: [
      '“Senta-se ele diante de sua máquina” (1º parágrafo).',
      '“O cronista levanta-se, senta-se” (3º parágrafo).',
      '“Se nada houver, resta-lhe o recurso de olhar em torno” (1º parágrafo).',
      '“que os linotipistas o estão esperando com impaciência” (3º parágrafo).',
      '“este é levado meio a tapas pelas personagens e situações” (1º parágrafo).',
    ],
    correct: 4,
    resolution: [
      'Em “este é levado meio a tapas pelas personagens e situações”, o sujeito “este” recebe a ação de ser levado. A construção reúne o auxiliar “é” e o particípio “levado”.',
      'Trata-se de voz passiva analítica, com agente da passiva expresso em “pelas personagens e situações”. A forma ativa correspondente seria “as personagens e situações levam este meio a tapas”.',
    ],
    analyses: [
      'Incorreta. Em “Senta-se ele”, o “se” integra uma construção reflexiva: ele executa e recebe a ação de sentar-se.',
      'Incorreta. “Levanta-se” e “senta-se” também apresentam construções reflexivas, não voz passiva.',
      'Incorreta. Em “Se nada houver”, “se” é conjunção subordinativa condicional e não pronome apassivador.',
      'Incorreta. Os linotipistas praticam a ação de esperar; “o” é pronome oblíquo que retoma o cronista, mas a oração está na voz ativa.',
      'Correta. “É levado” reúne ser e particípio, e “pelas personagens e situações” é o agente da passiva.',
    ],
  },
  {
    ...shared,
    ...poemQuestion('No poema, o cuidado com a escolha vocabular e com a construção das imagens está relacionado ao princípio parnasiano de'),
    id: 'unisa2027-prova2-q08', number: 'Questão 08', subject: 'Literatura', content: 'Parnasianismo e linguagem poética', difficulty: 'Fácil',
    alternatives: [
      'valorização do trabalho artesanal com a linguagem.',
      'expressão imediata e espontânea dos sentimentos.',
      'aproximação da poesia com a coloquialidade.',
      'abandono das convenções formais da poesia.',
      'utilização da literatura como instrumento político.',
    ],
    correct: 0,
    resolution: [
      'O Parnasianismo valoriza o rigor formal, a seleção vocabular e o trabalho minucioso na construção dos versos e das imagens, em consonância com o ideal de “arte pela arte”.',
      'No poema, a escolha de termos como “sombrio”, “austero”, “funerárias” e “soturnas”, bem como as imagens cuidadosamente organizadas, exemplifica esse apuro artesanal com a linguagem.',
    ],
    analyses: [
      'Correta. O cuidado vocabular e imagético manifesta o princípio parnasiano do trabalho artesanal e do refinamento formal.',
      'Incorreta. A expressão espontânea dos sentimentos não orienta o ideal parnasiano, que privilegia controle e elaboração.',
      'Incorreta. O poema emprega vocabulário selecionado e erudito, em vez de aproximar-se da coloquialidade.',
      'Incorreta. O Parnasianismo conserva e valoriza convenções formais, como metro, rima e organização das estrofes.',
      'Incorreta. A finalidade política não é o princípio em destaque; a questão trata do cultivo da forma artística.',
    ],
  },
  {
    ...shared,
    ...poemQuestion('Embora pertença ao Parnasianismo, o poema apresenta versos que constroem um ambiente sombrio e misterioso, como “Em templo escuro, há muito abandonado,” (1ª estrofe) e “Pelas amplas abóbadas soturnas.” (2ª estrofe). A construção desse ambiente aproxima o poema'),
    id: 'unisa2027-prova2-q09', number: 'Questão 09', subject: 'Literatura', content: 'Parnasianismo e Simbolismo', difficulty: 'Média',
    alternatives: ['da racionalidade árcade.', 'da objetividade realista.', 'da sugestividade simbolista.', 'do determinismo naturalista.', 'do experimentalismo modernista.'],
    correct: 2,
    resolution: [
      'O templo abandonado, o silêncio, as urnas funerárias e as abóbadas soturnas não descrevem apenas um espaço físico: criam uma atmosfera de mistério e sugestão.',
      'Essa valorização da atmosfera e das impressões evocadas pelas imagens aproxima o poema da sugestividade simbolista, ainda que sua elaboração formal seja parnasiana.',
    ],
    analyses: [
      'Incorreta. O Arcadismo associa-se à simplicidade, ao equilíbrio e à vida bucólica, não à atmosfera sombria destacada.',
      'Incorreta. A questão não enfatiza descrição objetiva da realidade, mas a sugestão de mistério produzida pelo cenário.',
      'Correta. A atmosfera misteriosa e a capacidade de evocar estados e impressões aproximam os versos da sugestividade simbolista.',
      'Incorreta. O determinismo naturalista relaciona comportamento e meio ou hereditariedade, tema ausente da construção desse ambiente.',
      'Incorreta. Não há experimentalismo formal modernista; os versos mantêm construção tradicional e trabalham a sugestão do cenário.',
    ],
  },
  {
    ...shared,
    ...poemQuestion('O termo sublinhado na 4ª estrofe pode ser substituído, sem prejuízo de sentido, por:'),
    id: 'unisa2027-prova2-q10', number: 'Questão 10', subject: 'Português', content: 'Coesão e valor semântico', difficulty: 'Fácil',
    alternatives: ['Desse modo.', 'Mesmo que.', 'No entanto.', 'Para que.', 'Visto que.'],
    correct: 0,
    resolution: [
      'Na última estrofe, o eu lírico compara o ídolo imóvel a um coração que repousa em sono e, em seguida, relaciona essa imagem ao próprio coração fechado.',
      '“Assim” estabelece uma retomada por analogia e pode ser substituído por “Desse modo”: da maneira como o ídolo permanece imóvel e um coração repousa, o coração do eu lírico vive fechado.',
    ],
    analyses: [
      'Correta. “Desse modo” preserva o valor de analogia e retomada apresentado por “Assim”.',
      'Incorreta. “Mesmo que” introduziria uma relação concessiva, incompatível com a comparação estabelecida.',
      'Incorreta. “No entanto” marcaria oposição, enquanto o verso estabelece uma semelhança.',
      'Incorreta. “Para que” introduziria finalidade, sentido que não corresponde à retomada da imagem anterior.',
      'Incorreta. “Visto que” expressaria causa, e não o modo ou a analogia indicada por “Assim”.',
    ],
  },
  {
    ...shared,
    id: 'unisa2027-prova2-q11', number: 'Questão 11', subject: 'Matemática', content: 'Porcentagem', difficulty: 'Fácil',
    statement: 'Todos os funcionários de uma empresa participaram de um treinamento de segurança, que foi ministrado em 3 dias, sendo que cada funcionário participou em um único dia. No primeiro dia desse treinamento, participaram 54% dos funcionários; no segundo dia, participaram 182 funcionários e, no terceiro dia, participaram 209 funcionários. O número total de funcionários dessa empresa é igual a',
    alternatives: ['950.', '1 000.', '800.', '850.', '900.'],
    correct: 3,
    resolution: [
      tex`O segundo e o terceiro dias reuniram $182+209=391$ funcionários. Como o primeiro dia reuniu 54% do total, esses 391 funcionários correspondem a $100\%-54\%=46\%$ do total.`,
      tex`Se $N$ é o número de funcionários, então $0{,}46\cdot N=391$. Logo, $N=\frac{391}{0{,}46}=850$.`,
    ],
    analyses: [
      tex`Incorreta. Se o total fosse 950, os dois últimos dias reuniriam $0{,}46\cdot950=437$ funcionários, e não 391.`,
      tex`Incorreta. Para 1 000 funcionários, 46% corresponderia a 460 pessoas, valor diferente de 391.`,
      tex`Incorreta. Em uma empresa com 800 funcionários, 46% corresponderia a 368 pessoas, e não a 391.`,
      tex`Correta. $0{,}46\cdot850=391$, exatamente a soma dos participantes do segundo e do terceiro dias.`,
      tex`Incorreta. Para 900 funcionários, os 46% restantes seriam 414 pessoas.`,
    ],
  },
  {
    ...shared,
    id: 'unisa2027-prova2-q12', number: 'Questão 12', subject: 'Matemática', content: 'Análise combinatória: combinação simples', difficulty: 'Fácil',
    statement: 'Uma doceria comercializa 12 tipos diferentes de doces e pretende vendê-los em caixas contendo 3 doces. Em cada uma das caixas, os 3 doces deverão ser de tipos diferentes. Nessas condições, quantas combinações diferentes de caixas poderão ser feitas?',
    alternatives: ['144.', '220.', '36.', '72.', '288.'],
    correct: 1,
    resolution: [
      'Cada caixa é formada pela escolha de 3 tipos entre 12, sem repetição. A ordem dos doces dentro da caixa não altera a combinação.',
      tex`Portanto, o número de caixas é $\binom{12}{3}=\frac{12\cdot11\cdot10}{3\cdot2\cdot1}=220$.`,
    ],
    analyses: [
      tex`Incorreta. O cálculo sem ordem e sem repetição é $\binom{12}{3}=220$, e não 144.`,
      tex`Correta. Há $\binom{12}{3}=220$ maneiras de escolher os três tipos diferentes de doces.`,
      'Incorreta. Multiplicar 12 por 3 não contabiliza os conjuntos de três tipos; é necessário calcular uma combinação.',
      'Incorreta. O valor 72 não corresponde ao número de subconjuntos de três elementos retirados de um conjunto de doze.',
      'Incorreta. O valor 288 também não corresponde a 12!/(3!·9!), que é igual a 220.',
    ],
  },
  {
    ...shared,
    id: 'unisa2027-prova2-q13', number: 'Questão 13', subject: 'Matemática', content: 'Probabilidade e combinatória', difficulty: 'Média',
    statement: 'Marcelo e Natália estão esperando para embarcar em um ônibus de turismo juntamente com outros 18 turistas. Nesse ônibus, 4 dos assentos ficam no andar superior e os demais no andar inferior, e para decidir os 4 turistas que ficarão no andar superior será feito um sorteio. A probabilidade de Marcelo e Natália serem sorteados para ficar no andar superior é:',
    alternatives: [tex`$\frac{1}{72}$`, tex`$\frac{2}{289}$`, tex`$\frac{2}{81}$`, tex`$\frac{2}{9}$`, tex`$\frac{3}{95}$`],
    correct: 4,
    resolution: [
      tex`Há $2+18=20$ turistas, dos quais 4 serão sorteados. O número total de grupos possíveis, sem considerar a ordem, é $\binom{20}{4}=4845$.`,
      tex`Para que Marcelo e Natália estejam no grupo, os outros dois sorteados devem ser escolhidos entre os 18 restantes: $\binom{18}{2}=153$ casos favoráveis. Assim, $P=\frac{153}{4845}=\frac{3}{95}$.`,
    ],
    analyses: [
      tex`Incorreta. A razão entre os casos favoráveis e todos os grupos de quatro pessoas é $\frac{3}{95}$, e não $\frac{1}{72}$.`,
      tex`Incorreta. $\frac{2}{289}\approx0{,}0069$, enquanto a probabilidade calculada é $\frac{3}{95}\approx0{,}0316$.`,
      tex`Incorreta. $\frac{2}{81}\approx0{,}0247$ e não resulta de $\binom{18}{2}/\binom{20}{4}$.`,
      tex`Incorreta. $\frac{2}{9}$ superestima a probabilidade; o cálculo combinatório correto fornece $\frac{3}{95}$.`,
      tex`Correta. $P=\frac{\binom{18}{2}}{\binom{20}{4}}=\frac{153}{4845}=\frac{3}{95}$.`,
    ],
  },
  {
    ...shared,
    id: 'unisa2027-prova2-q14', number: 'Questão 14', subject: 'Matemática', content: 'Sistemas de equações', difficulty: 'Média',
    statement: 'Uma formatura contará com a participação de alunos das universidades X e Y, e o contrato firmado entre os alunos e a empresa promotora do evento previa o pagamento de R$ 126.000,00. Esse valor foi dividido de maneira que cada participante da universidade X pagaria R$ 600,00 e cada participante da universidade Y pagaria R$ 650,00. Após a assinatura do contrato, os alunos decidiram contratar um serviço extra, no valor de R$ 2.000,00, e decidiram que o novo custo total seria dividido uniformemente entre os alunos das duas universidades, de maneira que o custo final por participante ficou em R$ 640,00. O número de participantes da universidade X é',
    alternatives: ['60.', '75.', '80.', '40.', '55.'],
    correct: 2,
    resolution: [
      tex`Sejam $x$ e $y$ os números de participantes. Após o serviço extra, o custo total passou a R$ 128.000,00; portanto, $x+y=\frac{128000}{640}=200$.`,
      tex`Pelo contrato inicial, $600x+650y=126000$. Substituindo $y=200-x$, obtemos $600x+650(200-x)=126000$, logo $-50x=-4000$ e $x=80$. Assim, há 80 participantes de X e 120 de Y.`,
    ],
    analyses: [
      'Incorreta. Com x = 60 e y = 140, o contrato inicial custaria R$ 127.000,00, e não R$ 126.000,00.',
      'Incorreta. Com x = 75 e y = 125, o total inicial seria R$ 126.250,00, valor diferente do contratado.',
      'Correta. Com x = 80 e y = 120, temos 600·80 + 650·120 = 126.000 e 640·200 = 128.000.',
      'Incorreta. Com x = 40 e y = 160, o custo inicial seria R$ 128.000,00, superior ao previsto.',
      'Incorreta. Com x = 55 e y = 145, o total inicial seria R$ 127.250,00, e não R$ 126.000,00.',
    ],
  },
  {
    ...shared,
    id: 'unisa2027-prova2-q15', number: 'Questão 15', subject: 'Matemática', content: 'Funções e equação quadrática', difficulty: 'Média',
    statement: tex`Considere $k$ uma constante real positiva, a função quadrática $f(x)=4\cdot(x-k)^2+(1-3k)\cdot x$ e a função polinomial do 1º grau $g(x)=3x-11k$.

Sabendo que $f(1)=g(10)-9$, a constante $k$ é igual a:`,
    alternatives: ['2.', tex`$\frac{5}{2}$`, '3.', tex`$\frac{3}{2}$`, '1.'],
    correct: 0,
    resolution: [
      tex`Calculando $f(1)$, temos $f(1)=4(1-k)^2+(1-3k)=4k^2-11k+5$.`,
      tex`Além disso, $g(10)-9=(30-11k)-9=21-11k$.`,
      tex`Igualando as expressões, $4k^2-11k+5=21-11k$, logo $4k^2=16$ e $k^2=4$. Como $k$ é positiva, $k=2$.`,
    ],
    analyses: [
      tex`Correta. Para $k=2$, $f(1)=5$ e $g(10)-9=5$, satisfazendo a condição.`,
      tex`Incorreta. A condição se reduz a $k^2=4$; $k=\frac{5}{2}$ não satisfaz essa equação.`,
      tex`Incorreta. Para $k=3$, teríamos $k^2=9$, e não 4.`,
      tex`Incorreta. Para $k=\frac{3}{2}$, teríamos $k^2=\frac{9}{4}$, valor diferente de 4.`,
      tex`Incorreta. Para $k=1$, $f(1)=-2$ e $g(10)-9=10$, portanto a igualdade não se verifica.`,
    ],
  },
  {
    ...shared,
    id: 'unisa2027-prova2-q16', number: 'Questão 16', subject: 'Matemática', content: 'Geometria plana: trigonometria', difficulty: 'Difícil',
    statement: 'O pentágono ABCDE foi dividido em 3 quadrados e 2 triângulos, conforme mostra a figura.',
    images: [{ src: '/images/unisa2027/q16-pentagono.svg', alt: 'Pentágono ABCDE com três quadrados empilhados à direita e dois triângulos à esquerda. O segmento ED mede 8 cm, o ângulo entre ED e a horizontal que parte de E mede 30 graus, e o ângulo inferior em E é beta.', caption: 'Pentágono ABCDE dividido em três quadrados e dois triângulos.' }],
    statementAfter: 'O valor de tg β é:',
    afterBlockTypes: ['command'],
    preview: 'O valor de tg β é:',
    alternatives: [tex`$\frac{4\sqrt{3}}{3}$`, tex`$\frac{2\sqrt{3}}{3}$`, tex`$\frac{\sqrt{3}}{4}$`, tex`$\frac{\sqrt{3}}{2}$`, tex`$\frac{\sqrt{3}}{3}$`],
    correct: 1,
    resolution: [
      'Seja F o ponto em que a horizontal traçada a partir de E encontra AD. O triângulo EDF é retângulo em F, tem hipotenusa ED = 8 cm e ângulo de 30° em E.',
      tex`Assim, $DF=8\cdot\operatorname{sen}30^\circ=4\text{ cm}$ e $EF=8\cdot\cos30^\circ=4\sqrt{3}\text{ cm}$. Como DF é o lado de um dos quadrados, os três quadrados têm lado 4 cm e $FA=2\cdot4=8\text{ cm}$.`,
      tex`No triângulo retângulo EFA, o ângulo $\beta$ tem cateto oposto FA e cateto adjacente EF. Portanto, $\operatorname{tg}\beta=\frac{8}{4\sqrt{3}}=\frac{2\sqrt{3}}{3}$.`,
    ],
    analyses: [
      tex`Incorreta. $\frac{4\sqrt{3}}{3}$ é o dobro do valor obtido pela razão $\frac{FA}{EF}=\frac{8}{4\sqrt{3}}$.`,
      tex`Correta. $\operatorname{tg}\beta=\frac{8}{4\sqrt{3}}=\frac{2}{\sqrt{3}}=\frac{2\sqrt{3}}{3}$.`,
      tex`Incorreta. $\frac{\sqrt{3}}{4}\approx0{,}43$, enquanto a tangente calculada é aproximadamente 1,15.`,
      tex`Incorreta. $\frac{\sqrt{3}}{2}$ corresponde a cos 30°, e não à razão entre os catetos do triângulo EFA.`,
      tex`Incorreta. $\frac{\sqrt{3}}{3}=\frac{1}{\sqrt{3}}$; a razão correta é $\frac{2}{\sqrt{3}}$.`,
    ],
  },
  {
    ...shared,
    id: 'unisa2027-prova2-q17', number: 'Questão 17', subject: 'Matemática', content: 'Geometria plana: áreas', difficulty: 'Média',
    statement: 'No plano, o ponto M é médio da base BC de um trapézio retângulo ABCD e o ponto N é médio da base AD desse trapézio, conforme mostra a figura.',
    images: [{ src: '/images/unisa2027/q17-trapezio.svg', alt: 'Trapézio retângulo ABCD, com BC como base superior e AD como base inferior. M é o ponto médio de BC, N é o ponto médio de AD, e os segmentos MN e CN estão traçados.', caption: 'Trapézio ABCD com os pontos médios M e N.' }],
    statementAfter: tex`Sabendo que as áreas dos triângulos CMN e CDN são, respectivamente, $14\text{ cm}^2$ e $21\text{ cm}^2$, a área do trapézio ABCD é`,
    preview: 'Determine a área do trapézio ABCD a partir das áreas dos triângulos CMN e CDN.',
    alternatives: [tex`$70\text{ cm}^2$.`, tex`$77\text{ cm}^2$.`, tex`$84\text{ cm}^2$.`, tex`$98\text{ cm}^2$.`, tex`$91\text{ cm}^2$.`],
    correct: 0,
    resolution: [
      tex`Sejam $BC=b$, $AD=B$ e $h$ a altura do trapézio. Como M é médio de BC, $MC=\frac{b}{2}$. O triângulo CMN tem altura $h$ em relação a MC, logo $\frac{1}{2}\cdot\frac{b}{2}\cdot h=14$, ou seja, $bh=56$.`,
      tex`Como N é médio de AD, $DN=\frac{B}{2}$. O triângulo CDN tem altura $h$ em relação a DN, de modo que $\frac{1}{2}\cdot\frac{B}{2}\cdot h=21$, portanto $Bh=84$.`,
      tex`A área do trapézio é $S=\frac{(B+b)h}{2}=\frac{Bh+bh}{2}=\frac{84+56}{2}=70\text{ cm}^2$.`,
    ],
    analyses: [
      tex`Correta. A soma das relações $Bh=84$ e $bh=56$ fornece $S=\frac{84+56}{2}=70\text{ cm}^2$.`,
      'Incorreta. Com os produtos Bh = 84 e bh = 56 deduzidos das áreas fornecidas, a área do trapézio é 70 cm², e não 77 cm².',
      tex`Incorreta. $84$ é o produto $Bh$, e não a área final; ainda é necessário somar $bh$ e dividir por 2.`,
      tex`Incorreta. Para obter 98 cm², o produto $(B+b)h$ teria de ser 196, mas ele é $84+56=140$.`,
      tex`Incorreta. O valor 91 cm² não corresponde a $\frac{Bh+bh}{2}$ com os produtos deduzidos das áreas fornecidas.`,
    ],
  },
  {
    ...shared,
    id: 'unisa2027-prova2-q18', number: 'Questão 18', subject: 'Matemática', content: 'Geometria espacial: volume do cilindro', difficulty: 'Fácil',
    statement: 'Um cilindro reto A tem 9 cm de altura e sua base tem 10 cm de diâmetro. Um cilindro reto B tem raio da base igual a 6 cm e altura h. Se o volume do cilindro A é a metade do volume do cilindro B, a medida de h é igual a',
    alternatives: ['12 cm.', '10 cm.', '9 cm.', '12,5 cm.', '8,5 cm.'],
    correct: 3,
    resolution: [
      tex`O raio da base de A é 5 cm; portanto, $V_A=\pi\cdot5^2\cdot9=225\pi\text{ cm}^3$. Para B, $V_B=\pi\cdot6^2\cdot h=36\pi h$.`,
      tex`Como $V_A=\frac{V_B}{2}$, temos $225\pi=18\pi h$. Cancelando $\pi$, $h=\frac{225}{18}=12{,}5\text{ cm}$.`,
    ],
    analyses: [
      tex`Incorreta. Com $h=12$, a metade do volume de B seria $216\pi\text{ cm}^3$, e não $225\pi\text{ cm}^3$.`,
      tex`Incorreta. Com $h=10$, a metade do volume de B seria $180\pi\text{ cm}^3$.`,
      tex`Incorreta. Com $h=9$, a metade do volume de B seria $162\pi\text{ cm}^3$.`,
      tex`Correta. Para $h=12{,}5$ cm, $V_B=450\pi$ e sua metade é $225\pi=V_A$.`,
      tex`Incorreta. Com $h=8{,}5$, a metade do volume de B seria $153\pi\text{ cm}^3$.`,
    ],
  },
  {
    ...shared,
    id: 'unisa2027-prova2-q19', number: 'Questão 19', subject: 'Matemática', content: 'Média aritmética', difficulty: 'Média',
    statement: 'Uma competição foi organizada em várias rodadas, e os pontos obtidos por cada competidor a cada rodada foram somados. Todos os 35 competidores participaram de todas as rodadas e, ao fim da penúltima rodada, a média dos pontos obtidos por eles era igual a 28,8. Na última rodada, alguns competidores obtiveram apenas 1 ponto cada e os demais obtiveram 2 pontos cada, de maneira que a média final dos pontos obtidos pelos 35 participantes foi igual a 30. Na última rodada, quantos competidores fizeram apenas 1 ponto?',
    alternatives: ['24.', '30.', '21.', '25.', '28.'],
    correct: 4,
    resolution: [
      tex`Até a penúltima rodada, o total de pontos era $35\cdot28{,}8=1008$. Se $x$ competidores fizeram 1 ponto na última rodada e $35-x$ fizeram 2, o total final foi $1008+x+2(35-x)=1078-x$.`,
      tex`Como a média final foi 30, o total final deve ser $35\cdot30=1050$. Logo, $1078-x=1050$, e $x=28$.`,
    ],
    analyses: [
      tex`Incorreta. Com 24 competidores fazendo 1 ponto, a média final seria $\frac{1054}{35}\approx30{,}11$, e não 30.`,
      tex`Incorreta. Com 30 competidores, a média final seria $\frac{1048}{35}\approx29{,}94$.`,
      tex`Incorreta. Com 21 competidores, a média final seria $\frac{1057}{35}=30{,}2$.`,
      tex`Incorreta. Com 25 competidores, a média final seria $\frac{1053}{35}\approx30{,}09$.`,
      tex`Correta. Com 28 competidores, o total final é $1078-28=1050$ e a média é $1050/35=30$.`,
    ],
  },
  {
    ...shared,
    id: 'unisa2027-prova2-q20', number: 'Questão 20', subject: 'Matemática', content: 'Razões e sistemas de equações', difficulty: 'Média',
    statement: tex`Na primeira semana de aula de uma escola de idiomas, a razão entre o número de alunos que estudavam no período noturno e o número de alunos que estudavam no período diurno era igual a $\frac{5}{17}$. Na segunda semana, 30 alunos do período diurno se transferiram para o período noturno e 18 novos alunos se matricularam no período diurno, de modo que a razão indicada passou a ser igual a $\frac{7}{20}$.

O número total de alunos dos períodos diurno e noturno na primeira semana era igual a`,
    alternatives: ['748.', '770.', '814.', '836.', '792.'],
    correct: 4,
    resolution: [
      tex`Na primeira semana, escreva $N=5k$ para o noturno e $D=17k$ para o diurno. O total inicial era, portanto, $22k$.`,
      tex`Após as mudanças, o noturno passou a $5k+30$ e o diurno a $17k-30+18=17k-12$. Assim, $\frac{5k+30}{17k-12}=\frac{7}{20}$.`,
      tex`Multiplicando em cruz, $100k+600=119k-84$, logo $19k=684$ e $k=36$. O total inicial era $22\cdot36=792$ alunos.`,
    ],
    analyses: [
      tex`Incorreta. O total 748 corresponde a $k=34$, mas a segunda razão exige $k=36$.`,
      tex`Incorreta. O total 770 corresponde a $k=35$; com esse valor, a razão após as mudanças não é $\frac{7}{20}$.`,
      tex`Incorreta. O total 814 corresponde a $k=37$, enquanto a equação obtida é $19k=684$, cuja solução é 36.`,
      tex`Incorreta. O total 836 corresponde a $k=38$ e não satisfaz a condição da segunda semana.`,
      tex`Correta. Inicialmente havia $N=180$ e $D=612$, total 792. Depois, a razão passou a $\frac{210}{600}=\frac{7}{20}$.`,
    ],
  },
];
