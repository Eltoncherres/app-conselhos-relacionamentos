// Dados dos conselhos de relacionamento (sem necessidade de API)

export interface AdviceCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  advices: Advice[];
}

export interface Advice {
  id: string;
  question: string;
  answer: string;
  tips: string[];
}

export const adviceCategories: AdviceCategory[] = [
  {
    id: "conquistar-garota",
    title: "Como Conquistar uma Garota",
    icon: "💝",
    description: "Dicas para conquistar o coração dela",
    advices: [
      {
        id: "1",
        question: "Como iniciar uma conversa?",
        answer: "A chave é ser autêntico e mostrar interesse genuíno. Comece com um elogio sincero ou uma pergunta sobre algo que ela goste. Evite frases prontas e seja você mesmo.",
        tips: [
          "Seja confiante, mas não arrogante",
          "Faça perguntas abertas que incentivem conversa",
          "Preste atenção no que ela diz",
          "Sorria e mantenha contato visual",
          "Mostre interesse genuíno pelos hobbies dela",
          "Evite falar só de você o tempo todo",
          "Use humor de forma natural e leve",
          "Respeite o espaço pessoal dela"
        ]
      },
      {
        id: "2",
        question: "Quando devo chamar para sair?",
        answer: "O timing é importante. Espere estabelecer uma conexão básica através de conversas, mas não demore demais. Geralmente, após 2-3 conversas interessantes, é um bom momento.",
        tips: [
          "Escolha um lugar confortável para ambos",
          "Seja específico na proposta (dia, hora, local)",
          "Tenha um plano B caso ela esteja ocupada",
          "Demonstre que pensou no convite",
          "Aceite um 'não' com elegância",
          "Não insista se ela recusar",
          "Mostre entusiasmo, mas não desespero",
          "Considere os interesses dela ao escolher o local"
        ]
      },
      {
        id: "3",
        question: "Como manter o interesse dela?",
        answer: "Mantenha o equilíbrio entre presença e espaço. Seja atencioso, mas não sufocante. Continue sendo a pessoa interessante que ela conheceu.",
        tips: [
          "Mantenha sua vida e hobbies próprios",
          "Surpreenda com pequenos gestos",
          "Seja consistente em suas ações",
          "Comunique-se de forma clara e honesta",
          "Respeite o espaço pessoal dela",
          "Continue se desenvolvendo como pessoa",
          "Não mude completamente quem você é",
          "Demonstre que tem objetivos e ambições"
        ]
      },
      {
        id: "4",
        question: "Como demonstrar interesse sem parecer desesperado?",
        answer: "O segredo está no equilíbrio. Demonstre interesse através de ações consistentes, mas mantenha sua independência e vida própria. Não esteja sempre disponível imediatamente.",
        tips: [
          "Responda mensagens, mas não instantaneamente sempre",
          "Tenha seus próprios planos e compromissos",
          "Seja atencioso sem ser invasivo",
          "Demonstre interesse genuíno, não necessidade",
          "Mantenha suas amizades e hobbies",
          "Não cancele seus planos sempre por ela",
          "Mostre que tem uma vida interessante",
          "Seja consistente, mas não previsível demais"
        ]
      },
      {
        id: "5",
        question: "Qual o melhor tipo de primeiro encontro?",
        answer: "O melhor primeiro encontro é aquele que permite conversa e conexão. Evite cinemas ou lugares muito barulhentos. Prefira cafés, parques ou atividades leves onde vocês possam conversar.",
        tips: [
          "Escolha um lugar público e confortável",
          "Prefira ambientes que permitam conversa",
          "Considere os interesses dela na escolha",
          "Tenha um plano, mas seja flexível",
          "Mantenha o encontro entre 1-2 horas inicialmente",
          "Escolha um horário conveniente para ambos",
          "Tenha opções de backup caso algo dê errado",
          "Seja pontual e bem apresentado"
        ]
      },
      {
        id: "6",
        question: "Como fazer elogios que realmente impressionem?",
        answer: "Elogios genuínos e específicos são muito mais impactantes que genéricos. Observe detalhes únicos dela e comente sobre características além da aparência física.",
        tips: [
          "Elogie características únicas dela",
          "Vá além da aparência física",
          "Seja específico nos elogios",
          "Elogie conquistas e habilidades",
          "Demonstre que você realmente presta atenção",
          "Evite elogios exagerados ou falsos",
          "Elogie o estilo e personalidade dela",
          "Seja sincero e natural"
        ]
      },
      {
        id: "7",
        question: "Como usar as redes sociais a meu favor?",
        answer: "Redes sociais podem ser aliadas se usadas com inteligência. Interaja de forma natural, mostre sua vida interessante, mas não seja invasivo ou excessivo.",
        tips: [
          "Curta e comente posts dela ocasionalmente",
          "Não seja o primeiro a curtir tudo sempre",
          "Compartilhe conteúdo interessante no seu perfil",
          "Evite stalking excessivo",
          "Use stories para mostrar sua vida",
          "Não envie mensagens diretas excessivas",
          "Seja autêntico nas suas postagens",
          "Respeite a privacidade dela"
        ]
      },
      {
        id: "8",
        question: "Quais erros devo evitar ao conquistar?",
        answer: "Evite comportamentos que demonstrem insegurança, desespero ou falta de respeito. Seja autêntico, confiante e respeitoso sempre.",
        tips: [
          "Não minta sobre quem você é",
          "Evite falar mal de ex-namoradas",
          "Não seja pegajoso ou insistente demais",
          "Não tente impressionar com mentiras",
          "Evite ser arrogante ou prepotente",
          "Não desrespeite os limites dela",
          "Não force intimidade muito cedo",
          "Evite joguinhos mentais"
        ]
      }
    ]
  },
  {
    id: "conquistar-rapaz",
    title: "Como Conquistar um Rapaz",
    icon: "💖",
    description: "Estratégias para conquistar ele",
    advices: [
      {
        id: "9",
        question: "Como chamar a atenção dele?",
        answer: "Homens valorizam autenticidade e confiança. Seja você mesma, mostre interesse genuíno e não tenha medo de tomar iniciativa de forma sutil.",
        tips: [
          "Seja confiante e autêntica",
          "Elogie algo específico sobre ele",
          "Mostre interesse nos hobbies dele",
          "Use humor de forma natural",
          "Mantenha contato visual e sorria",
          "Vista-se de forma que você se sinta bem",
          "Demonstre inteligência e personalidade",
          "Seja misteriosa, mas não distante"
        ]
      },
      {
        id: "10",
        question: "Devo tomar a iniciativa?",
        answer: "Sim! Muitos homens apreciam quando a mulher demonstra interesse. Não há problema em dar o primeiro passo, desde que seja de forma natural e respeitosa.",
        tips: [
          "Seja clara, mas não agressiva",
          "Demonstre interesse através de conversas",
          "Convide para algo casual primeiro",
          "Seja paciente e observe os sinais",
          "Mantenha sua dignidade sempre",
          "Não tenha medo de rejeição",
          "Seja direta quando apropriado",
          "Mostre confiança na sua abordagem"
        ]
      },
      {
        id: "11",
        question: "Como saber se ele está interessado?",
        answer: "Observe os sinais: ele procura conversar, faz perguntas sobre você, lembra de detalhes que você contou, e faz esforço para estar presente.",
        tips: [
          "Ele busca contato frequente",
          "Presta atenção no que você diz",
          "Faz planos para se encontrarem",
          "Apresenta você aos amigos",
          "Demonstra ciúmes saudável",
          "Faz esforço para impressionar você",
          "Lembra de coisas que você mencionou",
          "Procura motivos para conversar"
        ]
      },
      {
        id: "12",
        question: "Como criar conexão emocional com ele?",
        answer: "Homens também valorizam conexão emocional, embora possam expressar diferente. Seja uma boa ouvinte, compartilhe vulnerabilidades de forma gradual e mostre apoio genuíno.",
        tips: [
          "Ouça ativamente quando ele falar",
          "Não julgue seus sentimentos ou hobbies",
          "Compartilhe suas próprias experiências",
          "Apoie seus objetivos e sonhos",
          "Seja paciente com o ritmo emocional dele",
          "Mostre interesse genuíno pela vida dele",
          "Seja vulnerável de forma gradual",
          "Crie momentos de intimidade emocional"
        ]
      },
      {
        id: "13",
        question: "Quais erros evitar ao conquistar um homem?",
        answer: "Evite jogos mentais, excesso de ciúmes sem motivo, comparações com ex-namorados, e pressão excessiva para definir o relacionamento muito cedo.",
        tips: [
          "Não faça joguinhos ou teste constantemente",
          "Evite falar demais de ex-relacionamentos",
          "Não seja possessiva logo no início",
          "Não pressione por definições muito cedo",
          "Mantenha sua independência e autoestima",
          "Evite ser carente ou dramática",
          "Não mude completamente por ele",
          "Não ignore seus próprios valores"
        ]
      },
      {
        id: "14",
        question: "Como usar a linguagem corporal a meu favor?",
        answer: "A linguagem corporal comunica muito. Mantenha postura confiante, sorria genuinamente, faça contato visual e use toques sutis quando apropriado.",
        tips: [
          "Mantenha postura ereta e confiante",
          "Sorria de forma genuína e calorosa",
          "Faça contato visual sem ser intimidadora",
          "Use toques leves e casuais",
          "Incline-se levemente quando conversar",
          "Espelhe sutilmente a linguagem corporal dele",
          "Mostre interesse através de gestos",
          "Seja expressiva, mas natural"
        ]
      },
      {
        id: "15",
        question: "Como manter o mistério sem ser distante?",
        answer: "O equilíbrio entre ser acessível e manter mistério é atrativo. Não conte tudo de uma vez, mantenha sua vida própria e deixe-o curioso para saber mais.",
        tips: [
          "Não revele tudo sobre você imediatamente",
          "Mantenha hobbies e interesses próprios",
          "Seja imprevisível ocasionalmente",
          "Não esteja sempre disponível",
          "Deixe-o com vontade de saber mais",
          "Mantenha sua vida social ativa",
          "Seja interessante e multifacetada",
          "Não seja um livro aberto desde o início"
        ]
      },
      {
        id: "16",
        question: "Como lidar com a timidez ao conquistar?",
        answer: "Timidez pode ser charmosa, mas não deixe que impeça você de demonstrar interesse. Comece com pequenos passos e vá ganhando confiança gradualmente.",
        tips: [
          "Comece com sorrisos e contato visual",
          "Pratique conversas casuais primeiro",
          "Use mensagens se for mais confortável inicialmente",
          "Lembre-se que rejeição não é o fim do mundo",
          "Trabalhe na sua autoconfiança",
          "Peça ajuda de amigas se necessário",
          "Celebre pequenas vitórias",
          "Seja gentil consigo mesma"
        ]
      }
    ]
  },
  {
    id: "namorados",
    title: "Conselhos para Namorados",
    icon: "💑",
    description: "Fortaleça seu relacionamento",
    advices: [
      {
        id: "17",
        question: "Como manter a chama acesa?",
        answer: "A rotina pode esfriar qualquer relacionamento. É essencial criar momentos especiais, surpreender o parceiro e continuar investindo na conexão emocional.",
        tips: [
          "Planeje encontros surpresa",
          "Mantenha a comunicação aberta",
          "Demonstre afeto físico regularmente",
          "Crie rituais especiais do casal",
          "Invista em intimidade emocional e física",
          "Experimente coisas novas juntos",
          "Mantenha o flerte vivo",
          "Celebrem pequenas conquistas",
          "Enviem mensagens carinhosas durante o dia",
          "Façam viagens e passeios juntos"
        ]
      },
      {
        id: "18",
        question: "Como lidar com brigas?",
        answer: "Conflitos são normais, mas a forma como você lida com eles define a saúde do relacionamento. Nunca brigue para vencer, brigue para resolver.",
        tips: [
          "Evite gritar ou ofender",
          "Ouça ativamente o ponto de vista do outro",
          "Use 'eu sinto' em vez de 'você sempre'",
          "Não traga problemas do passado",
          "Saiba quando fazer uma pausa",
          "Peça desculpas quando errar",
          "Foque no problema, não na pessoa",
          "Não vá dormir brigados",
          "Evite brigar em público",
          "Busque soluções, não culpados"
        ]
      },
      {
        id: "19",
        question: "Quanto espaço é saudável?",
        answer: "Espaço individual é fundamental. Um relacionamento saudável permite que ambos mantenham suas identidades, amizades e hobbies próprios.",
        tips: [
          "Mantenha seus hobbies pessoais",
          "Cultive amizades fora do relacionamento",
          "Respeite o tempo sozinho do parceiro",
          "Não abandone seus objetivos pessoais",
          "Confie e dê liberdade",
          "Tenha momentos com amigos separadamente",
          "Apoie os interesses individuais",
          "Não seja possessivo ou controlador",
          "Entenda que espaço não é falta de amor",
          "Mantenha sua independência emocional"
        ]
      },
      {
        id: "20",
        question: "Como lidar com ciúmes no relacionamento?",
        answer: "Ciúmes em excesso é tóxico, mas um pouco é natural. A chave é comunicação aberta, confiança mútua e estabelecer limites saudáveis juntos.",
        tips: [
          "Converse sobre inseguranças abertamente",
          "Estabeleçam limites juntos e respeitem",
          "Não alimente ciúmes desnecessários",
          "Trabalhe na autoconfiança individual",
          "Seja transparente sobre amizades",
          "Busque ajuda se o ciúme for excessivo",
          "Não use ciúmes para manipular",
          "Respeite o passado do parceiro",
          "Evite situações que causem desconforto desnecessário",
          "Construam confiança através de ações"
        ]
      },
      {
        id: "21",
        question: "Como manter o romance vivo?",
        answer: "Romance não morre, ele precisa ser cultivado. Pequenos gestos diários valem mais que grandes demonstrações esporádicas.",
        tips: [
          "Envie mensagens carinhosas durante o dia",
          "Planeje dates regulares, mesmo simples",
          "Surpreenda com pequenos presentes",
          "Elogie e demonstre admiração",
          "Mantenha o flerte vivo",
          "Celebrem conquistas juntos",
          "Façam coisas que faziam no início",
          "Demonstre afeto físico constantemente",
          "Lembrem-se de datas importantes",
          "Criem memórias especiais juntos"
        ]
      },
      {
        id: "22",
        question: "Como equilibrar relacionamento e vida pessoal?",
        answer: "O equilíbrio é essencial para um relacionamento saudável. Não abandone sua vida pessoal, mas também invista tempo de qualidade no relacionamento.",
        tips: [
          "Mantenha seus objetivos profissionais",
          "Reserve tempo para amigos e família",
          "Não cancele compromissos sempre pelo parceiro",
          "Comunique suas necessidades claramente",
          "Planeje tempo de qualidade juntos",
          "Respeite os compromissos do parceiro",
          "Apoiem as ambições um do outro",
          "Encontrem hobbies em comum",
          "Mantenham identidades individuais",
          "Sejam flexíveis e compreensivos"
        ]
      },
      {
        id: "23",
        question: "Como lidar com diferenças de opinião?",
        answer: "Diferenças são naturais e podem enriquecer o relacionamento. O importante é respeitar, ouvir e encontrar pontos de convergência.",
        tips: [
          "Respeite opiniões diferentes",
          "Não tente mudar o parceiro",
          "Ouça para entender, não para rebater",
          "Encontrem compromissos quando necessário",
          "Aceitem que nem sempre vão concordar",
          "Não transformem tudo em debate",
          "Valorizem as diferenças",
          "Foquem no que têm em comum",
          "Sejam tolerantes e pacientes",
          "Aprendam com as perspectivas diferentes"
        ]
      },
      {
        id: "24",
        question: "Como manter a comunicação saudável?",
        answer: "Comunicação é a base de qualquer relacionamento. Seja honesto, claro e respeitoso. Fale sobre sentimentos, necessidades e expectativas regularmente.",
        tips: [
          "Conversem sobre o dia de cada um",
          "Expressem sentimentos abertamente",
          "Não guardem ressentimentos",
          "Sejam honestos, mas gentis",
          "Ouçam ativamente sem interromper",
          "Validem os sentimentos do parceiro",
          "Evitem suposições, perguntem",
          "Façam check-ins regulares do relacionamento",
          "Não usem silêncio como punição",
          "Sejam claros sobre expectativas"
        ]
      }
    ]
  },
  {
    id: "casais",
    title: "Conselhos para Casais",
    icon: "💍",
    description: "Relacionamentos duradouros e felizes",
    advices: [
      {
        id: "25",
        question: "Como fortalecer a parceria?",
        answer: "Casais fortes funcionam como equipe. Compartilhem responsabilidades, decisões e sonhos. Apoiem-se mutuamente nos desafios.",
        tips: [
          "Tomem decisões importantes juntos",
          "Dividam tarefas de forma justa",
          "Apoiem os sonhos um do outro",
          "Celebrem conquistas juntos",
          "Enfrentem problemas como equipe",
          "Sejam parceiros, não competidores",
          "Compartilhem responsabilidades financeiras",
          "Planejem o futuro juntos",
          "Sejam o porto seguro um do outro",
          "Trabalhem em objetivos comuns"
        ]
      },
      {
        id: "26",
        question: "Como manter a intimidade?",
        answer: "Intimidade vai além do físico. É sobre conexão emocional, vulnerabilidade e cumplicidade. Invistam tempo de qualidade juntos regularmente.",
        tips: [
          "Conversem sobre sentimentos profundos",
          "Mantenham encontros regulares",
          "Sejam vulneráveis um com o outro",
          "Pratiquem afeto físico diário",
          "Criem momentos só de vocês dois",
          "Compartilhem medos e sonhos",
          "Mantenham a vida sexual ativa",
          "Demonstrem carinho constantemente",
          "Sejam melhores amigos",
          "Cultivem cumplicidade"
        ]
      },
      {
        id: "27",
        question: "Como lidar com a rotina?",
        answer: "A rotina pode ser confortável, mas não deve ser entediante. Quebrem padrões, experimentem coisas novas juntos e mantenham a curiosidade um pelo outro.",
        tips: [
          "Experimentem novos hobbies juntos",
          "Viajem para lugares diferentes",
          "Mudem a rotina de vez em quando",
          "Surpreendam um ao outro",
          "Continuem aprendendo sobre o parceiro",
          "Façam dates temáticos",
          "Tentem novas experiências",
          "Criem tradições especiais",
          "Mantenham o elemento surpresa",
          "Não deixem o relacionamento no piloto automático"
        ]
      },
      {
        id: "28",
        question: "Como lidar com diferenças financeiras?",
        answer: "Dinheiro é uma das maiores causas de conflito. Transparência, planejamento conjunto e respeito às diferenças são fundamentais.",
        tips: [
          "Conversem abertamente sobre finanças",
          "Estabeleçam objetivos financeiros juntos",
          "Respeitem estilos diferentes de gastar",
          "Tenham contas conjuntas E individuais",
          "Planejem o futuro financeiro juntos",
          "Não usem dinheiro como arma em brigas",
          "Sejam transparentes sobre dívidas",
          "Tomem decisões grandes juntos",
          "Respeitem o trabalho um do outro",
          "Apoiem-se em dificuldades financeiras"
        ]
      },
      {
        id: "29",
        question: "Como manter individualidade no relacionamento?",
        answer: "Um relacionamento saudável é feito de dois indivíduos completos, não duas metades. Mantenham identidades próprias enquanto constroem algo juntos.",
        tips: [
          "Mantenham hobbies e interesses próprios",
          "Cultivem amizades individuais",
          "Tenham tempo sozinho regularmente",
          "Apoiem o crescimento individual do outro",
          "Não abandonem sonhos pessoais",
          "Celebrem as diferenças entre vocês",
          "Respeitem a necessidade de espaço",
          "Não percam sua essência",
          "Cresçam juntos, mas também individualmente",
          "Sejam completos sozinhos e melhores juntos"
        ]
      },
      {
        id: "30",
        question: "Como lidar com famílias e sogros?",
        answer: "Famílias podem ser fonte de alegria ou conflito. Estabeleçam limites saudáveis, sejam uma equipe e respeitem as famílias um do outro.",
        tips: [
          "Estabeleçam limites claros com famílias",
          "Sejam uma equipe nas decisões familiares",
          "Respeitem as famílias um do outro",
          "Não falem mal da família do parceiro",
          "Defendam o parceiro quando necessário",
          "Equilibrem tempo com ambas as famílias",
          "Não deixem famílias interferirem demais",
          "Sejam diplomáticos em conflitos",
          "Criem tradições próprias como casal",
          "Comuniquem-se sobre expectativas familiares"
        ]
      },
      {
        id: "31",
        question: "Como planejar o futuro juntos?",
        answer: "Planejar o futuro fortalece o relacionamento. Conversem sobre objetivos, sonhos e expectativas. Alinhem visões e trabalhem juntos para realizá-las.",
        tips: [
          "Conversem sobre objetivos de vida",
          "Alinhem expectativas sobre filhos",
          "Planejem finanças de longo prazo",
          "Discutam onde querem morar",
          "Falem sobre carreira e ambições",
          "Estabeleçam metas como casal",
          "Sejam flexíveis com mudanças de planos",
          "Apoiem os sonhos um do outro",
          "Revisitem planos regularmente",
          "Construam uma visão compartilhada"
        ]
      },
      {
        id: "32",
        question: "Como manter o respeito mútuo?",
        answer: "Respeito é a base de qualquer relacionamento duradouro. Valorizem um ao outro, honrem diferenças e nunca desrespeitem, especialmente em público.",
        tips: [
          "Nunca desrespeitem em público",
          "Valorizem as opiniões do parceiro",
          "Não diminuam as conquistas do outro",
          "Respeitem limites e privacidade",
          "Honrem compromissos e promessas",
          "Não usem fraquezas como arma",
          "Sejam gentis mesmo em conflitos",
          "Admirem as qualidades do parceiro",
          "Tratem-se com dignidade sempre",
          "Defendam a reputação um do outro"
        ]
      }
    ]
  },
  {
    id: "crises",
    title: "Superando Crises",
    icon: "🌟",
    description: "Navegando momentos difíceis",
    advices: [
      {
        id: "33",
        question: "Como saber se vale a pena continuar?",
        answer: "Pergunte-se: há respeito mútuo? Vocês ainda se importam? Estão dispostos a trabalhar juntos? Se sim, vale a pena lutar. Se não, talvez seja hora de repensar.",
        tips: [
          "Avalie se há respeito mútuo",
          "Verifique se ambos querem resolver",
          "Considere buscar terapia de casal",
          "Identifique padrões tóxicos",
          "Seja honesto sobre seus sentimentos",
          "Pense no que te faz ficar",
          "Avalie se há amor ou apenas hábito",
          "Considere se vocês crescem juntos",
          "Reflita sobre felicidade vs. conforto",
          "Ouça sua intuição"
        ]
      },
      {
        id: "34",
        question: "Como reconstruir a confiança?",
        answer: "Reconstruir confiança leva tempo e exige transparência total, paciência e ações consistentes. Não há atalhos, mas é possível com comprometimento de ambos.",
        tips: [
          "Seja totalmente transparente",
          "Cumpra suas promessas sempre",
          "Tenha paciência com o processo",
          "Comunique-se constantemente",
          "Demonstre mudança através de ações",
          "Considere ajuda profissional",
          "Não esconda nada, mesmo pequeno",
          "Seja consistente no comportamento",
          "Permita verificação sem se ofender",
          "Entenda que leva tempo"
        ]
      },
      {
        id: "35",
        question: "Quando procurar ajuda profissional?",
        answer: "Se vocês não conseguem resolver sozinhos, se há padrões destrutivos repetitivos, ou se a comunicação está quebrada, é hora de buscar um terapeuta de casal.",
        tips: [
          "Não espere a situação piorar",
          "Terapia não é sinal de fracasso",
          "Ambos devem estar dispostos",
          "Seja honesto nas sessões",
          "Aplique o que aprenderem",
          "Não use terapia como última tentativa apenas",
          "Escolham um terapeuta juntos",
          "Comprometam-se com o processo",
          "Sejam pacientes com resultados",
          "Façam o trabalho entre sessões"
        ]
      },
      {
        id: "36",
        question: "Como superar uma traição?",
        answer: "Superar traição é um dos maiores desafios. Requer perdão genuíno, transparência total, tempo e muito trabalho de ambas as partes. Nem sempre é possível ou saudável continuar.",
        tips: [
          "Permita-se sentir todas as emoções",
          "Exija transparência total do parceiro",
          "Estabeleçam novos limites claros",
          "Considere terapia individual e de casal",
          "Não tome decisões precipitadas",
          "Avalie se há arrependimento genuíno",
          "Perdoe apenas se realmente conseguir",
          "Não use a traição como arma depois",
          "Decida se consegue confiar novamente",
          "Priorize sua saúde mental"
        ]
      },
      {
        id: "37",
        question: "Como lidar com a perda de paixão?",
        answer: "A paixão inicial naturalmente diminui, mas pode ser reacendida. O amor maduro é diferente, mas pode ser igualmente intenso com esforço consciente.",
        tips: [
          "Entendam que é normal a paixão mudar",
          "Invistam em novidades e surpresas",
          "Priorizem intimidade física e emocional",
          "Façam coisas que faziam no início",
          "Trabalhem na atração mútua",
          "Considerem terapia sexual se necessário",
          "Não comparem com o início do relacionamento",
          "Criem novas memórias juntos",
          "Invistam em si mesmos também",
          "Comuniquem desejos e necessidades"
        ]
      },
      {
        id: "38",
        question: "Como lidar com problemas de comunicação?",
        answer: "Comunicação quebrada é sintoma de problemas maiores. Aprendam a ouvir verdadeiramente, expressem-se claramente e busquem entender antes de serem entendidos.",
        tips: [
          "Pratiquem escuta ativa",
          "Usem 'eu sinto' em vez de acusações",
          "Escolham momentos apropriados para conversas sérias",
          "Evitem interromper um ao outro",
          "Validem os sentimentos do parceiro",
          "Sejam claros e diretos",
          "Não presumam, perguntem",
          "Façam check-ins regulares",
          "Busquem ajuda se não conseguirem sozinhos",
          "Pratiquem empatia constantemente"
        ]
      },
      {
        id: "39",
        question: "Como superar momentos de distanciamento?",
        answer: "Distanciamento emocional pode acontecer por estresse, rotina ou problemas não resolvidos. Reconheçam o problema, conversem abertamente e façam esforço consciente para reconectar.",
        tips: [
          "Reconheçam o distanciamento sem culpa",
          "Conversem sobre o que sentem",
          "Identifiquem as causas do afastamento",
          "Façam esforço consciente para reconectar",
          "Priorizem tempo de qualidade juntos",
          "Retomem atividades que faziam juntos",
          "Sejam pacientes com o processo",
          "Demonstrem afeto mesmo sem vontade inicial",
          "Busquem ajuda se necessário",
          "Não deixem o distanciamento virar padrão"
        ]
      },
      {
        id: "40",
        question: "Como lidar com diferenças irreconciliáveis?",
        answer: "Algumas diferenças não podem ser resolvidas. Avaliem se são deal-breakers ou se podem coexistir. Nem todo relacionamento deve continuar, e tudo bem.",
        tips: [
          "Identifiquem quais diferenças são fundamentais",
          "Avaliem se conseguem viver com elas",
          "Não tentem mudar o essencial do outro",
          "Sejam honestos sobre deal-breakers",
          "Considerem se há compatibilidade real",
          "Não prolonguem o inevitável",
          "Respeitem se não houver solução",
          "Priorizem felicidade de longo prazo",
          "Não tenham medo de terminar se necessário",
          "Busquem orientação profissional"
        ]
      }
    ]
  },
  {
    id: "pos-termino-namoro",
    title: "Superando Término de Namoro",
    icon: "💔",
    description: "Como se recuperar após o fim do namoro",
    advices: [
      {
        id: "41",
        question: "Como lidar com a dor inicial do término?",
        answer: "A dor do término é real e válida. Permita-se sentir, chore se precisar, mas não se perca na tristeza. É um processo de luto que requer tempo e autocuidado.",
        tips: [
          "Permita-se sentir todas as emoções",
          "Chore quando precisar, não reprima",
          "Não tome decisões importantes imediatamente",
          "Cerque-se de pessoas que te apoiam",
          "Evite contato com o ex nos primeiros dias",
          "Cuide da sua saúde física e mental",
          "Não se culpe excessivamente",
          "Aceite que a dor é temporária",
          "Busque ajuda profissional se necessário",
          "Seja gentil consigo mesmo"
        ]
      },
      {
        id: "42",
        question: "Devo manter contato com meu ex?",
        answer: "No início, é melhor evitar contato para processar o término. Amizade pode ser possível no futuro, mas apenas quando ambos estiverem verdadeiramente superados.",
        tips: [
          "Faça no contact por pelo menos 30 dias",
          "Bloqueie ou silencie nas redes sociais",
          "Não stalkear perfis ou vida do ex",
          "Evite lugares que frequentavam juntos",
          "Não responda mensagens impulsivas",
          "Delete fotos e lembranças dolorosas",
          "Resista à tentação de ligar bêbado",
          "Foque em sua própria cura",
          "Amizade só quando ambos superarem",
          "Respeite se o ex não quiser contato"
        ]
      },
      {
        id: "43",
        question: "Como evitar voltar para um relacionamento tóxico?",
        answer: "A saudade pode distorcer memórias. Lembre-se dos motivos reais do término, não apenas dos bons momentos. Relacionamentos tóxicos raramente mudam.",
        tips: [
          "Liste os motivos reais do término",
          "Lembre-se dos momentos ruins, não só dos bons",
          "Converse com amigos sobre a realidade",
          "Não idealize o relacionamento",
          "Reconheça padrões tóxicos",
          "Entenda que saudade não é amor",
          "Não acredite em promessas vazias de mudança",
          "Valorize sua paz mental",
          "Bloqueie se necessário para resistir",
          "Busque terapia para entender padrões"
        ]
      },
      {
        id: "44",
        question: "Como reconstruir minha autoestima após o término?",
        answer: "Términos podem abalar a autoestima. Reconecte-se consigo mesmo, redescubra seus valores e lembre-se que você é completo sozinho.",
        tips: [
          "Faça lista de suas qualidades",
          "Invista em autocuidado diário",
          "Retome hobbies que abandonou",
          "Estabeleça e alcance pequenas metas",
          "Cerque-se de pessoas positivas",
          "Pratique exercícios físicos",
          "Cuide da aparência para você mesmo",
          "Celebre pequenas conquistas",
          "Não compare com o ex ou nova pessoa dele",
          "Trabalhe no amor próprio constantemente"
        ]
      },
      {
        id: "45",
        question: "Quanto tempo leva para superar um término?",
        answer: "Não há prazo fixo. Depende da duração do relacionamento, intensidade e circunstâncias. Respeite seu próprio ritmo, mas não se acomode na dor.",
        tips: [
          "Não há prazo certo, cada um tem seu tempo",
          "Regra geral: metade do tempo do relacionamento",
          "Não se compare com outros",
          "Permita-se curar no seu ritmo",
          "Mas não se acomode na tristeza",
          "Busque evolução gradual",
          "Tenha dias ruins, mas não semanas ruins",
          "Celebre pequenos progressos",
          "Não force superar antes da hora",
          "Busque ajuda se estagnar muito tempo"
        ]
      },
      {
        id: "46",
        question: "Como lidar com a solidão após o término?",
        answer: "A solidão é uma das partes mais difíceis. Aprenda a diferença entre estar sozinho e sentir-se solitário. Use esse tempo para se reconectar consigo mesmo.",
        tips: [
          "Aprenda a apreciar sua própria companhia",
          "Não preencha o vazio com qualquer pessoa",
          "Reconecte-se com amigos e família",
          "Desenvolva novos hobbies",
          "Faça atividades que sempre quis",
          "Pratique meditação e mindfulness",
          "Não tenha medo de sair sozinho",
          "Use o tempo para autoconhecimento",
          "Não confunda solidão com necessidade de voltar",
          "Construa uma vida que você ame sozinho"
        ]
      },
      {
        id: "47",
        question: "Como lidar quando o ex já está com outra pessoa?",
        answer: "Ver o ex com outra pessoa dói, mas não significa que você foi substituível. Cada relacionamento é único. Foque em sua própria cura, não na vida dele.",
        tips: [
          "Não compare você com a nova pessoa",
          "Entenda que não foi substituição",
          "Evite stalking nas redes sociais",
          "Não tente competir ou provar algo",
          "Lembre-se: grama do vizinho sempre parece mais verde",
          "Foque em sua própria vida",
          "Não deseje mal ao ex",
          "Use como motivação para seguir em frente",
          "Bloqueie se for muito doloroso ver",
          "Seu valor não diminui pela escolha de outro"
        ]
      },
      {
        id: "48",
        question: "Quando estou pronto para um novo relacionamento?",
        answer: "Você está pronto quando consegue pensar no ex sem dor intensa, quando está feliz sozinho e quando busca companhia por desejo, não por necessidade.",
        tips: [
          "Não use novo relacionamento para esquecer o ex",
          "Esteja feliz sozinho primeiro",
          "Não compare novas pessoas com o ex",
          "Tenha superado a fase de luto",
          "Não busque relacionamento por solidão",
          "Esteja aberto a conhecer alguém diferente",
          "Não carregue bagagens do passado",
          "Tenha aprendido com erros anteriores",
          "Esteja emocionalmente disponível",
          "Não tenha expectativas de encontrar 'o ex melhorado'"
        ]
      },
      {
        id: "49",
        question: "Como evitar cometer os mesmos erros?",
        answer: "Reflexão é essencial. Analise o que deu errado, sua parte na situação e padrões que se repetem. Crescimento vem de autoconhecimento.",
        tips: [
          "Reflita sobre sua parte no término",
          "Identifique padrões que se repetem",
          "Trabalhe em suas questões pessoais",
          "Não culpe apenas o ex",
          "Aprenda com os erros",
          "Busque terapia para autoconhecimento",
          "Estabeleça limites mais claros",
          "Reconheça red flags mais cedo",
          "Não ignore sinais de incompatibilidade",
          "Cresça com a experiência"
        ]
      },
      {
        id: "50",
        question: "Como transformar a dor em crescimento?",
        answer: "Todo término, por mais doloroso, é oportunidade de crescimento. Use a experiência para se conhecer melhor, fortalecer-se e evoluir como pessoa.",
        tips: [
          "Veja o término como oportunidade, não fracasso",
          "Use o tempo para autodesenvolvimento",
          "Invista em você: cursos, hobbies, saúde",
          "Fortaleça relacionamentos com amigos e família",
          "Trabalhe em objetivos pessoais",
          "Pratique gratidão pelo que aprendeu",
          "Desenvolva inteligência emocional",
          "Torne-se a melhor versão de si mesmo",
          "Não deixe a dor te definir",
          "Saia mais forte e sábio da experiência"
        ]
      }
    ]
  },
  {
    id: "pos-termino-casamento",
    title: "Superando Término de Casamento",
    icon: "💍",
    description: "Como se recuperar após o divórcio",
    advices: [
      {
        id: "51",
        question: "Como lidar com o luto do divórcio?",
        answer: "Divórcio é perda profunda que requer luto. Você está perdendo não só uma pessoa, mas uma vida, sonhos e identidade compartilhada. Permita-se processar essa perda.",
        tips: [
          "Reconheça que é um processo de luto real",
          "Permita-se sentir raiva, tristeza, alívio",
          "Não minimize sua dor",
          "Busque terapia especializada em divórcio",
          "Cerque-se de apoio emocional",
          "Não tome decisões importantes imediatamente",
          "Aceite que levará tempo significativo",
          "Seja paciente consigo mesmo",
          "Não compare seu processo com outros",
          "Permita-se dias ruins sem culpa"
        ]
      },
      {
        id: "52",
        question: "Como proteger os filhos durante o divórcio?",
        answer: "Filhos não devem ser usados como arma ou mensageiros. Mantenham comunicação civilizada, não falem mal do ex na frente deles e priorizem o bem-estar emocional das crianças.",
        tips: [
          "Nunca falem mal do ex na frente dos filhos",
          "Não usem filhos como mensageiros",
          "Mantenham rotina estável para as crianças",
          "Sejam honestos de forma apropriada à idade",
          "Não façam filhos escolherem lados",
          "Busquem terapia familiar se necessário",
          "Cooperem na criação mesmo separados",
          "Não compensem com presentes excessivos",
          "Permitam que filhos amem ambos os pais",
          "Priorizem necessidades emocionais deles"
        ]
      },
      {
        id: "53",
        question: "Como lidar com questões financeiras pós-divórcio?",
        answer: "Divórcio impacta significativamente as finanças. Organize-se, busque orientação legal e financeira, e adapte-se à nova realidade econômica.",
        tips: [
          "Busque advogado especializado em família",
          "Organize toda documentação financeira",
          "Faça inventário completo de bens",
          "Planeje novo orçamento realista",
          "Proteja seu crédito e contas",
          "Não esconda bens ou rendas",
          "Considere mediação para acordos",
          "Pense no longo prazo, não só no imediato",
          "Busque consultoria financeira",
          "Seja justo, mas proteja seus direitos"
        ]
      },
      {
        id: "54",
        question: "Como reconstruir minha identidade após o divórcio?",
        answer: "Após anos casado, você pode ter perdido parte de sua identidade individual. É hora de redescobrir quem você é fora do casamento.",
        tips: [
          "Redescubra hobbies que abandonou",
          "Reconecte-se com amigos antigos",
          "Explore novos interesses",
          "Estabeleça novos objetivos pessoais",
          "Não se defina pelo divórcio",
          "Invista em autoconhecimento",
          "Crie nova rotina que te faça feliz",
          "Não tenha pressa em se redefinir",
          "Celebre sua independência",
          "Construa vida que reflita quem você é"
        ]
      },
      {
        id: "55",
        question: "Como lidar com família e amigos após o divórcio?",
        answer: "Divórcio pode mudar dinâmicas sociais. Alguns amigos podem se afastar, outros se aproximar. Família pode ter opiniões. Estabeleça limites saudáveis.",
        tips: [
          "Não force amigos a escolherem lados",
          "Aceite que algumas amizades podem mudar",
          "Estabeleça limites com família intrometida",
          "Não fale mal do ex para todos",
          "Agradeça quem te apoia genuinamente",
          "Não isole-se socialmente",
          "Faça novas amizades também",
          "Respeite quem mantém amizade com ex",
          "Não use amigos como terapeutas",
          "Construa nova rede de apoio"
        ]
      },
      {
        id: "56",
        question: "Como lidar com a solidão após anos casado?",
        answer: "Após anos compartilhando vida, a solidão pode ser avassaladora. Aprenda a viver sozinho novamente, mas não se isole completamente.",
        tips: [
          "Aprenda a fazer coisas sozinho novamente",
          "Não preencha vazio com relacionamentos ruins",
          "Crie rotina que inclua atividades sociais",
          "Adote hobbies que envolvam outras pessoas",
          "Não tenha vergonha de estar sozinho",
          "Use tempo para autodesenvolvimento",
          "Reconecte-se com quem você é",
          "Não confunda solidão com necessidade de voltar",
          "Busque grupos de apoio para divorciados",
          "Construa vida plena mesmo sozinho"
        ]
      },
      {
        id: "57",
        question: "Quando estou pronto para namorar novamente?",
        answer: "Não há prazo fixo, mas geralmente leva mais tempo após divórcio que após namoro. Esteja pronto quando conseguir pensar no ex sem dor intensa e quando estiver feliz sozinho.",
        tips: [
          "Não use novo relacionamento para curar feridas",
          "Espere finalizar processo de divórcio",
          "Esteja emocionalmente disponível",
          "Tenha processado o luto do casamento",
          "Não busque substituto do ex",
          "Seja honesto sobre sua situação",
          "Não apresente aos filhos muito cedo",
          "Vá devagar, sem pressa",
          "Aprenda com erros do casamento",
          "Esteja aberto a algo diferente"
        ]
      },
      {
        id: "58",
        question: "Como superar sentimento de fracasso?",
        answer: "Divórcio não é fracasso pessoal. Às vezes, terminar é a decisão mais corajosa e saudável. Não se defina por um relacionamento que não deu certo.",
        tips: [
          "Divórcio não define seu valor",
          "Reconheça a coragem de recomeçar",
          "Não internalize o 'fracasso'",
          "Foque no que aprendeu",
          "Celebre ter priorizado sua felicidade",
          "Não se compare com casamentos 'perfeitos'",
          "Entenda que nem todo relacionamento é para sempre",
          "Perdoe-se por erros cometidos",
          "Veja como novo começo, não fim",
          "Trabalhe autoestima com profissional"
        ]
      },
      {
        id: "59",
        question: "Como lidar com ex-cônjuge de forma civilizada?",
        answer: "Especialmente com filhos, manter relação civilizada é essencial. Estabeleçam limites claros, comuniquem-se apenas sobre necessário e sejam respeitosos.",
        tips: [
          "Mantenham comunicação apenas sobre necessário",
          "Sejam educados e respeitosos sempre",
          "Não discutam na frente dos filhos",
          "Estabeleçam limites claros",
          "Use mensagens escritas para evitar conflitos",
          "Não reviva discussões do passado",
          "Foquem no bem-estar dos filhos",
          "Não usem filhos para passar recados",
          "Sejam flexíveis quando possível",
          "Busquem mediação se comunicação for difícil"
        ]
      },
      {
        id: "60",
        question: "Como transformar o divórcio em recomeço positivo?",
        answer: "Divórcio pode ser oportunidade de renascimento. Use a experiência para crescer, aprender e construir vida mais autêntica e feliz.",
        tips: [
          "Veja como oportunidade de recomeço",
          "Invista pesadamente em você mesmo",
          "Estabeleça novos objetivos de vida",
          "Faça coisas que sempre quis",
          "Viaje, conheça lugares novos",
          "Desenvolva novas habilidades",
          "Fortaleça relacionamentos importantes",
          "Pratique gratidão pelo aprendizado",
          "Não deixe o passado definir seu futuro",
          "Construa vida que você realmente ama",
          "Seja a melhor versão de si mesmo"
        ]
      }
    ]
  }
];

export const premiumFeatures = {
  price: 0,
  features: [
    "Acesso ilimitado a todos os conselhos",
    "Novos conselhos adicionados semanalmente",
    "Planos de ação personalizados",
    "Exercícios práticos para casais",
    "Suporte prioritário via WhatsApp",
    "100% Gratuito"
  ]
};
