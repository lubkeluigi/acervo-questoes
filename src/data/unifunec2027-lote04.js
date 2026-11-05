const PROCESS_URL = 'https://tmpfiles.org/w2Atoes4Ntqn/provaii-objetiva3.pdf';
const ANSWER_URL = 'https://tmpfiles.org/wkAFoLsqN17m/gabaritodaprovaii-objetiva3.pdf';
const shared = {
  exam: 'Unifunec', year: 2027, phase: 'Prova II', originalUrl: PROCESS_URL,
  officialAnswerUrl: ANSWER_URL, kind: 'objective', correctionOrigin: 'official',
};
const tex = String.raw;
const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');

const ENGLISH_TEXT = `As summer arrives in the northern hemisphere, so do the noctilucent clouds — hopefully. These high-altitude formations are as enigmatic as they are beautiful. Their name derives from Latin, meaning “night shining”.

They appear during the summer months and glow with an electric-blue intensity against the darkening western sky, about half an hour after sunset. Existing at an altitude of about 80 km, virtually the edge of space, they are the highest known clouds in Earth’s atmosphere.

Some believe the key to understanding the clouds is that there appear to be no recorded sightings of them until 1885. Considering how obvious they are, some researchers have suggested that they may be the result of industrial pollutants that were beginning to really accumulate in the atmosphere by the late 19th century. These aerosols then provided sites around which the water ice could form.

Others point out that the timing of their appearance roughly coincided with the 1885 eruption of the Krakatoa volcano. Still others think it is the way that climate change drives water vapour into the upper atmosphere that makes the clouds possible. Whatever their origin, they are beautiful formations to watch out for.

(Stuart Clark. www.theguardian.com, 01.06.2026. Adaptado.)`;
const ENGLISH_BLOCKS = ['prose', 'prose', 'prose', 'prose', 'source'];
const englishQuestion = (command) => ({
  statement: 'Leia o texto para responder às questões de 31 a 34.', blockTypes: ['label'],
  images: [{ src: '/images/unifunec2027/q33-nuvens-noctilucentes.png', alt: 'Nuvens noctilucentes com brilho azul-elétrico sobre o horizonte e sua reflexão na água.' }],
  statementAfter: `${ENGLISH_TEXT}\n\n${command}`,
  afterBlockTypes: [...ENGLISH_BLOCKS, 'command'], preview: command,
});

