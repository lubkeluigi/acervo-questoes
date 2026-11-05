const PROCESS_URL = 'https://www.vunesp.com.br/UVSP2501';
const VERSION = '20261104-univesp1';

export const shared = {
  exam: 'Univesp', year: 2026, phase: 'Prova Objetiva', originalUrl: PROCESS_URL,
  officialAnswerUrl: PROCESS_URL, kind: 'objective', correctionOrigin: 'official',
};
export const tex = String.raw;
export const img = (file, alt, caption = '') => ({
  src: `/images/univesp2026/${file}?v=${VERSION}`, alt, ...(caption ? { caption } : {}),
});

export function q({ n, subject, content, difficulty = 'Média', statement, alternatives, answer, why, wrong = {}, ...extra }) {
  const correct = 'ABCDE'.indexOf(answer);
  if (correct < 0 || alternatives.length !== 5) throw new Error(`Configuração inválida na questão Univesp ${n}`);
  const analyses = alternatives.map((_, index) => index === correct
    ? `Correta. ${why}`
    : `Incorreta. ${wrong[index] || 'A alternativa não atende ao enunciado nem aos dados apresentados.'}`);
  return {
    ...shared, id: `univesp2026-q${String(n).padStart(2, '0')}`,
    number: `Questão ${String(n).padStart(2, '0')}`, subject, content, difficulty,
    statement, alternatives, correct, resolution: extra.resolution || [why], analyses, ...extra,
  };
}

const IA_TEXT = `Leia o texto para responder às questões de 11 a 14.

IA permite viajar sem sair do sofá
e ainda matar amigos de inveja

Basta rolar o feed por alguns minutos. Nas redes sociais, surgem fotos de amigos ou influenciadores em cenários típicos de férias perfeitas: alguém aos pés da Torre Eiffel, em Paris, outro numa praia de águas azuis do Caribe ou de algum paraíso nordestino, sem falar no semblante de encantamento diante do castelo da Disney, nos Estados Unidos da América (EUA). Na era da tecnologia, não é preciso ser nenhum privilegiado para compartilhar frequentemente fotos assim nas redes. Aplicativos de inteligência artificial (IA) fazem sucesso produzindo imagens de pessoas em cenários nos quais elas nunca pisaram, confundindo muita gente.

A primeira febre de manipulação de fotos com IA foi a aplicação de filtros no estilo de animação, seguida de retratos de infância recriados em novos cenários. Agora, a onda é compartilhar imagens simulando cenas de turismo, muitas vezes sem qualquer indicação de que foram geradas artificialmente. Os recursos estão em aplicativos que também usam a IA para simular ensaios fotográficos de aniversário nunca comemorados ou fotos em ambiente corporativo (geralmente com aquele figurino de executivo e cara de conteúdo) para compor perfis profissionais nas redes.

Para o antropólogo David Nemer, o uso de IA com esse objetivo diz muito mais sobre a cultura digital contemporânea no mundo do que sobre “falsidade”. Ele recorre ao conceito atual de economia da performance, em que a visibilidade digital funciona como capital simbólico. A imagem atrai, mas não é registro: vira status e narrativa pessoal, numa lógica que já existia com filtros e programas de edição de fotos.

“O valor não está no que você viveu, mas no que você consegue mostrar”, diz o antropólogo. “E ainda reforça desigualdades, porque quem já tem mais repertório digital, literacia tecnológica e familiaridade com IA consegue manipular melhor essas ferramentas e construir imagens mais ‘críveis’, enquanto outros ficam excluídos ou vulneráveis a julgamentos morais”.

(Carolina Nalin. O Globo, 07.12.2025. Adaptado.)`;
export const iaText = {
  statement: IA_TEXT,
  blockTypes: ['label', 'headline', 'quote', 'quote', 'quote', 'quote', 'source'],
};

const MIA_TEXT = `Leia o trecho do texto “O homem cadente”, do escritor moçambicano Mia Couto, para responder às questões de 16 a 20.

Quando me vieram chamar, nem acreditei:
— É Zuzézinho! Está caindo do prédio.
E as gentes, em volta, se depressavam para o sucedido. Me juntei às correrias, a pergunta zaranzeando: o homem estava caindo? Aquele gerúndio era um desmando nas graves leis da gravidade: quem cai, já caiu.

Enquanto corria, meu coração se constringia. Antevia meu velho amigo estatelado na calçada. [...]

Me aproximava do prédio e já me aranhava na multidão. Coisa de inacreditar: olhavam todos para cima. Quando fitei os céus, ainda mais me perturbei: lá estava, pairando como águia real, o Zuzé Neto. O próprio José Antunes Marques Neto, em artes de aero-anjo. Estava caindo? Se sim, vinha mais lento que o planar do planeta pelos céus.

(Mia Couto. O fio das missangas, 2004.)`;
export const miaCouto = {
  statement: MIA_TEXT,
  blockTypes: ['label', 'quote', 'quote', 'quote', 'source'],
  works: ['O fio das missangas'],
};

const AUTONOMOUS_TEXT = `Leia o texto para responder às questões de 21 a 25.

Autonomous vehicles — also known as self-driving cars or self-driving vehicles — are vehicles that can navigate and operate safely with little or no human input or intervention. Autonomous vehicles are equipped with autonomous driving systems that use a combination of sensors, computing, and software to safely perceive their environment and execute driving tasks.

Autonomous driving offers a range of benefits. One of the most significant advantages is the potential to improve road safety by reducing vehicle collisions, many of which are caused by human error. Autonomous vehicles are designed to follow traffic laws, monitor blind spots, and detect dangers faster than human drivers.

Autonomous vehicles also have the potential to deliver freedom of mobility for people who are unable to drive by expanding access to transportation options. They can navigate traffic jams and complex urban environments efficiently, which can help reduce traffic congestion and lower emissions — particularly as the transportation industry moves away from internal combustion engines and toward electric vehicles.

(www.nvidia.com. Adaptado.)`;
export const autonomousVehicles = {
  statement: AUTONOMOUS_TEXT,
  blockTypes: ['label', 'quote', 'quote', 'quote', 'source'],
};
