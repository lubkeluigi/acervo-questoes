const ORIGINAL_URL = 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/fuvest/2027_1fase/fuvest2027_1fase_prova_V1.pdf';
const base = { exam: 'FUVEST', year: 2027, phase: '1ª fase · V1', originalUrl: ORIGINAL_URL };

const PRUSSIAN_INTRO = 'Texto para as questões 65 e 66\n\nO Azul da Prússia (AP) é um composto utilizado no tratamento de contaminação por elementos radioativos, como o $^{137}\\mathrm{Cs}$, tendo sido utilizado no tratamento de pacientes do acidente radioativo de Goiânia, em 1987. Sua estrutura consiste em uma rede tridimensional formada por íons ferro ligados a grupos cianeto ($\\mathrm{CN}^-$), originando cavidades no interior do composto. Essas cavidades podem conter cátions monovalentes, fracamente ligados à rede por interações eletrostáticas e responsáveis por compensar a carga da estrutura. Esses cátions podem ser substituídos por outros cátions presentes no meio, como $^{137}\\mathrm{Cs}^+$, por meio de um processo de troca iônica. A figura a seguir apresenta um modelo simplificado dessa estrutura.';
const PRUSSIAN_INSOLUBLE = 'Por ser insolúvel, o composto (AP) atravessa o trato gastrointestinal, capturando cátions monovalentes, que são então eliminados nas fezes, reduzindo seu tempo de permanência no organismo.';

const HALAF_TEXT = 'Texto para as questões de 68 a 70\n\nImages of plants painted on pottery made up to 8,000 years ago may be the earliest example of humans’ mathematical thought, a study has found.\n\nResearchers from the Hebrew University of Jerusalem examined pottery produced by the Halafian people of northern Mesopotamia, who lived between 6200 BC and 5500 BC.\n\nMany bowls featured flowers that have been depicted with four, eight, 16, 32 or 64 petals. The use of these numbers forms a “geometric sequence” that implies a form of mathematical reasoning rooted in symmetry and repetition, the researchers said in the study published in the Journal of World Prehistory.\n\nThe researchers examined pottery fragments from 29 Halafian sites, excavated over a 100-year period from 1899. They found that in nearly every one of the 375 fragments that depict flowers, the number of petals is determined by this doubling sequence, which divides a circle into symmetrical units.\n\nThe Halafians may have developed this form of mathematical reasoning in response to managing village communities that had existed in the Near East for some 4,000 years and had become economically complex, the researchers said.\n\nThe ability to divide space evenly, reflected in these floral motifs, likely had practical roots in daily life, such as sharing harvests or allocating communal fields.\n\nThe researchers said the Halafian use of the numbers four, eight, 16 and 32 may reflect an earlier and simpler level of mathematical thinking that was in use in the Near East in the 6th and 5th millennia BC. According to the researchers, these patterns show that mathematical thinking began long before writing.\n\nCNN.com. 16 January 2026 (Adaptado).';
const HALAF_BLOCKS = ['label', 'prose', 'prose', 'prose', 'prose', 'prose', 'prose', 'prose', 'source'];
const HALAF_IMAGE = [{ src: '/images/fuvest2027/q68-ceramica-halaf.jpg', alt: 'Seis objetos de cerâmica halafiana, numerados de 1 a 6, com diferentes formatos e decorações.', caption: '' }];