export const unifunec2027Lote04 = [
  {
    ...shared, ...englishQuestion('According to the text, the noctilucent clouds'),
    id: 'unifunec2027-prova2-q31', number: 'Questão 31', subject: 'Inglês', content: 'Compreensão de texto: nuvens noctilucentes', difficulty: 'Fácil',
    alternatives: ['can be observed during the afternoon across the summer months.', 'may prevent the polluting aerosols from spreading out.', 'can be spotted above Earth’s atmosphere by researchers.', 'may disappear from the skies due to climate change.', 'could be the result of different environmental changes.'], correct: 4,
    resolution: ['O texto apresenta três possíveis origens: poluentes industriais, a erupção do Krakatoa e mudanças climáticas que levam vapor de água à alta atmosfera. Assim, as nuvens podem resultar de diferentes mudanças ambientais.'],
    analyses: ['Incorreta. Elas aparecem cerca de meia hora após o pôr do sol, e não durante a tarde.', 'Incorreta. Os aerossóis oferecem locais para formação de gelo; o texto não diz que as nuvens impeçam sua dispersão.', 'Incorreta. Elas estão a cerca de 80 km, virtualmente no limite do espaço, mas ainda são descritas como nuvens da atmosfera terrestre.', 'Incorreta. A mudança climática é apresentada como possível causa da formação, não de seu desaparecimento.', 'Correta. Poluentes, erupção vulcânica e mudanças climáticas são hipóteses ambientais mencionadas.'],
  },
  {
    ...shared, ...englishQuestion(`In the excerpt from the first paragraph “As summer arrives in the northern hemisphere, so do the noctilucent clouds — ${underline('hopefully')}”, the underlined word expresses`),
    id: 'unifunec2027-prova2-q32', number: 'Questão 32', subject: 'Inglês', content: 'Vocabulário em contexto: hopefully', difficulty: 'Fácil',
    alternatives: ['an estimated time.', 'a positive expectation.', 'a possible explanation.', 'a probable consequence.', 'an absolute certainty.'], correct: 1,
    resolution: ['Hopefully significa “com esperança” ou “tomara”. No trecho, expressa a expectativa positiva de que as nuvens noctilucentes cheguem com o verão.'],
    analyses: ['Incorreta. A palavra não indica uma estimativa de tempo.', 'Correta. Hopefully expressa esperança ou expectativa positiva.', 'Incorreta. O advérbio não apresenta uma explicação.', 'Incorreta. Não há indicação de consequência provável.', 'Incorreta. A esperança não equivale a certeza absoluta.'],
  },
  {
    ...shared, ...englishQuestion('The excerpt from the text that best describes what is visually represented in the image is:'),
    id: 'unifunec2027-prova2-q33', number: 'Questão 33', subject: 'Inglês', content: 'Relação entre texto e imagem', difficulty: 'Fácil',
    alternatives: ['“the timing of their appearance roughly coincided with the 1885 eruption of the Krakatoa volcano” (4th paragraph).', '“These aerosols then provided sites around which the water ice could form” (3rd paragraph).', '“Still others think it is the way that climate change drives water vapour into the upper atmosphere that makes the clouds possible” (4th paragraph).', '“Some believe the key to understanding the clouds is that there appear to be no recorded sightings of them until 1885” (3rd paragraph).', '“They appear during the summer months and glow with an electric-blue intensity” (2nd paragraph).'], correct: 4,
    resolution: ['A fotografia destaca visualmente o brilho azul-elétrico das nuvens no céu e sua reflexão sobre a água. O trecho do segundo parágrafo descreve exatamente essa característica.'],
    analyses: ['Incorreta. A data de uma erupção não é algo que a fotografia represente visualmente.', 'Incorreta. A formação microscópica de gelo em torno de aerossóis não é visível na imagem.', 'Incorreta. O transporte de vapor pela mudança climática não é o elemento mostrado.', 'Incorreta. A ausência de registros até 1885 não pode ser representada pela fotografia.', 'Correta. A imagem evidencia o brilho azul-elétrico descrito nesse trecho.'],
  },
  {
    ...shared, ...englishQuestion(`No trecho do quarto parágrafo “${underline('Others')} point out that the timing of their appearance roughly coincided with the 1885 eruption of the Krakatoa volcano”, o termo sublinhado refere-se`),
    id: 'unifunec2027-prova2-q34', number: 'Questão 34', subject: 'Inglês', content: 'Referenciação: others', difficulty: 'Média',
    alternatives: ['aos pesquisadores.', 'às mudanças climáticas.', 'às nuvens noctilucentes.', 'aos poluentes.', 'aos meses de verão.'], correct: 0,
    resolution: ['Others retoma pessoas que investigam ou propõem explicações para as nuvens, em paralelo com “some researchers” e “some believe” do parágrafo anterior. Portanto, refere-se aos pesquisadores.'],
    analyses: ['Correta. “Others” significa “outros [pesquisadores]” e introduz outra hipótese de especialistas.', 'Incorreta. Mudanças climáticas aparecem depois, na hipótese apresentada, e não são o referente do pronome.', 'Incorreta. As nuvens são retomadas por “their appearance”, não por “Others”.', 'Incorreta. Poluentes foram citados no parágrafo anterior, mas não são quem “point out”.', 'Incorreta. Os meses de verão não têm relação com o verbo “apontar” nem com o referente do pronome.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q35', number: 'Questão 35', subject: 'Artes', content: 'Cartum, ironia e crítica ambiental', difficulty: 'Média',
    statement: '', blockTypes: [],
    images: [{ src: '/images/unifunec2027/q35-cartum-poluicao.png', alt: 'Cartum: pássaros apresentam um novo índice de desenvolvimento de um país; no segundo quadrinho, o índice é o número de máscaras contra poluição usadas pela população.', caption: '(Rohan Chakravarty. www.greenhumour.com)' }],
    statementAfter: 'A ironia expressa no cartum decorre, sobretudo,', afterBlockTypes: ['command'], preview: 'Interprete a ironia do cartum sobre desenvolvimento e máscaras de poluição.',
    alternatives: ['do contraste entre a noção de desenvolvimento e a realidade da poluição.', 'do duplo sentido da palavra “masks” no segundo quadrinho.', 'da pretensa novidade em relação ao modo de usar as máscaras.', 'da associação entre o uso de máscaras e a melhoria dos indicadores de saúde pública.', 'da falta de coerência entre o que o pássaro diz e o que ele faz.'], correct: 0,
    resolution: ['O cartum chama de “novo índice de desenvolvimento” o número de máscaras contra poluição. A ironia está em medir o suposto desenvolvimento por um sinal de degradação ambiental, contrapondo a ideia de progresso à realidade poluída.'],
    analyses: ['Correta. O suposto indicador de desenvolvimento revela, na verdade, a gravidade da poluição.', 'Incorreta. “Masks” não apresenta duplo sentido decisivo; o efeito irônico vem do indicador escolhido.', 'Incorreta. A novidade é atribuída ao índice, não a uma nova maneira de usar máscaras.', 'Incorreta. As máscaras indicam exposição à poluição, e não melhoria da saúde pública.', 'Incorreta. Não há contradição entre fala e conduta do pássaro como fonte principal da ironia.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q36', number: 'Questão 36', subject: 'Física', content: 'Fluxo de pessoas e tempo de evacuação', difficulty: 'Fácil',
    statement: 'Uma escola tem seis salas de aula distribuídas em um edifício térreo, as quais são conectadas por um corredor que termina na entrada desse edifício. Essa passagem dá acesso ao pátio, como mostra a figura.', blockTypes: ['prose'],
    images: [{ src: '/images/unifunec2027/q36-planta-escola.svg', alt: 'Planta esquemática de seis salas de aula ligadas por um corredor à entrada do edifício e ao pátio.' }],
    statementAfter: 'Em uma simulação de incêndio, para a evacuação segura e organizada dos ocupantes desse edifício, todos devem se movimentar para o pátio com a mesma velocidade constante, de forma que pela entrada do edifício passem 2 pessoas por vez, a cada segundo. Sabendo que cada sala de aula tem 40 pessoas e que não se permitiu a ocorrência de espaços vazios no corredor, o tempo previsto para uma evacuação segura até que todas as pessoas consigam sair do edifício é de', afterBlockTypes: ['command'], preview: 'Calcule o tempo de evacuação de seis salas com fluxo constante pela entrada.',
    alternatives: ['dois minutos e meio.', 'um minuto e meio.', 'dois minutos.', 'quatro minutos.', 'um minuto.'], correct: 2,
    resolution: ['Há 6 × 40 = 240 pessoas. Como saem 2 pessoas por segundo, o tempo é 240 ÷ 2 = 120 segundos, equivalentes a 2 minutos.'],
    analyses: ['Incorreta. Dois minutos e meio corresponderiam a 150 segundos, mais que os 120 necessários.', 'Incorreta. Um minuto e meio permitiria a saída de apenas 180 pessoas nesse fluxo.', 'Correta. O fluxo de 2 pessoas por segundo evacua 240 pessoas em 120 segundos, ou 2 minutos.', 'Incorreta. Quatro minutos corresponderia ao dobro do tempo calculado.', 'Incorreta. Em um minuto passariam apenas 120 pessoas, metade do total.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q37', number: 'Questão 37', subject: 'Física', content: 'Conservação e dissipação de energia mecânica', difficulty: 'Média',
    statement: tex`Um avião monomotor perdeu uma de suas rodas momentos após a decolagem. No instante da perda, a roda do avião estava a 5 m do chão, sua velocidade era de 30 m/s e ela não estava mais girando. Considere $10\ \mathrm{m/s^2}$ o valor da aceleração da gravidade e 12 kg a massa da roda. Supondo que o ar não atrapalhe o movimento da roda e que, ao tocar o chão, toda a energia mecânica da roda seja transformada em calor, a intensidade da energia mecânica dissipada é`,
    blockTypes: ['prose'], preview: 'Calcule a energia mecânica dissipada pela roda ao tocar o chão.',
    alternatives: ['5 500 J.', '4 000 J.', '5 000 J.', '6 000 J.', '3 000 J.'], correct: 3,
    resolution: [tex`No instante da perda, a energia mecânica em relação ao chão é $E=mgh+\frac{mv^2}{2}$. Assim, $E=12\cdot10\cdot5+\frac{12\cdot30^2}{2}=600+5400=\boxed{6000\ \mathrm J}$. Sem atrito com o ar, esse total é dissipado no impacto.`],
    analyses: ['Incorreta. A soma correta das energias potencial e cinética é 6 000 J.', 'Incorreta. O valor não inclui corretamente as duas formas de energia.', 'Incorreta. A energia cinética sozinha é 5 400 J e a potencial é 600 J; o total é 6 000 J.', 'Correta. A energia dissipada é 600 J + 5 400 J = 6 000 J.', 'Incorreta. O resultado correto é 6 000 J.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q38', number: 'Questão 38', subject: 'Física', content: 'Dilatação volumétrica e dilatação aparente', difficulty: 'Média',
    statement: 'Uma panela de alumínio, à temperatura ambiente, foi completamente preenchida com água à mesma temperatura e colocada sobre a chama de um fogão para aquecimento. Momentos mais tarde, verificou-se que parte da água da panela havia transbordado e apagado o fogo. A explicação para a água ter derramado está diretamente relacionada com o fato de o coeficiente de dilatação volumétrica da água líquida ser __________ que o coeficiente de dilatação volumétrica do alumínio em estado sólido. Apesar de, inicialmente, os volumes da água e do interior da panela serem iguais, com o aquecimento, a variação do volume da água mostra-se __________ que a variação do volume interno da panela. Sendo assim, a dilatação real da água pode ser calculada pela __________ da variação do volume interno da panela com o volume da água derramada.\n\nAs lacunas do texto são preenchidas, respectivamente, por:',
    blockTypes: ['prose', 'command'], preview: 'Complete as lacunas sobre dilatação real e aparente da água.',
    alternatives: ['maior – maior – diferença.', 'maior – menor – diferença.', 'menor – maior – soma.', 'menor – menor – diferença.', 'maior – maior – soma.'], correct: 4,
    resolution: ['A água se expande mais que o interior da panela para a mesma variação de temperatura, por isso transborda. A dilatação real do líquido é a soma da dilatação do recipiente com o volume extravasado: ΔV_real = ΔV_panela + ΔV_derramado.'],
    analyses: ['Incorreta. As duas primeiras relações estão corretas, mas a dilatação real é obtida pela soma, e não pela diferença.', 'Incorreta. A variação do volume da água é maior, e não menor, que a do interior da panela; além disso, usa-se a soma.', 'Incorreta. O coeficiente da água não é menor nessa situação, e a dilatação real não decorre dessa combinação.', 'Incorreta. As três palavras são incompatíveis com a explicação do transbordamento.', 'Correta. Maior coeficiente implica maior expansão da água, e a dilatação real é a soma da expansão da panela com o volume derramado.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q39', number: 'Questão 39', subject: 'Física', content: 'Óptica: lentes convergentes e divergentes', difficulty: 'Difícil',
    statement: 'Uma lente com distância focal de 60 cm pode se comportar como convergente ou divergente, dependendo do meio em que está imersa. Em ambos os comportamentos possíveis, obtém-se uma imagem virtual ao se colocar, sobre o eixo principal dessa lente, um objeto a 30 cm do centro da lente. Considerando que a imagem formada em cada situação está posicionada sobre o mesmo eixo óptico, essas imagens ficarão separadas por uma distância de',
    blockTypes: ['prose'], preview: 'Determine a separação entre as imagens virtuais formadas nos dois comportamentos da lente.',
    alternatives: ['50 cm.', '40 cm.', '30 cm.', '10 cm.', '20 cm.'], correct: 1,
    resolution: [tex`Usando $\frac1f=\frac1p+\frac1{p'}$ com $p=30$ cm: na lente convergente, $f=60$ cm e $p'=-60$ cm; na divergente, $f=-60$ cm e $p'=-20$ cm. As duas imagens virtuais estão do mesmo lado da lente, a 60 cm e a 20 cm dela, portanto separadas por $\boxed{40\ \mathrm{cm}}$.`],
    analyses: ['Incorreta. As posições são −60 cm e −20 cm, cuja diferença de distâncias é 40 cm.', 'Correta. A separação entre as imagens é 60 − 20 = 40 cm.', 'Incorreta. Trinta centímetros é a posição do objeto, não a separação das imagens.', 'Incorreta. A diferença calculada é 40 cm.', 'Incorreta. Vinte centímetros é a distância da imagem formada pela lente divergente ao centro da lente.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q40', number: 'Questão 40', subject: 'Física', content: 'Potência elétrica, corrente e fusível', difficulty: 'Fácil',
    statement: 'Uma extensão de fio para ser usada em 110 V tem cinco tomadas e um fusível de 20 A. Se todos os eletrônicos conectados a essa extensão forem ligados simultaneamente e, juntos, requisitarem uma corrente elétrica maior do que a do fusível, este se queimará, interrompendo a passagem de corrente elétrica.', blockTypes: ['prose'],
    images: [{ src: '/images/unifunec2027/q40-extensao.svg', alt: 'Extensão com cinco tomadas, fusível de 20 A e indicação de uso em 110 V.' }],
    statementAfter: 'Na cozinha de uma casa há uma dessas extensões, na qual já estão conectados, em três de suas tomadas, um forno elétrico de 1 500 W, um micro-ondas de 700 W e uma panela elétrica de 550 W. Por um descuido, os três aparelhos foram ligados simultaneamente, o que resultou na queima do fusível. Considerando as especificações dessa extensão, o fusível se queimou porque a intensidade de corrente elétrica requisitada pelos aparelhos ligados ultrapassou a corrente máxima controlada pelo fusível em', afterBlockTypes: ['command'], preview: 'Calcule em quanto a corrente dos aparelhos ultrapassou o limite do fusível.',
    alternatives: ['3 A.', '4 A.', '2 A.', '1 A.', '5 A.'], correct: 4,
    resolution: [tex`A potência total é $1500+700+550=2750\ \mathrm W$. Em 110 V, a corrente requisitada é $I=P/U=2750/110=25\ \mathrm A$. Como o fusível admite 20 A, o excesso foi $25-20=\boxed{5\ \mathrm A}$.`],
    analyses: ['Incorreta. O excesso é 5 A, não 3 A.', 'Incorreta. O cálculo da corrente total fornece 25 A, cinco acima do limite.', 'Incorreta. O valor não corresponde ao excesso calculado.', 'Incorreta. A corrente excedeu o fusível em 5 A.', 'Correta. A corrente total é 25 A e o limite é 20 A, logo o excesso é 5 A.'],
  },
];
