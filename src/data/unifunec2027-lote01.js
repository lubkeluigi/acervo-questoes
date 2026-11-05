const PROCESS_URL = 'https://tmpfiles.org/w2Atoes4Ntqn/provaii-objetiva3.pdf';
const ANSWER_URL = 'https://tmpfiles.org/wkAFoLsqN17m/gabaritodaprovaii-objetiva3.pdf';

const shared = {
  exam: 'Unifunec', year: 2027, phase: 'Prova II', originalUrl: PROCESS_URL,
  officialAnswerUrl: ANSWER_URL, kind: 'objective', correctionOrigin: 'official',
};

const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');

const INFOXICATION = `Leia o texto para responder às questões de 03 a 07.

Se para você o cansaço de ficar no celular, atualizando o feed de notícias a todo momento, é equiparado ao de treinar na academia sem sair do lugar, talvez você esteja ficando infoxicado. O neologismo “infoxicação”, criado pelo físico espanhol Alfons Cornella em 1995, tem relação com o consumo desmedido de informações — de todo tipo e qualidade —, que pode afetar o bem-estar, a saúde emocional e até mesmo a qualidade do tempo das pessoas no dia a dia. Para o autor, esse fenômeno é consequência de um mundo onde a exaustividade (“tudo sobre”) prevalece sobre a relevância (“a coisa mais importante”).

No atual ecossistema comunicativo — hiperconectado e caótico —, somos inundados por dados e mensagens, produzidos tanto por profissionais da comunicação quanto por amadores, tanto por humanos quanto por dispositivos automatizados. A abundância de informações — verdadeiras ou não — torna complexa a busca por fontes idôneas e orientações confiáveis quando se precisa, como se verificou durante os períodos mais críticos da pandemia da covid-19. [...]

Numa analogia simples, o excesso informativo é como estar num rodízio de pizza. Quando ainda nem terminamos de digerir a primeira fatia, já chega outro sabor. No caso da dieta midiática, mal atualizamos o feed de notícias e já somos notificados por mais uma mensagem, num processo de retroalimentação, dado o grau de centralidade das mídias em nossas vidas. Nesse cenário de hiperestimulação sensorial, aqueles que confundem quantidade de informação com qualidade são os mais propensos a ficarem infoxicados. Até porque as mentes humanas possuem capacidade limitada de atenção e sofrem com tantos dados e notícias. Daí a preocupação com as campanhas de desinformação que, valendo-se dessa fadiga informativa generalizada, propagam crenças equivocadas, geralmente embaladas numa linguagem simples e direta. A questão não é simplesmente de fluência, mas de capacidade analítica para selecionar, distinguir e hierarquizar as informações.

Diante desse contexto de sobrecarga informacional, crescem as preocupações acerca dos potenciais danos da infoxicação ao ser humano, que vão desde a ansiedade e estresse, até sintomas somáticos que prejudicam a concentração e o pensamento crítico. O excesso de trabalho cognitivo, que envolve a assimilação de mais informações do que a capacidade do ser humano permite, provoca fraturas no sono e impede o repouso.

A infoxicação dialoga com a patologia FOMO, uma sigla em inglês para fear of missing out, que, traduzida para o português, significa “medo de ficar de fora” do que está acontecendo, principalmente no ecossistema digital. [...]

A chamada “era da infoxicação” contribui para a produção sistemática da ignorância, isto é, do “não saber” ou da “privação de conhecimento”. [...]

De fato, ambientes infoxicados favorecem campanhas de desinformação, que corroem o tecido social e geram um sentimento de ceticismo generalizado em relação às instituições tradicionais de construção e validação do conhecimento, como o Estado, a imprensa profissional e, sobretudo, a ciência. A agnotologia, conceito difundido por Robert Proctor¹ para indicar o estudo da promoção da ignorância e da incerteza em campos nos quais o consenso científico está bem estabelecido, chama a atenção para técnicas desenvolvidas por agentes políticos e econômicos a fim de confundir grupos de interesse acerca da realidade em que vivem.

[...] O excesso informativo produz ignorância? Evidentemente, todos somos ignorantes em algum grau e em determinados assuntos. Proctor explica que existem diferentes modalidades de ignorância: a passiva (omissão, lacuna); a seletiva (por hierarquização, ao focarmos nisso ao invés daquilo); e a ativa (por decisão consciente). Também existe a chamada ignorância virtuosa, que se apresenta como resistência a um saber indesejado ou perigoso. Quem nunca escutou a frase: “Não sei nem quero saber e tenho raiva de quem sabe”? Sem dúvida, desconhecer certos fatos nos traz conforto. No entanto, para viver em sociedade é preciso ter uma compreensão compartilhada da realidade. Por isso, a produção deliberada de ignorância é um problema para a gestão pública, principalmente quando, por exemplo, se tenta mitigar os danos de uma pandemia.

(Michel Carvalho da Silva. www.sescsp.org.br, 25.05.2024.)

¹ Robert Proctor: historiador da ciência na Universidade de Standford.`;
const INFOXICATION_BLOCKS = ['label', ...Array(8).fill('prose'), 'source', 'note'];
const infoxicationQuestion = (command) => ({
  statement: `${INFOXICATION}\n\n${command}`,
  blockTypes: [...INFOXICATION_BLOCKS, 'command'], preview: command,
});

