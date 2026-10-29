import { Conversation } from '../types';

export const CONVERSATIONS_DATA: Conversation[] = [
  {
    id: 1,
    number: 1,
    title: "God Calls Me to Follow Jesus",
    purpose: "Jesus knows me, loves me and invites me to follow him in the full communion of his Catholic Church.",
    remember: "To follow Jesus and live the fullness of Catholic faith in his Church.",
    rememberGaps: {
      id: 'rem-1',
      sentenceWithBlanks: "To [follow Jesus] and live the fullness of Catholic faith in [his Church].",
      gaps: [
        {
          index: 0,
          word: "follow Jesus",
          options: ["follow Jesus", "follow the crowd", "follow our own rules", "follow only our conscience"],
          hint: "The invitation is to him, not merely to a rule."
        },
        {
          index: 1,
          word: "his Church",
          options: ["his Church", "a private religion", "the wider world", "a school"],
          hint: "The body he founded."
        },
      ]
    },
    teachingParagraphs: [
      "God made you because he loves you. You are made in his image and likeness, and your life matters to him. He wants you to know him, love him, serve him and be happy with him for ever in heaven.",
      "Jesus Christ knows you personally. He welcomed children, blessed them and told his followers not to stop them coming to him. He welcomes you, too. A disciple of Jesus listens to him, believes what he teaches, tries to follow him and asks for his help.",
      "You are already a Christian. When you were baptised, Jesus gave you new life and made you his own. Now you are preparing to enter the full communion of the Catholic Church. This does not mean that your first Baptism was a mistake or that your life with Jesus is only beginning now. We thank God for the grace you have already received.",
      "God calls us through his grace. Grace is his free gift of divine life and help. We cannot make ourselves holy without him. He invites us, strengthens us and helps us answer with faith and love.",
      "Your family, sponsor, parish mentor and priest will help you learn. But your voice matters. You may have questions; you may not understand everything straight away. Becoming Catholic is not simply what adults decide for you. It should be a free, growing response to Jesus.",
      "You will learn about the Church, Confession, Confirmation and the Eucharist. You will also learn to pray, attend Sunday Mass and live as a friend of Jesus. The journey is about your whole life, not about finishing a book.",
    ],
    talkAboutIt: "",
    talkGuidance: "",
    essentials: [
      {
        id: 101,
        question: "Does Jesus know and love you already?",
        answer: "Yes. He knows me and has loved me since before I could speak."
      },
      {
        id: 102,
        question: "Are you already a Christian?",
        answer: "Yes. I became a Christian when I was validly baptised."
      },
      {
        id: 103,
        question: "What is grace?",
        answer: "God's free gift of his own life and help."
      },
      {
        id: 104,
        question: "COMING INTO THE CATHOLIC CHURCH Does Jesus want you to follow him freely?",
        answer: "Yes. He invites me to answer his love with faith and a willing heart."
      },
    ],
    prayer: "Lord Jesus, thank you for knowing me and loving me. Thank you for my Baptism. Help me to hear your call and follow you freely. Amen.",
    thisWeek: "Make the Sign of the Cross each morning and say, \"Jesus, help me to follow you today.\" For the adult: Listen for the child's own desire and questions. Do not put a rehearsed answer in the child's mouth. COMING INTO THE CATHOLIC CHURCH"
  },
  {
    id: 2,
    number: 2,
    title: "The One God: Father, Son and Holy Spirit",
    purpose: "There is one God in three divine Persons: the Father, the Son and the Holy Spirit.",
    remember: "Three divine Persons - Father, Son and Holy Spirit - in one God.",
    rememberGaps: {
      id: 'rem-2',
      sentenceWithBlanks: "[Three] divine Persons - Father, Son and Holy Spirit - in [one God].",
      gaps: [
        {
          index: 0,
          word: "Three",
          options: ["Three", "One", "Two", "Four"],
          hint: "How many divine Persons."
        },
        {
          index: 1,
          word: "one God",
          options: ["one God", "three gods", "many gods", "no god"],
          hint: "Not three gods, but one."
        },
      ]
    },
    teachingParagraphs: [
      "There is only one God. He is eternal: he has always existed and will never cease to exist. God is perfectly good, holy, all-knowing and almighty. He created everything and holds it in being.",
      "God has shown us a wonderful mystery about himself. He is the Most Holy Trinity: Father, Son and Holy Spirit.",
      "These are three divine Persons, but not three gods. Each Person is truly God and possesses the one divine nature.",
      "The Father is God. The Son is God. The Holy Spirit is God. There is only one God. The Father is not the Son; the Son is not the Holy Spirit; the Holy Spirit is not the Father. The three Persons are distinct and perfectly united.",
      "The Father sent his eternal Son into the world. The Son became man as Jesus Christ to save us. The Holy Spirit gives life, strengthens faith and makes us holy. The Father, Son and Holy Spirit never act as three separate gods.",
      "You were baptised with water and the name of the Father, and of the Son, and of the Holy Spirit. That is why the Sign of the Cross is such an important prayer for you. When you say it, remember who gave you new life in Baptism.",
      "The Trinity is a mystery that is greater than anything our minds can fully explain. But we can truly know and believe what God has told us. We worship the Father, Son and Holy Spirit, the one God who made us and loves us.",
    ],
    talkAboutIt: "",
    talkGuidance: "",
    essentials: [
      {
        id: 105,
        question: "How many gods are there?",
        answer: "There is one God."
      },
      {
        id: 106,
        question: "Who are the three divine Persons?",
        answer: "The Father, the Son and the Holy Spirit."
      },
      {
        id: 107,
        question: "Is Jesus truly God?",
        answer: "Yes. He is God the Son, equal to the Father."
      },
      {
        id: 108,
        question: "What does your Sign of the Cross remind you of?",
        answer: "My Baptism in the name of the Father, Son and Holy Spirit."
      },
      {
        id: 109,
        question: "COMING INTO THE CATHOLIC CHURCH",
        answer: ""
      },
    ],
    prayer: "Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.",
    thisWeek: "Make the Sign of the Cross slowly before bed, remembering that you belong to the Holy Trinity. COMING INTO THE CATHOLIC CHURCH"
  },
  {
    id: 3,
    number: 3,
    title: "Creation, Sin and the Promise of Salvation",
    purpose: "God made us for goodness and friendship with him; when sin entered the world, he promised a Saviour.",
    remember: "Jesus Christ, who died and rose to bring us back to God.",
    rememberGaps: {
      id: 'rem-3',
      sentenceWithBlanks: "Jesus Christ, who [died and rose] to bring us [back to God].",
      gaps: [
        {
          index: 0,
          word: "died and rose",
          options: ["died and rose", "taught and healed", "travelled and preached", "was born and baptised"],
          hint: "The heart of the Gospel."
        },
        {
          index: 1,
          word: "back to God",
          options: ["back to God", "back to the Law", "back to the Temple", "back to ourselves"],
          hint: "What his death and rising achieved."
        },
      ]
    },
    teachingParagraphs: [
      "God made the world from nothing, and everything he created was good. He made human beings in his image, able to know him, choose freely and love. Our first parents, Adam and Eve, were created in friendship with God.",
      "But our first parents disobeyed God. This is called the Fall. Human nature was wounded by their sin, and the whole human family needs God's saving grace. The condition of being born without the original holiness God intended is called original sin. It is not a naughty choice made by a baby.",
      "Because you have already been validly baptised, original sin has been washed away in you. Baptism also forgave every personal sin, if any, committed before it. You received sanctifying grace and became an adopted child of God. You are not waiting to receive that gift for the first time at your Reception.",
      "After Baptism, however, we can still choose to do wrong. Personal sin happens when we knowingly and freely choose something against God's law: perhaps a lie, cruelty, selfishness or the refusal to do something good that we ought to do.",
      "An accident is not the same as a deliberate sin. Being tempted is not itself a sin. Something done to you without your free choice is not your sin. Jesus wants us to be honest, not frightened or confused.",
      "God did not abandon the human family after the Fall. He promised a Saviour and prepared his people through the history of Israel. That Saviour is Jesus Christ. He came to forgive, heal and bring us back to the Father.",
      "God's mercy does not mean that wrongdoing is unimportant. It means we can repent and return to him with hope.",
    ],
    talkAboutIt: "",
    talkGuidance: "",
    essentials: [
      {
        id: 110,
        question: "Who made the world?",
        answer: "God made everything from nothing, and his creation is good."
      },
      {
        id: 111,
        question: "What is original sin?",
        answer: "The fallen condition in which people are born without original holiness."
      },
      {
        id: 112,
        question: "What happened to original sin when you were baptised?",
        answer: "God forgave original sin and gave me sanctifying grace."
      },
      {
        id: 113,
        question: "COMING INTO THE CATHOLIC CHURCH Is an accident or an unwanted temptation a personal sin?",
        answer: "No. Personal sin involves a knowing and free wrong choice."
      },
    ],
    prayer: "Merciful Father, you made me for goodness. Thank you for the grace of Baptism. Help me to choose what is right and to return to you when I fall. Amen.",
    thisWeek: "With an adult, think of one wrong choice and one accident in an invented story; explain the difference. For the adult: Children must never be made to feel responsible for violence, abuse or anything another person has done to them. Follow safeguarding procedures if concerns arise outside the sacrament. COMING INTO THE CATHOLIC CHURCH"
  },
  {
    id: 4,
    number: 4,
    title: "Jesus Christ Our Saviour",
    purpose: "Jesus is the eternal Son of God made man, who saves us through his Cross and Resurrection.",
    remember: "Through his suffering, death and Resurrection.",
    rememberGaps: {
      id: 'rem-4',
      sentenceWithBlanks: "Through his [suffering], death and [Resurrection].",
      gaps: [
        {
          index: 0,
          word: "suffering",
          options: ["suffering", "teaching", "silence", "fasting"],
          hint: "What he endured for us."
        },
        {
          index: 1,
          word: "Resurrection",
          options: ["Resurrection", "Ascension", "Transfiguration", "Pentecost"],
          hint: "The victory on the third day."
        },
      ]
    },
    teachingParagraphs: [
      "God promised to send a Saviour, and the Saviour is Jesus Christ. Jesus is the eternal Son of God, who has always existed with the Father and the Holy Spirit.",
      "By the power of the Holy Spirit, the Son of God became man in the womb of the Blessed Virgin Mary. Mary is called the Mother of God because the child she bore is the eternal Son of God made man. She did not create his divinity.",
      "Jesus is one divine Person with two complete natures: divine and human. He is not half God and half man. He is truly God and truly human. He had a real human body, mind and will. He grew up in a family, experienced hunger and sadness, and shared our human life without sin.",
      "Jesus taught people about his Father, welcomed children, forgave sinners and healed the sick. His miracles reveal his divine power and mercy. But he came to do more than teach people to be good. He came to rescue us from sin and death.",
      "Jesus freely suffered and died upon the Cross for our salvation. The Cross is the perfect sacrifice of his love. He was buried and, on the third day, truly rose bodily from the dead. His risen body is glorified; he will never die again.",
      "Jesus ascended into heaven and reigns in glory. He is not absent from his Church. He is with us as he promised, and one day he will return to judge the living and the dead.",
      "Because Jesus is alive, you can pray to him today. He knows what you are facing and wants to help you follow him. He is not only a person from history. He is our living Lord and Saviour.",
    ],
    talkAboutIt: "",
    talkGuidance: "",
    essentials: [
      {
        id: 114,
        question: "Who is Jesus Christ?",
        answer: "The eternal Son of God made man."
      },
      {
        id: 115,
        question: "Is Jesus truly God and truly human?",
        answer: "Yes. He is one divine Person with two complete natures."
      },
      {
        id: 116,
        question: "COMING INTO THE CATHOLIC CHURCH Why did Jesus die on the Cross?",
        answer: "He freely gave his life to save us from sin."
      },
      {
        id: 117,
        question: "Did Jesus really rise from the dead?",
        answer: "Yes. He rose bodily on the third day and lives for ever."
      },
    ],
    prayer: "Lord Jesus Christ, Son of the living God, thank you for loving me and giving your life for us. Help me to follow you and live in your friendship. Amen.",
    thisWeek: "Look at a crucifix and say, \"Jesus, thank you for your love.\" Then remember that he is risen and alive. COMING INTO THE CATHOLIC CHURCH"
  },
  {
    id: 5,
    number: 5,
    title: "My Christian Baptism",
    purpose: "In my valid Baptism, Jesus forgave sin, gave me new life and made me his own for ever.",
    remember: "The sacrament of new birth through water and the Holy Spirit.",
    rememberGaps: {
      id: 'rem-5',
      sentenceWithBlanks: "The sacrament of [new birth] through [water] and the Holy Spirit.",
      gaps: [
        {
          index: 0,
          word: "new birth",
          options: ["new birth", "a new name", "a new school", "a new family"],
          hint: "What Baptism gives."
        },
        {
          index: 1,
          word: "water",
          options: ["water", "oil", "bread", "fire"],
          hint: "The sign used with the words."
        },
      ]
    },
    teachingParagraphs: [
      "Baptism is the doorway to Christian life. Jesus told his Apostles to make disciples of all nations and baptise them in the name of the Father, and of the Son, and of the Holy Spirit.",
      "At Baptism, true water is used with the words Christ gave his Church. God acts in the sacrament. Baptism is not simply a lovely welcome ceremony or a sign of what someone already feels. It truly gives a new beginning.",
      "In Baptism, original sin and all personal sins committed before it are forgiven. God gives sanctifying grace, makes the baptised person his adopted child, joins that person to Christ and brings them into his Church. Baptism also leaves a permanent spiritual mark, called a sacramental character.",
      "That is why Baptism can never be repeated. Even when a person has been baptised in another Christian community, that Baptism may be completely valid. If it was celebrated with true water, the Trinitarian words and the necessary intention, the Catholic Church honours it.",
      "Before your Reception, the parish priest must establish the facts of your Baptism, usually using a certificate or other reliable evidence. If something is uncertain, he will investigate. You and your family do not need to solve these questions alone.",
      "Coming into full communion means taking a further step in your Christian life. It does not mean starting again or pretending that the grace already given to you does not matter. The Catholic Church receives you as a baptised Christian; she does not baptise you again.",
      "You can thank Jesus for your Baptism, celebrate its anniversary and try to live each day as his child.",
    ],
    talkAboutIt: "",
    talkGuidance: "",
    essentials: [
      {
        id: 118,
        question: "What did God give you in Baptism?",
        answer: "Forgiveness, sanctifying grace and new life in Christ."
      },
      {
        id: 119,
        question: "Can valid Baptism be repeated?",
        answer: "No. It leaves a permanent spiritual character."
      },
      {
        id: 120,
        question: "COMING INTO THE CATHOLIC CHURCH Will you be baptised again when you become Catholic?",
        answer: "No. My valid Christian Baptism is honoured and not repeated."
      },
      {
        id: 121,
        question: "Who checks the earlier Baptism?",
        answer: "The parish priest, using the evidence and the law of the Church."
      },
    ],
    prayer: "Heavenly Father, thank you for my Baptism. Thank you for making me your child. Help me to grow in the grace you have already given me. Amen.",
    thisWeek: "Ask about your baptismal day and, if possible, look at a photograph or your certificate with your family. For the adult: This preparation route is not for a child already baptised Catholic. Questions about doubtful Baptism, Eastern Church membership or earlier Chrismation belong with the priest. COMING INTO THE CATHOLIC CHURCH"
  },
  {
    id: 6,
    number: 6,
    title: "Sacred Scripture, Tradition and the Creed",
    purpose: "God reveals his truth through Sacred Scripture and Sacred Tradition, faithfully handed on by the Church.",
    remember: "In Sacred Scripture and Sacred Tradition, one deposit of faith.",
    rememberGaps: {
      id: 'rem-6',
      sentenceWithBlanks: "In [Sacred Scripture] and [Sacred Tradition], one deposit of faith.",
      gaps: [
        {
          index: 0,
          word: "Sacred Scripture",
          options: ["Sacred Scripture", "the Creeds alone", "human wisdom", "the newspapers"],
          hint: "God's word written."
        },
        {
          index: 1,
          word: "Sacred Tradition",
          options: ["Sacred Tradition", "private opinion", "local custom", "modern fashion"],
          hint: "The faith handed down."
        },
      ]
    },
    teachingParagraphs: [
      "God wants us to know him. He has spoken to humanity, acted in history and revealed himself most fully through his Son, Jesus Christ.",
      "The Holy Bible is Sacred Scripture: the written word of God. The books of the Bible were written by human authors under the inspiration of the Holy Spirit. When we hear Scripture proclaimed at Mass, God is speaking to his people.",
      "Jesus also entrusted his teaching to the Apostles. They preached, celebrated the sacraments, prayed and passed on what they had received from him. This living handing-on is called Sacred Tradition. It is not simply a collection of later customs or favourite habits.",
      "Scripture and Sacred Tradition belong together. They form one sacred deposit of faith entrusted to the Church.",
      "The Pope and the bishops in communion with him serve this deposit through the Magisterium, the Church's teaching office. The Church does not invent a new Gospel; she guards, explains and hands on the Gospel of Christ.",
      "The Creed is a short profession of the truths Catholics believe. In the Apostles' Creed we profess faith in the Father, Jesus Christ, the Holy Spirit, the Church, the forgiveness of sins, the resurrection of the body and eternal life.",
      "When you are received into full communion, you will make a solemn Profession of Faith. This is more than saying words. You will tell the Church that you believe all that she believes, teaches and proclaims as revealed by God.",
      "You do not need to understand every mystery perfectly. We all keep learning. But faith means trusting God's truth and being willing to live by it.",
    ],
    talkAboutIt: "",
    talkGuidance: "",
    essentials: [
      {
        id: 122,
        question: "What is Sacred Scripture?",
        answer: "The inspired books of the Holy Bible."
      },
      {
        id: 123,
        question: "What is Sacred Tradition?",
        answer: "The living handing-on of the Apostles' teaching in the Church."
      },
      {
        id: 124,
        question: "COMING INTO THE CATHOLIC CHURCH What does the Magisterium do?",
        answer: "The Pope and bishops in communion with him faithfully teach the faith."
      },
      {
        id: 125,
        question: "Why do we learn the Creed?",
        answer: "It helps us profess the central truths God has revealed."
      },
    ],
    prayer: "Holy Spirit, help me listen to the Bible and receive the teaching of Jesus. Give me faith to trust his truth and courage to live by it. Amen.",
    thisWeek: "Begin learning the Apostles' Creed. Choose one line and ask the adult what it means. For the adult: The child is not expected to master every doctrine before Reception. Help the child understand what sincere trust in the Church's faith means. COMING INTO THE CATHOLIC CHURCH"
  },
  {
    id: 7,
    number: 7,
    title: "The Catholic Church and Full Communion",
    purpose: "Jesus founded one Church, and full communion unites Catholics in faith, sacraments and Church life.",
    remember: "To share fully in the Catholic faith, sacraments and unity of the Church.",
    rememberGaps: {
      id: 'rem-7',
      sentenceWithBlanks: "To share fully in the Catholic faith, [sacraments] and [unity] of the Church.",
      gaps: [
        {
          index: 0,
          word: "sacraments",
          options: ["sacraments", "rules", "traditions", "meetings"],
          hint: "Where grace is given."
        },
        {
          index: 1,
          word: "unity",
          options: ["unity", "division", "independence", "silence"],
          hint: "One body, not many."
        },
      ]
    },
    teachingParagraphs: [
      "Jesus founded his Church and entrusted his teaching and sacraments to the Apostles. He gave Saint Peter a special responsibility for the unity of the Church. The Pope is the Bishop of Rome and successor of Saint Peter; the bishops are successors of the Apostles.",
      "We say that the Church is one, holy, catholic and apostolic. She is one in the faith and sacraments Christ gave.",
      "She is holy because Christ makes her holy, although her members can sin. She is catholic because her mission reaches every nation. She is apostolic because she is founded on the Apostles and preserves their teaching and ministry.",
      "Catholics believe that the Church of Christ subsists in the Catholic Church, under the successor of Saint Peter and the bishops in communion with him. She possesses the fullness of the means of salvation entrusted by Christ.",
      "This does not mean that other Christians have no faith or grace. You already belong to Jesus through your valid Baptism. Many Christians outside full Catholic communion love Christ, read his word, pray sincerely and receive real gifts of grace. We thank God for what is holy and true among them.",
      "But Christ desires the unity of his followers. Full communion means being united in the Catholic profession of faith, the sacraments and communion with the Church's pastors. You are preparing to enter that fullness through a Profession of Faith and the Rite of Reception.",
      "You are not being asked to despise your Christian past or speak unkindly about another church community. We give thanks for your Baptism and build upon what God has already done.",
      "In the Catholic parish you will find a family for prayer, worship, service and lifelong friendship with Jesus.",
    ],
    talkAboutIt: "",
    talkGuidance: "",
    essentials: [
      {
        id: 126,
        question: "Who founded the Catholic Church?",
        answer: "Jesus Christ founded the Catholic Church."
      },
      {
        id: 127,
        question: "What are her four marks?",
        answer: "One, holy, catholic and apostolic."
      },
      {
        id: 128,
        question: "COMING INTO THE CATHOLIC CHURCH Who is the Pope?",
        answer: "The Bishop of Rome and successor of Saint Peter."
      },
      {
        id: 129,
        question: "What does full communion include?",
        answer: "Unity in Catholic faith, sacraments and communion with the Pope and bishops."
      },
    ],
    prayer: "Lord Jesus, you prayed that your followers might be one. Thank you for my Baptism. Lead me towards the fullness of life in your Church. Amen.",
    thisWeek: "At Mass, pray for the Pope, the Bishop of Nottingham, the parish priest and Christians of every tradition. COMING INTO THE CATHOLIC CHURCH"
  },
  {
    id: 8,
    number: 8,
    title: "Prayer, Sunday Mass and Christian Life",
    purpose: "Jesus calls me to pray, worship with his Church on Sunday and show my faith through love.",
    remember: "The Holy Sacrifice of the Mass.",
    rememberGaps: {
      id: 'rem-8',
      sentenceWithBlanks: "The [Holy Sacrifice] of [the Mass].",
      gaps: [
        {
          index: 0,
          word: "Holy Sacrifice",
          options: ["Holy Sacrifice", "a holy meal only", "a holy reading", "a holy song"],
          hint: "What the Mass truly is."
        },
        {
          index: 1,
          word: "the Mass",
          options: ["the Mass", "the Rosary", "Benediction", "the Office"],
          hint: "The name we give it."
        },
      ]
    },
    teachingParagraphs: [
      "Prayer is raising our minds and hearts to God. We can speak to him at any time and in any place. We adore him, thank him, ask forgiveness, pray for others and ask for what we need.",
      "Jesus taught us the Our Father. When we pray it, we call God our Father, ask for his Kingdom and his will, seek what we need and learn to forgive. We can also pray through the Psalms, listen to Scripture and speak to Jesus in our own words.",
      "Catholics worship and adore God alone: Father, Son and Holy Spirit. We honour Mary and the saints because they belong to God. We ask them to pray for us, as we ask friends on earth to pray for us. We do not worship them.",
      "Sunday is the Lord's Day because Jesus rose from the dead on the first day of the week. Catholics take part in Sunday Mass and on holy days of obligation, except when a serious reason excuses them. Sunday Mass is the centre of Catholic worship.",
      "You are already welcome to attend Sunday Mass with your family. Listen to the readings, pray, stand and kneel with the congregation as you are able, and learn the words of the responses. Until you are received into the full communion of the Catholic Church, do not ordinarily go forward to receive Holy Communion. The priest will explain what you should do.",
      "The Christian life is not only about church. Jesus asks us to love people at home, at school and everywhere. We tell the truth, forgive, care for the lonely, avoid cruelty and ask his help when being kind is hard.",
      "Small good habits matter. A few faithful minutes of prayer, Sunday worship and one act of kindness can help us grow in holiness.",
    ],
    talkAboutIt: "",
    talkGuidance: "",
    essentials: [
      {
        id: 130,
        question: "What is prayer?",
        answer: "Raising our minds and hearts to God."
      },
      {
        id: 131,
        question: "Which prayer did Jesus teach?",
        answer: "The Our Father."
      },
      {
        id: 132,
        question: "COMING INTO THE CATHOLIC CHURCH Why is Sunday special?",
        answer: "It is the Lord's Day, celebrating the Resurrection of Jesus."
      },
      {
        id: 133,
        question: "How should Catholic faith be seen at home and school?",
        answer: "Through truth, forgiveness, kindness and good choices."
      },
    ],
    prayer: "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
    thisWeek: "Pray the Our Father each day and come to Sunday Mass with your family or mentor. COMING INTO THE CATHOLIC CHURCH"
  },
  {
    id: 9,
    number: 9,
    title: "The Commandments, Sin and Conversion",
    purpose: "God shows me how to love; when I sin, he calls me to repent and begin again.",
    remember: "Be sorry, ask God's forgiveness, seek to make amends and turn back to him.",
    rememberGaps: {
      id: 'rem-9',
      sentenceWithBlanks: "Be [sorry], ask God's forgiveness, seek to [make amends] and turn back to him.",
      gaps: [
        {
          index: 0,
          word: "sorry",
          options: ["sorry", "angry", "afraid", "confused"],
          hint: "The first movement of repentance."
        },
        {
          index: 1,
          word: "make amends",
          options: ["make amends", "forget it", "blame others", "wait and see"],
          hint: "Putting right what we can."
        },
      ]
    },
    teachingParagraphs: [
      "God made us to love him and our neighbour. The Ten Commandments show us how to do that. They teach us to worship God, honour our parents, respect life, speak truthfully, be faithful and pure, and care for what belongs to others.",
      "Jesus teaches us the greatest commandments: love God with all our heart and love our neighbour as ourselves. He also gives us the Beatitudes, teaching us humility, mercy, purity and peace.",
      "Sin is a thought, word, action or failure to do good which we knowingly and freely choose against God's law. An accident is not a deliberate sin. Feeling angry is not itself a sin. Temptation is not a sin unless we freely agree to what is wrong.",
      "The Church distinguishes mortal and venial sin. Mortal sin requires grave matter, full knowledge and deliberate consent. It destroys charity in the soul and must be brought to sacramental Confession. Venial sin wounds friendship with God without destroying sanctifying grace. This distinction helps us tell the truth, not become afraid.",
      "Because you have already been baptised, you are preparing for First Confession before Reception. Jesus offers the Sacrament of Reconciliation to forgive sins committed after Baptism and restore his friendship when it has been lost.",
      "Conversion means turning away from sin and turning back to God. True sorrow includes a wish to avoid sin, make amends where possible and begin again with God's grace.",
      "Never confuse someone else's wrongdoing with your own sin. If another person harms or frightens you, tell a trusted safe adult. You are not responsible for wrongdoing forced upon you.",
    ],
    talkAboutIt: "",
    talkGuidance: "",
    essentials: [
      {
        id: 134,
        question: "What do the commandments teach us?",
        answer: "To love God and our neighbour."
      },
      {
        id: 135,
        question: "Is being tempted the same as sinning?",
        answer: "No. Temptation is not sin unless we freely consent."
      },
      {
        id: 136,
        question: "COMING INTO THE CATHOLIC CHURCH What is mortal sin?",
        answer: "A sin involving grave matter, full knowledge and deliberate consent."
      },
      {
        id: 137,
        question: "What is conversion?",
        answer: "Turning away from sin and returning to God."
      },
    ],
    prayer: "Holy Spirit, show me what is right. Give me courage to say no to sin. When I fall, help me be honest and return to Jesus with trust. Amen.",
    thisWeek: "With invented examples, discuss one way to make things right after a person has hurt someone else. For the adult: Do not ask the child to reveal sins intended for Confession. Never encourage exaggerated guilt, scrupulosity or blaming themselves for someone else's abuse. COMING INTO THE CATHOLIC CHURCH"
  },
  {
    id: 10,
    number: 10,
    title: "Jesus Forgives Me in Confession",
    purpose: "In Confession, Jesus forgives my sins through the priest and gives me grace to begin again.",
    remember: "To receive Jesus' forgiveness for sins committed after Baptism.",
    rememberGaps: {
      id: 'rem-10',
      sentenceWithBlanks: "To receive Jesus' [forgiveness] for sins committed after [Baptism].",
      gaps: [
        {
          index: 0,
          word: "forgiveness",
          options: ["forgiveness", "a warning", "a punishment", "a reminder"],
          hint: "What Jesus gives in the sacrament."
        },
        {
          index: 1,
          word: "Baptism",
          options: ["Baptism", "Confirmation", "the Eucharist", "Ordination"],
          hint: "Sins before it are washed away."
        },
      ]
    },
    teachingParagraphs: [
      "Jesus loves sinners and calls them back to friendship with God. After rising from the dead, he gave the Apostles authority to forgive sins in his name. Bishops and priests continue this ministry in the Sacrament of Penance and Reconciliation.",
      "Because you are already baptised, you prepare to receive First Confession before Reception into full communion.",
      "This is different from an unbaptised child, whose earlier sins are forgiven at Baptism.",
      "We begin by examining our conscience: prayerfully remembering the sins we have freely committed. We ask the Holy Spirit to help us see the truth without fear. We are sorry for our sins and sincerely intend, with God's grace, to avoid them in future.",
      "In Confession, we tell the priest our sins honestly and simply. We must confess remembered mortal sins in kind and number as far as possible; it is also good to confess venial sins. We do not need to give long stories or blame other people.",
      "The priest listens, offers help and gives a penance. We make an Act of Contrition. Then the priest speaks the words of absolution. Christ forgives sins through this sacramental act. We answer \"Amen\", leave in peace and complete our penance.",
      "Confession is private. The priest is bound by the absolute seal of Confession: he can never reveal what he learns there. Parents, mentors and catechists must not ask what you confessed. You may always ask the priest for help with the words.",
      "The purpose of First Confession is not to frighten you. It is to help you meet the mercy of Jesus and begin again with joy.",
    ],
    talkAboutIt: "",
    talkGuidance: "",
    essentials: [
      {
        id: 138,
        question: "Who forgives us in Confession?",
        answer: "Jesus Christ, through the ministry of the priest."
      },
      {
        id: 139,
        question: "What is an examination of conscience?",
        answer: "Prayerfully remembering the sins we have freely chosen."
      },
      {
        id: 140,
        question: "COMING INTO THE CATHOLIC CHURCH What is absolution?",
        answer: "The sacramental forgiveness Christ gives through the priest."
      },
      {
        id: 141,
        question: "What if I forget what to say?",
        answer: "I can tell the priest, and he will guide me."
      },
    ],
    prayer: "O my God, because you are so good, I am very sorry that I have sinned against you, and by the help of your grace I will not sin again. Amen.",
    thisWeek: "Practise the order of Confession with the adult, using only invented sins, never real personal sins. For the adult: Rehearse only the steps and words. Do not imitate sacramental absolution or ask for the child's private confession. If a safeguarding concern is disclosed outside the sacrament, follow diocesan procedures. COMING INTO THE CATHOLIC CHURCH"
  },
  {
    id: 11,
    number: 11,
    title: "The Holy Sacrifice of the Mass",
    purpose: "At Mass, Jesus makes his one sacrifice on the Cross present to his Church sacramentally.",
    remember: "The sacramental making-present of the one Sacrifice of Christ on the Cross.",
    rememberGaps: {
      id: 'rem-11',
      sentenceWithBlanks: "The sacramental [making-present] of the one Sacrifice of Christ on [the Cross].",
      gaps: [
        {
          index: 0,
          word: "making-present",
          options: ["making-present", "remembering only", "repeating", "explaining"],
          hint: "Not a repeat, but a re-presenting."
        },
        {
          index: 1,
          word: "the Cross",
          options: ["the Cross", "the Manger", "the Upper Room", "the Tomb"],
          hint: "Where the one sacrifice was offered."
        },
      ]
    },
    teachingParagraphs: [
      "Jesus loves us so much that he gave himself on the Cross. His sacrifice was offered once for all. He does not need to die again. The offering he made is perfect and never loses its saving power.",
      "On the night before he died, Jesus celebrated the Last Supper with his Apostles. He took bread and said that it was his Body. He took the chalice and spoke of his Blood. He told them to do this in memory of him. In this way he entrusted the Eucharist to his Church.",
      "The Mass is not merely an ordinary meal or a play acting out the Last Supper. It is both the sacrificial memorial of Christ and a sacred banquet. At Mass, by the power of Jesus, his one sacrifice on Calvary is made present sacramentally in an unbloody manner.",
      "Jesus is the true priest and sacrifice. The ordained priest acts in the Person of Christ the Head. The whole Church joins in Christ's offering to the Father through prayer and self-offering.",
      "There are two principal parts of Mass. In the Liturgy of the Word we listen to the Scriptures, hear the homily, profess our faith and pray for the world. In the Liturgy of the Eucharist the gifts are brought to the altar, the Eucharistic Prayer is offered, and Christ gives himself to his people.",
      "Even before you receive Holy Communion, you can take part through attentive listening, prayer, singing and joining the responses. You can offer Jesus your joys, worries and hopes.",
      "The Mass is the heart of Catholic life because it brings us into the saving mystery of Christ.",
    ],
    talkAboutIt: "",
    talkGuidance: "",
    essentials: [
      {
        id: 142,
        question: "When did Jesus institute the Eucharist?",
        answer: "At the Last Supper."
      },
      {
        id: 143,
        question: "Does Jesus die again at every Mass?",
        answer: "No. His one sacrifice is made present sacramentally."
      },
      {
        id: 144,
        question: "What are the two main parts of Mass?",
        answer: "The Liturgy of the Word and the Liturgy of the Eucharist."
      },
      {
        id: 145,
        question: "COMING INTO THE CATHOLIC CHURCH Who can consecrate the Eucharist?",
        answer: "A validly ordained bishop or priest."
      },
    ],
    prayer: "Eternal Father, I offer you my prayers, my joys and my difficulties with the one sacrifice of Jesus. Help me worship you with all my heart. Amen.",
    thisWeek: "During Sunday Mass notice when the readings finish and the Liturgy of the Eucharist begins. COMING INTO THE CATHOLIC CHURCH"
  },
  {
    id: 12,
    number: 12,
    title: "The Holy Eucharist and the Real Presence",
    purpose: "The Holy Eucharist is truly Jesus Christ: his Body, Blood, Soul and Divinity.",
    remember: "Jesus Christ himself, Body, Blood, Soul and Divinity.",
    rememberGaps: {
      id: 'rem-12',
      sentenceWithBlanks: "Jesus Christ [himself], [Body, Blood, Soul and Divinity].",
      gaps: [
        {
          index: 0,
          word: "himself",
          options: ["himself", "a symbol of him", "a memory of him", "a picture of him"],
          hint: "Not a symbol of him."
        },
        {
          index: 1,
          word: "Body, Blood, Soul and Divinity",
          options: ["Body, Blood, Soul and Divinity", "bread and wine only", "a sign of grace", "a spiritual idea"],
          hint: "All of him, under the appearances."
        },
      ]
    },
    teachingParagraphs: [
      "At the Last Supper, Jesus took bread and said, \"This is my body.\" He also gave the chalice to his Apostles and spoke of his Blood. He meant what he said. The Eucharist is not merely a symbol that reminds us of him.",
      "During Mass, the priest speaks the words of consecration within the Eucharistic Prayer. By the power of the Holy Spirit and the words of Christ, the whole substance of bread and wine becomes the Body and Blood of Jesus.",
      "The Church calls this change transubstantiation. The appearances stay the same: the Host looks, feels and tastes as bread did. But the reality has changed. Jesus Christ is truly, really and substantially present.",
      "The whole Christ is present under the appearance of bread and under the appearance of wine: Body, Blood, Soul and Divinity. He is not divided into parts. The Eucharist is the risen Jesus who loves us and gave himself for our salvation.",
      "Because Jesus is truly present, Catholics adore the Blessed Sacrament. The consecrated Hosts are kept in the tabernacle so that Holy Communion may be taken to the sick and the faithful can pray before the Lord.",
      "You can already spend time praying to Jesus near the tabernacle. You are learning to recognise whom you will receive when you enter full communion with the Catholic Church.",
      "Holy Communion is not a prize for learning enough facts. It is Christ's gift, to be received with faith and proper preparation. The same Jesus who calls you into his Church will give himself to you in this sacrament.",
    ],
    talkAboutIt: "",
    talkGuidance: "",
    essentials: [
      {
        id: 146,
        question: "Who is present in the Holy Eucharist?",
        answer: "Jesus Christ, Body, Blood, Soul and Divinity."
      },
      {
        id: 147,
        question: "What is transubstantiation?",
        answer: "The change of the whole substance of bread and wine into Christ's Body and Blood."
      },
      {
        id: 148,
        question: "Is the Eucharist only a reminder or symbol?",
        answer: "No. The whole risen Christ is truly present."
      },
      {
        id: 149,
        question: "COMING INTO THE CATHOLIC CHURCH Why do Catholics adore the Blessed Sacrament?",
        answer: "Because it is Jesus Christ himself."
      },
    ],
    prayer: "Lord Jesus, I believe you are truly present in the Blessed Sacrament. Increase my faith and love. Help me prepare to receive you reverently and joyfully. Amen.",
    thisWeek: "Spend a few moments in prayer before the tabernacle. Say, \"My Lord and my God.\" COMING INTO THE CATHOLIC CHURCH"
  },
  {
    id: 13,
    number: 13,
    title: "The Profession of Faith and Reception",
    purpose: "I will freely profess the Catholic faith and be received into the full communion of the Church.",
    remember: "My free and sincere yes to the Catholic faith received from Jesus Christ.",
    rememberGaps: {
      id: 'rem-13',
      sentenceWithBlanks: "My [free and sincere] [yes] to the Catholic faith received from Jesus Christ.",
      gaps: [
        {
          index: 0,
          word: "free and sincere",
          options: ["free and sincere", "forced", "half-hearted", "secret"],
          hint: "How the yes must be given."
        },
        {
          index: 1,
          word: "yes",
          options: ["yes", "maybe", "later", "no"],
          hint: "What reception is."
        },
      ]
    },
    teachingParagraphs: [
      "You are already baptised, so you are not going to be baptised again. The Catholic Church honours your first Baptism as a real gift from Jesus.",
      "You are preparing instead to enter the full communion of the Catholic Church. Full communion is a sharing in Catholic faith, sacramental life and communion with the Pope and bishops.",
      "At the Rite of Reception, the priest will invite you to profess the Catholic faith. You will say that you believe all that the holy Catholic Church believes, teaches and proclaims to be revealed by God. These words show that you trust the truth Jesus has entrusted to his Church.",
      "The words of the Profession of Faith are important. But they are not a trick question or a school examination. You are not promising that you understand every mystery perfectly or that you will never have another question. You are saying a sincere yes to the faith and expressing a desire to live by it.",
      "After the Profession of Faith, the priest formally receives you into the Catholic Church. The celebration follows the approved rite, and the priest will explain the steps before the day.",
      "Ordinarily, a baptised child who is being received and has not already received valid Confirmation is confirmed at Reception and then receives First Holy Communion. The exact sequence is governed by the proper rite and the child's circumstances.",
      "You can prepare by learning what the words mean, praying with your family, attending Sunday Mass and speaking honestly with the priest about anything that worries you.",
      "Reception is a beginning, not graduation. It is the joyful step of living the fullness of Catholic communion for the rest of your life.",
    ],
    talkAboutIt: "",
    talkGuidance: "",
    essentials: [
      {
        id: 150,
        question: "Will the Church baptise you again?",
        answer: "No. My first valid Baptism is not repeated."
      },
      {
        id: 151,
        question: "What will you profess?",
        answer: "All that the Catholic Church believes, teaches and proclaims as revealed by God."
      },
      {
        id: 152,
        question: "COMING INTO THE CATHOLIC CHURCH Must you understand every teaching perfectly?",
        answer: "No. I must sincerely accept the faith and continue learning."
      },
      {
        id: 153,
        question: "Who formally receives you?",
        answer: "The priest, acting in the name of the Catholic Church."
      },
    ],
    prayer: "Lord Jesus, help me speak the truth with faith and love. Give me courage to profess the Catholic faith freely and live it each day. Amen.",
    thisWeek: "Read the Profession of Faith in Appendix C slowly with an adult. Ask about any word you do not understand. For the adult: The priest determines the approved rite, Confirmation faculty and any special arrangements. A validly baptised candidate is not a catechumen. COMING INTO THE CATHOLIC CHURCH"
  },
  {
    id: 14,
    number: 14,
    title: "Confirmation and the Gift of the Holy Spirit",
    purpose: "Confirmation strengthens the grace of my Baptism and seals me with the gift of the Holy Spirit.",
    remember: "To be strengthened and sealed by the Holy Spirit for life in Christ.",
    rememberGaps: {
      id: 'rem-14',
      sentenceWithBlanks: "To be strengthened and [sealed] by the [Holy Spirit] for life in Christ.",
      gaps: [
        {
          index: 0,
          word: "sealed",
          options: ["sealed", "reminded", "warned", "taught"],
          hint: "Marked with the Spirit."
        },
        {
          index: 1,
          word: "Holy Spirit",
          options: ["Holy Spirit", "a saint", "an angel", "the priest"],
          hint: "Who strengthens us."
        },
      ]
    },
    teachingParagraphs: [
      "You received the Holy Spirit at Baptism. God made you his child and gave you sanctifying grace. In Confirmation the same Holy Spirit strengthens baptismal grace and gives a special outpouring of his gifts.",
      "Jesus promised the Holy Spirit to his Apostles. At Pentecost, the Spirit gave them courage to proclaim Christ and live as his witnesses. The Holy Spirit continues to strengthen Christians today.",
      "The Sacrament of Confirmation is celebrated through anointing with sacred chrism on the forehead, together with the sacramental words and the laying on of hands. The minister says, \"Be sealed with the Gift of the Holy Spirit.\"",
      "You answer, \"Amen.\"",
      "Confirmation gives a permanent spiritual seal or character. Like Baptism, it cannot be repeated. It joins us more firmly to the Church and strengthens us to confess our faith and serve Christ.",
      "The Church names seven gifts of the Holy Spirit: wisdom, understanding, counsel, fortitude, knowledge, piety and fear of the Lord. These gifts help us know and love God, choose wisely, remain brave in difficulties and live with reverence.",
      "A practising Catholic sponsor will help you by prayer and good example. You may also choose a saint to imitate and ask for intercession. The parish priest will help your family understand the requirements.",
      "When a priest receives a baptised Christian into full communion, he ordinarily confirms that person as part of the same celebration, provided Confirmation has not already been validly received. Special situations are dealt with by the priest according to the Church's law.",
      "Confirmation is not a prize for being older or finishing lessons. It is Christ's sacramental gift for a life of faith and witness.",
    ],
    talkAboutIt: "",
    talkGuidance: "",
    essentials: [
      {
        id: 154,
        question: "Who is the Holy Spirit?",
        answer: "The third Person of the Most Holy Trinity."
      },
      {
        id: 155,
        question: "COMING INTO THE CATHOLIC CHURCH What does Confirmation give?",
        answer: "A special outpouring of the Holy Spirit strengthening baptismal grace."
      },
      {
        id: 156,
        question: "Can Confirmation be repeated?",
        answer: "No. It gives a permanent spiritual seal."
      },
      {
        id: 157,
        question: "What are the seven gifts of the Holy Spirit?",
        answer: "Wisdom, understanding, counsel, fortitude, knowledge, piety and fear of the Lord."
      },
    ],
    prayer: "Come, Holy Spirit, fill my heart with your love. Help me speak the truth, choose what is good and follow Jesus with courage. Amen.",
    thisWeek: "Choose one gift of the Holy Spirit and ask for help to use it in a real situation this week. For the adult: Any earlier valid Confirmation or Eastern Chrismation must be checked by the priest; the sacrament is never repeated. COMING INTO THE CATHOLIC CHURCH"
  },
  {
    id: 15,
    number: 15,
    title: "Receiving First Holy Communion",
    purpose: "In Holy Communion, the risen Jesus gives himself to me as the Bread of Life.",
    remember: "Amen - I believe.",
    rememberGaps: {
      id: 'rem-15',
      sentenceWithBlanks: "[Amen] - [I believe].",
      gaps: [
        {
          index: 0,
          word: "Amen",
          options: ["Amen", "Alleluia", "Hosanna", "Glory be"],
          hint: "The word spoken when receiving."
        },
        {
          index: 1,
          word: "I believe",
          options: ["I believe", "I hope", "I obey", "I agree"],
          hint: "What Amen means here."
        },
      ]
    },
    teachingParagraphs: [
      "You are preparing to receive a wonderful gift: Jesus Christ himself in Holy Communion. He gives us his Body, Blood, Soul and Divinity under the appearances of bread and wine.",
      "When you are received into full communion with the Catholic Church, and have received Confirmation where appropriate, you will normally receive your First Holy Communion during the same celebration. The priest will explain the order for your particular day.",
      "We prepare to receive worthily. We believe that Jesus is really present. We pray, take part reverently in Mass and come with a desire to be close to him. A Catholic conscious of mortal sin must receive sacramental absolution before Holy Communion. If you are worried or unsure, speak privately with the priest rather than becoming frightened.",
      "The Eucharistic fast ordinarily means no food or drink for at least one hour before receiving Holy Communion, except water and medicine. The Church provides certain exceptions, including for the sick, which the priest can explain.",
      "During the Communion procession, approach quietly and reverently. Make the gesture of reverence directed by the Church. When the minister says, \"The Body of Christ\", answer clearly, \"Amen\". Receive the Sacred Host reverently in the approved manner, on the tongue or in the hand, and consume it immediately in the presence of the minister.",
      "Return to your place and speak to Jesus in your heart. Thank him for loving you and giving himself to you. Pray for your family, the Church and people in need.",
      "Your First Holy Communion is not the last. Jesus wants to nourish you throughout your life. Each Sunday Mass is an invitation to worship him faithfully and receive him when you are properly disposed.",
    ],
    talkAboutIt: "",
    talkGuidance: "",
    essentials: [
      {
        id: 158,
        question: "Whom do we receive in Holy Communion?",
        answer: "Jesus Christ, Body, Blood, Soul and Divinity."
      },
      {
        id: 159,
        question: "What does your answer \"Amen\" mean?",
        answer: "I believe that this is the Body of Christ."
      },
      {
        id: 160,
        question: "COMING INTO THE CATHOLIC CHURCH What is the ordinary Eucharistic fast?",
        answer: "No food or drink for one hour before Communion, except water and medicine."
      },
      {
        id: 161,
        question: "What should you do after receiving?",
        answer: "Adore Jesus, thank him and pray quietly."
      },
    ],
    prayer: "Lord Jesus, I am not worthy that you should enter under my roof, but only say the word and my soul shall be healed. Amen.",
    thisWeek: "Practise the movement and words of receiving Holy Communion with an adult, following the parish's guidance. Do not pretend to celebrate Mass. COMING INTO THE CATHOLIC CHURCH"
  },
  {
    id: 16,
    number: 16,
    title: "Living in Full Communion",
    purpose: "Reception begins a lifelong Catholic life of Sunday Mass, prayer, the sacraments and love.",
    remember: "By Sunday Mass, prayer, the sacraments, learning the faith and loving others.",
    rememberGaps: {
      id: 'rem-16',
      sentenceWithBlanks: "By [Sunday Mass], prayer, the sacraments, learning the faith and [loving others].",
      gaps: [
        {
          index: 0,
          word: "Sunday Mass",
          options: ["Sunday Mass", "private prayer only", "a monthly Mass", "a school assembly"],
          hint: "The weekly heart of the life."
        },
        {
          index: 1,
          word: "loving others",
          options: ["loving others", "keeping the rules", "reading widely", "giving money"],
          hint: "The proof of the faith."
        },
      ]
    },
    teachingParagraphs: [
      "Coming into full communion is not the end of your journey with Jesus. It is a new beginning in the Catholic Church, where you will keep growing in faith, hope and charity for the rest of your life.",
      "You are called to live as a disciple every day. The centre of your week is Sunday Mass. You will hear God's word, worship the Father through Jesus Christ and receive Holy Communion when properly prepared. The Eucharist helps you grow in love and holiness.",
      "Try to pray each morning and evening. Thank God for blessings, ask him to help you choose well, read or listen to Scripture, and speak to Jesus honestly when you are happy or sad. Even short prayers can be sincere and important.",
      "You will sometimes make wrong choices. Do not hide from Jesus. Repent, ask for help and repair harm where possible. Regular Confession helps you grow in grace and strengthen your friendship with Christ. Mortal sins must be confessed before receiving Holy Communion again.",
      "You are part of a parish family. Learn the names of people, take part in worship and parish life, and discover ways to serve. The Holy Spirit strengthens you to be a witness to Christ through truth, kindness, courage and charity.",
      "Keep learning the Catholic faith. Ask questions, learn the prayers, honour Our Lady and the saints, and return to the Catechism and Scripture throughout your life.",
      "You do not need to be perfect already. Jesus gives the grace you need to grow. A Catholic is someone who belongs to Christ, perseveres in his Church and keeps returning to his mercy.",
      "You have received real gifts from Jesus. Now learn to live them with love.",
    ],
    talkAboutIt: "",
    talkGuidance: "",
    essentials: [
      {
        id: 162,
        question: "Is Reception the end of learning to be Catholic?",
        answer: "No. It begins a lifelong Catholic life."
      },
      {
        id: 163,
        question: "What should be at the centre of each Sunday?",
        answer: "Holy Mass."
      },
      {
        id: 164,
        question: "COMING INTO THE CATHOLIC CHURCH What sacrament forgives sins committed after Baptism?",
        answer: "The Sacrament of Penance and Reconciliation."
      },
      {
        id: 165,
        question: "How do we show that we belong to Jesus?",
        answer: "By worship, prayer, truth, kindness, forgiveness and service."
      },
    ],
    prayer: "Lord Jesus, thank you for calling me into the full communion of your Church. Keep me close to you in the Mass and the sacraments. Help me love and serve others all my life. Amen.",
    thisWeek: "Choose one small, realistic Catholic habit to begin or strengthen with your family this week. For the adult: Plan continued Sunday worship, Confession, family prayer and parish belonging after Reception. No child should be left unsupported once the celebration has taken place. COMING INTO THE CATHOLIC CHURCH Appendix A | The Journey Step by Step This is a personal pathway for a child who is already validly baptised, not a rigid sixteen-week course. The child's family, baptismal history, freedom, age, understanding and developing Christian life are considered together. The parish priest will explain the actual order and rites. 1. Enquiry and welcome The child and family meet the priest, ask questions and begin attending Sunday Mass with the parish. 2. Establish the Baptism The parish obtains reliable evidence and verifies that the Baptism was valid, checking any special circumstances. 3. Learn and live the faith The child learns Catholic belief, begins or deepens daily prayer, learns the Mass and becomes at home in parish life. 4. Prepare for First Confession Because the child is already baptised, the Sacrament of Penance is received before Reception, with full respect for privacy. 5. Pastoral discernment The priest speaks with the child and family about faith, understanding, free desire and readiness. 6. Profession of Faith and Reception The child freely professes the Catholic faith and is formally received into full communion. 7. Confirmation If the child has not already been validly confirmed, Confirmation ordinarily follows Reception, according to the approved rite. 8. First Holy Communion The newly received child normally receives the Lord in the Eucharist during the same celebration. 9. Continuing formation Family, sponsor and parish continue to help the child grow through Sunday Mass, the sacraments, prayer and charity. REMEMBER A baptised candidate for Reception is not an unbaptised catechumen. Valid Baptism is never repeated. Do not use the Rite of Acceptance into the Order of Catechumens as though the child were unbaptised. COMING INTO THE CATHOLIC CHURCH Appendix B | First Confession Step by Step Jesus offers his mercy in Confession. The priest will guide the child. The words do not need to be perfect; honesty, contrition and trust matter. Personal sins are never to be disclosed to a parent, mentor or group. 1. Prepare Ask the Holy Spirit for light. Examine your conscience, be sorry for sin and sincerely intend to change. 2. Begin Make the Sign of the Cross. You may say: \"Bless me, Father, for I have sinned. This is my first Confession.\" 3. Confess Tell the priest your sins simply and honestly. You may finish: \"For these and all my sins, I am truly sorry.\" 4. Listen The priest may speak with you or give advice. He will give you a penance. Ask for help if anything is unclear. 5. Pray When invited, say the Act of Contrition as sincerely as you can. 6. Receive absolution Listen prayerfully as the priest gives sacramental absolution. Answer \"Amen\". 7. Give thanks Leave in peace, complete your penance and thank Jesus for his mercy. IF I FEEL NERVOUS \"Father, this is my first Confession. Please help me.\" The priest will guide you. A simple examination of conscience Begin with the Sign of the Cross and ask the Holy Spirit to help you see your choices truthfully. Think about sins you have freely committed since Baptism. These questions are suggestions; they are not a list of things every child has done. • Have I prayed to God, kept Sunday holy and spoken his name reverently? • Have I obeyed and treated parents, carers and teachers with respect? • Have I lied, cheated, blamed someone falsely or broken a promise? • Have I deliberately hurt, frightened, excluded or bullied someone, including online? • Have I refused to forgive or tried to make others unhappy? • Have I stolen, damaged what belongs to someone else or refused to repair harm? • Have I treated my own body and the bodies and dignity of others with respect? • Have I been selfish, greedy or unkind when I could have helped? • What good did I know I ought to do but freely refused to do? COMING INTO THE CATHOLIC CHURCH FOR YOUR SAFETY An accident, unwanted temptation or something done to you without your free choice is not your sin. If someone has harmed, threatened or frightened you, speak to a trusted safe adult outside Confession so that you can be protected. For adults: Never ask the child which sins were confessed, either before or after the sacrament. Follow current safeguarding procedures for anything reported outside sacramental Confession. The seal of Confession remains absolute. COMING INTO THE CATHOLIC CHURCH Appendix C | The Profession of Faith and Reception This is a simple explanation of the Rite of Reception, not a script replacing the Church's liturgical book. The priest will use the approved rite and explain the exact steps. An invitation The priest invites the baptised candidate to make the Catholic Profession of Faith freely. Profession of Faith The child professes the Catholic faith, showing trust in all that the Church teaches as revealed by God. Act of Reception The priest formally receives the child into the full communion of the Catholic Church. A welcome The Church gives thanks for the child's valid Baptism and welcomes the child into full Catholic communion. The sacraments of initiation Confirmation (where not previously validly received) and First Holy Communion ordinarily follow in the approved celebration. The Catholic Profession of Faith I believe and profess all that the holy Catholic Church believes, teaches, and proclaims to be revealed by God. This profession is more than a speech. It is a sincere personal act of faith. The child does not claim to understand every mystery perfectly but freely accepts the Catholic faith and is willing to continue learning and living it. THE IMPORTANT TRUTH Valid Christian Baptism is never repeated. A child baptised outside the Catholic Church is received as a baptised Christian, not initiated as though unbaptised. The exact celebration, wording, minister, sponsor and any adaptations are determined by the approved rite and by the parish priest. COMING INTO THE CATHOLIC CHURCH Appendix D | Confirmation Step by Step Confirmation strengthens the new life already given at Baptism and seals the Christian with the gift of the Holy Spirit. The steps below help the child recognise the signs; the approved rite governs the celebration. 1. Prayer for the Holy Spirit The minister invites the Church to pray for the gift of the Holy Spirit and his seven gifts. 2. Laying on of hands The minister extends his hands and prays for the outpouring of the Holy Spirit. 3. Anointing with sacred chrism The child approaches with a sponsor. The minister anoints the forehead with sacred chrism. 4. Sacramental words The minister says, \"N., be sealed with the Gift of the Holy Spirit.\" The child answers, \"Amen.\" 5. Sign of peace The minister gives a sign of peace, showing unity with Christ and the Church. The seven gifts of the Holy Spirit Wisdom - helps us love God above everything else. Understanding - helps us grasp the faith more deeply. Counsel - helps us judge what is right. Fortitude - gives us courage and perseverance. Knowledge - helps us see the world in the light of God. Piety - moves us to love and worship God as his children. Fear of the Lord - gives reverence for God and a desire not to offend him. A sponsor should be a suitable, practising Catholic who can pray for the child and help them follow Christ. The priest will advise on canonical requirements. A confirmation saint may be chosen as a friend and example in faith, but the child's baptismal name may also be kept. IMPORTANT If Confirmation or Chrismation has already been validly received, it must not be repeated. Cases involving Eastern Churches or uncertainty about sacramental history must be referred to the parish priest. COMING INTO THE CATHOLIC CHURCH Appendix E | A Child's Guide to Mass and Holy Communion Mass is the Church's greatest prayer. These short explanations help a child recognise what is happening and take part attentively. Introductory Rites We gather, make the Sign of the Cross, ask for mercy, praise God and pray together. Liturgy of the Word We hear Scripture, listen to the homily, profess faith and pray for the Church and the world. Preparation of the Gifts Bread and wine are brought to the altar. We offer ourselves with Jesus. Eucharistic Prayer The Church gives thanks to the Father. By the Holy Spirit and Christ's words, the gifts become Christ's Body and Blood. Communion Rite We pray the Our Father, ask for peace and prepare to receive the Lamb of God. Holy Communion The minister says \"The Body of Christ\" and we answer \"Amen\". We receive reverently and consume the Sacred Host at once. Thanksgiving We adore Jesus, thank him and pray for others. Dismissal We are sent to live the Gospel and serve our neighbour. Receiving the Sacred Host • Be baptised, received into full Catholic communion and properly disposed. • Observe the one-hour Eucharistic fast, except water and medicine, subject to the Church's lawful exceptions. • Approach calmly and make the appropriate gesture of reverence. • When the minister says \"The Body of Christ\", answer clearly \"Amen\". • Receive reverently on the tongue or in the hand according to approved practice, and consume the Host immediately in the minister's presence. • Return to your place and thank Jesus quietly for his gift. REMEMBER If conscious of mortal sin, receive sacramental absolution before Holy Communion. If uncertain, speak privately with the priest; do not be frightened or guess. COMING INTO THE CATHOLIC CHURCH Appendix F | Prayers to Learn and Pray These prayers may be learnt slowly, used during family prayer and returned to often. Children should understand their meaning, not merely repeat sounds from memory. Sign of the Cross In the name of the Father, and of the Son, and of the Holy Spirit. Amen. Our Father Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen. Hail Mary Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen. Glory Be Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen. Act of Contrition O my God, because you are so good, I am very sorry that I have sinned against you, and by the help of your grace I will not sin again. Amen. COMING INTO THE CATHOLIC CHURCH Come, Holy Spirit Come, Holy Spirit, fill the hearts of your faithful and kindle in them the fire of your love. Amen. Before Holy Communion Lord, I am not worthy that you should enter under my roof, but only say the word and my soul shall be healed. After Holy Communion Lord Jesus, I adore you and thank you for giving yourself to me. Keep me close to you and make my life pleasing to you. Amen. The Apostles' Creed I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen. The Ten Commandments 1. I am the Lord your God: you shall not have strange gods before me. 2. You shall not take the name of the Lord your God in vain. 3. Remember to keep holy the Lord's Day. 4. Honour your father and your mother. 5. You shall not kill. 6. You shall not commit adultery. COMING INTO THE CATHOLIC CHURCH 7. You shall not steal. 8. You shall not bear false witness against your neighbour. 9. You shall not covet your neighbour's wife. 10. You shall not covet your neighbour's goods. The Eight Beatitudes • Blessed are the poor in spirit, for theirs is the kingdom of heaven. • Blessed are those who mourn, for they shall be comforted. • Blessed are the meek, for they shall inherit the earth. • Blessed are those who hunger and thirst for righteousness, for they shall be satisfied. • Blessed are the merciful, for they shall obtain mercy. • Blessed are the pure in heart, for they shall see God. • Blessed are the peacemakers, for they shall be called children of God. • Blessed are those who are persecuted for righteousness, for theirs is the kingdom of heaven. The Precepts of the Church - for growing Catholics • Participate in Mass on Sundays and holy days of obligation and rest from unnecessary servile work. • Confess serious sins at least once a year. • Receive Holy Communion at least during the Easter season. • Observe the days of fasting and abstinence established by the Church. • Help provide for the needs of the Church according to your ability. COMING INTO THE CATHOLIC CHURCH Appendix G | Summary Catechism These short questions draw together the key truths of the sixteen conversations. They are optional aids for remembering and discussing the faith, not a list of questions that must all be passed before Reception. 1. Why did God make us? To know, love and serve him, and to be happy with him in heaven. 2. What is grace? God's free gift of his life and help. 3. Who is the Most Holy Trinity? Father, Son and Holy Spirit: three divine Persons in one God. 4. Who made the world? God made everything from nothing and made it good. 5. What is original sin? The fallen condition in which we are born without original holiness. 6. What happened to original sin at Baptism? It was forgiven by the grace of Christ. 7. Who is Jesus Christ? The eternal Son of God made man, true God and true man. 8. How did Jesus redeem us? By his suffering, death and Resurrection. 9. Did Jesus rise bodily? Yes. He rose bodily on the third day. 10. What is Baptism? The sacrament of new birth by water and the Holy Spirit. 11. Can valid Baptism be repeated? No. It leaves a permanent spiritual character. 12. Are you already Christian? Yes. I became Christian through valid Baptism. 13. What is Sacred Scripture? The word of God written under the inspiration of the Holy Spirit. 14. What is Sacred Tradition? The living handing-on of the Apostles' teaching in the Church. 15. Who founded the Catholic Church? Jesus Christ founded the Catholic Church. 16. What are the four marks of the Church? One, holy, catholic and apostolic. 17. What does full communion mean? Unity in Catholic faith, sacraments and communion with the Pope and bishops. 18. What is prayer? Raising our minds and hearts to God. COMING INTO THE CATHOLIC CHURCH 19. Why do Catholics attend Sunday Mass? To worship God and join the Church in the saving mysteries of Christ. 20. What do the Commandments teach? How to love God and our neighbour. 21. Is temptation itself a sin? No. Only when we freely consent to what is wrong. 22. What three things are required for mortal sin? Grave matter, full knowledge and deliberate consent. 23. What is conversion? Turning away from sin and returning to God. 24. Who forgives us in Confession? Jesus Christ through the ministry of the priest. 25. What is absolution? The sacramental forgiveness Christ gives through the priest. 26. Should a baptised child prepare for First Confession before Reception? Yes, according to the approved pastoral preparation for this pathway. 27. Does Jesus die again at Mass? No. His one sacrifice is made present sacramentally. 28. Who is present in the Holy Eucharist? Jesus Christ, Body, Blood, Soul and Divinity. 29. What is transubstantiation? The change of the substance of bread and wine into Christ's Body and Blood while the appearances remain. 30. What do you profess at Reception? All that the holy Catholic Church believes, teaches and proclaims to be revealed by God. 31. Are you baptised again at Reception? No. Valid Christian Baptism is never repeated. 32. What does Confirmation give? A special outpouring of the Holy Spirit strengthening baptismal grace. 33. Name the seven gifts of the Holy Spirit. Wisdom, understanding, counsel, fortitude, knowledge, piety and fear of the Lord. 34. What do you answer before receiving the Host? Amen - I believe that this is the Body of Christ. 35. How long is the ordinary Eucharistic fast? One hour before Holy Communion, except water and medicine. 36. How do we live as Catholics after Reception? Through Sunday Mass, prayer, the sacraments, learning the faith and love of others. COMING INTO THE CATHOLIC CHURCH Appendix H | Readiness and Parish Guide This guidance is for parents, carers, mentors and the parish priest. It is not an examination to give to the child. Readiness is personal and includes sincere desire, understanding according to capacity, conversion, Sunday worship and a developing Catholic life. The parish priest makes the pastoral judgement. A gentle conversation about readiness Baptism and correct pathway A valid Baptism has been established. The child is not already baptised Catholic, and any doubtful or Eastern case has been resolved with the priest. Free desire The child personally wishes to enter the Catholic Church without pressure, and can express a simple reason. Jesus and the Gospel The child knows Jesus as Son of God and Saviour and understands his death and Resurrection. Catholic faith The child has an emerging understanding of the Trinity, Church, Scripture and Tradition, Creed, prayer and moral life. Confession The child can distinguish a freely chosen sin from an accident or temptation, knows Jesus forgives through the priest and can participate with gentle guidance. Profession of Faith The child understands that the profession means accepting the Catholic faith, not merely repeating words. Confirmation The child understands that the Holy Spirit strengthens baptismal grace through Confirmation. Holy Eucharist The child knows the Sacred Host is the Body of Christ, not ordinary bread, and can receive reverently with reasonable adjustments. Sunday life The child and family have begun a real pattern of Sunday worship, prayer and parish belonging. Continuing support The family knows that Catholic formation continues after Reception, and parish support is available. Parish working considerations • Obtain reliable evidence of Baptism; investigate matter, form and intention if validity is uncertain. • Confirm the correct canonical situation. A child baptised Catholic is not received into full communion; Eastern Christian cases may have different implications. • Confirm appropriate parental consent, the child's free desire and relevant questions of parental responsibility. • Check any previous Confirmation or Eastern Chrismation; do not repeat a valid sacrament. COMING INTO THE CATHOLIC CHURCH • Identify a suitable sponsor, including the canonical qualifications required. • Arrange First Confession before Reception without seeking any disclosure of the child's personal sins. • Discern readiness individually; do not make completion of a booklet or an anniversary date the sole criterion. • Use the authorised liturgical rite, and verify the receiving priest's faculties for Confirmation and any exceptional arrangements. • Prepare the child for Communion, including any disability, anxiety, medical or accessibility requirements. • Record Reception, Confirmation and First Holy Communion appropriately and notify the place of Baptism where required. • Arrange continued accompaniment after the celebration, including Sunday Mass, Confession, prayer and family support. • Observe current safeguarding requirements, and never shame, frighten or pressure the child. Safety and privacy Children must not be pressured to reveal sins in preparation or assessment, nor asked what they said in Confession. Adults must follow diocesan safeguarding procedures when a child discloses harm outside the sacrament. The seal of sacramental Confession is absolute. The goal A child who can say in their own way: \"I believe in Jesus, who loves me and made me his own in Baptism. I want to share the whole Catholic faith. I want to receive his forgiveness, the gifts of the Holy Spirit and Jesus in Holy Communion, and learn to live in his Church.\" COMING INTO THE CATHOLIC CHURCH Sources and Doctrinal References Sacred Scripture: especially Matthew 16 and 28; Luke 15 and 24; John 6, 15 and 20; Acts 2; Romans 6; 1 Corinthians 11 and 15; Ephesians 4. Catechism of the Catholic Church: especially nos. 74-100 (Revelation); 811-870 (the Church); 1210-1419 (Baptism, Confirmation and Eucharist); 1420-1498 (Penance); and 1691-2557 (Christian life and prayer). Compendium of the Catechism of the Catholic Church: its treatment of the profession of faith, sacraments, moral life and prayer. Second Vatican Council: Lumen gentium and Unitatis redintegratio, on the Church and the bonds of Christian unity created by Baptism. Code of Canon Law: especially canons 96, 205, 844-845, 883-885, 889-891, 912-919 and 987-991. The liturgical rite of Reception of Baptised Christians into the Full Communion of the Catholic Church, as approved for use in England and Wales; and current Diocese of Nottingham sacramental and safeguarding guidance. Traditional catechetical sources: the Roman Catechism, the Baltimore Catechism tradition and Joseph Deharbe, adapted to current terminology and the needs of children. Prepared for the children and families of St Mary's, St John Bosco and St Edward's Parish. This book supports, but does not replace, Sunday worship, the approved rites and the pastoral guidance of the parish priest. Important canonical and liturgical note Valid Baptism is never repeated. A baptised Christian enters full communion by a Profession of Faith and Reception. The priest who receives a baptised candidate ordinarily has the faculty and duty to confirm that person when Confirmation has not already validly been received. Reception, Confirmation and First Holy Communion normally belong together in the approved celebration. Eastern cases, doubtful Baptisms, previous sacraments and other exceptional situations require the priest to follow the law and competent ecclesiastical direction. St Mary's | St John Bosco | St Edward's Parish"
  },
];
