import { sharedOpen, tex } from './fcmh2027-helpers.js';

const d = (n, data) => ({
  ...sharedOpen, id: `fcmh2027-prova1-q${String(n).padStart(2, '0')}`,
  number: `Questão ${String(n).padStart(2, '0')}`, difficulty: 'Média', ...data,
});

export const fcmh2027Lote05 = [
  d(1, {
    subject: 'Química', content: 'Camadas eletrônicas, rubídio e ligação iônica',
    statement: 'No modelo atômico atual, o átomo é considerado constituído por um núcleo de pequena dimensão, formado por prótons e nêutrons. Os elétrons distribuem-se em camadas ao redor do núcleo, seguindo regras próprias de preenchimento em ordem crescente de energia. Essas ideias estão organizadas na Classificação Periódica, que reúne os 118 elementos atualmente conhecidos, naturais e artificiais, dispostos em períodos e grupos de acordo com seus números atômicos e com as configurações eletrônicas de suas camadas de valência.', blockTypes: ['prose'],
    parts: [
      { id: 'a', prompt: 'Considerando a Classificação Periódica, determine o número de camadas eletrônicas necessárias para descrever os 118 elementos conhecidos. Escreva a distribuição eletrônica por camadas do átomo de rubídio.', maxScore: 2,
        expected: tex`Um átomo pode apresentar, no máximo, $\boxed{7\text{ camadas}}$. Para o rubídio, $Z=37$, a distribuição por camadas é $\boxed{K=2;\ L=8;\ M=18;\ N=8;\ O=1}$.`,
        accepted: 'Foi aceita a distribuição por níveis e subníveis de energia.',
        criteria: [{ points: 1, text: 'Indica 7 como número máximo de camadas eletrônicas.' }, { points: 1, text: 'Apresenta K=2, L=8, M=18, N=8 e O=1 para o rubídio.' }] },
      { id: 'b', prompt: tex`Considerando o átomo de sódio neutro no estado gasoso, $\mathrm{Na(g)}$, descreva a formação do íon $\mathrm{Na^+(g)}$ e do ânion $\mathrm{Cl^-(g)}$ a partir da interação entre átomos de sódio e cloro no estado gasoso. Escreva a fórmula mínima do composto iônico formado pela interação eletrostática entre o íon $\mathrm{Na^+}$ e o ânion sulfato $\mathrm{SO_4^{2-}}$.`, maxScore: 2,
        expected: tex`$\mathrm{Na(g)\rightarrow Na^+(g)+e^-}$ e $\mathrm{Cl(g)+e^-\rightarrow Cl^-(g)}$. O composto iônico é $\boxed{\mathrm{Na_2SO_4}}$.`,
        rejected: 'Não foram aceitas a ionização do cloreto de sódio sólido ou a apresentação dos íons sódio e cloreto sem identificação do estado gasoso, pois o enunciado solicita a formação a partir dos átomos gasosos.',
        criteria: [{ points: 1, text: tex`Escreve $\mathrm{Na(g)\rightarrow Na^+(g)+e^-}$ e $\mathrm{Cl(g)+e^-\rightarrow Cl^-(g)}$.` }, { points: 1, text: tex`Fornece $\mathrm{Na_2SO_4}$ como fórmula mínima.` }] },
    ], preview: 'Distribua os elétrons do rubídio e represente a formação de íons e do sulfato de sódio.',
  }),
  d(2, {
    subject: 'Química', content: 'pH e equilíbrio do hipoclorito',
    statement: tex`Saneantes à base de hipoclorito ($\mathrm{ClO^-}$) são utilizados em ambientes domésticos, hospitalares e industriais. Em meio aquoso, as espécies $\mathrm{ClO^-(aq)}$, $\mathrm{HClO(aq)}$, $\mathrm{H^+(aq)}$, $\mathrm{OH^-(aq)}$ e $\mathrm{H_2O(l)}$ estabelecem os seguintes equilíbrios:

$$\mathrm{HClO(aq)\rightleftharpoons H^+(aq)+ClO^-(aq)}$$

$$\mathrm{H_2O(l)\rightleftharpoons H^+(aq)+OH^-(aq)}$$

$$K_w=1{,}0\times10^{-14}\ \text{a 25 °C}$$

A atividade sanitizante desses produtos está associada, principalmente, ao ácido hipocloroso (HClO). O íon hipoclorito (ClO⁻), por sua vez, apresenta menor eficácia biocida, isto é, menor capacidade de reduzir ou eliminar microrganismos, mas predomina em meio alcalino, conferindo maior estabilidade aos produtos nessas condições.

Como a distribuição entre HClO e ClO⁻ depende do pH do meio, o controle de qualidade dos produtos pode incluir a verificação desse parâmetro. Para isso, utiliza-se um indicador ácido-base que apresenta coloração amarela em pH < 10,0 e coloração azul em pH > 10,8.

Durante o controle de qualidade de um lote de saneante à base de hipoclorito, mediu-se a concentração de íons hidróxido da solução, como sendo $[\mathrm{OH^-}]=1{,}0\times10^{-3}\ \mathrm{mol\cdot L^{-1}}$.`, blockTypes: ['prose', 'prose', 'prose', 'prose', 'prose', 'prose', 'prose'],
    parts: [
      { id: 'a', prompt: 'Calcule o pH desse lote de saneante. Determine a coloração apresentada pelo indicador ao ser adicionado à amostra.', maxScore: 2,
        expected: tex`$pOH=-\log[\mathrm{OH^-}]=-\log(10^{-3})=3$. A 25 °C, $pH+pOH=14$, logo $\boxed{pH=11}$. Como $11>10{,}8$, o indicador fica $\boxed{\text{azul}}$.`,
        criteria: [{ points: 1, text: 'Calcula pOH=3 e pH=11 com a resolução.' }, { points: 1, text: 'Determina a coloração azul para pH=11.' }] },
      { id: 'b', prompt: 'Considerando o equilíbrio envolvendo HClO e ClO⁻, determine o sentido do deslocamento do equilíbrio provocado pelo aumento do pH da solução. Com base nas informações do texto, qual a consequência desse deslocamento para a atividade biocida do saneante à base de hipoclorito?', maxScore: 2,
        expected: tex`O aumento do pH diminui $[\mathrm{H^+}]$ e desloca o equilíbrio $\boxed{\text{para a direita}}$, favorecendo a formação de $\mathrm{ClO^-}$. Como essa espécie tem menor eficácia, ocorre $\boxed{\text{redução da atividade biocida}}$.`,
        criteria: [{ points: 1, text: 'Indica deslocamento para a direita, favorecendo ClO⁻.' }, { points: 1, text: 'Relaciona o deslocamento à redução da atividade biocida.' }] },
    ], preview: 'Calcule o pH do saneante e relacione o equilíbrio do hipoclorito à atividade biocida.',
  }),
  d(3, {
    subject: 'Química', content: 'Decaimento beta e meia-vida do césio-137',
    statement: tex`Mesmo décadas após o acidente radiológico de Goiânia, ocorrido em 1987, com o césio-137, o episódio segue despertando interesse público e científico.

O radioisótopo envolvido no acidente foi o césio-137, representado pelo símbolo $\!{}^{137}_{55}\mathrm{Cs}$.

Sabe-se que o césio-137 sofre decaimento beta negativo, formando um isótopo do elemento bário e que a meia-vida do césio-137 é de 30 anos.`, blockTypes: ['prose', 'prose', 'prose'],
    parts: [
      { id: 'a', prompt: 'Determine o número de prótons e o número de nêutrons presentes no núcleo do césio-137.', maxScore: 2,
        expected: tex`O número de prótons é $\boxed{Z=55}$ e o número de nêutrons é $n=A-Z=137-55=\boxed{82}$.`,
        criteria: [{ points: 1, text: 'Determina 55 prótons.' }, { points: 1, text: 'Calcula 82 nêutrons.' }] },
      { id: 'b', prompt: 'Escreva a equação nuclear balanceada do decaimento beta negativo do césio-137. Calcule a porcentagem aproximada de césio-137 restante após 60 anos.', maxScore: 2,
        expected: tex`$$\!{}^{137}_{55}\mathrm{Cs}\rightarrow{}^{137}_{56}\mathrm{Ba}+{}^{0}_{-1}\beta$. Como 60 anos correspondem a duas meias-vidas, restam $100\%\rightarrow50\%\rightarrow\boxed{25\%}$ de césio-137.`,
        criteria: [{ points: 1, text: tex`Equaciona o decaimento para $\!{}^{137}_{56}\mathrm{Ba}$ com emissão beta.` }, { points: 1, text: 'Calcula 25% restante após duas meias-vidas.' }] },
    ], preview: 'Determine a composição nuclear do césio-137, seu decaimento beta e a massa restante.',
  }),
  d(4, {
    subject: 'Química', content: 'Esterificação e função orgânica éster',
    statement: 'Na indústria alimentícia, compostos orgânicos de odor agradável são sintetizados a partir da reação entre ácidos carboxílicos e álcoois, em meio ácido e sob aquecimento. Um desses compostos, amplamente utilizado em essências artificiais, é obtido pela reação entre o ácido etanoico e o álcool 3-metilbutan-1-ol.', blockTypes: ['prose'],
    parts: [
      { id: 'a', prompt: 'Escreva a fórmula estrutural condensada do 3-metilbutan-1-ol. Classifique o átomo de carbono a que se liga o grupo hidroxila (–OH) quanto ao número de átomos de carbono vizinhos.', maxScore: 2,
        expected: tex`A fórmula condensada é $\boxed{\mathrm{CH_3-CH(CH_3)-CH_2-CH_2-OH}}$. O carbono ligado à hidroxila tem apenas um carbono vizinho, portanto é $\boxed{\text{primário}}$.`,
        accepted: 'Foi aceita a fórmula estrutural plana.',
        criteria: [{ points: 1, text: 'Apresenta a fórmula estrutural condensada correta do álcool.' }, { points: 1, text: 'Classifica como primário o carbono ligado ao grupo –OH.' }] },
      { id: 'b', prompt: 'Escreva a equação da reação de obtenção do composto orgânico pela reação entre o ácido etanoico e o álcool 3-metilbutan-1-ol, utilizando fórmulas estruturais condensadas. Qual é a função orgânica do produto formado na reação entre o álcool e o ácido em questão?', maxScore: 2,
        expected: tex`$\mathrm{CH_3-COOH+HO-CH_2-CH_2-CH(CH_3)-CH_3\rightarrow CH_3-COO-CH_2-CH_2-CH(CH_3)-CH_3+H_2O}$. O produto orgânico pertence à função $\boxed{\text{éster}}$.`,
        accepted: 'Foi aceita a fórmula estrutural plana para representar a equação.',
        rejected: 'Não foi aceita a representação da equação apenas com fórmulas moleculares.',
        criteria: [{ points: 1, text: 'Escreve a esterificação com fórmulas estruturais condensadas e água como produto.' }, { points: 1, text: 'Identifica a função orgânica éster.' }] },
    ], preview: 'Represente o 3-metilbutan-1-ol e a esterificação que produz uma essência artificial.',
  }),
  d(5, {
    subject: 'Biologia', content: 'Bioacumulação de mercúrio e cadeia trófica',
    statement: `Perícias da Universidade Federal de Minas Gerais (UFMG) apontam presença de contaminantes no rio Paraopeba depois do rompimento, em 2019, da barragem da Vale, localizada em Brumadinho (MG). As perícias apontam como principal impacto ambiental a concentração de metais e metaloides acima dos níveis considerados seguros na água superficial desse rio. No solo e nos rejeitos analisados, o mercúrio aparece com frequência acima dos valores de referência. Nos peixes do Paraopeba, os níveis elevados de manganês, alumínio, zinco, mercúrio, cobre, cromo e níquel são compatíveis com contaminação pela deterioração da qualidade da água. A avaliação da exposição aos metais e metaloides pelo consumo de pescado do rio Paraopeba e de lagoas marginais indicou que os peixes não estão adequados para consumo, principalmente para crianças e gestantes.

(https://guaicuy.org.br, 27.11.2025. Adaptado.)`, blockTypes: ['quote', 'source'],
    parts: [
      { id: 'a', prompt: 'Considere cinco organismos que compõem uma cadeia alimentar encontrada no rio Paraopeba: Fitoplâncton → Zooplâncton → Curimbatá → Piranha → Dourado. A partir da situação descrita no excerto, qual dos organismos da cadeia alimentar apresenta as maiores taxas de mercúrio em seus tecidos? Qual nível trófico esse organismo ocupa nessa cadeia?', maxScore: 2,
        expected: tex`O $\boxed{\text{dourado}}$ apresenta as maiores taxas de mercúrio, devido à bioacumulação ao longo da cadeia. Ele ocupa o $\boxed{\text{quinto nível trófico}}$.`,
        criteria: [{ points: 1, text: 'Identifica o dourado como organismo com maiores taxas de mercúrio.' }, { points: 1, text: 'Indica o quinto nível trófico.' }] },
      { id: 'b', prompt: 'Por qual órgão do corpo humano ocorrerá a contaminação dos fetos das gestantes que se expuserem ao mercúrio? Pessoas gravemente contaminadas por mercúrio podem apresentar, por exemplo, inibição de enzimas atuantes na cadeia respiratória celular dos neurônios do cerebelo, o que resulta em perda de coordenação motora. Sob ação do mercúrio, qual organela celular tem sua função comprometida a ponto de resultar na perda de coordenação motora da pessoa?', maxScore: 2,
        expected: tex`A contaminação do feto ocorre pela $\boxed{\text{placenta}}$. A organela comprometida é a $\boxed{\text{mitocôndria}}$, onde atua a cadeia respiratória celular.`,
        criteria: [{ points: 1, text: 'Indica a placenta como via de contaminação fetal.' }, { points: 1, text: 'Identifica a mitocôndria.' }] },
    ], preview: 'Analise a bioacumulação de mercúrio e seus efeitos no organismo humano.',
  }),
  d(6, {
    subject: 'Biologia', content: 'Arqueas, procariontes e quimiossíntese',
    statement: `Brasileiras descobrem uma nova espécie de arquea em ilha da Antártica

As arqueas são um grupo de microrganismos primitivos formados por uma única célula. O organismo vive em fumarolas, estruturas que liberam gases quentes de origem vulcânica. “É realmente muito quente e tem muito gás sulfídrico. Então tem aquele cheiro de ovo podre. É um lugar bem peculiar”, explicou a pesquisadora Amanda Bendia, professora do Instituto Oceanográfico da Universidade de São Paulo. A arquea encontrada pelas brasileiras não depende de luz para sobreviver. Ela obtém energia a partir de substâncias químicas presentes naquele ambiente. O mais curioso para as pesquisadoras é a capacidade do microrganismo de sobreviver em temperaturas extremamente elevadas, próximas dos 100 ºC — calor suficiente para destruir a maior parte das formas de vida conhecidas.

(www.bbc.com, 12.05.2026. Adaptado.)`, blockTypes: ['headline', 'quote', 'source'],
    parts: [
      { id: 'a', prompt: 'Considerando a organização celular das arqueas, por que esses microrganismos são classificados como procariontes? Embora sejam procariontes, cite uma característica que torna as arqueas evolutivamente mais semelhantes aos eucariontes do que às bactérias.', maxScore: 2,
        expected: 'São procariontes porque não apresentam núcleo definido, tendo o material genético disperso pelo citoplasma. As arqueas se assemelham aos eucariontes pelos mecanismos de replicação e transcrição ou pela presença de histonas associadas ao DNA.',
        accepted: 'Para a organização celular, foi aceita a formulação “sem núcleo definido”. Para a semelhança evolutiva, foram aceitos os mecanismos de replicação/transcrição semelhantes aos dos eucariontes ou histonas associadas ao DNA.',
        criteria: [{ points: 1, text: 'Explica a ausência de núcleo definido e o DNA disperso no citoplasma.' }, { points: 1, text: 'Cita replicação/transcrição semelhantes às dos eucariontes ou histonas associadas ao DNA.' }] },
      { id: 'b', prompt: 'Segundo o excerto, as arqueas obtêm energia a partir de substâncias químicas presentes no ambiente, cujas temperaturas estão próximas dos 100 ºC. Como se denomina esse processo metabólico de obtenção de energia realizado pelas arqueas? No que se refere às funções metabólicas, por que temperaturas elevadas podem destruir a maior parte das formas de vida conhecidas?', maxScore: 2,
        expected: tex`O processo é a $\boxed{\text{quimiossíntese}}$. Temperaturas elevadas podem $\boxed{\text{desnaturar enzimas/proteínas}}$, impedindo que as reações metabólicas ocorram.`,
        criteria: [{ points: 1, text: 'Denomina o processo como quimiossíntese.' }, { points: 1, text: 'Explica que altas temperaturas desnaturam enzimas ou proteínas, comprometendo o metabolismo.' }] },
    ], preview: 'Relacione a organização das arqueas, a quimiossíntese e a resistência a altas temperaturas.',
  }),
  d(7, {
    subject: 'Biologia', content: 'Ventilação pulmonar e aclimatação à altitude',
    statement: `Quando uma pessoa passa mais de quatro horas em locais acima dos 2 300 metros, diversas alterações ocorrem em seu corpo. Os efeitos mais intensos aparecem entre as primeiras 24 e 48 horas. Disputas esportivas em locais elevados impactam o corpo de atletas acostumados ao nível do mar, e a preparação para competições desafia equipes e treinadores. “Para tentar compensar os efeitos da altitude, há um aumento da frequência cardíaca e da ventilação pulmonar”, explica Thiago Ribeiro Lopes, professor do Setor de Fisiologia do Exercício da Universidade Federal de São Paulo (Unifesp). Ao ficar de duas a três semanas no local de disputas, o corpo humano se acostuma com a pressão ambiente. Nesse sentido, o Comitê Olímpico Internacional (COI) obriga que atletas passem por essa aclimatação fisiológica antes de competições realizadas acima dos 3 000 metros.

(www.nexojornal.com.br, 27.02.2024. Adaptado.)`, blockTypes: ['quote', 'source'],
    parts: [
      { id: 'a', prompt: 'O excerto cita que, para compensar os efeitos da altitude, o organismo responde com um aumento da frequência cardíaca e da ventilação pulmonar. Qual músculo do corpo humano é o principal responsável pela ventilação pulmonar? Como a contração desse músculo contribui para o fluxo de ar nos pulmões?', maxScore: 2,
        expected: tex`O músculo é o $\boxed{\text{diafragma}}$. Ao se contrair, ele aumenta o volume da caixa torácica e reduz sua pressão interna, permitindo a $\boxed{\text{entrada de ar}}$ pelos pulmões.`,
        criteria: [{ points: 1, text: 'Identifica o diafragma.' }, { points: 1, text: 'Relaciona a contração ao aumento do volume torácico, à redução da pressão e à entrada de ar.' }] },
      { id: 'b', prompt: 'Qual processo fisiológico alveolar é reduzido em locais com grande altitude? De que forma a medula óssea contribui para a aclimatação dos atletas quando eles chegam a esses locais de duas a três semanas antes de uma competição?', maxScore: 2,
        expected: tex`É reduzida a $\boxed{\text{hematose}}$, isto é, as trocas gasosas entre alvéolos e sangue. A medula óssea aumenta a produção de $\boxed{\text{hemácias}}$, melhorando o transporte de oxigênio para as células.`,
        accepted: 'Para o processo alveolar, foram aceitas “hematose” ou “trocas gasosas entre os alvéolos pulmonares e o sangue nos pulmões”. Para a aclimatação, foram aceitas as formulações aumento de hemácias, eritrócitos ou glóbulos vermelhos.',
        criteria: [{ points: 1, text: 'Identifica a redução da hematose ou das trocas gasosas alveolares.' }, { points: 1, text: 'Explica que a medula óssea aumenta a produção de hemácias e melhora o transporte de oxigênio.' }] },
    ], preview: 'Explique a ventilação pulmonar e a aclimatação do organismo à altitude.',
  }),
  d(8, {
    subject: 'Biologia', content: 'Ovulogênese, meiose e trissomia 18',
    statement: 'A síndrome de Edwards, ou trissomia 18, é uma doença cromossômica causada pela presença de um cromossomo 18 extra e é caracterizada por múltiplas anomalias congênitas. A maioria dos casos da doença se deve à não disjunção cromossômica durante as divisões celulares da ovulogênese que formam os ovócitos primários e secundários.', blockTypes: ['prose'],
    parts: [
      { id: 'a', prompt: 'Quais células originam os ovócitos primários durante a ovulogênese? Qual hormônio é o responsável por ativar os ovócitos primários na puberdade, permitindo que esses se desenvolvam em ovócitos secundários?', maxScore: 2,
        expected: tex`Os ovócitos primários originam-se das $\boxed{\text{ovogônias/oogônias}}$. O hormônio é o $\boxed{\text{folículo-estimulante (FSH)}}$.`,
        criteria: [{ points: 1, text: 'Identifica ovogônias ou oogônias como células de origem.' }, { points: 1, text: 'Indica o hormônio folículo-estimulante, FSH.' }] },
      { id: 'b', prompt: 'Um paciente com a síndrome de Edwards foi gerado a partir da fecundação entre um espermatozoide de composição cromossômica típica e um ovócito secundário atípico, com dois cromossomos 18. Considerando que a não disjunção cromossômica possa ocorrer tanto na meiose I como na meiose II da ovulogênese, em qual etapa meiótica essa alteração ocorreu? Por que os eventos da meiose I da ovulogênese comprovam o que afirma a Segunda Lei de Mendel?', maxScore: 2,
        expected: tex`Segundo os critérios oficiais, a não disjunção cromossômica ocorreu na $\boxed{\text{anáfase}}$. Na meiose I, a separação dos cromossomos homólogos distribui ao acaso um representante de cada par às células filhas, gerando diversas combinações e comprovando a $\boxed{\text{segregação independente}}$.`,
        accepted: 'Para a segunda resposta, foi aceita a formulação “segregação independente dos cromossomos durante a meiose”.',
        criteria: [{ points: 1, text: 'Indica a anáfase como etapa da não disjunção, conforme o documento oficial.' }, { points: 1, text: 'Relaciona a separação independente dos homólogos na meiose I à Segunda Lei de Mendel.' }] },
    ], preview: 'Analise a ovulogênese, a não disjunção cromossômica e a Segunda Lei de Mendel.',
  }),
];
