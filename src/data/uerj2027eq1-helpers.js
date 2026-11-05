const EXAM_URL = 'https://www.vestibular.uerj.br/anexos/271/ExamedeQualificacao_2027.pdf';
const ANSWER_URL = 'https://www.vestibular.uerj.br/anexos/271/Gabarito_VESTIBULAR.pdf';
const VERSION = '20261104-uerj-eq1-4';

export const shared = {
  exam: 'UERJ', year: 2027, phase: '1º Exame de Qualificação', originalUrl: EXAM_URL,
  officialAnswerUrl: ANSWER_URL, kind: 'objective', correctionOrigin: 'official',
};
export const tex = String.raw;
export const img = (file, alt, caption = '') => ({
  src: `/images/uerj2027eq1/${file}?v=${VERSION}`, alt, ...(caption ? { caption } : {}),
});

export function q({ n, subject, content, difficulty = 'Média', statement = '', alternatives, answer, why, wrong = {}, ...extra }) {
  const correct = 'ABCD'.indexOf(answer);
  if (correct < 0 || alternatives.length !== 4) throw new Error(`Configuração inválida na questão UERJ EQ1 ${n}`);
  const analyses = alternatives.map((_, index) => index === correct
    ? `Correta. ${why}`
    : `Incorreta. ${wrong[index] || 'A alternativa não atende ao enunciado nem aos dados apresentados.'}`);
  return {
    ...shared, id: `uerj2027eq1-q${String(n).padStart(2, '0')}`,
    number: `Questão ${String(n).padStart(2, '0')}`, subject, content, difficulty,
    statement, alternatives, correct, resolution: extra.resolution || [why], analyses, ...extra,
  };
}

const SALGADO = `As questões 01 a 08 relacionam-se com o texto base.

A GEOPOLÍTICA NAS LENTES DE SEBASTIÃO SALGADO

A ausência de Sebastião Salgado deixará um profundo vazio no panorama da fotografia documental, especialmente por sua capacidade ímpar de humanizar questões geopolíticas complexas e dar voz aos invisíveis através de imagens poderosas e atemporais. Seu olhar fotográfico carrega mais que técnica e estética: revela um território humano marcado por desigualdades, deslocamentos, resistências e esperanças. Obras como Terra, Êxodos e Gênesis não são apenas coleções de imagens; elas refletem e desvendam a geopolítica contemporânea em toda a sua crueza e complexidade.

O livro Terra (1997) é um marco na trajetória do fotógrafo, ao se dedicar ao drama dos trabalhadores rurais sem-terra no Brasil. Suas fotografias revelam um território em disputa, onde a terra se configura como palco de uma intensa luta política entre forças antagônicas. De um lado, o latifúndio historicamente consolidado que favoreceu a formação de grandes propriedades, muitas vezes improdutivas. De outro, os sujeitos coletivos que lutam pela reforma agrária e pela justiça social.

Segundo o geógrafo Milton Santos, o território não é apenas um espaço físico, mas o espaço apropriado por relações de poder. As imagens de Salgado escancaram essa estrutura fundiária excludente e altamente concentrada, que molda a geopolítica interna do Brasil a partir do acesso à terra e de sua função social. Em termos geopolíticos, a terra no Brasil é, sobretudo, um recurso estratégico: quem a detém concentra poder político, econômico e simbólico.

Com Êxodos (2000), Sebastião Salgado volta seu olhar para o fenômeno global dos deslocamentos em massa, fenômeno que a ONU classifica como sendo a maior crise humanitária desde 1945. Nesse trabalho, Salgado percorre territórios devastados por guerras, fome, perseguição e pobreza, oferecendo uma narrativa visual das consequências de um sistema-mundo excludente. Seus retratos de migrantes africanos e refugiados evidenciam uma clara contradição: enquanto um mundo de elevado poder tecnológico facilita a acelerada movimentação de capitais, investimentos e mercadorias entre os países, a livre circulação de pessoas permanece severamente restrita. As imagens de Salgado não apenas documentam a realidade; elas a contestam, ao revelar o sofrimento invisível nas estatísticas e nas decisões políticas de âmbito internacional.

Gênesis (2013), por sua vez, volta-se para os espaços ainda preservados, mas igualmente ameaçados por essa mesma ordem global. Nesse ensaio, Salgado nos apresenta uma “homenagem ao planeta em seu estado natural”. A obra foi concebida em territórios estratégicos do ponto de vista ecológico e geopolítico: a Amazônia, o Ártico, o Saara, as florestas tropicais do Congo e o arquipélago de Galápagos. Mais que simples reservas ambientais, essas zonas são ativos geopolíticos cruciais, onde se sobrepõem interesses conservacionistas, extrativistas, militares e indígenas, tornando-as focos de disputa e poder.

Ao retratar comunidades indígenas, Salgado as eleva de meras curiosidades etnográficas a atores geopolíticos fundamentais na defesa de seus territórios e de seus modos de vida. Com seu conhecimento milenar e práticas sustentáveis, esses povos são os verdadeiros guardiões da biodiversidade, e a preservação de sua cultura e de seu território constitui um ato de resistência contra o avanço do agronegócio, da mineração e da exploração.

A arte de Sebastião Salgado não é apenas um testemunho sensível da condição humana, é uma denúncia visual das engrenagens que sustentam a desigualdade planetária. Suas imagens não confortam, inquietam; não embelezam a tragédia, revelam sua origem estrutural. Salgado nos devolve o espelho de um mundo fraturado, onde a barbárie convive com a resistência. Cabe a nós decidir: vamos seguir contemplando as ruínas com olhos vazios, ou enxergar nelas os contornos de um outro futuro possível?

MAURÍCIO ALFREDO
Adaptado de diplomatique.org.br, 05/06/2025.`;
export const salgadoText = {
  statement: SALGADO,
  blockTypes: ['label', 'headline', 'quote', 'quote', 'quote', 'quote', 'quote', 'quote', 'quote', 'source'],
  works: ['Terra', 'Êxodos', 'Gênesis'],
};

