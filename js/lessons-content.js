const LESSONS_CONTENT = {

  // ══════════════════════════════════════════════════════════
  // A1 — МОДУЛЬ 1: ОСНОВЫ
  // ══════════════════════════════════════════════════════════

  alphabet: {
    title: 'Алфавит и произношение',
    level: 'A1 · Урок 1',
    intro: 'Немецкий алфавит — 26 букв + 4 особых: ä, ö, ü, ß. Многие буквы читаются иначе, чем в русском.',
    theory: [
      {
        heading: '📖 Особые буквы немецкого — умлауты',
        content: `
          <p>Умлауты — это буквы с точками над ними. Они меняют звук гласной:</p>
          <div class="table-wrap"><table>
            <tr><th>Буква</th><th>Звук</th><th>Пример</th><th>Перевод</th></tr>
            <tr><td><b>ä</b></td><td>как «э» в «это»</td><td>spät, schön<b>ä</b>hnlich</td><td>поздно</td></tr>
            <tr><td><b>ö</b></td><td>«ё» с вытянутыми губами вперёд</td><td>sch<b>ö</b>n, h<b>ö</b>ren</td><td>красивый, слышать</td></tr>
            <tr><td><b>ü</b></td><td>«ю» с вытянутыми губами вперёд</td><td>f<b>ü</b>nf, <b>ü</b>ben</td><td>пять, тренироваться</td></tr>
            <tr><td><b>ß</b> (Eszett)</td><td>двойное «сс»</td><td>hei<b>ß</b>en, Stra<b>ß</b>e</td><td>называться, улица</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">💡 Лайфхак от Егора: умлауты — это просто модифицированные гласные. ä = ae, ö = oe, ü = ue. Если нет умлаута на клавиатуре — пиши так!</div>
            <div class="ru">Schön = Schoen · Müller = Mueller · Straße = Strasse</div>
          </div>
        `
      },
      {
        heading: '🔊 Главные правила произношения',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Буква/сочетание</th><th>Читается как</th><th>Пример</th></tr>
            <tr><td><b>w</b></td><td>«в»</td><td><b>w</b>ie (как), <b>W</b>asser (вода)</td></tr>
            <tr><td><b>v</b></td><td>«ф»</td><td><b>v</b>ier (четыре), <b>V</b>ater (отец)</td></tr>
            <tr><td><b>z</b></td><td>«тс»</td><td><b>z</b>wei (два), <b>Z</b>eit (время)</td></tr>
            <tr><td><b>ei</b></td><td>«ай»</td><td>m<b>ei</b>n (мой), <b>ei</b>n (один)</td></tr>
            <tr><td><b>ie</b></td><td>долгое «и»</td><td>v<b>ie</b>l (много), l<b>ie</b>be (любовь)</td></tr>
            <tr><td><b>eu / äu</b></td><td>«ой»</td><td>h<b>eu</b>te (сегодня), H<b>äu</b>ser (дома)</td></tr>
            <tr><td><b>sp</b> (в начале)</td><td>«шп»</td><td><b>sp</b>rechen (говорить)</td></tr>
            <tr><td><b>st</b> (в начале)</td><td>«шт»</td><td><b>St</b>adt (город), <b>St</b>udent</td></tr>
            <tr><td><b>ch</b></td><td>«х» после a/o/u, мягкое «хь» после e/i</td><td>a<b>ch</b>, i<b>ch</b></td></tr>
            <tr><td><b>sch</b></td><td>«ш»</td><td><b>sch</b>ön, <b>Sch</b>ule (школа)</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">Ich spreche Deutsch. Wie viel kostet das?</div>
            <div class="ru">Я говорю по-немецки. Сколько это стоит?</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Как читается буква <b>w</b> в немецком?', options: ['как «в»', 'как «у»', 'как «вв»', 'как «б»'], answer: 0 },
      { type: 'choice', question: 'Слово <b>mein</b> — как читается «ei»?', options: ['«ай»', '«ей»', '«и»', '«ой»'], answer: 0 },
      { type: 'choice', question: '<b>sprechen</b> — как читается «sp» в начале слова?', options: ['«шп»', '«сп»', '«зп»', '«цп»'], answer: 0 },
      { type: 'fill', question: 'Напиши «Straße» заглавными без ß:', answer: 'STRASSE', placeholder: 'STRA...' },
      { type: 'choice', question: 'Как читается <b>z</b> в немецком?', options: ['«тс»', '«з»', '«с»', '«дз»'], answer: 0 },
      { type: 'choice', question: '<b>viel</b> (много) — как читается «v»?', options: ['«ф»', '«в»', '«у»', '«б»'], answer: 0 },
    ],
  },

  greetings: {
    title: 'Приветствия и прощания',
    level: 'A1 · Урок 2',
    intro: 'Первое, что нужно знать — как поздороваться. В Австрии и Германии свои особенности!',
    theory: [
      {
        heading: '👋 Приветствия по времени суток',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Немецкий</th><th>Русский</th><th>Когда / где</th></tr>
            <tr><td><b>Hallo!</b></td><td>Привет!</td><td>всегда, неформально</td></tr>
            <tr><td><b>Guten Morgen!</b></td><td>Доброе утро!</td><td>до ~10:00</td></tr>
            <tr><td><b>Guten Tag!</b></td><td>Добрый день!</td><td>10:00–18:00</td></tr>
            <tr><td><b>Guten Abend!</b></td><td>Добрый вечер!</td><td>после 18:00</td></tr>
            <tr><td><b>Gute Nacht!</b></td><td>Спокойной ночи!</td><td>перед сном</td></tr>
            <tr><td><b>Grüß Gott!</b></td><td>Здравствуйте!</td><td>🇦🇹 Австрия, Бавария</td></tr>
            <tr><td><b>Servus!</b></td><td>Привет / Пока!</td><td>🇦🇹 Австрия, неформально</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">🇦🇹 Важно для Австрии: «Grüß Gott» — буквально «Приветствую Бога», это стандартное формальное приветствие. Скажи это в университете или магазине — и тебя сразу поймут как своего!</div>
            <div class="ru">А «Servus» — универсальное австрийское «привет» и «пока» одновременно.</div>
          </div>
        `
      },
      {
        heading: '🚪 Прощания',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Немецкий</th><th>Русский</th><th>Формальность</th></tr>
            <tr><td><b>Auf Wiedersehen!</b></td><td>До свидания!</td><td>Формально</td></tr>
            <tr><td><b>Tschüss!</b></td><td>Пока!</td><td>Неформально</td></tr>
            <tr><td><b>Bis bald!</b></td><td>До скорого!</td><td>Неформально</td></tr>
            <tr><td><b>Bis morgen!</b></td><td>До завтра!</td><td>Любое</td></tr>
            <tr><td><b>Bis später!</b></td><td>До позже!</td><td>Неформально</td></tr>
          </table></div>
        `
      },
      {
        heading: '💬 Диалог: как дела?',
        content: `
          <div class="example-box">
            <div class="de">— Hallo! Wie geht es dir? / Wie geht's?</div>
            <div class="ru">— Привет! Как дела? / Как ты?</div>
          </div>
          <div class="example-box">
            <div class="de">— Danke, (sehr) gut! Und dir?</div>
            <div class="ru">— Спасибо, (очень) хорошо! А тебе?</div>
          </div>
          <div class="example-box">
            <div class="de">— Es geht. / Nicht so gut. / Super!</div>
            <div class="ru">— Нормально. / Не очень. / Отлично!</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Как будет «Добрый вечер» по-немецки?', options: ['Guten Abend', 'Guten Morgen', 'Guten Tag', 'Gute Nacht'], answer: 0 },
      { type: 'choice', question: 'Ты в Вене заходишь в магазин. Что говоришь?', options: ['Grüß Gott!', 'Bonjour!', 'Guten Tag!', 'Hey!'], answer: 0 },
      { type: 'fill', question: 'Заполни: «Auf ___________!» (До свидания)', answer: 'Wiedersehen', placeholder: 'Wieder...' },
      { type: 'choice', question: '«Servus» в Австрии означает...', options: ['и «привет» и «пока»', 'только «привет»', 'только «пока»', '«спасибо»'], answer: 0 },
      { type: 'choice', question: '«Wie geht\'s?» — это...', options: ['Как дела?', 'Как тебя зовут?', 'Сколько лет?', 'Откуда ты?'], answer: 0 },
      { type: 'fill', question: 'Ответь: «Danke, gut! Und ___?» (А тебе?)', answer: 'dir', placeholder: 'd...' },
    ],
  },

  numbers: {
    title: 'Числа 1–100',
    level: 'A1 · Урок 3',
    intro: 'Числа нужны везде: цены, адреса, телефоны, возраст. Выучи логику — и сможешь сказать любое число.',
    theory: [
      {
        heading: '🔢 Числа 1–20',
        content: `
          <div class="table-wrap"><table>
            <tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
            <tr><td><b>eins</b></td><td><b>zwei</b></td><td><b>drei</b></td><td><b>vier</b></td><td><b>fünf</b></td></tr>
            <tr><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr>
            <tr><td><b>sechs</b></td><td><b>sieben</b></td><td><b>acht</b></td><td><b>neun</b></td><td><b>zehn</b></td></tr>
          </table></div>
          <div class="table-wrap"><table>
            <tr><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th></tr>
            <tr><td><b>elf</b></td><td><b>zwölf</b></td><td><b>dreizehn</b></td><td><b>vierzehn</b></td><td><b>fünfzehn</b></td></tr>
            <tr><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th></tr>
            <tr><td><b>sechzehn</b></td><td><b>siebzehn</b></td><td><b>achtzehn</b></td><td><b>neunzehn</b></td><td><b>zwanzig</b></td></tr>
          </table></div>
          <p>❗ Запомни исключения: <b>16 = sechzehn</b> (не sechszehn!), <b>17 = siebzehn</b> (не siebenzehn!)</p>
        `
      },
      {
        heading: '🔟 Десятки и числа 21–100',
        content: `
          <div class="table-wrap"><table>
            <tr><th>20</th><th>30</th><th>40</th><th>50</th><th>60</th><th>70</th><th>80</th><th>90</th><th>100</th></tr>
            <tr><td><b>zwanzig</b></td><td><b>dreißig</b></td><td><b>vierzig</b></td><td><b>fünfzig</b></td><td><b>sechzig</b></td><td><b>siebzig</b></td><td><b>achtzig</b></td><td><b>neunzig</b></td><td><b>hundert</b></td></tr>
          </table></div>
          <p>📐 Правило для 21–99: <b>единицы + und + десятки</b> (всё слитно!)</p>
          <div class="example-box">
            <div class="de">21 = ein<b>und</b>zwanzig · 35 = fünf<b>und</b>dreißig · 47 = sieben<b>und</b>vierzig · 99 = neun<b>und</b>neunzig</div>
            <div class="ru">Буквально: «один-и-двадцать», «пять-и-тридцать» — как в старом русском!</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Как будет число <b>7</b>?', options: ['sieben', 'sechs', 'acht', 'neun'], answer: 0 },
      { type: 'choice', question: 'Что значит <b>zwölf</b>?', options: ['12', '20', '2', '22'], answer: 0 },
      { type: 'fill', question: 'Напиши число 5 по-немецки:', answer: 'fünf', placeholder: 'f...' },
      { type: 'choice', question: 'Как строится <b>25</b>?', options: ['fünfundzwanzig', 'zwanzigfünf', 'fünfzwanzig', 'zwanzigundfünf'], answer: 0 },
      { type: 'choice', question: '<b>dreißig</b> — это...', options: ['30', '13', '33', '3'], answer: 0 },
      { type: 'fill', question: 'Как сказать 47?', answer: 'siebenundvierzig', placeholder: 'sieben...' },
    ],
  },

  'personal-pronouns': {
    title: 'Личные местоимения',
    level: 'A1 · Урок 4',
    intro: 'Без местоимений нет ни одного предложения. И главная ловушка немецкого — три значения у «sie»!',
    theory: [
      {
        heading: '👤 Все личные местоимения',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Немецкий</th><th>Русский</th><th>Важно!</th></tr>
            <tr><td><b>ich</b></td><td>я</td><td>⚠️ всегда маленькими! (не Ich)</td></tr>
            <tr><td><b>du</b></td><td>ты</td><td>неформально, близкие люди</td></tr>
            <tr><td><b>er</b></td><td>он</td><td>мужской род</td></tr>
            <tr><td><b>sie</b></td><td>она</td><td>женский род (маленькая с)</td></tr>
            <tr><td><b>es</b></td><td>оно</td><td>средний род (das-слова)</td></tr>
            <tr><td><b>wir</b></td><td>мы</td><td></td></tr>
            <tr><td><b>ihr</b></td><td>вы</td><td>неформально, группа</td></tr>
            <tr><td><b>sie</b></td><td>они</td><td>маленькая с</td></tr>
            <tr><td><b>Sie</b></td><td>Вы</td><td>⚠️ ВСЕГДА с большой! Вежливо.</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">🎯 Ловушка: «sie» с маленькой = она ИЛИ они. «Sie» с большой = Вы (вежливо). Помогает контекст и глагол!</div>
            <div class="ru">sie kommt = она приходит · sie kommen = они приходят · Sie kommen = Вы приходите</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Как по-немецки «мы»?', options: ['wir', 'ihr', 'sie', 'wer'], answer: 0 },
      { type: 'choice', question: '<b>Sie</b> с большой буквы означает:', options: ['Вы (вежливо)', 'она', 'они', 'ты'], answer: 0 },
      { type: 'fill', question: 'Как по-немецки «я» (маленькими)?', answer: 'ich', placeholder: 'i...' },
      { type: 'choice', question: 'Неформальное «вы» для группы друзей — это:', options: ['ihr', 'Sie', 'du', 'wir'], answer: 0 },
      { type: 'choice', question: '«es» используется для слов с родом:', options: ['средний (das)', 'мужской (der)', 'женский (die)', 'все роды'], answer: 0 },
      { type: 'choice', question: '«sie kommen» — это значит:', options: ['они приходят', 'она приходит', 'вы приходите', 'я прихожу'], answer: 0 },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // A1 — МОДУЛЬ 2: ГЛАГОЛ SEIN И ЗНАКОМСТВО
  // ══════════════════════════════════════════════════════════

  'verb-sein': {
    title: 'Глагол sein (быть)',
    level: 'A1 · Урок 5',
    intro: '«Sein» — самый важный глагол немецкого. Он неправильный, и его формы нужно просто выучить. Без этого глагола никуда!',
    theory: [
      {
        heading: '📋 Спряжение sein — выучи наизусть',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Местоимение</th><th>Форма</th><th>Произношение</th></tr>
            <tr><td>ich</td><td><b>bin</b></td><td>бин</td></tr>
            <tr><td>du</td><td><b>bist</b></td><td>бист</td></tr>
            <tr><td>er / sie / es</td><td><b>ist</b></td><td>ист</td></tr>
            <tr><td>wir</td><td><b>sind</b></td><td>зинд</td></tr>
            <tr><td>ihr</td><td><b>seid</b></td><td>зайд</td></tr>
            <tr><td>sie / Sie</td><td><b>sind</b></td><td>зинд</td></tr>
          </table></div>
          <p>💡 Лайфхак: <b>bin-bist-ist</b> выучи как считалочку. Потом <b>sind-seid-sind</b>.</p>
        `
      },
      {
        heading: '💬 Реальные примеры',
        content: `
          <div class="example-box">
            <div class="de">Ich bin Studentin. Ich bin 20 Jahre alt.</div>
            <div class="ru">Я студентка. Мне 20 лет.</div>
          </div>
          <div class="example-box">
            <div class="de">Du bist sehr klug und fleißig!</div>
            <div class="ru">Ты очень умная и трудолюбивая!</div>
          </div>
          <div class="example-box">
            <div class="de">Wien ist wunderschön. Es ist die Hauptstadt von Österreich.</div>
            <div class="ru">Вена прекрасна. Это столица Австрии.</div>
          </div>
          <div class="example-box">
            <div class="de">Wir sind Freunde. Wir sind aus Russland.</div>
            <div class="ru">Мы друзья. Мы из России.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Ich ___ Studentin.', options: ['bin', 'bist', 'ist', 'sind'], answer: 0 },
      { type: 'choice', question: 'Wien ___ sehr schön.', options: ['ist', 'bist', 'bin', 'seid'], answer: 0 },
      { type: 'fill', question: 'Wir ___ aus Russland. (вставь sein)', answer: 'sind', placeholder: 's...' },
      { type: 'choice', question: 'Du ___ sehr nett!', options: ['bist', 'bin', 'ist', 'sind'], answer: 0 },
      { type: 'choice', question: 'Ihr ___ meine Freunde.', options: ['seid', 'sind', 'bist', 'ist'], answer: 0 },
      { type: 'fill', question: 'Ich ___ 21 Jahre alt.', answer: 'bin', placeholder: 'b...' },
    ],
  },

  'verb-heissen': {
    title: 'Меня зовут — heißen',
    level: 'A1 · Урок 6',
    intro: 'Глагол heißen — «называться, зваться». Первое что ты скажешь при знакомстве!',
    theory: [
      {
        heading: '📋 Спряжение heißen',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Местоимение</th><th>Форма</th></tr>
            <tr><td>ich</td><td><b>heiße</b></td></tr>
            <tr><td>du</td><td><b>heißt</b></td></tr>
            <tr><td>er / sie / es</td><td><b>heißt</b></td></tr>
            <tr><td>wir</td><td><b>heißen</b></td></tr>
            <tr><td>ihr</td><td><b>heißt</b></td></tr>
            <tr><td>sie / Sie</td><td><b>heißen</b></td></tr>
          </table></div>
        `
      },
      {
        heading: '💬 Диалог знакомства',
        content: `
          <div class="example-box">
            <div class="de">— Wie heißt du? / Wie heißen Sie?</div>
            <div class="ru">— Как тебя зовут? / Как вас зовут?</div>
          </div>
          <div class="example-box">
            <div class="de">— Ich heiße Margo. Und du?</div>
            <div class="ru">— Меня зовут Марго. А тебя?</div>
          </div>
          <div class="example-box">
            <div class="de">— Ich heiße Matvei. Woher kommst du?</div>
            <div class="ru">— Меня зовут Матвей. Откуда ты?</div>
          </div>
          <div class="example-box">
            <div class="de">— Ich komme aus Russland. Ich bin Studentin.</div>
            <div class="ru">— Я из России. Я студентка.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'fill', question: 'Ich ___ Margo. (heißen)', answer: 'heiße', placeholder: 'heiß...' },
      { type: 'choice', question: 'Wie ___ du?', options: ['heißt', 'heiße', 'heißen', 'heißt ihr'], answer: 0 },
      { type: 'choice', question: 'Как спросить имя вежливо (Sie)?', options: ['Wie heißen Sie?', 'Wie heißt du?', 'Wie heiße ich?', 'Wie heißt er?'], answer: 0 },
      { type: 'fill', question: 'Er ___ Peter. (heißen)', answer: 'heißt', placeholder: 'heiß...' },
      { type: 'choice', question: 'Wir ___ Freunde von Margo.', options: ['heißen', 'heiße', 'heißt', 'heißen wir'], answer: 0 },
    ],
  },

  countries: {
    title: 'Страны и языки',
    level: 'A1 · Урок 7',
    intro: 'Немецкий нужен тебе для Австрии! Узнаем как называются страны, откуда ты и на каком языке говоришь.',
    theory: [
      {
        heading: '🌍 Важные страны и их жители',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Страна</th><th>Житель (м/ж)</th><th>Язык</th></tr>
            <tr><td>🇩🇪 Deutschland</td><td>der Deutsche / die Deutsche</td><td>Deutsch</td></tr>
            <tr><td>🇦🇹 Österreich</td><td>der Österreicher / die Österreicherin</td><td>Deutsch</td></tr>
            <tr><td>🇷🇺 Russland</td><td>der Russe / die Russin</td><td>Russisch</td></tr>
            <tr><td>🇺🇦 die Ukraine</td><td>der Ukrainer / die Ukrainerin</td><td>Ukrainisch</td></tr>
            <tr><td>🇬🇧 England</td><td>der Engländer / die Engländerin</td><td>Englisch</td></tr>
          </table></div>
          <p>⚠️ Большинство стран без артикля: <b>in Deutschland, aus Österreich</b>. Но: <b>in der Ukraine</b> (со статьёй!).</p>
        `
      },
      {
        heading: '💬 Говорим о себе',
        content: `
          <div class="example-box">
            <div class="de">Ich komme aus Russland. Ich bin Russin.</div>
            <div class="ru">Я из России. Я россиянка.</div>
          </div>
          <div class="example-box">
            <div class="de">Ich lerne Deutsch, weil ich in Österreich studieren möchte.</div>
            <div class="ru">Я учу немецкий, потому что хочу учиться в Австрии.</div>
          </div>
          <div class="example-box">
            <div class="de">Ich spreche Russisch und lerne Deutsch.</div>
            <div class="ru">Я говорю по-русски и учу немецкий.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Как по-немецки «Австрия»?', options: ['Österreich', 'Australien', 'Österhand', 'Öland'], answer: 0 },
      { type: 'fill', question: 'Ich komme aus ________. (Россия)', answer: 'Russland', placeholder: 'Russ...' },
      { type: 'choice', question: 'В Австрии говорят на:', options: ['Deutsch', 'Österreichisch', 'Austrianisch', 'Wienerisch'], answer: 0 },
      { type: 'choice', question: 'Ich ___ Deutsch. (учить)', options: ['lerne', 'bin', 'heiße', 'komme'], answer: 0 },
      { type: 'fill', question: 'Ich ___ aus Russland. (приходить — kommen)', answer: 'komme', placeholder: 'komm...' },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // A1 — МОДУЛЬ 3: АРТИКЛИ И РОД (по материалам Егора, урок 9 и 11)
  // ══════════════════════════════════════════════════════════

  'articles-def': {
    title: 'Определённый артикль: der, die, das',
    level: 'A1 · Урок 8',
    intro: 'Артикли — это «the» в немецком, только их три. Это одна из главных тем A1. Егор посвятил этому целый урок в серии «Грамматика 2.0»!',
    theory: [
      {
        heading: '⚧ Три рода = три артикля',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Род</th><th>Артикль</th><th>Вопрос</th><th>Примеры</th></tr>
            <tr><td>Мужской</td><td><b>der</b></td><td>Wer? Was?</td><td>der Mann, der Tag, der Zug</td></tr>
            <tr><td>Женский</td><td><b>die</b></td><td>Wer? Was?</td><td>die Frau, die Stadt, die Uhr</td></tr>
            <tr><td>Средний</td><td><b>das</b></td><td>Wer? Was?</td><td>das Kind, das Haus, das Buch</td></tr>
            <tr><td>Мн. число (все)</td><td><b>die</b></td><td>Wer? Was?</td><td>die Männer, die Frauen, die Kinder</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">💡 Главное правило Егора: учи слово ВСЕГДА вместе с артиклем. Не «Haus», а «das Haus». Не «Frau», а «die Frau». Иначе потом придётся учить заново!</div>
            <div class="ru">der Mann · die Frau · das Kind → запомни как единое слово</div>
          </div>
        `
      },
      {
        heading: '🔍 Подсказки по роду (не правила, но помогают!)',
        content: `
          <p><b>🔵 Чаще мужской (der):</b></p>
          <ul>
            <li>Мужчины и профессии м.р.: <b>der</b> Arzt, <b>der</b> Lehrer, <b>der</b> Student</li>
            <li>Дни, месяцы, времена года: <b>der</b> Montag, <b>der</b> Januar, <b>der</b> Sommer</li>
            <li>Окончания: <b>-er, -ling, -ig, -ismus</b></li>
          </ul>
          <p><b>🔴 Чаще женский (die):</b></p>
          <ul>
            <li>Женщины и профессии ж.р.: <b>die</b> Ärztin, <b>die</b> Lehrerin, <b>die</b> Studentin</li>
            <li>Окончания: <b>-ung, -heit, -keit, -schaft, -ion, -ität</b></li>
            <li>Большинство слов на <b>-e</b>: <b>die</b> Straße, <b>die</b> Reise, <b>die</b> Sprache</li>
          </ul>
          <p><b>🟢 Чаще средний (das):</b></p>
          <ul>
            <li>Уменьшительные на <b>-chen, -lein</b>: <b>das</b> Mädchen, <b>das</b> Büchlein</li>
            <li>Инфинитивы-существительные: <b>das</b> Lernen, <b>das</b> Essen</li>
            <li>Страны (большинство): <b>das</b> Land Österreich (но сама Österreich — без артикля)</li>
          </ul>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Какой артикль у слова «Mann» (мужчина)?', options: ['der', 'die', 'das', 'den'], answer: 0 },
      { type: 'choice', question: '«___ Kind» (ребёнок)?', options: ['das', 'der', 'die', 'dem'], answer: 0 },
      { type: 'fill', question: 'Вставь артикль: «___ Frau»', answer: 'die', placeholder: 'd...' },
      { type: 'choice', question: '«Wohnung» (квартира) — окончание -ung, значит:', options: ['die Wohnung', 'der Wohnung', 'das Wohnung', 'den Wohnung'], answer: 0 },
      { type: 'choice', question: 'Во множественном числе все существительные используют:', options: ['die', 'der', 'das', 'den'], answer: 0 },
      { type: 'choice', question: '«Mädchen» (девочка) — окончание -chen, значит:', options: ['das Mädchen', 'die Mädchen', 'der Mädchen', 'ein Mädchen'], answer: 0 },
    ],
  },

  'articles-indef': {
    title: 'Неопределённый артикль: ein, eine',
    level: 'A1 · Урок 9',
    intro: 'Неопределённый артикль — это «a/an» в немецком. Три рода — три формы. Плюс отрицание kein/keine!',
    theory: [
      {
        heading: '📋 Формы неопределённого артикля',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Род</th><th>Артикль</th><th>Пример</th></tr>
            <tr><td>Мужской (der)</td><td><b>ein</b></td><td>ein Mann, ein Tag, ein Zug</td></tr>
            <tr><td>Женский (die)</td><td><b>eine</b></td><td>eine Frau, eine Stadt, eine Uhr</td></tr>
            <tr><td>Средний (das)</td><td><b>ein</b></td><td>ein Kind, ein Haus, ein Buch</td></tr>
            <tr><td>Мн. число</td><td><b>—</b></td><td>Männer, Frauen, Kinder (без артикля!)</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">Das ist ein Mann. Das ist eine Frau. Das ist ein Kind.</div>
            <div class="ru">Это мужчина. Это женщина. Это ребёнок.</div>
          </div>
        `
      },
      {
        heading: '🚫 Отрицание: kein / keine',
        content: `
          <p>Чтобы сказать «не/никакой» — используй <b>kein</b> (для der/das) или <b>keine</b> (для die и мн.ч.)</p>
          <div class="table-wrap"><table>
            <tr><th>Утверждение</th><th>Отрицание</th></tr>
            <tr><td>Das ist <b>ein</b> Mann.</td><td>Das ist <b>kein</b> Mann.</td></tr>
            <tr><td>Das ist <b>eine</b> Frau.</td><td>Das ist <b>keine</b> Frau.</td></tr>
            <tr><td>Das ist <b>ein</b> Kind.</td><td>Das ist <b>kein</b> Kind.</td></tr>
            <tr><td>Das sind Männer.</td><td>Das sind <b>keine</b> Männer.</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">Ich habe keine Zeit. Das ist kein Problem!</div>
            <div class="ru">У меня нет времени. Это не проблема!</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Das ist ___ Frau. (eine/ein)', options: ['eine', 'ein', 'kein', 'eine/ein'], answer: 0 },
      { type: 'choice', question: 'Das ist ___ Mann. (eine/ein)', options: ['ein', 'eine', 'einer', 'einem'], answer: 0 },
      { type: 'fill', question: 'Das ist ___ Kind. (средний род)', answer: 'ein', placeholder: 'e...' },
      { type: 'choice', question: 'Ich habe ___ Zeit. (у меня нет времени, die Zeit)', options: ['keine', 'kein', 'nicht', 'nein'], answer: 0 },
      { type: 'choice', question: 'Das ist ___ Problem! (нет проблем, das Problem)', options: ['kein', 'keine', 'nicht ein', 'nein'], answer: 0 },
    ],
  },

  plural: {
    title: 'Множественное число',
    level: 'A1 · Урок 10',
    intro: 'Множественное число в немецком — особая тема. Нет одного правила! Но есть 5 основных типов, и суффикс лучше учить со словом.',
    theory: [
      {
        heading: '📋 5 типов множественного числа',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Тип</th><th>Суффикс</th><th>Пример ед.ч.</th><th>Мн.ч.</th></tr>
            <tr><td>1</td><td><b>—</b> (без изменений)</td><td>der Lehrer</td><td>die Lehrer</td></tr>
            <tr><td>2</td><td><b>-e</b></td><td>der Tag</td><td>die Tage</td></tr>
            <tr><td>3</td><td><b>-er</b> (+ умлаут)</td><td>das Kind</td><td>die Kinder</td></tr>
            <tr><td>4</td><td><b>-en / -n</b></td><td>die Frau</td><td>die Frauen</td></tr>
            <tr><td>5</td><td><b>-s</b> (иностр. слова)</td><td>das Auto</td><td>die Autos</td></tr>
          </table></div>
          <p>💡 Хорошая новость: во множественном числе <b>всегда «die»</b> — der/die/das исчезают.</p>
          <div class="example-box">
            <div class="de">das Buch → die Bücher · der Mann → die Männer · die Stadt → die Städte</div>
            <div class="ru">Умлауты могут добавляться — это третий тип.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'die Frau → множественное число:', options: ['die Frauen', 'die Fraue', 'die Fraus', 'die Fraüen'], answer: 0 },
      { type: 'choice', question: 'das Auto → множественное число:', options: ['die Autos', 'die Auten', 'die Auto', 'die Autoe'], answer: 0 },
      { type: 'fill', question: 'der Tag → die ___ (добавь -e)', answer: 'Tage', placeholder: 'Tag...' },
      { type: 'choice', question: 'Во множественном числе артикль всегда:', options: ['die', 'der', 'das', 'зависит от рода'], answer: 0 },
      { type: 'choice', question: 'das Kind → множественное число:', options: ['die Kinder', 'die Kinds', 'die Kinde', 'die Kindere'], answer: 0 },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // A1 — МОДУЛЬ 4: ГЛАГОЛЫ В НАСТОЯЩЕМ ВРЕМЕНИ
  // ══════════════════════════════════════════════════════════

  praesens: {
    title: 'Präsens: правильные глаголы',
    level: 'A1 · Урок 11',
    intro: 'Настоящее время (Präsens) — основа разговорного языка. У правильных глаголов чёткая схема спряжения.',
    theory: [
      {
        heading: '📋 Схема спряжения: глагол lernen (учить)',
        content: `
          <p>Берём основу (инфинитив без <b>-en</b>) и добавляем окончания:</p>
          <div class="table-wrap"><table>
            <tr><th>Местоимение</th><th>Окончание</th><th>lernen</th><th>wohnen (жить)</th><th>machen (делать)</th></tr>
            <tr><td>ich</td><td><b>-e</b></td><td>ich lern<b>e</b></td><td>ich wohn<b>e</b></td><td>ich mach<b>e</b></td></tr>
            <tr><td>du</td><td><b>-st</b></td><td>du lern<b>st</b></td><td>du wohn<b>st</b></td><td>du mach<b>st</b></td></tr>
            <tr><td>er/sie/es</td><td><b>-t</b></td><td>er lern<b>t</b></td><td>er wohn<b>t</b></td><td>er mach<b>t</b></td></tr>
            <tr><td>wir</td><td><b>-en</b></td><td>wir lern<b>en</b></td><td>wir wohn<b>en</b></td><td>wir mach<b>en</b></td></tr>
            <tr><td>ihr</td><td><b>-t</b></td><td>ihr lern<b>t</b></td><td>ihr wohn<b>t</b></td><td>ihr mach<b>t</b></td></tr>
            <tr><td>sie/Sie</td><td><b>-en</b></td><td>sie lern<b>en</b></td><td>sie wohn<b>en</b></td><td>sie mach<b>en</b></td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">Ich lerne Deutsch. Du wohnst in Moskau. Sie macht Hausaufgaben.</div>
            <div class="ru">Я учу немецкий. Ты живёшь в Москве. Она делает домашнее задание.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Ich ___ Deutsch. (lernen)', options: ['lerne', 'lernst', 'lernt', 'lernen'], answer: 0 },
      { type: 'choice', question: 'Du ___ in Berlin. (wohnen)', options: ['wohnst', 'wohne', 'wohnt', 'wohnen'], answer: 0 },
      { type: 'fill', question: 'Er ___ viel. (machen)', answer: 'macht', placeholder: 'mach...' },
      { type: 'choice', question: 'Wir ___ Deutsch. (lernen)', options: ['lernen', 'lerne', 'lernst', 'lernt'], answer: 0 },
      { type: 'fill', question: 'Sie (она) ___ in Wien. (wohnen)', answer: 'wohnt', placeholder: 'wohn...' },
    ],
  },

  'irregular-verbs': {
    title: 'Сильные глаголы (с чередованием)',
    level: 'A1 · Урок 12',
    intro: 'Часть глаголов меняет корневую гласную в формах du и er/sie/es. Это нужно запомнить — но таких глаголов не так много!',
    theory: [
      {
        heading: '⚡ Глаголы с чередованием e → i / ie',
        content: `
          <div class="table-wrap"><table>
            <tr><th></th><th>lesen (читать)</th><th>sprechen (говорить)</th><th>essen (есть)</th><th>sehen (видеть)</th></tr>
            <tr><td>ich</td><td>lese</td><td>spreche</td><td>esse</td><td>sehe</td></tr>
            <tr><td>du</td><td><b>liest</b></td><td><b>sprichst</b></td><td><b>isst</b></td><td><b>siehst</b></td></tr>
            <tr><td>er/sie/es</td><td><b>liest</b></td><td><b>spricht</b></td><td><b>isst</b></td><td><b>sieht</b></td></tr>
            <tr><td>wir</td><td>lesen</td><td>sprechen</td><td>essen</td><td>sehen</td></tr>
          </table></div>
        `
      },
      {
        heading: '⚡ Глаголы с чередованием a → ä',
        content: `
          <div class="table-wrap"><table>
            <tr><th></th><th>fahren (ехать)</th><th>schlafen (спать)</th><th>tragen (носить)</th></tr>
            <tr><td>ich</td><td>fahre</td><td>schlafe</td><td>trage</td></tr>
            <tr><td>du</td><td><b>fährst</b></td><td><b>schläfst</b></td><td><b>trägst</b></td></tr>
            <tr><td>er/sie/es</td><td><b>fährt</b></td><td><b>schläft</b></td><td><b>trägt</b></td></tr>
            <tr><td>wir</td><td>fahren</td><td>schlafen</td><td>tragen</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">Sie spricht sehr gut Deutsch! Er fährt nach Wien. Du isst zu viel Schokolade.</div>
            <div class="ru">Она очень хорошо говорит по-немецки! Он едет в Вену. Ты ешь слишком много шоколада.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Sie ___ sehr gut Deutsch. (sprechen)', options: ['spricht', 'sprechen', 'sprechst', 'sprecht'], answer: 0 },
      { type: 'choice', question: 'Er ___ nach Wien. (fahren)', options: ['fährt', 'fahrt', 'fahre', 'fährst'], answer: 0 },
      { type: 'fill', question: 'Du ___ ein Buch. (lesen)', answer: 'liest', placeholder: 'l...' },
      { type: 'choice', question: 'Was ___ du? (essen)', options: ['isst', 'esst', 'esse', 'essen'], answer: 0 },
    ],
  },

  'verb-haben': {
    title: 'Глагол haben (иметь)',
    level: 'A1 · Урок 13',
    intro: 'Haben — второй важнейший глагол после sein. Без него не скажешь «у меня есть» и не построишь прошедшее время.',
    theory: [
      {
        heading: '📋 Спряжение haben',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Местоимение</th><th>Форма</th><th>Пример</th></tr>
            <tr><td>ich</td><td><b>habe</b></td><td>Ich habe eine Frage.</td></tr>
            <tr><td>du</td><td><b>hast</b></td><td>Hast du Zeit?</td></tr>
            <tr><td>er/sie/es</td><td><b>hat</b></td><td>Sie hat ein Visum.</td></tr>
            <tr><td>wir</td><td><b>haben</b></td><td>Wir haben Hunger.</td></tr>
            <tr><td>ihr</td><td><b>habt</b></td><td>Ihr habt Glück!</td></tr>
            <tr><td>sie/Sie</td><td><b>haben</b></td><td>Sie haben Recht.</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">Ich habe Hunger / Durst / Angst / Glück / Zeit.</div>
            <div class="ru">Я хочу есть / пить / мне страшно / мне везёт / у меня есть время.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Ich ___ eine Frage.', options: ['habe', 'hast', 'hat', 'haben'], answer: 0 },
      { type: 'choice', question: 'Er ___ keine Zeit.', options: ['hat', 'habe', 'hast', 'habt'], answer: 0 },
      { type: 'fill', question: 'Wir ___ Hunger. (haben)', answer: 'haben', placeholder: 'h...' },
      { type: 'fill', question: 'Du ___ viel Glück! (haben)', answer: 'hast', placeholder: 'h...' },
      { type: 'fill', question: 'Sie (она) ___ ein Visum für Österreich.', answer: 'hat', placeholder: 'h...' },
    ],
  },

  'modal-verbs': {
    title: 'Модальные глаголы: können, wollen, müssen',
    level: 'A1 · Урок 14',
    intro: 'Модальные глаголы — «могу», «хочу», «должна». Они меняют смысл других глаголов и используются в речи постоянно!',
    theory: [
      {
        heading: '📋 Три главных модальных глагола',
        content: `
          <div class="table-wrap"><table>
            <tr><th></th><th>können (мочь/уметь)</th><th>wollen (хотеть)</th><th>müssen (должен)</th></tr>
            <tr><td>ich</td><td><b>kann</b></td><td><b>will</b></td><td><b>muss</b></td></tr>
            <tr><td>du</td><td><b>kannst</b></td><td><b>willst</b></td><td><b>musst</b></td></tr>
            <tr><td>er/sie/es</td><td><b>kann</b></td><td><b>will</b></td><td><b>muss</b></td></tr>
            <tr><td>wir</td><td><b>können</b></td><td><b>wollen</b></td><td><b>müssen</b></td></tr>
            <tr><td>ihr</td><td><b>könnt</b></td><td><b>wollt</b></td><td><b>müsst</b></td></tr>
            <tr><td>sie/Sie</td><td><b>können</b></td><td><b>wollen</b></td><td><b>müssen</b></td></tr>
          </table></div>
          <p>🔑 Правило: модальный глагол стоит на 2-м месте, основной глагол — <b>в конец предложения в инфинитиве!</b></p>
          <div class="example-box">
            <div class="de">Ich <b>will</b> in Österreich studier<b>en</b>. (хочу учиться)</div>
            <div class="ru">Модальный — на 2-м месте. Инфинитив — в конец!</div>
          </div>
          <div class="example-box">
            <div class="de">Ich kann gut Deutsch sprechen. Du musst viel lernen. Sie will nach Wien fahren.</div>
            <div class="ru">Я умею хорошо говорить по-немецки. Тебе надо много учить. Она хочет поехать в Вену.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Ich ___ Deutsch sprechen. (уметь)', options: ['kann', 'will', 'muss', 'könnte'], answer: 0 },
      { type: 'choice', question: 'Sie ___ nach Wien fahren. (хотеть)', options: ['will', 'kann', 'muss', 'wollt'], answer: 0 },
      { type: 'fill', question: 'Du ___ viel lernen. (müssen)', answer: 'musst', placeholder: 'muss...' },
      { type: 'choice', question: 'Где стоит инфинитив при модальном глаголе?', options: ['В конце предложения', 'На 2-м месте', 'В начале', 'После существительного'], answer: 0 },
      { type: 'fill', question: 'Wir ___ Deutsch lernen. (wollen)', answer: 'wollen', placeholder: 'woll...' },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // A1 — МОДУЛЬ 5: ПАДЕЖИ (по материалам Егора, урок 10)
  // ══════════════════════════════════════════════════════════

  nominativ: {
    title: 'Именительный падеж (Nominativ)',
    level: 'A1 · Урок 15',
    intro: 'Падежи — это как имя, фамилия и отчество у артиклей. Nominativ — базовый, «паспортный» вид слова.',
    theory: [
      {
        heading: '📋 Nominativ — кто? что?',
        content: `
          <p>Nominativ — это <b>подлежащее</b> предложения. Тот, кто совершает действие.</p>
          <div class="table-wrap"><table>
            <tr><th>Род</th><th>Определённый</th><th>Неопределённый</th><th>Пример</th></tr>
            <tr><td>Мужской</td><td><b>der</b></td><td><b>ein</b></td><td><b>Der</b> Mann kommt.</td></tr>
            <tr><td>Женский</td><td><b>die</b></td><td><b>eine</b></td><td><b>Die</b> Frau lernt.</td></tr>
            <tr><td>Средний</td><td><b>das</b></td><td><b>ein</b></td><td><b>Das</b> Kind spielt.</td></tr>
            <tr><td>Мн.число</td><td><b>die</b></td><td><b>—</b></td><td><b>Die</b> Studenten lernen.</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">Der Student lernt Deutsch. Eine Frau kommt. Das Kind schläft.</div>
            <div class="ru">Студент учит немецкий. Одна женщина приходит. Ребёнок спит.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: '___ Mann kommt aus Deutschland.', options: ['Der', 'Die', 'Das', 'Den'], answer: 0 },
      { type: 'choice', question: '___ Frau lernt Deutsch.', options: ['Die', 'Der', 'Das', 'Den'], answer: 0 },
      { type: 'fill', question: '___ Kind spielt. (средний род)', answer: 'Das', placeholder: 'D...' },
      { type: 'choice', question: 'Nominativ отвечает на вопрос:', options: ['Кто? Что?', 'Кого? Чего?', 'Кому? Чему?', 'Кем? Чем?'], answer: 0 },
    ],
  },

  akkusativ: {
    title: 'Винительный падеж (Akkusativ)',
    level: 'A1 · Урок 16',
    intro: 'Akkusativ — это прямое дополнение, объект действия. Меняется только мужской род! Это главная новость.',
    theory: [
      {
        heading: '📋 Akkusativ — кого? что?',
        content: `
          <p>⚠️ <b>Меняется только мужской род</b>: der → <b>den</b>, ein → <b>einen</b>. Остальные — как в Nominativ!</p>
          <div class="table-wrap"><table>
            <tr><th>Род</th><th>Nominativ</th><th>Akkusativ</th><th>Изменение</th></tr>
            <tr><td>Мужской</td><td>der / ein</td><td><b>den / einen</b></td><td>⚠️ МЕНЯЕТСЯ</td></tr>
            <tr><td>Женский</td><td>die / eine</td><td>die / eine</td><td>✓ не меняется</td></tr>
            <tr><td>Средний</td><td>das / ein</td><td>das / ein</td><td>✓ не меняется</td></tr>
            <tr><td>Мн.число</td><td>die / —</td><td>die / —</td><td>✓ не меняется</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">Ich liebe <b>einen</b> Mann. (Akkusativ, мужской → einen)</div>
            <div class="ru">Я люблю одного мужчину.</div>
          </div>
          <div class="example-box">
            <div class="de">Ich trinke <b>einen</b> Kaffee. Ich lese <b>ein</b> Buch. Ich liebe <b>die</b> Sprache.</div>
            <div class="ru">Я пью кофе. Я читаю книгу. Я люблю этот язык.</div>
          </div>
          <p>🔑 Глаголы с Akkusativ: haben, lieben, kaufen, essen, trinken, lesen, sehen, brauchen…</p>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Ich kaufe ___ Kaffee. (der Kaffee → Akkusativ)', options: ['einen', 'ein', 'eine', 'der'], answer: 0 },
      { type: 'choice', question: 'Ich liebe ___ Deutsch. (das Deutsch → Akkusativ)', options: ['das', 'den', 'die', 'dem'], answer: 0 },
      { type: 'fill', question: 'Ich sehe ___ Mann. (Akkusativ от der Mann)', answer: 'den', placeholder: 'd...' },
      { type: 'choice', question: 'В Akkusativ меняется только:', options: ['мужской род', 'женский род', 'средний род', 'все роды'], answer: 0 },
      { type: 'choice', question: 'Ich brauche ___ Hilfe. (die Hilfe → Akkusativ)', options: ['die', 'den', 'das', 'eine'], answer: 0 },
    ],
  },

  negation: {
    title: 'Отрицание: nicht и kein',
    level: 'A1 · Урок 17',
    intro: 'Как сказать «нет» по-немецки? Есть два варианта — nicht и kein. Путаница гарантирована, но сейчас разберём раз и навсегда!',
    theory: [
      {
        heading: '🚫 nicht vs kein — в чём разница?',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Слово</th><th>Когда использовать</th><th>Пример</th></tr>
            <tr><td><b>nicht</b></td><td>отрицание глагола, прилагательного, наречия</td><td>Ich lerne <b>nicht</b>.</td></tr>
            <tr><td><b>kein/keine</b></td><td>отрицание существительного (замена ein/eine или отсутствие)</td><td>Ich habe <b>kein</b> Geld.</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">Ich verstehe das <b>nicht</b>. (глагол → nicht)</div>
            <div class="ru">Я этого не понимаю.</div>
          </div>
          <div class="example-box">
            <div class="de">Das ist <b>nicht</b> gut. (прилагательное → nicht)</div>
            <div class="ru">Это нехорошо.</div>
          </div>
          <div class="example-box">
            <div class="de">Ich habe <b>keine</b> Zeit. (die Zeit → keine)</div>
            <div class="ru">У меня нет времени.</div>
          </div>
          <div class="example-box">
            <div class="de">Er hat <b>kein</b> Geld. (das Geld → kein)</div>
            <div class="ru">У него нет денег.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Ich verstehe das ___. (не понимаю — глагол)', options: ['nicht', 'kein', 'keine', 'nein'], answer: 0 },
      { type: 'choice', question: 'Ich habe ___ Zeit. (нет времени, die Zeit)', options: ['keine', 'nicht', 'kein', 'nein'], answer: 0 },
      { type: 'choice', question: 'Er hat ___ Auto. (нет машины, das Auto)', options: ['kein', 'keine', 'nicht', 'nein'], answer: 0 },
      { type: 'fill', question: 'Das ist ___ gut. (нехорошо — прилагательное)', answer: 'nicht', placeholder: 'n...' },
      { type: 'choice', question: 'Sie ist ___ krank. (она не больна — прилагательное)', options: ['nicht', 'kein', 'keine', 'un-'], answer: 0 },
    ],
  },

  'sentence-order': {
    title: 'Порядок слов в предложении',
    level: 'A1 · Урок 18',
    intro: 'Главное правило немецкого синтаксиса — глагол ВСЕГДА стоит на втором месте. Запомни это раз и навсегда!',
    theory: [
      {
        heading: '📐 Правило второго места (V2)',
        content: `
          <p>В немецком предложении <b>сказуемое (глагол) всегда на 2-м месте</b>. Не слова, а именно <b>позиции</b>!</p>
          <div class="table-wrap"><table>
            <tr><th>Позиция 1</th><th>Позиция 2 (глагол)</th><th>Остальное</th></tr>
            <tr><td>Ich</td><td><b>lerne</b></td><td>jeden Tag Deutsch.</td></tr>
            <tr><td>Jeden Tag</td><td><b>lerne</b></td><td>ich Deutsch.</td></tr>
            <tr><td>Deutsch</td><td><b>lerne</b></td><td>ich jeden Tag.</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">Heute <b>fahre</b> ich nach Wien. (Сегодня я еду в Вену.)</div>
            <div class="ru">«Heute» на первом месте → глагол всё равно на втором, ich сдвигается!</div>
          </div>
          <div class="example-box">
            <div class="de">In Österreich <b>spricht</b> man Deutsch.</div>
            <div class="ru">В Австрии говорят по-немецки.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Правильный порядок: «Ich / lerne / Deutsch / jeden Tag»:', options: ['Ich lerne jeden Tag Deutsch.', 'Ich Deutsch lerne jeden Tag.', 'Jeden Tag ich lerne Deutsch.', 'Lerne ich Deutsch jeden Tag.'], answer: 0 },
      { type: 'choice', question: 'Если предложение начинается с «Heute» (сегодня):',options: ['Heute fahre ich...', 'Heute ich fahre...', 'Heute ich...', 'Ich heute fahre...'], answer: 0 },
      { type: 'choice', question: 'Глагол в немецком предложении стоит на:',options: ['2-м месте', '1-м месте', '3-м месте', 'в конце'], answer: 0 },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // A2 — DATIV И ПРЕДЛОГИ
  // ══════════════════════════════════════════════════════════

  dativ: {
    title: 'Дательный падеж (Dativ)',
    level: 'A2 · Урок 19',
    intro: 'Dativ — третий падеж. Отвечает на вопрос «кому?». Меняются все роды! Это уже A2.',
    theory: [
      {
        heading: '📋 Dativ — кому? чему?',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Род</th><th>Nominativ</th><th>Dativ</th></tr>
            <tr><td>Мужской</td><td>der / ein</td><td><b>dem / einem</b></td></tr>
            <tr><td>Женский</td><td>die / eine</td><td><b>der / einer</b></td></tr>
            <tr><td>Средний</td><td>das / ein</td><td><b>dem / einem</b></td></tr>
            <tr><td>Мн.число</td><td>die / —</td><td><b>den / — (+n к сущ.)</b></td></tr>
          </table></div>
          <p>⚠️ Женский в Dativ = der (как мужской в Nominativ). Это частая ловушка!</p>
          <div class="example-box">
            <div class="de">Ich gebe <b>dem Mann</b> das Buch. (кому? → мужской Dativ)</div>
            <div class="ru">Я даю мужчине книгу.</div>
          </div>
          <div class="example-box">
            <div class="de">Ich helfe <b>der Frau</b>. (кому? → женский Dativ = der!)</div>
            <div class="ru">Я помогаю женщине.</div>
          </div>
          <p>🔑 Глаголы с Dativ: helfen, geben, sagen, zeigen, danken, gefallen…</p>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Ich helfe ___ Frau. (die Frau → Dativ)', options: ['der', 'die', 'den', 'dem'], answer: 0 },
      { type: 'choice', question: 'Ich gebe ___ Mann das Buch. (der Mann → Dativ)', options: ['dem', 'den', 'der', 'die'], answer: 0 },
      { type: 'fill', question: 'Ich danke ___ Lehrerin. (die Lehrerin → Dativ)', answer: 'der', placeholder: 'd...' },
      { type: 'choice', question: 'Женский род в Dativ:', options: ['der', 'die', 'dem', 'den'], answer: 0 },
    ],
  },

  'prepositions-place': {
    title: 'Предлоги места',
    level: 'A2 · Урок 20',
    intro: 'Предлоги места — где находится предмет. Важно: одни требуют Dativ, другие — Akkusativ. Есть хитрый способ запомнить!',
    theory: [
      {
        heading: '📍 Предлоги + Dativ (где? — статика)',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Предлог</th><th>Значение</th><th>Пример</th></tr>
            <tr><td><b>in + Dat.</b></td><td>в (внутри)</td><td>Das Buch ist <b>in der</b> Tasche.</td></tr>
            <tr><td><b>an + Dat.</b></td><td>у, при, на (вертик.)</td><td>Das Bild hängt <b>an der</b> Wand.</td></tr>
            <tr><td><b>auf + Dat.</b></td><td>на (горизонт.)</td><td>Das Buch liegt <b>auf dem</b> Tisch.</td></tr>
            <tr><td><b>unter + Dat.</b></td><td>под</td><td>Die Katze ist <b>unter dem</b> Tisch.</td></tr>
            <tr><td><b>über + Dat.</b></td><td>над</td><td>Die Lampe hängt <b>über dem</b> Tisch.</td></tr>
            <tr><td><b>neben + Dat.</b></td><td>рядом с</td><td>Er sitzt <b>neben der</b> Frau.</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">💡 Правило Егора: «Wo?» (где?) → Dativ. «Wohin?» (куда?) → Akkusativ.</div>
            <div class="ru">Das Buch liegt auf <b>dem</b> Tisch (где?) / Ich lege das Buch auf <b>den</b> Tisch (куда?)</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Das Buch liegt auf ___ Tisch. (где? Dativ, der Tisch)', options: ['dem', 'den', 'der', 'die'], answer: 0 },
      { type: 'choice', question: 'Die Katze ist unter ___ Stuhl. (где? Dativ, der Stuhl)', options: ['dem', 'den', 'der', 'die'], answer: 0 },
      { type: 'choice', question: '«Wo?» (где?) требует падеж:', options: ['Dativ', 'Akkusativ', 'Nominativ', 'Genitiv'], answer: 0 },
      { type: 'fill', question: 'Das Bild hängt an ___ Wand. (Dativ, die Wand)', answer: 'der', placeholder: 'd...' },
    ],
  },

  perfekt: {
    title: 'Прошедшее время Perfekt',
    level: 'A2 · Урок 21',
    intro: 'Perfekt — главное прошедшее время в разговорном немецком. Строится из have/sein + Partizip II. Именно это время используют в Австрии в разговоре!',
    theory: [
      {
        heading: '🕐 Формула Perfekt',
        content: `
          <p><b>haben / sein</b> (на 2-м месте) + <b>Partizip II</b> (в конце)</p>
          <div class="table-wrap"><table>
            <tr><th>Инфинитив</th><th>Partizip II</th><th>Пример</th></tr>
            <tr><td>machen</td><td><b>ge</b>mach<b>t</b></td><td>Ich habe Hausaufgaben <b>gemacht</b>.</td></tr>
            <tr><td>lernen</td><td><b>ge</b>lern<b>t</b></td><td>Sie hat Deutsch <b>gelernt</b>.</td></tr>
            <tr><td>kaufen</td><td><b>ge</b>kauf<b>t</b></td><td>Er hat ein Buch <b>gekauft</b>.</td></tr>
            <tr><td>sprechen</td><td><b>ge</b>sproch<b>en</b></td><td>Wir haben Deutsch <b>gesprochen</b>.</td></tr>
            <tr><td>fahren</td><td><b>ge</b>fahr<b>en</b></td><td>Sie ist nach Wien <b>gefahren</b>.*</td></tr>
            <tr><td>kommen</td><td><b>ge</b>komm<b>en</b></td><td>Er ist <b>gekommen</b>.*</td></tr>
          </table></div>
          <p>* Глаголы движения и изменения состояния используют <b>sein</b>, а не haben!</p>
          <div class="example-box">
            <div class="de">Ich habe heute viel Deutsch gelernt. Wir sind gestern nach Wien gefahren.</div>
            <div class="ru">Сегодня я много учила немецкий. Мы вчера ездили в Вену.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Ich ___ viel gelernt. (haben/sein → haben)', options: ['habe', 'bin', 'ist', 'hat'], answer: 0 },
      { type: 'choice', question: 'Sie ___ nach Wien gefahren. (fahren → sein!)', options: ['ist', 'hat', 'habe', 'haben'], answer: 0 },
      { type: 'fill', question: 'Ich habe das Buch ge___t. (kaufen → Partizip II)', answer: 'kauf', placeholder: 'kauf...' },
      { type: 'choice', question: 'Partizip II правильных глаголов: ge- + Stamm + ?', options: ['-t', '-en', '-st', '-e'], answer: 0 },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // B1 — СЛОЖНЫЕ КОНСТРУКЦИИ
  // ══════════════════════════════════════════════════════════

  'subordinate-clauses': {
    title: 'Придаточные предложения',
    level: 'B1 · Урок 22',
    intro: 'Weil, dass, wenn — эти союзы отправляют глагол в конец предложения. Это правило нельзя нарушать!',
    theory: [
      {
        heading: '📐 Союзы и порядок слов',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Союз</th><th>Значение</th><th>Пример</th></tr>
            <tr><td><b>weil</b></td><td>потому что</td><td>Ich lerne Deutsch, <b>weil</b> ich in Österreich studieren <b>will</b>.</td></tr>
            <tr><td><b>dass</b></td><td>что</td><td>Ich weiß, <b>dass</b> Wien sehr schön <b>ist</b>.</td></tr>
            <tr><td><b>wenn</b></td><td>когда / если</td><td><b>Wenn</b> ich Zeit <b>habe</b>, lerne ich Deutsch.</td></tr>
            <tr><td><b>obwohl</b></td><td>хотя</td><td>Er schläft, <b>obwohl</b> er lernen <b>muss</b>.</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">⚠️ После этих союзов глагол — В КОНЕЦ! Это самая частая ошибка на B1.</div>
            <div class="ru">Ich lerne, WEIL ich nach Österreich WILL. (nicht: weil ich will nach Österreich)</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Ich lerne Deutsch, weil ich in Österreich studieren ___.',options: ['will', 'ich will', 'will ich', 'ich möchte'], answer: 0 },
      { type: 'choice', question: 'Ich weiß, dass Wien sehr schön ___.',options: ['ist', 'is', 'sind', 'bin'], answer: 0 },
      { type: 'choice', question: 'Союз «weil» означает:',options: ['потому что', 'хотя', 'что', 'когда'], answer: 0 },
      { type: 'fill', question: 'Er schläft, obwohl er lernen ___. (müssen)', answer: 'muss', placeholder: 'm...' },
    ],
  },

  'konjunktiv-2': {
    title: 'Konjunktiv II: вежливость и мечты',
    level: 'B1 · Урок 23',
    intro: 'Konjunktiv II используют для вежливых просьб, нереальных желаний и гипотез. «Я бы хотела...», «Могли бы вы...»',
    theory: [
      {
        heading: '📋 Основные формы Konjunktiv II',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Инфинитив</th><th>ich</th><th>du</th><th>er/sie</th><th>wir</th></tr>
            <tr><td>werden (würde-форма)</td><td><b>würde</b></td><td>würdest</td><td>würde</td><td>würden</td></tr>
            <tr><td>sein</td><td><b>wäre</b></td><td>wärst</td><td>wäre</td><td>wären</td></tr>
            <tr><td>haben</td><td><b>hätte</b></td><td>hättest</td><td>hätte</td><td>hätten</td></tr>
            <tr><td>können</td><td><b>könnte</b></td><td>könntest</td><td>könnte</td><td>könnten</td></tr>
            <tr><td>möchten</td><td><b>möchte</b></td><td>möchtest</td><td>möchte</td><td>möchten</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">Ich möchte in Wien studieren. (Я бы хотела учиться в Вене.)</div>
            <div class="ru">möchten — самая мягкая и вежливая форма «хотеть»</div>
          </div>
          <div class="example-box">
            <div class="de">Könnten Sie mir helfen? (Не могли бы вы мне помочь?)</div>
            <div class="ru">Идеально для общения в университете Вены!</div>
          </div>
          <div class="example-box">
            <div class="de">Ich würde gern nach Österreich fahren. (Я бы с удовольствием поехала в Австрию.)</div>
            <div class="ru">würde + инфинитив = универсальная вежливая форма</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Ich ___ gern Deutsch sprechen. (вежливое «хотела бы»)', options: ['möchte', 'will', 'muss', 'kann'], answer: 0 },
      { type: 'choice', question: '___ Sie mir helfen? (Не могли бы вы...)', options: ['Könnten', 'Können', 'Konnte', 'Könnte'], answer: 0 },
      { type: 'fill', question: 'Ich ___ gern nach Wien fahren. (würde)', answer: 'würde', placeholder: 'wür...' },
      { type: 'choice', question: 'Konjunktiv II используется для:', options: ['вежливых просьб и нереальных желаний', 'прошедшего времени', 'будущего времени', 'отрицания'], answer: 0 },
    ],
  },

  'b1-vocab': {
    title: 'Лексика B1: учёба и поступление',
    level: 'B1 · Урок 24',
    intro: 'Специально для тебя — слова и фразы про учёбу в Австрии. Именно это ты будешь говорить в университете Вены!',
    theory: [
      {
        heading: '🎓 Учёба и университет',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Немецкий</th><th>Русский</th></tr>
            <tr><td>die Universität / die Uni</td><td>университет</td></tr>
            <tr><td>das Studium</td><td>учёба (в вузе)</td></tr>
            <tr><td>sich bewerben (um + Akk.)</td><td>подавать заявку на</td></tr>
            <tr><td>die Zulassung</td><td>допуск, зачисление</td></tr>
            <tr><td>die Bewerbung</td><td>заявка, заявление</td></tr>
            <tr><td>das Zeugnis</td><td>аттестат, свидетельство</td></tr>
            <tr><td>der Sprachnachweis</td><td>языковой сертификат</td></tr>
            <tr><td>das Semester</td><td>семестр</td></tr>
            <tr><td>der Stundenplan</td><td>расписание</td></tr>
            <tr><td>die Prüfung / das Examen</td><td>экзамен</td></tr>
            <tr><td>bestehen / nicht bestehen</td><td>сдать / не сдать</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">Ich möchte mich an der Universität Wien für Medizin bewerben.</div>
            <div class="ru">Я хочу подать заявку в Венский университет на медицину.</div>
          </div>
          <div class="example-box">
            <div class="de">Für das Studium in Österreich brauche ich einen Sprachnachweis auf dem Niveau B2.</div>
            <div class="ru">Для учёбы в Австрии мне нужен языковой сертификат уровня B2.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Как по-немецки «экзамен»?', options: ['die Prüfung', 'die Frage', 'die Aufgabe', 'das Spiel'], answer: 0 },
      { type: 'choice', question: '«Sich bewerben» означает:', options: ['подавать заявку', 'учиться', 'сдавать экзамен', 'получать оценку'], answer: 0 },
      { type: 'fill', question: 'Für das Studium brauche ich einen Sprach_______. (сертификат)', answer: 'nachweis', placeholder: 'nach...' },
      { type: 'choice', question: '«Bestehen» в контексте экзамена — это:', options: ['сдать', 'провалить', 'пропустить', 'записаться'], answer: 0 },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // НОВЫЕ УРОКИ ПО DIE GELBE
  // ══════════════════════════════════════════════════════════

  'trennbare-verben': {
    title: 'Отделяемые глаголы (Präfix)',
    level: 'A1 · Грамматика',
    intro: 'В немецком многие глаголы состоят из приставки + основы. В предложении приставка "отлетает" в конец — это одна из самых частых ошибок новичков!',
    theory: [
      {
        heading: '✂️ Как работают отделяемые приставки',
        content: `
          <p>Отделяемые приставки: <b>auf-, an-, aus-, mit-, ab-, ein-, vor-, zu-, nach-, weg-</b></p>
          <div class="example-box">
            <div class="de">aufstehen → Ich stehe um 7 Uhr <b>auf</b>.</div>
            <div class="ru">вставать → Я встаю в 7 часов.</div>
          </div>
          <div class="example-box">
            <div class="de">anrufen → Er ruft seine Mutter <b>an</b>.</div>
            <div class="ru">звонить → Он звонит своей маме.</div>
          </div>
          <div class="example-box">
            <div class="de">mitkommen → Kommst du <b>mit</b>?</div>
            <div class="ru">идти вместе → Ты идёшь с нами?</div>
          </div>
          <p>В инфинитиве и в словаре глагол пишется целиком: <b>aufstehen</b>, <b>anrufen</b>.</p>
        `
      },
      {
        heading: '📋 Самые важные отделяемые глаголы',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Глагол</th><th>Перевод</th><th>Пример</th></tr>
            <tr><td><b>auf</b>stehen</td><td>вставать</td><td>Ich stehe um 8 Uhr <b>auf</b>.</td></tr>
            <tr><td><b>an</b>rufen</td><td>звонить</td><td>Ich rufe dich <b>an</b>.</td></tr>
            <tr><td><b>mit</b>kommen</td><td>идти с кем-то</td><td>Kommst du <b>mit</b>?</td></tr>
            <tr><td><b>ein</b>kaufen</td><td>делать покупки</td><td>Wir kaufen im Supermarkt <b>ein</b>.</td></tr>
            <tr><td><b>ab</b>fahren</td><td>отправляться</td><td>Der Zug fährt um 10 Uhr <b>ab</b>.</td></tr>
            <tr><td><b>aus</b>gehen</td><td>выходить/гулять</td><td>Wir gehen heute Abend <b>aus</b>.</td></tr>
            <tr><td><b>an</b>fangen</td><td>начинать</td><td>Der Kurs fängt um 9 Uhr <b>an</b>.</td></tr>
            <tr><td><b>zu</b>machen</td><td>закрывать</td><td>Mach bitte die Tür <b>zu</b>!</td></tr>
            <tr><td><b>vor</b>bereiten</td><td>готовиться</td><td>Ich bereite mich auf die Prüfung <b>vor</b>.</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">💡 С модальным глаголом: Ich muss um 7 Uhr aufstehen. (приставка не отделяется!)</div>
            <div class="ru">С модальным глаголом глагол стоит в инфинитиве в конце предложения целиком.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Ich _____ um 7 Uhr _____. (aufstehen)', options: ['stehe … auf', 'aufstehe … –', 'stehe … aufstehen', 'auf … stehe'], answer: 0 },
      { type: 'fill', question: 'Er _____ seine Mutter _____. (anrufen) — вставь глагол правильно:', answer: 'ruft … an', placeholder: 'ruft...' },
      { type: 'choice', question: 'Kommst du _____? (mitkommen)', options: ['mit', 'mitkommen', 'kommt mit', 'gekommen'], answer: 0 },
      { type: 'choice', question: 'Wir _____ im Supermarkt _____. (einkaufen)', options: ['kaufen … ein', 'einkaufen', 'kaufen ein … –', 'ein … kaufen'], answer: 0 },
      { type: 'fill', question: 'Der Kurs _____ um 9 Uhr _____. (anfangen)', answer: 'fängt … an', placeholder: 'fängt...' },
    ],
  },

  genitiv: {
    title: 'Родительный падеж (Genitiv)',
    level: 'A2 · Грамматика · Die Gelbe Kap. 8',
    intro: 'Genitiv — четвёртый падеж немецкого. Он отвечает на вопрос «чей?/чьего?» и показывает принадлежность. В разговорной речи часто заменяется на von + Dativ.',
    theory: [
      {
        heading: '📐 Формы Genitiv',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Род</th><th>Definit</th><th>Indefinit</th><th>Окончание существительного</th></tr>
            <tr><td>m (der)</td><td>des Mannes</td><td>eines Mannes</td><td>+s или +es (у коротких слов)</td></tr>
            <tr><td>f (die)</td><td>der Frau</td><td>einer Frau</td><td>без изменений</td></tr>
            <tr><td>n (das)</td><td>des Kindes</td><td>eines Kindes</td><td>+s или +es</td></tr>
            <tr><td>pl (die)</td><td>der Kinder</td><td>—</td><td>без изменений</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">Das ist das Auto <b>des Mannes</b>. — Это машина мужчины.</div>
            <div class="ru">Das ist das Haus <b>meiner Schwester</b>. — Это дом моей сестры.</div>
          </div>
          <div class="example-box">
            <div class="de">Die Bücher <b>der Studentin</b> liegen auf dem Tisch.</div>
            <div class="ru">Книги студентки лежат на столе.</div>
          </div>
        `
      },
      {
        heading: '📌 Предлоги с Genitiv',
        content: `
          <p>Эти предлоги всегда требуют Genitiv:</p>
          <div class="table-wrap"><table>
            <tr><th>Предлог</th><th>Значение</th><th>Пример</th></tr>
            <tr><td><b>wegen</b></td><td>из-за</td><td>wegen des Regens — из-за дождя</td></tr>
            <tr><td><b>während</b></td><td>во время</td><td>während der Prüfung — во время экзамена</td></tr>
            <tr><td><b>trotz</b></td><td>несмотря на</td><td>trotz des Wetters — несмотря на погоду</td></tr>
            <tr><td><b>statt / anstatt</b></td><td>вместо</td><td>statt des Kaffees — вместо кофе</td></tr>
            <tr><td><b>außerhalb</b></td><td>за пределами</td><td>außerhalb der Stadt — за городом</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">💡 В разговорной речи: «Das ist das Auto von meinem Vater» вместо «meines Vaters» — оба варианта правильны!</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Das ist das Buch _____ Studentin.', options: ['der', 'die', 'das', 'den'], answer: 0 },
      { type: 'choice', question: 'Das Auto _____ Mannes ist neu.', options: ['des', 'dem', 'den', 'der'], answer: 0 },
      { type: 'fill', question: 'Wegen _____ Wetters bleibe ich zu Hause. (das Wetter — Genitiv)', answer: 'des', placeholder: 'd...' },
      { type: 'choice', question: 'Während _____ Prüfung darf man nicht sprechen. (die Prüfung)', options: ['der', 'die', 'den', 'dem'], answer: 0 },
      { type: 'choice', question: 'Trotz _____ Regens gehen wir spazieren. (der Regen)', options: ['des', 'dem', 'den', 'der'], answer: 0 },
    ],
  },

  'adjektiv-nach-def': {
    title: 'Прилагательные после der/die/das',
    level: 'A2 · Грамматика · Die Gelbe Kap. 11',
    intro: 'Один из ключевых разделов «Die Gelbe» — окончания прилагательных. После определённого артикля (der/die/das) используется так называемое «слабое склонение».',
    theory: [
      {
        heading: '📐 Таблица окончаний — слабое склонение',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Падеж</th><th>der (m)</th><th>die (f)</th><th>das (n)</th><th>die (pl)</th></tr>
            <tr><td>Nominativ</td><td>der alt<b>e</b> Mann</td><td>die alt<b>e</b> Frau</td><td>das alt<b>e</b> Kind</td><td>die alt<b>en</b> Leute</td></tr>
            <tr><td>Akkusativ</td><td>den alt<b>en</b> Mann</td><td>die alt<b>e</b> Frau</td><td>das alt<b>e</b> Kind</td><td>die alt<b>en</b> Leute</td></tr>
            <tr><td>Dativ</td><td>dem alt<b>en</b> Mann</td><td>der alt<b>en</b> Frau</td><td>dem alt<b>en</b> Kind</td><td>den alt<b>en</b> Leuten</td></tr>
            <tr><td>Genitiv</td><td>des alt<b>en</b> Mannes</td><td>der alt<b>en</b> Frau</td><td>des alt<b>en</b> Kindes</td><td>der alt<b>en</b> Leute</td></tr>
          </table></div>
          <p>💡 <b>Правило:</b> Nominativ ед.ч. — окончание <b>-e</b>. Всё остальное — <b>-en</b>. Просто!</p>
          <div class="example-box">
            <div class="de">Der <b>alte</b> Mann trinkt den <b>schwarzen</b> Kaffee.</div>
            <div class="ru">Старый мужчина пьёт чёрный кофе.</div>
          </div>
          <div class="example-box">
            <div class="de">Ich kenne die <b>nette</b> Studentin. Ich helfe dem <b>kleinen</b> Kind.</div>
            <div class="ru">Я знаю милую студентку. Я помогаю маленькому ребёнку.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Der _____ Mann spricht Deutsch. (alt)', options: ['alte', 'alten', 'altem', 'alter'], answer: 0 },
      { type: 'choice', question: 'Ich sehe den _____ Hund. (groß)', options: ['großen', 'große', 'großem', 'großer'], answer: 0 },
      { type: 'choice', question: 'Die _____ Frau kommt aus Wien. (jung)', options: ['junge', 'jungen', 'jungem', 'junger'], answer: 0 },
      { type: 'fill', question: 'Ich helfe dem _____ Kind. (klein) — Dativ, das Kind', answer: 'kleinen', placeholder: 'klein...' },
      { type: 'choice', question: 'Das ist das Buch des _____ Professors. (bekannt)', options: ['bekannten', 'bekannte', 'bekanntем', 'bekannter'], answer: 0 },
    ],
  },

  'adjektiv-nach-indef': {
    title: 'Прилагательные после ein/eine',
    level: 'A2 · Грамматика · Die Gelbe Kap. 12',
    intro: 'После неопределённого артикля (ein/eine/kein) используется «смешанное склонение». Окончание прилагательного должно «показывать» род там, где артикль не показывает.',
    theory: [
      {
        heading: '📐 Таблица — смешанное склонение',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Падеж</th><th>ein (m)</th><th>eine (f)</th><th>ein (n)</th></tr>
            <tr><td>Nominativ</td><td>ein alt<b>er</b> Mann</td><td>eine alt<b>e</b> Frau</td><td>ein alt<b>es</b> Kind</td></tr>
            <tr><td>Akkusativ</td><td>einen alt<b>en</b> Mann</td><td>eine alt<b>e</b> Frau</td><td>ein alt<b>es</b> Kind</td></tr>
            <tr><td>Dativ</td><td>einem alt<b>en</b> Mann</td><td>einer alt<b>en</b> Frau</td><td>einem alt<b>en</b> Kind</td></tr>
            <tr><td>Genitiv</td><td>eines alt<b>en</b> Mannes</td><td>einer alt<b>en</b> Frau</td><td>eines alt<b>en</b> Kindes</td></tr>
          </table></div>
          <p>💡 <b>Правило:</b> Там где артикль «слабый» (ein, eine, einem...) — прилагательное берёт «сильное» окончание рода (-er, -e, -es). Остальное — <b>-en</b>.</p>
          <div class="example-box">
            <div class="de">Das ist ein <b>schöner</b> Tag! (m, Nom.) — Это прекрасный день!</div>
            <div class="ru">Ich habe eine <b>nette</b> Freundin. (f, Nom./Akk.) — У меня есть милая подруга.</div>
          </div>
          <div class="example-box">
            <div class="de">Ich wohne in einem <b>kleinen</b> Zimmer. (Dativ) — Я живу в маленькой комнате.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Das ist ein _____ Tag! (schön, m, Nom.)', options: ['schöner', 'schöne', 'schönen', 'schönem'], answer: 0 },
      { type: 'choice', question: 'Ich habe eine _____ Katze. (klein, f, Akk.)', options: ['kleine', 'kleiner', 'kleinen', 'kleinem'], answer: 0 },
      { type: 'fill', question: 'Ich wohne in einem _____ Zimmer. (groß, Dativ)', answer: 'großen', placeholder: 'groß...' },
      { type: 'choice', question: 'Er kauft ein _____ Auto. (neu, n, Akk.)', options: ['neues', 'neue', 'neuer', 'neuen'], answer: 0 },
      { type: 'choice', question: 'Sie kommt mit einem _____ Freund. (gut, Dativ, m)', options: ['guten', 'gute', 'guter', 'gutem'], answer: 0 },
    ],
  },

  komparativ: {
    title: 'Komparativ и Superlativ',
    level: 'A2 · Грамматика · Die Gelbe Kap. 9',
    intro: 'Сравниваем людей, вещи и места! Komparativ — «больше/лучше», Superlativ — «самый большой/лучший». В «Die Gelbe» этому посвящена отдельная глава — очень важная для B1!',
    theory: [
      {
        heading: '📊 Образование Komparativ',
        content: `
          <p>Komparativ = прилагательное + <b>-er</b></p>
          <div class="table-wrap"><table>
            <tr><th>Grundform</th><th>Komparativ</th><th>Перевод</th></tr>
            <tr><td>groß</td><td>größ<b>er</b></td><td>больше</td></tr>
            <tr><td>klein</td><td>klein<b>er</b></td><td>меньше</td></tr>
            <tr><td>schnell</td><td>schnell<b>er</b></td><td>быстрее</td></tr>
            <tr><td>alt</td><td>ält<b>er</b></td><td>старше (умлаут!)</td></tr>
            <tr><td>jung</td><td>jüng<b>er</b></td><td>моложе (умлаут!)</td></tr>
            <tr><td>warm</td><td>wärm<b>er</b></td><td>теплее (умлаут!)</td></tr>
          </table></div>
          <p>⚠️ <b>Исключения</b> (нужно выучить наизусть):</p>
          <div class="table-wrap"><table>
            <tr><th>Grundform</th><th>Komparativ</th><th>Superlativ</th></tr>
            <tr><td>gut</td><td>besser</td><td>am besten</td></tr>
            <tr><td>viel</td><td>mehr</td><td>am meisten</td></tr>
            <tr><td>gern</td><td>lieber</td><td>am liebsten</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">Wien ist schön. Aber Paris ist <b>schöner</b>. — Вена красива. Но Париж красивее.</div>
            <div class="ru">Margo ist <b>älter als</b> ihre Schwester. — Марго старше своей сестры.</div>
          </div>
        `
      },
      {
        heading: '🏆 Superlativ',
        content: `
          <p>Superlativ = am + прилагательное + <b>-sten</b> (предикативно)</p>
          <p>Или определённый артикль + прилагательное + <b>-sten</b> (атрибутивно)</p>
          <div class="example-box">
            <div class="de">Dieses Buch ist am <b>interessantesten</b>. — Эта книга самая интересная.</div>
            <div class="ru">Das ist die <b>schönste</b> Stadt der Welt. — Это красивейший город мира.</div>
          </div>
          <div class="example-box">
            <div class="de">Ich lerne <b>am liebsten</b> Deutsch. — Охотнее всего я учу немецкий.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Moskau ist groß. Wien ist _____.', options: ['kleiner', 'kleinst', 'am kleinen', 'kleines'], answer: 0 },
      { type: 'fill', question: 'Dieses Buch ist _____ als jenes. (gut → Komparativ)', answer: 'besser', placeholder: 'bes...' },
      { type: 'choice', question: 'Er ist _____ als sein Bruder. (alt)', options: ['älter', 'alter', 'altер', 'am alten'], answer: 0 },
      { type: 'choice', question: 'Das ist die _____ Stadt. (schön, Superlativ, f)', options: ['schönste', 'schöner', 'am schönsten', 'schönsten'], answer: 0 },
      { type: 'fill', question: 'Ich lerne _____ Musik. (gern → Superlativ "am liebsten")', answer: 'am liebsten', placeholder: 'am li...' },
    ],
  },

  praeteritum: {
    title: 'Präteritum: sein и haben',
    level: 'A2 · Грамматика · Die Gelbe Kap. 14',
    intro: 'Präteritum — книжное/нарративное прошедшее время. В разговоре используют Perfekt, но sein и haben ВСЕГДА используют Präteritum (war, hatte) — это важно!',
    theory: [
      {
        heading: '📖 war и hatte — самые нужные формы',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Лицо</th><th>sein → war</th><th>haben → hatte</th></tr>
            <tr><td>ich</td><td>war</td><td>hatte</td></tr>
            <tr><td>du</td><td>warst</td><td>hattest</td></tr>
            <tr><td>er/sie/es</td><td>war</td><td>hatte</td></tr>
            <tr><td>wir</td><td>waren</td><td>hatten</td></tr>
            <tr><td>ihr</td><td>wart</td><td>hattet</td></tr>
            <tr><td>sie/Sie</td><td>waren</td><td>hatten</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">Gestern <b>war</b> ich in Wien. — Вчера я была в Вене.</div>
            <div class="ru">Wir <b>hatten</b> keine Zeit. — У нас не было времени.</div>
          </div>
          <div class="example-box">
            <div class="de">Das Wetter <b>war</b> schön. Es <b>gab</b> viele Touristen. — Погода была хорошая. Было много туристов.</div>
          </div>
        `
      },
      {
        heading: '⚡ Модальные в Präteritum',
        content: `
          <p>Модальные глаголы тоже часто используют Präteritum:</p>
          <div class="table-wrap"><table>
            <tr><th>Инфинитив</th><th>Präteritum (ich/er)</th><th>Перевод</th></tr>
            <tr><td>können</td><td>konnte</td><td>мог/могла</td></tr>
            <tr><td>müssen</td><td>musste</td><td>должен/должна был(а)</td></tr>
            <tr><td>wollen</td><td>wollte</td><td>хотел(а)</td></tr>
            <tr><td>dürfen</td><td>durfte</td><td>имел(а) право</td></tr>
            <tr><td>sollen</td><td>sollte</td><td>должен/должна (по плану)</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">Als Kind <b>konnte</b> ich gut schwimmen. — В детстве я умела хорошо плавать.</div>
            <div class="ru">Ich <b>wollte</b> in Wien studieren. — Я хотела учиться в Вене.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Gestern _____ ich krank. (sein, ich)', options: ['war', 'bin', 'hatte', 'ist'], answer: 0 },
      { type: 'fill', question: 'Wir _____ keine Zeit. (haben, wir, Präteritum)', answer: 'hatten', placeholder: 'hatt...' },
      { type: 'choice', question: 'Als Kind _____ sie kein Fahrrad. (haben, sie)', options: ['hatte', 'hat', 'hatten', 'war'], answer: 0 },
      { type: 'choice', question: 'Das Konzert _____ fantastisch! (sein, es)', options: ['war', 'ist', 'hatte', 'waren'], answer: 0 },
      { type: 'fill', question: 'Ich _____ nicht schlafen. (können, ich, Präteritum)', answer: 'konnte', placeholder: 'konn...' },
    ],
  },

  'reflexive-verbs': {
    title: 'Возвратные глаголы (sich)',
    level: 'A2 · Грамматика · Die Gelbe Kap. 18',
    intro: 'Возвратные глаголы — это глаголы с местоимением sich. В немецком их гораздо больше, чем в русском, и многие НЕ переводятся как возвратные!',
    theory: [
      {
        heading: '🔄 Возвратные местоимения',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Лицо</th><th>Akkusativ</th><th>Dativ</th></tr>
            <tr><td>ich</td><td>mich</td><td>mir</td></tr>
            <tr><td>du</td><td>dich</td><td>dir</td></tr>
            <tr><td>er/sie/es</td><td>sich</td><td>sich</td></tr>
            <tr><td>wir</td><td>uns</td><td>uns</td></tr>
            <tr><td>ihr</td><td>euch</td><td>euch</td></tr>
            <tr><td>sie/Sie</td><td>sich</td><td>sich</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">Ich wasche <b>mich</b>. — Я моюсь. (Akk.)</div>
            <div class="ru">Ich wasche <b>mir</b> die Hände. — Я мою руки. (Dat. — когда есть дополнение)</div>
          </div>
        `
      },
      {
        heading: '📋 Важные возвратные глаголы',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Глагол</th><th>Перевод</th></tr>
            <tr><td>sich waschen</td><td>мыться</td></tr>
            <tr><td>sich anziehen</td><td>одеваться</td></tr>
            <tr><td>sich freuen (über / auf)</td><td>радоваться (чему-то / предвкушать)</td></tr>
            <tr><td>sich interessieren für</td><td>интересоваться</td></tr>
            <tr><td>sich erinnern an</td><td>вспоминать</td></tr>
            <tr><td>sich vorstellen</td><td>представляться / представлять себе</td></tr>
            <tr><td>sich fühlen</td><td>чувствовать себя</td></tr>
            <tr><td>sich vorbereiten auf</td><td>готовиться к чему-то</td></tr>
            <tr><td>sich bewerben um</td><td>подавать заявку на</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">Ich interessiere <b>mich</b> für Musik. — Я интересуюсь музыкой.</div>
            <div class="ru">Sie freut <b>sich</b> auf das Studium in Wien. — Она с нетерпением ждёт учёбы в Вене.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Ich freue _____ auf den Urlaub.', options: ['mich', 'mir', 'sich', 'dich'], answer: 0 },
      { type: 'fill', question: 'Er interessiert _____ für Sport. (sich, er)', answer: 'sich', placeholder: 'si...' },
      { type: 'choice', question: 'Wie fühlst du _____?', options: ['dich', 'mich', 'sich', 'uns'], answer: 0 },
      { type: 'choice', question: 'Wir bereiten _____ auf die Prüfung vor.', options: ['uns', 'sich', 'mich', 'euch'], answer: 0 },
      { type: 'fill', question: 'Sie bewirbt _____ um einen Studienplatz. (sich, sie)', answer: 'sich', placeholder: 'si...' },
    ],
  },

  relativsatz: {
    title: 'Относительные предложения (Relativsatz)',
    level: 'B1 · Грамматика · Die Gelbe Kap. 27',
    intro: 'Relativsatz — предложение, которое уточняет существительное. Начинается с относительного местоимения (der/die/das/deren...) и глагол идёт в конец.',
    theory: [
      {
        heading: '🔗 Относительные местоимения',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Падеж</th><th>m</th><th>f</th><th>n</th><th>pl</th></tr>
            <tr><td>Nominativ</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
            <tr><td>Akkusativ</td><td>den</td><td>die</td><td>das</td><td>die</td></tr>
            <tr><td>Dativ</td><td>dem</td><td>der</td><td>dem</td><td>denen</td></tr>
            <tr><td>Genitiv</td><td>dessen</td><td>deren</td><td>dessen</td><td>deren</td></tr>
          </table></div>
          <p>💡 Падеж определяется ролью местоимения <b>внутри</b> относительного предложения!</p>
          <div class="example-box">
            <div class="de">Der Mann, <b>der</b> dort steht, heißt Müller. (Nom. — он стоит)</div>
            <div class="ru">Мужчина, который стоит там, зовётся Мюллер.</div>
          </div>
          <div class="example-box">
            <div class="de">Die Frau, <b>die</b> ich kenne, kommt aus Wien. (Akk. — я её знаю)</div>
            <div class="ru">Женщина, которую я знаю, из Вены.</div>
          </div>
          <div class="example-box">
            <div class="de">Das Studium, <b>das</b> mich interessiert, ist Medizin. (Nom.)</div>
            <div class="ru">Специальность, которая меня интересует — медицина.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Der Student, _____ aus Wien kommt, spricht perfekt Deutsch. (Nom., m)', options: ['der', 'die', 'das', 'den'], answer: 0 },
      { type: 'choice', question: 'Die Universität, _____ ich besuchen möchte, ist sehr bekannt. (Akk., f)', options: ['die', 'der', 'das', 'den'], answer: 0 },
      { type: 'fill', question: 'Das Buch, _____ ich lese, ist interessant. (Akk., n)', answer: 'das', placeholder: 'd...' },
      { type: 'choice', question: 'Der Mann, _____ ich helfe, ist krank. (Dativ, m)', options: ['dem', 'der', 'den', 'die'], answer: 0 },
      { type: 'choice', question: 'Die Studentin, _____ Tasche ich gefunden habe, heißt Margo. (Genitiv, f)', options: ['deren', 'dessen', 'die', 'der'], answer: 0 },
    ],
  },

  passiv: {
    title: 'Пассивный залог (Passiv)',
    level: 'B1 · Грамматика · Die Gelbe Kap. 19',
    intro: 'Passiv используется когда важно ЧТО происходит, а не КТО это делает. Широко применяется в официальных текстах, научных статьях и при поступлении в австрийский вуз.',
    theory: [
      {
        heading: '🔄 Образование Passiv',
        content: `
          <p>Passiv = форма глагола <b>werden</b> + <b>Partizip II</b></p>
          <div class="table-wrap"><table>
            <tr><th>Время</th><th>Формула</th><th>Пример</th></tr>
            <tr><td>Präsens</td><td>wird + Partizip II</td><td>Das Buch <b>wird gelesen</b>.</td></tr>
            <tr><td>Präteritum</td><td>wurde + Partizip II</td><td>Das Buch <b>wurde gelesen</b>.</td></tr>
            <tr><td>Perfekt</td><td>ist + Partizip II + worden</td><td>Das Buch <b>ist gelesen worden</b>.</td></tr>
          </table></div>
          <div class="example-box">
            <div class="de">Aktiv: Die Studentin schreibt den Brief. — Студентка пишет письмо.</div>
            <div class="ru">Passiv: Der Brief <b>wird</b> (von der Studentin) <b>geschrieben</b>. — Письмо пишется (студенткой).</div>
          </div>
          <div class="example-box">
            <div class="de">Die Unterlagen <b>werden</b> bis 15. März <b>eingereicht</b>. — Документы подаются до 15 марта.</div>
            <div class="ru">In Deutschland <b>wird</b> viel Kaffee <b>getrunken</b>. — В Германии много пьют кофе.</div>
          </div>
        `
      },
      {
        heading: '📌 Passiv с Modalverben',
        content: `
          <p>Модальный + werden + Partizip II:</p>
          <div class="example-box">
            <div class="de">Der Antrag <b>muss ausgefüllt werden</b>. — Заявление должно быть заполнено.</div>
            <div class="ru">Die Prüfung <b>kann verschoben werden</b>. — Экзамен может быть перенесён.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Das Formular _____ ausgefüllt. (Passiv Präsens, ausfüllen)', options: ['wird', 'ist', 'hat', 'war'], answer: 0 },
      { type: 'fill', question: 'Der Brief _____ gestern _____. (schreiben, Passiv Präteritum)', answer: 'wurde … geschrieben', placeholder: 'wur...' },
      { type: 'choice', question: 'Hier _____ Deutsch gesprochen. (Passiv Präsens)', options: ['wird', 'werden', 'wurde', 'ist'], answer: 0 },
      { type: 'choice', question: 'Die Aufgabe muss _____ werden. (machen → Partizip II)', options: ['gemacht', 'machen', 'machte', 'macht'], answer: 0 },
      { type: 'choice', question: 'Das Haus _____ 1900 gebaut worden. (Passiv Perfekt)', options: ['ist', 'wird', 'wurde', 'hat'], answer: 0 },
    ],
  },

  possessivpron: {
    title: 'Притяжательные местоимения в падежах',
    level: 'A2 · Грамматика · Die Gelbe Kap. 17',
    intro: 'mein, dein, sein, ihr, unser, euer, ihr/Ihr — в немецком они изменяются по падежам как неопределённый артикль ein/eine.',
    theory: [
      {
        heading: '📐 Склонение — на примере mein',
        content: `
          <div class="table-wrap"><table>
            <tr><th>Падеж</th><th>m</th><th>f</th><th>n</th><th>pl</th></tr>
            <tr><td>Nom.</td><td>mein Bruder</td><td>meine Schwester</td><td>mein Kind</td><td>meine Eltern</td></tr>
            <tr><td>Akk.</td><td>meinen Bruder</td><td>meine Schwester</td><td>mein Kind</td><td>meine Eltern</td></tr>
            <tr><td>Dat.</td><td>meinem Bruder</td><td>meiner Schwester</td><td>meinem Kind</td><td>meinen Eltern</td></tr>
            <tr><td>Gen.</td><td>meines Bruders</td><td>meiner Schwester</td><td>meines Kindes</td><td>meiner Eltern</td></tr>
          </table></div>
          <p>💡 Все остальные (dein, sein, ihr, unser, euer, ihr) склоняются по той же таблице — просто меняй первые буквы!</p>
          <div class="example-box">
            <div class="de">Ich liebe <b>meinen</b> Hund. (Akk., m) — Я люблю свою собаку.</div>
            <div class="ru">Sie hilft <b>ihrer</b> Mutter. (Dat., f) — Она помогает своей маме.</div>
          </div>
        `
      }
    ],
    exercises: [
      { type: 'choice', question: 'Ich liebe _____ Hund. (mein, Akk., m)', options: ['meinen', 'mein', 'meiner', 'meinem'], answer: 0 },
      { type: 'choice', question: 'Er fährt mit _____ Auto. (sein, Dat., n)', options: ['seinem', 'sein', 'seiner', 'seinen'], answer: 0 },
      { type: 'fill', question: 'Sie schreibt _____ Mutter einen Brief. (ihr, Dat., f)', answer: 'ihrer', placeholder: 'ihr...' },
      { type: 'choice', question: 'Das ist das Haus _____ Eltern. (mein, Gen., pl)', options: ['meiner', 'meinem', 'meinen', 'meine'], answer: 0 },
      { type: 'choice', question: 'Wir besuchen _____ Freunde. (unser, Akk., pl)', options: ['unsere', 'unser', 'unserem', 'unserer'], answer: 0 },
    ],
  },

};
