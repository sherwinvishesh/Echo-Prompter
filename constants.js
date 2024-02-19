
const DEFAULT_TEXT_EN = `Wikipedia (abbreviated as WP) is a multilingual online encyclopedia. The website
was created and is maintained as an open collaboration project by a community of volunteer
editors, using a wiki-based editing system. It is the largest and most popular general reference
work on the World Wide Web. It is also one of the 20 most popular websites ranked by Alexa, as
of March 2020. It features exclusively free content and no commercial ads and is owned and
supported by the Wikimedia Foundation, a non-profit organization funded primarily through
donations.

Wikipedia was launched on January 15, 2001, and was created by Jimmy Wales and Larry Sanger.
Sanger coined its name as a portmanteau of the words "wiki" (Hawaiian for "quick") and
"encyclopedia". Initially an English-language encyclopedia, versions of Wikipedia in other
languages were quickly developed. With 6.1 million articles, the English Wikipedia is the
largest of the more than 300 Wikipedia encyclopedias. Overall, Wikipedia comprises more than
53 million articles attracting 1.5 billion unique visitors per month.

In 2005, Nature published a peer review comparing 42 hard science articles from Encyclopædia
Britannica and Wikipedia and found that Wikipedia's level of accuracy approached that of
Britannica, although critics suggested that it might not have fared so well in a similar study
of a random sampling of all articles or one focused on social science or contentious social
issues. The following year, Time magazine stated that the open-door policy of allowing anyone to
edit had made Wikipedia the biggest and possibly the best encyclopedia in the world, and was a
testament to the vision of Jimmy Wales.`.replace(/([^\r\n])\r?\n([^\r\n])/gm, '$1 $2');

const DEFAULT_TEXT_DE = `Deutschland ist ein Bundesstaat in Mitteleuropa. Er besteht seit 1990 aus
16 Ländern und ist als freiheitlich-demokratischer und sozialer Rechtsstaat verfasst. Die
Bundesrepublik Deutschland stellt die jüngste Ausprägung des deutschen Nationalstaates dar.
Deutschland hat 83 Millionen Einwohner und zählt mit durchschnittlich 232 Einwohnern pro
Quadratkilometer zu den dicht besiedelten Flächenstaaten.

An Deutschland grenzen neun Staaten, es hat Anteil an der Nord- und Ostsee im Norden sowie dem
Bodensee und den Alpen im Süden. Es liegt in der gemäßigten Klimazone und verfügt über sechzehn
National- und über hundert Naturparks. Bundeshauptstadt sowie bevölkerungsreichste deutsche Stadt
ist Berlin. Weitere Metropolen mit mehr als einer Million Einwohnern sind Hamburg, München und Köln,
der größte Ballungsraum ist das Ruhrgebiet, Frankfurt am Main ist als deutsches Finanzzentrum
international von Bedeutung. Deutschlands Bevölkerung hat mit 1,57 Kindern pro Frau (2018) eine
vergleichsweise niedrige Geburtenrate, die jedoch in den 2010er-Jahren leicht anstieg.

Auf dem Gebiet des heutigen Deutschlands ist die Anwesenheit von Menschen vor 500.000 Jahren durch
Funde des Homo heidelbergensis, des Neandertalers sowie einiger der ältesten Kunstwerke der
Menschheit aus der späteren Altsteinzeit nachgewiesen. Um 5600 v. Chr. wanderten die ersten Bauern
mitsamt Vieh und Saatgut aus dem Nahen Osten ein. Seit der Antike ist die lateinische Bezeichnung
Germania für das Siedlungsgebiet der Germanen bekannt. Das ab dem 10. Jahrhundert bestehende Heilige
Römische Reich, das aus vielen Herrschaftsgebieten bestand, war wie der 1815 ins Leben gerufene
Deutsche Bund ein Vorläufer des späteren deutschen Nationalstaates.`.replace(/([^\r\n])\r?\n([^\r\n])/gm, '$1 $2');

const DEFAULT_TEXT_FR = `L’escalade, ou grimpe, parfois appelée varappe (désuet), est une pratique
et un sport consistant à progresser le long d'une paroi pour atteindre le haut d'un relief ou d'une
structure artificielle par un cheminement appelé voie, avec ou sans aide de matériel. Le terrain de
pratique va des blocs de faible hauteur aux parois de plusieurs centaines de mètres, en passant par
les murs d'escalade. Le pratiquant est couramment appelé « grimpeur ».

L'escalade développe de nombreuses qualités physiques, comme la force musculaire, la souplesse,
l'endurance musculaire, l'équilibre, de bonnes capacités psychomotrices et de planification. Elle
sollicite particulièrement la musculature des bras, du tronc et des jambes.

Cette discipline se développe progressivement en tant que sport à part entière dès la fin du xixe
siècle dans la ruée des premiers alpinistes vers les grands sommets, avant de se démocratiser au
siècle suivant, devenant populaire dès la fin des années 1970. Les premières compétitions
officielles sont organisées en 1988 par l'Union internationale des associations d'alpinisme (UIAA).
Chaque année est organisée une Coupe du monde de difficulté, de bloc et de vitesse, et tous les deux
ans des championnats du monde, l'ensemble étant supervisé par la Fédération internationale
d'escalade (IFSC).`.replace(/([^\r\n])\r?\n([^\r\n])/gm, '$1 $2');

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