const SONNET = `Leia o soneto de Gregório de Matos para responder às questões de 08 a 10.

Nasce o Sol, e não dura mais que um dia,
Depois da Luz se segue a noite escura,
Em tristes sombras morre a formosura,
Em contínuas tristezas a alegria.

Porém, se acaba o Sol, por que nascia?
Se é tão formosa a Luz, por que não dura?
Como a beleza assim se transfigura?
Como o gosto de pena assim se fia?

Mas no Sol, e na Luz falte a firmeza,
Na formosura não se dê constância,
E na alegria sinta-se tristeza.

Começa o mundo enfim pela ignorância,
E tem qualquer dos bens por natureza
A firmeza somente na inconstância.

(www.dominiopublico.com.br)`;
const SONNET_BLOCKS = ['label', 'poem', 'poem', 'poem', 'poem', 'source'];
const sonnetQuestion = (command) => ({
  statement: `${SONNET}\n\n${command}`,
  blockTypes: [...SONNET_BLOCKS, 'command'], preview: command,
});

const comic = {
  statement: 'Leia a tirinha publicada pelo perfil @dona.anesia do Instagram, em 14.10.2025, para responder às questões 01 e 02.',
  blockTypes: ['label'],
  images: [{ src: '/images/unifunec2027/q01-tirinha.svg', alt: 'Tirinha em quatro quadrinhos: D. Anésia presenteia a amiga com uma lata de lixo para que ela se lembre dela; ao fim, a amiga percebe que ela mesma se chamou de lixo.' }],
};

