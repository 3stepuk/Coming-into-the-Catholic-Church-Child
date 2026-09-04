import { SummaryCatechismItem, ReadinessCheckItem, ParishChecklistItem } from '../types';

export interface AppendixStage {
  stage: number;
  name: string;
  whatItMeans: string;
}

export const APPENDIX_A_JOURNEY: AppendixStage[] = [
  {
    stage: 1,
    name: 'Enquiry',
    whatItMeans: 'The child and family meet the parish priest, ask questions and begin worshipping regularly with the parish.',
  },
  {
    stage: 2,
    name: 'Baptism established',
    whatItMeans: 'The parish obtains a certificate or other reliable evidence and establishes the validity of the previous Baptism.',
  },
  {
    stage: 3,
    name: 'Formation',
    whatItMeans: 'The child learns Catholic faith, develops prayer and Christian habits, and becomes at home at Sunday Mass.',
  },
  {
    stage: 4,
    name: 'First Confession',
    whatItMeans: 'Because the child is already baptised, the Sacrament of Penance is received before Reception.',
  },
  {
    stage: 5,
    name: 'Discernment',
    whatItMeans: 'The priest, child, family, sponsor and catechist consider faith, free desire, understanding, conversion and readiness.',
  },
  {
    stage: 6,
    name: 'Reception',
    whatItMeans: 'The child makes the Profession of Faith and is formally received into the full communion of the Catholic Church.',
  },
  {
    stage: 7,
    name: 'Confirmation',
    whatItMeans: 'The newly received child is ordinarily confirmed by the priest who receives them, using sacred chrism.',
  },
  {
    stage: 8,
    name: 'First Holy Communion',
    whatItMeans: 'The child receives Jesus Christ in the Holy Eucharist and enters fully into Catholic sacramental communion.',
  },
  {
    stage: 9,
    name: 'Mystagogy',
    whatItMeans: 'The parish and family help the child deepen the Sacraments received and persevere in Catholic life.',
  },
];

export interface ConfessionStep {
  step: number;
  title: string;
  detail: string;
}

export const APPENDIX_B_CONFESSION_STEPS: ConfessionStep[] = [
  {
    step: 1,
    title: 'Prepare',
    detail: 'Pray to the Holy Spirit, examine your conscience, be sorry and intend to turn away from sin.',
  },
  {
    step: 2,
    title: 'Begin',
    detail: 'Make the Sign of the Cross and say, “Bless me, Father, for I have sinned. This is my first Confession.”',
  },
  {
    step: 3,
    title: 'Confess',
    detail: 'Tell your sins simply and honestly, especially every remembered mortal sin.',
  },
  {
    step: 4,
    title: 'Finish',
    detail: 'You may say, “For these and all my sins, I am truly sorry.”',
  },
  {
    step: 5,
    title: 'Listen',
    detail: 'The priest may give advice and will assign a penance.',
  },
  {
    step: 6,
    title: 'Contrition',
    detail: 'Pray the Act of Contrition sincerely.',
  },
  {
    step: 7,
    title: 'Absolution',
    detail: 'Listen to the words by which Christ forgives your sins through the priest.',
  },
  {
    step: 8,
    title: 'Thanksgiving',
    detail: 'Complete your penance and thank Jesus for his mercy.',
  },
];

export interface ConscienceQuestion {
  id: string;
  question: string;
  commandmentArea?: string;
}

