const PROCESS_URL = 'https://tmpfiles.org/w4AQoBs7NfBj/provaobjetiva5.pdf';
const ANSWER_URL = 'https://tmpfiles.org/wZADoWsPNJCv/gabaritodaprovaobjetiva3.pdf';
const shared = {
  exam: 'USCS', year: 2026, phase: 'Prova II', originalUrl: PROCESS_URL,
  officialAnswerUrl: ANSWER_URL, kind: 'objective', correctionOrigin: 'official',
};
const tex = String.raw;
const recreatedVectors = new Set(['p2-q23-mapa-gobi.svg', 'p2-q24-deriva-continentais.svg']);
const img = (file, alt, caption, className) => ({
  src: `/images/uscs2026/${file}?v=${recreatedVectors.has(file) ? '20261104-mapas-fornecidos-usuario1' : '20261104-pdf-vector1'}`, alt,
  ...(caption ? { caption } : {}), ...(className ? { className } : {}),
});

export const uscs2026Lote03 = [
  {
    ...shared,
    id: 'uscs2026-prova2-q21', number: 'Questão 21', subject: 'História', content: 'Paz de Westfália e soberania estatal', difficulty: 'Média',
    statement: `Analise o excerto a respeito da Paz de Westfália, tratado assinado em 1648.

Westfália é um tratado tido comumente como o primeiro acordo internacional tendo em vista garantir a autonomia dos Estados, com as promessas de não intervenção entre eles e separação entre os mundos político e religioso. Após a Guerra dos Trinta Anos, cujas origens encontram-se ao mesmo tempo em formas confessionais, econômicas e políticas, aquele pacto deu condições para uma atividade diplomática ou bélica mais sistemática do que a vigente nos tempos em que os Estados ainda buscavam a sua plena soberania. Pode-se afirmar que ele permite ao Estado moderno a completude dos pontos essenciais à sua existência independente, com os monopólios da violência legítima, da norma jurídica, dos impostos.

(Roberto Romano. “Paz da Westfália (1648)”. In: Demétrio Magnoli (org.). História da paz: os tratados que desenharam o planeta, 2012.)

Com base no excerto, um Estado não pode interferir em outro devido`, blockTypes: ['label', 'quote', 'source', 'command'], works: ['História da paz: os tratados que desenharam o planeta'],
    alternatives: ['ao isolamento político-geográfico.', 'ao princípio da soberania.', 'à regionalização político-militar.', 'à globalização econômica.', 'à autodeterminação dos povos.'], correct: 1,
    resolution: ['O excerto relaciona a não intervenção à autonomia e à independência dos Estados. Esse fundamento é o princípio da soberania, segundo o qual cada Estado exerce autoridade sobre seu território sem ingerência externa.'],
    analyses: ['Incorreta. A não interferência não decorre de isolamento geográfico.', 'Correta. A soberania sustenta a autonomia estatal e a não intervenção.', 'Incorreta. A regionalização político-militar não é o fundamento apresentado.', 'Incorreta. O tratado de 1648 não é explicado pela globalização econômica contemporânea.', 'Incorreta. A autodeterminação dos povos é princípio distinto, embora relacionado à soberania.'],
    preview: 'Relacione a não intervenção entre Estados ao princípio de Westfália.',
  },
  {
    ...shared,
    id: 'uscs2026-prova2-q22', number: 'Questão 22', subject: 'Geografia', content: 'Transição demográfica e envelhecimento populacional', difficulty: 'Fácil',
    statement: 'Examine os gráficos relativos às transformações demográficas na população brasileira (2000-2070).', blockTypes: ['prose'],
    images: [img('p2-q22-transicao-demografica.svg', 'Gráficos de setores mostram idosos como 8,7% da população em 2000, 15,6% em 2023 e 37,8% em 2070; o restante da população corresponde a 91,3%, 84,4% e 62,2%, respectivamente.', '(www12.senado.leg.br. Adaptado.)')],
    statementAfter: 'De acordo com a teoria da transição demográfica, os gráficos indicam que a população brasileira', afterBlockTypes: ['command'],
    alternatives: ['atravessa o processo de aceleração da transição, caracterizada pelo crescimento populacional impulsionado, sobretudo, por fluxos migratórios internacionais.', 'consolida-se na fase intermediária da transição, marcada pela manutenção de altas taxas de natalidade e pela redução da mortalidade.', 'evolui para fases mais avançadas da transição, caracterizadas pela redução das taxas de fecundidade e pelo aumento da expectativa de vida.', 'situa-se na primeira fase da transição, marcada por elevadas taxas de natalidade e mortalidade, que estão associadas ao alto número de idosos.', 'observa o aumento do crescimento vegetativo típico das fases iniciais da transição, resultante da elevação das taxas de reposição populacional.'], correct: 2,
    resolution: ['O aumento da proporção de idosos indica envelhecimento populacional, próprio de fases avançadas da transição demográfica. Esse processo decorre da queda da fecundidade e do aumento da expectativa de vida.'],
    analyses: ['Incorreta. Os gráficos tratam da estrutura etária, não de crescimento impulsionado por migrações internacionais.', 'Incorreta. A fase intermediária tem menor proporção de idosos e, em geral, crescimento populacional mais intenso.', 'Correta. O envelhecimento indicado pelos gráficos decorre de menor fecundidade e maior longevidade.', 'Incorreta. A primeira fase apresenta alta mortalidade e baixa proporção de idosos.', 'Incorreta. As fases avançadas tendem a reduzir o crescimento vegetativo, não a elevá-lo.'],
    preview: 'Interprete o envelhecimento populacional pela transição demográfica.',
  },
  {
    ...shared,
    id: 'uscs2026-prova2-q23', number: 'Questão 23', subject: 'Geografia', content: 'Deserto de Gobi: continentalidade e barreiras de relevo', difficulty: 'Média',
    statement: tex`O Deserto de Gobi ocupa um vasto arco de terra com cerca de 1 600 km de comprimento e entre 500 e 1 000 km de largura, totalizando aproximadamente $1\,300\,000\ \mathrm{km^2}$. Situa-se entre importantes formações montanhosas: ao norte, as montanhas Altai e Hangayn; a leste, a borda oeste da cordilheira Da Hinggan; ao sul, as montanhas Yin, Qilian, Altun Oriental e Bei; e, a oeste, a cordilheira Tien Shan Oriental.`, blockTypes: ['prose'],
    images: [img('p2-q23-mapa-gobi.svg', 'Mapa da Ásia central e oriental destacando o Deserto de Gobi entre a Mongólia e o norte da China, cercado por importantes cadeias montanhosas e distante dos oceanos.', '(www.britannica.com. Adaptado.)')],
    statementAfter: 'Segundo os princípios físico-naturais, a formação do deserto de Gobi deve-se à', afterBlockTypes: ['command'],
    alternatives: ['posição latitudinal da região em áreas de clima frio permanente, onde as baixas temperaturas impedem a ocorrência de precipitações.', 'presença de antigas zonas de epirogênese na região, que, por promoverem o aumento da pressão atmosférica, ocasionam subsidência do ar e redução da formação de precipitações.', 'formação de chuvas orográficas na vertente setentrional das cadeias montanhosas, alterando a dinâmica da circulação atmosférica e criando zonas de exceção em relação à pluviosidade.', 'atuação de correntes marítimas frias no Oceano Pacífico, que reduzem a evaporação e limitam a formação de massas de ar úmidas sobre o interior do continente asiático.', 'distância em relação aos oceanos, associada à presença de barreiras do relevo que dificultam a penetração de massas de ar úmidas no interior do continente.'], correct: 4,
    resolution: ['A localização interiorana reduz a influência úmida dos oceanos, e as cadeias montanhosas funcionam como barreiras às massas de ar úmidas. A combinação entre continentalidade e bloqueio orográfico favorece a aridez de Gobi.'],
    analyses: ['Incorreta. O deserto não é explicado por clima frio permanente nem por latitude polar.', 'Incorreta. A epirogênese não é a explicação principal para a formação desértica apresentada.', 'Incorreta. Chuvas orográficas aumentariam a precipitação na vertente exposta; a aridez está associada à sombra de chuva e à continentalidade.', 'Incorreta. Correntes frias pacíficas não explicam isoladamente a aridez dessa área interiorana.', 'Correta. A grande distância dos oceanos e as barreiras montanhosas limitam a chegada de umidade.'],
    preview: 'Explique a aridez de Gobi pela posição continental e pelo relevo.',
  },
  {
    ...shared,
    id: 'uscs2026-prova2-q24', number: 'Questão 24', subject: 'Geografia', content: 'Deriva continental e convergência de placas', difficulty: 'Média',
    statement: 'Analise a sequência de imagens que representa a configuração dos continentes da Terra em diferentes períodos geológicos.', blockTypes: ['prose'],
    images: [img('p2-q24-deriva-continentais.svg', 'Sequência de globos do Permiano ao Quaternário mostra a fragmentação da Pangeia e o deslocamento da porção continental destacada em preto, correspondente à Índia, até sua aproximação e colisão com a Ásia.', '(IBGE. Atlas geográfico escolar, 2023.)', 'compact-image')],
    statementAfter: 'Em se tratando do dinamismo da crosta terrestre, a porção da crosta continental destacada na cor preta esteve sujeita ao movimento', afterBlockTypes: ['command'],
    alternatives: ['transformante entre placas, caracterizado pelo deslizamento lateral sem formação ou destruição significativa da litosfera.', 'divergente entre placas continentais, resultando diretamente na formação de zonas de subducção e dorsais mesoceânicas modernas.', 'convergente entre placas oceânicas, sem geração de atividade sísmica ou vulcânica significativa.', 'convergente entre placas, resultado da ação de correntes de convecção no manto terrestre e da formação de cadeias montanhosas por processos de orogênese.', 'divergente entre placas, com afastamento da crosta e formação de dorsais oceânicas, fenômeno associado à ascensão do magma.'], correct: 3,
    resolution: ['A porção destacada representa a Índia, que se deslocou para o norte e colidiu com a placa eurasiana. Essa convergência, impulsionada pela dinâmica do manto, produziu orogênese, com formação de cadeias como o Himalaia.'],
    analyses: ['Incorreta. O movimento destacado não é apenas lateral entre placas.', 'Incorreta. A convergência, e não a divergência, explica a colisão continental e a orogênese.', 'Incorreta. A convergência envolve crosta continental e gera intensa atividade tectônica.', 'Correta. A colisão da Índia com a Ásia é convergente e formou cadeias montanhosas por orogênese.', 'Incorreta. Divergência e dorsais oceânicas não explicam a aproximação e a colisão destacadas.'],
    preview: 'Relacione o deslocamento da Índia à convergência e à orogênese.',
  },
  {
    ...shared,
    id: 'uscs2026-prova2-q25', number: 'Questão 25', subject: 'Geografia', content: 'Escala cartográfica e distância real', difficulty: 'Fácil',
    statement: 'Dois viajantes, João e Pedro, partirão do mesmo ponto em direção ao mesmo destino. Cada um planejou rotas distintas utilizando mapas com escalas diferentes. João consultou um mapa de escala 1 : 2 000 000, no qual a rota escolhida entre o ponto de partida e o destino mede 5 cm. Por sua vez, Pedro consultou um mapa de escala 1 : 5 000 000, com uma rota diferente, cuja distância entre o ponto de partida e o destino mede 3 cm. Nessas condições, a rota com a menor distância entre o ponto de partida e o destino foi a planejada por', blockTypes: ['command'],
    alternatives: ['João, pois ele percorrerá 100 km, enquanto Pedro percorrerá 150 km.', 'Pedro, pois ele percorrerá 50 km, enquanto João percorrerá 200 km.', 'Pedro, pois ele percorrerá 40 km, enquanto João percorrerá 66 km.', 'João, pois ele percorrerá 10 km, enquanto Pedro percorrerá 15 km.', 'Pedro, pois ele percorrerá 600 km, enquanto João percorrerá 1 000 km.'], correct: 0,
    resolution: [tex`João: $5\cdot2.000.000=10.000.000$ cm $=100$ km. Pedro: $3\cdot5.000.000=15.000.000$ cm $=150$ km. Portanto, a menor distância é a de João.`],
    analyses: ['Correta. As distâncias reais são 100 km para João e 150 km para Pedro.', 'Incorreta. Inverte as escalas e os viajantes.', 'Incorreta. As conversões não correspondem às medidas e escalas dadas.', 'Incorreta. Mantém uma proporção correta, mas erra a conversão de centímetros para quilômetros por um fator de 10.', 'Incorreta. Superestima as distâncias e indica incorretamente a menor rota.'],
    preview: 'Multiplique cada medida pelo denominador da escala e converta para km.',
  },
  {
    ...shared,
    id: 'uscs2026-prova2-q26', number: 'Questão 26', subject: 'História', content: 'Canibalismo e discurso colonizador', difficulty: 'Média',
    statement: `A prática [do canibalismo] não era, porém, uma mentira, uma invenção europeia, mas um ritual controlado por regras. Entre os tupis, por exemplo, os guerreiros se sentiam honrados quando morriam em um banquete canibal. Para os europeus, no entanto, comer carne humana era abominável, pois nem mesmo os leões ingeriam seus semelhantes.

Ao banalizar as cenas de canibalismo [ocorridas no Brasil colonial], os europeus pretendiam comprovar que indígenas e negros agiam como os piores animais e necessitavam da intervenção de povos mais “civilizados” para promover a paz.

(Ronald Raminelli. “Canibalismo para alemão ver”. In: Luciano Figueiredo (org.). História do Brasil para ocupados, 2013. Adaptado.)

O excerto mostra que a prática do canibalismo exercido por alguns povos originários na América portuguesa`, blockTypes: ['quote', 'quote', 'source', 'command'], works: ['História do Brasil para ocupados'],
    alternatives: ['foi divulgada pelos europeus para demonstrar a diversidade cultural dos povos que viviam nas colônias americanas.', 'foi utilizada pelos colonizadores para justificar sua presença e ação nas terras ocupadas e colonizadas da América.', 'era encontrada apenas no interior do território e ocorria como reação às invasões europeias no continente americano.', 'era específica das celebrações religiosas e tinha a finalidade de conectar os humanos a entidades divinas.', 'era comum entre os indígenas americanos e reduzia a dificuldade que esses povos enfrentavam para obter alimentos.'], correct: 1,
    resolution: ['Os europeus generalizaram e banalizaram o ritual para construir uma imagem de selvageria. Esse discurso legitimava a intervenção dos colonizadores, apresentada como missão civilizadora.'],
    analyses: ['Incorreta. A divulgação europeia visava estigmatizar, não valorizar a diversidade cultural.', 'Correta. A representação do canibalismo serviu para legitimar a colonização e a suposta missão civilizadora.', 'Incorreta. O texto não restringe a prática ao interior nem a apresenta como reação às invasões.', 'Incorreta. O ritual tinha regras próprias, mas o excerto não o reduz a celebrações para conectar humanos a divindades.', 'Incorreta. Não se afirma que a prática fosse comum a todos os indígenas nem que tivesse finalidade alimentar.'],
    preview: 'Analise como o discurso europeu usou o canibalismo para legitimar a colonização.',
  },
  {
    ...shared,
    id: 'uscs2026-prova2-q27', number: 'Questão 27', subject: 'História', content: 'Transferência da corte portuguesa para o Brasil', difficulty: 'Média',
    statement: `Na madrugada de 25 de novembro de 1807, quando D. João encerrou a sessão do Conselho de Estado, a decisão estava tomada. A família real deveria embarcar para o Brasil daí a dois dias, antes que as tropas de Napoleão, que já tinham cruzado as fronteiras lusitanas, alcançassem Lisboa.

(Lilia Moritz Schwarcz. “Todos a bordo!”. In: Luciano Figueiredo (org.). História do Brasil para ocupados, 2013.)

A decisão mencionada no excerto decorreu`, blockTypes: ['quote', 'source', 'command'], works: ['História do Brasil para ocupados'],
    alternatives: ['do projeto português de emancipação das colônias no além-mar e resultou na independência política do Brasil.', 'das disputas entre potências europeias e provocou uma inversão política na relação entre metrópole e colônia brasileira.', 'da capacidade militar portuguesa de enfrentar as tropas britânicas e resultou na redução do domínio português no Brasil.', 'das pressões das Cortes pela recolonização do Brasil e provocou a intensificação dos confrontos entre brasileiros e portugueses.', 'do esforço fracassado da Inglaterra de apaziguar as relações de Portugal com a França e permitiu um refúgio seguro para o rei português.'], correct: 1,
    resolution: ['A fuga da família real ocorreu no contexto das guerras napoleônicas e da invasão de Portugal pelas tropas francesas. Com a sede da monarquia no Rio de Janeiro, a colônia passou a abrigar o centro político do império português, invertendo a relação tradicional com a metrópole.'],
    analyses: ['Incorreta. A decisão não decorreu de um projeto emancipacionista e antecedeu a independência em quinze anos.', 'Correta. O contexto napoleônico motivou a transferência, e a colônia tornou-se sede da monarquia.', 'Incorreta. A ameaça imediata era francesa, não britânica, e a decisão não reduziu o domínio português.', 'Incorreta. As Cortes e a recolonização pertencem a momento posterior.', 'Incorreta. A Inglaterra apoiou a transferência; não se trata de um esforço fracassado de apaziguamento.'],
    preview: 'Situe a fuga de D. João nas guerras napoleônicas e seus efeitos coloniais.',
  },
  {
    ...shared,
    id: 'uscs2026-prova2-q28', number: 'Questão 28', subject: 'História', content: 'Pan-americanismo e interesses dos Estados Unidos', difficulty: 'Média',
    statement: `Essa Conferência [Primeira Conferência Pan-Americana] realizou-se na cidade de Washington de 02 de outubro de 1889 a 19 de abril de 1890 [...].

Seu programa foi elaborado unicamente pelos EUA e contemplou, principalmente, os seguintes assuntos; a adoção de um plano de arbitragem; o incremento do comércio e meios de comunicação; o fomento das relações comerciais recíprocas e o desenvolvimento de mercados mais amplos para os produtos de cada país americano; medidas para a formação de uma união aduaneira; a adoção de um sistema uniforme de pesos e medidas e a adoção de uma moeda comum.

(Teresa Maria Spyer Dulci. As conferências pan-americanas (1889 a 1928): identidades, união aduaneira e arbitragem, 2013.)

A Primeira Conferência Pan-Americana, mencionada no excerto, ocorreu num período de`, blockTypes: ['quote', 'quote', 'source', 'command'],
    alternatives: ['reação do conjunto dos Estados americanos contra as tentativas europeias de recolonização da América.', 'estabelecimento de uma relação isonômica entre os Estados nacionais recém-formados do continente americano.', 'avanço dos interesses comerciais e políticos norte-americanos sobre o restante do continente americano.', 'reconstrução da economia norte-americana após o colapso financeiro provocado pela quebra da Bolsa de Nova Iorque.', 'articulação política e diplomática no continente americano com o propósito de fundar a Organização dos Estados Americanos e o Mercosul.'], correct: 2,
    resolution: ['O programa elaborado unicamente pelos Estados Unidos e a ênfase em mercados, comércio e união aduaneira revelam a expansão da liderança política e econômica norte-americana no continente no fim do século XIX.'],
    analyses: ['Incorreta. A conferência não foi uma reação conjunta a recolonizações europeias.', 'Incorreta. A formulação unilateral pelos EUA contradiz a ideia de relação isonômica.', 'Correta. O pan-americanismo desse período ampliou a influência política e comercial dos EUA.', 'Incorreta. A quebra da Bolsa ocorreu em 1929, quatro décadas depois.', 'Incorreta. A OEA foi fundada em 1948 e o Mercosul, em 1991.'],
    preview: 'Interprete a conferência de 1889 no contexto do pan-americanismo dos EUA.',
  },
  {
    ...shared,
    id: 'uscs2026-prova2-q29', number: 'Questão 29', subject: 'História', content: 'Lei de Anistia de 1979 e impunidade', difficulty: 'Média',
    statement: `O projeto de lei [da Anistia] trazia de volta os exilados, libertava presos e permitia aos clandestinos reassumir sua identidade. Prescrevia, contudo, uma anistia limitada, restrita e recíproca. Não incluía 195 presos políticos condenados por ações armadas — denominadas pelos militares “crimes de sangue” — nem assegurava reversão aos postos ocupados por quem perdera o emprego ou fora aposentado no serviço público por força da ditadura. Nos dois casos, a lei teve conserto. Grave — e até hoje sem conserto — era a cláusula de reciprocidade que estendia a concessão de anistia a todos que cometeram crimes políticos ou conexos. Foi essa cláusula que aprovou a impunidade para os militares e, mais de trinta anos depois, continua impedindo a responsabilização individual dos coautores dos crimes praticados pelo Estado durante a ditadura.

(Lilia Moritz Schwarcz e Heloisa Murgel Starling. Brasil: uma biografia, 2018. Adaptado.)

O excerto analisa aspectos da Lei de Anistia de 1979 e atesta que, no momento em que foi sancionada, essa Lei`, blockTypes: ['quote', 'source', 'command'], works: ['Brasil: uma biografia'],
    alternatives: ['perdoou os responsáveis por torturas durante o regime militar.', 'impediu a volta dos exilados políticos ao país.', 'beneficiou apenas os grupos políticos aliados ao regime militar.', 'foi rejeitada pelos partidos políticos de extrema-direita.', 'indenizou de imediato os políticos perseguidos pelo regime militar.'], correct: 0,
    resolution: ['A cláusula de reciprocidade estendeu a anistia aos agentes do Estado que cometeram crimes políticos ou conexos, incluindo violações como a tortura, e dificultou sua responsabilização posterior.'],
    analyses: ['Correta. A reciprocidade anistiou também agentes do regime e favoreceu a impunidade por crimes como tortura.', 'Incorreta. A lei permitiu a volta dos exilados.', 'Incorreta. A anistia alcançou opositores e agentes do regime, não apenas aliados.', 'Incorreta. O excerto não registra rejeição por partidos de extrema-direita.', 'Incorreta. A lei não determinou indenização imediata aos perseguidos.'],
    preview: 'Explique o alcance da reciprocidade prevista na Lei de Anistia.',
  },
  {
    ...shared,
    id: 'uscs2026-prova2-q30', number: 'Questão 30', subject: 'Geografia', content: 'África: exploração de recursos e preservação ambiental', difficulty: 'Fácil',
    statement: `No início do século XXI, as sociedades africanas não estão apenas despertas, como estão também atentas aos seus futuros. [...]

No campo ambiental, a perspectiva de preservação [...] compete com o ímpeto econômico de muitos países que extraem e exportam seus recursos minerais e energéticos como principal fonte de divisas.

(Kauê Lopes dos Santos. Africano: uma introdução ao continente, 2022.)

O excerto apresenta o início do século XXI no continente africano como um período`, blockTypes: ['quote', 'quote', 'source', 'command'], works: ['Africano: uma introdução ao continente'],
    alternatives: ['marcado pela intensificação da dependência comercial dos países africanos em relação às potências da Europa ocidental.', 'de persistência da tradição de exploração de recursos naturais destituída de políticas públicas voltadas ao meio-ambiente.', 'caracterizado pelas novas políticas comerciais de aproximação com a China e com os países latino-americanos emergentes.', 'de combinação entre a continuidade de modelos econômicos de exploração sistemática e ações de preservação ambiental.', 'constituído pela adoção de políticas determinadas por organismos internacionais de preservação de recursos ambientais.'], correct: 3,
    resolution: ['O texto contrapõe duas tendências simultâneas: a continuidade da extração e exportação de recursos como fonte de divisas e a presença de perspectivas e ações de preservação ambiental.'],
    analyses: ['Incorreta. O excerto não especifica dependência em relação à Europa ocidental.', 'Incorreta. A própria referência à preservação contradiz a ideia de ausência de ações ambientais.', 'Incorreta. Não há menção a aproximação comercial com China ou América Latina.', 'Correta. O período combina exploração econômica de recursos e iniciativas de preservação.', 'Incorreta. As políticas não são apresentadas como determinadas por organismos internacionais.'],
    preview: 'Reconheça a coexistência de extrativismo e preservação ambiental na África.',
  },
];
