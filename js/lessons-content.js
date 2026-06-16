const LESSONS_CONTENT = {

  // ─── УРОК 1: АЛФАВИТ ────────────────────────────────────────────────
  alphabet: {
    title: 'Алфавит и произношение',
    level: 'A1 · Урок 1',
    intro: 'Немецкий алфавит — 26 букв + 4 особых: ä, ö, ü, ß. Многие буквы читаются иначе, чем в русском или английском.',
    theory: [
      {
        heading: '📖 Особые буквы немецкого',
        content: `
          <p>Помимо стандартных латинских букв, в немецком есть:</p>
          <div class="table-wrap">
            <table>
              <tr><th>Буква</th><th>Название</th><th>Звук</th><th>Пример</th></tr>
              <tr><td><b>ä</b></td><td>a-Umlaut</td><td>как «э» в «эра»</td><td>schön<b>ä</b>hnlich</td></tr>
              <tr><td><b>ö</b></td><td>o-Umlaut</td><td>как «ё» с вытянутыми губами</td><td>sch<b>ö</b>n, h<b>ö</b>ren</td></tr>
              <tr><td><b>ü</b></td><td>u-Umlaut</td><td>как «ю» с вытянутыми губами</td><td>f<b>ü</b>nf, <b>ü</b>ben</td></tr>
              <tr><td><b>ß</b></td><td>Eszett</td><td>как двойное «сс»</td><td>hei<b>ß</b>en, Stra<b>ß</b>e</td></tr>
            </table>
          </div>
          <p>❗ <b>ß</b> используется только в нижнем регистре. В заглавном — пишут <b>SS</b>: STRASSE.</p>
        `
      },
      {
        heading: '🔊 Особенности произношения',
        content: `
          <div class="table-wrap">
            <table>
              <tr><th>Буква/сочетание</th><th>Читается как</th><th>Пример</th></tr>
              <tr><td><b>ch</b></td><td>«х» (после a,o,u) или мягкое «х» (после e,i)</td><td>a<b>ch</b>, i<b>ch</b></td></tr>
              <tr><td><b>ie</b></td><td>долгое «и»</td><td>v<b>ie</b>l, l<b>ie</b>be</td></tr>
              <tr><td><b>ei</b></td><td>«ай»</td><td>m<b>ei</b>n, <b>ei</b>n</td></tr>
              <tr><td><b>eu / äu</b></td><td>«ой»</td><td>h<b>eu</b>te, H<b>äu</b>ser</td></tr>
              <tr><td><b>sp / st</b></td><td>«шп» / «шт» в начале слова</td><td><b>sp</b>rechen, <b>St</b>adt</td></tr>
              <tr><td><b>w</b></td><td>«в»</td><td><b>w</b>ie, <b>W</b>asser</td></tr>
              <tr><td><b>v</b></td><td>«ф»</td><td><b>v</b>ier, <b>V</b>ater</td></tr>
              <tr><td><b>z</b></td><td>«цц»</td><td><b>z</b>eit, <b>Z</b>ug</td></tr>
            </table>
          </div>
          <div class="example-box">
            <div class="de">Ich heiße Margo und komme aus Russland.</div>
            <div class="ru">Меня зовут Марго и я из России.</div>
          </div>
        `
      }
    ],
    exercises: [
      {
        type: 'choice',
        question: 'Как читается буква <b>w</b> в немецком?',
        options: ['как «в»', 'как «у»', 'как «дв»', 'как «б»'],
        answer: 0,
      },
      {
        type: 'choice',
        question: 'Слово <b>mein</b> — как читается сочетание «ei»?',
        options: ['«ай»', '«ей»', '«и»', '«ой»'],
        answer: 0,
      },
      {
        type: 'choice',
        question: 'Что такое <b>Eszett (ß)</b>?',
        options: ['Звучит как двойное «сс»', 'Звучит как «з»', 'Звучит как «б»', 'Это не немецкая буква'],
        answer: 0,
      },
      {
        type: 'fill',
        question: 'Напиши заглавными буквами слово «Straße» (используй SS вместо ß):',
        answer: 'STRASSE',
        placeholder: 'STRA...',
      },
      {
        type: 'choice',
        question: 'Как читается <b>sp</b> в начале слова (например: sprechen)?',
        options: ['«шп»', '«сп»', '«зп»', '«цп»'],
        answer: 0,
      },
    ],
  },

  // ─── УРОК 2: ПРИВЕТСТВИЯ ────────────────────────────────────────────
  greetings: {
    title: 'Приветствия и прощания',
    level: 'A1 · Урок 2',
    intro: 'Первое, что нужно знать — как поздороваться и попрощаться. В немецком это зависит от времени суток и формальности.',
    theory: [
      {
        heading: '👋 Приветствия',
        content: `
          <div class="table-wrap">
            <table>
              <tr><th>Немецкий</th><th>Русский</th><th>Когда</th></tr>
              <tr><td><b>Hallo!</b></td><td>Привет!</td><td>всегда, неформально</td></tr>
              <tr><td><b>Guten Morgen!</b></td><td>Доброе утро!</td><td>до ~10:00</td></tr>
              <tr><td><b>Guten Tag!</b></td><td>Добрый день!</td><td>днём</td></tr>
              <tr><td><b>Guten Abend!</b></td><td>Добрый вечер!</td><td>вечером</td></tr>
              <tr><td><b>Guten Nacht!</b></td><td>Спокойной ночи!</td><td>перед сном</td></tr>
              <tr><td><b>Grüß Gott!</b></td><td>Здравствуйте!</td><td>Австрия и Бавария 🇦🇹</td></tr>
              <tr><td><b>Servus!</b></td><td>Привет / Пока!</td><td>Австрия, неформально</td></tr>
            </table>
          </div>
          <div class="example-box">
            <div class="de">Grüß Gott! Wie geht es Ihnen?</div>
            <div class="ru">Здравствуйте! Как вы поживаете? (австрийский стиль)</div>
          </div>
        `
      },
      {
        heading: '🚪 Прощания',
        content: `
          <div class="table-wrap">
            <table>
              <tr><th>Немецкий</th><th>Русский</th></tr>
              <tr><td><b>Auf Wiedersehen!</b></td><td>До свидания! (формально)</td></tr>
              <tr><td><b>Tschüss!</b></td><td>Пока! (неформально)</td></tr>
              <tr><td><b>Bis bald!</b></td><td>До скорого!</td></tr>
              <tr><td><b>Bis morgen!</b></td><td>До завтра!</td></tr>
              <tr><td><b>Servus!</b></td><td>Пока! (Австрия)</td></tr>
            </table>
          </div>
        `
      },
      {
        heading: '💬 Как дела?',
        content: `
          <div class="example-box">
            <div class="de">— Wie geht es dir? / Wie geht's?</div>
            <div class="ru">— Как дела? / Как ты?</div>
          </div>
          <div class="example-box">
            <div class="de">— Danke, gut! Und dir?</div>
            <div class="ru">— Спасибо, хорошо! А тебе?</div>
          </div>
          <div class="example-box">
            <div class="de">— Es geht. / Nicht so gut.</div>
            <div class="ru">— Нормально. / Не очень.</div>
          </div>
        `
      }
    ],
    exercises: [
      {
        type: 'choice',
        question: 'Как будет «Добрый вечер» по-немецки?',
        options: ['Guten Abend', 'Guten Morgen', 'Guten Tag', 'Gute Nacht'],
        answer: 0,
      },
      {
        type: 'choice',
        question: 'Какое приветствие типично для Австрии?',
        options: ['Grüß Gott!', 'Hallo!', 'Guten Tag!', 'Hey!'],
        answer: 0,
      },
      {
        type: 'fill',
        question: 'Заполни пропуск: «Auf _______!» (До свидания)',
        answer: 'Wiedersehen',
        placeholder: 'Wieder...',
      },
      {
        type: 'choice',
        question: 'Ты встречаешь незнакомого человека в 14:00. Что говоришь?',
        options: ['Guten Tag!', 'Guten Morgen!', 'Gute Nacht!', 'Tschüss!'],
        answer: 0,
      },
      {
        type: 'choice',
        question: '«Wie geht\'s?» — что это значит?',
        options: ['Как дела?', 'Как тебя зовут?', 'Откуда ты?', 'Сколько тебе лет?'],
        answer: 0,
      },
    ],
  },

  // ─── УРОК 3: ЧИСЛА ──────────────────────────────────────────────────
  numbers: {
    title: 'Числа 1–100',
    level: 'A1 · Урок 3',
    intro: 'Числа нужны везде: цены, телефоны, возраст, адреса. Выучи базу — и ты уже можешь многое!',
    theory: [
      {
        heading: '🔢 Числа 1–20',
        content: `
          <div class="table-wrap">
            <table>
              <tr><th>1–10</th><th></th><th>11–20</th><th></th></tr>
              <tr><td>1 — <b>ein(s)</b></td><td>2 — <b>zwei</b></td><td>11 — <b>elf</b></td><td>12 — <b>zwölf</b></td></tr>
              <tr><td>3 — <b>drei</b></td><td>4 — <b>vier</b></td><td>13 — <b>dreizehn</b></td><td>14 — <b>vierzehn</b></td></tr>
              <tr><td>5 — <b>fünf</b></td><td>6 — <b>sechs</b></td><td>15 — <b>fünfzehn</b></td><td>16 — <b>sechzehn</b></td></tr>
              <tr><td>7 — <b>sieben</b></td><td>8 — <b>acht</b></td><td>17 — <b>siebzehn</b></td><td>18 — <b>achtzehn</b></td></tr>
              <tr><td>9 — <b>neun</b></td><td>10 — <b>zehn</b></td><td>19 — <b>neunzehn</b></td><td>20 — <b>zwanzig</b></td></tr>
            </table>
          </div>
          <p>❗ 13–19: просто добавляй <b>-zehn</b> (≈ «-надцать»). Исключения: 16 = sech<b>zehn</b> (не sechszehn), 17 = sieb<b>zehn</b> (не siebenzehn).</p>
        `
      },
      {
        heading: '🔟 Десятки и числа до 100',
        content: `
          <div class="table-wrap">
            <table>
              <tr><th>Число</th><th>Немецкий</th><th>Число</th><th>Немецкий</th></tr>
              <tr><td>20</td><td><b>zwanzig</b></td><td>60</td><td><b>sechzig</b></td></tr>
              <tr><td>30</td><td><b>dreißig</b></td><td>70</td><td><b>siebzig</b></td></tr>
              <tr><td>40</td><td><b>vierzig</b></td><td>80</td><td><b>achtzig</b></td></tr>
              <tr><td>50</td><td><b>fünfzig</b></td><td>90</td><td><b>neunzig</b></td></tr>
              <tr><td>100</td><td><b>(ein)hundert</b></td><td></td><td></td></tr>
            </table>
          </div>
          <p>Числа от 21 до 99 строятся так: <b>единицы + und + десятки</b></p>
          <div class="example-box">
            <div class="de">21 = einundzwanzig (букв.: один-и-двадцать)</div>
            <div class="ru">47 = siebenundvierzig · 83 = dreiundachtzig</div>
          </div>
        `
      }
    ],
    exercises: [
      {
        type: 'choice',
        question: 'Как будет число <b>7</b> по-немецки?',
        options: ['sieben', 'sechs', 'acht', 'siebzehn'],
        answer: 0,
      },
      {
        type: 'choice',
        question: 'Что значит <b>zwölf</b>?',
        options: ['12', '20', '2', '22'],
        answer: 0,
      },
      {
        type: 'fill',
        question: 'Напиши число 5 по-немецки:',
        answer: 'fünf',
        placeholder: 'f...',
      },
      {
        type: 'choice',
        question: 'Как строится число 25 по-немецки?',
        options: ['fünfundzwanzig', 'zwanzigfünf', 'fünfzwanzig', 'zwanzigundfünf'],
        answer: 0,
      },
      {
        type: 'choice',
        question: 'Что такое <b>dreißig</b>?',
        options: ['30', '13', '33', '3'],
        answer: 0,
      },
    ],
  },

  // ─── УРОК 4: МЕСТОИМЕНИЯ ────────────────────────────────────────────
  'personal-pronouns': {
    title: 'Личные местоимения',
    level: 'A1 · Урок 4',
    intro: 'Без местоимений нельзя построить ни одного предложения. Это основа основ!',
    theory: [
      {
        heading: '👤 Личные местоимения в немецком',
        content: `
          <div class="table-wrap">
            <table>
              <tr><th>Немецкий</th><th>Русский</th><th>Примечание</th></tr>
              <tr><td><b>ich</b></td><td>я</td><td>всегда с маленькой буквы!</td></tr>
              <tr><td><b>du</b></td><td>ты</td><td>неформально</td></tr>
              <tr><td><b>er</b></td><td>он</td><td></td></tr>
              <tr><td><b>sie</b></td><td>она</td><td></td></tr>
              <tr><td><b>es</b></td><td>оно</td><td>для среднего рода</td></tr>
              <tr><td><b>wir</b></td><td>мы</td><td></td></tr>
              <tr><td><b>ihr</b></td><td>вы</td><td>неформально, множ.</td></tr>
              <tr><td><b>sie</b></td><td>они</td><td></td></tr>
              <tr><td><b>Sie</b></td><td>Вы</td><td>вежливо, всегда с большой!</td></tr>
            </table>
          </div>
          <p>❗ В немецком <b>«sie»</b> — три значения: она, они, Вы. Контекст и большая буква помогают отличить!</p>
        `
      },
      {
        heading: '💡 Важная особенность: Sie vs sie',
        content: `
          <div class="example-box">
            <div class="de">Sie ist meine Lehrerin. (она — учительница)</div>
            <div class="ru">Она моя учительница.</div>
          </div>
          <div class="example-box">
            <div class="de">Sie sind sehr nett, Frau Müller. (Вы — вежливо)</div>
            <div class="ru">Вы очень любезны, госпожа Мюллер.</div>
          </div>
          <div class="example-box">
            <div class="de">Sie kommen aus Österreich. (они — из Австрии)</div>
            <div class="ru">Они из Австрии.</div>
          </div>
        `
      }
    ],
    exercises: [
      {
        type: 'choice',
        question: 'Как по-немецки «мы»?',
        options: ['wir', 'ihr', 'sie', 'wer'],
        answer: 0,
      },
      {
        type: 'choice',
        question: '<b>Sie</b> с большой буквы означает...',
        options: ['Вы (вежливо)', 'она', 'они', 'ты'],
        answer: 0,
      },
      {
        type: 'fill',
        question: 'Как по-немецки «я»? (маленькими буквами)',
        answer: 'ich',
        placeholder: 'i...',
      },
      {
        type: 'choice',
        question: 'Какое местоимение используют для неформального «вы» (группа друзей)?',
        options: ['ihr', 'Sie', 'du', 'wir'],
        answer: 0,
      },
      {
        type: 'choice',
        question: 'Слово «es» используется для...',
        options: ['среднего рода (das)', 'мужского рода (der)', 'женского рода (die)', 'множественного числа'],
        answer: 0,
      },
    ],
  },

  // ─── УРОК 5: ГЛАГОЛ SEIN ────────────────────────────────────────────
  'verb-sein': {
    title: 'Глагол sein (быть)',
    level: 'A1 · Урок 5',
    intro: 'Глагол «sein» — самый важный глагол немецкого. Он неправильный, его нужно просто выучить наизусть.',
    theory: [
      {
        heading: '📋 Спряжение глагола sein',
        content: `
          <div class="table-wrap">
            <table>
              <tr><th>Местоимение</th><th>Форма</th><th>Перевод</th></tr>
              <tr><td>ich</td><td><b>bin</b></td><td>я есть / я являюсь</td></tr>
              <tr><td>du</td><td><b>bist</b></td><td>ты есть</td></tr>
              <tr><td>er / sie / es</td><td><b>ist</b></td><td>он/она/оно есть</td></tr>
              <tr><td>wir</td><td><b>sind</b></td><td>мы есть</td></tr>
              <tr><td>ihr</td><td><b>seid</b></td><td>вы есть</td></tr>
              <tr><td>sie / Sie</td><td><b>sind</b></td><td>они есть / Вы есть</td></tr>
            </table>
          </div>
        `
      },
      {
        heading: '💬 Примеры использования',
        content: `
          <div class="example-box">
            <div class="de">Ich bin Studentin.</div>
            <div class="ru">Я студентка.</div>
          </div>
          <div class="example-box">
            <div class="de">Du bist sehr klug!</div>
            <div class="ru">Ты очень умная!</div>
          </div>
          <div class="example-box">
            <div class="de">Wien ist wunderschön.</div>
            <div class="ru">Вена прекрасна.</div>
          </div>
          <div class="example-box">
            <div class="de">Wir sind aus Russland.</div>
            <div class="ru">Мы из России.</div>
          </div>
          <div class="example-box">
            <div class="de">Sie sind meine Freunde.</div>
            <div class="ru">Они мои друзья.</div>
          </div>
        `
      }
    ],
    exercises: [
      {
        type: 'choice',
        question: 'Ich ___ Studentin. (быть)',
        options: ['bin', 'bist', 'ist', 'sind'],
        answer: 0,
      },
      {
        type: 'choice',
        question: 'Wien ___ sehr schön.',
        options: ['ist', 'bist', 'bin', 'seid'],
        answer: 0,
      },
      {
        type: 'fill',
        question: 'Wir ___ aus Russland. (вставь форму sein)',
        answer: 'sind',
        placeholder: 's...',
      },
      {
        type: 'choice',
        question: 'Du ___ sehr nett!',
        options: ['bist', 'bin', 'ist', 'sind'],
        answer: 0,
      },
      {
        type: 'choice',
        question: 'Ihr ___ meine Freunde.',
        options: ['seid', 'sind', 'bist', 'ist'],
        answer: 0,
      },
    ],
  },

  // ─── УРОК 6: АРТИКЛИ ────────────────────────────────────────────────
  'articles-def': {
    title: 'Определённый артикль: der, die, das',
    level: 'A1 · Урок 7',
    intro: 'В немецком у каждого существительного есть род. Это нужно просто запомнить вместе со словом.',
    theory: [
      {
        heading: '⚧ Три рода в немецком',
        content: `
          <div class="table-wrap">
            <table>
              <tr><th>Род</th><th>Артикль</th><th>Примеры</th></tr>
              <tr><td>Мужской (Maskulinum)</td><td><b>der</b></td><td>der Mann, der Tag, der Vater</td></tr>
              <tr><td>Женский (Femininum)</td><td><b>die</b></td><td>die Frau, die Stadt, die Mutter</td></tr>
              <tr><td>Средний (Neutrum)</td><td><b>das</b></td><td>das Kind, das Haus, das Land</td></tr>
              <tr><td>Все роды, мн.ч.</td><td><b>die</b></td><td>die Männer, die Frauen, die Kinder</td></tr>
            </table>
          </div>
          <p>💡 <b>Совет:</b> всегда учи слово вместе с артиклем: не просто «Haus», а «<b>das</b> Haus».</p>
        `
      },
      {
        heading: '🔍 Подсказки по роду',
        content: `
          <p><b>Мужской род (der)</b> чаще всего:</p>
          <ul>
            <li>Мужчины, профессии м.р.: der Mann, der Arzt, der Lehrer</li>
            <li>Окончания: <b>-er, -ling, -ig, -ismus</b></li>
            <li>Дни, месяцы, времена года: der Montag, der Januar, der Sommer</li>
          </ul>
          <p><b>Женский род (die)</b> чаще всего:</p>
          <ul>
            <li>Окончания: <b>-ung, -heit, -keit, -schaft, -ion, -ität</b></li>
            <li>Большинство слов на <b>-e</b>: die Straße, die Reise</li>
          </ul>
          <p><b>Средний род (das)</b> чаще всего:</p>
          <ul>
            <li>Уменьшительные на <b>-chen, -lein</b>: das Mädchen, das Büchlein</li>
            <li>Инфинитивы как существительные: das Lernen, das Essen</li>
            <li>Большинство стран без артикля: Österreich, Deutschland (но: das Land)</li>
          </ul>
        `
      }
    ],
    exercises: [
      {
        type: 'choice',
        question: 'Какой артикль у слова «Mann» (мужчина)?',
        options: ['der', 'die', 'das', 'den'],
        answer: 0,
      },
      {
        type: 'choice',
        question: '«___ Kind» (ребёнок) — какой артикль?',
        options: ['das', 'der', 'die', 'dem'],
        answer: 0,
      },
      {
        type: 'fill',
        question: 'Вставь артикль: «___ Frau» (женщина)',
        answer: 'die',
        placeholder: 'd...',
      },
      {
        type: 'choice',
        question: 'Слово «Wohnung» (квартира) оканчивается на -ung. Какой артикль?',
        options: ['die', 'der', 'das', 'den'],
        answer: 0,
      },
      {
        type: 'choice',
        question: 'Во множественном числе все существительные используют артикль...',
        options: ['die', 'der', 'das', 'den'],
        answer: 0,
      },
    ],
  },

  // ─── ГЛАГОЛ HABEN ───────────────────────────────────────────────────
  'verb-haben': {
    title: 'Глагол haben (иметь)',
    level: 'A1 · Урок 11',
    intro: 'Haben — второй по важности глагол после sein. Используется для выражения обладания и для образования прошедшего времени.',
    theory: [
      {
        heading: '📋 Спряжение глагола haben',
        content: `
          <div class="table-wrap">
            <table>
              <tr><th>Местоимение</th><th>Форма</th><th>Перевод</th></tr>
              <tr><td>ich</td><td><b>habe</b></td><td>я имею</td></tr>
              <tr><td>du</td><td><b>hast</b></td><td>ты имеешь</td></tr>
              <tr><td>er / sie / es</td><td><b>hat</b></td><td>он/она/оно имеет</td></tr>
              <tr><td>wir</td><td><b>haben</b></td><td>мы имеем</td></tr>
              <tr><td>ihr</td><td><b>habt</b></td><td>вы имеете</td></tr>
              <tr><td>sie / Sie</td><td><b>haben</b></td><td>они имеют / Вы имеете</td></tr>
            </table>
          </div>
        `
      },
      {
        heading: '💬 Примеры',
        content: `
          <div class="example-box">
            <div class="de">Ich habe eine Frage.</div>
            <div class="ru">У меня есть вопрос.</div>
          </div>
          <div class="example-box">
            <div class="de">Hast du Zeit?</div>
            <div class="ru">У тебя есть время?</div>
          </div>
          <div class="example-box">
            <div class="de">Sie hat ein Visum für Österreich.</div>
            <div class="ru">У неё есть виза для Австрии.</div>
          </div>
        `
      }
    ],
    exercises: [
      {
        type: 'choice',
        question: 'Ich ___ ein Buch.',
        options: ['habe', 'hast', 'hat', 'haben'],
        answer: 0,
      },
      {
        type: 'choice',
        question: 'Er ___ keine Zeit.',
        options: ['hat', 'habe', 'hast', 'habt'],
        answer: 0,
      },
      {
        type: 'fill',
        question: 'Wir ___ eine Wohnung in Wien. (вставь форму haben)',
        answer: 'haben',
        placeholder: 'h...',
      },
      {
        type: 'choice',
        question: 'Du ___ viele Freunde.',
        options: ['hast', 'habt', 'hat', 'habe'],
        answer: 0,
      },
    ],
  },
};
