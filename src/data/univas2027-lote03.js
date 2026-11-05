import { q, img, tex } from './univas2027-helpers.js';

export const univas2027Lote03 = [
  q({
    n: 31, subject: 'Química', content: 'Carboidratos e funções orgânicas', statement: 'Na bioquímica, um importante grupo de substâncias atua como fonte de energia rápida para os seres vivos. Quimicamente, essas substâncias são classificadas como poliálcoois-aldeídos ou poliálcoois-cetonas. Esse grupo de substâncias denomina-se',
    alternatives: ['lipídeo.', 'proteína.', 'vitamina.', 'carboidrato.', 'ácido nucleico.'], answer: 'D',
    why: 'Carboidratos são poliálcoois com função aldeído ou cetona e constituem fonte rápida de energia.',
    wrong: { 0: 'Lipídeos não são definidos como poliálcoois-aldeídos ou cetonas.', 1: 'Proteínas são polímeros de aminoácidos.', 2: 'Vitaminas formam um grupo funcional diverso.', 4: 'Ácidos nucleicos são polímeros de nucleotídeos.' },
  }),
  q({
    n: 32, subject: 'Química', content: 'Componentes e fases de uma mistura', statement: tex`Em um experimento realizado em um laboratório de Ciências, foram adicionados em um béquer 500 mL de água, 100 mL de óleo, 1 g de sal de cozinha ($\mathrm{NaCl}$) e quatro pedaços de ferro com massa total de 10 g. Após a agitação do conteúdo do béquer com uma colher, seguida de um período de repouso, observou-se a formação de uma mistura heterogênea, conforme mostrado na figura.`, blockTypes: ['quote'], images: [img('q32-mistura-bequer.svg', 'Béquer com água, óleo, sal e pedaços de ferro.', '(Imagem gerada por IA. www.chatgpt.com)')],
    statementAfter: 'Essa mistura heterogênea possui', afterBlockTypes: ['command'],
    alternatives: ['7 componentes e 6 fases.', '3 componentes e 6 fases.', '4 componentes e 3 fases.', '4 componentes e 6 fases.', '3 componentes e 3 fases.'], answer: 'C',
    why: 'Há quatro componentes: água, óleo, sal e ferro. Após o repouso, distinguem-se três fases: óleo, solução aquosa de sal e ferro sólido.',
    wrong: { 0: 'O sal se dissolve e os pedaços de ferro constituem uma única fase sólida.', 1: 'Há quatro componentes e apenas três fases.', 3: 'Não se contam seis fases.', 4: 'O sal é um quarto componente, embora se dissolva na água.' },
  }),
  q({
    n: 33, subject: 'Química', content: 'Soluções saturadas e filtração', statement: tex`Para o preparo de uma limonada, foram adicionados, em um copo, água ($\mathrm{H_2O}$), suco de limão, que contém ácido cítrico ($\mathrm{C_6H_8O_7}$) — apenas para conferir sabor —, e açúcar ($\mathrm{C_{12}H_{22}O_{11}}$) em quantidade suficiente para que parte do açúcar permanecesse depositada no fundo do recipiente. O conteúdo do copo foi misturado com uma colher e, em seguida, foi filtrado, obtendo-se, por fim, a limonada.`, blockTypes: ['quote'], images: [img('q33-limonada.svg', 'Limonada com água, açúcar e suco de limão.', '(Imagem gerada por IA. www.chatgpt.com)')],
    statementAfter: 'A limonada obtida ao final desse processo é uma solução', afterBlockTypes: ['command'],
    alternatives: [tex`insaturada em relação a $\mathrm{C_{12}H_{22}O_{11}}$ e a $\mathrm{C_6H_8O_7}$, sendo $\mathrm{H_2O}$ o solvente.`, tex`saturada em relação a $\mathrm{C_{12}H_{22}O_{11}}$, da qual ele é um dos solutos.`, tex`saturada em relação a $\mathrm{C_{12}H_{22}O_{11}}$, com corpo de fundo, sendo $\mathrm{H_2O}$ o solvente.`, tex`supersaturada em relação a $\mathrm{C_{12}H_{22}O_{11}}$, da qual ele é o soluto.`, tex`saturada com corpo de fundo, sendo $\mathrm{C_6H_8O_7}$ o solvente.`], answer: 'B',
    why: 'A presença anterior de açúcar não dissolvido indica saturação. A filtração retira o sólido excedente, e a água é o solvente.',
    wrong: { 0: 'A solução estava saturada em relação ao açúcar.', 2: 'Após a filtração, não permanece corpo de fundo.', 3: 'Não se obtém uma solução supersaturada nesse processo.', 4: 'O solvente é a água e o corpo de fundo foi retirado.' },
  }),
  q({
    n: 34, subject: 'Química', content: 'Destilação simples', statement: 'Entre os séculos IX e XIII, a farmacologia, a medicina e a alquimia utilizavam processos como destilação e filtração para a produção de águas aromáticas, pomadas e xaropes. Com o passar do tempo, essas técnicas foram aperfeiçoadas e deram origem aos processos de purificação de substâncias, empregados hoje em dia em laboratórios, indústrias e no tratamento de água. Atualmente, a destilação simples é uma técnica que pode ser utilizada para separar',
    alternatives: ['misturas homogêneas de dois sólidos.', 'misturas homogêneas de líquidos voláteis.', 'misturas heterogêneas de um sólido com um líquido.', 'mistura de dois líquidos imiscíveis.', 'misturas homogêneas de um sólido com um líquido.'], answer: 'E',
    why: 'Na destilação simples, o líquido volátil vaporiza e condensa, separando-se de um sólido dissolvido não volátil.',
    wrong: { 0: 'Dois sólidos não são separados por destilação simples.', 1: 'Líquidos voláteis miscíveis exigem destilação fracionada.', 2: 'Sólido suspenso e líquido são separados por filtração.', 3: 'Líquidos imiscíveis podem ser separados por decantação.' },
  }),
  q({
    n: 35, subject: 'Química', content: 'Decaimento alfa do amerício-241', statement: tex`O amerício-241, um elemento químico radioativo, é um dos componentes dos aparelhos detectores de fumaça utilizados, por exemplo, em residências, indústrias e hospitais. Em situações de incêndio, esses aparelhos detectam partículas de fumaça no ar e acionam um alerta sonoro ou um sistema de alarme, ajudando a salvar vidas em segundos.

O amerício-241 emite partícula alfa ($\,{}^{4}_{2}\alpha$), transformando-se em`, blockTypes: ['quote', 'command'],
    alternatives: [tex`$\,{}^{245}_{93}\mathrm{Np}$`, tex`$\,{}^{237}_{97}\mathrm{Bk}$`, tex`$\,{}^{245}_{97}\mathrm{Bk}$`, tex`$\,{}^{237}_{93}\mathrm{Np}$`, tex`$\,{}^{239}_{94}\mathrm{Pu}$`], answer: 'D',
    why: tex`Na emissão alfa, o número de massa diminui 4 e o número atômico diminui 2: $\,{}^{241}_{95}\mathrm{Am}\rightarrow\,{}^{4}_{2}\alpha+\,{}^{237}_{93}\mathrm{Np}$.`,
    wrong: { 0: 'A massa deveria diminuir, não aumentar.', 1: 'O elemento resultante tem número atômico 93, não 97.', 2: 'Massa e número atômico estão incorretos.', 4: 'A emissão beta, e não alfa, poderia aumentar o número atômico.' },
  }),
  q({
    n: 36, subject: 'Química', content: 'pH e concentração de íons hidrogênio', statement: tex`A digestão dos alimentos se inicia na boca, onde o pH é neutro. Após serem mastigados e engolidos, os alimentos continuam pelo esôfago até o estômago, onde o pH é reduzido para aproximadamente 2. O conteúdo do estômago apresenta caráter ______ devido à presença de íons $\mathrm{H^+}$ em concentração ______ mol/L.

As lacunas do texto são preenchidas, respectivamente, por`, blockTypes: ['quote', 'command'],
    alternatives: [tex`ácido e igual a $10^{-2}$.`, 'básico e igual a 12.', tex`neutro e maior que $10^{-7}$.`, tex`básico e menor que $10^{-12}$.`, 'ácido e igual a 2.'], answer: 'A',
    why: tex`Com $\mathrm{pH}=2$, o meio é ácido e $[\mathrm{H^+}]=10^{-\mathrm{pH}}=10^{-2}\ \mathrm{mol/L}$.`,
    wrong: { 1: 'pH 2 não é básico e 12 não é a concentração em mol/L.', 2: 'O estômago não está neutro nessa situação.', 3: 'O caráter é ácido e a concentração é 10⁻² mol/L.', 4: 'O valor de pH não é numericamente a concentração de H⁺.' },
  }),
  q({
    n: 37, subject: 'Química', content: 'Energia de ionização de metais', statement: 'Um indivíduo pode consumir, por dia, de duas a três tâmaras, um fruto doce e com polpa macia. Devido a seu alto teor de carboidratos, seu consumo por indivíduos diabéticos fica a critério médico. Além de carboidratos, esse fruto é também fonte de minerais, como magnésio (Mg), potássio (K), cálcio (Ca), ferro (Fe) e cobre (Cu), e de outros nutrientes importantes para o organismo.\n\nDentre os elementos químicos mencionados, aquele que apresenta a menor energia de ionização é o', blockTypes: ['quote', 'command'],
    alternatives: ['magnésio.', 'cálcio.', 'potássio.', 'ferro.', 'cobre.'], answer: 'C',
    why: 'O potássio é metal alcalino do 4º período e, entre os elementos listados, perde seu elétron de valência com menor energia de ionização.',
    wrong: { 0: 'O magnésio tem energia de ionização maior que a do potássio.', 1: 'O cálcio tem dois elétrons de valência e maior energia de ionização.', 3: 'O ferro apresenta maior energia de ionização.', 4: 'O cobre também apresenta maior energia de ionização.' },
  }),
  q({
    n: 38, subject: 'Química', content: 'Reação de dupla troca e precipitação', statement: tex`A figura representa uma reação a partir de volumes iguais de soluções aquosas de cloreto de ferro(III) ($\mathrm{FeCl_3}$) e hidróxido de sódio ($\mathrm{NaOH}$), ambas com mesmas concentrações molares.`, blockTypes: ['label'], images: [img('q38-reacao-cloreto-ferro.svg', 'Mistura de cloreto de ferro III e hidróxido de sódio com formação de precipitado.', '(Imagem gerada por IA. www.chatgpt.com)')],
    statementAfter: 'A reação representada na figura é classificada como uma reação de', afterBlockTypes: ['command'],
    alternatives: ['síntese.', 'dupla troca.', 'deslocamento.', 'análise.', 'oxirredução.'], answer: 'B',
    why: tex`Os íons trocam de parceiros: $\mathrm{FeCl_3+3NaOH\rightarrow Fe(OH)_3(s)+3NaCl}$, com precipitação de $\mathrm{Fe(OH)_3}$.`,
    wrong: { 0: 'Duas substâncias compostas reagem; não há formação de um produto único por síntese.', 2: 'Não há elemento simples deslocando outro.', 3: 'Não ocorre decomposição de um único reagente.', 4: 'Os números de oxidação dos elementos permanecem inalterados.' },
  }),
  q({
    n: 39, subject: 'Química', content: 'Estequiometria e rendimento da pirólise', statement: tex`A imagem ilustra a pirólise do sal branco nitrato de chumbo(II) ($\mathrm{Pb(NO_3)_2}$; $M=331\ \mathrm{g/mol}$), que fornece, como produto sólido, um óxido amarelo e, como produtos gasosos, um gás marrom-avermelhado e um gás incolor.`, blockTypes: ['label'], images: [img('q39-pirolise-nitrato-chumbo.svg', 'Pirólise do nitrato de chumbo II com formação de PbO, NO2 e O2.', '(Imagem gerada por IA. www.chatgpt.com)')],
    statementAfter: tex`Considere a constante de Avogadro igual a $6\times10^{23}\ \mathrm{mol^{-1}}$ e que a reação ilustrada tem rendimento de 75%. O número de moléculas do gás incolor formado nessa reação pela pirólise de 2 648 g de $\mathrm{Pb(NO_3)_2}$ é igual a:`, afterBlockTypes: ['command'],
    alternatives: [tex`$1{,}8\times10^{24}$`, tex`$5{,}6\times10^{24}$`, tex`$1{,}4\times10^{23}$`, tex`$7{,}2\times10^{23}$`, tex`$3{,}6\times10^{22}$`], answer: 'A',
    why: tex`A equação é $\mathrm{2Pb(NO_3)_2\rightarrow2PbO+4NO_2+O_2}$. São $2648/331=8$ mol de sal, que produziriam 4 mol de $\mathrm{O_2}$; com 75% de rendimento, são 3 mol, ou $3\cdot6\times10^{23}=\boxed{1{,}8\times10^{24}}$ moléculas.`,
    wrong: { 1: 'Esse valor não considera corretamente a proporção de O₂.', 2: 'O cálculo subestima a quantidade de matéria.', 3: 'O valor não corresponde a 3 mol de moléculas.', 4: 'Há um erro de potência de dez.' },
  }),
  q({
    n: 40, subject: 'Química', content: 'Contagem de hidrogênios e carbonos secundários', statement: 'Analise a estrutura do β-mirceno, um composto obtido a partir de óleos essenciais, como os de louro e de lúpulo, e empregado na indústria de fragrâncias e perfumes.', blockTypes: ['label'], images: [img('q40-beta-mirceno.svg', 'Fórmula estrutural do beta-mirceno.')],
    statementAfter: 'O número de átomos de hidrogênio e o número de carbonos secundários presentes na estrutura do β-mirceno são, respectivamente,', afterBlockTypes: ['command'],
    alternatives: ['16 e 4.', '14 e 2.', '14 e 1.', '16 e 5.', '18 e 5.'], answer: 'A',
    why: 'A estrutura do β-mirceno corresponde a C₁₀H₁₆; completando as valências dos carbonos, contam-se 16 hidrogênios e 4 carbonos secundários.',
    wrong: { 1: 'A fórmula molecular não tem 14 hidrogênios.', 2: 'Os dois valores subestimam a contagem.', 3: 'Há 4 carbonos secundários, não 5.', 4: 'A estrutura não contém 18 hidrogênios.' },
  }),
  q({
    n: 41, subject: 'Física', content: 'Velocidade relativa e encontro', statement: 'Pega-rabo, de origem nigeriana, é uma brincadeira de pega-pega em que cada jogador possui um rabo, composto por uma fita presa à sua cintura. Cada jogador deve tentar roubar a fita de outro, tomando o devido cuidado para não ter sua própria fita roubada. Suponha que, em uma dessas brincadeiras, uma criança está correndo com velocidade de 4 m/s, atrás de uma segunda criança que corre a 2 m/s. Se a distância entre as crianças é de 10 m, admitindo que ambas mantenham suas velocidades inalteradas e que corram seguindo a mesma linha reta, o tempo para que a criança mais rápida consiga alcançar a outra para roubar sua fita é de',
    alternatives: ['2 s.', '4 s.', '3 s.', '5 s.', '1 s.'], answer: 'D',
    why: tex`A velocidade relativa é $4-2=2\ \mathrm{m/s}$. Assim, $t=10/2=\boxed{5\ \mathrm{s}}$.`,
    wrong: { 0: 'Em 2 s, apenas 4 m da distância seriam eliminados.', 1: 'Em 4 s, ainda faltariam 2 m.', 2: 'Em 3 s, a distância não seria totalmente vencida.', 4: 'Em 1 s, somente 2 m seriam eliminados.' },
  }),
  q({
    n: 42, subject: 'Física', content: 'Movimento circular e velocidade linear', statement: 'Ao produzir jarros, potes e pratos, um artesão utiliza um modelo simples de roda de oleiro, no qual uma mesa giratória é movimentada por meio de um eixo ligado a uma roda de inércia. O artesão, sentado em um banco, empurra a roda de inércia com um de seus pés, fazendo-a girar e, consequentemente, movimentando a mesa giratória, onde a argila pode ser moldada.', blockTypes: ['quote'], images: [img('q42-roda-oleiro.svg', 'Roda de oleiro acionada pelo pé do artesão.')],
    statementAfter: tex`Para que a mesa giratória seja mantida em rotação com frequência constante de 2 Hz, sabendo que o pé do artesão toca a roda de inércia em um ponto a 0,5 m do eixo de rotação do mecanismo, e considerando o valor de $\pi=3$, o valor absoluto da velocidade linear do ponto em que o pé do artesão toca na roda de inércia deve ser igual a`, afterBlockTypes: ['command'],
    alternatives: ['5 m/s.', '3 m/s.', '9 m/s.', '8 m/s.', '6 m/s.'], answer: 'E',
    why: tex`A velocidade linear é $v=2\pi fr=2\cdot3\cdot2\cdot0{,}5=\boxed{6\ \mathrm{m/s}}$.`,
    wrong: { 0: 'O produto correto é 6 m/s, não 5.', 1: 'O valor 3 m/s corresponde a omitir um dos fatores.', 2: 'O valor 9 m/s superestima o produto.', 3: 'O valor 8 m/s não resulta dos dados.' },
  }),
  q({
    n: 43, subject: 'Física', content: 'Lei de Hooke e equilíbrio de molas', statement: 'Determinados modelos de máquinas de lavar roupas têm todo seu mecanismo constituído pelo conjunto cesto + motor + agitador e a água de lavagem, suspenso por quatro hastes, cada haste contendo em sua extremidade inferior uma mola e em sua extremidade superior um apoio. Os apoios se encaixam no corpo da máquina fazendo com que todo o mecanismo se mantenha suspenso.', blockTypes: ['quote'], images: [img('q43-maquina-lavar.svg', 'Conjunto suspenso de uma máquina de lavar por quatro molas.')],
    statementAfter: tex`Considere que a aceleração da gravidade vale 10 m/s² e que as quatro molas têm formatos iguais e mesma constante elástica. O conjunto suspenso tem massa igual a 80 kg e, nessa condição, cada uma das quatro molas se distende em 4 cm. A constante elástica de cada uma dessas molas é, em N/m,`, afterBlockTypes: ['command'],
    alternatives: ['10 000.', '6 000.', '5 000.', '8 000.', '4 000.'], answer: 'C',
    why: tex`Cada mola sustenta $80\cdot10/4=200\ \mathrm N$. Como $x=0{,}04\ \mathrm m$, $k=F/x=200/0{,}04=\boxed{5000\ \mathrm{N/m}}$.`,
    wrong: { 0: 'Usar 800 N em cada mola duplicaria o valor correto.', 1: 'O valor não resulta de F/x com os dados.', 3: 'O valor 8000 N/m não corresponde à força por mola.', 4: 'A deformação de 0,04 m conduz a 5000, não 4000.' },
  }),
  q({
    n: 44, subject: 'Física', content: 'Conversão entre Fahrenheit e Celsius', statement: 'Desejando fazer uma receita de suspiros que viu em um programa culinário estadunidense, um rapaz percebe que houve um erro durante a tradução do programa: a temperatura de 190 °F, à qual o forno deveria ser mantido ligado, não foi convertida para a escala Celsius. Para que o rapaz consiga fazer a receita corretamente, ele deve ajustar a temperatura do forno para, aproximadamente,',
    alternatives: ['83 °C.', '88 °C.', '76 °C.', '79 °C.', '94 °C.'], answer: 'B',
    why: tex`$T_C=(T_F-32)\cdot5/9=(190-32)\cdot5/9\approx87{,}8^\circ\mathrm C\approx\boxed{88^\circ\mathrm C}$.`,
    wrong: { 0: 'O valor 83 °C está abaixo da conversão.', 2: 'Não se deve subtrair uma aproximação inteira incorreta.', 3: 'O resultado correto é próximo de 88 °C.', 4: 'O valor 94 °C superestima a conversão.' },
  }),
  q({
    n: 45, subject: 'Física', content: 'Trabalho em expansão no diagrama P × V', statement: 'O gráfico P × V mostra o ciclo completo de uma máquina térmica.', blockTypes: ['label'], images: [img('q45-ciclo-termico.svg', 'Ciclo retangular em diagrama pressão-volume com expansão de 2 a 6.')],
    statementAfter: 'O trabalho realizado na fase de expansão do ciclo dessa máquina vale', afterBlockTypes: ['command'],
    alternatives: ['1 600 J.', '2 000 J.', '1 800 J.', '2 400 J.', '1 500 J.'], answer: 'D',
    why: tex`Na expansão, $P=6\times10^5\ \mathrm{N/m^2}$ e $\Delta V=(6-2)\times10^{-3}=4\times10^{-3}\ \mathrm{m^3}$. Logo, $W=P\Delta V=\boxed{2400\ \mathrm J}$.`,
    wrong: { 0: 'O valor não corresponde à área sob a expansão superior.', 1: 'A pressão ou a variação de volume foi subestimada.', 2: 'O trabalho é dado por PΔV, não por uma média indevida.', 4: 'O valor 1500 J não utiliza os dados do gráfico.' },
  }),
];
