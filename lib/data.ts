// Conteúdo da landing — SmileSkin, instituto de tricologia clínica.
// Linguagem dentro do escopo de atuação: avaliação, investigação, protocolos
// capilares, acompanhamento e gerenciamento capilar. Sem ato médico, sem
// promessa de cura, sem número inventado.

export const clinic = {
  name: "SmileSkin",
  unit: "Instituto de Tricologia",
  address: "Av. Bem-te-vi, 333 · CJ 111 · Moema · São Paulo / SP · CEP 04524-030",
  neighborhood: "Moema · São Paulo",
  whatsappLabel: "(11) 91646-0110",
  whatsappHref:
    "https://wa.me/5511916460110?text=" +
    encodeURIComponent(
      "Olá! Gostaria de agendar uma avaliação capilar no instituto SmileSkin.",
    ),
  email: "contato@smileskin.com.br",
  emailHref: "mailto:contato@smileskin.com.br",
  instagram: "https://www.instagram.com/smileskin.estetica/",
  instagramHandle: "@smileskin.estetica",
};

export const hours = [
  { days: "Segunda a sexta", time: "9h às 19h" },
  { days: "Sábado", time: "9h às 14h" },
];

export const navLinks = [
  { label: "A queda", href: "#causas" },
  { label: "Investigação", href: "#investigacao" },
  { label: "Protocolos", href: "#protocolos" },
  { label: "Dr. Deli", href: "#dr-deli" },
  { label: "Pré-avaliação", href: "#pre-avaliacao" },
];

export const authorityPoints = [
  { label: "Responsável técnico", value: "Dr. Deli Brito · RQE Tricologia 11810-92" },
  { label: "Abordagem", value: "Investigação multifatorial da queda" },
  { label: "Cada caso", value: "Protocolo capilar individualizado" },
  { label: "Atendimento", value: "Moema · São Paulo" },
];

// Seção "Nem toda queda é genética" — gatilho de identificação.
export const causes = [
  {
    title: "Predisposição genética",
    body: "É a causa mais conhecida, mas está longe de ser a única. E mesmo nela, há muito o que acompanhar e gerenciar.",
  },
  {
    title: "Fatores hormonais",
    body: "Tireoide, ciclo, gestação e menopausa influenciam diretamente o ritmo de crescimento e de queda dos fios.",
  },
  {
    title: "Estresse e emocional",
    body: "Períodos de estresse intenso, luto e ansiedade podem desencadear ou agravar a queda capilar.",
  },
  {
    title: "Pós-parto",
    body: "A queda pós-parto é comum e tem um curso próprio. Entendê-la evita angústia e intervenções desnecessárias.",
  },
  {
    title: "Pós-Covid e doenças",
    body: "Infecções, cirurgias e doenças sistêmicas podem provocar queda meses depois do episódio.",
  },
  {
    title: "Emagrecimento acelerado",
    body: "Perder peso rápido demais priva o folículo de nutrientes e é uma causa frequente, e silenciosa, de queda.",
  },
  {
    title: "Envelhecimento do couro cabeludo",
    body: "O couro cabeludo envelhece como a pele. Esse processo muda a qualidade do fio e a densidade ao longo do tempo.",
  },
  {
    title: "Saúde do couro cabeludo",
    body: "Oleosidade, descamação e inflamação criam um ambiente desfavorável ao crescimento saudável dos fios.",
  },
];

// Seção investigação — o método científico.
export const investigationSteps = [
  {
    index: "01",
    title: "Anamnese detalhada",
    body: "Uma conversa profunda sobre histórico, rotina, saúde, alimentação, emocional e momento de vida. A queda quase nunca tem uma causa única.",
  },
  {
    index: "02",
    title: "Avaliação tricoscópica",
    body: "Leitura do couro cabeludo e dos fios com tricoscópio, fio a fio: densidade, espessura, miniaturização e a saúde da base.",
  },
  {
    index: "03",
    title: "Leitura multifatorial",
    body: "Cruzamos o que foi observado com o seu histórico para entender quais fatores, juntos, estão por trás do seu caso.",
  },
  {
    index: "04",
    title: "Protocolo individual",
    body: "A partir dessa investigação, desenhamos um protocolo capilar para o seu caso, com expectativa realista e respeito aos limites biológicos.",
  },
  {
    index: "05",
    title: "Acompanhamento responsável",
    body: "O cabelo responde em meses, não em dias. O acompanhamento ajusta o protocolo e mede a evolução com critério.",
  },
];

