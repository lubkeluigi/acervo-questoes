const PROCESS_URL = 'https://www.vunesp.com.br/UNVA2601';
const VERSION = '20261104-univas1';

export const shared = {
  exam: 'Univás', year: 2027, phase: 'Conhecimentos Gerais — Objetiva', originalUrl: PROCESS_URL,
  officialAnswerUrl: PROCESS_URL, kind: 'objective', correctionOrigin: 'official',
};
export const tex = String.raw;
export const img = (file, alt, caption = '') => ({
  src: `/images/univas2027/${file}?v=${VERSION}`, alt, ...(caption ? { caption } : {}),
});

export function q({ n, subject, content, difficulty = 'Média', statement, alternatives, answer, why, wrong = {}, ...extra }) {
  const correct = 'ABCDE'.indexOf(answer);
  if (correct < 0 || alternatives.length !== 5) throw new Error(`Configuração inválida na questão Univás ${n}`);
  const analyses = alternatives.map((_, index) => index === correct
    ? `Correta. ${why}`
    : `Incorreta. ${wrong[index] || 'A alternativa não atende ao enunciado nem aos dados apresentados.'}`);
  return {
    ...shared, id: `univas2027-q${String(n).padStart(2, '0')}`,
    number: `Questão ${String(n).padStart(2, '0')}`, subject, content, difficulty,
    statement, alternatives, correct, resolution: extra.resolution || [why], analyses, ...extra,
  };
}

const MACHADO = `Para responder às questões de 01 a 05, leia o trecho do capítulo 38, “A quarta edição”, de Memórias Póstumas de Brás Cubas, de Machado de Assis, originalmente publicado como folhetim na Revista Brasileira, em 1880.

1  — Venha cá jantar amanhã, disse-me o Dutra uma noite. Aceitei o convite. No dia seguinte, mandei que a sege¹ me esperasse no Largo de São Francisco de Paula, e fui dar várias voltas. Lembra-vos ainda a minha teoria das edições humanas? Pois sabei que, naquele tempo, estava eu na quarta edição, revista e emendada, mas ainda inçada² de descuidos e barbarismos; defeito que, aliás, achava alguma compensação no tipo³, que era elegante, e na encadernação, que era luxuosa. Dadas as voltas, ao passar pela Rua dos Ourives, consulto o relógio e cai-me o vidro na calçada. Entro na primeira loja que tinha à mão; era um cubículo, — pouco mais, — empoeirado e escuro.

Ao fundo, por trás do balcão, estava sentada uma mulher, cujo rosto amarelo e bexiguento⁴ não se destacava logo à primeira vista; mas logo que se destacava era um espetáculo curioso. Não podia ter sido feia; ao contrário, via-se que fora bonita, e não pouco bonita; mas a doença e uma velhice precoce destruíram-lhe a flor das graças. As bexigas tinham sido terríveis; os sinais, grandes e muitos, faziam saliências e encarnas, declives e aclives, e davam uma sensação de lixa grossa, enormemente grossa. Eram os olhos a melhor parte do vulto, e aliás tinham uma expressão singular e repugnante, que mudou, entretanto, logo que eu comecei a falar. [...] Crê-eis, pósteros? essa mulher era Marcela.

Não a conheci logo; era difícil; ela porém conheceu-me apenas lhe dirigi a palavra. Os olhos chisparam e trocaram a expressão usual por outra, meia doce e meia triste. Vi-lhe um movimento como para esconder-se ou fugir; era o instinto da vaidade, que não durou mais de um instante. Marcela acomodou-se e sorriu.

5  — Quer comprar alguma coisa? disse ela estendendo-me a mão.

Não respondi nada. Marcela compreendeu a causa do meu silêncio (não era difícil), e só hesitou, creio eu, em decidir o que dominava mais, se o assombro do presente, se a memória do passado.

(https://dominiopublico.mec.gov.br)

1 sege: carruagem.
2 inçado: cheio.
3 tipo: letra impressa.
4 bexiguento: que tem marcas da varíola, informalmente chamadas de bexigas.`;
export const machado = {
  statement: MACHADO,
  blockTypes: ['label', 'quote', 'quote', 'quote', 'quote', 'quote', 'source', 'note'],
  works: ['Memórias Póstumas de Brás Cubas'],
};

export const zits = {
  statement: 'Leia a tirinha para responder às questões 06 e 07.', blockTypes: ['label'],
  images: [img('q06-tirinha-zits.svg', 'Tirinha Zits sobre presentes, cortesia e intenções.', '(Jerry Scott e Jim Borgman. Zits: Undivided Inattention, 2021. Adaptado.) — biggie: big deal.')],
};

const OBESITY = `Leia o texto para responder às questões de 08 a 10.

More than 220 million children will be obese by 2040 without drastic action, report warns

Without drastic action more than 220 million children could have obesity by 2040, an international report has warned. Globally, in 2025 about 180 million children were obese. But new figures from the World Obesity Federation suggest that by 2040, about 227 million of all five- to 19-year-olds will have obesity and more than half a billion will be overweight.

According to the federation’s 2026 world obesity atlas, that would mean that at least 120 million school-age children would have early signs of chronic disease caused by their high body mass index (BMI). Someone is classed as obese if their BMI is 30 or above, and overweight if it is above 25.

According to the report, 27 million five- to 19-year-olds in the United States (US) have high BMI, behind only China (62 million) and India (41 million). That equates to two in five US children having obesity or being overweight.

In the United Kingdom, about 3.8 million children have high BMI, a record — making it among the worst performing countries in Europe, with around twice the numbers of overweight and obese children as in France and Italy.

(Anna Bawden. www.theguardian.com, 04.03.2026. Adaptado.)`;
export const obesity = {
  statement: OBESITY,
  blockTypes: ['label', 'headline', 'quote', 'quote', 'quote', 'quote', 'source'],
  images: [img('q08-obesidade-infantil.svg', 'Fotografia que acompanha a reportagem sobre obesidade infantil.')],
};
