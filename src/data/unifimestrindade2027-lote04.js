const PROCESS_URL = 'https://tmpfiles.org/wZAeoKsBNGYT/provaii-objetiva.pdf';
const ANSWER_URL = 'https://tmpfiles.org/wVAPoVs4xolm/gabaritodaprovaii-objetiva2.pdf';
const shared = {
  exam: 'Unifimes Trindade', year: 2027, phase: 'Prova II', originalUrl: PROCESS_URL,
  officialAnswerUrl: ANSWER_URL, kind: 'objective', correctionOrigin: 'official',
};
const tex = String.raw;
const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');
const img = (file, alt, caption) => ({
  src: `/images/unifimestrindade2027/${file}?v=20261104-pdf-vector1`, alt, ...(caption ? { caption } : {}),
});

const ACCENTS = `Leia o texto para responder às questões de 31 a 34.

Valerie Fridland, a linguistics professor at the University of Nevada, Reno, writes in her new book, Why We Talk Funny: the Real Story Behind Our Accents, that humans instinctively use accents to categorize those around us. “We learn to recognize other people as being like us through the way that they sound,” Fridland says. It happens early: studies suggest small children, when choosing friends, favor those who share their accent.

Awareness of accents begins almost as soon as someone arrives on the planet. “By about a year old, babies have already figured out the sounds that are prevalent in the languages around them,” the professor says. Research shows one-year-olds respond to sounds that exist in their languages and not to those that are absent. Over the next few years, they pick up language from their parents and others around them. But it’s not until about age five that their own accents really emerge. At that age, she says, children lose interest in their parents’ speech and decide: “‘Let’s go talk to these cool peers at school, because they’re way, way more fun.’ And that is when the accent starts to really intensify.”

Once people have their accents, and especially once they reach adulthood, the way they talk is extremely difficult to change. Even in their own languages, changing their accents is challenging. “When people are long-term residents of a dialect area that’s not their own, something called speech accommodation happens, which is where they move closer to the norms of that region without actually replicating the norms very well,” Fridland explains. They don’t sound quite like a local in their new hometown, but they don’t sound like a local from their birthplace, either.

Ultimately, Fridland says, the way people talk is rooted in a universal experience. They start with the same equipment — their mouths and their minds — and are driven by the same thing: the need for social belonging.

(Matthew Cantor. www.theguardian.com, 13.05.2026. Adaptado.)`;
const accentsPassage = () => ({ statement: ACCENTS, blockTypes: ['label', 'prose', 'prose', 'prose', 'prose', 'source'] });