export const unifunec2027Lote01 = [
  {
    ...shared, ...comic,
    id: 'unifunec2027-prova2-q01', number: 'Questão 01', subject: 'Português', content: 'Interpretação de tirinha e humor', difficulty: 'Fácil',
    statementAfter: 'A fala de D. Anésia, no último quadrinho, desempenha papel central na construção de humor da tirinha. A partir dessa fala, considerando o contexto da tira, infere-se que D. Anésia tem, em relação à amiga, uma visão', afterBlockTypes: ['command'], preview: 'Infere-se que D. Anésia tem, em relação à amiga, uma visão depreciativa.',
    alternatives: ['amorosa.', 'enaltecedora.', 'ingênua.', 'depreciativa.', 'sensível.'], correct: 3,
    resolution: ['Ao dizer “Bom, desta vez foi você quem falou, hein?”, D. Anésia faz a amiga perceber que, ao chamar a lata de lixo de “bonitinha” e associá-la à amiga, ela própria formulou uma comparação depreciativa. O humor nasce dessa reversão da fala.'],
    analyses: ['Incorreta. Embora haja um presente, a conclusão da tirinha explora uma associação ofensiva, não uma visão amorosa.', 'Incorreta. A amiga é associada ao lixo, e não enaltecida.', 'Incorreta. A fala final revela percepção da comparação, e não ingenuidade.', 'Correta. A piada decorre da visão depreciativa sugerida pela associação entre a amiga e o lixo.', 'Incorreta. Sensibilidade não é o traço inferido da fala final.'],
  },
  {
    ...shared, ...comic,
    id: 'unifunec2027-prova2-q02', number: 'Questão 02', subject: 'Português', content: 'Oração subordinada adverbial temporal', difficulty: 'Fácil',
    statementAfter: `Em “${underline('Toda vez que olhar pro lixo')}, vai se lembrar de mim” (2º quadrinho), a oração sublinhada, no contexto em que se insere, expressa`, afterBlockTypes: ['command'], preview: 'A oração “Toda vez que olhar pro lixo” expressa tempo.',
    alternatives: ['proporção.', 'finalidade.', 'modo.', 'tempo.', 'consequência.'], correct: 3,
    resolution: ['A locução “toda vez que” introduz uma oração subordinada adverbial temporal: ela indica a ocasião em que a amiga se lembrará de D. Anésia.'],
    analyses: ['Incorreta. Não há relação de proporcionalidade entre as orações.', 'Incorreta. A oração não apresenta a finalidade de lembrar.', 'Incorreta. Ela não indica o modo como a lembrança ocorrerá.', 'Correta. “Toda vez que” estabelece a circunstância temporal da lembrança.', 'Incorreta. A oração sublinhada não apresenta a consequência, mas a condição temporal da lembrança.'],
  },
  {
    ...shared, ...infoxicationQuestion('O texto defende que'),
    id: 'unifunec2027-prova2-q03', number: 'Questão 03', subject: 'Português', content: 'Interpretação de texto: infoxicação', difficulty: 'Fácil',
    alternatives: ['ao invés de produzir cidadãos mais críticos e bem-informados, o volume de informação a que temos acesso no universo digital contribui para o fenômeno da infoxicação.', 'as campanhas de desinformação afetam um núcleo específico de usuários das redes, pois esses usuários apresentam maior fluência leitora.', 'a solução para a infoxicação parte de um letramento digital que proporcione maior fluência leitora aos usuários ao aprenderem a usar de forma adequada as redes sociais.', 'os celulares e as redes sociais são os responsáveis pela disseminação de notícias falsas e pelo processo de infoxicação, por isso eles devem ser regulados pelo Estado.', 'a infoxicação é um problema que surge depois das redes sociais, pois a prática de compartilhar pensamentos fica mais fácil.'], correct: 0,
    resolution: ['A tese do texto é que o consumo desmedido e a abundância de informações, em vez de garantirem pessoas mais bem-informadas, podem produzir sobrecarga cognitiva, dificuldade de seleção e infoxicação.'],
    analyses: ['Correta. O excesso de informação é apresentado como causa da sobrecarga e não como garantia de espírito crítico.', 'Incorreta. As campanhas se aproveitam da fadiga informativa generalizada; o texto não restringe seus efeitos a usuários mais fluentes.', 'Incorreta. O problema apontado não é apenas falta de fluência, mas capacidade analítica; o texto não apresenta essa solução.', 'Incorreta. O texto não atribui responsabilidade exclusiva aos aparelhos e nem propõe regulação estatal.', 'Incorreta. O neologismo foi criado em 1995 e o texto não estabelece as redes sociais como marco inicial do fenômeno.'],
  },
  {
    ...shared, ...infoxicationQuestion('Está empregada sem sentido figurado a palavra sublinhada em:'),
    id: 'unifunec2027-prova2-q04', number: 'Questão 04', subject: 'Português', content: 'Sentido literal e figurado — divergência no item', difficulty: 'Difícil',
    alternatives: [`“pode afetar o bem-estar, a saúde ${underline('emocional')} e até mesmo a qualidade do tempo das pessoas no dia a dia” (1º parágrafo).`, `“somos ${underline('inundados')} por dados e mensagens, produzidos tanto por profissionais da comunicação quanto por amadores” (2º parágrafo).`, `“Se para você o ${underline('cansaço')} de ficar no celular, atualizando o feed de notícias a todo momento, é equiparado a treinar na academia” (1º parágrafo).`, `“A abundância de ${underline('informações')} — verdadeiras ou não — torna complexa a busca por fontes idôneas e orientações confiáveis” (2º parágrafo).`, `“mal atualizamos o feed de notícias e já somos notificados por mais uma ${underline('mensagem')}” (3º parágrafo).`], correct: 1,
    resolution: ['O gabarito oficial registra B. Nela, “inundados” está em sentido figurado: recebemos grande quantidade de dados, não água ou outro líquido. Isso indica provável erro na palavra “sem” do enunciado impresso; se a pergunta fosse “com sentido figurado”, B seria a única resposta. Com o texto efetivamente publicado, outras alternativas também contêm palavras em sentido literal, de modo que não há resposta única. A chave oficial é mantida e a divergência fica explicitada.'],
    analyses: ['No enunciado impresso, “emocional” está em sentido literal; portanto, esta alternativa também atenderia à leitura literal da pergunta.', 'Alternativa oficial. “Inundados” é empregado figuradamente, mas isso só justificaria a chave se o enunciado pedisse sentido figurado, sem a palavra “sem”.', '“Cansaço” conserva sentido literal; com o enunciado impresso, esta também seria uma resposta possível.', '“Informações” conserva sentido literal; com o enunciado impresso, esta também seria uma resposta possível.', '“Mensagem” conserva sentido literal; com o enunciado impresso, esta também seria uma resposta possível.'],
  },
  {
    ...shared, ...infoxicationQuestion('O neologismo “infoxicação” é uma palavra composta, ou seja, é construída a partir da união das palavras “informação” e “intoxicação”. Também é uma palavra composta o termo sublinhado em:'),
    id: 'unifunec2027-prova2-q05', number: 'Questão 05', subject: 'Português', content: 'Formação de palavras: composição', difficulty: 'Fácil',
    alternatives: [`“A infoxicação dialoga com a patologia ${underline('FOMO')}” (5º parágrafo).`, `“somos inundados por dados e mensagens, produzidos tanto por ${underline('profissionais')} da comunicação quanto por amadores” (2º parágrafo).`, `“pode afetar o ${underline('bem-estar')}, a saúde emocional e até mesmo a qualidade do tempo das pessoas no dia a dia” (1º parágrafo).`, `“Numa analogia simples, o excesso ${underline('informativo')} é como estar num rodízio de pizza” (3º parágrafo).`, `“A chamada ‘era da infoxicação’ contribui para a produção ${underline('sistemática')} da ignorância” (6º parágrafo).`], correct: 2,
    resolution: ['“Bem-estar” é formada pela composição de “bem” e “estar”. As demais palavras sublinhadas são sigla ou derivadas por afixos.'],
    analyses: ['Incorreta. FOMO é uma sigla de fear of missing out.', 'Incorreta. “Profissionais” é formada por derivação e flexão, não pela união de duas palavras.', 'Correta. “Bem-estar” resulta da composição de “bem” e “estar”.', 'Incorreta. “Informativo” é palavra derivada de “informar”.', 'Incorreta. “Sistemática” é palavra derivada, e não composta.'],
  },
  {
    ...shared, ...infoxicationQuestion('Ao transpor a oração “ambientes infoxicados favorecem campanhas de desinformação” (7º parágrafo) para a voz passiva, o verbo sublinhado assume a forma:'),
    id: 'unifunec2027-prova2-q06', number: 'Questão 06', subject: 'Português', content: 'Voz passiva e concordância verbal', difficulty: 'Fácil',
    alternatives: ['é favorecida.', 'foi favorecida.', 'serão favorecidas.', 'foram favorecidas.', 'são favorecidas.'], correct: 4,
    resolution: ['Na voz passiva analítica, “campanhas de desinformação” torna-se sujeito paciente. Como “favorecem” está no presente e concorda com um termo plural, a forma resultante é “são favorecidas”: “Campanhas de desinformação são favorecidas por ambientes infoxicados”.'],
    analyses: ['Incorreta. A forma está no singular e “foi” indicaria pretérito.', 'Incorreta. A forma está no singular e no pretérito.', 'Incorreta. “Serão” desloca a ação para o futuro.', 'Incorreta. “Foram” desloca a ação para o pretérito.', 'Correta. “São” preserva o presente e concorda com o plural “campanhas”; “favorecidas” concorda em gênero e número.'],
  },
  {
    ...shared, ...infoxicationQuestion(`Na sentença “No caso da dieta midiática, mal atualizamos ${underline('o feed de notícias')} e já somos notificados por mais uma mensagem” (3º parágrafo), o segmento sublinhado exerce a função de objeto direto, assim como o segmento sublinhado em:`),
    id: 'unifunec2027-prova2-q07', number: 'Questão 07', subject: 'Português', content: 'Sintaxe: objeto direto oracional', difficulty: 'Média',
    alternatives: [`“Proctor explica ${underline('que existem diferentes modalidades de ignorância')}” (8º parágrafo).`, `“Nesse cenário de hiperestimulação sensorial, ${underline('aqueles que confundem quantidade de informação com qualidade')} são os mais propensos a ficarem infoxicados” (3º parágrafo).`, `“ambientes infoxicados favorecem campanhas de desinformação, ${underline('que corroem o tecido social')}” (7º parágrafo).`, `“Também existe a chamada ignorância virtuosa, ${underline('que se apresenta como resistência a um saber indesejado')}” (8º parágrafo).`, `“O excesso de trabalho cognitivo, que envolve a assimilação de mais informações ${underline('do que a capacidade do ser humano permite')}, provoca fraturas no sono.” (4º parágrafo).`], correct: 0,
    resolution: ['Em A, a oração “que existem diferentes modalidades de ignorância” completa diretamente o verbo “explica”, funcionando como oração subordinada substantiva objetiva direta, assim como “o feed de notícias” completa “atualizamos”.'],
    analyses: ['Correta. O segmento é uma oração subordinada substantiva objetiva direta de “explica”.', 'Incorreta. O segmento sublinhado é o sujeito de “são os mais propensos”.', 'Incorreta. Trata-se de oração subordinada adjetiva explicativa introduzida pelo pronome relativo “que”.', 'Incorreta. A oração sublinhada é adjetiva explicativa e caracteriza “ignorância virtuosa”.', 'Incorreta. O segmento integra uma relação comparativa; não exerce a mesma função de objeto direto destacada no enunciado.'],
  },
  {
    ...shared, ...sonnetQuestion('O eu lírico do poema propõe uma discussão cujo tema central é'),
    id: 'unifunec2027-prova2-q08', number: 'Questão 08', subject: 'Literatura', content: 'Gregório de Matos: transitoriedade e inconstância', difficulty: 'Fácil',
    alternatives: ['a beleza dos elementos da natureza.', 'o caráter transitório dos acontecimentos.', 'a primazia da razão sobre os sentimentos.', 'a busca por uma salvação espiritual.', 'o tédio diante de um mundo previsível.'], correct: 1,
    resolution: ['O poema relaciona Sol, Luz, beleza e alegria à passagem, à falta de duração e à inconstância. O tema central é, portanto, o caráter transitório dos acontecimentos e das coisas.'],
    analyses: ['Incorreta. Os elementos naturais servem à reflexão sobre a impermanência; sua beleza não é o tema central.', 'Correta. A brevidade do dia e a firmeza apenas na inconstância sintetizam a transitoriedade.', 'Incorreta. O soneto não estabelece uma oposição em que a razão deva dominar os sentimentos.', 'Incorreta. Não há desenvolvimento de um projeto de salvação espiritual.', 'Incorreta. O eu lírico não expressa tédio diante da previsibilidade, mas inquietação diante da impermanência.'],
  },
  {
    ...shared, ...sonnetQuestion('Frequente na poesia barroca, a figura de linguagem predominante no poema de Gregório de Matos é'),
    id: 'unifunec2027-prova2-q09', number: 'Questão 09', subject: 'Literatura', content: 'Barroco: antítese', difficulty: 'Fácil',
    alternatives: ['a hipérbole.', 'o eufemismo.', 'a gradação.', 'a antítese.', 'a ironia.'], correct: 3,
    resolution: ['O soneto se constrói pela oposição recorrente de ideias: Luz e noite, formosura e morte, alegria e tristeza, firmeza e inconstância. Predomina, assim, a antítese.'],
    analyses: ['Incorreta. Não há exagero expressivo predominante.', 'Incorreta. Não há suavização predominante de ideias desagradáveis.', 'Incorreta. Não há sequência de termos em intensidade crescente ou decrescente como estrutura dominante.', 'Correta. O poema articula contrários como Luz/noite e alegria/tristeza, recurso característico do Barroco.', 'Incorreta. O eu lírico não sustenta predominantemente um sentido inverso ao declarado.'],
  },
  {
    ...shared, ...sonnetQuestion('A elipse é omissão de um termo da oração que pode ser identificado pelo contexto. No poema de Gregório de Matos, há elipse em:'),
    id: 'unifunec2027-prova2-q10', number: 'Questão 10', subject: 'Literatura', content: 'Elipse no soneto barroco', difficulty: 'Média',
    alternatives: ['“Em contínuas tristezas a alegria.” (1ª estrofe)', '“Depois da luz se segue a noite escura,” (1ª estrofe)', '“Como a beleza assim se transfigura?” (2ª estrofe)', '“Como o gosto de pena assim se fia?” (2ª estrofe)', '“Começa o mundo enfim pela ignorância,” (4ª estrofe)'], correct: 0,
    resolution: ['Em “Em contínuas tristezas a alegria”, está omitido o verbo “morre”, recuperável pelo paralelismo com “Em tristes sombras morre a formosura”: “Em contínuas tristezas [morre] a alegria”.'],
    analyses: ['Correta. O verbo “morre” está elíptico e pode ser recuperado pelo verso imediatamente anterior.', 'Incorreta. A oração apresenta explicitamente o verbo “se segue”.', 'Incorreta. O verbo “transfigura” está expresso.', 'Incorreta. O verbo “fia” está expresso.', 'Incorreta. O verbo “começa” está expresso.'],
  },
];