export const APPENDIX_B_CONSCIENCE_QUESTIONS: ConscienceQuestion[] = [
  {
    id: 'c1',
    question: 'Have I refused to pray, deliberately missed Sunday Mass without a serious reason, or treated holy things without reverence?',
    commandmentArea: 'Commandments 1–3: Love of God & His Day',
  },
  {
    id: 'c2',
    question: "Have I used God's name carelessly or spoken disrespectfully about the faith?",
    commandmentArea: 'Commandment 2: Reverence for God’s Name',
  },
  {
    id: 'c3',
    question: 'Have I disobeyed, lied to or deliberately hurt my parents, carers, teachers or others?',
    commandmentArea: 'Commandments 4 & 8: Honouring Parents & Truthfulness',
  },
  {
    id: 'c4',
    question: 'Have I been cruel, spiteful, violent, unforgiving or pleased when someone was hurt?',
    commandmentArea: 'Commandment 5: Kindness, Mercy & Respect for Life',
  },
  {
    id: 'c5',
    question: 'Have I cheated, stolen, damaged something deliberately or refused to put right harm I caused?',
    commandmentArea: 'Commandment 7: Honesty & Justice',
  },
  {
    id: 'c6',
    question: 'Have I deliberately looked at, shared or said something impure or degrading?',
    commandmentArea: 'Commandments 6 & 9: Purity of Heart',
  },
  {
    id: 'c7',
    question: 'Have I been jealous, greedy, selfish or unwilling to share?',
    commandmentArea: 'Commandments 8 & 10: Generosity & Freedom from Envy',
  },
  {
    id: 'c8',
    question: 'Have I excluded, bullied or humiliated someone in person or online?',
    commandmentArea: 'Commandment 5: Charity, Friendship & Dignity',
  },
  {
    id: 'c9',
    question: 'What good could I have done but deliberately refused to do?',
    commandmentArea: 'Sins of Omission: Neglecting Love',
  },
];

export interface ReceptionStep {
  step: number;
  title: string;
  detail: string;
}

export const APPENDIX_C_RECEPTION_STEPS: ReceptionStep[] = [
  {
    step: 1,
    title: 'Invitation',
    detail: 'The priest invites the candidate to profess the Catholic faith freely.',
  },
  {
    step: 2,
    title: 'Profession of Faith',
    detail: 'The child declares belief in all that the Catholic Church believes, teaches and proclaims to be revealed by God.',
  },
  {
    step: 3,
    title: 'Act of Reception',
    detail: 'The priest receives the child into the full communion of the Catholic Church.',
  },
  {
    step: 4,
    title: 'Welcome',
    detail: "The Church gives thanks for the child's Baptism and welcomes the child into Catholic communion.",
  },
  {
    step: 5,
    title: 'Confirmation',
    detail: 'If the child has not already been validly confirmed, Confirmation ordinarily follows Reception.',
  },
  {
    step: 6,
    title: 'Holy Eucharist',
    detail: 'During the same Mass, the newly received child ordinarily receives First Holy Communion.',
  },
];

export interface ConfirmationStep {
  step: number;
  title: string;
  detail: string;
}

export const APPENDIX_D_CONFIRMATION_STEPS: ConfirmationStep[] = [
  {
    step: 1,
    title: 'Renewal of faith',
    detail: 'The candidate has professed the Catholic faith and is ready to be strengthened in it.',
  },
  {
    step: 2,
    title: 'Invitation to prayer',
    detail: 'The priest invites everyone to pray for the gift of the Holy Spirit.',
  },
  {
    step: 3,
    title: 'Laying on of hands',
    detail: 'The minister extends his hands and asks the Father to send the Holy Spirit and his gifts.',
  },
  {
    step: 4,
    title: 'Anointing with chrism',
    detail: 'The child approaches with the sponsor and is anointed on the forehead with sacred chrism.',
  },
  {
    step: 5,
    title: 'Sacramental words',
    detail: 'The minister says, “N., be sealed with the Gift of the Holy Spirit.” The child answers, “Amen.”',
  },
  {
    step: 6,
    title: 'Sign of peace',
    detail: 'The minister gives the sign of peace, expressing communion in Christ and his Church.',
  },
];

export interface HolySpiritGift {
  name: string;
  description: string;
}

export const APPENDIX_D_GIFTS: HolySpiritGift[] = [
  { name: 'Wisdom', description: 'helps us value God and the things of heaven above everything else.' },
  { name: 'Understanding', description: 'helps us grasp the truths of faith more deeply.' },
  { name: 'Counsel', description: 'helps us judge rightly what should be done.' },
  { name: 'Fortitude', description: 'gives courage and perseverance in difficulty.' },
  { name: 'Knowledge', description: 'helps us see created things in relation to God.' },
  { name: 'Piety', description: 'moves us to love and worship God as his children.' },
  { name: 'Fear of the Lord', description: 'fills us with reverence and dread of offending God.' },
];

export interface MassPart {
  part: string;
  whatIDo: string;
}

