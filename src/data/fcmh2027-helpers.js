const PROCESS_URL = 'https://www.vunesp.com.br/FCMH2602';
const VERSION = '20261104-vetores3';

export const shared = {
  exam: 'Humanitas', year: 2027, phase: 'Prova II — Objetiva', originalUrl: PROCESS_URL,
  officialAnswerUrl: PROCESS_URL, kind: 'objective', correctionOrigin: 'official',
};
export const sharedOpen = {
  exam: 'Humanitas', year: 2027, phase: 'Prova I — Discursiva', originalUrl: PROCESS_URL,
  officialAnswerUrl: PROCESS_URL, kind: 'discursive', correctionOrigin: 'official',
  officialNotes: [
    'Para cada questão, foi atribuída pontuação de 0 a 4, conforme o atendimento integral aos critérios oficiais.',
    'Resposta correta acrescida de informação errada implicou perda do ponto. Não foram aceitos resultados sem resolução, com erro de cálculo ou sem a unidade de medida correta, quando aplicável.',
  ],
};
export const tex = String.raw;
export const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');
export const img = (file, alt, caption = '') => ({
  src: `/images/fcmh2027/${file}?v=${VERSION}`, alt, ...(caption ? { caption } : {}),
});

export function q({ n, subject, content, difficulty = 'Média', statement, alternatives, answer, why, wrong = {}, ...extra }) {
  const correct = 'ABCDE'.indexOf(answer);
  if (correct < 0 || alternatives.length !== 5) throw new Error(`Configuração inválida na questão Humanitas ${n}`);
  const analyses = alternatives.map((_, index) => index === correct
    ? `Correta. ${why}`
    : `Incorreta. ${wrong[index] || 'A afirmação não atende ao enunciado nem aos dados apresentados.'}`);
  return {
    ...shared, id: `fcmh2027-prova2-q${String(n).padStart(2, '0')}`,
    number: `Questão ${String(n).padStart(2, '0')}`, subject, content, difficulty,
    statement, alternatives, correct, resolution: extra.resolution || [why], analyses, ...extra,
  };
}

export const COMIC = {
  statement: 'Examine a tirinha do cartunista Caco Galhardo para responder às questões 01 e 02.',
  blockTypes: ['label'],
  images: [img('q01-tirinha-chico-bacon.svg', 'Tirinha com Chico Bacon e dois amigos sobre juventude e velhice.', '(Cinco mil anos: E quase todas as tiras, 2019.)')],
};

export const DEDICATORIAS = `Leia o trecho do artigo “Dedicatórias” de Carlos Drummond de Andrade para responder às questões de 03 a 08.

1  Tendo lido numa revista espanhola interessante artigo sobre a psicologia das dedicatórias, ocorreu-me lembrar o assunto. […]

Não é que o escritor tenha lá uma mentalidade mais complicada ou enrustida que o comum dos mortais. Não. Ele é, como toda gente, um ser dotado de sentimentos bons e maus, inclinações contraditórias, ambições e desejos próprios ao ser humano em geral. Mas enquanto as outras pessoas manifestam seu temperamento e caráter nas oportunidades do trato diário, sem maior preocupação de fazê-lo, o escritor, pelo fato de fazer da escrita uma profissão e um trabalho de arte, se torna mais exigente consigo mesmo nas relações escritas. Pensa duas vezes antes de compor uma linha, e três antes de entregá-la ao impressor. Este cuidado se estende, imperceptivelmente, às linhas não propriamente literárias, e uma dedicatória, como uma carta, assume ares de texto importante. Como se o autor pensasse (e quase sempre pensa isso mesmo):

— Quando eu ficar célebre, este bilhetinho ou esta dedicatória vai ser conservada em museu. Vamos caprichar!

Há especialistas em dedicatórias brilhantes, antológicas, por assim dizer. Outros são cautelosos. […]

5  Há tempos, andei catando e copiando algumas […]. E, logo de saída, fiquei mais uma vez de queixo caído diante da mais original, da mais imprevista entre as dedicatórias já feitas em língua portuguesa. Dedicatória, não de um literato a outro, nem de um literato a um amigo ou leitor. Mas de um autor já morto a... um verme. Todos já perceberam que me refiro à dedicatória das Memórias póstumas de Brás Cubas, que Machado de Assis, em nome do suposto autor do romance, redigiu […].

(Carlos Drummond de Andrade. Amor nenhum dispensa uma gota de ácido, 2019.)`;
export const dedicatorias = {
  statement: DEDICATORIAS,
  blockTypes: ['label', 'quote', 'quote', 'quote', 'quote', 'quote', 'source'],
  works: ['Dedicatórias', 'Memórias póstumas de Brás Cubas', 'Amor nenhum dispensa uma gota de ácido'],
};

export const PETALAS = `Leia o poema “Pétalas” do escritor angolano Ondjaki.

aprecio muito a redondez do mundo,
flores e pétalas
apontadas numa direcção¹ amarela
verdades doces como mangas
[gosto de mangas com fio — dão sorrisos mais amarelos].
um dia veio o vento e as pétalas esvoaçaram.
ficou triste a flor
ficaram livres as pétalas.

(Materiais para confecção de um espanador de tristezas, 2021.)

1 direcção: o mesmo que direção.`;
export const petalas = {
  statement: PETALAS, blockTypes: ['label', 'poem', 'source', 'note'],
  works: ['Pétalas', 'Materiais para confecção de um espanador de tristezas'],
};

export const AGEING = `Leia o texto para responder às questões de 31 a 34.

Can positive thinking help you age better?

1  Doing more trips around the sun does not mean inevitable decline, new research suggests — and having an optimistic outlook ${underline('can')} even bring improvements.

According to a study carried out in the United States, positive attitudes ${underline('can')} meaningfully change someone’s ageing trajectory. A psychologist, Prof Becca Levy, and her colleague Dr Martin Slade, from the Yale School of Public Health, looked at what impact attitudes towards ageing had on physical and cognitive changes over time in more than 11,000 people aged between 50 and 99.

They found that people with more positive attitudes to ageing not only did better at things such as walking speed, memory tests and maths than those with more negative attitudes, but a significant number of them actually improved over the study’s timeframe — 12 years — compared with how they were when they started out.

In this study, 44% of the participants actually showed improvements in walking speed and cognition over the average eight years of follow-up; more importantly, those who came into the study feeling positive about ageing were more ${underline('likely')} to improve.

5  It’s one thing to have a positive attitude within yourself about ageing, and another thing to resist the ageism prevalent in our society — what has been described as one of the last socially acceptable prejudices. It’s the attitude that says someone over 60 must be about to retire, despite being at the height of their abilities, experience and knowledge, simply because they’ve done enough tours around the sun. And that attitude is tougher to fight.

(Bianca Nogrady. www.theguardian.com, 02.05.2026. Adaptado.)`;
export const ageing = {
  statement: AGEING,
  blockTypes: ['label', 'headline', 'quote', 'quote', 'quote', 'quote', 'quote', 'source'],
};
