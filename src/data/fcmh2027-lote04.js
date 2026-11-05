import { q, ageing, img, tex, underline as u } from './fcmh2027-helpers.js';

export const fcmh2027Lote04 = [
  q({
    n: 31, subject: 'Inglês', content: 'Finalidade do texto sobre envelhecimento e pensamento positivo', ...ageing,
    statementAfter: 'The main purpose of the text is to', afterBlockTypes: ['command'],
    alternatives: ['show how much older people resist having positive attitudes.', 'consider the effects of positive attitudes against age prejudice.', 'question the existence of prejudice in relation to older people.', 'present benefits of positive attitudes towards one’s own ageing.', 'discuss in what ways positive attitudes guarantee a longer life.'], answer: 'D',
    why: 'O texto apresenta uma pesquisa segundo a qual atitudes positivas em relação ao próprio envelhecimento podem melhorar desempenho físico e cognitivo. Seu objetivo principal é mostrar esses benefícios.',
    wrong: { 0: 'Não se mede a resistência de idosos a atitudes positivas.', 1: 'O ageísmo é discutido, mas os efeitos não são contra o preconceito, e sim sobre o envelhecimento.', 2: 'O texto reconhece a existência do preconceito, sem questioná-la.', 4: 'Não se afirma que o pensamento positivo garanta vida mais longa.' },
  }),
  q({
    n: 32, subject: 'Inglês', content: 'Modal can e possibilidade', ...ageing,
    statementAfter: `No trecho do segundo parágrafo “positive attitudes ${u('can')} meaningfully change someone’s ageing trajectory”, o termo sublinhado expressa`, afterBlockTypes: ['command'],
    alternatives: ['uma certeza.', 'um propósito.', 'uma possibilidade.', 'uma permissão.', 'um conselho.'], answer: 'C',
    why: 'Nesse contexto, “can” indica que atitudes positivas têm a possibilidade de alterar a trajetória de envelhecimento, e não que necessariamente o farão.',
    wrong: { 0: 'O modal não transforma a afirmação em certeza absoluta.', 1: 'Para indicar propósito seria necessária outra construção.', 3: 'Não há concessão de permissão.', 4: 'A frase relata um achado, não oferece um conselho.' },
  }),
  q({
    n: 33, subject: 'Inglês', content: 'Compreensão de resultados de pesquisa', ...ageing,
    statementAfter: 'According to the text, the research found that people with positive attitudes to ageing showed', afterBlockTypes: ['command'],
    alternatives: ['improvement in their physical and cognitive abilities over time.', 'better changes at achieving good retirement benefits when they reach 60.', 'capability for continuous optimism even when faced with illness.', 'significant progress after 12 years of training for math and memory tests.', 'strength for accepting they’ve done enough tours around the sun.'], answer: 'A',
    why: 'A pesquisa encontrou melhora em velocidade de caminhada, memória e matemática, ou seja, avanços físicos e cognitivos ao longo do tempo em parte dos participantes com atitudes positivas.',
    wrong: { 1: 'Benefícios de aposentadoria não foram estudados.', 2: 'Não se afirma otimismo contínuo nem se analisa reação a doenças.', 3: 'Os participantes não passaram por 12 anos de treinamento; esse é o período de comparação do estudo.', 4: 'A expressão sobre voltas ao sol é usada na discussão do preconceito, não como resultado da pesquisa.' },
  }),
  q({
    n: 34, subject: 'Inglês', content: 'Likely e probabilidade em contexto', ...ageing,
    statementAfter: `No trecho do quarto parágrafo “those who came into the study feeling positive about ageing were more ${u('likely')} to improve”, o termo sublinhado indica`, afterBlockTypes: ['command'],
    alternatives: ['comparação.', 'consequência.', 'preferência.', 'ênfase.', 'probabilidade.'], answer: 'E',
    why: '“Likely” significa “provável”. Em “more likely to improve”, indica maior probabilidade de apresentar melhora.',
    wrong: { 0: '“More” estabelece comparação, mas o termo sublinhado “likely” expressa probabilidade.', 1: 'A palavra não introduz uma consequência por si mesma.', 2: 'Não se trata de preferir uma alternativa.', 3: 'Embora “more” intensifique a expressão, o sentido lexical pedido é probabilidade.' },
  }),
  q({
    n: 35, subject: 'Inglês', content: 'Poster e campanha de atividade física', statement: 'Examine the “Move Your Way” campaign poster.', images: [img('q35-cartaz-move-your-way.svg', 'Cartaz com duas pessoas idosas jardinando e mensagens sobre envelhecer com saúde e independência.', '(www.odphp.health.gov)')],
    statementAfter: 'The campaign poster shows two older people', afterBlockTypes: ['command'],
    alternatives: ['helping others as volunteers in a gardening campaign.', 'enjoying an activity to stay active and self-sufficient as they age.', 'indicating that elderly people are stronger than younger ones.', 'participating in an experimental gardening contest.', 'teaching others how to effectively take care of any garden.'], answer: 'B',
    why: 'O cartaz mostra duas pessoas idosas jardinando e afirma que atividade física ajuda a manter saúde e independência com o envelhecimento. Eles aproveitam uma atividade para permanecer ativos e autossuficientes.',
    wrong: { 0: 'Não há indicação de trabalho voluntário.', 2: 'O cartaz não compara força de idosos e jovens.', 3: 'A jardinagem não é apresentada como concurso experimental.', 4: 'Eles praticam jardinagem, não ensinam técnicas a outras pessoas.' },
  }),
  q({
    n: 36, subject: 'Física', content: 'Velocidade vetorial média e velocidade escalar média', statement: 'Duas famílias realizam uma viagem de carro, deslocando-se da cidade A para a cidade B. Uma família utilizou a rota 1 e a outra família utilizou a rota 2, que é mais longa e sinuosa, como mostra a figura. As famílias partiram no mesmo instante da cidade A e chegaram juntas à cidade B.', images: [img('q36-rotas-viagem.svg', 'Rotas 1 e 2 entre as cidades A e B; a rota 2 é mais longa e sinuosa.')],
    statementAfter: tex`Sendo $v_1$ e $v_2$ os módulos das velocidades vetoriais médias desenvolvidas pelas famílias nas rotas 1 e 2, nessa ordem, e $v_{E1}$ e $v_{E2}$ as respectivas velocidades escalares médias, verifica-se que:`, afterBlockTypes: ['command'],
    alternatives: [tex`$v_1>v_2$ e $v_{E1}=v_{E2}$`, tex`$v_1=v_2$ e $v_{E1}>v_{E2}$`, tex`$v_1=v_2$ e $v_{E1}<v_{E2}$`, tex`$v_1<v_2$ e $v_{E1}=v_{E2}$`, tex`$v_1<v_2$ e $v_{E1}<v_{E2}$`], answer: 'C',
    why: 'As duas famílias têm o mesmo deslocamento vetorial e gastam o mesmo tempo, portanto as velocidades vetoriais médias são iguais. A rota 2 tem maior distância percorrida no mesmo tempo, logo sua velocidade escalar média é maior.',
    wrong: { 0: 'O módulo da velocidade vetorial média não depende do comprimento da trajetória, e as velocidades escalares diferem.', 1: 'A rota 1 é menor, então sua velocidade escalar média não pode ser maior.', 3: 'As velocidades vetoriais médias são iguais e as escalares não.', 4: 'A desigualdade vetorial está invertida: os módulos são iguais.' },
  }),
  q({
    n: 37, subject: 'Física', content: 'Pressão atmosférica e transformações gasosas', statement: 'Uma criança deixa escapar um balão de festa que começa a subir pela atmosfera, conforme representado na figura. A tabela apresenta os valores da pressão atmosférica na região por onde sobe o balão em relação à altura, h, do solo.', images: [img('q37-balao-altura.svg', 'Balão de festa subindo a uma altura h em um parque de diversões.')],
    tables: [{ ariaLabel: 'Pressão atmosférica em função da altura', headerRows: [['h (m)', 'Pₐₜₘ (mmHg)']], rows: [['0', '760'], ['350', '700'], ['700', '650'], ['1 050', '600'], ['1 400', '560'], ['1 750', '510'], ['2 100', '470'], ['2 450', '430'], ['2 800', '395']] }],
    statementAfter: tex`Nessas condições e para temperaturas constantes, o volume interno desse balão, V, em litros, e a pressão atmosférica, $P_{atm}$, em mmHg, relacionam-se pela expressão:

$$P_{atm}=\frac{12\,000}{V}-1{,}5V-10{,}0$$

Sabendo que esse balão estoura quando seu volume interno ultrapassa os 20 litros e desconsiderando quaisquer outros efeitos atmosféricos, a altura máxima que o balão subirá antes de estourar será de`, afterBlockTypes: ['prose', 'prose', 'command'],
    alternatives: ['1 050 m.', '1 400 m.', '350 m.', '2 450 m.', '2 800 m.'], answer: 'B',
    why: tex`No limite, $V=20$ L e $P_{atm}=12000/20-1{,}5\cdot20-10=560$ mmHg. Pela tabela, essa pressão corresponde a $\boxed{1\,400\text{ m}}$; acima disso, o volume ultrapassaria 20 L.`,
    wrong: { 0: 'A 1 050 m, a pressão é 600 mmHg e o volume ainda não atingiu o limite.', 2: 'A 350 m, a pressão é 700 mmHg, muito acima do valor no estouro.', 3: 'A 2 450 m, o balão já teria estourado.', 4: 'A 2 800 m, também se ultrapassaria o limite de volume.' },
  }),
  q({
    n: 38, subject: 'Física', content: 'Lentes e vergência', statement: tex`Para que uma lente seja confeccionada, a depender do grau ou vergência, D, que ela apresentará, é preferível que sejam escolhidos materiais com maior índice de refração, n, de forma que essa lente seja o menos espessa possível. Por exemplo, para uma lente plano-convexa imersa no ar, como a representada na figura, a dimensão do raio de curvatura, R, define a espessura da lente. Para essa lente, R, em metros, D, em dioptrias e n estão relacionados por:

$$D=\frac{n-1}{R}$$`, blockTypes: ['prose', 'prose'], images: [img('q38-lente-plano-convexa.svg', 'Lente plano-convexa com raio de curvatura R.')],
    statementAfter: tex`Considere que essa lente terá 8 dioptrias e que, para sua construção, estejam disponíveis as resinas 1 e 2, com índices de refração $n_1=1{,}48$ e $n_2=1{,}80$, respectivamente. A escolha da resina 2 para essa construção, em relação à resina 1, permitirá que o raio R seja`, afterBlockTypes: ['command'],
    alternatives: ['reduzido em 4 cm.', 'reduzido em 12 cm.', 'acrescido em 12 cm.', 'acrescido em 24 cm.', 'acrescido em 4 cm.'], answer: 'E',
    why: tex`Como $R=(n-1)/D$, para $D=8$ temos $R_1=0{,}48/8=0{,}06$ m e $R_2=0{,}80/8=0{,}10$ m. A diferença é $0{,}04$ m, portanto o raio é $\boxed{\text{acrescido em 4 cm}}$.`,
    wrong: { 0: 'O raio aumenta com o índice de refração, não diminui.', 1: 'Não há redução nem diferença de 12 cm.', 2: 'O acréscimo calculado é 4 cm, não 12 cm.', 3: '24 cm não corresponde à diferença entre 10 cm e 6 cm.' },
  }),
  q({
    n: 39, subject: 'Física', content: 'Movimento uniforme e frequência de disparos', statement: 'Em certa etapa de um jogo eletrônico de guerra, soldados inimigos avançam com velocidade constante de 3,6 m/s contra a base do jogador. Para proteger essa base, o jogador aciona uma besta automatizada e articulada que dispara flechas contra os inimigos periodicamente, eliminando um soldado a cada flecha disparada, como mostra a imagem.', images: [img('q39-besta-automatizada.svg', 'Soldados avançam a 3,6 m/s com distância de 1,2 m entre consecutivos; uma besta dispara flechas junto à linha pontilhada.')],
    statementAfter: 'Considere que, no momento em que o primeiro soldado se posiciona sobre a linha pontilhada da imagem, uma flecha o atinge. Sabendo que a distância entre dois soldados consecutivos é de 1,2 m, a quantidade mínima de flechas que devem ser disparadas pela besta a cada segundo para que os soldados não consigam ultrapassar o limite da linha pontilhada deve ser de', afterBlockTypes: ['command'],
    alternatives: ['3 flechas.', '7 flechas.', '5 flechas.', '1 flecha.', '9 flechas.'], answer: 'A',
    why: tex`A frequência com que soldados alcançam a linha é $f=v/d=3{,}6/1{,}2=3$ soldados por segundo. Como cada flecha elimina um soldado, são necessárias no mínimo $\boxed{3\text{ flechas/s}}$.`,
    wrong: { 1: 'Sete flechas por segundo excede a frequência mínima necessária.', 2: 'Cinco flechas por segundo também é superior ao mínimo.', 3: 'Uma flecha por segundo eliminaria apenas um dos três soldados que chegam por segundo.', 4: 'Nove disparos por segundo triplicam a frequência mínima.' },
  }),
  q({
    n: 40, subject: 'Física', content: 'Campo elétrico e superfícies equipotenciais', statement: tex`Uma nuvem eletricamente carregada encontra-se sobre determinada região do solo, conforme a figura. Considere que as superfícies do solo (incluindo superfícies de árvores, de relevos e de construções civis) e da nuvem configurem superfícies equipotenciais elétricas, com potenciais $V_S$ e $V_N$, respectivamente.`, images: [img('q40-nuvem-campo-eletrico.svg', 'Nuvem e solo com potenciais V_N e V_S; regiões 1 a 5 entre as superfícies, com menor distância na região 5.')],
    statementAfter: 'Sabe-se que a intensidade do campo elétrico em uma região do espaço entre duas superfícies equipotenciais é diretamente proporcional à diferença de potencial entre essas superfícies e inversamente proporcional à distância entre essas superfícies. Com base nessas informações, das regiões entre a nuvem e o solo, numeradas de 1 a 5 na figura, a que possui campo elétrico com maior intensidade é a de número', afterBlockTypes: ['command'],
    alternatives: ['2.', '1.', '3.', '5.', '4.'], answer: 'D',
    why: tex`A diferença de potencial é a mesma entre a nuvem e o solo. Como $E\propto|\Delta V|/d$, o campo é mais intenso onde a distância é menor: na região $\boxed{5}$, acima da copa mais alta e mais próxima da nuvem.`,
    wrong: { 0: 'Na região 2, a distância entre as superfícies é maior que na região 5.', 1: 'Na região 1, a separação também é maior.', 2: 'A região 3 não apresenta a menor distância.', 4: 'A região 4 está em uma depressão, onde a distância à nuvem é maior.' },
  }),
];