export const APPENDIX_E_MASS_PARTS: MassPart[] = [
  {
    part: 'Introductory Rites',
    whatIDo: 'We gather, make the Sign of the Cross, acknowledge our sins, praise God and pray.',
  },
  {
    part: 'Liturgy of the Word',
    whatIDo: 'We listen to Sacred Scripture and the homily, profess faith and offer intercessions.',
  },
  {
    part: 'Preparation of the Gifts',
    whatIDo: 'Bread and wine are brought to the altar; we offer ourselves with them.',
  },
  {
    part: 'Eucharistic Prayer',
    whatIDo: "The Church gives thanks; by the Holy Spirit and Christ's words, the gifts become his Body and Blood.",
  },
  {
    part: 'Communion Rite',
    whatIDo: 'We pray the Our Father, ask peace and prepare to receive the Lamb of God.',
  },
  {
    part: 'Holy Communion',
    whatIDo: 'The minister says, “The Body of Christ.” I answer “Amen”, receive reverently and consume at once.',
  },
  {
    part: 'Thanksgiving',
    whatIDo: 'I adore Jesus, thank him, offer myself and pray for others.',
  },
  {
    part: 'Dismissal',
    whatIDo: 'Christ sends us to live the Gospel and serve our neighbour.',
  },
];

export interface PrayerItem {
  id: string;
  title: string;
  latinOrTrad?: string;
  text: string;
  notes?: string;
}

export const APPENDIX_F_PRAYERS: PrayerItem[] = [
  {
    id: 'sign-of-cross',
    title: 'Sign of the Cross',
    text: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.',
  },
  {
    id: 'our-father',
    title: 'Our Father',
    text: 'Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.',
  },
  {
    id: 'hail-mary',
    title: 'Hail Mary',
    text: 'Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
  },
  {
    id: 'glory-be',
    title: 'Glory Be',
    text: 'Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.',
  },
  {
    id: 'act-of-contrition',
    title: 'Act of Contrition',
    text: 'O my God, I am very sorry that I have sinned against you, and by the help of your grace I will not sin again. Amen.',
  },
  {
    id: 'come-holy-spirit',
    title: 'Come, Holy Spirit',
    text: 'Come, Holy Spirit, fill the hearts of your faithful and kindle in them the fire of your love. Amen.',
  },
  {
    id: 'before-communion',
    title: 'Before Communion',
    text: 'Lord, I am not worthy that you should enter under my roof, but only say the word and my soul shall be healed.',
  },
  {
    id: 'after-communion',
    title: 'After Communion',
    text: 'Lord Jesus, I adore you and thank you for giving yourself to me. Keep me close to you and make my life pleasing to you. Amen.',
  },
  {
    id: 'apostles-creed',
    title: "The Apostles' Creed",
    text: 'I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',
  },
];

export const APPENDIX_F_COMMANDMENTS: string[] = [
  '1. I am the Lord your God: you shall not have strange gods before me.',
  '2. You shall not take the name of the Lord your God in vain.',
  '3. Remember to keep holy the Lord’s Day.',
  '4. Honour your father and your mother.',
  '5. You shall not kill.',
  '6. You shall not commit adultery.',
  '7. You shall not steal.',
  '8. You shall not bear false witness against your neighbour.',
  '9. You shall not covet your neighbour’s wife.',
  '10. You shall not covet your neighbour’s goods.',
];

export const APPENDIX_F_BEATITUDES: string[] = [
  '• The poor in spirit receive the kingdom of heaven.',
  '• Those who mourn will be comforted.',
  '• The meek will inherit the earth.',
  '• Those who hunger and thirst for righteousness will be satisfied.',
  '• The merciful will receive mercy.',
  '• The pure in heart will see God.',
  '• The peacemakers will be called children of God.',
  '• Those persecuted for righteousness possess the kingdom of heaven.',
];

export const APPENDIX_F_PRECEPTS: string[] = [
  '• participate in Mass on Sundays and holy days of obligation and rest from unnecessary servile work;',
  '• confess serious sins at least once a year;',
  '• receive Holy Communion at least during the Easter season;',
  '• observe the days of fasting and abstinence established by the Church;',
  '• and help provide for the needs of the Church according to their ability.',
];