const PHOTOGRAPHY = `Leia o texto em inglês para responder às questões 23 a 27.

THE ROLE OF PHOTOGRAPHY IN DOCUMENTING HISTORY

Imagery is more than a way to recall the past − it’s a powerful means of shaping narratives, recording events, and influencing how they are remembered. From landmark social movements to personal milestones, pictures offer a direct link to instances that might otherwise fade. An interesting question, however, is whether people have ever truly grasped the real power of photography.

Photography can evoke emotions, shift perspectives, and bring clarity to complex situations. Photo documentation strengthens both personal and collective memory. Since its inception, photography has been an indispensable tool in documenting history. Family albums, old newspapers, and digital archives all serve as visual time capsules, linking the past with the present. The technology behind imagery has evolved, but its purpose remains untouched: to record, reflect, and inspire.

Photographers − whether professionals or passionate storytellers − carry the responsibility of shaping historical records. Their work not only portrays events but also influences how they will be remembered. Archival photography is, then, a necessary tool in safeguarding cultural heritage, capturing traditions, and preserving historical narratives that might be forgotten. Documenting a social custom, an artistic expression or a communal identity is a way to ensure that cultural stories remain alive for future generations. This not only honors the past but also provides a foundation for cultural continuity.

It’s a way to perpetuate authentic human experiences. By maintaining and expanding photographic archives, societies can bridge generational gaps, ensuring that lessons from the past remain relevant. Anthropologists and historians have widely used photography to record customs across the world. This ensures that cultural diversity remains visible and accessible.

In this context, photojournalism has played an important role in shaping public policy and stimulating activism. The Civil Rights Movement, anti-war protests, and social justice campaigns have all benefited from impactful imagery. The photo of Alan Kurdi, the Syrian child who drowned while fleeing war, for example, spurred global discussions on refugee policies and humanitarian aid. Since the representation of events can shape opinions and influence politics, ethics in photojournalism is crucial. Issues such as photo manipulation, context distortion, and the invasion of privacy must be carefully managed.

It’s true that, over time, documentary photography has evolved alongside technological advancements. This evolution allows for a broader, more nuanced exploration of social, political, and environmental issues, which accounts for its significant contributions. Beyond this significance, however, photography also acts as a bridge between history and memory, preserving not only the events but also the emotions associated with them. Due to this importance, it is crucial that photographers strive to capture genuine human experiences and observe the principles of right and wrong that govern their professional conduct, adopting narratives that are aligned with what is morally correct and acceptable. By doing so, they can allow people to connect with their roots, offering them a meaningful way to celebrate and reflect on their origins.

JAHMAL GOODE
Adaptado de goodeforyouproductions.com, 29/01/2025.`;
export const photographyText = {
  statement: PHOTOGRAPHY,
  blockTypes: ['label', 'headline', 'quote', 'quote', 'quote', 'quote', 'quote', 'quote', 'source'],
};

export const ditaduraTirinha = {
  statement: 'Todo mundo que era contra a ditadura era comunista. Todos se tornaram suspeitos, subversivos em potencial. O comunista estava na fronteira, atrás da porta, na sombra, na igreja, na escola, no cinema, no teatro, na música, no Exército, o comunista vendia pipoca, estava disfarçado em balés, óperas, podia ser seu vizinho, podia estar debaixo da sua cama, poluir o reservatório de água, dopar os bebedouros. (p. 90)',
  blockTypes: ['quote'],
  images: [img('uerj2027eq1-q15-tirinha.webp', 'Tirinha de André Dahmer: “O bem combate o mal”, “O bem tortura o mal”, “O bem mata e oculta o cadáver do mal” e “Ainda bem que estamos do lado do bem”.', 'ANDRÉ DAHMER — Adaptado de instagram.com/andredahmer.')],
  works: ['Ainda estou aqui'],
};

export const carneirosText = {
  statement: 'Leia o texto para responder às questões 35 e 36.\n\nNa época do acasalamento dos carneiros-das-rochosas (Ovis canadensis), a disputa dos machos pelas fêmeas envolve dois carneiros correndo em sentidos opostos e colidindo seus chifres em velocidades que podem alcançar 65 km/h. No instante do impacto, parte da energia cinética desses animais é convertida em som e em calor e parte é absorvida pelos chifres e pelo crânio.',
  blockTypes: ['label', 'quote'],
  images: [img('uerj2027eq1-q35-ovelhas.webp', 'Fotografias de um macho e de uma fêmea de Ovis canadensis.', 'Macho e fêmea — wikipedia.org.')],
};

export const baunilhaText = {
  statement: 'Leia o texto para responder às questões 43 e 44.\n\nA baunilha é uma especiaria bastante apreciada, sendo um de seus componentes químicos a vanilina, principal responsável por seu aroma e sabor. Essa especiaria é produzida a partir das orquídeas da espécie Vanilla planifolia, frequentemente polinizada de forma mecânica para que os grãos de pólen da flor entrem em contato com a parte feminina de outra flor da mesma espécie.',
  blockTypes: ['label', 'quote'],
  images: [img('uerj2027eq1-q43-baunilha.webp', 'Flor de Vanilla planifolia.', 'embrapa.com.')],
};