export const fuvest2027Lote06 = [
  {
    ...base, id: 'fuvest2027-v1-q61', number: 'Questão 61', subject: 'Biologia', content: 'Herança autossômica dominante', difficulty: 'Média',
    statement: 'O ator Gaten Matarazzo, intérprete de Dustin Henderson na série Stranger Things, é portador da síndrome genética rara chamada displasia cleidocraniana. A síndrome tem herança autossômica dominante e é caracterizada por disfunção no desenvolvimento ósseo e dentário. Gaten é a única pessoa com a síndrome em sua família. Mutações patogênicas no gene RUNX2 são frequentemente associadas a essa síndrome.', works: ['Stranger Things'],
    images: [{ src: '/images/fuvest2027/q61-gaten.jpg', alt: 'Gaten Matarazzo intérprete de Dustin Henderson em cena da série Stranger Things.', caption: '' }],
    statementAfter: 'Com base no texto e nos conhecimentos em genética, assinale a alternativa correta.', afterBlockTypes: ['command'],
    alternatives: [
      'O gene RUNX2 encontra-se no cromossomo X e há chance de 50% de suas filhas serem afetadas pela síndrome.',
      'O gene RUNX2 encontra-se no cromossomo Y e há chance de 100% de seus filhos do sexo masculino possuírem a síndrome.',
      'Os filhos e as filhas de Gaten possuem pelo menos 50% de chance de desenvolverem a síndrome, pois a mutação não se encontra em um cromossomo sexual.',
      'Os pais de Gaten são heterozigóticos, por isso não desenvolveram a doença, que precisa da mutação em homozigose para se manifestar.',
      'O ator é heterozigótico para a mutação, por isso a chance de seus filhos do sexo masculino desenvolverem a síndrome é nula.',
    ], correct: 2,
    resolution: [
      'A herança é autossômica dominante: o gene não está em um cromossomo sexual e uma única cópia da mutação pode determinar a manifestação da síndrome.',
      'Se Gaten for heterozigótico, cada espermatozoide terá 50% de chance de carregar a mutação. Filhos e filhas terão, portanto, a mesma probabilidade de herdá-la, sem distinção de sexo.',
      'Como a alternativa afirma “pelo menos 50%”, ela também contempla a possibilidade de transmissão por um genitor com duas cópias mutantes. A alternativa C é a correta.',
    ],
    analyses: [
      'Incorreta. A herança é autossômica, e o gene RUNX2 não se localiza no cromossomo X.',
      'Incorreta. O gene não está no cromossomo Y, e a transmissão não é restrita nem certa para filhos do sexo masculino.',
      'Correta. Por ser autossômica dominante, a mutação pode ser transmitida a filhos e filhas; um genitor heterozigótico transmite a cópia mutante com probabilidade de 50%.',
      'Incorreta. Na herança dominante, heterozigotos podem manifestar a doença; não é necessária homozigose.',
      'Incorreta. Se o ator for heterozigótico, cada filho, independentemente do sexo, tem 50% de chance de herdar a mutação, não chance nula.',
    ],
  },
  {
    ...base, id: 'fuvest2027-v1-q62', number: 'Questão 62', subject: 'Biologia', content: 'Espirometria e função pulmonar', difficulty: 'Média',
    statement: 'A espirometria é um exame que avalia os volumes e fluxos pulmonares de uma pessoa. Para sua realização, o paciente deve inspirar profundamente até encher os pulmões e, em seguida, expirar com a maior velocidade e força possível. O gráfico a seguir indica o volume de ar, em litros, expirado dos pulmões de dois pacientes de mesma idade e sexo, A e B, como função do tempo, em segundos. Para avaliar a condição dos pacientes, duas informações importantes podem ser obtidas diretamente das curvas: o volume de ar expirado no primeiro segundo da expiração forçada (VEF1) e o volume máximo atingido ao final da manobra, denominado capacidade vital forçada (CVF). Para fins diagnósticos, a razão VEF1/CVF é um parâmetro fundamental, pois permite avaliar a presença de obstrução ao fluxo aéreo. Em pacientes adultos saudáveis, sem quadro de obstrução, essa razão deve ser superior a 70%.',
    diagram: 'fuvest2027Q62', figureCaption: '',
    statementAfter: 'Com base nas informações apresentadas, é correto afirmar:', afterBlockTypes: ['command'],
    alternatives: [
      'A CVF do paciente B é maior que a do paciente A.',
      'Os dois pacientes apresentam a mesma medida de VEF1.',
      'O paciente B apresenta um padrão obstrutivo.',
      'No primeiro segundo, o fluxo de ar expirado, em litros por segundo, é menor para o paciente A que para o B.',
      'Não é possível diagnosticar um quadro de obstrução ao fluxo aéreo em nenhum dos pacientes.',
    ], correct: 2,
    resolution: [
      'As curvas terminam praticamente no mesmo volume máximo, logo os pacientes têm CVF semelhante. No primeiro segundo, porém, B expirou menos ar que A.',
      'Lendo o gráfico, A apresenta $\\mathrm{VEF}_1$ próximo de 5,4 L e B, próximo de 4,0 L, para uma CVF de aproximadamente 6,4 L.',
      'Assim, a razão de A fica acima de 70%, enquanto a de B é aproximadamente $4{,}0/6{,}4 \\approx 63\\%$. O paciente B apresenta, portanto, padrão obstrutivo.',
    ],
    analyses: [
      'Incorreta. As curvas atingem praticamente o mesmo volume máximo; a CVF de B não é maior que a de A.',
      'Incorreta. No primeiro segundo, a curva de A está acima da de B, indicando VEF1 maior em A.',
      'Correta. B apresenta VEF1/CVF inferior a 70%, padrão compatível com obstrução ao fluxo aéreo.',
      'Incorreta. A expira mais volume no primeiro segundo e sua curva é mais inclinada nesse intervalo; seu fluxo não é menor que o de B.',
      'Incorreta. As curvas e o critério de 70% permitem identificar o padrão obstrutivo do paciente B.',
    ],
  },
  {
    ...base, id: 'fuvest2027-v1-q63', number: 'Questão 63', subject: 'Biologia', content: 'Evolução e resistência antimicrobiana', difficulty: 'Média',
    statement: 'Em 2019, a Organização Mundial da Saúde (OMS) considerou a resistência antimicrobiana como um dos principais problemas de saúde mundiais, classificando-a como uma “pandemia silenciosa”. De acordo com a OMS, a definição de resistência antimicrobiana é:\n\n“Antimicrobial Resistance (AMR) occurs when bacteria, viruses, fungi and parasites no longer respond to antimicrobial medicines. As a result of drug resistance, antibiotics and other antimicrobial medicines become ineffective and infections become difficult or impossible to treat, increasing the risk of disease spread, severe illness, disability and death.”', blockTypes: ['prose', 'quote'],
    statementAfter: 'Do ponto de vista evolutivo, a resistência bacteriana a esses fármacos deve-se ao fato de que', afterBlockTypes: ['command'],
    alternatives: [
      'as mutações que conferem resistência ocorrem de forma aleatória e independente da presença do fármaco, que atua apenas como um agente de seleção natural sobre a variabilidade pré-existente.',
      'os antibióticos induzem mutações específicas no DNA das bactérias sensíveis, permitindo que elas desenvolvam mecanismos de defesa para sobreviver ao ambiente hostil.',
      'a exposição contínua a doses baixas de antibióticos faz com que as bactérias se adaptem gradualmente ao longo da vida, transmitindo essas características para as gerações seguintes.',
      'o sistema imunológico das bactérias, ao entrar em contato com o antibiótico, produz anticorpos intracelulares que são codificados no plasmídeo e compartilhados via conjugação.',
      'a resistência é fruto de um processo de convergência adaptativa, no qual diferentes espécies de bactérias sofrem as mesmas mutações simultâneas para colonizar novos nichos hospitalares.',
    ], correct: 0,
    resolution: [
      'Mutações surgem espontaneamente, sem a finalidade de produzir resistência e sem depender da presença do antibiótico.',
      'Quando o fármaco está presente, bactérias sensíveis tendem a morrer ou deixar de se reproduzir, enquanto variantes resistentes sobrevivem e transmitem seu material genético.',
      'O antibiótico atua, assim, como agente de seleção sobre a variabilidade preexistente, e não como direcionador de mutações específicas.',
    ],
    analyses: [
      'Correta. A resistência decorre de mutações aleatórias seguidas de seleção natural exercida pelo fármaco.',
      'Incorreta. Antibióticos não induzem, de modo dirigido, as mutações específicas necessárias para a sobrevivência.',
      'Incorreta. A explicação apresenta adaptação individual dirigida e herança de caracteres adquiridos, incompatível com o mecanismo evolutivo descrito.',
      'Incorreta. Bactérias não possuem sistema imunológico produtor de anticorpos como o dos animais.',
      'Incorreta. Não há necessidade de mutações simultâneas e idênticas em diferentes espécies para a disseminação da resistência.',
    ],
  },
  {
    ...base, id: 'fuvest2027-v1-q64', number: 'Questão 64', subject: 'Biologia', content: 'Ciclo celular e câncer', difficulty: 'Média',
    statement: 'A proliferação celular descontrolada é uma característica fundamental em todos os tipos de câncer. Em tecidos saudáveis, a divisão celular é controlada por proteínas que atuam como estímulo ou freio ao longo do ciclo celular. Os proto-oncogenes codificam proteínas que estimulam a divisão celular, e os genes supressores de tumor codificam proteínas que interrompem o ciclo ou induzem a morte celular programada quando há danos no DNA. Quando mutações desfazem o equilíbrio entre estímulo e freio, a célula pode se dividir de modo descontrolado e originar um tumor.',
    statementAfter: 'Considerando o texto e em relação aos conhecimentos sobre ciclo celular e câncer, assinale a alternativa correta.', afterBlockTypes: ['command'],
    alternatives: [
      'O proto-oncogene contribui para o desenvolvimento de câncer quando sofre uma mutação que inativa seu produto proteico, fazendo com que a célula deixe de receber o sinal regulador do ciclo celular e passe a se dividir de modo descontrolado.',
      'O gene supressor de tumor contribui para o desenvolvimento de câncer quando sofre uma mutação que inativa seu produto proteico, fazendo com que a célula perca os freios à divisão diante de danos no DNA e prolifere com alterações genéticas acumuladas.',
      'O surgimento do câncer depende da exposição a agentes externos, como radiação ultravioleta, tabaco e vírus, sem os quais não é possível ocorrer as mutações capazes de iniciar a transformação tumoral das células.',
      'Mutações em genes do ciclo celular ocorridas nas células somáticas de um indivíduo são transmitidas aos seus descendentes, e a acumulação progressiva dessas alterações ao longo das gerações explica o aparecimento dos casos de câncer familiar.',
      'Mutações simultâneas no proto-oncogene e no gene supressor de tumor potencializam a função de seus produtos, resultando em casos muito agressivos e rápidos de câncer.',
    ], correct: 1,
    resolution: [
      'Os genes supressores de tumor funcionam como freios do ciclo celular ou promovem apoptose quando o DNA está danificado.',
      'A inativação de seu produto proteico retira esse controle, permitindo que células com alterações genéticas continuem se dividindo.',
      'Portanto, a perda de função de um gene supressor pode contribuir para a proliferação descontrolada e para o desenvolvimento do câncer.',
    ],
    analyses: [
      'Incorreta. Proto-oncogenes estimulam a divisão; sua inativação não explica o estímulo à proliferação descontrolada descrito na alternativa.',
      'Correta. A inativação de um supressor de tumor remove freios à divisão e favorece a proliferação de células com DNA danificado.',
      'Incorreta. Mutações também podem surgir espontaneamente por erros de replicação e por processos endógenos, sem agentes externos.',
      'Incorreta. Mutações restritas a células somáticas não são transmitidas aos descendentes; cânceres hereditários envolvem variantes na linhagem germinativa.',
      'Incorreta. O desenvolvimento tumoral é associado à ativação inadequada de proto-oncogenes e à perda de função de supressores, não à potencialização de ambos.',
    ],
  },
  {
    ...base, id: 'fuvest2027-v1-q65', number: 'Questão 65', subject: 'Química', content: 'Troca iônica e interações eletrostáticas', difficulty: 'Média',
    statement: PRUSSIAN_INTRO, blockTypes: ['label', 'prose'], diagram: 'fuvest2027Q65Structure', figureCaption: '',
    statementAfter: `${PRUSSIAN_INSOLUBLE}\n\nCom base nas informações, é correto afirmar que a retenção de cátions, como $^{137}\\mathrm{Cs}^+$, ocorre`, afterBlockTypes: ['prose', 'command'],
    alternatives: [
      'por interações íon-íon entre os cátions e regiões de carga negativa da estrutura.',
      'pela formação de ligações covalentes entre os cátions e os átomos de ferro.',
      'devido às forças de Van der Waals, que atuam em todos os átomos da estrutura.',
      'pela formação de ligações de hidrogênio entre cátions e os grupos cianeto.',
      'por aprisionamento físico nas cavidades, sem interação eletrostática com a rede tridimensional.',
    ], correct: 0,
    resolution: [
      'O texto informa que os cátions monovalentes ficam fracamente ligados à rede por interações eletrostáticas e compensam a carga da estrutura.',
      'A atração entre os cátions e regiões negativas da rede é, portanto, uma interação íon-íon.',
      'As cavidades favorecem a acomodação e a troca dos íons, mas a retenção não ocorre sem interação eletrostática.',
    ],
    analyses: [
      'Correta. Cátions são atraídos por regiões de carga negativa da rede por interações eletrostáticas íon-íon.',
      'Incorreta. Os cátions estão fracamente ligados à rede; o texto não descreve formação de ligações covalentes com o ferro.',
      'Incorreta. Forças de Van der Waals não são a interação apresentada como responsável pela compensação de carga e retenção dos cátions.',
      'Incorreta. Não há formação de ligações de hidrogênio entre os cátions e os grupos cianeto nesse modelo.',
      'Incorreta. O enunciado afirma explicitamente que os cátions se ligam à rede por interações eletrostáticas.',
    ],
  },
  {
    ...base, id: 'fuvest2027-v1-q66', number: 'Questão 66', subject: 'Química', content: 'Equilíbrio, pH e absorção de césio', difficulty: 'Difícil',
    statement: PRUSSIAN_INTRO, blockTypes: ['label', 'prose'], diagram: 'fuvest2027Q65Structure', figureCaption: '',
    statementAfter: `${PRUSSIAN_INSOLUBLE}\n\nUm dos principais íons monovalentes presentes na estrutura do AP que pode ser trocado pelo césio é o $\\mathrm{H}^+$. A absorção dos íons $\\mathrm{Cs}^+$ pelo AP pode ser influenciada tanto pelo pH do meio como pela competição com outros íons de metais alcalinos ($\\mathrm{M}^+$) presentes no corpo, como mostrado nos equilíbrios a seguir:`, afterBlockTypes: ['prose', 'prose'],
    afterMath: '\\begin{gathered}\\mathrm{AP(H^+)}(s)+\\mathrm{Cs^+}(aq)\\rightleftharpoons\\mathrm{AP(Cs^+)}(s)+\\mathrm{H^+}(aq)\\\\[6pt]\\mathrm{AP(H^+)}(s)+\\mathrm{M^+}(aq)\\rightleftharpoons\\mathrm{AP(M^+)}(s)+\\mathrm{H^+}(aq)\\end{gathered}',
    statementTail: 'Sobre esse processo, é correto afirmar:\n\nNote e adote:\n$\\mathrm{AP(H^+)}$: azul da prússia com íons $\\mathrm{H}^+$ em sua estrutura.\n$\\mathrm{AP(Cs^+)}$: azul da prússia com íons $\\mathrm{Cs}^+$ em sua estrutura.\n$\\mathrm{AP(M^+)}$: azul da prússia com íons $\\mathrm{M}^+$ em sua estrutura.', tailBlockTypes: ['command', 'note-box'],
    alternatives: [
      'Como o pH intestinal é maior que o gástrico, a absorção de Cs⁺ será mais efetiva no intestino do que no estômago.',
      'Íons K⁺ não apresentam competição por não serem radioativos como o ¹³⁷Cs⁺.',
      'Outros metais alcalinos presentes no organismo que poderiam causar competição são Mg²⁺ e Ca²⁺.',
      'O ácido clorídrico do suco gástrico acelera a absorção de Cs⁺, pois a velocidade da reação aumenta com a concentração.',
      'A administração de AP não retira íons K⁺ do organismo, pois estes são muito maiores que o Cs⁺, não sendo substituídos.',
    ], correct: 0,
    resolution: [
      'No equilíbrio de troca, $\\mathrm{H}^+$ é um produto. Uma concentração menor de $\\mathrm{H}^+$ desloca o equilíbrio no sentido da formação de $\\mathrm{AP(Cs^+)}(s)$, favorecendo a absorção do césio.',
      'O intestino tem pH maior que o estômago e, portanto, menor concentração de $\\mathrm{H}^+$; nesse meio, há menos competição do próprio $\\mathrm{H}^+$ pelo retorno à estrutura do AP.',
      'Logo, a absorção de Cs⁺ tende a ser mais efetiva no intestino, como afirma a alternativa A.',
    ],
    analyses: [
      'Correta. O pH intestinal mais alto implica menor [H⁺], condição que favorece o deslocamento do equilíbrio para a absorção de Cs⁺.',
      'Incorreta. K⁺ é um cátion monovalente de metal alcalino e pode competir pelos sítios, independentemente de não ser radioativo.',
      'Incorreta. Mg²⁺ e Ca²⁺ são metais alcalino-terrosos e não cátions monovalentes de metais alcalinos.',
      'Incorreta. A alternativa mistura equilíbrio e cinética; além disso, a maior concentração de H⁺ no estômago desfavorece a formação de AP(Cs⁺).',
      'Incorreta. K⁺ pode participar da troca iônica, e a afirmação sobre seu tamanho em relação ao Cs⁺ não justifica a ausência de competição.',
    ],
  },
  {
    ...base, id: 'fuvest2027-v1-q67', number: 'Questão 67', subject: 'Matemática', content: 'Contagem com equivalência por rotação', difficulty: 'Difícil',
    statement: 'Duas casas de um tabuleiro no formato de um triângulo equilátero, subdividido em 36 triângulos equiláteros, são pintadas de amarelo. Para que duas pinturas sejam consideradas equivalentes, uma deverá ser obtida a partir da outra por uma rotação de 120º em relação ao encontro das bissetrizes, conforme ilustrado nas imagens a seguir:',
    diagram: 'fuvest2027Q67', figureCaption: '',
    statementAfter: 'Considerando as imagens apresentadas, quantas pinturas não equivalentes existem?', afterBlockTypes: ['command'],
    alternatives: ['210', '315', '420', '630', '1260'], correct: 0,
    resolution: [
      'Sem considerar as rotações, escolhemos duas casas distintas entre 36, sem importar a ordem: $\\binom{36}{2} = \\frac{36 \\times 35}{2} = 630$ pinturas.',
      'Cada pintura é equivalente às suas rotações de 120° e 240°. Nenhuma pintura com exatamente duas casas amarelas pode permanecer invariante por essas rotações: as casas giram em órbitas de três posições, e duas posições não podem completar uma órbita de tamanho três.',
      'Assim, cada classe de equivalência contém 3 pinturas. O número de pinturas não equivalentes é $630/3 = \\boxed{210}$.',
    ],
    analyses: [
      'Correta. Há 630 escolhas antes da identificação por rotação e cada classe reúne três pinturas, resultando em 210.',
      'Incorreta. O valor 315 não corresponde à divisão das 630 pinturas em classes de três equivalentes.',
      'Incorreta. O valor 420 contaria duas vezes o resultado obtido após a identificação pelas rotações.',
      'Incorreta. O valor 630 é o total antes de identificar as pinturas equivalentes por rotação.',
      'Incorreta. O valor 1260 trata as escolhas como ordenadas e ainda não aplica a equivalência por rotação.',
    ],
  },
  {
    ...base, id: 'fuvest2027-v1-q68', number: 'Questão 68', subject: 'Inglês', content: 'Interpretação de texto e sequência geométrica', difficulty: 'Média',
    statement: HALAF_TEXT, blockTypes: HALAF_BLOCKS, works: ['Journal of World Prehistory'], images: HALAF_IMAGE,
    statementAfter: 'No texto, a referência à “geometric sequence” (3º parágrafo) é empregada para', afterBlockTypes: ['command'],
    alternatives: [
      'indicar que os artesãos halafianos dominavam sistemas formais de cálculo semelhantes aos desenvolvidos na matemática clássica.',
      'sustentar a interpretação de que os padrões decorativos revelavam raciocínio estruturado baseado em progressão numérica e simetria.',
      'sugerir que os motivos florais possuíam função estética desvinculada de organização numérica.',
      'demonstrar que a cerâmica constituía sistema formal de escrita numérica utilizada para fins administrativos.',
      'estabelecer que a divisão do círculo em unidades iguais correspondia a uma convenção artística difundida na Mesopotâmia antiga.',
    ], correct: 1,
    resolution: [
      'A sequência de pétalas 4, 8, 16, 32 e 64 é formada por duplicações sucessivas e é chamada de “geometric sequence”.',
      'Os pesquisadores relacionam essa progressão à divisão do círculo em unidades simétricas e à repetição dos motivos.',
      'A expressão sustenta a hipótese de um raciocínio matemático estruturado, sem afirmar que houvesse cálculo formal clássico ou escrita numérica.',
    ],
    analyses: [
      'Incorreta. O texto propõe uma forma anterior e mais simples de pensamento matemático, não o domínio de sistemas formais da matemática clássica.',
      'Correta. A duplicação dos números de pétalas e a organização simétrica indicam raciocínio baseado em progressão numérica e simetria.',
      'Incorreta. A interpretação vincula os motivos florais a uma organização numérica, não a separa dela.',
      'Incorreta. O texto afirma que o pensamento matemático precedeu a escrita; não apresenta a cerâmica como escrita numérica administrativa.',
      'Incorreta. A divisão em unidades iguais é tratada como evidência de raciocínio matemático, não apenas como convenção artística difundida.',
    ],
  },
  {
    ...base, id: 'fuvest2027-v1-q69', number: 'Questão 69', subject: 'História', content: 'Arqueologia e inferência histórica', difficulty: 'Média',
    statement: HALAF_TEXT, blockTypes: HALAF_BLOCKS, works: ['Journal of World Prehistory'], images: HALAF_IMAGE,
    statementAfter: 'No texto, a articulação entre os fragmentos de cerâmica e a hipótese de pesquisa apresentada evidencia um procedimento metodológico que', afterBlockTypes: ['command'],
    alternatives: [
      'substitui análise arqueológica por reconstruções especulativas sem base empírica.',
      'equipara padrões decorativos a símbolos de notação matemática desenvolvidos de modo pleno.',
      'atribui função estética e ornamental às representações florais.',
      'transforma vestígios materiais em fundamento para inferências sobre o pensamento antigo.',
      'considera a simetria como evidência literal de sistemas de escrita numérica.',
    ], correct: 3,
    resolution: [
      'Os pesquisadores examinaram 375 fragmentos provenientes de 29 sítios arqueológicos e identificaram padrões recorrentes no número de pétalas.',
      'A partir desses vestígios materiais, formularam uma inferência sobre formas de raciocínio matemático anteriores à escrita.',
      'O procedimento une evidência empírica arqueológica e interpretação histórica, sem transformar os desenhos em notação matemática plenamente desenvolvida.',
    ],
    analyses: [
      'Incorreta. A hipótese se apoia na análise de centenas de fragmentos e de sua procedência arqueológica, não em especulação sem base empírica.',
      'Incorreta. Os padrões são interpretados como indícios de pensamento matemático, não como notação matemática plenamente desenvolvida.',
      'Incorreta. A pesquisa enfatiza organização numérica e simetria, não uma função exclusivamente estética ou ornamental.',
      'Correta. Os fragmentos são evidências materiais usadas para inferir aspectos do pensamento das populações antigas.',
      'Incorreta. A simetria não é tomada como escrita numérica literal; o texto ressalta que o pensamento matemático antecedeu a escrita.',
    ],
  },
  {
    ...base, id: 'fuvest2027-v1-q70', number: 'Questão 70', subject: 'Matemática', content: 'Pensamento matemático antes da escrita', difficulty: 'Média',
    statement: HALAF_TEXT, blockTypes: HALAF_BLOCKS, works: ['Journal of World Prehistory'], images: HALAF_IMAGE,
    statementAfter: 'Conforme o texto, a afirmação de que os padrões visuais revelam pensamento matemático anterior à escrita reforça', afterBlockTypes: ['command'],
    alternatives: [
      'a concepção de que formas abstratas de raciocínio precederam sistemas formais de expressão escrita.',
      'a ideia de que registros gráficos surgiram como consequência direta da decoração cerâmica.',
      'a hipótese de que modelos de notação numérica coexistiam com a produção dos objetos analisados.',
      'a interpretação de que o desenvolvimento da matemática restringiu-se ao âmbito da administração estatal.',
      'a noção de que a linguagem simbólica substituiu a tradição oral na região de modo progressivo.',
    ], correct: 0,
    resolution: [
      'Os motivos florais indicam contagem, duplicação, simetria e divisão regular do espaço antes do surgimento de sistemas formais de escrita.',
      'Isso reforça a ideia de que formas de raciocínio abstrato podem existir e ser expressas materialmente sem notação escrita.',
      'O texto não afirma que a escrita tenha surgido diretamente da cerâmica nem que a matemática se limitasse à administração estatal.',
    ],
    analyses: [
      'Correta. A hipótese coloca formas de raciocínio matemático e abstrato antes dos sistemas formais de expressão escrita.',
      'Incorreta. O texto não estabelece uma relação causal direta entre decoração cerâmica e surgimento de registros gráficos.',
      'Incorreta. A conclusão enfatiza o pensamento matemático anterior à escrita, não a coexistência com notação numérica formal.',
      'Incorreta. Embora o texto mencione atividades de partilha, ele não restringe a matemática à administração estatal.',
      'Incorreta. A substituição progressiva da tradição oral pela linguagem simbólica não é discutida no texto.',
    ],
  },
  {
    ...base, id: 'fuvest2027-v1-q71', number: 'Questão 71', subject: 'Artes', content: 'Aby Warburg e Pathosformel', difficulty: 'Difícil',
    statement: 'Aby Warburg reuniu centenas de reproduções fotográficas em grandes painéis, compondo constelações visuais para que o observador comparasse imagens de épocas distintas. Esse projeto, conhecido como Atlas Mnemosyne, buscava rastrear a “pós-vida” da Antiguidade: a sobrevivência e a reaparição de certos motivos e, sobretudo, de fórmulas expressivas (Pathosformeln) que condensam e reativam afetos antigos quando reaparecem, transformados, em obras do Renascimento. Assinale a alternativa em que o par de imagens apresenta, no Renascimento, a retomada de uma mesma fórmula expressiva da Antiguidade (Pathosformel), reconhecível visualmente pela torção do corpo, pelo drapeado e pela intensificação afetiva do gesto.', works: ['Atlas Mnemosyne'],
    alternatives: ['', '', '', '', ''],
    alternativeImages: [
      [
        { src: '/images/fuvest2027/q71-a-antiguidade.jpg', alt: 'Alternativa A: relevo antigo de figura feminina com corpo em movimento e drapeado esvoaçante.' },
        { src: '/images/fuvest2027/q71-a-renascimento.jpg', alt: 'Alternativa A: detalhe de Primavera, de Botticelli, com figuras em movimento e vestes drapeadas.' },
      ],
      [
        { src: '/images/fuvest2027/q71-b-nefertiti.jpg', alt: 'Alternativa B: busto antigo de Nefertiti.' },
        { src: '/images/fuvest2027/q71-b-mona-lisa.jpg', alt: 'Alternativa B: Mona Lisa, de Leonardo da Vinci.' },
      ],
      [
        { src: '/images/fuvest2027/q71-c-codigo.jpg', alt: 'Alternativa C: estela antiga do Código de Hamurábi.' },
        { src: '/images/fuvest2027/q71-c-escola-atenas.jpg', alt: 'Alternativa C: Escola de Atenas, de Rafael.' },
      ],
      [
        { src: '/images/fuvest2027/q71-d-augusto.jpg', alt: 'Alternativa D: estátua antiga de Augusto de Prima Porta.' },
        { src: '/images/fuvest2027/q71-d-arnolfini.jpg', alt: 'Alternativa D: O casal Arnolfini, de Jan van Eyck.' },
      ],
      [
        { src: '/images/fuvest2027/q71-e-estela.jpg', alt: 'Alternativa E: Estela de Naram-Sin, com figuras em relevo.' },
        { src: '/images/fuvest2027/q71-e-ultima-ceia.jpg', alt: 'Alternativa E: A Última Ceia, de Leonardo da Vinci.' },
      ],
    ], correct: 0,
    resolution: [
      'A Pathosformel é uma fórmula expressiva que reaparece em outro contexto histórico, conservando e transformando gestos, movimentos e afetos.',
      'No par A, a figura feminina do relevo antigo apresenta corpo em torção e drapeado agitado; em Primavera, Botticelli retoma esses recursos visuais nas figuras em movimento e nas vestes esvoaçantes.',
      'Essa correspondência formal e afetiva entre Antiguidade e Renascimento é exatamente a retomada solicitada, por isso a alternativa A é a correta.',
    ],
    analyses: [
      'Correta. A torção do corpo, o movimento e o drapeado esvoaçante aproximam visualmente o relevo antigo e as figuras de Botticelli.',
      'Incorreta. O busto de Nefertiti e a Mona Lisa são representações relativamente frontais e contidas, sem a mesma fórmula de movimento e drapeado agitado.',
      'Incorreta. A estela de Hamurábi e a Escola de Atenas não apresentam a correspondência específica de torção corporal e gesto afetivo descrita no enunciado.',
      'Incorreta. Augusto de Prima Porta tem gesto retórico, mas O casal Arnolfini apresenta figuras hieráticas e contidas, sem retomar a fórmula expressiva em movimento.',
      'Incorreta. A composição narrativa da Estela de Naram-Sin não estabelece com A Última Ceia a mesma correspondência de corpo, drapeado e gesto observada no par A.',
    ],
  },
  {
    ...base, id: 'fuvest2027-v1-q72', number: 'Questão 72', subject: 'Sociologia', content: 'Influenciadores fitness e padrões corporais', difficulty: 'Média',
    statement: 'Nas redes sociais, os chamados “influenciadores fitness” compartilham rotinas de exercícios físicos e hábitos alimentares voltados à promoção de um estilo de vida saudável. Essas publicações também podem influenciar a percepção do público sobre corpo e padrões estéticos, principalmente porque',
    images: [
      { src: '/images/fuvest2027/q72-fitness-1.jpg', alt: 'Publicação de influenciador fitness em rede social, com 21,3 mil curtidas e 1.666 comentários.', caption: '' },
      { src: '/images/fuvest2027/q72-fitness-2.jpg', alt: 'Publicação com a frase “Treino pra barriga retinha e sem flacidez”, com 19,1 mil curtidas e 3.491 comentários.', caption: '' },
    ],
    alternatives: [
      'descrevem os benefícios do treinamento em termos amplos, abrangendo não somente resultados estéticos.',
      'chamam a atenção para a totalidade do processo de treinamento, incluindo o planejamento e a avaliação.',
      'problematizam a relação entre estética e saúde, alertando para os riscos de exercícios mal executados.',
      'associam o treino, método ou produtos anunciados ao corpo representado.',
      'abordam a diversidade corporal e os múltiplos fatores que causam a desigualdade de acesso.',
    ], correct: 3,
    resolution: [
      'As publicações exibem corpos considerados referências estéticas e os vinculam diretamente a determinados treinos, métodos ou produtos.',
      'Essa associação leva o público a interpretar o corpo representado como resultado das práticas anunciadas, reforçando padrões corporais e promessas de transformação.',
      'Portanto, a alternativa D identifica o mecanismo pelo qual esses conteúdos influenciam a percepção estética.',
    ],
    analyses: [
      'Incorreta. As publicações destacadas enfatizam resultados corporais e estéticos, não benefícios amplos do treinamento.',
      'Incorreta. Não há apresentação da totalidade do processo, com planejamento, avaliação e acompanhamento.',
      'Incorreta. As imagens e chamadas não alertam para riscos de execução nem problematizam criticamente a relação entre estética e saúde.',
      'Correta. O corpo exibido funciona como evidência visual associada ao treino, ao método ou aos produtos anunciados.',
      'Incorreta. As publicações não discutem diversidade corporal nem os fatores sociais que limitam o acesso a práticas fitness.',
    ],
  },
];