export const unifimestrindade2027Lote04 = [
  {
    ...shared, ...accentsPassage(),
    id: 'unifimestrindade2027-prova2-q31', number: 'Questão 31', subject: 'Inglês', content: 'Finalidade principal do texto', difficulty: 'Fácil',
    statementAfter: 'The main purpose of the text is to', afterBlockTypes: ['command'],
    alternatives: ['compare different accents spoken around the world.', 'show that accents can change with the right training.', 'argue that children are better language learners than adults.', 'describe how people acquire accents and why they keep them.', 'explain why adults speak more clearly than children.'], correct: 3,
    resolution: ['The text follows accent development from infancy to adulthood and explains that accents become difficult to change because they are tied to social experience and belonging.'],
    analyses: ['Incorreta. O texto não apresenta uma comparação sistemática entre sotaques de diferentes países.', 'Incorreta. Não se afirma que um treinamento adequado permita mudar o sotaque; enfatiza-se a dificuldade de mudança.', 'Incorreta. A aprendizagem infantil é discutida, mas o texto não defende que crianças sejam globalmente melhores aprendizes.', 'Correta. O texto descreve a aquisição do sotaque e os motivos de sua permanência.', 'Incorreta. A clareza da fala de adultos em relação à de crianças não é abordada.'],
    preview: 'Identify the main purpose of the text about accents.',
  },
  {
    ...shared, ...accentsPassage(),
    id: 'unifimestrindade2027-prova2-q32', number: 'Questão 32', subject: 'Inglês', content: 'Compreensão: sotaque e experiências sociais', difficulty: 'Média',
    statementAfter: 'According to Valerie Fridland,', afterBlockTypes: ['command'],
    alternatives: ['social experiences shape each person’s accent.', 'distinct accents of the same language may harm communication.', 'adults avoid using their native accent when moving to a different region.', 'older children tend to replicate their parents’ accent.', 'babies recognize sounds from any language equally.'], correct: 0,
    resolution: ['Fridland links accents to family, peers, dialect regions and the need for social belonging. These social experiences shape each person’s way of speaking.'],
    analyses: ['Correta. Pais, colegas e comunidades linguísticas são experiências sociais que moldam o sotaque.', 'Incorreta. O texto não afirma que sotaques distintos prejudiquem a comunicação.', 'Incorreta. Adultos podem se aproximar das normas locais, mas não evitam necessariamente o sotaque natal.', 'Incorreta. Por volta dos cinco anos, as crianças passam a se voltar mais aos colegas que aos pais.', 'Incorreta. Bebês de um ano respondem a sons presentes nas línguas ao redor, não igualmente a sons de qualquer língua.'],
    preview: 'Identify Fridland’s claim about social experience and accents.',
  },
  {
    ...shared, ...accentsPassage(),
    id: 'unifimestrindade2027-prova2-q33', number: 'Questão 33', subject: 'Inglês', content: 'Referência pronominal em inglês', difficulty: 'Média',
    statementAfter: `No trecho do segundo parágrafo “${underline('they’re')} way, way more fun”, o termo sublinhado refere-se a:`, afterBlockTypes: ['command'],
    alternatives: ['“accents”.', '“peers”.', '“years”.', '“parents”.', '“babies”.'], correct: 1,
    resolution: ['In “Let’s go talk to these cool peers at school, because they’re way, way more fun”, “they” refers to “these cool peers at school”.'],
    analyses: ['Incorreta. “Accents” não é o referente da expressão “more fun”.', 'Correta. “They’re” retoma “these cool peers at school”.', 'Incorreta. “Years” aparece no contexto temporal, mas não é o referente do pronome.', 'Incorreta. Os pais são contrastados com os colegas e não são descritos como “more fun”.', 'Incorreta. “Babies” não é o referente nessa fala das crianças.'],
    preview: 'Determine the referent of “they’re” in the second paragraph.',
  },
  {
    ...shared, ...accentsPassage(),
    id: 'unifimestrindade2027-prova2-q34', number: 'Questão 34', subject: 'Inglês', content: 'Valor semântico de once', difficulty: 'Média',
    statementAfter: `In the excerpt from the third paragraph “${underline('Once')} people have their accents, and especially once they reach adulthood, the way they talk is extremely difficult to change”, the underlined word can be replaced, with no change in meaning, by:`, afterBlockTypes: ['command'],
    alternatives: ['while.', 'before.', 'later.', 'until.', 'when.'], correct: 4,
    resolution: ['Here, “once” means “from the moment when” or simply “when”. The sentence describes what happens when people already have their accents.'],
    analyses: ['Incorreta. “While” indicaria simultaneidade e não reproduz o valor de “a partir do momento em que”.', 'Incorreta. “Before” inverte a relação temporal.', 'Incorreta. “Later” é advérbio e não introduz a oração da mesma forma.', 'Incorreta. “Until” indicaria limite posterior, sentido diferente.', 'Correta. “When” preserva o sentido temporal de “once” nesse período.'],
    preview: 'Replace “once” without changing the meaning of the sentence.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova2-q35', number: 'Questão 35', subject: 'Português', content: 'Interpretação de tirinha em inglês', difficulty: 'Fácil',
    statement: 'Leia a tirinha de Rick Kirkman e Jerry Scott.', blockTypes: ['prose'],
    images: [img('p2-q35-tirinha-museu.svg', 'Tirinha em três partes: as crianças dizem que o museu de arte foi ótimo e mostram os presentes comprados; a mãe comenta que, da próxima vez, espera conseguir passar da loja de presentes.')],
    statementAfter: '¹ gift shop: a store often found near the entrance or the exit of a museum, allowing visitors to purchase souvenirs before or after their visit.\n\n(www.washingtonpost.com, 09.05.2026. Adaptado.)\n\nO humor da tirinha baseia-se no fato de que', afterBlockTypes: ['note', 'source', 'command'],
    alternatives: ['a mãe ficou surpresa com os produtos vendidos na loja de presentes.', 'os produtos da loja eram caros demais para o orçamento da família.', 'a loja de presentes consumiu todo o tempo da visita ao museu.', 'as crianças ficaram entediadas durante a visita às exposições.', 'a mãe gastou menos dinheiro do que esperava na loja de presentes.'], correct: 2,
    resolution: ['As crianças elogiam o museu, mas só mostram compras da gift shop. A fala da mãe revela que a família não passou da loja: ela consumiu o tempo destinado à visita.'],
    analyses: ['Incorreta. O humor não decorre da surpresa da mãe com os tipos de produtos.', 'Incorreta. Não há menção a preços ou ao orçamento da família.', 'Correta. “Next time we hope to get past the gift shop” indica que a loja ocupou toda a visita.', 'Incorreta. As crianças dizem “awesome” e “cool”, portanto não manifestam tédio.', 'Incorreta. O gasto menor que o esperado não é mencionado.'],
    preview: 'Interprete a fala final da mãe sobre a gift shop do museu.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova2-q36', number: 'Questão 36', subject: 'Física', content: 'Movimento uniforme: velocidade, tempo e distância', difficulty: 'Fácil',
    statement: 'A pavimentação de vias e estradas de rodagem é realizada com uma máquina especializada denominada vibro acabadora de asfalto. Quando essa máquina está em funcionamento, sua velocidade máxima é de 20 metros por minuto.', blockTypes: ['prose'],
    images: [img('p2-q36-vibro-acabadora.svg', 'Vibro acabadora de asfalto, máquina utilizada na pavimentação de estradas.', '(https://maquilinea.com.br)')],
    statementAfter: 'Admita que uma dessas máquinas inicie a pavimentação de uma faixa reta de estrada, movendo-se ininterruptamente com velocidade máxima. Depois de duas horas e meia de funcionamento, o comprimento da faixa de rodagem pavimentada pela máquina é de', afterBlockTypes: ['command'],
    alternatives: ['3 km.', '8 km.', '5 km.', '4 km.', '6 km.'], correct: 0,
    resolution: [tex`Duas horas e meia correspondem a $150$ minutos. Com velocidade constante, $d=v\Delta t=20\cdot150=3000\ \mathrm m=\boxed{3\ \mathrm{km}}$.`],
    analyses: ['Correta. Em 150 minutos, a máquina percorre 3 000 m, ou 3 km.', 'Incorreta. Para percorrer 8 km seriam necessários 400 minutos.', 'Incorreta. 5 km corresponderia a 250 minutos, mais que o tempo dado.', 'Incorreta. 4 km corresponderia a 200 minutos.', 'Incorreta. 6 km corresponderia a 300 minutos, o dobro do intervalo.'],
    preview: 'Converta 2,5 h em minutos e calcule a distância a 20 m/min.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova2-q37', number: 'Questão 37', subject: 'Física', content: 'Máquina de Atwood e segunda lei de Newton', difficulty: 'Média',
    statement: 'A figura mostra um dispositivo conhecido como máquina de Atwood, no qual uma corda que passa por uma roldana fixa ao teto tem suas extremidades presas a dois corpos, P e Q, como mostra a figura.', blockTypes: ['prose'],
    images: [img('p2-q37-maquina-atwood.svg', 'Máquina de Atwood com roldana fixa ao teto e dois corpos suspensos: P de um lado e Q do outro.')],
    statementAfter: tex`A corda e a roldana são ideais e os corpos P e Q têm pesos, respectivamente, iguais a 30 N e 70 N, considerando que a aceleração da gravidade tem valor igual a $10\ \mathrm{m/s^2}$. Quando o sistema estiver em movimento, a aceleração de subida do corpo P será igual a`, afterBlockTypes: ['prose'],
    alternatives: [tex`$7\ \mathrm{m/s^2}$.`, tex`$4\ \mathrm{m/s^2}$.`, tex`$2\ \mathrm{m/s^2}$.`, tex`$5\ \mathrm{m/s^2}$.`, tex`$1\ \mathrm{m/s^2}$.`], correct: 1,
    resolution: [tex`As massas são $m_P=3\ \mathrm{kg}$ e $m_Q=7\ \mathrm{kg}$. Na corda ideal, a resultante que acelera o conjunto é $70-30=40\ \mathrm N$ e a massa total é $10\ \mathrm{kg}$. Assim, $a=40/10=\boxed{4\ \mathrm{m/s^2}}$, com P subindo.`],
    analyses: ['Incorreta. A aceleração não é obtida dividindo apenas o peso de Q pela massa total.', 'Correta. $a=(70-30)/(3+7)=4\ \mathrm{m/s^2}$.', 'Incorreta. 2 m/s² não satisfaz a segunda lei de Newton para o conjunto.', 'Incorreta. 5 m/s² seria obtido com massa total de 8 kg, não 10 kg.', 'Incorreta. 1 m/s² subestima a resultante por unidade de massa do sistema.'],
    preview: 'Aplique a segunda lei de Newton ao conjunto de 3 kg e 7 kg.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova2-q38', number: 'Questão 38', subject: 'Física', content: 'Transformação isovolumétrica de gás ideal', difficulty: 'Média',
    statement: tex`No interior de um recipiente hermético, há 20 L de um gás ideal à temperatura de $100\,^\circ\mathrm C$ e pressão de 1,0 atm. Para que esse gás tenha sua pressão elevada até 1,5 atm, sem que o volume do recipiente seja alterado, a temperatura do gás deve ser elevada para, aproximadamente,`, blockTypes: ['prose'],
    alternatives: [tex`$290\,^\circ\mathrm C$.`, tex`$340\,^\circ\mathrm C$.`, tex`$170\,^\circ\mathrm C$.`, tex`$420\,^\circ\mathrm C$.`, tex`$480\,^\circ\mathrm C$.`], correct: 0,
    resolution: [tex`A volume constante, $P_1/T_1=P_2/T_2$, com temperaturas em kelvin. Como $T_1=373\ \mathrm K$, $T_2=373\cdot1{,}5=559{,}5\ \mathrm K$, ou $286{,}5\,^\circ\mathrm C$, aproximadamente $\boxed{290\,^\circ\mathrm C}$.`],
    analyses: ['Correta. A temperatura final é cerca de 559,5 K, equivalente a aproximadamente 290 °C.', 'Incorreta. 340 °C resultaria de uma razão de pressões maior que 1,5.', 'Incorreta. 170 °C não corresponde ao aumento proporcional em kelvin.', 'Incorreta. 420 °C elevaria a pressão muito além de 1,5 atm.', 'Incorreta. 480 °C é incompatível com a proporção $T_2=1{,}5T_1$.'],
    preview: 'Use a lei de Gay-Lussac com a temperatura convertida para kelvin.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova2-q39', number: 'Questão 39', subject: 'Física', content: 'Eletrização por contato entre esferas iguais', difficulty: 'Média',
    statement: tex`Três esferas condutoras iguais, R, S e T, são inicialmente carregadas com cargas respectivamente iguais a $16\ \mathrm C$, $8\ \mathrm C$ e $4\ \mathrm C$.

Partindo dos valores iniciais das cargas dadas às esferas, foram promovidas duas sequências de contatos:

Na primeira sequência, S toca em R, afasta-se e toca em T. Ao final, mantidas as três esferas afastadas, verifica-se a carga da esfera S.

Na segunda sequência, retomando os valores das cargas dadas inicialmente às esferas, S toca T, afasta-se e toca em R. Ao final, mantidas as três esferas afastadas, verifica-se a carga da esfera S.`, blockTypes: ['prose', 'prose', 'prose', 'prose'],
    statementAfter: 'Comparando-se as cargas da esfera S, obtidas na primeira e na segunda sequências de contatos, o valor absoluto da diferença entre essas cargas será igual a', afterBlockTypes: ['command'],
    alternatives: [tex`$1\ \mathrm C$.`, tex`$2\ \mathrm C$.`, tex`$4\ \mathrm C$.`, tex`$3\ \mathrm C$.`, tex`$0\ \mathrm C$.`], correct: 3,
    resolution: [tex`Em cada contato entre esferas iguais, as cargas se igualam à média. Primeira sequência: S fica com $(8+16)/2=12\ \mathrm C$ e depois $(12+4)/2=8\ \mathrm C$. Segunda: S fica com $(8+4)/2=6\ \mathrm C$ e depois $(6+16)/2=11\ \mathrm C$. A diferença é $|8-11|=\boxed{3\ \mathrm C}$.`],
    analyses: ['Incorreta. A diferença calculada após os quatro contatos é 3 C, não 1 C.', 'Incorreta. 2 C não corresponde a $|8-11|$.', 'Incorreta. 4 C é a carga inicial de T, não a diferença final.', 'Correta. S termina com 8 C na primeira sequência e 11 C na segunda; a diferença absoluta é 3 C.', 'Incorreta. A ordem dos contatos altera a carga final, portanto a diferença não é nula.'],
    preview: 'Calcule as médias sucessivas de carga nas duas ordens de contato.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova2-q40', number: 'Questão 40', subject: 'Física', content: 'Potência elétrica e lei de Ohm', difficulty: 'Fácil',
    statement: 'Um amperímetro e um voltímetro ideais foram conectados a um rádio ligado à rede elétrica, como mostra a figura.', blockTypes: ['prose'],
    images: [img('p2-q40-circuito-radio.svg', 'Rádio ligado à rede elétrica com amperímetro em série e voltímetro em paralelo ao aparelho.')],
    statementAfter: 'Com o rádio em funcionamento, o voltímetro indica 120 V enquanto o amperímetro indica 0,05 A. Considerando esses valores, a potência elétrica dissipada pelo rádio e a resistência elétrica equivalente do seu circuito são, respectivamente,', afterBlockTypes: ['command'],
    alternatives: [tex`$6\ \mathrm W$ e $2\,400\ \Omega$.`, tex`$6\ \mathrm W$ e $1\,200\ \Omega$.`, tex`$6\ \mathrm W$ e $6\,000\ \Omega$.`, tex`$36\ \mathrm W$ e $6\,000\ \Omega$.`, tex`$36\ \mathrm W$ e $1\,200\ \Omega$.`], correct: 0,
    resolution: [tex`A potência é $P=Ui=120\cdot0{,}05=6\ \mathrm W$. Pela lei de Ohm, $R=U/i=120/0{,}05=\boxed{2400\ \Omega}$.`],
    analyses: ['Correta. $P=6\ \mathrm W$ e $R=2400\ \Omega$.', 'Incorreta. A potência está correta, mas $120/0{,}05$ não é 1 200 Ω.', 'Incorreta. A resistência de 6 000 Ω não decorre dos valores medidos.', 'Incorreta. Tanto a potência quanto a resistência estão incorretas.', 'Incorreta. $120\cdot0{,}05=6$, e não 36 W; a resistência também está errada.'],
    preview: 'Calcule P = Ui e R = U/i com 120 V e 0,05 A.',
  },
];
