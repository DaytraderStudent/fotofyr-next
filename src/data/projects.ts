export interface Project {
  slug: string;
  title: string;
  kategori: string;
  kategoriSlug: string;
  date: string;
  location: string;
  description: string;
  longDescription: string;
  coverImage: string;
  images: { src: string; alt: string }[];
}

export const categories = [
  {
    slug: "bryllup",
    title: "Bryllup",
    description:
      "Ekte øyeblikk fra de viktigste dagene. Jeg fanger alt fra de stille forberedelsene til den ville dansegulvet.",
    coverImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
  },
  {
    slug: "portrett",
    title: "Portrett",
    description:
      "Ansikter som forteller historier. Naturlig lys, ærlige uttrykk og bilder du faktisk vil henge opp på veggen.",
    coverImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80",
  },
  {
    slug: "natur",
    title: "Natur",
    description:
      "Norsk natur i sitt rette element. Fjell, fjorder, nordlys og alt det imellom.",
    coverImage:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
  },
  {
    slug: "event",
    title: "Event",
    description:
      "Konferanser, konserter, lanseringer og feiringer. Stemningen, detaljene og menneskene.",
    coverImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
  },
];

export const projects: Project[] = [
  // Bryllup
  {
    slug: "marte-og-jonas-lofoten",
    title: "Marte & Jonas",
    kategori: "Bryllup",
    kategoriSlug: "bryllup",
    date: "August 2025",
    location: "Lofoten, Nordland",
    description: "Et intimt bryllup på en brygge i Reine med midnattssol.",
    longDescription:
      "Marte og Jonas valgte å feire kjærligheten sin på en gammel fiskebrygge i Reine. Med bare 40 gjester, midnattssol og fjellene som kulisse ble det en dag ingen av oss glemmer. Jeg fulgte dem fra de tidlige forberedelsene om morgenen til den siste dansen ved midnatt — da solen fortsatt hang lavt over horisonten.",
    coverImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    images: [
      { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80", alt: "Brudepar i solnedgang" },
      { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80", alt: "Seremoni utendørs" },
      { src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=1200&q=80", alt: "Første dans" },
      { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80", alt: "Brudebukett" },
      { src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=1200&q=80", alt: "Gjester på brygga" },
      { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=80", alt: "Detaljer fra bordet" },
    ],
  },
  {
    slug: "sara-og-henrik-oslo",
    title: "Sara & Henrik",
    kategori: "Bryllup",
    kategoriSlug: "bryllup",
    date: "Juni 2025",
    location: "Bygdøy, Oslo",
    description: "Sommerbryllup i en historisk hage med 120 gjester.",
    longDescription:
      "Sara og Henrik ønsket et klassisk sommerbryllup med en varm, uformell stemning. Den historiske hagen på Bygdøy ble pyntet med hundrevis av levende lys, og gjestene danset til levende musikk langt utover kvelden. Det var en dag full av latter, tårer og spontane øyeblikk.",
    coverImage:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
    images: [
      { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80", alt: "Seremoni i hagen" },
      { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80", alt: "Brudepar" },
      { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80", alt: "Blomsterdekorasjoner" },
      { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=80", alt: "Middagsbordet" },
    ],
  },
  {
    slug: "line-og-thomas-bergen",
    title: "Line & Thomas",
    kategori: "Bryllup",
    kategoriSlug: "bryllup",
    date: "September 2025",
    location: "Fløyen, Bergen",
    description: "Bryllup i regnet — som ble enda vakrere enn planlagt.",
    longDescription:
      "Da regnet kom på morgenen, var Line og Thomas bekymret. Men det ble noe av det vakreste jeg har fotografert. Tåken som la seg over Bergen, regndråpene på brudesløret, og den spontane dansen i regnet — alt ble magisk. Noen ganger er det uplanlagte det fineste.",
    coverImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=1200&q=80",
    images: [
      { src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=1200&q=80", alt: "Dans i regnet" },
      { src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=1200&q=80", alt: "Forberedelser" },
      { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80", alt: "Portrett av paret" },
    ],
  },
  // Portrett
  {
    slug: "emma-naturlig-lys",
    title: "Emma — Naturlig lys",
    kategori: "Portrett",
    kategoriSlug: "portrett",
    date: "Mars 2026",
    location: "Studio, Oslo",
    description: "En rolig portrettsesjon med vintersol gjennom store vinduer.",
    longDescription:
      "Emma ønsket portretter som var enkle og ekte. Vi brukte ettermiddagslyset som flommet inn gjennom studiovinduene, og lot øyeblikkene komme naturlig. Ingen posering, ingen rekvisitter — bare henne og lyset.",
    coverImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80",
    images: [
      { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80", alt: "Portrett i naturlig lys" },
      { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80", alt: "Kreativt portrett" },
      { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80", alt: "Nærbilde" },
    ],
  },
  {
    slug: "kreative-portretter-skygger",
    title: "Skygger & kontraster",
    kategori: "Portrett",
    kategoriSlug: "portrett",
    date: "Januar 2026",
    location: "Oslo",
    description: "En eksperimentell serie med harde skygger og dramatisk lyssetting.",
    longDescription:
      "Denne serien utforsker forholdet mellom lys og mørke. Med en enkel vindusblind og ettermiddagssolen skapte vi mønstre og kontraster som ga hvert bilde et unikt uttrykk. Det handler om å se det vakre i det enkle.",
    coverImage:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80",
    images: [
      { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80", alt: "Skygger over ansikt" },
      { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80", alt: "Mykt lys" },
      { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80", alt: "Mannlig portrett" },
    ],
  },
  // Natur
  {
    slug: "lofoten-vinterlys",
    title: "Lofoten i vinterlys",
    kategori: "Natur",
    kategoriSlug: "natur",
    date: "Februar 2026",
    location: "Lofoten, Nordland",
    description: "En uke i Lofoten med nordlys, snøstormer og magisk lys.",
    longDescription:
      "Fem dager i Lofoten midt på vinteren. Temperaturene lå rundt minus femten, batteriene døde konstant, og fingrene var numne etter minutter. Men lyset — det arktiske vinterlyset som bare varer noen timer, i nyanser av rosa, lilla og gull — det var verdt hvert eneste frostbitne øyeblikk.",
    coverImage:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
    images: [
      { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80", alt: "Tåkete fjelllandskap" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80", alt: "Dramatiske fjelltopper" },
      { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80", alt: "Grønn dal" },
      { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", alt: "Gyllen solnedgang" },
      { src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1200&q=80", alt: "Fjord" },
    ],
  },
  {
    slug: "jotunheimen-sommer",
    title: "Jotunheimen om sommeren",
    kategori: "Natur",
    kategoriSlug: "natur",
    date: "Juli 2025",
    location: "Jotunheimen, Innlandet",
    description: "Norges tak i sommerdrakt — grønne daler og snøkledde topper.",
    longDescription:
      "En femdagers fottur gjennom Jotunheimen med kameraet som eneste følgesvenn. Fra Besseggen til Galdhøpiggen, gjennom grønne daler og over snøkledde pass. Denne serien er en kjærlighetserklæring til norsk fjellnatur.",
    coverImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    images: [
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80", alt: "Fjelltopper" },
      { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80", alt: "Grønn dal med elv" },
      { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80", alt: "Morgentåke" },
    ],
  },
  // Event
  {
    slug: "oslo-tech-summit-2025",
    title: "Oslo Tech Summit 2025",
    kategori: "Event",
    kategoriSlug: "event",
    date: "Oktober 2025",
    location: "Oslo Spektrum",
    description: "Nordens største tech-konferanse med over 3000 deltakere.",
    longDescription:
      "To intense dager med foredrag, workshops og nettverking. Utfordringen med eventfotografering er å fange både det store bildet og de små øyeblikkene — den konsentrerte lytteren i salen, det spontane møtet i pausen, energien på scenen. Dette oppdraget krevde alt av det.",
    coverImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    images: [
      { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80", alt: "Konferansescene" },
      { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80", alt: "Foredragsholder" },
      { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80", alt: "Publikum" },
    ],
  },
  {
    slug: "aurora-festival",
    title: "Aurora Musikkfestival",
    kategori: "Event",
    kategoriSlug: "event",
    date: "Juni 2025",
    location: "Tromsø",
    description: "Midnattsol, musikk og magi i Tromsø.",
    longDescription:
      "Aurora Musikkfestival er noe helt spesielt — en festival der solen aldri går ned. Lyset forandrer seg hele tiden, fra gylent til blålig og tilbake igjen, og stemningen blant publikum er helt unik. Å fotografere en festival i midnattssol er en opplevelse jeg aldri blir lei av.",
    coverImage:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80",
    images: [
      { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80", alt: "Festival med lys" },
      { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80", alt: "Scene" },
      { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80", alt: "Artister" },
    ],
  },
];

export function getProjectsByCategory(kategoriSlug: string) {
  return projects.filter((p) => p.kategoriSlug === kategoriSlug);
}

export function getProject(kategoriSlug: string, projectSlug: string) {
  return projects.find(
    (p) => p.kategoriSlug === kategoriSlug && p.slug === projectSlug
  );
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