// All 23 Summary Catechism Q&As from Appendix G
export const APPENDIX_G_SUMMARY_CATECHISM: SummaryCatechismItem[] = [
  {
    id: 1,
    question: 'Why did God make you?',
    answer: 'God made me to know him, love him and serve him in this life, and to be happy with him for ever in heaven.',
    category: 'God & Creation',
    gapPrompt: {
      textWithBlanks: 'God made me to [know] him, [love] him and [serve] him in this life, and to be happy with him for ever in [heaven].',
      correctWords: ['know', 'love', 'serve', 'heaven'],
      distractors: ['fear', 'forget', 'leave', 'punish'],
    },
  },
  {
    id: 2,
    question: 'Who is the Most Holy Trinity?',
    answer: 'The Father, the Son and the Holy Spirit: three divine Persons in one God.',
    category: 'God & Trinity',
    gapPrompt: {
      textWithBlanks: 'The Father, the Son and the Holy Spirit: [three divine Persons] in [one God].',
      correctWords: ['three divine Persons', 'one God'],
      distractors: ['three separate gods', 'one person only', 'angels'],
    },
  },
  {
    id: 3,
    question: 'Who is Jesus Christ?',
    answer: 'Jesus Christ is the eternal Son of God made man.',
    category: 'Jesus Christ',
    gapPrompt: {
      textWithBlanks: 'Jesus Christ is the [eternal Son of God] made [man].',
      correctWords: ['eternal Son of God', 'man'],
      distractors: ['greatest prophet', 'spirit only', 'philosopher'],
    },
  },
  {
    id: 4,
    question: 'How did Jesus redeem us?',
    answer: 'By his suffering, death and Resurrection.',
    category: 'Jesus Christ',
    gapPrompt: {
      textWithBlanks: 'By his [suffering], [death] and [Resurrection].',
      correctWords: ['suffering', 'death', 'Resurrection'],
      distractors: ['riches', 'silence', 'earthly kingdom'],
    },
  },
  {
    id: 5,
    question: 'What did valid Baptism give you?',
    answer: 'It forgave sin, gave sanctifying grace, united me to Christ and made me a child of God.',
    category: 'Baptism',
    gapPrompt: {
      textWithBlanks: 'It [forgave sin], gave [sanctifying grace], united me to Christ and made me a [child of God].',
      correctWords: ['forgave sin', 'sanctifying grace', 'child of God'],
      distractors: ['gave worldly wealth', 'made me famous', 'temporary ticket'],
    },
  },
  {
    id: 6,
    question: 'Can Baptism be repeated?',
    answer: 'No. Valid Baptism can never be repeated.',
    category: 'Baptism',
    gapPrompt: {
      textWithBlanks: 'No. Valid Baptism can [never be repeated].',
      correctWords: ['never be repeated'],
      distractors: ['be redone every Easter', 'be repeated if moved', 'expire'],
    },
  },
  {
    id: 7,
    question: 'What are Scripture and Tradition?',
    answer: 'The one word of God handed on in written and living form.',
    category: 'Revelation & Church',
    gapPrompt: {
      textWithBlanks: 'The [one word of God] handed on in [written and living form].',
      correctWords: ['one word of God', 'written and living form'],
      distractors: ['two opposed ideas', 'human folklore', 'pastoral opinions'],
    },
  },
  {
    id: 8,
    question: 'What are the four marks of the Church?',
    answer: 'One, holy, catholic and apostolic.',
    category: 'Revelation & Church',
    gapPrompt: {
      textWithBlanks: '[One], [holy], [catholic] and [apostolic].',
      correctWords: ['One', 'holy', 'catholic', 'apostolic'],
      distractors: ['divided', 'changing', 'secret', 'national'],
    },
  },
  {
    id: 9,
    question: 'What does full communion include?',
    answer: 'Catholic faith, the Sacraments and communion with the Pope and bishops.',
    category: 'Full Communion',
    gapPrompt: {
      textWithBlanks: '[Catholic faith], the [Sacraments] and communion with the [Pope and bishops].',
      correctWords: ['Catholic faith', 'Sacraments', 'Pope and bishops'],
      distractors: ['social clubs', 'similar music', 'money'],
    },
  },
  {
    id: 10,
    question: 'What is prayer?',
    answer: 'Lifting our minds and hearts to God.',
    category: 'Prayer & Life',
    gapPrompt: {
      textWithBlanks: 'Lifting our [minds and hearts] to [God].',
      correctWords: ['minds and hearts', 'God'],
      distractors: ['demands', 'complaints only', 'money'],
    },
  },
  {
    id: 11,
    question: 'What do the Commandments teach?',
    answer: 'They teach us to love God and our neighbour.',
    category: 'Moral Life',
    gapPrompt: {
      textWithBlanks: 'They teach us to love [God] and our [neighbour].',
      correctWords: ['God', 'neighbour'],
      distractors: ['ourselves only', 'rules alone', 'enemies only'],
    },
  },
  {
    id: 12,
    question: 'What is mortal sin?',
    answer: 'A grave offence committed with full knowledge and deliberate consent.',
    category: 'Moral Life',
    gapPrompt: {
      textWithBlanks: 'A [grave offence] committed with [full knowledge] and [deliberate consent].',
      correctWords: ['grave offence', 'full knowledge', 'deliberate consent'],
      distractors: ['bad mood', 'small fault', 'accident'],
    },
  },
  {
    id: 13,
    question: 'What is Confession?',
    answer: 'The Sacrament in which Christ forgives sins through the ministry of the priest.',
    category: 'Confession',
    gapPrompt: {
      textWithBlanks: 'The Sacrament in which [Christ forgives sins] through the ministry of the [priest].',
      correctWords: ['Christ forgives sins', 'priest'],
      distractors: ['parish committee', 'teacher', 'punishment is given'],
    },
  },
  {
    id: 14,
    question: 'What must we confess?',
    answer: 'All remembered mortal sins after a careful examination; venial sins may also be confessed.',
    category: 'Confession',
    gapPrompt: {
      textWithBlanks: 'All remembered [mortal sins] after a careful examination; [venial sins] may also be confessed.',
      correctWords: ['mortal sins', 'venial sins'],
      distractors: ['accidents', 'other people’s faults', 'dreams'],
    },
  },
  {
    id: 15,
    question: 'What is the Mass?',
    answer: 'The sacramental making-present of Christ’s one Sacrifice of Calvary and the sacred Eucharistic banquet.',
    category: 'The Holy Mass',
    gapPrompt: {
      textWithBlanks: 'The sacramental making-present of Christ’s [one Sacrifice of Calvary] and the sacred [Eucharistic banquet].',
      correctWords: ['one Sacrifice of Calvary', 'Eucharistic banquet'],
      distractors: ['memorial play', 'fundraising meal', 'music concert'],
    },
  },
  {
    id: 16,
    question: 'Whom do we receive in Holy Communion?',
    answer: 'Jesus Christ, Body, Blood, Soul and Divinity.',
    category: 'Holy Eucharist',
    gapPrompt: {
      textWithBlanks: 'Jesus Christ, [Body], [Blood], [Soul] and [Divinity].',
      correctWords: ['Body', 'Blood', 'Soul', 'Divinity'],
      distractors: ['wafer only', 'blessed bread', 'memory'],
    },
  },
  {
    id: 17,
    question: 'What is transubstantiation?',
    answer: 'The change of the whole substance of bread and wine into the Body and Blood of Christ.',
    category: 'Holy Eucharist',
    gapPrompt: {
      textWithBlanks: 'The change of the whole [substance] of bread and wine into the [Body and Blood] of Christ.',
      correctWords: ['substance', 'Body and Blood'],
      distractors: ['physical appearance', 'taste', 'symbolic name'],
    },
  },
  {
    id: 18,
    question: 'What do you profess at Reception?',
    answer: 'All that the holy Catholic Church believes, teaches and proclaims to be revealed by God.',
    category: 'Full Communion',
    gapPrompt: {
      textWithBlanks: 'All that the holy Catholic Church [believes, teaches and proclaims] to be [revealed by God].',
      correctWords: ['believes, teaches and proclaims', 'revealed by God'],
      distractors: ['finds easy to explain', 'votes upon', 'likes best'],
    },
  },
  {
    id: 19,
    question: 'What does Confirmation give?',
    answer: 'A special outpouring of the Holy Spirit that strengthens and seals baptismal grace.',
    category: 'Confirmation',
    gapPrompt: {
      textWithBlanks: 'A special outpouring of the [Holy Spirit] that [strengthens and seals] baptismal grace.',
      correctWords: ['Holy Spirit', 'strengthens and seals'],
      distractors: ['replaces', 'cancels', 'ends study'],
    },
  },
  {
    id: 20,
    question: 'Name the seven gifts of the Holy Spirit.',
    answer: 'Wisdom, understanding, counsel, fortitude, knowledge, piety and fear of the Lord.',
    category: 'Confirmation',
    gapPrompt: {
      textWithBlanks: 'Wisdom, [understanding], counsel, [fortitude], knowledge, [piety] and [fear of the Lord].',
      correctWords: ['understanding', 'fortitude', 'piety', 'fear of the Lord'],
      distractors: ['pride', 'wealth', 'cleverness', 'haste'],
    },
  },
  {
    id: 21,
    question: 'What does “Amen” before Communion mean?',
    answer: 'I believe that this is the Body of Christ.',
    category: 'Holy Eucharist',
    gapPrompt: {
      textWithBlanks: 'I [believe] that this is the [Body of Christ].',
      correctWords: ['believe', 'Body of Christ'],
      distractors: ['hope', 'bread of friendship', 'symbol of peace'],
    },
  },
  {
    id: 22,
    question: 'How long is the Eucharistic fast?',
    answer: 'One hour before Holy Communion, except for water and medicine.',
    category: 'Holy Eucharist',
    gapPrompt: {
      textWithBlanks: '[One hour] before Holy Communion, except for [water and medicine].',
      correctWords: ['One hour', 'water and medicine'],
      distractors: ['Three hours', 'All day', 'Only five minutes'],
    },
  },
  {
    id: 23,
    question: 'What remains after Reception?',
    answer: 'A lifelong Catholic life of Mass, Sacraments, prayer, faith, charity and mission.',
    category: 'Living in Communion',
    gapPrompt: {
      textWithBlanks: 'A lifelong Catholic life of [Mass], [Sacraments], [prayer], faith, charity and [mission].',
      correctWords: ['Mass', 'Sacraments', 'prayer', 'mission'],
      distractors: ['graduation and rest', 'leaving church', 'retirement'],
    },
  },
];

