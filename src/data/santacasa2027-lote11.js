const DAY2_URL = 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/santacasa/2027/2dia/santacasa2027_2dia_prova.pdf';

const shared = {
  exam: 'Santa Casa', year: 2027, phase: '2º dia', originalUrl: DAY2_URL,
  officialAnswerUrl: '/sources/santacasa2027-respostas-esperadas.pdf', kind: 'discursive',
  officialNotes: [
    'Resposta correta acrescida de informação errada implicou perda de ponto.',
    'A pontuação deve seguir o atendimento a cada critério; esta é uma autoavaliação, não uma correção automática.',
  ],
};

const CORONEL_TEXT = `Para responder às questões de 18 a 20, leia o fragmento do romance O coronel e o lobisomem, de José Cândido de Carvalho, publicado originalmente em 1964.

A bem dizer, sou Ponciano de Azeredo Furtado, coronel de patente, do que tenho honra e faço alarde. Herdei do meu avô Simeão terras de muitas medidas, gado do mais gordo, pasto do mais fino. Leio no corrente da vista e até uns latins arranhei em tempos verdes da infância, com uns padres-mestres a dez tostões por mês. Digo, modéstia de lado, que já discuti e joguei no assoalho do Foro mais de um doutor formado. Mas disso não faço glória, pois sou sujeito lavado de vaidade, mimoso no trato, de palavra educada. [...]

Pois foi Ponciano arrotar vantagem e aparecer, na boca de um taquaral¹, aquele pedação de onça que em medida de olho nu ganhava de um garrote em tamanho e peso. João Ramalho, braços no alto, gritou pelo santo nome de Nossa Senhora do Parto e sumiu na macega². Quando dei balancete na situação, vi que estava desprevenido de gente, sem atinar como um sujeito de porte, talqualmente Saturnino Barba de Gato, achou abrigo em mato tão ralinho, quase de não esconder nem preá. Nunca fui desajuizado de enfrentar, em campo aberto, sem maiores instruções e preparo de armas, tanto peso de onça. Sem outra espingarda que não a minha, desguarnecido de costas, piquei a navegação, um cavalinho de lombo educado e boca macia. O bichinho, atingido na curva da virilha, relinchou, ficou nas patas do coice, deu meia-volta e levou Ponciano a sítio seguro — um pantaneiro de água choca, onde ninguém nem perto passava por ser covil de vermina³ e miasma⁴. Se não sou expedito de sela, e não sei domar uma rédea, o tremedal⁵ dava cabo dos meus dias, pois lama sugadora nunca conheci outra de tamanha ganância. Cheguei no Sobradinho mais água podre do que gente, numa dianteira de hora sobre os assustados da onça. Feita a mudança de roupa e lavagem da barba, a primeira deliberação que tomei foi sustar o cabrito:

— Sem-vergonha não come na minha mesa.

Em língua de urtiga recebi os medrosos. Vieram de rabo encolhido, vela murcha, sem vento e sem fala. Larguei de lado os veludos dos frades, as boas educações do Foro e foi um arrazoado de vazar a sala, entrar no corredor e sair na cozinha. Recriminei o covardismo deles todos até gerações passadas e por passar. Cada torcida da barba vinha acapangada de um vitupério:

— Gente desbriada! Se não sou homem de patente, com preparo de guerra, a onça fazia uma desgraça.

(O coronel e o lobisomem, 1971.)

1 taquaral: bambuzal (aglomerado de bambus).
2 macega: campina, campo.
3 vermina: conjunto de vermes e parasitas.
4 miasma: exalação pútrida que emana de animais ou vegetais em decomposição.
5 tremedal: pântano.`;