export const technologies = [
  {
    name: "Tricoscopia digital",
    body: "Ampliação do couro cabeludo para enxergar o que o olho não vê: miniaturização, densidade e padrão da queda.",
  },
  {
    name: "Fotobiomodulação capilar",
    body: "Luz de baixa intensidade aplicada como apoio ao ciclo de crescimento e à saúde do folículo.",
  },
  {
    name: "Microagulhamento capilar",
    body: "Indução controlada no couro cabeludo para estimular a base e potencializar os ativos do protocolo.",
  },
  {
    name: "Intradermoterapia capilar",
    body: "Ativos aplicados diretamente onde o folículo precisa, conforme a leitura tricoscópica de cada caso.",
  },
];

export const emotionalPoints = [
  "Cabelo é identidade. Quando ele cai, não é só estética: mexe com autoimagem, com confiança e com a forma como você se apresenta ao mundo.",
  "A gente leva o lado emocional a sério. Acolher a angústia da queda faz parte do cuidado, não é um detalhe à margem dele.",
];

export type Protocol = {
  index: string;
  name: string;
  body: string;
};

export const protocols: Protocol[] = [
  {
    index: "01",
    name: "Avaliação tricológica",
    body: "O ponto de partida de tudo: investigação completa do couro cabeludo, dos fios e do seu histórico.",
  },
  {
    index: "02",
    name: "Controle da queda",
    body: "Protocolo voltado a reduzir a queda ativa, atuando sobre os fatores identificados na investigação.",
  },
  {
    index: "03",
    name: "Fortalecimento capilar",
    body: "Estímulo da base e melhora da qualidade do fio, com recursos definidos caso a caso.",
  },
  {
    index: "04",
    name: "Saúde do couro cabeludo",
    body: "Reequilíbrio de oleosidade, descamação e sensibilidade que comprometem o crescimento.",
  },
  {
    index: "05",
    name: "Gerenciamento capilar",
    body: "Acompanhamento contínuo para casos crônicos, mantendo a densidade e ajustando a estratégia ao longo do tempo.",
  },
  {
    index: "06",
    name: "Cuidado integrado",
    body: "Quando o caso pede, articulamos o protocolo capilar com outras áreas da saúde do paciente.",
  },
];

export const multidisciplinary = [
  { area: "Psicologia", body: "Apoio ao impacto emocional da queda e ao processo de autoimagem." },
  { area: "Endocrinologia", body: "Encaminhamento e diálogo quando há suspeita de fator hormonal." },
  { area: "Nutrição", body: "Suporte nutricional ao folículo, sobretudo em casos de emagrecimento." },
  { area: "Transplante capilar", body: "Orientação responsável sobre quando o transplante é, ou não, indicado." },
  { area: "Mega hair", body: "Diálogo com especialistas para preservar a saúde da base capilar." },
  { area: "Salões parceiros", body: "Rede de parceiros alinhada ao cuidado e à preservação dos fios." },
];

export const doctor = {
  name: "Dr. Deli Brito",
  role: "Farmacêutico Esteta · Tricologista",
  credentials: [
    "RQE Tricologia 11810-92",
    "RQE Estética 7629-54",
    "CRF/SP 52.349",
  ],
  paragraphs: [
    "A tricologia conduzida pelo Dr. Deli parte de um princípio simples e exigente: a queda capilar é um sintoma, e sintoma se investiga. Antes de qualquer protocolo, vem o estudo do caso.",
    "Essa investigação cruza tricoscopia, histórico e fatores de saúde para enxergar a queda como ela é, multifatorial. É um trabalho técnico, mas profundamente humano: cada paciente é acompanhado pela mesma pessoa, do primeiro encontro ao gerenciamento de longo prazo.",
  ],
};

