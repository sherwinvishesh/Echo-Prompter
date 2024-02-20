
const DEFAULT_TEXT_EN = `Hi, this is Tony Stark, and this application is called Echo-Prompt. Picture this: you're gearing up for a high-stakes presentation—maybe unveiling the latest Stark Industries innovation or addressing the United Nations. What you need is not just any teleprompter; you need Echo-Prompt, the future of seamless presentation technology, designed for the modern speaker who demands perfection.

In the heart of my workshop, amidst suits of armor and groundbreaking tech, I've seen the power of effective communication. That's where Echo-Prompt shines. Utilizing cutting-edge WebSpeech API, it offers real-time speech recognition, allowing you to control your presentation flow with just your voice. Imagine standing on stage, captivating your audience, with the freedom to navigate your script effortlessly—no clickers, no distractions, just you and your words in perfect harmony.

But Echo-Prompt isn't just about voice activation. It's about customization that fits your unique style. Whether you're presenting in a dimly lit room or under the bright lights of a press conference, Echo-Prompt lets you adjust text size, font, and colors for optimal readability. And for those who appreciate the finer details, it offers features like vertical and horizontal mirroring, ensuring your presentation looks as good from the back with a reflective teleprompter as it does from the front.

Developed with the same principle I apply to all my creations—making the impossible possible—Echo-Prompt is here to revolutionize the way we communicate. Whether you're a CEO, a world leader, or a superhero, it's designed to ensure your message isn't just heard, but felt. So, suit up, and let Echo-Prompt take your presentations to new heights.`.replace(/([^\r\n])\r?\n([^\r\n])/gm, '$1 $2');

const DEFAULT_TEXT_DE = `Hallo, ich bin Tony Stark, und diese Anwendung heißt Echo-Prompt. Stell dir vor: Du bereitest dich auf eine Präsentation von höchster Wichtigkeit vor – vielleicht die Enthüllung der neuesten Innovation von Stark Industries oder eine Ansprache bei den Vereinten Nationen. Was du brauchst, ist nicht irgendein Teleprompter; du brauchst Echo-Prompt, die Zukunft nahtloser Präsentationstechnologie, entworfen für den modernen Redner, der Perfektion verlangt.

Im Herzen meiner Werkstatt, umgeben von Rüstungen und bahnbrechender Technik, habe ich die Macht effektiver Kommunikation gesehen. Dort glänzt Echo-Prompt. Mit der Nutzung der modernsten WebSpeech API bietet es Echtzeit-Spracherkennung, die es dir erlaubt, den Fluss deiner Präsentation allein mit deiner Stimme zu steuern. Stell dir vor, du stehst auf der Bühne, fesselst dein Publikum, mit der Freiheit, dein Skript mühelos zu navigieren – keine Klicker, keine Ablenkungen, nur du und deine Worte in perfekter Harmonie.

Aber Echo-Prompt geht nicht nur um Sprachaktivierung. Es geht um Anpassung, die deinem einzigartigen Stil entspricht. Ob du in einem schlecht beleuchteten Raum präsentierst oder unter den hellen Lichtern einer Pressekonferenz, Echo-Prompt lässt dich Textgröße, Schriftart und Farben für optimale Lesbarkeit anpassen. Und für diejenigen, die Augen für Details haben, bietet es Funktionen wie vertikale und horizontale Spiegelung, sicherstellend, dass deine Präsentation von hinten mit einem reflektierenden Teleprompter genauso gut aussieht wie von vorn.

Mit demselben Prinzip entwickelt, das ich auf all meine Kreationen anwende – das Unmögliche möglich zu machen –, ist Echo-Prompt hier, um die Art und Weise, wie wir kommunizieren, zu revolutionieren. Egal, ob du CEO, Weltführer oder Superheld bist, es ist entworfen, um sicherzustellen, dass deine Botschaft nicht nur gehört, sondern gefühlt wird. Also, rüste dich aus, und lass Echo-Prompt deine Präsentationen zu neuen Höhen führen.`.replace(/([^\r\n])\r?\n([^\r\n])/gm, '$1 $2');