export const santaCasa2027Lote11 = [
  {
    ...shared,
    id: 'santacasa2027-2dia-q13', number: 'Questão 13', subject: 'Física', content: 'Oscilação vertical de bloco preso a mola', difficulty: 'Média',
    statement: 'Um bloco maciço de massa $m=0{,}2\\ \\mathrm{kg}$ está inicialmente apoiado sobre uma tábua horizontal mantida em repouso em relação à Terra. Esse bloco está preso à extremidade inferior de uma mola ideal de constante elástica $k=5\\ \\mathrm{N/m}$, que, nessa situação inicial, não está deformada. A extremidade superior da mola é presa a uma haste fixa, como mostra a figura.',
    blockTypes: ['prose'],
    images: [{ src: '/images/santacasa2027/2dia-q13-bloco-mola.svg', alt: 'Bloco verde preso a uma mola vertical e apoiado sobre uma tábua horizontal. A mola está presa a uma haste fixa.', className: 'compact-image' }],
    statementAfter: 'Quando a tábua é retirada, o bloco passa a oscilar verticalmente sem sofrer a ação de qualquer força dissipativa. Considere $g=10\\ \\mathrm{m/s^2}$.', afterBlockTypes: ['prose'],
    parts: [
      {
        id: 'a', prompt: 'No campo de Resolução e Resposta, faça uma figura representando o bloco na situação em que ele está em repouso, apoiado na tábua, e indique todas as forças que atuam sobre ele nessa situação. Calcule, em newtons, a intensidade de cada uma dessas forças.', maxScore: 2,
        expected: 'A figura deve apresentar a força normal $\\vec N$, vertical para cima, e o peso $\\vec P$, vertical para baixo. Como a mola não está deformada, $F_{\\text{elástica}}=0$. As intensidades são $|\\vec P|=mg=0{,}2\\cdot10=2\\ \\mathrm N$ e $|\\vec N|=|\\vec P|=2\\ \\mathrm N$.',
        expectedImages: [{ src: '/images/santacasa2027/2dia-q13-forcas-resposta.svg', alt: 'Diagrama de forças do bloco: normal vertical para cima e peso vertical para baixo.' }],
        rejected: 'Não foi aceita resposta com a força elástica ou quaisquer outras forças representadas na figura sem indicar que suas intensidades são nulas.',
        criteria: [
          { points: 1, text: 'Representa somente normal para cima e peso para baixo, sem força elástica não nula nem outras forças indevidas.' },
          { points: 1, text: 'Calcula $|\\vec P|=|\\vec N|=2\\ \\mathrm N$ e registra que a força elástica é nula.' },
        ],
      },
      {
        id: 'b', prompt: 'Calcule, em m/s, o módulo da máxima velocidade escalar que esse bloco atinge, depois que a tábua é retirada e o bloco passa a oscilar.', maxScore: 2,
        expected: 'Na posição de velocidade máxima, $P=F_{\\text{elástica}}$, logo $mg=kx$ e $x=\\frac{0{,}2\\cdot10}{5}=0{,}4\\ \\mathrm m$. Pela conservação da energia:$$\\begin{aligned}mgx&=\\frac{mv_{\\max}^2}{2}+\\frac{kx^2}{2}\\\\0{,}8&=0{,}1v_{\\max}^2+0{,}4\\\\v_{\\max}&=2{,}0\\ \\mathrm{m/s}.\\end{aligned}$$',
        criteria: [
          { points: 1, text: 'Determina a deformação na posição de equilíbrio, $x=0{,}4\\ \\mathrm m$.' },
          { points: 1, text: 'Aplica a conservação da energia e obtém $v_{\\max}=2{,}0\\ \\mathrm{m/s}$.' },
        ],
      },
    ],
    preview: 'Represente as forças no bloco e calcule sua velocidade máxima na oscilação vertical.',
  },
  {
    ...shared,
    id: 'santacasa2027-2dia-q14', number: 'Questão 14', subject: 'Física', content: 'Calor sensível e fusão de liga de alumínio', difficulty: 'Média',
    statement: 'Um bloco de $0{,}8\\ \\mathrm{kg}$ feito de uma liga de alumínio no estado sólido e $1\\ \\mathrm{kg}$ de água líquida estão, inicialmente, à mesma temperatura ambiente. Esse bloco e essa massa de água são colocados em um forno e permanecem dentro dele por $80\\ \\mathrm s$, absorvendo, cada um, calor com potência constante de $600\\ \\mathrm W$. Ao final desse tempo, o bloco e a água são retirados do forno e têm suas temperaturas finais medidas.',
    blockTypes: ['prose'],
    parts: [
      {
        id: 'a', prompt: 'Considerando os calores específicos do bloco e da água líquida iguais a 800 J/(kg ⋅ ºC) e 4 000 J/(kg ⋅ ºC), respectivamente, calcule, em ºC, a diferença entre as temperaturas finais do bloco e da massa de água, quando eles são retirados do forno.', maxScore: 2,
        expected: 'Cada corpo absorve $Q=P\\Delta t=600\\cdot80=48\\ 000\\ \\mathrm J$. Assim, $\\Delta\\theta_{\\text{bloco}}=\\frac{48\\ 000}{0{,}8\\cdot800}=75\\ ^\\circ\\mathrm C$ e $\\Delta\\theta_{\\text{água}}=\\frac{48\\ 000}{1\\cdot4\\ 000}=12\\ ^\\circ\\mathrm C$. Como partem da mesma temperatura, a diferença entre as temperaturas finais é $75-12=\\boxed{63\\ ^\\circ\\mathrm C}$.',
        criteria: [
          { points: 1, text: 'Calcula o calor absorvido por cada corpo, $48\\ 000\\ \\mathrm J$.' },
          { points: 1, text: 'Obtém as variações de 75 °C e 12 °C e calcula a diferença final de 63 °C.' },
        ],
      },
      {
        id: 'b', prompt: 'Suponha que o bloco não seja retirado do forno e que continue absorvendo calor, com a mesma potência de 600 W, até sua fusão completa. Considerando o calor latente de fusão do bloco igual a 450 000 J/kg, calcule, a partir do instante em que a temperatura de fusão do bloco é atingida dentro do forno, o intervalo de tempo necessário, em segundos, para que ocorra a fusão completa desse bloco.', maxScore: 2,
        expected: 'O calor necessário para a fusão é $Q_{\\text{fusão}}=mL=0{,}8\\cdot450\\ 000=360\\ 000\\ \\mathrm J$. Com potência de $600\\ \\mathrm W$, o intervalo é $\\Delta t=\\frac{360\\ 000}{600}=\\boxed{600\\ \\mathrm s}$.',
        criteria: [
          { points: 1, text: 'Calcula o calor latente necessário, $360\\ 000\\ \\mathrm J$.' },
          { points: 1, text: 'Calcula o intervalo de fusão completa como 600 s.' },
        ],
      },
    ],
    preview: 'Compare o aquecimento do bloco e da água e calcule o tempo de fusão completa.',
  },
  {
    ...shared,
    id: 'santacasa2027-2dia-q15', number: 'Questão 15', subject: 'Física', content: 'Propagação e reflexão de pulso em corda', difficulty: 'Difícil',
    statement: 'A figura mostra, no instante $t=0$, um pulso propagando-se na direção horizontal, para a direita, com velocidade constante de $20\\ \\mathrm{cm/s}$, em uma corda homogênea e submetida a uma tração constante. As posições dos pontos dessa corda são determinadas pela coordenada $x$ definida pelo eixo mostrado na figura. Sabe-se que essa corda tem sua extremidade direita fixa em uma parede na coordenada $x=90\\ \\mathrm{cm}$, como mostra a figura.',
    blockTypes: ['prose'],
    images: [{ src: '/images/santacasa2027/2dia-q15-pulso.svg', alt: 'Pulso positivo entre 10 e 30 cm, com crista em 20 cm, propagando-se para a direita a 20 cm/s. A parede está em 90 cm.' }],
    statementAfter: 'Considere não haver perda de energia durante a propagação desse pulso pela corda nem em sua reflexão na parede.', afterBlockTypes: ['prose'],
    parts: [
      {
        id: 'a', prompt: 'Faça, no campo de Resolução e Resposta, uma figura representando esse pulso no instante t = 2 s e, nessa figura, represente, com uma seta vertical para cima (↑) ou com uma seta vertical para baixo (↓), as velocidades vetoriais dos pontos da corda de coordenadas x = 55 cm e x = 65 cm.', maxScore: 2,
        expected: 'Em $t=2\\ \\mathrm s$, o pulso avança 40 cm e passa a ocupar o intervalo de 50 cm a 70 cm, mantendo a concavidade para baixo. Em $x=55\\ \\mathrm{cm}$, a velocidade é vertical para baixo; em $x=65\\ \\mathrm{cm}$, vertical para cima.',
        expectedImages: [{ src: '/images/santacasa2027/2dia-q15a-resposta.svg', alt: 'Pulso entre 50 e 70 cm, com crista em 60 cm. Seta para baixo em 55 cm e seta para cima em 65 cm.' }],
        accepted: 'Foi aceita resposta que indicou as setas como na figura, mesmo sem informar os valores de 55 cm e 65 cm, desde que indicasse corretamente os valores de 50 cm e 70 cm.',
        criteria: [
          { points: 1, text: 'Representa o pulso com concavidade para baixo e extremidades em 50 cm e 70 cm.' },
          { points: 1, text: 'Indica seta vertical para baixo em 55 cm e para cima em 65 cm.' },
        ],
      },
      {
        id: 'b', prompt: 'Faça, no campo de Resolução e Resposta, uma figura representando esse pulso no instante t = 4,5 s e determine as coordenadas x dos pontos da corda, no intervalo 60 cm ≤ x ≤ 80 cm, que apresentam, nesse instante, velocidades verticais nulas.', maxScore: 2,
        expected: 'Após a reflexão na extremidade fixa, o pulso se propaga para a esquerda com concavidade para cima e extremidades em 60 cm e 80 cm. No intervalo solicitado, têm velocidade vertical nula os pontos de coordenadas $\\boxed{x=60\\ \\mathrm{cm},\\ 70\\ \\mathrm{cm}\\ \\text{e}\\ 80\\ \\mathrm{cm}}$.',
        expectedImages: [{ src: '/images/santacasa2027/2dia-q15b-resposta.svg', alt: 'Pulso refletido, com concavidade para cima, entre 60 e 80 cm e vale em 70 cm, propagando-se para a esquerda.' }],
        criteria: [
          { points: 1, text: 'Representa o pulso refletido com concavidade para cima e extremidades em 60 cm e 80 cm.' },
          { points: 1, text: 'Determina 60 cm, 70 cm e 80 cm como as coordenadas de velocidade vertical nula.' },
        ],
      },
    ],
    preview: 'Desenhe o pulso antes e depois da reflexão e determine as velocidades dos pontos da corda.',
  },
  {
    ...shared,
    id: 'santacasa2027-2dia-q16', number: 'Questão 16', subject: 'Física', content: 'Uso de amperímetro e voltímetro em circuito', difficulty: 'Média',
    statement: 'Em um laboratório didático, os estudantes aprendem a maneira correta de inserir medidores de corrente e de tensão em circuitos elétricos. Para isso, têm disponíveis um amperímetro e um voltímetro ideais, um gerador de força eletromotriz $12\\ \\mathrm V$ e de resistência interna $2\\ \\Omega$ e um resistor ôhmico de resistência $46\\ \\Omega$.',
    blockTypes: ['prose'],
    images: [{ src: '/images/santacasa2027/2dia-q16-medidores.svg', alt: 'Representações de gerador de 12 V e 2 ohms, amperímetro, voltímetro e resistor de 46 ohms.' }],
    statementAfter: 'O professor pede aos estudantes que, utilizando fios de ligação de resistência desprezível, montem um circuito em que se possa medir a intensidade da corrente que flui através do resistor e a diferença de potencial entre os terminais desse resistor. Um dos estudantes monta corretamente o circuito mostrado na figura 1. Outro estudante monta, de forma equivocada, o circuito mostrado na figura 2.', afterBlockTypes: ['prose'],
    afterImages: [{ src: '/images/santacasa2027/2dia-q16-circuitos.svg', alt: 'Figura 1: amperímetro em série com o resistor e voltímetro em paralelo. Figura 2: voltímetro em série no circuito e amperímetro em paralelo com o resistor.' }],
    statementTail: 'Determine as indicações do amperímetro e do voltímetro:', tailBlockTypes: ['command'],
    parts: [
      {
        id: 'a', prompt: 'No circuito mostrado na figura 1.', maxScore: 2,
        expected: 'No circuito correto, $i_1=\\frac{E}{R+r}=\\frac{12}{46+2}=0{,}25\\ \\mathrm A$ e $U_1=Ri_1=46\\cdot0{,}25=11{,}5\\ \\mathrm V$. Portanto, o amperímetro indica $\\boxed{0{,}25\\ \\mathrm A}$ e o voltímetro, $\\boxed{11{,}5\\ \\mathrm V}$.',
        criteria: [
          { points: 1, text: 'Calcula a indicação do amperímetro como 0,25 A.' },
          { points: 1, text: 'Calcula a indicação do voltímetro como 11,5 V.' },
        ],
      },
      {
        id: 'b', prompt: 'No circuito mostrado na figura 2.', maxScore: 2,
        expected: 'O voltímetro ideal tem resistência tendendo ao infinito e, ligado em série, impede a circulação de corrente; sua indicação é a força eletromotriz do gerador. Assim, o amperímetro indica $\\boxed{i_2=0\\ \\mathrm A}$ e o voltímetro indica $\\boxed{U_2=E=12\\ \\mathrm V}$.',
        criteria: [
          { points: 1, text: 'Determina a indicação do amperímetro como 0 A.' },
          { points: 1, text: 'Determina a indicação do voltímetro como 12 V.' },
        ],
      },
    ],
    preview: 'Compare as ligações dos medidores e determine suas indicações nos dois circuitos.',
  },
  {
    ...shared,
    id: 'santacasa2027-2dia-q17', number: 'Questão 17', subject: 'Português', content: 'Cartum e derivação imprópria', difficulty: 'Média',
    statement: 'Examine o cartum de Rafa Figueiredo.', blockTypes: ['prose'],
    images: [{ src: '/images/santacasa2027/2dia-q17-cartum.jpg', alt: 'Cartum “Paquera filosófica”: uma mulher olha o celular e a fala diz “Manda foto do agora”.', caption: 'Defeito de fábrica, 2024.' }],
    parts: [
      {
        id: 'a', prompt: 'Por que razão o cartum qualifica a paquera como “filosófica”?', maxScore: 2,
        expected: 'Porque o personagem não pede uma foto “DE agora” da mulher, isto é, tirada naquele exato momento, mas uma foto “DO agora”, do próprio tempo presente. O pedido se transforma em uma reflexão sobre a natureza do tempo, tema tradicional da Filosofia.',
        criteria: [
          { points: 1, text: 'Distingue a foto “DE agora”, tirada no momento, da foto “DO agora”, do tempo presente.' },
          { points: 1, text: 'Relaciona o pedido a uma reflexão filosófica sobre a natureza do tempo.' },
        ],
      },
      {
        id: 'b', prompt: 'Que fenômeno linguístico contribui decisivamente para o efeito de humor do cartum? Justifique sua resposta.', maxScore: 2,
        expected: 'O fenômeno é a derivação imprópria: a palavra “agora”, originalmente um advérbio, passa a ser empregada como substantivo, sem alteração de sua forma.',
        accepted: 'Também foram aceitas as denominações “substantivação” e “conversão”.',
        criteria: [
          { points: 1, text: 'Identifica derivação imprópria, substantivação ou conversão.' },
          { points: 1, text: 'Explica a mudança de “agora” de advérbio para substantivo, sem alteração formal.' },
        ],
      },
    ],
    preview: 'Interprete o humor do cartum e a mudança de classe gramatical de “agora”.',
  },
  {
    ...shared,
    id: 'santacasa2027-2dia-q18', number: 'Questão 18', subject: 'Português', content: 'Sentido figurado e pessoa gramatical no discurso narrativo', difficulty: 'Difícil',
    statement: CORONEL_TEXT, blockTypes: ['prose'], works: ['O coronel e o lobisomem'],
    parts: [
      {
        id: 'a', prompt: 'Cite do primeiro parágrafo um adjetivo empregado em sentido figurado. Justifique sua escolha.', maxScore: 2,
        expected: 'Uma resposta possível é “tempos verdes da infância”: “verdes” sugere juventude, começo da infância, prosperidade, tempos no campo ou natureza. Outras respostas oficiais são “sujeito lavado de vaidade”, em que “lavado” significa sem vaidade, honesto ou humilde; “pasto fino”, em que “fino” se refere à qualidade, não à espessura; e “gado gordo”, desde que a justificativa mostre que “gordo” indica quantidade ou qualidade, não necessariamente a gordura dos animais.',
        accepted: 'A expressão “gado gordo” só foi aceita quando a justificativa demonstrou o uso figurado de “gordo”, pois o termo também admite leitura literal.',
        rejected: 'Não foram aceitas as justificativas “porque o tempo não pode ser verde” e “porque não é possível lavar a vaidade”.',
        criteria: [
          { points: 1, text: 'Transcreve um adjetivo do primeiro parágrafo empregado em sentido figurado, entre as possibilidades oficiais.' },
          { points: 1, text: 'Justifica o sentido não literal do adjetivo escolhido.' },
        ],
      },
      {
        id: 'b', prompt: 'Considerando que o fragmento transcrito é narrado pelo próprio coronel Ponciano, transcreva um pequeno trecho em que o narrador emprega uma pessoa gramatical no lugar de outra. Justifique sua resposta.', maxScore: 2,
        expected: 'Exemplo: “Pois foi Ponciano arrotar vantagem”. O narrador, que fala de si, passa da primeira para a terceira pessoa, apresentando-se como se fosse outra pessoa ou um narrador externo.',
        accepted: 'Também foi aceito “O bichinho [...] deu meia-volta e levou Ponciano a sítio seguro”, com a mesma justificativa. A menção à segunda pessoa foi aceita na explicação da troca. Outra possibilidade foi “[...] achou abrigo em mato tão ralinho”, explicando que a terceira pessoa deixa indefinido quem pratica a ação, podendo ser o próprio Ponciano; transcrição maior só foi aceita quando a justificativa mencionou especificamente o verbo “achou”.',
        rejected: 'Não foi aceita a justificativa “pois o narrador emprega uma pessoa gramatical no lugar de outra”, por apenas repetir o enunciado. Também não foi aceito responder “no segundo parágrafo”, pois o comando pedia transcrição.',
        criteria: [
          { points: 1, text: 'Transcreve um trecho oficial em que o narrador fala de si em outra pessoa gramatical.' },
          { points: 1, text: 'Explica a mudança de pessoa, sem apenas repetir o comando da questão.' },
        ],
      },
    ],
    preview: 'Analise adjetivos em sentido figurado e a alternância de pessoa gramatical no narrador.',
  },
  {
    ...shared,
    id: 'santacasa2027-2dia-q19', number: 'Questão 19', subject: 'Português', content: 'Expressão em contexto e personificação', difficulty: 'Difícil',
    statement: CORONEL_TEXT, blockTypes: ['prose'], works: ['O coronel e o lobisomem'],
    parts: [
      {
        id: 'a', prompt: 'Considerando o contexto em que se insere, explicite o sentido da frase “piquei a navegação” (2º parágrafo).', maxScore: 2,
        expected: 'O coronel esporeou o cavalo em que estava montado e fugiu rapidamente para longe da onça. A resposta deve mencionar nominalmente o meio de transporte e apresentar a ideia de urgência ou velocidade provocada pelo pânico diante do predador.',
        accepted: 'Meios de transporte aceitos: cavalinho, burro, mula, equino, cavalgada ou galope. Ações com urgência/velocidade aceitas: sair às pressas; partir em fuga; escapar; ir embora rápido; ir rápido a um local seguro; sair logo; retirar-se rapidamente; sair correndo; correr; sair imediatamente; sair sem perder tempo; sair o quanto antes; encontrar uma forma ágil de se locomover; partir rapidamente; deslocar-se prontamente; sair desesperadamente; seguir caminho com pressa; seguir em frente depressa; escolher uma direção com rapidez; movimentar-se mais rapidamente; aumentar a velocidade para sair; bater em retirada; galopar; acelerar (o cavalo); dar velocidade (ao cavalo); foi ágil ao sair; deixar o local com rapidez; acelerar para sair da área de risco; ir embora a ritmo acelerado; sair em disparada.',
        rejected: 'Não foram aceitos termos genéricos como “montar no animal” ou “montaria” sem mencionar cavalo, nem animais ausentes no texto, como “cabrito”. Não foram aceitas ações neutras ou lentas: voltar; desistir; abandonar; recuar; tomar rumo; sair; ir embora; deixar o local; partir; seguir caminho; seguir adiante; seguir em frente; seguir viagem; retirar-se; dar partida (no cavalo); iniciar o trajeto. Também foram recusadas ideias vagas como “apressar-se para tomar uma decisão” ou “executar rapidamente a ação, o ato”; ideias de otimização como encurtar viagem, pegar atalho, cortar caminho, acabar mais cedo, reduzir tempo, seguir um caminho mais rápido, desviar o caminho, mudar de rumo ou evadir; e expressões idiomáticas ou gírias sem explicação: se mandar; picar a mula; meter o pé; pular fora; cair fora; dar o fora; sair fora; dar meia-volta.',
        criteria: [
          { points: 1, text: 'Menciona o cavalo, ou outra denominação oficialmente aceita, como meio de transporte usado pelo coronel.' },
          { points: 1, text: 'Explica a fuga rápida para longe da onça, com ideia de urgência ou velocidade causada pelo pânico.' },
        ],
      },
      {
        id: 'b', prompt: '“O bichinho, atingido na curva da virilha, relinchou, ficou nas patas do coice, deu meia-volta e levou Ponciano a sítio seguro — um pantaneiro de água choca, onde ninguém nem perto passava por ser covil de vermina e miasma. Se não sou expedito de sela, e não sei domar uma rédea, o tremedal dava cabo dos meus dias, pois lama sugadora nunca conheci outra de tamanha ganância.” (2º parágrafo)\n\nNesse trecho, que elemento é personificado? Justifique sua resposta.', maxScore: 2,
        expected: 'O elemento personificado é a lama, pois recebe características humanas, como ganância, vontade própria e a capacidade de “dar cabo” dos dias do narrador.',
        accepted: 'Também foram aceitos “tremedal” e “pântano” como elemento personificado. Justificativas aceitas: atribuir ao elemento características de pessoas ou de seres vivos; afirmar que tem ganância; atribuir a ação de sugar/succionar; dizer que queria dar cabo dos dias do narrador; atribuir vontades próprias; dar vida a um ser inanimado; atribuir qualidades de assassino ou ação de matar; afirmar que o narrador seria atacado; apresentá-lo como ser, alguém, personagem ou antagonista; considerá-lo ser biótico; atribuir ações de seres vivos/animados, ações que exigem consciência ou poder de ação com cunho de malefício. Também foram aceitas as citações “dava cabo dos meus dias” e “nunca conheci outra de tamanha ganância”.',
        rejected: 'Não foram aceitos “pantaneiro” ou “pantanal” como elemento personificado. Não foram aceitas justificativas vagas como “o elemento apresenta características”, “o elemento apresenta ações”, “o elemento é personificado” ou “o elemento é arrogante/vaidoso”. Só foram consideradas as justificativas de respostas que indicaram corretamente o elemento personificado.',
        criteria: [
          { points: 1, text: 'Identifica lama, tremedal ou pântano como o elemento personificado.' },
          { points: 1, text: 'Justifica a personificação por características humanas, ações conscientes ou citação oficial pertinente.' },
        ],
      },
    ],
    preview: 'Explique uma expressão no contexto da fuga e identifique a personificação no trecho.',
  },
  {
    ...shared,
    id: 'santacasa2027-2dia-q20', number: 'Questão 20', subject: 'Português', content: 'Prosa de Guimarães Rosa e pronome demonstrativo anafórico', difficulty: 'Média',
    statement: CORONEL_TEXT, blockTypes: ['prose'], works: ['O coronel e o lobisomem'],
    parts: [
      {
        id: 'a', prompt: 'Apresente duas características que aproximam o fragmento transcrito de José Cândido de Carvalho da prosa de Guimarães Rosa.', maxScore: 2,
        expected: 'Duas características entre: oralidade; inventividade lexical; inventividade semântica; regionalismo; hibridismo de registros linguísticos; elaboração sonora e rítmica da linguagem.',
        criteria: [
          { points: 1, text: 'Apresenta uma das seis características oficiais de aproximação com a prosa de Guimarães Rosa.' },
          { points: 1, text: 'Apresenta uma segunda característica oficial, distinta da primeira.' },
        ],
      },
      {
        id: 'b', prompt: 'Cite do primeiro parágrafo um pronome demonstrativo que retoma um período inteiro. Explicite o período retomado por esse pronome.', maxScore: 2,
        expected: 'O pronome é “isso”, na forma “disso”. Ele retoma o período: “Digo, modéstia de lado, que já discuti e joguei no assoalho do Foro mais de um doutor formado”.',
        criteria: [
          { points: 1, text: 'Identifica “isso” ou “disso” como o pronome demonstrativo anafórico.' },
          { points: 1, text: 'Explicita o período retomado: “Digo, modéstia de lado, que já discuti e joguei no assoalho do Foro mais de um doutor formado”.' },
        ],
      },
    ],
    preview: 'Compare a prosa a Guimarães Rosa e identifique a retomada feita por um pronome demonstrativo.',
  },
];
