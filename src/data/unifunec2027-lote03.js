const PROCESS_URL = 'https://tmpfiles.org/w2Atoes4Ntqn/provaii-objetiva3.pdf';
const ANSWER_URL = 'https://tmpfiles.org/wkAFoLsqN17m/gabaritodaprovaii-objetiva3.pdf';
const shared = {
  exam: 'Unifunec', year: 2027, phase: 'Prova II', originalUrl: PROCESS_URL,
  officialAnswerUrl: ANSWER_URL, kind: 'objective', correctionOrigin: 'official',
};

export const unifunec2027Lote03 = [
  {
    ...shared,
    id: 'unifunec2027-prova2-q21', number: 'Questão 21', subject: 'Geografia', content: 'Capitalismo, empreendedorismo e inovação', difficulty: 'Fácil',
    statement: `Joseph Schumpeter é considerado um dos mais importantes economistas do início do século XX e sua teoria da inovação é altamente relevante hoje em dia. Schumpeter definiu o processo de destruição criativa, no qual novas ideias e tecnologias substituem antigas formas de produção e mudam o mercado. Ele acreditava que a inovação era a força motriz por trás do desenvolvimento econômico e que os empreendedores eram os responsáveis por trazer novas ideias e tecnologias para o mercado. Para Schumpeter, o empreendedor era um indivíduo que buscava ativamente novas oportunidades de negócio, sendo capaz de criar novos mercados e mudar a concorrência existente.

(www.sebraepr.com.br. Adaptado.)

A perspectiva apresentada no excerto sobre empreendedorismo e inovação está relacionada ao sistema`,
    blockTypes: ['prose', 'source', 'command'], preview: 'Relacione empreendedorismo e inovação ao sistema capitalista.',
    alternatives: ['capitalista, marcado pela propriedade privada dos meios de produção para impulsionar a economia.', 'comunista, marcado pelo gerenciamento coletivo para garantir a propriedade dos processos produtivos.', 'keynesiano, marcado pela produção industrial descentralizada para atender os mercados consumidores.', 'flexível, marcado pela relação entre oferta e demanda para determinar a quantidade da produção.', 'liberal, marcado pelo planejamento estatal para atender às necessidades econômicas da população.'], correct: 0,
    resolution: ['A inovação impulsionada por empreendedores, a busca de oportunidades de negócio e a concorrência em mercados são elementos do capitalismo, sistema fundamentado na propriedade privada dos meios de produção.'],
    analyses: ['Correta. Empreendedorismo, inovação e concorrência são associados ao capitalismo e à propriedade privada.', 'Incorreta. O excerto não descreve gerenciamento coletivo nem propriedade coletiva da produção.', 'Incorreta. Keynesianismo não se define por produção industrial descentralizada, e esse não é o eixo do excerto.', 'Incorreta. Oferta e demanda não configuram, isoladamente, um “sistema flexível” nem sintetizam a perspectiva apresentada.', 'Incorreta. Planejamento estatal para atender necessidades não é a característica liberal destacada e não corresponde ao texto.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q22', number: 'Questão 22', subject: 'Geografia', content: 'Expansão da fronteira agrícola no MATOPIBA', difficulty: 'Média',
    statement: 'Analise o mapa que destaca uma região de expansão da fronteira agrícola brasileira.', blockTypes: ['prose'],
    images: [{ src: '/images/unifunec2027/q22-fronteira-agricola.svg', alt: 'Mapa do Brasil com destaque para a região do MATOPIBA, entre Maranhão, Tocantins, Piauí e Bahia.', caption: '(https://amazonia.org.br, 24.08.2023.)' }],
    statementAfter: 'Um dos motivos para a expansão da fronteira agrícola na região destacada no mapa é', afterBlockTypes: ['command'], preview: 'Identifique um fator da expansão agrícola na região destacada do mapa.',
    alternatives: ['o clima equatorial, que auxilia o desenvolvimento da produção.', 'a topografia plana, que favorece a mecanização da produção.', 'a infraestrutura logística, que permite o consumo interno da produção.', 'o crédito rural, que financia a transição agroecológica da produção.', 'a grilagem territorial, que regulariza a expansão da produção.'], correct: 1,
    resolution: ['A região destacada corresponde ao MATOPIBA. Nela, áreas de chapadões e relevo relativamente plano favorecem o uso de máquinas agrícolas em grandes propriedades, contribuindo para a expansão da fronteira agrícola.'],
    analyses: ['Incorreta. A maior parte do MATOPIBA apresenta clima tropical, com estação seca, e não clima equatorial.', 'Correta. O relevo plano dos chapadões facilita a mecanização da produção agrícola.', 'Incorreta. A expansão voltada à exportação não é explicada por infraestrutura destinada ao consumo interno; a logística foi historicamente um desafio na região.', 'Incorreta. A expansão descrita é de grande produção comercial, não de transição agroecológica.', 'Incorreta. Grilagem é apropriação irregular de terras e não regulariza juridicamente a expansão.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q23', number: 'Questão 23', subject: 'Geografia', content: 'Climatologia: frequência de geadas e altitude', difficulty: 'Fácil',
    statement: 'Analise o mapa que apresenta a frequência de geadas no Brasil.', blockTypes: ['prose'],
    images: [{ src: '/images/unifunec2027/q23-frequencia-geadas.svg', alt: 'Mapa do centro-sul do Brasil com quatro faixas de frequência de geadas; as maiores frequências concentram-se em áreas elevadas do Sul.', caption: '(Alexandre Costa Varella et al. “Silvopastoral systems in the cold zone of Brazil”. Advances in Agroforestry, 2016. Adaptado.)' }],
    statementAfter: 'Considerando fatores climáticos, a maior frequência de geadas está associada a áreas de', afterBlockTypes: ['command'], preview: 'Relacione a maior frequência de geadas ao fator climático adequado.',
    alternatives: ['brisa continental.', 'maritimidade constante.', 'brisa marítima.', 'altitude elevada.', 'pressão atmosférica baixa.'], correct: 3,
    resolution: ['As maiores frequências aparecem em áreas de planalto e serra do Sul. Nas altitudes elevadas, a temperatura do ar tende a ser menor, favorecendo a formação de geadas, especialmente em noites de forte resfriamento radiativo.'],
    analyses: ['Incorreta. Brisa continental não é o fator que explica o padrão regional apresentado.', 'Incorreta. A maritimidade tende a reduzir a amplitude térmica, e não a elevar a frequência de geadas.', 'Incorreta. A brisa marítima é uma circulação local e não explica as maiores frequências nas áreas elevadas.', 'Correta. O mapa associa as maiores frequências às áreas mais elevadas, onde as temperaturas são mais baixas.', 'Incorreta. Geadas noturnas são frequentemente favorecidas por estabilidade atmosférica e não, diretamente, por baixa pressão.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q24', number: 'Questão 24', subject: 'Geografia', content: 'Economia circular e uso de recursos', difficulty: 'Fácil',
    statement: 'A imagem esquematiza um modelo econômico.', blockTypes: ['prose'],
    images: [{ src: '/images/unifunec2027/q24-economia-circular.svg', alt: 'Ciclo da economia circular com matérias-primas, design, produtos remanufaturados, distribuição, consumo, reutilização, reparo, coleta e reciclagem.', caption: '(www.conectaverde.com.br. Adaptado.)' }],
    statementAfter: 'O modelo econômico apresentado na imagem tem como um de seus princípios', afterBlockTypes: ['command'], preview: 'Reconheça um princípio da economia circular representada no esquema.',
    alternatives: ['o descarte de produtos em aterros, a fim de incentivar a produção de biogás.', 'a incineração dos resíduos sólidos, a fim de gerar energia elétrica.', 'o estímulo à manutenção de produtos em uso, a fim de reduzir o desperdício.', 'a extração intensiva de matéria-prima, a fim de garantir o crescimento econômico.', 'o incentivo à obsolescência programada, a fim de aumentar a eficiência econômica.'], correct: 2,
    resolution: ['O esquema representa a economia circular, que busca manter materiais e produtos em circulação pelo maior tempo possível. Reutilização, reparo, coleta, reciclagem e remanufatura reduzem desperdícios e a necessidade de novas matérias-primas.'],
    analyses: ['Incorreta. Descarte em aterros caracteriza o encaminhamento final de resíduos, não o princípio central do ciclo apresentado.', 'Incorreta. A incineração não aparece como etapa do modelo esquematizado.', 'Correta. Reutilização e reparo mantêm produtos em uso e reduzem o desperdício.', 'Incorreta. A economia circular procura reduzir a dependência de extração intensiva de matérias-primas.', 'Incorreta. Obsolescência programada encurta a vida útil, contrariando o modelo de manutenção e reaproveitamento.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q25', number: 'Questão 25', subject: 'Geografia', content: 'Cartografia: projeção azimutal', difficulty: 'Média',
    statement: 'Observe a projeção cartográfica azimutal.', blockTypes: ['prose'],
    images: [{ src: '/images/unifunec2027/q25-projecao-azimutal.svg?v=20261104-famerp', alt: 'Projeção azimutal centrada na região polar sul, com meridianos concorrentes no ponto central e paralelos concêntricos.', caption: '(https://atlasescolar.ibge.gov.br. Adaptado.)' }],
    statementAfter: 'Uma característica dessa projeção é a', afterBlockTypes: ['command'], preview: 'Identifique uma propriedade da projeção cartográfica azimutal.',
    alternatives: ['preservação das distâncias corretas a partir do ponto central, tornando-se ideal para traçar rotas aéreas.', 'conservação das distâncias em áreas de baixas latitudes, tornando-se ideal para mapear rotas terrestres.', 'representação das formas dos continentes como na realidade, tornando-se ideal para as navegações.', 'distorção das áreas próximas ao ponto central, tornando-se ideal para traçar rotas marítimas.', 'manutenção das áreas dos continentes idênticas à realidade, tornando-se ideal para mapear rotas continentais.'], correct: 0,
    resolution: ['Na projeção azimutal equidistante, as distâncias e as direções medidas a partir do ponto central são preservadas. Isso facilita o planejamento de rotas que partem desse centro, aplicação frequente em rotas aéreas.'],
    analyses: ['Correta. A equidistância radial a partir do centro é uma propriedade útil para o traçado de rotas aéreas.', 'Incorreta. A conservação indicada não se restringe a baixas latitudes nem se destina especialmente a rotas terrestres.', 'Incorreta. Nenhuma projeção plana conserva perfeitamente todas as formas continentais; essa não é a propriedade descrita.', 'Incorreta. As áreas próximas ao centro são menos distorcidas que as regiões periféricas.', 'Incorreta. A projeção apresentada não é equivalente e não mantém todas as áreas idênticas às reais.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q26', number: 'Questão 26', subject: 'História', content: 'Expansão marítima portuguesa e ciência náutica', difficulty: 'Fácil',
    statement: `Os portugueses dos séculos XV e XVI provaram pela experiência e pela dedução científica: que o oceano Atlântico era navegável e estava livre de monstros; que o mundo equatorial era habitável e habitado; que era possível navegar sistematicamente longe da costa e conseguir perfeita orientação pelo Sol e pelas estrelas; que a África tinha uma ponta meridional e que existia um caminho marítimo para a Índia.

(Antônio H. de Oliveira Marques. Brevíssima história de Portugal, 2023.)

O excerto faz referência`,
    blockTypes: ['quote', 'source', 'command'], works: ['Brevíssima história de Portugal'], preview: 'Relacione os conhecimentos náuticos portugueses à expansão marítima.',
    alternatives: ['à crise da hegemonia europeia com o surgimento de novos centros econômicos.', 'ao controle exclusivo dos conhecimentos náuticos pelo reino português.', 'à importância das monarquias constitucionais para a expansão do comércio europeu.', 'às permanências da cultura medieval em uma conjuntura de mudanças socioeconômicas.', 'aos avanços tecno-científicos relacionados ao contexto de transformações em uma dimensão intercontinental.'], correct: 4,
    resolution: ['O texto destaca conhecimentos de navegação oceânica, orientação astronômica e reconhecimento geográfico desenvolvidos nos séculos XV e XVI. Esses avanços tecno-científicos participaram das transformações da expansão marítima e da formação de conexões intercontinentais.'],
    analyses: ['Incorreta. O excerto enfatiza a expansão portuguesa, não uma crise de hegemonia europeia.', 'Incorreta. O texto não afirma exclusividade dos conhecimentos, que também resultaram de circulação e contatos entre povos.', 'Incorreta. A expansão dos séculos XV e XVI ocorreu no contexto das monarquias absolutistas, não constitucionais.', 'Incorreta. A ênfase está nas transformações e nos conhecimentos que superaram concepções anteriores, não em permanências medievais.', 'Correta. Navegação oceânica e orientação astronômica exemplificam avanços tecno-científicos da expansão intercontinental.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q27', number: 'Questão 27', subject: 'História', content: 'Inglaterra no século XVII: Parlamento e monarquia', difficulty: 'Média',
    statement: `O período de 1603 a 1714 foi talvez o mais decisivo da história da Inglaterra. O rei Jaime I (1603-1625), como os reis Tudors que vieram antes dele, escolhia seus ministros e seus prediletos conforme suas conveniências; já no início do século XVIII, os ministros não conseguiam governar sem contar com a maioria do Parlamento. Jaime I apregoava que os reis governavam por direito divino, e muitos autores políticos insistiam na ideia de que as propriedades dos súditos estavam à disposição do rei. Em 1714, a política tornara-se uma questão racional, discutida agora em termos de utilidade, experiência, senso comum, não mais em termos de direito divino.

(Chistopher Hill. O século das revoluções: 1603-1714, 2012. Adaptado.)

O excerto compara dois momentos da história da Inglaterra, sendo que, no decorrer do século XVII,`,
    blockTypes: ['quote', 'source', 'command'], works: ['O século das revoluções: 1603-1714'], preview: 'Interprete a transformação da relação entre monarquia e Parlamento na Inglaterra.',
    alternatives: ['a descrença religiosa de grande parte da população favoreceu a reforma do poder político.', 'as mudanças políticas ampliaram o direito de participação social nas decisões estatais.', 'o imperialismo inglês estendeu-se às regiões dos continentes africano e asiático.', 'a revolução industrial projetou o domínio econômico inglês em escala mundial.', 'a modernização política ocorreu pacificamente por meio de acordos entre grupos sociais.'], correct: 1,
    resolution: ['O contraste central está entre a escolha discricionária de ministros pelo rei e a necessidade de os ministros contarem com maioria parlamentar. Essa mudança fortaleceu a participação política por meio do Parlamento e limitou o poder real.'],
    analyses: ['Incorreta. O texto não atribui a transformação política à descrença religiosa da população.', 'Correta. A necessidade de maioria parlamentar amplia a participação nas decisões estatais em relação ao poder real discricionário.', 'Incorreta. A expansão imperialista na África e na Ásia não é o assunto comparado no excerto.', 'Incorreta. A revolução industrial e o domínio econômico mundial não são o eixo da mudança institucional descrita.', 'Incorreta. O século XVII inglês incluiu guerras civis, execução real e restauração; não foi um processo apenas pacífico.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q28', number: 'Questão 28', subject: 'História', content: 'D. João VI e a abertura dos portos', difficulty: 'Média',
    statement: `Analise o excerto da descrição da coroação de D. João VI, como rei de Portugal, feita pelo artista francês Jean-Baptista Debret, que residiu no Brasil de 1816 a 1831.

No cais defronte do palácio, diante do chafariz, a Junta Real mandara erigir um arco do triunfo com todas as saliências de suas quatro faces inteiramente em relevo. O monumento triunfal era erguido em honra do soberano recém-aclamado e unia à severidade de seu estilo brilhantes acessórios. Entre os diversos baixos-relevos, que ornavam a parte superior do monumento, via-se o escudo das armas do reino, sustentado por dois gênios, e, finalmente, coroando o arco do triunfo, apresentava-se um grupo escultural de belo e rico movimento, formado por dois rios (o Tejo e o Rio de Janeiro), apoiando-se às armas coroadas do Reino Unido de Brasil, Portugal e Algarves. No friso lia-se esta inscrição: “AO LIBERTADOR DO COMÉRCIO”.

(Jean-Baptiste Debret. Viagem pitoresca e histórica ao Brasil, tomo III, 2016. Adaptado.)

Ao descrever o monumento de coroação de D. João VI, o artista Debret ressalta`,
    blockTypes: ['prose', 'quote', 'source', 'command'], works: ['Viagem pitoresca e histórica ao Brasil'], preview: 'Interprete a celebração de D. João VI como “libertador do comércio”.',
    alternatives: ['as realizações políticas e econômicas da família real portuguesa favoráveis à antiga colônia brasileira.', 'a permanência e a reprodução da tradicional exploração econômica metropolitana sobre as riquezas brasileiras.', 'os estilos estéticos e artísticos exclusivamente luso-brasileiros no cenário de elevação ao trono do novo soberano.', 'a representação idealizada de nova era de liberdade individual e social para o conjunto da população luso-brasileira.', 'o projeto monárquico de concessão da independência política e econômica do Brasil em relação ao domínio português.'], correct: 0,
    resolution: ['O monumento celebra o soberano e o apresenta como “libertador do comércio”, referência à abertura dos portos brasileiros às nações amigas, de 1808. Debret destaca realizações políticas e econômicas joaninas favoráveis ao Brasil, sem deixar de registrar a linguagem celebrativa da monarquia.'],
    analyses: ['Correta. A celebração do comércio remete à abertura dos portos e apresenta medidas joaninas como benéficas ao Brasil.', 'Incorreta. O monumento não denuncia a exploração metropolitana; emprega uma linguagem de homenagem ao soberano.', 'Incorreta. A descrição não restringe os estilos a tradições exclusivamente luso-brasileiras, e o próprio autor é francês.', 'Incorreta. A liberdade exaltada é a do comércio, não um programa de liberdade individual e social para toda a população.', 'Incorreta. A homenagem ocorre no quadro monárquico do Reino Unido e não anuncia um projeto de independência brasileira.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q29', number: 'Questão 29', subject: 'História', content: 'Política dos Estados Unidos para a América Latina', difficulty: 'Média',
    statement: `A história das intervenções estadunidenses na América Latina no século XX desenrola-se em quatro atos maiores: “a diplomacia do Big Stick” (“grosso bastão”), de Theodore Roosevelt (1901-1909); “a política da boa vizinhança”, de Franklin Delano Roosevelt (1933-1945). Depois, veio a Guerra Fria, ritmada por golpes de Estado orquestrados na sombra e por intervenções diretas. A partir do fim dos anos 1980, Washington desvia a sua atenção do continente, antes de voltar com força na atual intervenção na Venezuela.

(Angeline Montoya. “États — Unis deux siècles d´ingérence en Amérique latine”. Le Monde, 19.01.2026. Adaptado.)

As fases da política estadunidense para a América Latina, mencionadas no excerto, são orientadas por fatores diversos. Entre esses fatores, destaca-se a`,
    blockTypes: ['quote', 'source', 'command'], preview: 'Identifique um fator orientador das diferentes fases da política estadunidense.',
    alternatives: ['promoção de uma aliança para o progresso das economias continentais.', 'necessidade de proteção mútua contra as ameaças militares de países estrangeiros.', 'situação político-econômica do país nas conjunturas históricas do século.', 'oposição secular ao expansionismo dos regimes comunistas instalados nas Américas.', 'defesa intransigente da unidade cultural das populações americanas.'], correct: 2,
    resolution: ['As mudanças entre Big Stick, boa vizinhança, intervenções da Guerra Fria e posterior redirecionamento de atenção acompanham interesses e condições político-econômicas dos Estados Unidos em cada conjuntura histórica.'],
    analyses: ['Incorreta. A Aliança para o Progresso pertence a uma conjuntura específica e não explica todas as fases mencionadas.', 'Incorreta. O texto não descreve um sistema de proteção mútua contra ameaças externas.', 'Correta. Os interesses político-econômicos estadunidenses variam conforme as conjunturas e orientam as diferentes políticas.', 'Incorreta. O anticomunismo é central na Guerra Fria, mas não explica o Big Stick do início do século nem todas as demais fases.', 'Incorreta. As intervenções não são apresentadas como defesa da unidade cultural das populações americanas.'],
  },
  {
    ...shared,
    id: 'unifunec2027-prova2-q30', number: 'Questão 30', subject: 'Sociologia', content: 'Participação social e políticas ambientais', difficulty: 'Fácil',
    statement: `Leia o trecho da entrevista concedida pela cientista ambiental Morena Mills à revista da Fundação de Amparo à Pesquisa do Estado de São Paulo (Fapesp).

Os processos precisam ser participativos, com engajamento real das comunidades locais, que arcam com os custos e recebem os benefícios das ações. É essencial manter uma comunicação constante com elas, não só por uma questão de justiça e legitimidade, mas porque isso melhora a qualidade dos projetos. As pessoas locais trazem conhecimentos e informações que nem a melhor tecnologia, como satélites, inteligência artificial e dados sofisticados, consegue captar. Por isso, é fundamental adotar uma abordagem de coprodução, em que projetos e políticas públicas são construídos junto com as comunidades e não apenas para elas.

(Sarah Schmidt. “É preciso ouvir as comunidades locais”. Pesquisa Fapesp, nº 358, 2025.)

Considerando o ponto de vista apresentado no trecho da entrevista, as políticas de preservação ambiental`,
    blockTypes: ['prose', 'quote', 'source', 'command'], preview: 'Relacione preservação ambiental à coprodução com comunidades locais.',
    alternatives: ['exigem recursos monetários e apoio de especialistas reunidos em fóruns internacionais.', 'podem desconsiderar os fatores gerais e universais dos desequilíbrios ecológicos.', 'resultam dos interesses das economias e das autoridades políticas das áreas degradadas.', 'devem ocorrer em um quadro de planejamento e de atuação social coletiva.', 'reconhecem o poder de decisão autônomo e independente de organizações da sociedade civil.'], correct: 3,
    resolution: ['A entrevistada defende participação efetiva e coprodução das políticas com as comunidades. Logo, a preservação deve combinar planejamento e atuação coletiva, incorporando conhecimentos locais e compartilhando decisões, custos e benefícios.'],
    analyses: ['Incorreta. O trecho enfatiza comunidades locais, e não especialistas em fóruns internacionais como condição central.', 'Incorreta. Valorizar conhecimentos locais não significa desconsiderar fatores gerais dos desequilíbrios ecológicos.', 'Incorreta. A proposta não restringe as políticas aos interesses econômicos ou das autoridades das áreas degradadas.', 'Correta. A coprodução com comunidades expressa planejamento e atuação social coletiva.', 'Incorreta. Coprodução implica construção conjunta, não poder autônomo e independente de determinadas organizações.'],
  },
];