const DEFAULT_TEXT_FR = `Salut, je suis Tony Stark, et cette application s'appelle Echo-Prompt. Imaginez ceci : vous vous préparez pour une présentation de haute importance—peut-être en dévoilant la dernière innovation de Stark Industries ou en adressant les Nations Unies. Ce dont vous avez besoin, ce n'est pas juste n'importe quel téléprompteur ; vous avez besoin d'Echo-Prompt, l'avenir de la technologie de présentation sans faille, conçu pour l'orateur moderne qui exige la perfection.

Au cœur de mon atelier, parmi des armures et des technologies révolutionnaires, j'ai vu le pouvoir de la communication efficace. C'est là qu'Echo-Prompt brille. Utilisant l'API WebSpeech de pointe, il offre une reconnaissance vocale en temps réel, vous permettant de contrôler le flux de votre présentation avec juste votre voix. Imaginez-vous sur scène, captivant votre audience, avec la liberté de naviguer dans votre script sans effort—pas de cliqueteurs, pas de distractions, juste vous et vos mots en parfaite harmonie.

Mais Echo-Prompt n'est pas seulement à propos de l'activation vocale. Il s'agit de la personnalisation qui s'adapte à votre style unique. Que vous présentiez dans une salle faiblement éclairée ou sous les projecteurs d'une conférence de presse, Echo-Prompt vous permet d'ajuster la taille du texte, la vitesse de défilement et plus encore pour convenir à votre style de présentation. Et pour ceux qui apprécient les détails fins, il offre des fonctionnalités telles que le miroir vertical ou horizontal, assurant que votre présentation semble aussi bonne de l'arrière avec un téléprompteur réfléchissant qu'elle ne le fait de l'avant.

Développé avec le même principe que j'applique à toutes mes créations—rendre l'impossible possible—Echo-Prompt est ici pour révolutionner la manière dont nous communiquons. Que vous soyez PDG, leader mondial ou super-héros, il est conçu pour s'assurer que votre message n'est pas seulement entendu, mais ressenti. Alors, équipez-vous et laissez Echo-Prompt emmener vos présentations vers de nouveaux sommets.`.replace(/([^\r\n])\r?\n([^\r\n])/gm, '$1 $2');

