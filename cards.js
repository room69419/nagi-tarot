/**
 * cards.js — 凪タロット カードデータ
 *
 * データ構造:
 *   id              : カード番号
 *   name            : 英語カード名（ファイル管理・デバッグ用）
 *   image           : 画像ファイル名（cards/ フォルダ内）
 *   nameJa          : 日本語カード名（表示用）
 *   nameEn          : 英語カード名（表示用）
 *   roman           : ローマ数字（大アルカナ番号）
 *   uprightMessage  : 正位置メッセージ
 *   reversedMessage : 逆位置メッセージ
 *
 * 小アルカナ追加ガイド:
 *   suit プロパティ（"wands" / "cups" / "swords" / "pentacles"）を追加し
 *   DECK_MINOR 配列を別途定義して DECK_FULL に結合してください。
 *   例:
 *     const DECK_MINOR = [
 *       { id: 22, name: "ACE_OF_WANDS", suit: "wands", image: "wands01.png",
 *         nameJa: "ワンドのエース", nameEn: "Ace of Wands",
 *         uprightMessage: "...", reversedMessage: "..." },
 *       ...
 *     ];
 *     const DECK_FULL = [...DECK_MAJOR, ...DECK_MINOR];
 */

const DECK_MAJOR = [
  {
    id: 0,
    name: "THE_FOOL",
    image: "fool.png",
    nameJa: "愚者",
    nameEn: "The Fool",
    roman: "0",
    uprightMessage:
      "新しい旅の始まりです。\n軽やかな一歩が、思いがけない扉を開きます。\n今日は直感を信じ、未知の世界へ踏み出してみましょう。",
    reversedMessage:
      "焦りや無謀さが、足元を危うくしているかもしれません。\n立ち止まり、準備が整っているかを静かに確かめてください。\n今日は慎重さが、あなたを守ります。"
  },
  {
    id: 1,
    name: "THE_MAGICIAN",
    image: "magician.png",
    nameJa: "魔術師",
    nameEn: "The Magician",
    roman: "I",
    uprightMessage:
      "あなたの手の中に、すべての力が揃っています。\n意志と集中があれば、願いを現実に変えられます。\n今日は能動的に動く日です。",
    reversedMessage:
      "力を持ちながら、うまく使えていないかもしれません。\n焦りや策略は、本来の才能を曇らせます。\n今日は誠実さを土台に、一歩ずつ進みましょう。"
  },
  {
    id: 2,
    name: "THE_HIGH_PRIESTESS",
    image: "high_priestess.png",
    nameJa: "女教皇",
    nameEn: "The High Priestess",
    roman: "II",
    uprightMessage:
      "月明かりの下に隠された真実が、静かに語りかけています。\n内なる声に耳を澄ませてください。\n知識よりも、直感が道を示す日です。",
    reversedMessage:
      "内側の声が、雑音にかき消されているかもしれません。\n他者の意見に振り回されず、自分の感覚を信じてください。\n今日は静かな場所で、心を落ち着けましょう。"
  },
  {
    id: 3,
    name: "THE_EMPRESS",
    image: "empress.png",
    nameJa: "女帝",
    nameEn: "The Empress",
    roman: "III",
    uprightMessage:
      "豊かさと創造のエネルギーが満ちています。\n愛情を注いだものが、確かに育っていきます。\n今日は感覚を大切に、五感で世界を感じてみましょう。",
    reversedMessage:
      "依存や過保護が、成長を妨げているかもしれません。\n自分自身を大切にすることを、忘れていませんか。\n今日はまず、自分への愛を取り戻しましょう。"
  },
  {
    id: 4,
    name: "THE_EMPEROR",
    image: "emperor.png",
    nameJa: "皇帝",
    nameEn: "The Emperor",
    roman: "IV",
    uprightMessage:
      "揺るぎない土台と構造が、あなたを支えています。\n計画を立て、着実に前進する力があります。\n今日は秩序と意志で、現実を形作りましょう。",
    reversedMessage:
      "支配や頑固さが、周囲との摩擦を生んでいるかもしれません。\n柔軟性を持ち、他者の意見にも耳を傾けてみましょう。\n今日は力を緩めることが、より大きな力になります。"
  },
  {
    id: 5,
    name: "THE_HIEROPHANT",
    image: "hierophant.png",
    nameJa: "法王",
    nameEn: "The Hierophant",
    roman: "V",
    uprightMessage:
      "時間が育てた知恵と伝統の中に、今日の答えがあります。\n信頼できる人の言葉に耳を傾けてみましょう。\n学びの中に、深い気づきが宿る日です。",
    reversedMessage:
      "慣習や規則が、あなたの本質を縛っているかもしれません。\n既存の枠を疑い、自分だけの道を模索してみましょう。\n今日は常識よりも、魂の声を優先してください。"
  },
  {
    id: 6,
    name: "THE_LOVERS",
    image: "lovers.png",
    nameJa: "恋人",
    nameEn: "The Lovers",
    roman: "VI",
    uprightMessage:
      "心が惹かれるものを選んでください。\n真の選択は、あなたの価値観から生まれます。\n今日は大切な誰かとの絆を、丁寧に育みましょう。",
    reversedMessage:
      "価値観のすれ違いや、迷いが生じているかもしれません。\n本当に望むものを、正直に見つめ直してください。\n今日は自分の心に、誠実であることが大切です。"
  },
  {
    id: 7,
    name: "THE_CHARIOT",
    image: "chariot.png",
    nameJa: "戦車",
    nameEn: "The Chariot",
    roman: "VII",
    uprightMessage:
      "相反する力を統率し、前へ進む意志があなたにあります。\n困難があっても、目標から目を離さないでください。\n今日は行動と意志の力で道を切り開きましょう。",
    reversedMessage:
      "方向性を失い、力が空回りしているかもしれません。\n立ち止まり、どこへ向かいたいのかを再確認しましょう。\n今日は焦らず、内側にある羅針盤を信じてください。"
  },
  {
    id: 8,
    name: "STRENGTH",
    image: "strength.png",
    nameJa: "力",
    nameEn: "Strength",
    roman: "VIII",
    uprightMessage:
      "本当の強さは、優しさの中にあります。\n恐れを力で制するのではなく、愛で包み込むことができます。\n今日は穏やかな強さを、自分と他者に向けましょう。",
    reversedMessage:
      "自信のなさや恐れが、前進を妨げているかもしれません。\n弱さを認めることは、勇気の第一歩です。\n今日は完璧でなくていい。ありのままの自分を受け入れましょう。"
  },
  {
    id: 9,
    name: "THE_HERMIT",
    image: "hermit.png",
    nameJa: "隠者",
    nameEn: "The Hermit",
    roman: "IX",
    uprightMessage:
      "静寂の中に、深い洞察が宿っています。\n一人の時間を持ち、内側の光に従いましょう。\n今日は孤独を恐れず、魂の声を聴く日です。",
    reversedMessage:
      "孤立や閉じこもりが、成長を妨げているかもしれません。\n信頼できる誰かに、心を開いてみましょう。\n今日は内省から一歩出て、世界と繋がる時です。"
  },
  {
    id: 10,
    name: "WHEEL_OF_FORTUNE",
    image: "wheel_of_fortune.png",
    nameJa: "運命の輪",
    nameEn: "Wheel of Fortune",
    roman: "X",
    uprightMessage:
      "運命の流れが、今まさに動き始めています。\n変化を抵抗せず、その流れに乗りましょう。\n今日は運が味方する瞬間を、見逃さないでください。",
    reversedMessage:
      "流れに逆らい、変化を恐れているかもしれません。\n抵抗するよりも、柔軟に受け入れる方が楽になります。\n今日は運命を信頼し、手を放してみましょう。"
  },
  {
    id: 11,
    name: "JUSTICE",
    image: "justice.png",
    nameJa: "正義",
    nameEn: "Justice",
    roman: "XI",
    uprightMessage:
      "真実と公平さが、今日のテーマです。\n正直であることが、最も確かな道を開きます。\n因果の理は揺らがない。誠実に向き合いましょう。",
    reversedMessage:
      "不公平さや自己欺瞞が、心に影を落としているかもしれません。\n目をそらしていた真実と、静かに向き合う時です。\n今日は誠実さを取り戻すことが、癒しへの道になります。"
  },
  {
    id: 12,
    name: "THE_HANGED_MAN",
    image: "hanged_man.png",
    nameJa: "吊られた男",
    nameEn: "The Hanged Man",
    roman: "XII",
    uprightMessage:
      "視点を変えることで、新しい真実が見えてきます。\n今は動かずに待つことが、最善の行動かもしれません。\n手放すことで、得られるものがあります。",
    reversedMessage:
      "犠牲や停滞が長くなり、疲弊しているかもしれません。\n無意味な我慢は手放し、前に進む勇気を持ちましょう。\n今日は自分を縛っているものを、ひとつ解放してください。"
  },
  {
    id: 13,
    name: "DEATH",
    image: "death.png",
    nameJa: "死神",
    nameEn: "Death",
    roman: "XIII",
    uprightMessage:
      "終わりは、新しい始まりの予兆です。\n古いものを手放す勇気が、あなたを次の章へと連れていきます。\n変容を恐れず、静かに受け入れましょう。",
    reversedMessage:
      "変化への抵抗が、停滞を生んでいるかもしれません。\n終わらせるべきものを、引き延ばし続けていませんか。\n今日は古い殻を脱ぎ捨て、新しい自分へ歩き出しましょう。"
  },
  {
    id: 14,
    name: "TEMPERANCE",
    image: "temperance.png",
    nameJa: "節制",
    nameEn: "Temperance",
    roman: "XIV",
    uprightMessage:
      "二つの流れを調和させ、黄金のバランスを見つけましょう。\n急がず、焦らず、丁寧に混ぜ合わせていく過程に意味があります。\n今日は調和と忍耐が、美しい結果を生みます。",
    reversedMessage:
      "過剰さや不均衡が、心身を乱しているかもしれません。\nどこかに無理をしていませんか。\n今日は立ち止まり、ペースを整えることを優先しましょう。"
  },
  {
    id: 15,
    name: "THE_DEVIL",
    image: "devil.png",
    nameJa: "悪魔",
    nameEn: "The Devil",
    roman: "XV",
    uprightMessage:
      "縛りに気づくことが、解放の第一歩です。\n恐れや執着があなたを縛っているかもしれません。\n今日は自分を不自由にしているものを、静かに見つめましょう。",
    reversedMessage:
      "鎖に気づき、解放へと向かい始めています。\n手放すことへの恐れは自然なこと。それでも一歩踏み出せます。\n今日は自由になる選択を、自分に許しましょう。"
  },
  {
    id: 16,
    name: "THE_TOWER",
    image: "tower.png",
    nameJa: "塔",
    nameEn: "The Tower",
    roman: "XVI",
    uprightMessage:
      "突然の変化は、真実を明らかにするためにあります。\n崩れるものは、もとより不確かなものでした。\n嵐の後に、より確かな基盤が現れます。",
    reversedMessage:
      "崩壊を恐れ、無理に現状を維持しようとしているかもしれません。\n避けられない変化を受け入れることで、痛みは和らぎます。\n今日は抵抗を手放し、流れに身を委ねましょう。"
  },
  {
    id: 17,
    name: "THE_STAR",
    image: "star.png",
    nameJa: "星",
    nameEn: "The Star",
    roman: "XVII",
    uprightMessage:
      "夜空に静かに輝く星のように、希望は常にそこにあります。\n傷ついた心を癒し、夢を信じる力が戻ってきます。\n今日は未来への期待を、素直に感じてみましょう。",
    reversedMessage:
      "希望を見失い、絶望感に包まれているかもしれません。\nそれでも星は、雲の向こうで輝き続けています。\n今日は小さな光を一つだけ、探してみてください。"
  },
  {
    id: 18,
    name: "THE_MOON",
    image: "moon.png",
    nameJa: "月",
    nameEn: "The Moon",
    roman: "XVIII",
    uprightMessage:
      "月は隠れた感情と幻想の世界を照らしています。\n見えているものが、すべてではないかもしれません。\n今日は夢と現実の境界で、自分の内なる声を聴きましょう。",
    reversedMessage:
      "混乱や不安が晴れ、真実が姿を現し始めています。\n幻想から目覚め、現実を冷静に見つめられるようになります。\n今日は恐れを手放し、地に足をつけて歩みましょう。"
  },
  {
    id: 19,
    name: "THE_SUN",
    image: "sun.png",
    nameJa: "太陽",
    nameEn: "The Sun",
    roman: "XIX",
    uprightMessage:
      "光があなたを包み込んでいます。\n喜びと活力が自然と溢れてくる日です。\n今日は心を開いて、素直に幸せを受け取りましょう。",
    reversedMessage:
      "喜びや活力が陰り、自信を失っているかもしれません。\n太陽は必ず戻ります。今は休むことも、大切な力です。\n今日は無理に輝こうとせず、ゆっくり充電しましょう。"
  },
  {
    id: 20,
    name: "JUDGEMENT",
    image: "judgement.png",
    nameJa: "審判",
    nameEn: "Judgement",
    roman: "XX",
    uprightMessage:
      "過去を振り返り、魂の声に従う時が来ました。\n自分を赦し、新たな自分として目覚める準備ができています。\n今日は内なる審判に、誠実に向き合いましょう。",
    reversedMessage:
      "自己批判や後悔が、前進を妨げているかもしれません。\n過去は変えられませんが、今この瞬間は選べます。\n今日は自分を赦すことから、始めてみましょう。"
  },
  {
    id: 21,
    name: "THE_WORLD",
    image: "world.png",
    nameJa: "世界",
    nameEn: "The World",
    roman: "XXI",
    uprightMessage:
      "一つの大きな旅が、美しく完結しようとしています。\nあなたはすでに、多くのことを成し遂げてきました。\n今日は達成と充足を静かに味わい、次の循環を迎えましょう。",
    reversedMessage:
      "完成を前に、何かが未完のまま残っているかもしれません。\n焦らず、最後のピースを丁寧に探しましょう。\n今日は終わりを急がず、プロセスそのものを味わってください。"
  }
];

/**
 * 小アルカナ追加時はここに定義し、DECK_FULL に結合してください
 * const DECK_MINOR = [ ... ];
 */
const DECK_FULL = [...DECK_MAJOR];