// Seção de produção científica e mídia — espaços a preencher pelo cliente.
export const scientificAreas = [
  { label: "Artigos científicos", note: "Publicações e estudos em tricologia e saúde capilar." },
  { label: "Monografia", note: "Produção acadêmica de aprofundamento na área." },
  { label: "Certificações", note: "Formações e títulos que sustentam a atuação." },
  { label: "Aulas e palestras", note: "Compartilhamento de conhecimento com outros profissionais." },
  { label: "Entrevistas e mídia", note: "Participações e presença na imprensa." },
  { label: "Conteúdo educativo", note: "Vídeos e materiais que explicam a ciência capilar." },
];

// Registros de acompanhamento — apresentação sóbria, sem antes/depois apelativo.
// TODO: confirmar com o Dr. Deli a ordem e a legenda de cada registro.
export const clinicalRecords = [
  { src: "/images/tricologia/tri-1.jpeg", caption: "Tricoscopia da região da coroa" },
  { src: "/images/tricologia/tri-3.jpeg", caption: "Leitura da linha frontal" },
  { src: "/images/tricologia/tri-5.jpeg", caption: "Avaliação de densidade" },
  { src: "/images/tricologia/tri-7.jpeg", caption: "Acompanhamento do couro cabeludo" },
];

export type Testimonial = { quote: string; name: string; role: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Faz uma avaliação minuciosa sobre o que você realmente precisa antes de indicar qualquer coisa. Profissional de excelência.",
    name: "Daniel Lemes",
    role: "Advogado",
  },
  {
    quote:
      "Profissional ético, que explica cada etapa. Saí entendendo de verdade o meu caso, sem promessa nenhuma fora da realidade.",
    name: "Renata Barreto",
    role: "Biomédica",
  },
  {
    quote:
      "Um cuidado e uma atenção com o paciente que é de se admirar. Trabalho impecável, do início ao acompanhamento.",
    name: "Rafaela Haro",
    role: "Advogada",
  },
  {
    quote:
      "Atendimento muito bom e uma estrutura ótima, em Moema. Recomendo pela seriedade com que tratam cada caso.",
    name: "Ana Cleia",
    role: "Administradora",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Toda queda de cabelo é genética?",
    answer:
      "Não. A genética é uma das causas, mas a queda é multifatorial. Estresse, hormônios, emagrecimento, pós-parto, pós-Covid, doenças e a saúde do couro cabeludo entram na conta. Por isso a investigação vem antes de qualquer protocolo.",
  },
  {
    question: "Como é a avaliação capilar?",
    answer:
      "É uma consulta de tricologia com anamnese detalhada e leitura do couro cabeludo no tricoscópio. Você sai entendendo o seu caso, os fatores envolvidos e um plano de cuidado realista.",
  },
  {
    question: "Em quanto tempo aparecem resultados?",
    answer:
      "O cabelo responde ao longo de meses, respeitando o próprio ciclo biológico. Não trabalhamos com promessa de prazo mágico: na avaliação alinhamos uma expectativa honesta para o seu caso.",
  },
  {
    question: "O instituto atende homens e mulheres?",
    answer:
      "Sim. Queda e rarefação acontecem nos dois, com causas e protocolos diferentes. Cada avaliação é individual.",
  },
  {
    question: "Vocês fazem transplante capilar?",
    answer:
      "Nosso trabalho é a investigação e o gerenciamento capilar com protocolos clínicos. Quando o caso indica transplante, orientamos com transparência e dialogamos com especialistas da área.",
  },
  {
    question: "A pré-avaliação online substitui a consulta?",
    answer:
      "Não. O questionário é educativo: aponta possíveis fatores a investigar e ajuda você a se preparar. O entendimento real do seu caso acontece na avaliação presencial.",
  },
];

// QUESTIONÁRIO DE PRÉ-AVALIAÇÃO — educativo, não diagnostica.
export type QuizFactorId =
  | "genetico"
  | "hormonal"
  | "emocional"
  | "pos-parto"
  | "pos-evento"
  | "nutricional"
  | "tracao"
  | "couro";

