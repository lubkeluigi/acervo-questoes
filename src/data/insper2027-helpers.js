const PROCESS_URL = 'https://www.vunesp.com.br/INSP2601';
const VERSION = '20261104-recortes-revisados1';

export const shared = {
  exam: 'Insper', year: 2027, phase: 'Prova objetiva — 1º semestre',
  originalUrl: PROCESS_URL, officialAnswerUrl: PROCESS_URL,
  kind: 'objective', correctionOrigin: 'official',
};

export const tex = String.raw;
export const underline = (text) => [...text].map((character) => character === ' ' ? character : `${character}\u0332`).join('');
export const img = (file, alt, caption = '') => ({
  src: `/images/insper2027/${file}?v=${VERSION}`, alt,
  ...(caption ? { caption } : {}),
});

export function q({ n, subject, content, difficulty = 'Média', statement, alternatives, answer, why, wrong = {}, ...extra }) {
  const correct = 'ABCDE'.indexOf(answer);
  if (correct < 0 || alternatives.length !== 5) throw new Error(`Configuração inválida na questão Insper ${n}`);
  const analyses = alternatives.map((_, index) => index === correct
    ? `Correta. ${why}`
    : `Incorreta. ${wrong[index] || 'A afirmação não atende ao enunciado nem ao contexto apresentado.'}`);
  return {
    ...shared,
    id: `insper2027-q${String(n).padStart(2, '0')}`,
    number: `Questão ${String(n).padStart(2, '0')}`,
    subject, content, difficulty, statement, alternatives, correct,
    resolution: extra.resolution || [why], analyses,
    ...extra,
  };
}

export const CORTICO = `Para responder às questões de 01 a 07, leia um trecho do romance O cortiço, de Aluísio Azevedo.

1  Defronte da porta de Rita tinham vindo postar-se diversos moradores do cortiço, jornaleiros de baixo salário, pobre gente miserável, que mal podia matar a fome com o que ganhava. Ainda assim não havia entre eles um só triste. A mulata convidou-os logo a comer um bocado e beber um trago. A proposta foi aceita alegremente.

E a casa dela nunca se esvaziava.

Anoitecia já.

O velho Libório, que jamais ninguém sabia ao certo onde almoçava ou jantava, surgiu do seu buraco, que nem jabuti quando vê chuva.

5  Um tipão, o velho Libório! Ocupava o pior canto do cortiço e andava sempre a fariscar¹ os sobejos² alheios, filando aqui, filando ali, pedindo a um e a outro, como um mendigo, chorando misérias eternamente, apanhando pontas de cigarro para fumar no cachimbo, cachimbo que o sumítico³ roubara de um pobre cego decrépito. Na estalagem diziam todavia que Libório tinha dinheiro aferrolhado⁴, contra o que ele protestava ressentido, jurando a sua extrema penúria. [...]

Rita fê-lo entrar e deu-lhe de comer e de beber; mas sob condição de que o esfomeado não se socasse demais, para não rebentar ali mesmo.

Se queria estourar, fosse estourar pra longe!

Ele pôs-se logo a devorar, sofregamente, olhando inquieto para os lados, como se temesse que alguém lhe roubasse a comida da boca. Engolia sem mastigar, empurrando os bocados com os dedos, agarrando-se ao prato e escondendo nas algibeiras o que não podia de uma só vez meter para dentro do corpo. [...]

Firmo propôs embebedá-lo, só para ver a sorte que ele daria. O Alexandre e a mulher opuseram-se, mas rindo muito; nem se podia deixar de rir, apesar do espanto, vendo aquele resto de gente, aquele esqueleto velho, coberto por uma pele seca, a devorar, a devorar sem tréguas, como se quisesse fazer provisão para uma outra vida.

10  De repente, um pedaço de carne, grande demais para ser ingerido de uma vez, engasgou-o seriamente. Libório começou a tossir, aflito, com os olhos sumidos, a cara tingida de uma vermelhidão apoplética⁵. A Leocádia, que era quem lhe ficava mais perto, soltou-lhe um murro nas costas.

O glutão arremessou sobre a toalha da mesa o bocado de carne já meio triturado.

Foi um nojo geral.

— Porco! gritou Rita, arredando⁶-se.

— Pois se o bruto quer socar tudo ao mesmo tempo! disse Porfiro. Parece que nunca viu comida, este animal!

15  E notando que ele continuava ainda mais sôfrego por ter perdido um instante:

— Espere um pouco, lobo! Que diabo! A comida não foge! Há muito aí com que te fartares por uma vez!

(O cortiço, 2016.)

1 fariscar: farejar.
2 sobejo: sobra, resto de comida.
3 sumítico: avarento.
4 aferrolhado: escondido.
5 apoplético: que sofreu apoplexia (acidente vascular cerebral).
6 arredar: recuar.`;

export const cortico = {
  statement: CORTICO,
  blockTypes: ['label', ...Array(16).fill('quote'), 'source', 'note'],
  works: ['O cortiço'],
};

export const COMIC = {
  statement: 'Para responder às questões 08 e 09, examine a tirinha do cartunista Will Leite, publicada pelo perfil @will.tirando no Instagram em 08.01.2026.',
  blockTypes: ['label'],
  images: [img('q08-tirinha-will-leite.svg', 'Tirinha em quatro quadros: vizinhos observam um cartunista e perguntam de onde ele tira ideias; no último quadro, ele desenha a própria cena dos vizinhos.', '(www.instagram.com. Adaptado.)')],
};

export const POEMA = `Para responder às questões de 10 a 15, leia o poema “Quando, Lídia, vier o nosso outono” de Ricardo Reis, heterônimo do poeta português Fernando Pessoa.

Quando, Lídia, vier o nosso outono
Com o inverno ${underline('que')} há ${underline('nele')}, reservemos
Um pensamento, não para a futura
   Primavera, que é de outrem¹,
Nem para o estio², de quem somos mortos,
Senão para o que fica do que passa —
O amarelo atual que as folhas vivem
   E as torna diferentes.

(Obra poética, 1997.)

1 outrem: outra pessoa.
2 estio: verão.`;

export const poema = {
  statement: POEMA,
  blockTypes: ['label', 'poem', 'source', 'note'],
};