export const APPENDIX_H_READINESS: ReadinessCheckItem[] = [
  {
    id: 'baptism',
    area: 'Baptism',
    whatItLooksLike: 'Reliable evidence establishes a valid Christian Baptism; any doubt or Eastern affiliation has been resolved by the priest.',
  },
  {
    id: 'free_desire',
    area: 'Free desire',
    whatItLooksLike: 'The child personally wishes to become Catholic and is not being forced or pressured.',
  },
  {
    id: 'faith_in_christ',
    area: 'Faith in Christ',
    whatItLooksLike: 'The child knows the central Gospel and believes in Jesus Christ as true God, true man and Saviour.',
  },
  {
    id: 'catholic_faith',
    area: 'Catholic faith',
    whatItLooksLike: 'According to capacity, the child accepts the Trinity, Scripture and Tradition, the Creed, the Church and the moral life.',
  },
  {
    id: 'full_communion',
    area: 'Full communion',
    whatItLooksLike: 'The child understands the Profession of Faith and wishes to enter communion with the Catholic Church.',
  },
  {
    id: 'confession',
    area: 'Confession',
    whatItLooksLike: 'The child understands sin, contrition, confession and absolution and can make a simple, private Confession.',
  },
  {
    id: 'confirmation',
    area: 'Confirmation',
    whatItLooksLike: 'The child understands the Holy Spirit, sacred chrism, the sacramental seal and Christian witness.',
  },
  {
    id: 'eucharist',
    area: 'Eucharist',
    whatItLooksLike: 'The child distinguishes the Body of Christ from ordinary food and believes the Real Presence.',
  },
  {
    id: 'sunday_life',
    area: 'Sunday life',
    whatItLooksLike: 'The child and family have begun a stable pattern of Sunday Mass and parish belonging.',
  },
  {
    id: 'practical_readiness',
    area: 'Practical readiness',
    whatItLooksLike: 'The child can make the Profession of Faith and receive the Sacraments reverently with suitable adaptations.',
  },
  {
    id: 'perseverance',
    area: 'Perseverance',
    whatItLooksLike: 'The family understands that formation, Mass, Confession, Communion, prayer and parish life continue afterwards.',
  },
];