const LANGUAGE_VALUES =
  [ ['Afrikaans',       ['af-ZA']],
    ['አማርኛ',           ['am-ET']],
    ['Azərbaycanca',    ['az-AZ']],
    ['বাংলা',            ['bn-BD', 'বাংলাদেশ'],
                        ['bn-IN', 'ভারত']],
    ['Bahasa Indonesia',['id-ID']],
    ['Bahasa Melayu',   ['ms-MY']],
    ['Català',          ['ca-ES']],
    ['Čeština',         ['cs-CZ']],
    ['Dansk',           ['da-DK']],
    ['Deutsch',         ['de-DE']],
    ['English',         ['en-AU', 'Australia'],
                        ['en-CA', 'Canada'],
                        ['en-IN', 'India'],
                        ['en-KE', 'Kenya'],
                        ['en-TZ', 'Tanzania'],
                        ['en-GH', 'Ghana'],
                        ['en-NZ', 'New Zealand'],
                        ['en-NG', 'Nigeria'],
                        ['en-ZA', 'South Africa'],
                        ['en-PH', 'Philippines'],
                        ['en-GB', 'United Kingdom'],
                        ['en-US', 'United States']],
    ['Español',         ['es-AR', 'Argentina'],
                        ['es-BO', 'Bolivia'],
                        ['es-CL', 'Chile'],
                        ['es-CO', 'Colombia'],
                        ['es-CR', 'Costa Rica'],
                        ['es-EC', 'Ecuador'],
                        ['es-SV', 'El Salvador'],
                        ['es-ES', 'España'],
                        ['es-US', 'Estados Unidos'],
                        ['es-GT', 'Guatemala'],
                        ['es-HN', 'Honduras'],
                        ['es-MX', 'México'],
                        ['es-NI', 'Nicaragua'],
                        ['es-PA', 'Panamá'],
                        ['es-PY', 'Paraguay'],
                        ['es-PE', 'Perú'],
                        ['es-PR', 'Puerto Rico'],
                        ['es-DO', 'República Dominicana'],
                        ['es-UY', 'Uruguay'],
                        ['es-VE', 'Venezuela']],
    ['Euskara',         ['eu-ES']],
    ['Filipino',        ['fil-PH']],
    ['Français',        ['fr-FR']],
    ['Basa Jawa',       ['jv-ID']],
    ['Galego',          ['gl-ES']],
    ['ગુજરાતી',           ['gu-IN']],
    ['Hrvatski',        ['hr-HR']],
    ['IsiZulu',         ['zu-ZA']],
    ['Íslenska',        ['is-IS']],
    ['Italiano',        ['it-IT', 'Italia'],
                        ['it-CH', 'Svizzera']],
    ['ಕನ್ನಡ',           ['kn-IN']],
    ['ភាសាខ្មែរ',          ['km-KH']],
    ['Latviešu',        ['lv-LV']],
    ['Lietuvių',        ['lt-LT']],
    ['മലയാളം',        ['ml-IN']],
    ['मराठी',            ['mr-IN']],
    ['Magyar',          ['hu-HU']],
    ['ລາວ',             ['lo-LA']],
    ['Nederlands',      ['nl-NL']],
    ['नेपाली भाषा',        ['ne-NP']],
    ['Norsk bokmål',    ['nb-NO']],
    ['Polski',          ['pl-PL']],
    ['Português',       ['pt-BR', 'Brasil'],
                        ['pt-PT', 'Portugal']],
    ['Română',          ['ro-RO']],
    ['සිංහල',           ['si-LK']],
    ['Slovenščina',     ['sl-SI']],
    ['Basa Sunda',      ['su-ID']],
    ['Slovenčina',      ['sk-SK']],
    ['Suomi',           ['fi-FI']],
    ['Svenska',         ['sv-SE']],
    ['Kiswahili',       ['sw-TZ', 'Tanzania'],
                        ['sw-KE', 'Kenya']],
    ['ಕನ್ನಡ',           ['ka-IN']],                    
    ['ქართული',        ['ka-GE']],
    ['Հայերեն',          ['hy-AM']],
    ['தமிழ்',           ['ta-IN', 'இந்தியா'],
                        ['ta-SG', 'சிங்கப்பூர்'],
                        ['ta-LK', 'இலங்கை'],
                        ['ta-MY', 'மலேசியா']],
    ['తెలుగు',           ['te-IN']],
    ['Tiếng Việt',      ['vi-VN']],
    ['Türkçe',          ['tr-TR']],
    ['اُردُو',              ['ur-PK', 'پاکستان'],
                        ['ur-IN', 'بھارت']],
    ['Ελληνικά',        ['el-GR']],
    ['български',       ['bg-BG']],
    ['Pусский',         ['ru-RU']],
    ['Српски',          ['sr-RS']],
    ['Українська',      ['uk-UA']],
    ['한국어',           ['ko-KR']],
    ['中文',             ['cmn-Hans-CN', '普通话 (中国大陆)'],
                        ['cmn-Hans-HK', '普通话 (香港)'],
                        ['cmn-Hant-TW', '中文 (台灣)'],
                        ['yue-Hant-HK', '粵語 (香港)']],
    ['日本語',           ['ja-JP']],
    ['हिन्दी',             ['hi-IN']],
    ['ภาษาไทย',         ['th-TH']]];
