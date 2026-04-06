import {
  SvgMarch, SvgApril, SvgMay,
  SvgJune, SvgJuly, SvgAugust,
  SvgSeptember, SvgOctober, SvgNovember,
  SvgDecember, SvgJanuary, SvgFebruary,
} from './inquirySVGs'

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
        en: { name: 'March', desc: 'Exploring friendship, warmth and creativity as we chase away the winter blues with art, stories and cosy crafts.' },
        de: { name: 'März', desc: 'Freundschaft, Wärme und Kreativität — wir vertreiben den Winter mit Kunst, Geschichten und gemütlichem Basteln.' },
        el: { name: 'Μάρτιος', desc: 'Εξερευνούμε τη φιλία, τη ζεστασιά και τη δημιουργικότητα μέσα από τέχνη, ιστορίες και ζεστές κατασκευές.' },
      },
      {
        svgComponent: SvgApril,
        en: { name: 'April', desc: 'Welcoming spring! We discover budding plants, baby animals and the magic of new beginnings in nature.' },
        de: { name: 'April', desc: 'Frühling willkommen! Wir entdecken sprießende Pflanzen, Jungtiere und die Magie des Neubeginns in der Natur.' },
        el: { name: 'Απρίλιος', desc: 'Καλωσορίζουμε την άνοιξη! Ανακαλύπτουμε φυτά, μωρά ζώα και τη μαγεία της νέας αρχής στη φύση.' },
      },
      {
        svgComponent: SvgMay,
        en: { name: 'May', desc: 'Blossom time! We explore flowers, insects and the beauty of spring through sensory play and garden adventures.' },
        de: { name: 'Mai', desc: 'Blütezeit! Wir erkunden Blumen, Insekten und die Schönheit des Frühlings durch Sinnesspiele und Gartenausflüge.' },
        el: { name: 'Μάιος', desc: 'Ώρα ανθοφορίας! Εξερευνούμε λουλούδια, έντομα και την ομορφιά της άνοιξης μέσα από αισθητηριακά παιχνίδια.' },
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
        en: { name: 'June', desc: 'Sunshine and growth — we learn about plants, gardening and the wonderful world coming alive all around us.' },
        de: { name: 'Juni', desc: 'Sonnenschein und Wachstum — wir lernen über Pflanzen, Gärtnern und die wunderbare Welt, die um uns herum erwacht.' },
        el: { name: 'Ιούνιος', desc: 'Ήλιος και ανάπτυξη — μαθαίνουμε για φυτά, κηπουρική και τον υπέροχο κόσμο που ξυπνάει γύρω μας.' },
      },
      {
        svgComponent: SvgJuly,
        en: { name: 'July', desc: 'Summer is here! Water play, sunshine science and celebrating all the amazing things we have learned together.' },
        de: { name: 'Juli', desc: 'Sommer ist da! Wasserspiele, Sonnenwissenschaft und Feiern all der tollen Dinge, die wir gemeinsam gelernt haben.' },
        el: { name: 'Ιούλιος', desc: 'Ήρθε το καλοκαίρι! Παιχνίδια με νερό, επιστήμη του ήλιου και γιορτή όλων όσων μάθαμε μαζί.' },
      },
      {
        svgComponent: SvgAugust,
        en: { name: 'August', desc: 'Beach adventures, travel stories and exploring the wonderful world around us — from deserts to oceans.' },
        de: { name: 'August', desc: 'Strandabenteuer, Reisegeschichten und die wunderbare Welt um uns herum erkunden — von Wüsten bis Ozeanen.' },
        el: { name: 'Αύγουστος', desc: 'Παραλιακές περιπέτειες, ταξιδιωτικές ιστορίες και εξερεύνηση του υπέροχου κόσμου — από ερήμους ως ωκεανούς.' },
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
        en: { name: 'September', desc: 'Back to school energy! New themes, new friendships and the first whispers of autumn leaves in the breeze.' },
        de: { name: 'September', desc: 'Schulstart-Energie! Neue Themen, neue Freundschaften und das erste Rauschen der Herbstblätter im Wind.' },
        el: { name: 'Σεπτέμβριος', desc: 'Ενέργεια επιστροφής στο σχολείο! Νέα θέματα, νέες φιλίες και οι πρώτες ψιθύρους του φθινοπώρου.' },
      },
      {
        svgComponent: SvgOctober,
        en: { name: 'October', desc: 'Autumn leaves, harvest time and the mystery of how things change, transform and prepare for a new season.' },
        de: { name: 'Oktober', desc: 'Herbstblätter, Erntezeit und das Geheimnis, wie sich Dinge verändern und auf eine neue Saison vorbereiten.' },
        el: { name: 'Οκτώβριος', desc: 'Φθινοπωρινά φύλλα, εποχή συγκομιδής και το μυστήριο του πώς αλλάζουν τα πράγματα και ετοιμάζονται για νέα εποχή.' },
      },
      {
        svgComponent: SvgNovember,
        en: { name: 'November', desc: 'Gratitude and giving — we explore animals preparing for winter and learn about thankfulness and kindness.' },
        de: { name: 'November', desc: 'Dankbarkeit und Schenken — wir erkunden Tiere, die sich auf den Winter vorbereiten, und lernen Dankbarkeit kennen.' },
        el: { name: 'Νοέμβριος', desc: 'Ευγνωμοσύνη και δωρεά — εξερευνούμε ζώα που ετοιμάζονται για τον χειμώνα και μαθαίνουμε για την ευγνωμοσύνη.' },
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
        en: { name: 'December', desc: 'Stars, lights and celebration — we discover winter festivities from cultures around the world, full of wonder and joy.' },
        de: { name: 'Dezember', desc: 'Sterne, Lichter und Feierlichkeiten — wir entdecken Winterfeste aus Kulturen weltweit, voller Staunen und Freude.' },
        el: { name: 'Δεκέμβριος', desc: 'Αστέρια, φώτα και γιορτή — ανακαλύπτουμε χειμερινές γιορτές από πολιτισμούς σε όλο τον κόσμο, γεμάτες θαύμα.' },
      },
      {
        svgComponent: SvgJanuary,
        en: { name: 'January', desc: 'A brand new year! We embrace the cold, discover the wonders of snow and ice, and set new goals together.' },
        de: { name: 'Januar', desc: 'Ein brandneues Jahr! Wir umarmen die Kälte, entdecken die Wunder von Schnee und Eis und setzen neue Ziele.' },
        el: { name: 'Ιανουάριος', desc: 'Ένα ολοκαίνουργιο έτος! Αγκαλιάζουμε το κρύο, ανακαλύπτουμε τα θαύματα του χιονιού και βάζουμε νέους στόχους.' },
      },
      {
        svgComponent: SvgFebruary,
        en: { name: 'February', desc: 'Exploring friendship, warmth and love — we celebrate togetherness with art, stories and heartfelt crafts.' },
        de: { name: 'Februar', desc: 'Freundschaft, Wärme und Liebe — wir feiern das Miteinander mit Kunst, Geschichten und herzlichen Bastelprojekten.' },
        el: { name: 'Φεβρουάριος', desc: 'Εξερευνούμε τη φιλία, τη ζεστασιά και την αγάπη — γιορτάζουμε τη συντροφικότητα με τέχνη και δημιουργικές κατασκευές.' },
      },
    ],
  },
]
