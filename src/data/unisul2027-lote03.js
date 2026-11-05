const PROCESS_URL = 'https://tmpfiles.org/wwAsoTsXxAJi/unisul2027-provaobjetiva.pdf';
const ANSWER_URL = 'https://tmpfiles.org/wkABoSsaNGju/unisul2027-gabaritodaprovaobjetiva.pdf';
const shared = {
  exam: 'Unisul', year: 2027, phase: 'Prova II', originalUrl: PROCESS_URL,
  officialAnswerUrl: ANSWER_URL, kind: 'objective', correctionOrigin: 'official',
};

export const unisul2027Lote03 = [
  {
    ...shared,
    id: 'unisul2027-prova2-q21', number: 'Questão 21', subject: 'Geografia', content: 'Formação de tsunamis', difficulty: 'Fácil',
    statement: 'O tsunami que aconteceu no Oceano Índico em 26.12.2004 foi descrito pela Organização das Nações Unidas (ONU) como uma das piores tragédias naturais da história.', blockTypes: ['prose'],
    images: [{ src: '/images/unisul2027/q21-tsunami.svg?v=20261104-vet1', alt: 'Mapa do Oceano Índico com Bangladesh, Índia, Myanmar, Tailândia, Sri Lanka, Maldivas, Malásia, Sumatra e Indonésia; círculos indicam a propagação do tsunami.', caption: '(www.bbc.co.uk. Adaptado.)' }],
    statementAfter: 'A formação de tsunamis está associada', afterBlockTypes: ['command'], preview: 'Relacione a formação de tsunamis a processos geológicos.',
    alternatives: ['à ocorrência de terremotos no fundo do mar, cuja liberação de energia promove o deslocamento de grande volume de massas de água.', 'à ocorrência de ventos oceânicos quentes em regiões tropicais, que ganham maior intensidade nas monções de verão.', 'ao choque abrupto de correntes marítimas quentes e frias, cujas diferenças térmicas promovem a formação de ondas gigantes.', 'ao aumento da temperatura oceânica na região equatorial, devido à maior incidência do El Niño provocada pelo aquecimento global.', 'à formação de furacões em regiões intertropicais, promovendo deslocamento de grandes ondas no mar.'], correct: 0,
    resolution: ['Tsunamis são comumente gerados por terremotos submarinos que deslocam verticalmente o fundo do mar. A energia liberada movimenta uma grande massa de água, e as ondas se propagam pelo oceano.'],
    analyses: ['Correta. O deslocamento do fundo marinho por terremotos transfere energia a grandes massas de água.', 'Incorreta. Ventos e monções não explicam a formação característica de tsunamis.', 'Incorreta. O encontro de correntes de temperaturas diferentes não produz esse fenômeno.', 'Incorreta. El Niño é um fenômeno oceanográfico-climático, não a causa dos tsunamis.', 'Incorreta. Furacões podem gerar marés de tempestade, mas não são a formação descrita de tsunamis.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q22', number: 'Questão 22', subject: 'Geografia', content: 'Pix e relações econômicas Brasil–Estados Unidos', difficulty: 'Média',
    statement: `Pix é um sistema de pagamento instantâneo criado pelo Banco Central, que permite transferir dinheiro entre contas em segundos, a qualquer hora e dia. É rápido, prático e seguro e pode ser usado a partir de contas corrente, poupança ou pré-pagas.

(www.bcb.gov.br)

No que se refere às relações econômicas entre Brasil e Estados Unidos, o crescimento do sistema de pagamentos mencionado no excerto resultou`, blockTypes: ['prose', 'source', 'command'], preview: 'Analise o efeito econômico internacional do crescimento do Pix.',
    alternatives: ['na restrição do uso do dólar no mercado comercial brasileiro.', 'no uso do Pix como o principal sistema de pagamentos internacionais.', 'na desvalorização do real frente ao dólar no mercado financeiro.', 'no aumento expressivo das reservas cambiais brasileiras.', 'na perda de receita das operadoras de cartão de crédito estadunidenses.'], correct: 4,
    resolution: ['O Pix oferece uma infraestrutura nacional alternativa para pagamentos e transferências. Seu crescimento reduz a participação das redes tradicionais de cartão em transações antes intermediadas por elas, afetando a receita de operadoras estadunidenses; isso não implica substituir o dólar nem tornar o Pix o principal sistema internacional.'],
    analyses: ['Incorreta. O funcionamento do Pix não impõe restrição cambial ao uso comercial do dólar.', 'Incorreta. O Pix é um sistema brasileiro e não se tornou o principal meio de pagamentos internacionais.', 'Incorreta. A cotação do real depende de fatores cambiais mais amplos e não decorre diretamente do Pix.', 'Incorreta. O crescimento do Pix não gera, por si, aumento expressivo das reservas cambiais.', 'Correta. A alternativa nacional de pagamentos reduz transações intermediadas por redes de cartão e pressiona sua receita.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q23', number: 'Questão 23', subject: 'Geografia', content: 'BRICS e cooperação internacional', difficulty: 'Fácil',
    statement: 'O mapa destaca países que formam um grupo de articulação político-diplomática e de cooperação.', blockTypes: ['prose'],
    images: [{ src: '/images/unisul2027/q23-mapa-brics.svg?v=20261104-vet1', alt: 'Mapa-múndi com Brasil, Rússia, Índia, China, África do Sul, Egito, Etiópia, Irã, Arábia Saudita, Emirados Árabes Unidos e Indonésia destacados em verde.' }],
    statementAfter: 'Esse grupo é denominado', afterBlockTypes: ['command'], preview: 'Identifique o grupo de cooperação destacado no mapa.',
    alternatives: ['Apec.', 'Opep.', 'Asean.', 'CEI.', 'BRICS.'], correct: 4,
    resolution: ['Os países destacados pertencem ao BRICS, grupo de articulação político-diplomática e cooperação. A sigla deriva dos cinco membros originais — Brasil, Rússia, Índia, China e África do Sul — e o mapa também apresenta os demais integrantes incluídos na composição exibida.'],
    analyses: ['Incorreta. A Apec reúne economias da Ásia e do Pacífico e não corresponde ao conjunto destacado.', 'Incorreta. A Opep é formada por países exportadores de petróleo.', 'Incorreta. A Asean reúne países do Sudeste Asiático.', 'Incorreta. A CEI reúne antigas repúblicas soviéticas.', 'Correta. Os países destacados pertencem ao BRICS; Brasil, Rússia, Índia, China e África do Sul são os cinco membros que dão origem à sigla.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q24', number: 'Questão 24', subject: 'Geografia', content: 'El Niño e extremos climáticos', difficulty: 'Média',
    statement: `Maior de todos os tempos? Cresce o temor de um “super El Niño” histórico

Com oceanos perto de novos recordes de calor, cientistas alertam para um fenômeno capaz de ampliar eventos extremos em escala global.

(www.veja.abril.com.br, 11.05.2026.)

O El Niño é um fenômeno capaz promover alterações climáticas extremas em escala global. Uma consequência do El Niño é`, blockTypes: ['headline', 'prose', 'source', 'command'], preview: 'Reconheça uma consequência climática do El Niño no Brasil.',
    alternatives: ['o crescimento da piscosidade no litoral do Peru, provocado pela maior ressurgência.', 'a diminuição das chuvas na região amazônica, aumentando os casos de incêndio.', 'a redução da temperatura global, provocando maior número de nevascas no planeta.', 'um longo período de estiagem na região Sul do Brasil, com maior número de queimadas.', 'o aumento das chuvas no sertão nordestino do Brasil, provocando enchentes.'], correct: 1,
    resolution: ['O El Niño altera a circulação atmosférica e os padrões de precipitação. Na Amazônia, pode intensificar períodos de seca e reduzir a umidade, favorecendo incêndios florestais.'],
    analyses: ['Incorreta. O El Niño tende a reduzir a ressurgência de águas frias e a piscosidade no litoral peruano.', 'Correta. A redução das chuvas amazônicas aumenta a vulnerabilidade a incêndios.', 'Incorreta. O fenômeno envolve aquecimento anômalo do Pacífico e não redução da temperatura global.', 'Incorreta. Em geral, o Sul do Brasil apresenta aumento de chuvas durante episódios de El Niño.', 'Incorreta. O sertão nordestino tende a maior irregularidade e déficit de chuvas, não a enchentes generalizadas.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q25', number: 'Questão 25', subject: 'Geografia', content: 'Escala cartográfica', difficulty: 'Fácil',
    statement: `O mapa de uma região metropolitana foi projetado na escala 1 : 250 000. Nesse mapa, a distância em linha reta entre duas cidades é de 12 cm.

De acordo com essa escala, a distância real entre as duas cidades é de`, blockTypes: ['prose', 'command'], preview: 'Converta uma distância no mapa para a distância real.',
    alternatives: ['20 km.', '12 km.', '30 km.', '3 km.', '37 km.'], correct: 2,
    resolution: ['Na escala 1 : 250 000, cada centímetro no mapa representa 250 000 cm na realidade. Assim, 12 × 250 000 = 3 000 000 cm = 30 000 m = 30 km.'],
    analyses: ['Incorreta. A multiplicação correta fornece 30 km.', 'Incorreta. Doze é a medida em centímetros no mapa, não a distância real em quilômetros.', 'Correta. Doze centímetros equivalem a 3 000 000 cm, ou 30 km.', 'Incorreta. Esse resultado corresponde a um erro de fator dez na conversão.', 'Incorreta. A escala e a distância fornecidas resultam 30 km.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q26', number: 'Questão 26', subject: 'História', content: 'Egito Antigo: trabalho e grandes obras', difficulty: 'Média',
    statement: `Pesquisadores da Universidade de Marselha, na França, revelaram indícios de contaminação por cobre no porto de Wadi al-Jarf, que desempenhou um papel fundamental durante a construção da Pirâmide de Quéops, no Egito. O estudo indica que os trabalhadores responsáveis pela construção das pirâmides podem ter sido expostos a altos níveis de contaminação por cobre, potencialmente causando intoxicações ao longo do tempo. [...] Segundo os pesquisadores, a descoberta lança uma nova perspectiva sobre as condições de trabalho nos grandes projetos arquitetônicos do Egito Antigo. Até então, a maioria dos estudos se concentrava no esforço físico exigido para erguer as pirâmides, mas agora há evidências de que a exposição a metais pesados pode ter sido outro desafio enfrentado pelos trabalhadores.

(https://oglobo.globo.com, 24.03.2025.)

De acordo com a nova descoberta apresentada no excerto, as grandes obras do Egito Antigo estavam associadas a`, blockTypes: ['prose', 'source', 'command'], preview: 'Relacione as grandes obras egípcias às atividades produtivas e ao trabalho.',
    alternatives: ['atividades produtivas que integravam diferentes setores da economia do território.', 'formas de produção voltadas ao atendimento das necessidades das comunidades locais.', 'relações de trabalho organizadas sem a participação da administração estatal.', 'práticas construtivas baseadas predominantemente em conhecimentos religiosos.', 'técnicas de construção que reduziam os impactos das atividades sobre os trabalhadores.'], correct: 0,
    resolution: ['A contaminação por cobre em um porto ligado à construção revela a articulação entre extração e trabalho de metais, transporte marítimo e edificação. As grandes obras envolviam diferentes atividades e setores da economia, com impactos também sobre os trabalhadores.'],
    analyses: ['Correta. O porto e o cobre mostram a integração de atividades produtivas, transporte e construção.', 'Incorreta. As pirâmides eram projetos ligados ao poder faraônico, não obras voltadas às necessidades das comunidades locais.', 'Incorreta. Grandes projetos egípcios contavam com organização e administração estatal.', 'Incorreta. A descoberta trata de atividades materiais e condições de trabalho, não de predomínio de conhecimentos religiosos.', 'Incorreta. A exposição ao cobre evidencia justamente impactos nocivos sobre os trabalhadores.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q27', number: 'Questão 27', subject: 'História', content: 'Renascimento e recuperação da Antiguidade', difficulty: 'Fácil',
    statement: `Entre as obras mais famosas do Renascimento, “A Escola de Atenas”, de Rafael Sanzio, está lado a lado com a “Mona Lisa” e o teto da Capela Sistina como uma das mais reconhecidas. Mas, talvez, nenhuma outra represente tão bem o período quanto ela — é um retrato de filósofos pagãos da Antiguidade encomendado para decorar a casa de um papa. Rafael usou rostos familiares para representar os grandes filósofos da Antiguidade: entre as figuras mais reconhecidas, Leonardo da Vinci aparece duas vezes, representando Platão e Parmênides. Michelangelo interpreta Heráclito de Éfeso, e Donatello é retratado como Plotino.

(https://aventurasnahistoria.com.br, 08.08.2021. Adaptado.)

A utilização de artistas do Renascimento para representar filósofos da Antiguidade relaciona-se à`, blockTypes: ['prose', 'source', 'command'], preview: 'Relacione a obra renascentista à valorização da cultura clássica.',
    alternatives: ['permanência da tradição escolástica garantida pela autoridade religiosa sobre o conhecimento filosófico.', 'recuperação de valores medievais realizada pela submissão da arte aos princípios cristãos.', 'valorização do legado da Antiguidade incorporado à produção artística e cultural renascentista.', 'reafirmação da superioridade da tradição teológica sobre o pensamento secular.', 'desqualificação da tradição filosófica clássica para exaltar os artistas renascentistas.'], correct: 2,
    resolution: ['O Renascimento recuperou e valorizou referências da Antiguidade clássica. Representar filósofos pagãos com os traços de artistas contemporâneos integra esse legado à própria produção cultural renascentista.'],
    analyses: ['Incorreta. A cena valoriza filósofos clássicos e não a permanência da escolástica.', 'Incorreta. A obra não representa submissão aos valores medievais.', 'Correta. A representação evidencia a apropriação renascentista do legado da Antiguidade.', 'Incorreta. O destaque aos filósofos pagãos não reafirma superioridade teológica.', 'Incorreta. A tradição clássica é homenageada, não desqualificada.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q28', number: 'Questão 28', subject: 'História', content: 'Restauração europeia no século XIX', difficulty: 'Média',
    statement: `Ao longo do século XIX na Europa, a política foi deixando o espaço reservado de gabinetes governamentais e passou a fazer parte do espaço público: decisões de governo passaram a ser não só tomadas, elas agora eram justificadas, explicadas, transmitidas a um público que as ouvia e reagia a elas. Essa situação foi fruto de um longo processo, não ocorreu de um momento para outro. [...] Mas, curiosamente, no início do século, o ineditismo das aspirações democráticas foi empurrado para debaixo do tapete: restaurar foi o verbo que se impôs pelos que partilhavam dos valores e hierarquias do Antigo Regime.

(Luís Edmundo Moraes. História Contemporânea: da Revolução Francesa à Primeira Guerra Mundial, 2024. Adaptado.)

Na conjuntura histórica mencionada pelo excerto, o ideal de restauração manifestou-se notadamente por meio`, blockTypes: ['prose', 'source', 'command'], preview: 'Identifique a manifestação do ideal de restauração na Europa.',
    alternatives: ['da ampliação da participação política, com a incorporação das demandas liberais e nacionalistas surgidas durante a Revolução Francesa.', 'da unificação dos Estados europeus sob uma administração continental capaz de reduzir disputas entre as monarquias.', 'do reconhecimento da autodeterminação dos povos como princípio orientador das fronteiras políticas europeias.', 'da reorganização territorial da Europa segundo parâmetros anteriores às transformações revolucionárias.', 'da consolidação de governos constitucionais comprometidos com a soberania popular e com a igualdade jurídica dos cidadãos.'], correct: 3,
    resolution: ['A Restauração, associada ao Congresso de Viena e à Santa Aliança, procurou reorganizar o mapa europeu e restabelecer dinastias e hierarquias segundo referências anteriores à Revolução Francesa e a Napoleão, contendo demandas liberais e nacionalistas.'],
    analyses: ['Incorreta. A restauração procurou conter, e não incorporar, as demandas revolucionárias.', 'Incorreta. Não houve unificação da Europa sob uma administração continental.', 'Incorreta. A autodeterminação dos povos contrariava os interesses dinásticos da restauração.', 'Correta. A reorganização territorial buscou referências anteriores às transformações revolucionárias.', 'Incorreta. Soberania popular e igualdade jurídica pertenciam às aspirações que a restauração tentava conter.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q29', number: 'Questão 29', subject: 'História', content: 'Constituição de 1988 e cidadania', difficulty: 'Fácil',
    statement: `Como o Brasil e como a própria democracia, a Constituição de 1988 também é imperfeita. Envolveu movimentos contraditórios e embates formidáveis entre forças políticas desiguais, e inúmeras vezes errou de alvo. Mas a Constituição de 1988 é a melhor expressão de que o Brasil tinha um olho no passado e outro no futuro e estava firmando um sólido compromisso democrático. Ela é moderna nos direitos, sensível às minorias políticas, avançada nas questões ambientais, empenhada em prever meios e instrumentos constitucionais legais para a participação popular e direta, e determinada a limitar o poder do Estado sobre o cidadão e a exigir políticas públicas voltadas para enfrentar os problemas mais graves da população. A Constituição de 1988 deu início a um período consistente e duradouro de vigência das liberdades públicas e de solidez das instituições democráticas.

(Lilia Moritz Schwarcz e Heloisa Murgel Starling. Brasil: uma biografia, 2018. Adaptado.)

O excerto evidencia que a Constituição de 1988 representou, no contexto brasileiro, a`, blockTypes: ['prose', 'source', 'command'], preview: 'Reconheça o significado democrático da Constituição de 1988.',
    alternatives: ['institucionalização de mecanismos formais voltados para a ampliação dos direitos humanos e das práticas cidadãs.', 'substituição das garantias individuais pela ampliação da autoridade institucional do Estado sobre a sociedade civil.', 'eliminação dos conflitos sociais mediante a ampliação dos instrumentos jurídicos previstos pelo ordenamento estatal.', 'defesa de uma concepção de cidadania fundamentada prioritariamente no cumprimento de deveres perante o Estado.', 'consolidação de um modelo político voltado para limitar os mecanismos de participação popular nas decisões públicas.'], correct: 0,
    resolution: ['O texto destaca direitos, proteção de minorias, participação popular, limites ao poder estatal e liberdades públicas. Esses elementos expressam a institucionalização de mecanismos de ampliação dos direitos humanos e da cidadania.'],
    analyses: ['Correta. A Constituição ampliou garantias, direitos e instrumentos de participação cidadã.', 'Incorreta. O excerto afirma a limitação do poder estatal, não sua ampliação sobre a sociedade.', 'Incorreta. Os autores reconhecem embates e contradições; não afirmam eliminação dos conflitos.', 'Incorreta. A ênfase está em direitos e liberdades, não prioritariamente em deveres.', 'Incorreta. A participação popular e direta é ampliada, não limitada.'],
  },
  {
    ...shared,
    id: 'unisul2027-prova2-q30', number: 'Questão 30', subject: 'Sociologia', content: 'Racismo institucional e memória', difficulty: 'Média',
    statement: `A Justiça Federal do Rio de Janeiro condenou em 21.05.2026 a Marinha brasileira por ataques à memória de João Cândido, conhecido como o “Almirante Negro” e líder da Revolta da Chibata, em 1910. A liderança de Cândido no motim que combateu as punições físicas como o uso de chibatas contra marinheiros — em sua maioria, negros — o fez se tornar um ícone das mobilizações antirracistas no Brasil após a abolição da escravidão. Segundo Julio Araújo, procurador regional dos Direitos do Cidadão, o órgão deve recorrer da sentença em busca de maior indenização. “Mas é uma decisão muito importante, porque ela demarca um limite muito claro no respeito à memória desses personagens e na impossibilidade de sua trajetória ser difamada como vem sendo difamada historicamente”, celebrou Araújo.

(www.bbc.com, 21.05.2026. Adaptado.)

A desqualificação da memória de João Cândido relaciona-se à`, blockTypes: ['prose', 'source', 'command'], preview: 'Relacione a desqualificação de João Cândido ao racismo institucional.',
    alternatives: ['perspectiva do relativismo cultural.', 'ideologia da democracia racial.', 'ideia do branqueamento social.', 'possibilidade de mobilidade social.', 'prática do racismo institucional.'], correct: 4,
    resolution: ['A difamação histórica atribuída a uma instituição estatal contra a memória de um líder negro e antirracista configura racismo institucional: práticas e discursos de órgãos públicos reproduzem desigualdades e desqualificações racializadas.'],
    analyses: ['Incorreta. Relativismo cultural é uma perspectiva de análise das culturas, não a desqualificação descrita.', 'Incorreta. A democracia racial é a ideologia que encobre desigualdades com o mito da harmonia; o caso aponta difamação institucional direta.', 'Incorreta. Branqueamento refere-se a políticas e ideias de embranquecimento populacional e cultural, não à conduta institucional específica do caso.', 'Incorreta. Mobilidade social não explica a desqualificação da memória do líder negro.', 'Correta. A atuação difamatória de uma instituição pública reproduz racismo institucional.'],
  },
];
