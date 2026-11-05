import { q, img } from './fcmh2027-helpers.js';

export const fcmh2027Lote03 = [
  q({
    n: 21, subject: 'Geografia', content: 'Vegetação e solos da Caatinga', statement: `O nome “Caatinga” é de origem Tupi-Guarani e significa “mata branca”, o que caracteriza bem o aspecto da vegetação na estação seca, quando as folhas caem e apenas os troncos brancos e brilhosos das árvores e arbustos permanecem na paisagem seca.

(www.embrapa.br)

Outra característica do domínio da Caatinga é a presença de`, blockTypes: ['quote', 'source', 'command'],
    alternatives: ['solos profundos e relevo de mares de morros.', 'solos salinos e relevo de planície litorânea.', 'solos areníticos e relevo montanhoso.', 'solos zonais e relevo de planícies aluviais.', 'solos rasos e relevo de depressões interplanálticas.'], answer: 'E',
    why: 'No domínio da Caatinga são comuns solos rasos e pedregosos e áreas de depressões interplanálticas, intercaladas por inselbergs e serras.',
    wrong: { 0: 'Solos profundos e mares de morros não são a associação característica apresentada para a Caatinga.', 1: 'Planícies litorâneas não definem o domínio semiárido interiorano.', 2: 'O relevo montanhoso e os solos areníticos não constituem a combinação típica pedida.', 3: 'Planícies aluviais ocorrem junto a rios, mas não caracterizam a maior parte do domínio.' },
  }),
  q({
    n: 22, subject: 'Geografia', content: 'Trabalho e relações de gênero no Brasil', statement: `O mercado de trabalho brasileiro é marcado por profundas desigualdades, entre as quais se destaca a desigualdade entre homens e mulheres. Esse fenômeno tradicionalmente resultou em diferenças de gênero nos principais indicadores de mercado de trabalho, o que impõe desafios ao desenvolvimento econômico e social do país e às políticas públicas de emprego, trabalho e renda. Ao longo das últimas décadas, as mulheres conquistaram maior espaço no mundo profissional, ampliando sua presença em diversos setores e níveis hierárquicos. No entanto, ainda enfrentam obstáculos significativos, como a segregação ocupacional, a informalidade, a desigualdade salarial e a sub-representação em cargos de liderança.

(Ministério do Trabalho e Emprego. Boletim Mulheres no Marcado de Trabalho, março de 2025. Adaptado.)

Com base no excerto e em conhecimentos acerca das relações de gênero no mercado de trabalho brasileiro, tem-se que`, blockTypes: ['quote', 'source', 'command'], works: ['Boletim Mulheres no Marcado de Trabalho'],
    alternatives: [
      'a legislação trabalhista dificulta a inserção da participação feminina em setores como a construção civil.',
      'o processo de urbanização no país acelerou o crescimento da participação feminina no mercado de trabalho.',
      'as políticas de igualdade de gênero conseguiram promover a equidade salarial.',
      'a participação feminina superou a masculina no que diz respeito ao total da população empregada.',
      'a profissionalização das mulheres explica que seus ganhos salariais sejam maiores que os da mão de obra masculina.',
    ], answer: 'B',
    why: 'A urbanização ampliou os setores de comércio e serviços e modificou a organização social, favorecendo o aumento da participação feminina no mercado de trabalho, embora persistam desigualdades.',
    wrong: { 0: 'A legislação trabalhista não é a causa geral da dificuldade de inserção feminina; pesam segregação e discriminação.', 2: 'A equidade salarial ainda não foi alcançada, como indica o próprio excerto.', 3: 'A participação feminina cresceu, mas não superou a masculina no total de pessoas empregadas.', 4: 'A profissionalização não eliminou a desigualdade, e os ganhos femininos médios não superam os masculinos.' },
  }),
  q({
    n: 23, subject: 'Geografia', content: 'Tigres Asiáticos e industrialização', statement: `Os dados do Fundo Monetário Internacional (FMI) para 2020 indicam que Singapura, com renda per capita de US$ 105,8 mil, e Hong Kong, com renda de US$ 70,4 mil, já ultrapassaram a renda per capita dos Estados Unidos da América (EUA), de US$ 66,6 mil, e da União Europeia (UE), de US$ 46,5 mil. Taiwan, com renda per capita de US$ 56,5 mil, atingiu renda pouco abaixo dos EUA e acima da UE. A Coreia do Sul, com renda per capita de US$ 45,3 mil, ainda tem renda abaixo daquela dos EUA, mas aproximadamente igual à da UE. Em 2020, a renda per capita média dos quatro Tigres Asiáticos da primeira geração deve ficar em US$ 54,9 mil, contra apenas US$ 17,6 mil da América Latina e do Caribe.

(www.ihu.unisinos.br, 28.02.2019. Adaptado.)

Uma característica associada aos Tigres Asiáticos que os tornou importantes atores globais é`, blockTypes: ['quote', 'source', 'command'],
    alternatives: [
      'o elevado desenvolvimento econômico e industrial, baseado em políticas de substituição de importação.',
      'o pioneirismo da indústria de base que se desenvolveu no século XIX em parques industriais estatais.',
      'a nacionalização de empresas estrangeiras voltadas para as áreas de pesquisa e desenvolvimento no setor de informática.',
      'o forte investimento estatal em indústrias nacionais, cuja produção é voltada para o mercado interno.',
      'o desenvolvimento decorrente de fortes investimentos estrangeiros com plataformas de produção industrial para a exportação.',
    ], answer: 'E',
    why: 'Os Tigres Asiáticos se industrializaram com forte participação estatal, investimentos estrangeiros e produção voltada à exportação, integrando-se às cadeias globais de tecnologia e manufatura.',
    wrong: { 0: 'A substituição de importações privilegia o mercado interno e não descreve a principal estratégia exportadora desses países.', 1: 'A industrialização acelerada dos Tigres ocorreu sobretudo na segunda metade do século XX.', 2: 'Não houve como estratégia geral a nacionalização das empresas estrangeiras de informática.', 3: 'O mercado interno não era o destino principal da produção; a orientação exportadora foi central.' },
  }),
  q({
    n: 24, subject: 'Geografia', content: 'Contaminação e impactos do rompimento da Barragem de Fundão', statement: 'A imagem apresenta a Bacia do Rio Doce e as principais cidades atingidas na rota percorrida pela lama de rejeitos minerais após o rompimento da Barragem de Fundão, localizada na cidade de Mariana (MG), em 05 de novembro de 2015.', images: [img('q24-mapa-rio-doce.svg', 'Mapa da Bacia do Rio Doce e das cidades atingidas pela lama após o rompimento da Barragem de Fundão.', '(www.g1.globo.com, 10.12.2015.)')],
    statementAfter: 'Um dos problemas socioambientais causados pelo rompimento dessa barragem é a', afterBlockTypes: ['command'],
    alternatives: [
      'contaminação por metais pesados arrastados pela lama, o que compromete a perda de hábitats naturais e de terras agrícolas às margens do Rio Doce.',
      'contaminação dos solos com rejeitos de mineração, o que provoca a frequente formação de chuvas ácidas na região da Bacia do Rio Doce.',
      'menor disponibilidade de água nos reservatórios de hidrelétricas na Bacia do Rio Grande, o que reduz a produção de energia elétrica.',
      'mudança no regime das chuvas na região atingida, o que resulta em longas estiagens na Bacia do Leste.',
      'poluição hídrica da Bacia do Rio São Francisco, o que compromete o fornecimento de água na região Nordeste.',
    ], answer: 'A',
    why: 'A lama de rejeitos percorreu a Bacia do Rio Doce, contaminando água e solos e destruindo hábitats e áreas agrícolas. O desastre atingiu o Rio Doce, não as bacias do Rio Grande ou do São Francisco.',
    wrong: { 1: 'A formação frequente de chuvas ácidas não é o problema socioambiental diretamente associado ao rompimento.', 2: 'A bacia afetada foi a do Rio Doce, não a do Rio Grande.', 3: 'O rompimento não é apontado como causa de alteração do regime de chuvas e longas estiagens.', 4: 'A poluição seguiu pela Bacia do Rio Doce, e não pela do São Francisco.' },
  }),
  q({
    n: 25, subject: 'Geografia', content: 'Sensoriamento remoto e obtenção de informações geográficas', statement: 'A imagem apresenta uma das técnicas mais usadas na obtenção de informações de um objeto, uma área ou um fenômeno localizado na Terra.', images: [img('q25-sensoriamento-remoto.svg', 'Satélite registrando radiação refletida pela floresta, rio, pastagens, solo exposto, rodovia e construções.', '(www.atlasescolar.ibge.gov.br. Adaptado.)')],
    statementAfter: 'A técnica retratada na imagem é denominada', afterBlockTypes: ['command'],
    alternatives: ['sistema de posicionamento global.', 'sistema de informação geográfica.', 'sensoriamento remoto.', 'aerofotogrametria.', 'radar a laser.'], answer: 'C',
    why: 'O satélite registra, a distância, a radiação refletida ou emitida pela superfície. Esse processo de obtenção de informações sem contato direto com o objeto é sensoriamento remoto.',
    wrong: { 0: 'O GPS serve principalmente ao posicionamento e à navegação por coordenadas.', 1: 'O SIG organiza e analisa dados georreferenciados, mas não é o sensor representado.', 3: 'A aerofotogrametria utiliza fotografias aéreas para medições, não o sistema orbital mostrado.', 4: 'O radar a laser é um sensor específico; a figura representa o processo geral de sensoriamento remoto.' },
  }),
  q({
    n: 26, subject: 'História', content: 'Mesopotâmia: escrita, urbanização e especialização', statement: `No final da pré-história, ocorreram muitas modificações na organização da sociedade. […]. Um dos sinais mais evidentes das transformações foi o aparecimento da escrita, por volta de 3300 a. C. Até onde podemos saber hoje, ela surgiu pela primeira vez na Mesopotâmia. No começo, a escrita serviu para controlar a circulação de produtos, os recebimentos e os pagamentos feitos pelos templos e palácios. […] Com o tempo, o sistema foi modificado e transformou-se na escrita chamada cuneiforme, que foi utilizada para registrar textos religiosos, mitos, poemas, cartas, inscrições dos reis, contratos etc. A utilização da escrita demonstra que a sociedade estava ficando bem mais complexa: agora, apenas o uso da palavra falada já não era suficiente para regular as relações entre as pessoas.

(Marcelo Rede. A Mesopotâmia, 2002.)

Além da utilização da escrita, mencionada no excerto, outros fatores que exemplificam a complexidade da sociedade mesopotâmica no final da pré-história são`, blockTypes: ['quote', 'source', 'command'], works: ['A Mesopotâmia'],
    alternatives: ['o código de leis local e a abolição da servidão.', 'a manifestação religiosa e o nomadismo da população.', 'a preservação da memória e o igualitarismo social.', 'a vida urbana e a especialização dos ofícios.', 'o aumento populacional e a ruralização da economia.'], answer: 'D',
    why: 'A complexificação mesopotâmica esteve associada às cidades-estado, à divisão social do trabalho e à especialização de ofícios, junto à escrita e à administração de templos e palácios.',
    wrong: { 0: 'Não houve abolição da servidão; a sociedade era estratificada.', 1: 'O nomadismo não caracteriza a organização urbana e sedentária descrita.', 2: 'A sociedade mesopotâmica não era igualitária.', 4: 'A economia permaneceu agrária, mas o processo destacado foi a urbanização, não a ruralização.' },
  }),
  q({
    n: 27, subject: 'História', content: 'Igreja medieval e condenação moral do lucro', statement: `Afirmou-se com frequência que o mercador medieval foi importunado em sua atividade profissional e rebaixado em seu meio social devido à atitude da Igreja a seu respeito. Condenado por ela no próprio exercício de sua profissão, teria sido uma espécie de pária da sociedade medieval dominada pela influência cristã. […] Os documentos eclesiásticos […] que fornecem listas de profissões interditas […] ou de ofícios desonrosos […] quase sempre incluem o comércio. […] Santo Tomás de Aquino sublinhará que “o comércio, considerado em si mesmo, tem um certo caráter vergonhoso”.

(Jacques Le Goff. Mercadores e banqueiros da Idade Média, 1991.)

A condenação aos mercadores realizada pela Igreja e pelos teólogos sustentava-se na ideia de que`, blockTypes: ['quote', 'source', 'command'], works: ['Mercadores e banqueiros da Idade Média'],
    alternatives: ['o ato mercante contrariava a disposição da cristandade pela usura.', 'a cobiça pelo lucro entrava em conflito com a moral cristã.', 'o comércio impedia a realização de doações à Igreja.', 'a atividade mercantil era monopolizada por infiéis e excomungados.', 'a ação de compra e venda retirava os homens da Igreja.'], answer: 'B',
    why: 'A busca do lucro era vista como cobiça e avareza, em tensão com a moral cristã. A usura era uma condenação relacionada, mas o fundamento geral apontado é o conflito entre lucro e moral.',
    wrong: { 0: 'A usura refere-se especialmente aos juros e não resume toda a desconfiança moral sobre o comércio.', 2: 'O comércio não impedia doações; mercadores podiam financiar atos religiosos e de caridade.', 3: 'A atividade não era monopolizada por infiéis e excomungados.', 4: 'Comprar e vender não afastava necessariamente os homens da Igreja.' },
  }),
  q({
    n: 28, subject: 'História', content: 'Economia açucareira e exportações do Brasil Colonial', statement: 'Analise a tabela que contém o valor aproximado das exportações do Brasil durante o período colonial, em libras esterlinas.',
    tables: [{ ariaLabel: 'Valor aproximado das exportações do Brasil colonial', headerRows: [['Produto', 'Valor (libras esterlinas)']], rows: [['Açúcar', '300 000 000'], ['Ouro e diamantes', '170 000 000'], ['Couros', '15 000 000'], ['Pau-brasil e outras madeiras', '15 000 000'], ['Tabaco', '12 000 000'], ['Algodão', '12 000 000'], ['Arroz', '4 500 000'], ['Café', '4 000 000'], ['Cacau, especiarias e outras drogas', '3 500 000'], [{ text: 'Total', header: true }, { text: '536 000 000', header: true }]] }],
    statementAfter: '(Roberto Simonsen. História econômica do Brasil: 1500-1820, 2005. Adaptado.)\n\nConsiderando o contexto do Brasil colonial (1500-1822), os dados da tabela demonstram que,', afterBlockTypes: ['source', 'command'], works: ['História econômica do Brasil: 1500-1820'],
    alternatives: [
      'apesar do alto valor agregado, a produção aurífera apresentou rentabilidade equivalente à do setor extrativista.',
      'apesar de limitada à região maranhense, a rizicultura contribuiu decisivamente para os lucros da metrópole.',
      'apesar da diversidade produtiva, o sistema canavieiro baseado na plantation pautou o fluxo econômico da colônia.',
      'apesar de ter se limitado às primeiras décadas da colonização, a extração madeireira apresentou alto rendimento.',
      'apesar do uso do tabaco como mercadoria de escambo no comércio transatlântico de escravizados, o lucro da produção de tabaco foi o menor registrado.',
    ], answer: 'C',
    why: 'O açúcar responde por 300 milhões de libras, o maior valor da tabela. Apesar da diversidade de produtos, a plantation canavieira foi central na economia e no comércio colonial.',
    wrong: { 0: 'A produção aurífera não apresenta valor equivalente ao setor açucareiro: 170 milhões contra 300 milhões.', 1: 'O arroz soma apenas 4,5 milhões e não foi limitado ao Maranhão.', 3: 'Madeiras somam 15 milhões e a extração não se limitou às primeiras décadas.', 4: 'O tabaco não tem o menor valor; café, arroz e cacau/especiarias aparecem abaixo dele.' },
  }),
  q({
    n: 29, subject: 'História', content: 'Embranquecimento e imigração no pensamento de Oliveira Vianna', statement: `O admirável movimento imigratório que ocorre no Brasil não concorre apenas para aumentar rapidamente, em nosso país, o coeficiente da massa ariana pura; mas também, cruzando-se e recruzando-se com a população mestiça, contribui para elevar, com igual rapidez, o teor ariano do nosso sangue.

(Oliveira Vianna. Evolução do povo brasileiro, 1938. Adaptado.)

Escrito originalmente em 1922, o excerto sustenta a ideia de que`, blockTypes: ['quote', 'source', 'command'], works: ['Evolução do povo brasileiro'],
    alternatives: ['o fenótipo superior da população brasileira favorecia um futuro positivo para o país.', 'a inferioridade genética dos elementos nacionais conduzia à rigidez racial no Brasil.', 'o aporte de estrangeiros era insuficiente para o aprimoramento do brasileiro.', 'a dinâmica demográfica brasileira era o resultado da democracia racial na nação.', 'a miscigenação com o europeu promovia o embranquecimento da população brasileira.'], answer: 'E',
    why: 'O texto atribui à imigração europeia e à miscigenação um aumento do chamado “teor ariano”, expressando a ideologia racista do embranquecimento.',
    wrong: { 0: 'O autor não parte da valorização do fenótipo já existente, mas da suposta melhoria pelo aporte europeu.', 1: 'A miscigenação é apresentada como mecanismo de mudança, não de rigidez racial.', 2: 'O movimento imigratório é considerado “admirável” e eficaz, não insuficiente.', 3: 'O excerto expressa hierarquia racial, não democracia racial.' },
  }),
  q({
    n: 30, subject: 'História', content: 'Fim da União Soviética e Guerra Fria', statement: 'Examine a charge, produzida por Edmund Valtman em 1991, a qual representa Mikhail Gorbachev, então dirigente da União Soviética.', images: [img('q30-charge-gorbachev.svg', 'Gorbachev observa blocos que formam a sigla URSS quebrados e desmontados.', '(www.loc.gov)')],
    statementAfter: 'Tendo em vista o momento histórico em que a charge foi produzida, representa-se nela', afterBlockTypes: ['command'],
    alternatives: [
      'a destruição da União Soviética a partir da consolidação dos acordos de paz que acabaram com a Guerra Fria.',
      'o desmantelamento da União Soviética provocado pela implementação de reformas políticas e econômicas.',
      'o desmonte da União Soviética com a formação da Cortina de Ferro entre os movimentos nacionalistas do Leste europeu.',
      'a remodelação da União Soviética por meio da adoção do caminho de desenvolvimento socioeconômico chinês.',
      'a reconfiguração administrativa da União Soviética garantida pela concessão de autonomia às repúblicas socialistas.',
    ], answer: 'B',
    why: 'Em 1991, a crise e a dissolução da URSS estavam ligadas às reformas de Gorbachev, como glasnost e perestroika, e às pressões nacionalistas e econômicas que desagregaram o Estado soviético.',
    wrong: { 0: 'A charge não representa acordos de paz como agentes da destruição.', 2: 'A Cortina de Ferro foi formada no início da Guerra Fria, décadas antes de 1991.', 3: 'A URSS não adotou o modelo chinês de abertura econômica.', 4: 'A autonomia das repúblicas não garantiu uma reconfiguração estável; ocorreu a dissolução.' },
  }),
];