export const APPENDIX_H_PARISH_CHECKLIST: ParishChecklistItem[] = [
  {
    id: 'pc-1',
    item: 'Obtain the baptismal certificate or reliable evidence; investigate matter, form and intention if validity is uncertain.',
  },
  {
    id: 'pc-2',
    item: 'Confirm the child’s canonical status. A child baptised Catholic is not received into full communion, and an Eastern Christian may belong to a Catholic Church sui iuris upon reception.',
  },
  {
    id: 'pc-3',
    item: 'Confirm parental consent, the child’s free desire and any relevant questions of parental responsibility.',
  },
  {
    id: 'pc-4',
    item: 'Record the child’s full sacramental history, including any previous Confirmation or chrismation.',
  },
  {
    id: 'pc-5',
    item: 'Appoint a suitable sponsor and verify that the person fulfils the Church’s requirements.',
  },
  {
    id: 'pc-6',
    item: 'Arrange First Confession before Reception, preserving the child’s privacy and freedom.',
  },
  {
    id: 'pc-7',
    item: 'Discern readiness personally; do not make completion of pages or a fixed date the sole criterion.',
  },
  {
    id: 'pc-8',
    item: 'Use the approved rite for Reception into Full Communion; do not improvise liturgical wording or actions.',
  },
  {
    id: 'pc-9',
    item: 'Confirm the priest’s faculty and obligation to administer Confirmation when he receives the child, unless competent authority directs otherwise.',
  },
  {
    id: 'pc-10',
    item: 'Prepare the child for worthy First Holy Communion and any necessary medical or accessibility arrangements.',
  },
  {
    id: 'pc-11',
    item: 'Enter Reception, Confirmation and First Holy Communion correctly in parish records and notify the place of Baptism as required.',
  },
  {
    id: 'pc-12',
    item: 'Arrange Mystagogy and continuing family and parish accompaniment after the celebration.',
  },
];