export const quizFactors: Record<QuizFactorId, { label: string; note: string }> = {
  genetico: {
    label: "Predisposição genética",
    note: "O histórico familiar sugere um padrão que merece ser acompanhado de perto.",
  },
  hormonal: {
    label: "Fatores hormonais",
    note: "Alterações hormonais influenciam o ciclo capilar e pedem investigação.",
  },
  emocional: {
    label: "Estresse e fator emocional",
    note: "Períodos de estresse intenso podem desencadear ou agravar a queda.",
  },
  "pos-parto": {
    label: "Queda pós-parto",
    note: "É comum e tem um curso próprio, que se beneficia de acompanhamento.",
  },
  "pos-evento": {
    label: "Pós-Covid, cirurgia ou doença",
    note: "Eventos sistêmicos podem provocar queda meses depois do episódio.",
  },
  nutricional: {
    label: "Fator nutricional",
    note: "Emagrecimento acelerado e carências afetam a nutrição do folículo.",
  },
  tracao: {
    label: "Tração e química",
    note: "Mega hair, apliques e tração frequente estressam a raiz do fio.",
  },
  couro: {
    label: "Saúde do couro cabeludo",
    note: "Oleosidade e descamação comprometem o ambiente de crescimento.",
  },
};

// Vídeos do instituto. TODO: ajustar as legendas conforme o conteúdo real
// de cada vídeo — foram colocadas de forma neutra.
export const videos = [
  {
    id: "v1",
    src: "/videos/v1.mp4",
    poster: "/videos/v1-poster.jpg",
    ratio: "9 / 16" as const,
    tag: "Reel · 01",
    caption: "O instituto por dentro",
  },
  {
    id: "v2",
    src: "/videos/v2.mp4",
    poster: "/videos/v2-poster.jpg",
    ratio: "16 / 9" as const,
    tag: "Vídeo · 02",
    caption: "Rotina de avaliação e tecnologia",
  },
  {
    id: "v3",
    src: "/videos/v3.mp4",
    poster: "/videos/v3-poster.jpg",
    ratio: "1 / 1" as const,
    tag: "Vídeo · 03",
    caption: "Bastidores do cuidado",
  },
];

export type QuizQuestion = {
  id: string;
  question: string;
  options: { label: string; factors: QuizFactorId[] }[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "tipo",
    question: "Como você descreveria a sua queda hoje?",
    options: [
      { label: "Caindo mais que o normal, de forma difusa", factors: ["couro"] },
      { label: "Afinamento dos fios, cabelo mais ralo", factors: ["hormonal", "genetico"] },
      { label: "Falhas ou recuo da linha frontal / coroa", factors: ["genetico"] },
      { label: "Mais oleosidade ou descamação no couro", factors: ["couro"] },
    ],
  },
  {
    id: "familia",
    question: "Existe histórico de queda ou rarefação na sua família?",
    options: [
      { label: "Sim, em pais ou avós", factors: ["genetico"] },
      { label: "Não que eu saiba", factors: [] },
      { label: "Não tenho certeza", factors: [] },
    ],
  },
  {
    id: "evento",
    question: "Você passou por algum destes eventos nos últimos meses?",
    options: [
      { label: "Parto recente", factors: ["pos-parto", "hormonal"] },
      { label: "Emagrecimento acelerado", factors: ["nutricional"] },
      { label: "Covid, cirurgia ou uma doença", factors: ["pos-evento"] },
      { label: "Nenhum desses", factors: [] },
    ],
  },
  {
    id: "estresse",
    question: "Como andam o seu estresse e o seu sono?",
    options: [
      { label: "Estresse alto e sono ruim", factors: ["emocional"] },
      { label: "Oscila bastante", factors: ["emocional"] },
      { label: "Tranquilos na maior parte do tempo", factors: [] },
    ],
  },
  {
    id: "tracao",
    question: "Você usa mega hair, apliques ou prende o cabelo com força?",
    options: [
      { label: "Sim, com frequência", factors: ["tracao"] },
      { label: "De vez em quando", factors: ["tracao"] },
      { label: "Não", factors: [] },
    ],
  },
  {
    id: "hormonal",
    question: "Você percebe ou acompanha alguma alteração hormonal?",
    options: [
      { label: "Sim, tireoide, ciclo, menopausa ou similar", factors: ["hormonal"] },
      { label: "Não", factors: [] },
      { label: "Nunca investiguei a fundo", factors: ["hormonal"] },
    ],
  },
  {
    id: "autoestima",
    question: "O quanto a queda tem afetado a sua autoestima?",
    options: [
      { label: "Bastante, me incomoda todos os dias", factors: [] },
      { label: "Um pouco", factors: [] },
      { label: "Pouco, é mais curiosidade", factors: [] },
    ],
  },
];
