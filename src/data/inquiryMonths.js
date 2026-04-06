import {
  SvgMarch, SvgApril, SvgMay,
  SvgJune, SvgJuly, SvgAugust,
  SvgSeptember, SvgOctober, SvgNovember,
  SvgDecember, SvgJanuary, SvgFebruary,
} from './inquirySVGs'

/**
 * Each month: same structure — `theme` = unit of inquiry title, `desc` = what we explore.
 * Keep `name` as the calendar month (used on the card front + photo key via English name).
 */
export const inquirySeasons = [
  {
    key: 'spring',
    color: '#388E3C',
    lightBg: '#F1F8E9',
    badgeColor: '#66BB6A',
    en: 'Spring', de: 'Frühling', el: 'Άνοιξη',
    months: [
      {
        svgComponent: SvgMarch,
        en: {
          name: 'March',
          theme: 'Spring awakening',
          desc: 'We explore friendship, creative expression, changing weather and the first signs of new life through art, stories and hands-on play.',
        },
        de: {
          name: 'März',
          theme: 'Frühlingserwachen',
          desc: 'Wir erkunden Freundschaft, kreativen Ausdruck, wechselndes Wetter und die ersten Zeichen neuen Lebens durch Kunst, Geschichten und praktisches Spiel.',
        },
        el: {
          name: 'Μάρτιος',
          theme: 'Ξύπνημα της άνοιξης',
          desc: 'Εξερευνούμε φιλία, δημιουργική έκφραση, μεταβαλλόμενο καιρό και τα πρώτα σημάδια νέας ζωής μέσα από τέχνη, ιστορίες και παιχνίδι.',
        },
      },
      {
        svgComponent: SvgApril,
        en: {
          name: 'April',
          theme: 'New life in nature',
          desc: 'We explore budding plants, baby animals, growth cycles and the wonder of spring outdoors through observation, stories and discovery walks.',
        },
        de: {
          name: 'April',
          theme: 'Neues Leben in der Natur',
          desc: 'Wir erkunden sprießende Pflanzen, Jungtiere, Wachstumszyklen und das Staunen über den Frühling draußen durch Beobachten, Geschichten und Entdeckertouren.',
        },
        el: {
          name: 'Απρίλιος',
          theme: 'Νέα ζωή στη φύση',
          desc: 'Εξερευνούμε βλαστούς, μωρά ζώα, κύκλους ανάπτυξης και το θαύμα της άνοιξης μέσα από παρατήρηση, ιστορίες και βόλτες ανακάλυψης.',
        },
      },
      {
        svgComponent: SvgMay,
        en: {
          name: 'May',
          theme: 'Bloom and grow',
          desc: 'We explore flowers, insects, gardens and the beauty of spring through sensory play, planting and outdoor adventures.',
        },
        de: {
          name: 'Mai',
          theme: 'Blühen und wachsen',
          desc: 'Wir erkunden Blumen, Insekten, Gärten und die Schönheit des Frühlings durch Sinnesspiele, Pflanzen und Abenteuer draußen.',
        },
        el: {
          name: 'Μάιος',
          theme: 'Ανθίζω και μεγαλώνω',
          desc: 'Εξερευνούμε λουλούδια, έντομα, κήπους και την ομορφιά της άνοιξης μέσα από αισθητηριακά παιχνίδια, φύτευση και περιπέτειες έξω.',
        },
      },
    ],
  },
  {
    key: 'summer',
    color: '#F57F17',
    lightBg: '#FFFDE7',
    badgeColor: '#FFB300',
    en: 'Summer', de: 'Sommer', el: 'Καλοκαίρι',
    months: [
      {
        svgComponent: SvgJune,
        en: {
          name: 'June',
          theme: 'Sunshine and growth',
          desc: 'We explore plants, sunlight, gardening and how living things grow through planting, caring for our space and outdoor investigation.',
        },
        de: {
          name: 'Juni',
          theme: 'Sonnenschein und Wachstum',
          desc: 'Wir erkunden Pflanzen, Sonnenlicht, Gärtnern und wie Lebewesen wachsen durch Pflanzen, Pflege unseres Raums und Forschen draußen.',
        },
        el: {
          name: 'Ιούνιος',
          theme: 'Ήλιος και ανάπτυξη',
          desc: 'Εξερευνούμε φυτά, ηλιακό φως, κηπουρική και πώς μεγαλώνουν οι ζωντανοί οργανισμοί μέσα από φύτευση, φροντίδα και έρευνα έξω.',
        },
      },
      {
        svgComponent: SvgJuly,
        en: {
          name: 'July',
          theme: 'Summer discovery',
          desc: 'We explore water, heat, light and simple science ideas through safe water play, experiments and celebrating what we have learned together.',
        },
        de: {
          name: 'Juli',
          theme: 'Sommer-Entdeckung',
          desc: 'Wir erkunden Wasser, Wärme, Licht und einfache naturwissenschaftliche Ideen durch sicheres Wasserspiel, Experimente und gemeinsames Feiern des Gelernten.',
        },
        el: {
          name: 'Ιούλιος',
          theme: 'Καλοκαιρινή ανακάλυψη',
          desc: 'Εξερευνούμε νερό, ζέστη, φως και απλές επιστημονικές ιδέες μέσα από ασφαλή παιχνίδια με νερό, πειράματα και γιορτή όσων μάθαμε μαζί.',
        },
      },
      {
        svgComponent: SvgAugust,
        en: {
          name: 'August',
          theme: 'Our wide world',
          desc: 'We explore different places, journeys and environments — from neighbourhoods to faraway lands — through stories, maps and imaginative play.',
        },
        de: {
          name: 'August',
          theme: 'Unsere weite Welt',
          desc: 'Wir erkunden verschiedene Orte, Reisen und Umgebungen — von der Nachbarschaft bis zu fernen Ländern — durch Geschichten, Karten und fantasievolles Spiel.',
        },
        el: {
          name: 'Αύγουστος',
          theme: 'Ο ευρύς κόσμος μας',
          desc: 'Εξερευνούμε διαφορετικά μέρη, ταξίδια και περιβάλλοντα — από τη γειτονιά ως μακρινούς τόπους — μέσα από ιστορίες, χάρτες και παιχνίδι φαντασίας.',
        },
      },
    ],
  },
  {
    key: 'autumn',
    color: '#E64A19',
    lightBg: '#FBE9E7',
    badgeColor: '#FF7043',
    en: 'Autumn', de: 'Herbst', el: 'Φθινόπωρο',
    months: [
      {
        svgComponent: SvgSeptember,
        en: {
          name: 'September',
          theme: 'A new year together',
          desc: 'We explore routines, new friendships, autumn’s first signs and how we learn and care for one another in our group.',
        },
        de: {
          name: 'September',
          theme: 'Ein neues Jahr gemeinsam',
          desc: 'Wir erkunden Routinen, neue Freundschaften, erste Herbstzeichen und wie wir in der Gruppe lernen und füreinander sorgen.',
        },
        el: {
          name: 'Σεπτέμβριος',
          theme: 'Μια νέα χρονιά μαζί',
          desc: 'Εξερευνούμε ρουτίνες, νέες φιλίες, τα πρώτα σημάδια του φθινοπώρου και πώς μαθαίνουμε και φροντίζουμε ο ένας τον άλλον στην ομάδα.',
        },
      },
      {
        svgComponent: SvgOctober,
        en: {
          name: 'October',
          theme: 'Change and harvest',
          desc: 'We explore autumn leaves, harvest, how nature changes and how we prepare for winter through observation, stories and seasonal activities.',
        },
        de: {
          name: 'Oktober',
          theme: 'Wandel und Ernte',
          desc: 'Wir erkunden Herbstblätter, Ernte, wie sich die Natur verändert und wie wir uns auf den Winter vorbereiten durch Beobachten, Geschichten und saisonale Aktivitäten.',
        },
        el: {
          name: 'Οκτώβριος',
          theme: 'Αλλαγή και συγκομιδή',
          desc: 'Εξερευνούμε φθινοπωρινά φύλλα, τη συγκομιδή, πώς αλλάζει η φύση και πώς ετοιμαζόμαστε για τον χειμώνα μέσα από παρατήρηση, ιστορίες και δραστηριότητες.',
        },
      },
      {
        svgComponent: SvgNovember,
        en: {
          name: 'November',
          theme: 'Cooking and nutrition',
          desc: 'We explore healthy foods, simple recipes, kitchen safety and the joy of preparing and sharing meals together.',
        },
        de: {
          name: 'November',
          theme: 'Kochen und Ernährung',
          desc: 'Wir erkunden gesunde Lebensmittel, einfache Rezepte, Sicherheit in der Küche und die Freude am gemeinsamen Kochen und Essen.',
        },
        el: {
          name: 'Νοέμβριος',
          theme: 'Μαγειρική και διατροφή',
          desc: 'Εξερευνούμε υγιεινά τρόφιμα, απλές συνταγές, ασφάλεια στην κουζίνα και τη χαρά του να μαγειρεύουμε και τρώμε μαζί.',
        },
      },
    ],
  },
  {
    key: 'winter',
    color: '#1565C0',
    lightBg: '#E3F2FD',
    badgeColor: '#42A5F5',
    en: 'Winter', de: 'Winter', el: 'Χειμώνας',
    months: [
      {
        svgComponent: SvgDecember,
        en: {
          name: 'December',
          theme: 'Light and celebration',
          desc: 'We explore winter festivals, lights, traditions from different cultures and the joy of sharing stories and celebrations together.',
        },
        de: {
          name: 'Dezember',
          theme: 'Licht und Feier',
          desc: 'Wir erkunden Winterfeste, Lichter, Traditionen aus verschiedenen Kulturen und die Freude am gemeinsamen Erzählen und Feiern.',
        },
        el: {
          name: 'Δεκέμβριος',
          theme: 'Φως και γιορτή',
          desc: 'Εξερευνούμε χειμερινές γιορτές, φώτα, παραδόσεις από διαφορετικούς πολιτισμούς και τη χαρά του να μοιραζόμαστε ιστορίες και γιορτές μαζί.',
        },
      },
      {
        svgComponent: SvgJanuary,
        en: {
          name: 'January',
          theme: 'Winter wonders',
          desc: 'We explore cold weather, snow and ice, how animals adapt and how we set hopes and goals for the months ahead.',
        },
        de: {
          name: 'Januar',
          theme: 'Winterwunder',
          desc: 'Wir erkunden kaltes Wetter, Schnee und Eis, wie sich Tiere anpassen und wie wir Hoffnungen und Ziele für die kommenden Monate setzen.',
        },
        el: {
          name: 'Ιανουάριος',
          theme: 'Χειμερινά θαύματα',
          desc: 'Εξερευνούμε κρύο καιρό, χιόνι και πάγο, πώς προσαρμόζονται τα ζώα και πώς βάζουμε ελπίδες και στόχους για τους επόμενους μήνες.',
        },
      },
      {
        svgComponent: SvgFebruary,
        en: {
          name: 'February',
          theme: 'Love and belonging',
          desc: 'We explore kindness, empathy, family and community bonds through art, cooperative games and stories about caring for others.',
        },
        de: {
          name: 'Februar',
          theme: 'Liebe und Zugehörigkeit',
          desc: 'Wir erkunden Freundlichkeit, Einfühlungsvermögen, Familie und Gemeinschaft durch Kunst, kooperative Spiele und Geschichten über Fürsorge.',
        },
        el: {
          name: 'Φεβρουάριος',
          theme: 'Αγάπη και αίσθηση ανήκειν',
          desc: 'Εξερευνούμε καλοσύνη, ενσυναίσθηση, οικογένεια και δεσμούς κοινότητας μέσα από τέχνη, συνεργατικά παιχνίδια και ιστορίες φροντίδας.',
        },
      },
    ],
  },
]
