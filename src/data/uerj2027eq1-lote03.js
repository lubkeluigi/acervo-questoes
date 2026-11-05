import { q, tex, img, carneirosText, baunilhaText } from './uerj2027eq1-helpers.js';

export const uerj2027eq1Lote03 = [
  q({
    n: 31, subject: 'Matemática', content: 'Setor circular, comprimento de arco e perímetro',
    statement: tex`A planta de uma piscina que será construída em um parque público tem a forma de um setor circular definido pelo arco $\overset{\frown}{ACB}$, com raio $\overline{OA}=\overline{OB}=20\ \mathrm m$. O menor ângulo desse arco, $A\hat OB$, mede 1,5 radianos. Observe a figura:`, blockTypes: ['quote'],
    images: [img('uerj2027eq1-q31-setor.webp', 'Setor circular de raio 20 metros; o menor ângulo AOB mede 1,5 radiano e o arco da piscina é o arco maior ACB.')],
    statementAfter: tex`Utilizando $\pi=3{,}14$, o perímetro, em metros, dessa piscina é igual a:`, afterBlockTypes: ['command'],
    alternatives: ['115,6.', '135,6.', '155,6.', '175,6.'], answer: 'B',
    why: tex`O arco ACB é o maior e corresponde ao ângulo $2\pi-1{,}5=6{,}28-1{,}5=4{,}78$ rad. Seu comprimento é $20\cdot4{,}78=95{,}6$ m. Somando os dois raios: $P=95{,}6+40=\boxed{135{,}6\ \mathrm m}$.`,
    wrong: { 0: 'Esse valor não inclui corretamente os dois raios no perímetro.', 2: 'O arco utilizado é o maior, não o correspondente apenas a 1,5 rad.', 3: 'O valor excede em 40 m o perímetro calculado.' },
  }),
  q({
    n: 32, subject: 'Matemática', content: 'Função quadrática e valor mínimo',
    statement: tex`Para formar três quadrados de lados iguais a 2 cm, 4 cm e 7 cm, podem ser utilizados exatamente 52 cm de arame. Desse modo, a soma S de suas áreas será igual a 69 cm².`, blockTypes: ['quote'],
    images: [img('uerj2027eq1-q32-quadrados.svg', 'Três quadrados com lados de 2 cm, 4 cm e 7 cm.')],
    statementAfter: tex`Se as medidas dos lados escolhidos para formar os quadrados forem $x$, $x$ e $y$, em centímetros, utilizando-se exatamente 52 cm de arame, a soma S de suas áreas, em cm², será igual a $S=2x^2+y^2$.

Neste caso, o menor valor possível de S ocorre se x for igual a:`, afterBlockTypes: ['quote', 'command'],
    alternatives: [tex`$\dfrac{13}{3}$`, tex`$\dfrac{13}{2}$`, tex`$\dfrac{11}{3}$`, tex`$\dfrac{11}{2}$`], answer: 'A',
    why: tex`O arame fornece $4(2x+y)=52$, logo $y=13-2x$. Então $S=2x^2+(13-2x)^2=6x^2-52x+169$. O mínimo ocorre no vértice: $x=\dfrac{52}{2\cdot6}=\boxed{\dfrac{13}{3}}$.`,
    wrong: { 1: 'Esse valor não é a abscissa do vértice da função obtida.', 2: 'O coeficiente de x² é 6 após a substituição, o que conduz a 13/3.', 3: 'Esse valor não minimiza a soma das áreas sob a restrição do arame.' },
  }),
  q({
    n: 33, subject: 'Matemática', content: 'Áreas de polígonos e composição geométrica', difficulty: 'Difícil',
    statement: tex`A partir do hexágono regular ABCDEF, foi construído o dodecágono côncavo equilátero AIBJCKDLEGFH, formado pela união dos triângulos equiláteros ACE e BDF, com ângulos internos $\hat A=\hat B=\hat C=\hat D=\hat E=\hat F=60^\circ$.`, blockTypes: ['quote'],
    images: [img('uerj2027eq1-q33-dodecagono.svg', 'Hexágono regular ABCDEF e dodecágono côncavo AIBJCKDLEGFH formado por dois triângulos equiláteros.')],
    statementAfter: tex`Se a área do hexágono mede $24\sqrt3\ \mathrm{cm}^2$, a área do polígono côncavo, em cm², é igual a:`, afterBlockTypes: ['command'],
    alternatives: [tex`$10\sqrt3$`, tex`$12\sqrt3$`, tex`$15\sqrt3$`, tex`$16\sqrt3$`], answer: 'D',
    why: tex`Cada triângulo ACE ou BDF tem metade da área do hexágono: $12\sqrt3$. Na união, a região hexagonal central, de área $8\sqrt3$, é contada duas vezes e deve ser subtraída uma vez. Logo, $2\cdot12\sqrt3-8\sqrt3=\boxed{16\sqrt3\ \mathrm{cm}^2}$.`,
    wrong: { 0: 'O valor subestima a área da união dos dois triângulos.', 1: 'Esse é apenas um múltiplo parcial da composição, não a área final.', 2: 'A área exata é 16√3 cm², não 15√3 cm².' },
  }),
  q({
    n: 34, subject: 'Matemática', content: 'Permutações com repetição e trajetórias', difficulty: 'Fácil',
    statement: 'Considere um quadrado com vários quadrados desenhados em seu interior. Sabe-se que uma partícula pode se deslocar sobre os lados desses quadrados em apenas dois sentidos: sul (S) ou leste (L). No esquema a seguir, está destacada uma possível trajetória dessa partícula de A até B.', blockTypes: ['quote'],
    images: [img('uerj2027eq1-q34-trajetorias.webp', 'Malha de três por três quadrados com trajeto de A a B e rosa dos ventos indicando sul e leste.')],
    statementAfter: 'O número total de trajetórias distintas que essa partícula pode fazer para se deslocar de A até B é igual a:', afterBlockTypes: ['command'],
    alternatives: ['16.', '18.', '20.', '22.'], answer: 'C',
    why: tex`Qualquer trajetória contém três deslocamentos para o sul e três para o leste, em qualquer ordem. O total é a permutação de seis movimentos com repetição: $\dfrac{6!}{3!3!}=\boxed{20}$.`,
    wrong: { 0: 'O total não é uma potência de dois: os seis movimentos precisam conter três S e três L.', 1: 'A contagem combinatória correta fornece 20 trajetórias.', 3: 'Não há dois caminhos adicionais além das 20 ordenações possíveis.' },
  }),
  q({
    n: 35, subject: 'Física', content: 'Energia cinética e conversão de unidades', ...carneirosText,
    statementAfter: 'Admita que dois machos da espécie Ovis canadensis, ambos com massa de 120 kg e velocidade de 64,8 km/h, colidam.\n\nA soma das energias cinéticas dos carneiros, em joules, imediatamente antes da colisão é:', afterBlockTypes: ['quote', 'command'],
    alternatives: ['77760.', '52877.', '38880.', '15552.'], answer: 'C',
    why: tex`Convertendo a velocidade: $64{,}8/3{,}6=18\ \mathrm{m/s}$. Cada animal tem $E_c=\dfrac12\cdot120\cdot18^2=19440$ J. Para dois animais: $E_{total}=2\cdot19440=\boxed{38880\ \mathrm J}$.`,
    wrong: { 0: 'Esse é o dobro da soma das energias cinéticas.', 1: 'O valor não resulta da fórmula com massa 120 kg e velocidade 18 m/s.', 3: 'Esse valor subestima a energia total e não corresponde ao cálculo correto.' },
  }),
  q({
    n: 36, subject: 'Biologia', content: 'Seleção sexual e vantagem adaptativa', ...carneirosText,
    statementAfter: 'Na espécie Ovis canadensis, a maioria dos machos bem-sucedidos nas disputas por fêmeas para a cópula apresenta chifres mais desenvolvidos. Esse fenótipo, geralmente, está associado a outras vantagens adaptativas que são transmitidas à prole.\n\nDesse modo, a seleção sexual feita pelas fêmeas resulta em descendentes com a seguinte característica:', afterBlockTypes: ['quote', 'command'],
    alternatives: ['baixo dimorfismo sexual.', 'menor taxa de fertilidade.', 'maior qualidade genética.', 'alto índice de mortalidade.'], answer: 'C',
    why: 'Ao favorecer características associadas a vantagens adaptativas hereditárias, a seleção sexual tende a aumentar a qualidade genética dos descendentes.',
    wrong: { 0: 'A seleção de chifres desenvolvidos pode intensificar, e não reduzir, o dimorfismo sexual.', 1: 'O processo descrito favorece o sucesso reprodutivo, não menor fertilidade.', 3: 'Vantagens adaptativas não implicam aumento da mortalidade.' },
  }),
  q({
    n: 37, subject: 'Química', content: 'Concentração molar e dissociação de sais', difficulty: 'Fácil',
    statement: tex`O composto denominado ciclamato de sódio, adoçante artificial utilizado em refrigerantes, apresenta a fórmula molecular $\mathrm{NaC_6H_{12}SNO_3}$ e massa molar de 201 g/mol. Uma das consequências do uso desse composto é o aumento da concentração de sódio nessas bebidas.

Considere que determinado refrigerante contenha ciclamato de sódio na concentração de 80,4 mg/L e que haja completa dissociação desse sal.

Nessa bebida, a concentração de íons sódio, em mol/L, é igual a:`, blockTypes: ['quote', 'quote', 'command'],
    alternatives: [tex`$4{,}0\times10^{-4}$`, tex`$2{,}0\times10^{-4}$`, tex`$4{,}0\times10^{-1}$`, tex`$2{,}0\times10^{-1}$`], answer: 'A',
    why: tex`Convertendo, $80{,}4\ \mathrm{mg/L}=0{,}0804\ \mathrm{g/L}$. Assim, $n/V=0{,}0804/201=4{,}0\times10^{-4}\ \mathrm{mol/L}$. Como cada fórmula libera um Na⁺, a concentração de sódio é $\boxed{4{,}0\times10^{-4}\ \mathrm{mol/L}}$.`,
    wrong: { 1: 'Esse valor corresponde à metade da concentração calculada.', 2: 'Há erro de três ordens de grandeza em relação ao resultado.', 3: 'A conversão de miligramas para gramas não conduz a esse valor.' },
  }),
  q({
    n: 38, subject: 'Biologia', content: 'Bomba de sódio e potássio e transporte ativo', difficulty: 'Fácil',
    statement: 'A bomba de sódio e potássio é uma proteína de membrana que realiza transporte ativo de substâncias entre a célula e o meio externo, sendo portanto essencial à homeostase celular. Nesse transporte, ocorre o consumo de ATP e, em consequência, a produção de um gradiente elétrico em que o interior da célula adquire carga elétrica negativa e seu exterior, carga positiva.\n\nEsse processo resulta do seguinte transporte iônico celular:', blockTypes: ['quote', 'command'],
    alternatives: [tex`2 íons $\mathrm{Na^+}$ para fora e 3 íons $\mathrm{K^+}$ para dentro.`, tex`3 íons $\mathrm{Na^+}$ para fora e 2 íons $\mathrm{K^+}$ para dentro.`, tex`2 íons $\mathrm{Na^+}$ para dentro e 3 íons $\mathrm{K^+}$ para fora.`, tex`3 íons $\mathrm{Na^+}$ para dentro e 2 íons $\mathrm{K^+}$ para fora.`], answer: 'B',
    why: 'A cada ciclo, a bomba retira 3 Na⁺ e introduz 2 K⁺, com consumo de ATP. Sai uma carga positiva líquida, tornando o interior relativamente negativo.',
    wrong: { 0: 'As quantidades de sódio e potássio estão invertidas.', 2: 'Além de inverter as quantidades, essa opção inverte os sentidos do transporte.', 3: 'Os íons não são transportados nesses sentidos pela bomba.' },
  }),
  q({
    n: 39, subject: 'Física', content: 'Dilatação volumétrica dos líquidos', difficulty: 'Fácil',
    statement: 'Em um experimento, os líquidos A, B e C, em recipientes distintos, inicialmente à mesma temperatura e com mesmo volume, foram submetidos simultaneamente a uma fonte térmica constante. Observe no gráfico as variações dos volumes de cada líquido em função da temperatura:', blockTypes: ['quote'],
    images: [img('uerj2027eq1-q39-dilatacao.svg', 'Gráfico volume versus temperatura: para a mesma variação de temperatura, A dilata mais que B e B mais que C.')],
    statementAfter: 'Nessas condições, a relação entre os coeficientes de dilatação volumétrica dos líquidos é:', afterBlockTypes: ['command'],
    alternatives: [tex`$\gamma_C=\gamma_B=\gamma_A$`, tex`$\gamma_C<\gamma_B<\gamma_A$`, tex`$\gamma_C>\gamma_B>\gamma_A$`, tex`$\gamma_C<\gamma_B=\gamma_A$`], answer: 'B',
    why: tex`Para o mesmo volume inicial e a mesma variação de temperatura, $\Delta V=\gamma V_0\Delta\theta$. Como A apresenta maior dilatação, seguido de B e C, conclui-se $\boxed{\gamma_C<\gamma_B<\gamma_A}$.`,
    wrong: { 0: 'As inclinações diferentes indicam coeficientes diferentes.', 2: 'A ordem crescente dos coeficientes está invertida.', 3: 'A e B não apresentam a mesma dilatação nem o mesmo coeficiente.' },
  }),
  q({
    n: 40, subject: 'Química', content: 'Estequiometria, reagente limitante e volume molar',
    statement: tex`Recentemente, os jornais noticiaram o caso de intoxicação por gás cloro ($\mathrm{Cl_2}$) durante aula de natação em uma academia. Esse acidente, que provocou uma morte, foi causado pela mistura indevida de hipoclorito de sódio, um agente desinfetante, e de ácido clorídrico, um redutor de pH.

Essas substâncias reagiram conforme a seguinte equação química:

$$\begin{gathered}\mathrm{NaClO(aq)+2HCl(aq)}\\ \rightarrow\ \mathrm{NaCl(aq)+Cl_2(g)+H_2O(l)}\end{gathered}$$

Para demonstrar essa reação, foram misturados 447 g de NaClO e 365 g de HCl, tendo ocorrido o consumo completo do reagente limitante.

Nessa demonstração, o volume de gás cloro formado, em litros, medido sob condições normais de temperatura e pressão, é igual a:`, blockTypes: ['quote', 'label', 'formula', 'quote', 'command'],
    alternatives: ['224.', '112.', '90.', '56.'], answer: 'B',
    why: tex`Há $447/74{,}5=6$ mol de NaClO e $365/36{,}5=10$ mol de HCl. Como 6 mol de NaClO exigiriam 12 mol de HCl, o ácido é limitante. Pela proporção 2:1, formam-se 5 mol de Cl₂. Nas CNTP: $V=5\cdot22{,}4=\boxed{112\ \mathrm L}$.`,
    wrong: { 0: 'Esse valor corresponde a 10 mol de gás, o dobro do produzido.', 2: 'O volume molar fornecido é 22,4 L/mol, e o cálculo resulta em 112 L.', 3: 'Esse volume corresponde a 2,5 mol, metade do valor estequiométrico incorreto.' },
  }),
  q({
    n: 41, subject: 'Biologia', content: 'Ovogênese, meiose e cromátides',
    statement: 'Na figura abaixo, está representado o processo de ovogênese normal completa, sem mutações, de um ovócito primário (ovócito I) com 2n = 4. Na etapa final desse processo, são produzidos três glóbulos polares e um óvulo.', blockTypes: ['quote'],
    images: [img('uerj2027eq1-q41-ovogenese.webp', 'Ovogênese de ovócito primário 2n = 4, com ovócito II, óvulo e três glóbulos polares.')],
    statementAfter: 'Considerando a figura, o número total de cromátides eliminadas nos três glóbulos polares produzidos é igual a:', afterBlockTypes: ['command'],
    alternatives: ['2.', '4.', '6.', '8.'], answer: 'C',
    why: 'O primeiro glóbulo polar e suas duas células-filhas reúnem quatro cromátides; o segundo glóbulo polar, formado na divisão do ovócito II, contém duas. Ao todo, são eliminadas 4 + 2 = 6 cromátides.',
    wrong: { 0: 'Duas cromátides correspondem apenas ao último glóbulo polar.', 1: 'Quatro cromátides não incluem o segundo glóbulo polar.', 3: 'Oito cromátides corresponderia à quantidade inicial, não à eliminada nos três glóbulos.' },
  }),
  q({
    n: 42, subject: 'Física', content: 'Movimento uniforme e velocidade relativa', difficulty: 'Fácil',
    statement: tex`Em uma estação de metrô, os usuários A e B se deslocam no mesmo sentido com velocidades constantes $V_A=1{,}0\ \mathrm{m/s}$ e $V_B=1{,}6\ \mathrm{m/s}$, respectivamente. Em determinado instante, ao atingirem simultaneamente a reta P, o usuário A segue pela esteira rolante à sua frente, enquanto o B segue fora da esteira, ambos mantendo suas velocidades iniciais. Sabe-se que a esteira possui 160 m de comprimento e se move à velocidade $V_E=1{,}0\ \mathrm{m/s}$, como ilustra a figura a seguir.`, blockTypes: ['quote'],
    images: [img('uerj2027eq1-q42-esteira.webp', 'Usuário A sobre esteira rolante e usuário B no chão, ambos no mesmo sentido; percurso de 160 metros a partir da reta P.')],
    statementAfter: 'Considerando apenas o percurso correspondente ao comprimento da esteira, a diferença de tempo, em segundos, que A e B levam para percorrê-lo é igual a:', afterBlockTypes: ['command'],
    alternatives: ['20.', '30.', '40.', '50.'], answer: 'A',
    why: tex`Em relação ao chão, A tem velocidade $V_A+V_E=2{,}0\ \mathrm{m/s}$ e gasta $160/2=80$ s. B gasta $160/1{,}6=100$ s. A diferença é $\boxed{20\ \mathrm s}$.`,
    wrong: { 1: 'A diferença calculada entre 100 s e 80 s é 20 s, não 30 s.', 2: 'Esse valor não corresponde aos tempos obtidos com as velocidades relativas.', 3: 'O tempo de A não pode ser calculado ignorando o movimento da esteira.' },
  }),
  q({
    n: 43, subject: 'Biologia', content: 'Dupla fecundação e endosperma', ...baunilhaText,
    statementAfter: 'No processo de polinização, forma-se o tubo polínico, que conduz os núcleos espermáticos para realizarem uma dupla fecundação no interior do óvulo feminino. Sabe-se que uma estrutura resultante de uma dessas fecundações não apresenta o padrão diploide da maioria das células da planta adulta.\n\nEssa estrutura é denominada:', afterBlockTypes: ['quote', 'command'],
    alternatives: ['zigoto.', 'oosfera.', 'anterozoide.', 'endosperma.'], answer: 'D',
    why: 'Na dupla fecundação das angiospermas, um núcleo espermático une-se aos dois núcleos polares, formando o endosperma, geralmente triploide (3n).',
    wrong: { 0: 'O zigoto é diploide e origina o embrião.', 1: 'A oosfera é a célula gamética feminina haploide, não o produto dessa segunda fecundação.', 2: 'O anterozoide é gameta masculino de certas plantas, não a estrutura triploide formada.' },
  }),
  q({
    n: 44, subject: 'Química', content: 'Ácidos carboxílicos e cadeia carbônica', ...baunilhaText,
    statementAfter: 'No metabolismo vegetal da orquídea, a vanilina é sintetizada a partir do ácido ferúlico, conforme a reação representada a seguir.', afterBlockTypes: ['quote'],
    afterImages: [img('uerj2027eq1-q44-vanilina.webp', 'Reação do ácido ferúlico com água formando vanilina e um ácido carboxílico de fórmula RCOOH.')],
    statementTail: 'Nessa reação, o subproduto formado corresponde a um ácido carboxílico de cadeia carbônica saturada. O número de átomos de carbono presentes nesse ácido é igual ao de átomos de carbono removidos do ácido ferúlico.\n\nO ácido formado é denominado:', tailBlockTypes: ['quote', 'command'],
    alternatives: ['etanoico.', 'butanoico.', 'metanoico.', 'propanoico.'], answer: 'A',
    why: 'A transformação do ácido ferúlico em vanilina remove dois carbonos da cadeia lateral. O ácido carboxílico saturado com dois carbonos é o CH₃COOH, denominado ácido etanoico.',
    wrong: { 1: 'O ácido butanoico possui quatro carbonos.', 2: 'O ácido metanoico possui apenas um carbono.', 3: 'O ácido propanoico possui três carbonos.' },
  }),
  q({
    n: 45, subject: 'Física', content: 'Eletrização por contato e conservação da carga', difficulty: 'Fácil',
    statement: 'W, X, Y e Z são quatro esferas condutoras idênticas, fixas e eletricamente isoladas, que apresentam diferentes valores de cargas elétricas Q, em coulombs, conforme indicado na imagem abaixo.', blockTypes: ['quote'],
    images: [img('uerj2027eq1-q45-esferas.svg', 'Esferas W, X, Y e Z com cargas iniciais 0 C, −6 C, +1 C e +9 C, respectivamente.')],
    statementAfter: 'Considere que, em determinado momento, ocorre contato elétrico simultâneo entre essas esferas.\n\nApós esse contato, a distribuição das cargas elétricas corresponde a:', afterBlockTypes: ['quote', 'command'],
    alternatives: [tex`$Q_W>Q_X>Q_Y>Q_Z$`, tex`$Q_X>Q_W<Q_Y<Q_Z$`, tex`$Q_Y<Q_W>Q_X=Q_Z$`, tex`$Q_Z=Q_Y=Q_X=Q_W$`], answer: 'D',
    why: tex`Condutores idênticos em contato compartilham igualmente a carga total. A soma é $0-6+1+9=4\ \mathrm C$ e cada esfera fica com $+1\ \mathrm C$; portanto, $\boxed{Q_Z=Q_Y=Q_X=Q_W}$.`,
    wrong: { 0: 'Após o equilíbrio, não permanece uma ordem de cargas diferentes.', 1: 'O contato simultâneo entre esferas idênticas equaliza as cargas.', 2: 'Não há razão para apenas duas cargas se igualarem mantendo as demais diferentes.' },
  }),
];