export interface SourceReference {
  heading: string;
  description: string;
}

export const SOURCES_AND_REFERENCES: SourceReference[] = [
  {
    heading: 'Sacred Scripture',
    description: 'Short quotations and references follow the English Standard Version - Catholic Edition.',
  },
  {
    heading: 'Catechism of the Catholic Church',
    description: 'Especially nos. 74-100 (Revelation & Tradition), 811-870 (The Church & Unity), 1210-1419 (Baptism, Confirmation & Eucharist), 1420-1498 (Penance & Reconciliation), and 1691-2557 (Moral Life, Commandments & Prayer).',
  },
  {
    heading: 'Compendium of the Catechism of the Catholic Church',
    description: 'The profession of faith, the Sacraments, Christian morality and prayer in classical catechism Q&A form.',
  },
  {
    heading: 'Second Vatican Council',
    description: 'Lumen gentium and Unitatis redintegratio on the Church, Christian unity and the real bonds created by Baptism.',
  },
  {
    heading: 'Code of Canon Law',
    description: 'Especially canons 11, 96, 205 (communion with the Church), 840-845, 883-885 (faculty of the receiving priest to confirm), 889-891, 912-919 (reception of Eucharist) and 987-991 (Penance).',
  },
  {
    heading: 'Rite of Christian Initiation of Adults',
    description: 'The approved liturgical rite for Reception of Baptised Christians into the Full Communion of the Catholic Church.',
  },
  {
    heading: 'Liturgy Office of England and Wales',
    description: 'National guidance concerning Reception, Confirmation and Eucharist in the celebration of Christian initiation.',
  },
  {
    heading: 'Diocese of Nottingham',
    description: 'Current sacramental, liturgical and safeguarding direction.',
  },
  {
    heading: 'Traditional Catechetical Sources',
    description: 'Definitions informed by the Roman Catechism, the Baltimore tradition and Joseph Deharbe, adapted to current terminology and discipline.',
  },
];
