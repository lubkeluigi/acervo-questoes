const PROCESS_URL = 'https://tmpfiles.org/wfAqoAszN8mO/provai-discursiva2.pdf';
const ANSWER_URL = 'https://tmpfiles.org/w8AeoGsvNDin/criteriosdecorrecaodaprovai-discursiva2.pdf';
const shared = {
  exam: 'Unifimes Trindade', year: 2027, phase: 'Prova I', originalUrl: PROCESS_URL,
  kind: 'discursive', correctionOrigin: 'official', officialAnswerUrl: ANSWER_URL,
  officialNotes: [
    'Para cada questão, foi atribuída pontuação de 0 a 4, conforme o atendimento integral aos critérios oficiais.',
    'Resposta correta acrescida de informação errada implicou na perda do ponto.',
    'Não foram aceitos resultados sem a apresentação da resolução.',
    'Não foram aceitos resultados com erro de cálculo ou sem a unidade de medida correta, quando couber.',
  ],
};
const tex = String.raw;
const img = (file, alt) => ({ src: `/images/unifimestrindade2027/${file}?v=20261104-pdf-vector1`, alt });

export const unifimestrindade2027Lote05 = [
  {
    ...shared,
    id: 'unifimestrindade2027-prova1-q01', number: 'Questão 01', subject: 'Química', content: 'Isótopos, massa molecular e solubilidade no chocolate', difficulty: 'Média',
    statement: tex`A legislação brasileira estabelece que o teor mínimo de manteiga de cacau (fração lipídica extraída das sementes do cacaueiro) em chocolates ao leite seja de 18%. Já o teor de sacarose ($\mathrm{C_{12}H_{22}O_{11}}$), embora não possua percentual mínimo regulamentado, pode ser monitorado pela razão isotópica $^{13}\mathrm C/^{12}\mathrm C$. Isso ocorre porque o cacaueiro apresenta discriminação isotópica distinta da cana-de-açúcar, a qual incorpora proporcionalmente mais carbono-13 em suas moléculas. Além disso, o teor de manteiga de cacau influencia a percepção do sabor doce do chocolate, uma vez que essa fração lipídica pode retardar a dissolução da sacarose na saliva e suavizar a intensidade da doçura percebida, ao criar uma barreira entre a saliva e a sacarose.`, blockTypes: ['prose'],
    parts: [
      {
        id: 'a', prompt: 'Determine o número de nêutrons existentes em um núcleo de ¹³C. Calcule, em u (unidades de massa atômica), a massa molecular de uma molécula de sacarose em que 25% dos átomos de carbono correspondem ao isótopo ¹³C.', maxScore: 2,
        expected: tex`O carbono tem $Z=6$; portanto, no $^{13}\mathrm C$, $N=13-6=\boxed{7\text{ nêutrons}}$. Como 25% dos 12 carbonos correspondem a 3 átomos de $^{13}\mathrm C$, a massa molecular é $M=9\cdot12+3\cdot13+22\cdot1+11\cdot16=108+39+22+176=\boxed{345\ \mathrm u}$.`,
        accepted: 'Para os nêutrons: “7 nêutrons” ou “n = 7”. Para a massa: “345 u.m.a” ou “345 MM”, com a resolução apresentada.',
        rejected: 'Não foram aceitas “7”, “7 prótons” ou “7 elétrons”, nem respostas sem resolução dentro do campo resolução e resposta.',
        criteria: [
          { points: 1, text: 'Calcula 7 nêutrons no núcleo de carbono-13.' },
          { points: 1, text: 'Considera 3 dos 12 carbonos como ¹³C e calcula massa molecular de 345 u.' },
        ],
      },
      {
        id: 'b', prompt: 'Calcule a massa mínima de manteiga de cacau, em gramas, presente em 500 kg de chocolate ao leite. Considerando que a sacarose é uma molécula polar, explique, com base no princípio de solubilidade, por que o aumento do teor de manteiga de cacau retarda a dissolução da sacarose na saliva.', maxScore: 2,
        expected: tex`A massa mínima corresponde a 18% de 500 kg: $m=0{,}18\cdot500=90\ \mathrm{kg}=\boxed{90\,000\ \mathrm g}$. A manteiga de cacau é majoritariamente apolar/lipofílica e forma uma barreira entre a saliva polar e a sacarose, também polar. Essa barreira dificulta o contato e retarda a dissolução da sacarose.`,
        accepted: 'Para a massa: “90 000 gramas” ou “90 000 g”. Para a explicação: manteiga de cacau apolar, lipofílica, de maior cadeia carbônica, mais gordura ou hidrofóbica, enquanto a sacarose é polar/hidrofílica e se dissolve na saliva polar.',
        rejected: 'Não foi aceita resposta sem resolução, nem a simples repetição do enunciado, como “a manteiga de cacau retarda a dissolução porque não é solúvel na saliva”, sem explicar o princípio de solubilidade.',
        criteria: [
          { points: 1, text: 'Calcula 90 kg e converte corretamente para 90 000 g de manteiga de cacau.' },
          { points: 1, text: 'Explica o retardo pela natureza apolar da manteiga e pela interação entre sacarose polar e saliva polar.' },
        ],
      },
    ],
    preview: 'Calcule nêutrons e massa isotópica da sacarose e relacione polaridade à dissolução.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova1-q02', number: 'Questão 02', subject: 'Química', content: 'Lítio: carga iônica, reação com água e entalpia', difficulty: 'Média', mathClass: 'compact-math',
    statement: 'As baterias não recarregáveis de modelo CR2032, muito usadas em relógios e dispositivos pequenos, contêm eletrodos de lítio metálico em seu interior, os quais podem reagir energicamente em contato com água, em uma reação altamente exotérmica. Por isso, há a recomendação explícita de nunca perfurar ou amassar essas baterias, já que a exposição do lítio metálico à umidade do ar é suficiente para iniciar essa reação, a qual ocorre conforme a seguinte equação:', blockTypes: ['prose'],
    math: tex`\mathrm{Li(s)+H_2O(\ell)\longrightarrow LiX(aq)+\frac{1}{2}H_2(g)}`,
    statementAfter: 'Há, também, a versão recarregável desse mesmo modelo de baterias, baseadas em íon lítio, as quais possuem esse mesmo elemento em sua forma iônica, mas que não reage com o ar e com a água. São, portanto, dispositivos mais seguros nesse aspecto.', afterBlockTypes: ['prose'],
    parts: [
      {
        id: 'a', prompt: 'Qual é a carga do íon do lítio presente nas baterias de íon lítio? Qual é a fórmula da espécie representada por X na equação?', maxScore: 2,
        expected: tex`O lítio é um metal alcalino e forma o cátion $\boxed{\mathrm{Li^+}}$, de carga $1+$. Na equação, X é o ânion hidróxido: $\boxed{\mathrm{OH^-}}$.`,
        accepted: tex`Foram aceitas $\mathrm{Li^{1+}}$ ou $\mathrm{Li^{+1}}$, e apenas respostas para X que contivessem a carga do íon hidróxido, $\mathrm{OH^-}$.`,
        rejected: tex`Não foi aceita apenas “carga positiva” para o lítio, nem $\mathrm{LiOH}$ como resposta para X.`,
        criteria: [
          { points: 1, text: tex`Indica a carga $1+$ do íon lítio.` },
          { points: 1, text: tex`Identifica X como o íon hidróxido, $\mathrm{OH^-}$.` },
        ],
      },
      {
        id: 'b', prompt: 'Considere que, em uma reação entre lítio metálico e água (H₂O), a formação de 448 mL de gás hidrogênio (H₂), medidos nas CNTP, produziu 8,88 kJ. Sabendo que o volume molar dos gases nas CNTP é igual a 22,4 L · mol⁻¹, calcule o número de mols de H₂ produzido nessa reação. Determine, em kJ · mol⁻¹ de lítio, o valor do ΔH da reação entre lítio e água.', maxScore: 2,
        expected: tex`Como $448\ \mathrm{mL}=0{,}448\ \mathrm L$, $n(\mathrm{H_2})=\frac{0{,}448}{22{,}4}=\boxed{0{,}02\ \mathrm{mol}}$. Pela equação, 1 mol de Li produz $1/2$ mol de $\mathrm{H_2}$, correspondente a 11,2 L nas CNTP. Se 0,448 L liberam 8,88 kJ, então 11,2 L liberam $8{,}88\cdot\frac{11{,}2}{0{,}448}=222\ \mathrm{kJ}$. Como a reação é exotérmica, $\boxed{\Delta H=-222\ \mathrm{kJ\,mol^{-1}}\text{ de Li}}$.`,
        accepted: tex`Para a quantidade de matéria, foram aceitas variações como $0{,}2\times10^{-1}\ \mathrm{mol}$, $2\times10^{-2}\ \mathrm{mol}$ ou $20\times10^{-3}\ \mathrm{mol}$. Para $\Delta H$, era indispensável o sinal negativo e a unidade $\mathrm{kJ\,mol^{-1}}$.`,
        rejected: 'Não foram aceitas respostas sem resolução, sem a unidade mol no cálculo de H₂, sem o sinal negativo de ΔH ou sem a unidade correta kJ · mol⁻¹.',
        criteria: [
          { points: 1, text: tex`Calcula $0{,}02\ \mathrm{mol}$ de $\mathrm{H_2}$ a partir de 0,448 L nas CNTP.` },
          { points: 1, text: tex`Determina $\Delta H=-222\ \mathrm{kJ\,mol^{-1}}$ de lítio, com sinal e unidade corretos.` },
        ],
      },
    ],
    preview: 'Identifique Li⁺ e OH⁻ e calcule a quantidade de H₂ e a entalpia molar da reação.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova1-q03', number: 'Questão 03', subject: 'Química', content: 'Hidroponia: pH, dissociação iônica e condutividade', difficulty: 'Média',
    statement: tex`A hidroponia é uma técnica para cultivo de vegetais em que as raízes das plantas ficam suspensas e os nutrientes são fornecidos por meio de uma solução nutritiva líquida que circula entre essas raízes. Alguns fatores que os agricultores devem monitorar nessa solução nutritiva são o pH, que deve variar entre 5 e 6, e a condutividade elétrica da solução, fator que indica se a quantidade de nutrientes dissolvidos é adequada aos vegetais.

Um agricultor, ao preparar uma solução nutritiva para plantio de alface hidropônica, dissolveu 410 g de nitrato de cálcio ($\mathrm{Ca(NO_3)_2}$, $M=164\ \mathrm{g/mol}$) em um tanque de capacidade de 500 L, completando o volume com água até a capacidade total, e ajustou o pH da solução para 6.`, blockTypes: ['prose', 'prose'],
    parts: [
      {
        id: 'a', prompt: 'Determine, em mol/L, a concentração de íons H⁺ na solução nutritiva preparada pelo agricultor. Quantos mols de íons são liberados por mol de nitrato de cálcio dissolvido?', maxScore: 2,
        expected: tex`Como $[\mathrm{H^+}]=10^{-\mathrm{pH}}$, para pH 6, $\boxed{[\mathrm{H^+}]=10^{-6}\ \mathrm{mol/L}}$. A dissociação é $\mathrm{Ca(NO_3)_2\rightarrow Ca^{2+}+2NO_3^-}$; portanto, cada mol do sal libera $\boxed{3\ \mathrm{mol}\text{ de íons}}$.`,
        accepted: 'Era indispensável o sinal negativo no expoente de 10 e a unidade mol/L. Para a dissociação, foi aceita a expressão “libera 3 mols de íons”.',
        rejected: 'Não foram aceitas resposta sem unidade ou sem resolução e a formulação “3 íons”, em vez de 3 mols de íons por mol de sal.',
        criteria: [
          { points: 1, text: tex`Calcula $[\mathrm{H^+}]=10^{-6}\ \mathrm{mol/L}$.` },
          { points: 1, text: 'Escreve ou utiliza a dissociação do nitrato de cálcio e conclui que são liberados 3 mol de íons por mol do sal.' },
        ],
      },
      {
        id: 'b', prompt: 'Calcule, em mol/L, a concentração da solução de nitrato de cálcio preparada pelo agricultor. Por que a dissolução de um sal, como o Ca(NO₃)₂, aumenta a condutividade elétrica de uma solução?', maxScore: 2,
        expected: tex`A quantidade do sal é $n=410/164=2{,}5\ \mathrm{mol}$. Em 500 L, $C=2{,}5/500=\boxed{0{,}005\ \mathrm{mol/L}=5\times10^{-3}\ \mathrm{mol/L}}$. A dissolução e a dissociação do sal aumentam a quantidade de íons livres em solução; esses íons transportam carga e aumentam a condutividade elétrica.`,
        accepted: tex`Foram aceitas variações em notação científica, como $0{,}5\times10^{-2}\ \mathrm{mol/L}$, e explicações como “libera” ou “aumenta o número/a quantidade de íons em solução”.`,
        rejected: 'Não foram aceitas respostas sem resolução ou sem a unidade mol/L, nem a simples representação de íons sem explicar o aumento de partículas carregadas livres.',
        criteria: [
          { points: 1, text: tex`Calcula a concentração $0{,}005\ \mathrm{mol/L}$ de nitrato de cálcio.` },
          { points: 1, text: 'Relaciona a maior condutividade ao aumento de íons livres na solução.' },
        ],
      },
    ],
    preview: 'Calcule [H⁺] e a concentração do sal e explique dissociação e condutividade.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova1-q04', number: 'Questão 04', subject: 'Química', content: 'Alizarina: fórmula molecular, fenol e equilíbrio químico', difficulty: 'Média',
    statement: tex`A alizarina ($\mathrm{C_{14}H_xO_4}$) é um pigmento orgânico muito usado na indústria têxtil. Um dos pigmentos mais conhecidos derivados dessa molécula é chamado de vermelho da Turquia e consiste em uma combinação desse composto com o metal alumínio. Esse processo inicia-se com a desprotonação (perda de $\mathrm{H^+}$) desse pigmento, em meio alcalino com a presença de sulfato de alumínio ($\mathrm{Al_2(SO_4)_3}$) e carbonato de cálcio ($\mathrm{CaCO_3}$), formando o íon alizarinato, conforme equação:`, blockTypes: ['prose'],
    images: [img('p1-q04-alizarina.svg', 'Equação de desprotonação da alizarina: a estrutura neutra, com dois grupos OH fenólicos, entra em equilíbrio com o íon alizarinato, de duas cargas negativas, e y H⁺.')],
    parts: [
      {
        id: 'a', prompt: 'Qual é o valor de y na equação química? Qual é o valor de x na fórmula molecular da forma neutra da molécula de alizarina?', maxScore: 2,
        expected: tex`O alizarinato apresenta duas cargas negativas; logo, são liberados dois $\mathrm{H^+}$ e $\boxed{y=2}$. Pela contagem de hidrogênios da estrutura neutra, a alizarina tem fórmula $\mathrm{C_{14}H_8O_4}$; portanto, $\boxed{x=8}$.`,
        accepted: tex`Foram aceitas as apresentações $y=2$, $x=8$, “$2\mathrm{H^+}$” e “$\mathrm{H_8}$”, desde que cada valor estivesse associado à grandeza correta.`,
        rejected: 'Não foi aceita a resposta ambígua “2,8”, sem identificação dos valores.',
        criteria: [
          { points: 1, text: 'Determina y = 2 pela liberação de dois H⁺.' },
          { points: 1, text: 'Determina x = 8 na fórmula C₁₄H₈O₄.' },
        ],
      },
      {
        id: 'b', prompt: 'Nomeie a função orgânica desprotonada na formação do ânion alizarinato. Por que, com base no Princípio de Le Châtelier, o meio alcalino favorece a formação desse íon?', maxScore: 2,
        expected: tex`A função desprotonada é $\boxed{\text{fenol}}$, pois as hidroxilas estão ligadas diretamente ao anel aromático. Pelo Princípio de Le Châtelier, o meio alcalino consome os íons $\mathrm{H^+}$; pela redução da concentração de um produto, o equilíbrio desloca-se no sentido dos produtos, favorecendo a formação do alizarinato.`,
        accepted: 'Foram aceitas explicações que indicassem liberação/perda de H⁺ pela alizarina, deslocamento para a formação dos produtos ou aumento da produção do íon alizarinato.',
        rejected: 'Não foram aceitas “enol” ou “álcool” para a função, nem justificativas vagas ou incorretas baseadas apenas em “pH alcalino/básico” ou “pH alto”.',
        criteria: [
          { points: 1, text: 'Nomeia a função orgânica fenol.' },
          { points: 1, text: 'Explica que o consumo de H⁺ pela base desloca o equilíbrio para os produtos e favorece o alizarinato.' },
        ],
      },
    ],
    preview: 'Complete a equação da alizarina e explique o efeito do meio alcalino no equilíbrio.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova1-q05', number: 'Questão 05', subject: 'Biologia', content: 'Dengue: vetor, ciclo do mosquito e imunização', difficulty: 'Média',
    statement: 'Considere a charge do cartunista Alexandre Beck na página do Facebook @tirasarmandinho.', blockTypes: ['prose'],
    images: [img('p1-q05-charge-dengue.svg', 'Charge de Armandinho: uma personagem recomenda verificar se há água acumulada no quintal para evitar o mosquito da dengue; outra responde que também quer evitar o mosquito.')],
    parts: [
      {
        id: 'a', prompt: 'Por que, como consta no diálogo da charge, “ver se não tem água acumulada no quintal” é uma medida importante para “evitar o mosquito da dengue”? Qual é a função desse mosquito nos casos de dengue?', maxScore: 2,
        expected: 'A medida é importante porque o mosquito deposita seus ovos na água e suas larvas são aquáticas; eliminar água acumulada reduz os criadouros e a reprodução. Nos casos de dengue, o mosquito é o vetor, isto é, o agente transmissor do vírus.',
        accepted: 'Para a água: o mosquito bota ovos na água, a larva é aquática ou a reprodução ocorre na água. Para a função: vetor da doença, agente transmissor da dengue ou transmite a dengue.',
        rejected: 'Não foram aceitas formulações vagas como “a água contribui/facilita/ajuda na reprodução”, nem, para a função, “dissemina”, “prolifera”, “espalha a doença”, “contamina os humanos”, “é o hospedeiro/portador do vírus” ou “transporta o vírus”.',
        criteria: [
          { points: 1, text: 'Relaciona a água acumulada à postura de ovos, às larvas aquáticas ou à reprodução do mosquito.' },
          { points: 1, text: 'Identifica o mosquito como vetor ou agente transmissor da dengue.' },
        ],
      },
      {
        id: 'b', prompt: 'A Qdenga é uma vacina de vírus atenuado aprovada no Brasil para prevenir a dengue. Com relação à resposta imune, o que ocorre no organismo de uma pessoa depois que ela recebe essa vacina? Por que uma pessoa que recebe essa vacina fica imune à dengue?', maxScore: 2,
        expected: 'A vacina estimula imunização ativa, com produção de anticorpos específicos e formação de células de memória imunológica. Em contato posterior com o vírus, essas células permitem resposta mais rápida e intensa, com maior produção de anticorpos, conferindo proteção.',
        accepted: 'Para a resposta inicial: “produz anticorpos” ou “ocorre imunização ativa e formação de memória imunológica”.',
        rejected: 'Não foram aceitas apenas “a pessoa apresenta resposta imune” ou “a pessoa é estimulada a produzir células de defesa”, nem justificar a imunidade afirmando que a vacina é de DNA ou RNA.',
        criteria: [
          { points: 1, text: 'Indica produção de anticorpos e/ou imunização ativa com formação de memória após a vacina.' },
          { points: 1, text: 'Explica que as células de memória tornam a produção de anticorpos posterior maior e mais rápida.' },
        ],
      },
    ],
    preview: 'Relacione água parada ao ciclo do Aedes e explique vetor e memória imunológica.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova1-q06', number: 'Questão 06', subject: 'Biologia', content: 'Pequizeiros: polinização, mutualismo e conceito de espécie', difficulty: 'Média',
    statement: 'O pequizeiro apresenta diferentes estratégias de polinização, a depender do porte da planta. Enquanto o pequi arbóreo, típico do Centro-Oeste brasileiro, possui grandes flores predominantemente polinizadas por morcegos, o pequi-anão da Cuesta Paulista floresce próximo ao chão e apresenta flores pequenas polinizadas por abelhas. Além disso, características como o horário de abertura das flores, a morfologia floral e a composição do néctar também são determinantes do agente polinizador do pequizeiro.', blockTypes: ['prose'],
    parts: [
      {
        id: 'a', prompt: 'Que tipo de relação ecológica existe entre o pequizeiro e seus polinizadores? Como os morcegos contribuem para o processo de polinização das flores do pequi arbóreo?', maxScore: 2,
        expected: 'A relação é de mutualismo (ou protocooperação), pois a planta oferece recursos, como néctar, e o polinizador favorece sua reprodução. Ao visitar as flores, os morcegos transportam o pólen de uma flor até o estigma, a parte feminina, de outra flor.',
        criteria: [
          { points: 1, text: 'Identifica mutualismo ou protocooperação entre pequizeiro e polinizadores.' },
          { points: 1, text: 'Explica que os morcegos levam pólen de uma flor ao estigma de outra flor.' },
        ],
      },
      {
        id: 'b', prompt: 'De que modo as diferenças no tamanho das flores e na composição do néctar podem favorecer o isolamento reprodutivo entre o pequi arbóreo e o pequi-anão? Imagine que pesquisadores realizaram cruzamentos experimentais entre o pequi arbóreo e o pequi-anão e verificaram que os descendentes produzidos eram estéreis. Com base no conceito biológico de espécie, o que se conclui a partir desse resultado?', maxScore: 2,
        expected: 'As diferenças florais atraem polinizadores diferentes, de modo que um mesmo polinizador tende a não polinizar as duas formas, reduzindo o fluxo gênico e favorecendo o isolamento reprodutivo. Se os cruzamentos geram descendentes estéreis, conclui-se, pelo conceito biológico de espécie, que o pequi arbóreo e o pequi-anão pertencem a espécies diferentes.',
        accepted: 'Para o isolamento, foi aceita a ideia de que cada pequizeiro possui seu próprio agente polinizador.',
        rejected: 'Não foram aceitas apenas “os pequizeiros sofreram isolamento reprodutivo” ou “as espécies não são compatíveis”, sem explicar o mecanismo ou a conclusão exigida.',
        criteria: [
          { points: 1, text: 'Explica que polinizadores diferentes impedem ou reduzem a polinização cruzada entre as duas formas.' },
          { points: 1, text: 'Conclui que descendentes estéreis indicam espécies diferentes.' },
        ],
      },
    ],
    preview: 'Explique polinização cruzada, isolamento reprodutivo e descendência estéril nos pequizeiros.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova1-q07', number: 'Questão 07', subject: 'Biologia', content: 'Hemofilia A: manifestação, fator VIII e herança ligada ao X', difficulty: 'Difícil',
    statement: 'O heredograma apresenta um caso de hemofilia A em determinada família, condição recessiva ligada ao cromossomo X. Considere que, nessa família, há outras pessoas hemofílicas que não estão representadas no heredograma, de modo que esse caso de hemofilia A não resulta de mutação nova.', blockTypes: ['prose'],
    images: [img('p1-q07-heredograma-hemofilia.svg', 'Heredograma de três gerações: o homem II-1 é hemofílico e é irmão de II-2 e da mulher II-3; os pais são I-1 e I-2. A mulher II-3 e o homem II-4 têm as filhas III-1 e III-2.')],
    parts: [
      {
        id: 'a', prompt: 'Que manifestação grave e recorrente da doença apresentada pelo indivíduo II-1 faz com que ele necessite constantemente de transfusões sanguíneas? O alelo da hemofilia A, herdado pelo indivíduo II-1, leva à deficiência de qual substância no sangue?', maxScore: 2,
        expected: 'A manifestação é o sangramento recorrente (perda de sangue ou hemorragia). A hemofilia A decorre da deficiência do fator VIII de coagulação.',
        rejected: 'Não foi aceita apenas “o sangue não coagula” como descrição da manifestação grave e recorrente.',
        criteria: [
          { points: 1, text: 'Identifica sangramento, perda de sangue ou hemorragia recorrente.' },
          { points: 1, text: 'Indica deficiência do fator VIII de coagulação.' },
        ],
      },
      {
        id: 'b', prompt: 'Qual é a probabilidade de a pessoa II-3 ser portadora do alelo da hemofilia? Considerando que essa pessoa esteja grávida de um menino, qual é a probabilidade de essa criança nascer com hemofilia?', maxScore: 2,
        expected: tex`Como II-1 é um homem hemofílico e não houve mutação nova, ele recebeu o alelo de sua mãe I-2, que é necessariamente portadora. Cada filha desse casal, incluindo II-3, tem $\boxed{1/2=50\%}$ de probabilidade de ser portadora. Se II-3 estiver grávida de um menino, a probabilidade de hemofilia combina a chance de ela ser portadora ($1/2$) com a chance de transmitir o X afetado ao filho ($1/2$): $P=\frac12\cdot\frac12=\boxed{\frac14=25\%}$.`,
        rejected: 'Houve penalização quando a resposta apresentou qualquer indício de resolução errada, como não tratar a herança como ligada ao sexo, errar os cálculos ou montar incorretamente os cruzamentos.',
        criteria: [
          { points: 1, text: 'Deduz que I-2 é portadora e calcula 50% de probabilidade de II-3 ser portadora.' },
          { points: 1, text: 'Multiplica 1/2 de chance de II-3 ser portadora por 1/2 de transmissão do alelo ao menino e obtém 25%.' },
        ],
      },
    ],
    preview: 'Interprete o heredograma de hemofilia A e calcule as probabilidades para II-3 e seu filho.',
  },
  {
    ...shared,
    id: 'unifimestrindade2027-prova1-q08', number: 'Questão 08', subject: 'Biologia', content: 'Transporte de íons em neurônios e ATP', difficulty: 'Média',
    statement: 'A tabela apresenta concentrações iônicas dentro e fora de neurônios de mamíferos. Esses íons transitam entre os meios intracelular e extracelular com o auxílio de proteínas de membrana.', blockTypes: ['prose'],
    tables: [{
      ariaLabel: 'Concentrações intracelular e extracelular de potássio e sódio em neurônios de mamíferos, em milimolar',
      headerRows: [['Íon', 'Concentração intracelular (mM)', 'Concentração extracelular (mM)']],
      rows: [['Potássio (K⁺)', '140', '5'], ['Sódio (Na⁺)', '15', '150']],
    }],
    statementAfter: '(Lisa Urry et al. Biologia de Campbell, 2022. Adaptado.)', afterBlockTypes: ['source'],
    parts: [
      {
        id: 'a', prompt: 'Na membrana plasmática dos neurônios, há proteínas transportadoras denominadas canais de sódio por onde passam íons Na⁺. Quando esses canais se abrem, o Na⁺ tende a entrar na célula. De acordo com as informações da tabela, por que esse íon tende a se deslocar do meio extracelular para o meio intracelular e não no sentido contrário? Qual o tipo de transporte de membrana responsável por esse deslocamento?', maxScore: 2,
        expected: 'O Na⁺ se desloca a favor do gradiente de concentração, do meio extracelular, onde está mais concentrado (150 mM), para o intracelular, onde está menos concentrado (15 mM), tendendo ao equilíbrio das concentrações. Como atravessa um canal proteico sem gasto direto de ATP, o transporte é difusão facilitada.',
        accepted: 'Foram aceitas explicações como “o sódio vai do meio mais concentrado para o menos concentrado”, “desloca-se da solução hipertônica para a hipotônica” ou “busca o equilíbrio das concentrações”.',
        rejected: 'Não foram aceitas apenas as afirmações isoladas “o lado de fora é mais concentrado” ou “o lado de dentro é menos concentrado”, nem apenas “difusão” para o tipo de transporte.',
        criteria: [
          { points: 1, text: 'Relaciona a entrada do Na⁺ ao deslocamento a favor do gradiente, da maior para a menor concentração.' },
          { points: 1, text: 'Identifica o transporte como difusão facilitada.' },
        ],
      },
      {
        id: 'b', prompt: 'Embora a tendência natural do potássio seja sair da célula, como indicam os valores apresentados na tabela, em determinadas circunstâncias, o íon K⁺ se move no sentido oposto, contrariando essa tendência. Nessa situação, que tipo de transporte promove a entrada desse íon na célula? Como as mitocôndrias contribuem para que essa entrada ocorra?', maxScore: 2,
        expected: 'A entrada de K⁺ contra o gradiente ocorre por transporte ativo. Esse processo depende de energia fornecida por ATP, e as mitocôndrias contribuem produzindo ATP por meio da respiração celular.',
        rejected: 'Era indispensável relacionar a produção de ATP/energia pela mitocôndria à dependência de ATP do transporte ativo; na ausência dessa relação, não houve pontuação no segundo critério.',
        criteria: [
          { points: 1, text: 'Identifica o transporte contra o gradiente como transporte ativo.' },
          { points: 1, text: 'Relaciona as mitocôndrias à produção de ATP necessária ao transporte ativo.' },
        ],
      },
    ],
    preview: 'Compare difusão facilitada e transporte ativo no movimento de Na⁺ e K⁺.',
  },
];
