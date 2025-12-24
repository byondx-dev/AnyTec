
export interface Article {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  badge?: string;
  toc?: { id: string; title: string }[];
  content?: string; // HTML string or component placeholder
}

export const articles: Article[] = [
  {
    id: 1,
    slug: 'cloud-blueprint-franchise',
    title: 'Cloud-Blueprint für Franchise-Rollouts',
    description: 'Wie du neue Standorte in Stunden statt Wochen an Microsoft 365 und deine Netzwerke anschließt.',
    category: 'Cloud',
    readTime: '7 Min',
    date: '01. Okt 2024',
    badge: 'Neu',
    toc: [
      { id: 'intro', title: 'Einleitung' },
      { id: 'problem', title: 'Das Problem mit manuellen Rollouts' },
      { id: 'solution', title: 'Der Cloud-Blueprint Ansatz' },
      { id: 'automation', title: 'Automatisierung mit Intune & Autopilot' },
      { id: 'network', title: 'Netzwerk-Standardisierung' },
      { id: 'conclusion', title: 'Fazit' }
    ],
    content: `
      <p class="lead text-xl text-muted mb-8">
        Die Expansion eines Franchise-Systems steht und fällt mit der Skalierbarkeit. Wenn jeder neue Standort individuelle IT-Konfigurationen benötigt, wird das Wachstum zur Bremse. Hier ist unser Blueprint.
      </p>

      <h2 id="intro" class="text-3xl font-bold mt-12 mb-6">Einleitung</h2>
      <p class="mb-6">
        Stell dir vor, du eröffnest 10 neue Stores pro Monat. Wenn dein IT-Team für jeden Standort Server konfigurieren, Firewalls patchen und User manuell anlegen muss, bricht das System zusammen. Ein Cloud-Blueprint löst dieses Problem durch radikale Standardisierung.
      </p>

      <h2 id="problem" class="text-3xl font-bold mt-12 mb-6">Das Problem mit manuellen Rollouts</h2>
      <p class="mb-6">
        Klassische IT-Setups sind oft "Handarbeit". Ein Techniker fährt raus, installiert Windows, richtet das WLAN ein und hofft, dass die Internetleitung schon liegt. Das führt zu:
      </p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
        <li>Inkonsistenten Konfigurationen (Security Gaps).</li>
        <li>Hohen Reise- und Personalkosten.</li>
        <li>Verzögerungen bei der Eröffnung.</li>
      </ul>

      <h2 id="solution" class="text-3xl font-bold mt-12 mb-6">Der Cloud-Blueprint Ansatz</h2>
      <p class="mb-6">
        Unser Ansatz verlagert 90% der Arbeit in die Vorbereitung. Wir erstellen ein "Golden Image" der Infrastruktur – aber nicht als Disk-Image, sondern als Konfigurations-Code (Infrastructure as Code).
      </p>

      <h2 id="automation" class="text-3xl font-bold mt-12 mb-6">Automatisierung mit Intune & Autopilot</h2>
      <p class="mb-6">
        Hardware wird direkt vom Hersteller an den Standort geliefert. Der Store-Manager packt den Laptop aus, verbindet sich mit dem WLAN und meldet sich an. Microsoft Intune übernimmt den Rest:
      </p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
        <li>Installation der POS-Software.</li>
        <li>Konfiguration von Outlook & Teams.</li>
        <li>Verschlüsselung der Festplatte (BitLocker).</li>
      </ul>

      <h2 id="network" class="text-3xl font-bold mt-12 mb-6">Netzwerk-Standardisierung</h2>
      <p class="mb-6">
        Auch das Netzwerk folgt einem Template. Wir nutzen Meraki oder Ubiquiti Hardware, die sich ihre Konfiguration aus der Cloud zieht, sobald sie Internet hat. Gleiche SSIDs, gleiche VLANs, gleiche Firewall-Regeln an jedem Standort weltweit.
      </p>

      <h2 id="conclusion" class="text-3xl font-bold mt-12 mb-6">Fazit</h2>
      <p class="mb-6">
        Mit einem Cloud-Blueprint wird IT vom Flaschenhals zum Beschleuniger. Deine Expansion wird nur noch durch die Immobiliensuche begrenzt, nicht mehr durch die Technik.
      </p>
    `
  },
  {
    id: 2,
    slug: 'pos-security-vlan',
    title: 'POS-Sicherheit: VLAN, Firewall & Payment',
    description: 'Best Practices für getrennte Kassen-Netze und warum PCI-DSS nicht wehtun muss.',
    category: 'Security',
    readTime: '6 Min',
    date: '18. Sep 2024',
    toc: [
      { id: 'intro', title: 'Intro: Kasse ist heilig' },
      { id: 'segmentation', title: 'Netzwerk-Segmentierung' },
      { id: 'firewall', title: 'Firewall-Regeln' },
      { id: 'payment', title: 'Payment: So bleibt es sauber' },
      { id: 'conclusion', title: 'Fazit' }
    ],
    content: `
      <p class="lead text-xl text-muted mb-8">
        Das Kassensystem (POS) ist das Herzstück im Retail und in vielen Gastro-Setups. Wenn es ausfällt, steht der Betrieb. Wenn Daten abfließen, wird es richtig teuer: Umsatzverlust, Imageschaden, möglicher Ärger mit Dienstleistern und Audits.
      </p>
      
      <div class="bg-accent/5 border-l-4 border-accent p-6 mb-8 rounded-r-xl">
        <p class="font-medium text-fg">
          Darum gilt eine Regel ohne Ausnahmen: <strong>Niemals, wirklich niemals, sollte das Kassensystem im gleichen WLAN hängen wie Gäste-WLAN, Sonos-Speaker, Smart-TVs oder sonstige „Bequemlichkeitsgeräte“.</strong>
        </p>
      </div>

      <h2 id="intro" class="text-3xl font-bold mt-12 mb-6">Intro: Kasse ist Prio 1</h2>
      <p class="mb-6">
        Genau an dieser Stelle scheitern viele Setups: Alles hängt „irgendwie“ zusammen – bis ein Gerät kompromittiert wird und plötzlich der Weg Richtung POS offen ist.
      </p>
      <p class="mb-6">
        Any Tec plant POS-Netze deshalb grundsätzlich nach dem Prinzip: Trennen, minimieren, überwachen. Du bekommst ein Setup, das im Alltag läuft – und nicht nur „auf dem Papier sicher“ ist.
      </p>

      <h2 id="segmentation" class="text-3xl font-bold mt-12 mb-6">Netzwerk-Segmentierung</h2>
      <p class="mb-4">
        Der wichtigste POS-Schutz ist nicht „ein gutes Passwort“, sondern saubere Trennung.
      </p>
      <h3 class="text-xl font-bold mb-2">Warum Segmentierung so effektiv ist</h3>
      <p class="mb-4 text-muted-foreground">
        Wenn ein Gerät im Gäste-WLAN kompromittiert wird (kommt vor), soll es nicht das POS erreichen können. Segmentierung sorgt dafür, dass Angriffe nicht „seitlich“ wandern.
      </p>

      <h3 class="text-xl font-bold mb-4">VLANs: Virtuelle Netztrennung</h3>
      <p class="mb-4">
        Wir nutzen VLANs (Virtual Local Area Networks), um den Datenverkehr strikt zu trennen. Ein VLAN ist vereinfacht gesagt ein eigenes Netzwerk innerhalb deiner Infrastruktur – mit eigenen Regeln.
      </p>
      <div class="bg-card/50 p-6 rounded-xl border border-border mb-6">
        <strong class="block mb-4 text-fg">Ein sicheres Netzwerk-Design trennt diese Bereiche:</strong>
        <ul class="space-y-3">
            <li class="flex items-center gap-3">
                <span class="px-2 py-1 rounded bg-red-500/20 text-red-400 text-xs font-mono font-bold">POS/Payment</span>
                <span>Kassen, Payment-Terminal, POS-Server</span>
            </li>
            <li class="flex items-center gap-3">
                <span class="px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-mono font-bold">Staff</span>
                <span>Mitarbeitergeräte, Backoffice</span>
            </li>
            <li class="flex items-center gap-3">
                <span class="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-mono font-bold">Guest</span>
                <span>Kunden/Gäste</span>
            </li>
            <li class="flex items-center gap-3">
                <span class="px-2 py-1 rounded bg-purple-500/20 text-purple-400 text-xs font-mono font-bold">IoT/Media</span>
                <span>Sonos, Screens, Kameras</span>
            </li>
            <li class="flex items-center gap-3">
                <span class="px-2 py-1 rounded bg-orange-500/20 text-orange-400 text-xs font-mono font-bold">Management</span>
                <span>Netzwerkgeräte (nur Admins)</span>
            </li>
        </ul>
      </div>
      <p class="text-sm text-muted">
        Wichtig: Segmentierung ist erst dann wirklich sinnvoll, wenn auch das WLAN sauber getrennt ist (eigene SSIDs oder Enterprise-WLAN) und nicht nur „alles auf einem Namen“.
      </p>

      <h2 id="firewall" class="text-3xl font-bold mt-12 mb-6">Firewall-Regeln</h2>
      <p class="mb-6">
        Segmentierung ohne Firewall-Regeln ist wie Türen ohne Schlösser: Nett, aber wirkungslos.
      </p>
      
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div>
            <h3 class="text-xl font-bold mb-4">Grundprinzip: Default Deny</h3>
            <p class="text-muted-foreground mb-4">
                Für POS gilt: standardmäßig alles blocken, nur das erlauben, was wirklich nötig ist.
            </p>
            <ul class="space-y-2 text-sm">
                <li class="flex items-center gap-2 text-green-400"><span class="font-mono">POS → Cloud/Payment</span> ✓ Erlaubt (Ports only)</li>
                <li class="flex items-center gap-2 text-green-400"><span class="font-mono">POS → Updates/DNS</span> ✓ Erlaubt (Targeted)</li>
                <li class="flex items-center gap-2 text-red-400"><span class="font-mono">Guest → POS</span> ✗ BLOCK</li>
                <li class="flex items-center gap-2 text-red-400"><span class="font-mono">IoT → POS</span> ✗ BLOCK</li>
            </ul>
        </div>
        <div>
            <h3 class="text-xl font-bold mb-4">Warum „Any/Any“ gefährlich ist</h3>
            <p class="text-muted-foreground">
                Viele Installationen laufen „stabil“, weil alles offen ist. Das ist bequem – bis es knallt. Ein gutes POS-Setup ist nicht das, das am schnellsten „online“ ist, sondern das, das mit minimaler Angriffsfläche stabil bleibt.
            </p>
        </div>
      </div>

      <h2 id="payment" class="text-3xl font-bold mt-12 mb-6">Payment: So bleibt es sauber</h2>
      <p class="mb-6">
        Payment ist ein eigenes Risiko-Universum. Ohne zu tief ins Detail zu gehen: Du willst, dass Payment-Daten so wenig Berührungspunkte wie möglich mit dem restlichen Netz haben.
      </p>
      <div class="bg-muted2/30 p-6 rounded-xl border border-border/50">
        <h4 class="font-bold mb-4">Praktische Leitlinien</h4>
        <ul class="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Isolierung:</strong> Payment-Terminals gehören ins POS/Payment VLAN, nicht ins Staff- oder Guest-WLAN.</li>
            <li><strong>Fernzugriff:</strong> Remote-Zugriff nur über sichere Wege (nicht „TeamViewer auf der Kasse“ als Standard).</li>
            <li><strong>Wartung:</strong> Updates und Fernwartung müssen geplant sein – „wir machen das später“ endet oft in Dauer-Ausnahmen.</li>
        </ul>
      </div>

      <h2 id="conclusion" class="text-3xl font-bold mt-12 mb-6">Fazit</h2>
      <p class="mb-6">
        POS-Sicherheit ist keine Luxus-Option. Sie ist Betriebsgrundlage.
      </p>
      <p class="mb-4 font-bold">Wenn du nur drei Dinge mitnimmst:</p>
      <ul class="list-check pl-6 mb-8 text-muted-foreground space-y-2">
        <li>POS/Payment strikt trennen (VLANs + eigene WLANs)</li>
        <li>Firewall: default deny (nur erlauben, was nötig ist)</li>
        <li>Payment sauber isolieren (keine Misch-Netze, keine Bastellösungen)</li>
      </ul>
      
      <div class="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
        <h4 class="font-bold text-lg mb-2">Ready-to-Work Setup</h4>
        <p class="text-muted-foreground mb-4">
            Wenn du möchtest, baut Any Tec dir das komplett auf: Netzwerk-Blueprint, VLANs, Firewall-Regeln, Tests – und so dokumentiert, dass du es in weiteren Standorten 1:1 ausrollen kannst.
        </p>
      </div>
    `
  },
  {
    id: 3,
    slug: 'wlan-retail-scaling',
    title: 'WLAN in Retail-Flächen, das wirklich skaliert',
    description: 'Von Heatmaps bis Band Steering: ein praxisnaher Guide für stores mit hoher Dichte.',
    category: 'Retail',
    readTime: '9 Min',
    date: '05. Sep 2024',
    badge: 'Guide',
    toc: [
      { id: 'intro', title: 'Intro' },
      { id: 'difference', title: 'Retail vs. Office' },
      { id: 'failures', title: 'Warum es scheitert' },
      { id: 'meaning', title: 'Was skalierbar heißt' },
      { id: 'blocks', title: 'Die 6 Bausteine' },
      { id: 'check', title: 'Ist dein WLAN fit?' },
      { id: 'conclusion', title: 'Fazit' }
    ],
    content: `
      <p class="lead text-xl text-muted mb-8">
        Ein WLAN kann in einem kleinen Shop “irgendwie funktionieren” – bis es nicht mehr tut. Sobald mehr Geräte dazukommen (Kasse, Tablets, Scanner, Digital Signage, Musik, Lagergeräte, Gäste), zeigt sich schnell, ob das WLAN professionell geplant ist oder nur improvisiert wurde.
      </p>

      <div class="bg-accent/5 border-l-4 border-accent p-6 mb-8 rounded-r-xl">
        <p class="font-medium text-fg">
          Dieser Artikel erklärt, worauf es bei skalierbarem Retail-WLAN wirklich ankommt, welche Fehler du vermeiden solltest und wie du ein Setup bekommst, das auch bei mehreren Standorten stabil bleibt – ohne technische Details preiszugeben, die man missbrauchen könnte.
        </p>
      </div>

      <h2 id="difference" class="text-3xl font-bold mt-12 mb-6">Warum Retail-WLAN anders ist als „Büro-WLAN“</h2>
      <p class="mb-4">Retail-Flächen sind ein Spezialfall, weil hier viele Dinge gleichzeitig passieren:</p>
      <ul class="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
        <li>Viele Geräte mit unterschiedlichen Anforderungen (POS, Scanner, Tablets, Backoffice, Media)</li>
        <li>Wechselnde Nutzer (Mitarbeiter-Schichten, Gäste)</li>
        <li>Hohe Störquellen (Kühlgeräte, Glasflächen, Metallregale, Nachbar-WLANs)</li>
        <li>Harte Anforderungen an Verfügbarkeit: Wenn WLAN wackelt, wackelt der Umsatz</li>
      </ul>
      <p class="mb-8 text-muted">
        Kurz: Ein Retail-WLAN muss belastbar, vorhersehbar und wartbar sein – nicht nur schnell.
      </p>

      <h2 id="failures" class="text-3xl font-bold mt-12 mb-6">Die häufigsten Gründe, warum Retail-WLAN „nicht skaliert“</h2>
      
      <div class="space-y-6 mb-8">
        <div>
            <h3 class="text-xl font-bold mb-2">1) „Ein Router reicht“ (Der Klassiker)</h3>
            <p class="text-muted-foreground">Ein einzelnes Gerät im falschen Winkel kann in einem kleinen Raum ok sein – in einer Verkaufsfläche mit Lager/Backoffice fast nie. Sobald Wände, Regale und Kundenfrequenz dazu kommen, entstehen Funklöcher und instabile Übergänge.</p>
        </div>
        <div>
            <h3 class="text-xl font-bold mb-2">2) Falsche Platzierung statt fehlender Hardware</h3>
            <p class="text-muted-foreground">Oft ist nicht “zu wenig Hardware” das Problem, sondern “falsch platziert”. Ein Access Point hinter einem Metallregal kann mehr kaputt machen als helfen.</p>
        </div>
        <div>
            <h3 class="text-xl font-bold mb-2">3) Keine Standardisierung über Standorte</h3>
            <p class="text-muted-foreground">Wenn jeder Standort “anders” konfiguriert ist, wird Support zum Albtraum. Skalierung heißt: gleiches Muster, gleiche Regeln, gleiche Erwartungen.</p>
        </div>
        <div>
            <h3 class="text-xl font-bold mb-2">4) Zu viele Geräte im selben Funkbereich</h3>
            <p class="text-muted-foreground mb-2">Wenn alles auf denselben Funkparametern läuft, werden Störungen und Paketverluste normal. Das merkt man nicht als “kein Internet”, sondern subtiler:</p>
            <ul class="list-check pl-6 text-sm text-muted-foreground font-medium">
                <li>POS reagiert langsam</li>
                <li>Zahlung dauert “manchmal” länger</li>
                <li>Scanner hängen “sporadisch”</li>
                <li>Meeting/Call im Backoffice bricht ab</li>
            </ul>
        </div>
      </div>

      <h2 id="meaning" class="text-3xl font-bold mt-12 mb-6">Was „WLAN, das skaliert“ eigentlich bedeutet</h2>
      <p class="mb-4">Skalierbar heißt nicht nur: “mehr Geräte gehen auch noch”. Es heißt:</p>
      <ul class="grid sm:grid-cols-2 gap-4 mb-8">
        <li class="bg-muted2/50 p-3 rounded-lg border border-border/50">Stabile Performance bei hoher Last</li>
        <li class="bg-muted2/50 p-3 rounded-lg border border-border/50">Saubere Abdeckung ohne Funklöcher</li>
        <li class="bg-muted2/50 p-3 rounded-lg border border-border/50">Vorhersehbares Verhalten (kein Zufalls-Glück)</li>
        <li class="bg-muted2/50 p-3 rounded-lg border border-border/50">Schneller Rollout neuer Geräte/Standorte</li>
        <li class="bg-muted2/50 p-3 rounded-lg border border-border/50">Monitoring & Supportfähigkeit</li>
      </ul>
      <p class="mb-8 text-muted">
        Genau daran arbeiten wir bei Any Tec: nicht nur WLAN installieren, sondern WLAN als Betriebsgrundlage bauen.
      </p>

      <h2 id="blocks" class="text-3xl font-bold mt-12 mb-8">Die 6 Bausteine eines professionellen Retail-WLANs</h2>
      
      <div class="space-y-8">
         <div>
            <h3 class="text-lg font-bold text-accent mb-1">1) Planung nach Fläche, Nutzung und Störprofil</h3>
            <p class="text-muted-foreground">
                Ein gutes Setup startet nicht mit “welcher Router ist gut?”, sondern mit Grundriss, Zonen (Kasse/Verkauf/Lager), Nutzerprofilen und Störquellen. Any Tec übernimmt diese Vorarbeit, weil das später 80% der Stabilität ausmacht.
            </p>
         </div>
         <div>
            <h3 class="text-lg font-bold text-accent mb-1">2) Abdeckung & Übergänge, die man nicht merkt</h3>
            <p class="text-muted-foreground">
                In Retail soll niemand darüber nachdenken, wo “das WLAN besser ist”. Geräte müssen sich unauffällig bewegen können (Roaming). Das erreichst du nur mit einem Setup, das auf Zonenlogik ausgelegt ist.
            </p>
         </div>
         <div>
            <h3 class="text-lg font-bold text-accent mb-1">3) Geräte- und Nutzerrollen ohne Chaos</h3>
            <p class="text-muted-foreground">
                Kasse, Mitarbeiter, IoT, Gäste – wenn alles gleich behandelt wird, leidet die Performance oder Sicherheit. Any Tec liefert fertige “Retail-Blueprints”, die Rollen sauber trennen.
            </p>
         </div>
         <div>
            <h3 class="text-lg font-bold text-accent mb-1">4) Stabilität unter Last (Peak Hours)</h3>
            <p class="text-muted-foreground">
                Dein WLAN muss dann stabil sein, wenn es zählt: Samstag, Sale, Events. Skalierbarkeit bedeutet hier: kein Einbruch, nur weil 30 Leute gleichzeitig im Laden sind.
            </p>
         </div>
         <div>
            <h3 class="text-lg font-bold text-accent mb-1">5) Betrieb: Monitoring statt „Wenn was kaputt ist…“</h3>
            <p class="text-muted-foreground">
                Viele Probleme sind schleichend (Fehlerquoten, Interferenzen). Ein skalierbares Setup hat Überwachung. Any Tec kann das als Managed-Betrieb übernehmen – damit Probleme sichtbar werden, bevor sie Umsatz kosten.
            </p>
         </div>
         <div>
            <h3 class="text-lg font-bold text-accent mb-1">6) Multi-Standort: Standardisieren</h3>
            <p class="text-muted-foreground">
                Kann ich Standort 2 so schnell ausrollen wie Standort 1? Ein gutes System liefert einheitliche Logik und wiederholbare Rollouts. Any Tec setzt Retail-WLAN so auf, dass es pro Standort kein „neues Projekt“ ist.
            </p>
         </div>
      </div>

      <h2 id="check" class="text-3xl font-bold mt-12 mb-6">Wie du erkennst, ob dein WLAN-Setup skalierfähig ist</h2>
      <div class="bg-card/50 p-6 rounded-xl border border-border mb-8">
        <ul class="space-y-4">
            <li class="flex items-start gap-3">
                <span class="text-accent mt-1">?</span>
                <span class="text-fg">Läuft POS/Payment stabil auch bei Peak?</span>
            </li>
            <li class="flex items-start gap-3">
                <span class="text-accent mt-1">?</span>
                <span class="text-fg">Kannst du neue Geräte schnell hinzufügen – ohne „Sonderfälle“?</span>
            </li>
            <li class="flex items-start gap-3">
                <span class="text-accent mt-1">?</span>
                <span class="text-fg">Gibt es klare Trennung zwischen internen Geräten und Gästen?</span>
            </li>
            <li class="flex items-start gap-3">
                <span class="text-accent mt-1">?</span>
                <span class="text-fg">Kannst du Probleme messen/sehen – oder erst, wenn Kunden warten?</span>
            </li>
            <li class="flex items-start gap-3">
                <span class="text-accent mt-1">?</span>
                <span class="text-fg">Könnte ein zweiter Standort mit denselben Standards schnell live gehen?</span>
            </li>
        </ul>
        <p class="mt-4 text-sm text-muted italic">Wenn du bei 2–3 Punkten unsicher bist, ist es Zeit für ein professionelles Setup.</p>
      </div>

      <h2 id="conclusion" class="text-3xl font-bold mt-12 mb-6">Fazit</h2>
      <p class="mb-6">
        Retail-WLAN ist kein “Nice to have”, sondern eine Umsatzkomponente. Wenn du wachsen willst – mehr Geräte, mehr Fläche, mehr Standorte – brauchst du ein WLAN, das planbar skaliert.
      </p>
      
      <div class="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
        <h4 class="font-bold text-lg mb-2">Unser Angebot</h4>
        <p class="text-muted-foreground mb-4">
            Any Tec übernimmt die Planung, den Aufbau und auf Wunsch den Betrieb – mit einem Setup, das zuverlässig läuft, sauber dokumentiert ist und sich auf weitere Standorte übertragen lässt.
        </p>
        <p class="font-medium text-accent">
            Wenn du möchtest, starten wir mit einem kurzen Check: Fläche, Geräte, Ziele – und du bekommst einen klaren Vorschlag.
        </p>
      </div>
    `
  },
  {
    id: 4,
    slug: 'zero-trust-sme',
    title: 'Zero Trust light für KMU',
    description: 'So startest du mit Conditional Access, MFA und Device Compliance ohne Overhead.',
    category: 'Security',
    readTime: '5 Min',
    date: '22. Aug 2024',
    toc: [
      { id: 'intro', title: 'Intro: Zero Trust light' },
      { id: 'why', title: 'Warum „light“ statt „komplett“?' },
      { id: 'mfa', title: '1) MFA – sinnvoll' },
      { id: 'conditional', title: '2) Conditional Access' },
      { id: 'compliance', title: '3) Device Compliance' },
      { id: 'rollout', title: 'Der 5-Schritte-Rollout' },
      { id: 'pitfalls', title: 'Stolpersteine' },
      { id: 'benefit', title: 'Was du bekommst' },
      { id: 'conclusion', title: 'Fazit' }
    ],
    content: `
      <p class="lead text-xl text-muted mb-8">
        Zero Trust klingt nach „Enterprise-Projekt“. In der Praxis geht’s aber um etwas sehr Einfaches: Vertrauen wird nicht vorausgesetzt – es wird jedes Mal geprüft. Für KMU ist das besonders wichtig, weil Angriffe heute selten „Hightech“ sind, sondern meist über gestohlene Passwörter, Phishing und unsichere Endgeräte laufen.
      </p>

      <div class="bg-accent/5 border-l-4 border-accent p-6 mb-8 rounded-r-xl">
        <p class="font-medium text-fg">
          Dieser Artikel zeigt, wie du Zero Trust light umsetzt: pragmatisch, schnell und ohne dass dein Team im Admin-Chaos versinkt.
        </p>
      </div>

      <h2 id="why" class="text-3xl font-bold mt-12 mb-6">Warum „Zero Trust light“ statt „Zero Trust komplett“?</h2>
      <p class="mb-4">
        Viele KMU scheitern, weil sie zu groß starten: zig Tools, zu viele Policies, zu viel Komplexität. Das Ergebnis: Frust – und am Ende bleibt es beim alten Setup.
      </p>
      <p class="mb-4"><strong>Zero Trust light setzt auf die 20%, die 80% bringen:</strong></p>
      <ul class="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
        <li><strong>MFA überall</strong> (richtig gemacht)</li>
        <li><strong>Conditional Access</strong> (klare Regeln, wenig Ausnahmen)</li>
        <li><strong>Device Compliance</strong> (nur „gesund“ = Zugriff)</li>
      </ul>
      <p class="mb-8 text-muted">
        Wenn du damit startest, reduzierst du Risiko massiv – ohne monatelanges Projekt.
      </p>

      <h2 class="text-3xl font-bold mt-12 mb-8">Die drei Bausteine</h2>

      <div class="space-y-12">

        <div id="mfa">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                <span class="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm">1</span>
                MFA (Multi-Factor Authentication) – aber sinnvoll
            </h3>
            <p class="mb-4 text-muted-foreground">MFA ist Pflicht, aber falsch umgesetzt nervt es oder wird umgangen.</p>
            <div class="bg-card/50 p-4 rounded-lg border border-border mb-4">
                <strong class="block mb-2 text-fg">Zero Trust light Ansatz:</strong>
                <ul class="list-check pl-6 space-y-1 text-sm text-muted-foreground">
                    <li>MFA für alle Benutzer, besonders Admins</li>
                    <li>Keine “SMS-only” Denke, sondern moderne Faktoren</li>
                    <li>Ausnahmen vermeiden, Break-Glass Accounts sauber absichern</li>
                </ul>
            </div>
            <p class="text-sm text-muted">Was Any Tec übernimmt: saubere MFA-Strategie, Rollout-Kommunikation, Ausnahme-Handling, Notfallzugänge – damit es nicht am ersten Tag eskaliert.</p>
        </div>

        <div id="conditional">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                <span class="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm">2</span>
                Conditional Access – „wer darf wann wo“
            </h3>
            <p class="mb-4 text-muted-foreground">
                Conditional Access ist der Hebel, der MFA und Geräte-Status intelligent verknüpft. Statt „jeder darf überall“ gilt: Zugriff nur, wenn Kontext passt.
            </p>
            <ul class="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                <li>Blockiere Logins aus ungewöhnlichen Regionen</li>
                <li>Admin-Aktionen nur mit stärkeren Bedingungen</li>
                <li>Zugriff auf kritische Apps nur von compliant Geräten</li>
                <li>Neue/unbekannte Geräte müssen erst „sauber“ werden</li>
            </ul>
             <p class="text-sm text-muted">Was Any Tec übernimmt: Policy-Design, Test-Ring (Pilotgruppe), Rollout in Stufen, Monitoring – damit du nicht aus Versehen dein Team aussperrst.</p>
        </div>

        <div id="compliance">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                <span class="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm">3</span>
                Device Compliance – „kein Zugriff von unsicheren Geräten“
            </h3>
            <p class="mb-4 text-muted-foreground">
                Das ist oft der Gamechanger: Selbst wenn ein Passwort gestohlen ist, kommt der Angreifer ohne ein „konformes“ Gerät nicht weit.
            </p>
            <ul class="grid sm:grid-cols-2 gap-3 mb-4">
                <li class="bg-muted2/50 p-2 rounded text-sm">✓ Gerät verschlüsselt</li>
                <li class="bg-muted2/50 p-2 rounded text-sm">✓ Screen Lock aktiv</li>
                <li class="bg-muted2/50 p-2 rounded text-sm">✓ OS-Version aktuell</li>
                <li class="bg-muted2/50 p-2 rounded text-sm">✓ Kein Jailbreak/Root</li>
            </ul>
             <p class="text-sm text-muted">Was Any Tec übernimmt: Gerätestrategie, Mindestanforderungen, Rollout, Richtlinien für BYOD vs. Firmengeräte – und die Umsetzung ohne Overhead.</p>
        </div>

      </div>

      <h2 id="rollout" class="text-3xl font-bold mt-12 mb-6">Der pragmatische Rollout in 5 Schritten</h2>
      <div class="space-y-4 mb-8">
        <div class="flex gap-4">
            <div class="font-bold text-accent min-w-[3ch]">01</div>
            <div>
                <strong class="block text-fg">Quick Audit (30–60 Min)</strong>
                <span class="text-muted-foreground text-sm">Welche Accounts/Apps sind kritisch? Welche Gerätetypen gibt es? Any Tec erstellt daraus die Start-Matrix.</span>
            </div>
        </div>
        <div class="flex gap-4">
            <div class="font-bold text-accent min-w-[3ch]">02</div>
            <div>
                <strong class="block text-fg">MFA überall</strong>
                <span class="text-muted-foreground text-sm">Pilotgruppe → dann alle. Admins zuerst. Notfallzugänge definieren.</span>
            </div>
        </div>
        <div class="flex gap-4">
            <div class="font-bold text-accent min-w-[3ch]">03</div>
            <div>
                <strong class="block text-fg">Conditional Access "MVP"</strong>
                <span class="text-muted-foreground text-sm">Starte mit 3–5 Regeln: MFA für alle, strengere Admin-Regeln, Blockierung riskanter Logins.</span>
            </div>
        </div>
        <div class="flex gap-4">
            <div class="font-bold text-accent min-w-[3ch]">04</div>
            <div>
                <strong class="block text-fg">Device Compliance als "Gate"</strong>
                <span class="text-muted-foreground text-sm">Baseline setzen. Geräte nachziehen (Warnen vor Blocken).</span>
            </div>
        </div>
        <div class="flex gap-4">
            <div class="font-bold text-accent min-w-[3ch]">05</div>
            <div>
                <strong class="block text-fg">Monitoring & Feintuning</strong>
                <span class="text-muted-foreground text-sm">Nach 1–2 Wochen Ausnahmen prüfen und Policies nachschärfen.</span>
            </div>
        </div>
      </div>

      <h2 id="pitfalls" class="text-3xl font-bold mt-12 mb-6">Häufige Stolpersteine (und wie Any Tec sie verhindert)</h2>
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-card/30 p-4 rounded-xl border border-border">
            <h4 class="font-bold text-red-400 mb-2">„Wir sperren uns aus“</h4>
            <p class="text-sm text-muted">Passiert ohne Pilot oder Notfall-User.<br/><span class="text-accent">→ Lösung: Stufen-Rollout + Break-Glass.</span></p>
        </div>
        <div class="bg-card/30 p-4 rounded-xl border border-border">
            <h4 class="font-bold text-red-400 mb-2">„BYOD nervt“</h4>
            <p class="text-sm text-muted">Privatgeräte im Firmennetz ohne Regeln.<br/><span class="text-accent">→ Lösung: Getrennte Policies Privat vs. Corporate.</span></p>
        </div>
        <div class="bg-card/30 p-4 rounded-xl border border-border">
            <h4 class="font-bold text-red-400 mb-2">„Zu viele Ausnahmen“</h4>
            <p class="text-sm text-muted">Jeder will eine Extrawurst.<br/><span class="text-accent">→ Lösung: Ausnahmen zeitlich begrenzen & begründen.</span></p>
        </div>
      </div>

      <h2 id="benefit" class="text-3xl font-bold mt-12 mb-6">Was du am Ende bekommst</h2>
      <p class="mb-6">Mit Zero Trust light erreichst du:</p>
      <ul class="list-disc pl-6 mb-8 text-muted-foreground space-y-2">
        <li><strong>Deutlich weniger Risiko</strong> durch Passwortdiebstahl/Phishing</li>
        <li><strong>Bessere Kontrolle</strong> über Geräte- und Zugriffsstatus</li>
        <li><strong>Weniger “Schatten-IT”</strong>, weil Standards klar sind</li>
        <li><strong>Bessere Grundlage</strong>, um später zu skalieren (Standorte, Teams, Franchise)</li>
      </ul>

      <h2 id="conclusion" class="text-3xl font-bold mt-12 mb-6">Fazit</h2>
      <p class="mb-6">
        Zero Trust muss nicht groß anfangen. Für KMU ist der richtige Weg: klein starten, sauber umsetzen, konsequent betreiben.
      </p>
      
      <div class="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
        <h4 class="font-bold text-lg mb-2">Unser Angebot</h4>
        <p class="text-muted-foreground mb-4">
            Genau dabei hilft Any Tec: Wir setzen Zero Trust light so um, dass es im Alltag funktioniert – und nicht als Admin-Baustelle endet.
        </p>
        <p class="font-medium text-accent">
            🚀 Schnellstart: kurze Analyse, Pilot, Rollout, Stabilisierung – und du hast in kurzer Zeit ein Setup, das wirklich schützt.
        </p>
      </div>
    `
  },
  {
    id: 5,
    slug: 'hybrid-cloud-setup',
    title: 'Hybrid-Setup: Cloud gesteuert, lokal resilient',
    description: 'Ein Architektur-Muster, das Cloud-Komfort mit lokaler Ausfallsicherheit kombiniert.',
    category: 'Cloud',
    readTime: '8 Min',
    date: '10. Aug 2024',
    toc: [
      { id: 'intro', title: 'Intro' },
      { id: 'cloud-controlled', title: 'Was „Cloud gesteuert“ heißt' },
      { id: 'local-resilient', title: 'Was „lokal resilient“ heißt' },
      { id: 'scenarios', title: 'Typische Szenarien' },
      { id: 'rules', title: 'Klare Regeln statt „Dazwischen“' },
      { id: 'security', title: 'Sicherheit & Standards' },
      { id: 'costs', title: 'Kosten & Betrieb' },
      { id: 'conclusion', title: 'Fazit' }
    ],
    content: `
      <p class="lead text-xl text-muted mb-8">
        Ein gutes Hybrid-Setup ist nicht „halb Cloud, halb lokal“. Es ist ein Betriebsmodell: Die Cloud steuert Standards, Sicherheit und Verwaltung – der Standort bleibt gleichzeitig so aufgestellt, dass er auch bei Störungen weiterarbeiten kann.
      </p>

      <div class="bg-accent/5 border-l-4 border-accent p-6 mb-8 rounded-r-xl">
        <p class="font-medium text-fg">
          Gerade für Retail, Gastro, Studios, Ketten und Franchise ist das ideal: Du willst zentrale Kontrolle, aber du darfst am Standort nicht davon abhängig sein, dass immer alles perfekt ist.
        </p>
      </div>

      <h2 id="intro" class="text-3xl font-bold mt-12 mb-6">Warum Hybrid für viele Unternehmen die realistischste Cloud-Strategie ist</h2>
      <p class="mb-4">
        „Alles in die Cloud“ klingt sauber – aber die Realität hat Anforderungen, die man nicht wegdiskutieren kann:
      </p>
      <ul class="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
        <li>Standorte brauchen stabile Abläufe (Kasse, Check-in, lokale Medien)</li>
        <li>Internet ist nicht immer perfekt</li>
        <li>Legacy-Systeme sind oft nicht sofort migrierbar</li>
        <li>Du willst zentrale Standards, aber lokal keine IT-Feuerwehr spielen</li>
      </ul>
      <p class="mb-8 text-muted">
        Hybrid ist deshalb oft der sweet spot: zentrale Cloud-Steuerung + lokale Funktionsfähigkeit.
      </p>

      <h2 id="cloud-controlled" class="text-3xl font-bold mt-12 mb-6">Was bedeutet „Cloud gesteuert“?</h2>
      <p class="mb-6">Es heißt nicht, dass Daten überall liegen, sondern:</p>
      
      <div class="space-y-6 mb-8">
        <div>
            <h3 class="text-xl font-bold mb-2">1) Einheitliche Identität & Zugriff</h3>
            <p class="text-muted-foreground">Nutzer, Rollen und Zugriffe werden zentral verwaltet. Das reduziert Wildwuchs und macht Standorte konsistent.</p>
        </div>
        <div>
            <h3 class="text-xl font-bold mb-2">2) Zentrale Sicherheits-Standards</h3>
            <p class="text-muted-foreground">Policies und Regeln werden zentral definiert – nicht pro Standort „nach Gefühl“.</p>
        </div>
        <div>
            <h3 class="text-xl font-bold mb-2">3) Geräte und Rollouts einfacher machen</h3>
            <p class="text-muted-foreground">Neue Geräte oder Standorte folgen wiederholbaren Standards statt Bastellösungen.</p>
        </div>
        <div>
            <h3 class="text-xl font-bold mb-2">4) Zentrales Monitoring & Transparenz</h3>
            <p class="text-muted-foreground">Du willst wissen, wenn etwas kippt – nicht erst, wenn Kunden warten. Any Tec setzt diese Steuerung ohne Overhead um.</p>
        </div>
      </div>

      <h2 id="local-resilient" class="text-3xl font-bold mt-12 mb-6">Was bedeutet „lokal resilient“?</h2>
      <p class="mb-4">
        „Resilient“ heißt: Der Standort kann auch dann funktionieren, wenn nicht alles ideal läuft.
      </p>
      <ul class="list-check pl-6 mb-8 text-muted-foreground space-y-2">
        <li><strong>Standort kann weiterarbeiten:</strong> Kritische Prozesse stehen nicht, nur weil eine Leitung Probleme hat.</li>
        <li><strong>Bewusste lokale Komponenten:</strong> Alles Lokale hat einen Zweck (Latenz, Stabilität).</li>
        <li><strong>Saubere Wiederherstellung:</strong> Es gibt einen Plan für den Ernstfall, keine Improvisation.</li>
      </ul>

      <h2 id="scenarios" class="text-3xl font-bold mt-12 mb-6">Typische Hybrid-Szenarien</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
         <div class="bg-card/50 p-4 rounded-xl border border-border">
            <h4 class="font-bold text-accent mb-2">Retail / Kette</h4>
            <p class="text-sm text-muted-foreground">Zentrale Steuerung von Standards & Access. Standort bleibt robust für Tagesgeschäft. Rollout per Blueprint.</p>
         </div>
         <div class="bg-card/50 p-4 rounded-xl border border-border">
            <h4 class="font-bold text-accent mb-2">Gastro</h4>
            <p class="text-sm text-muted-foreground">Zuverlässige Abläufe am Standort. Zentrale Updates & Sichtbarkeit. Weniger "Support-Panik".</p>
         </div>
         <div class="bg-card/50 p-4 rounded-xl border border-border">
            <h4 class="font-bold text-accent mb-2">Studios / Spaces</h4>
            <p class="text-sm text-muted-foreground">Viele Endgeräte + wechselnde Nutzer. Klare Access-Logik. Stabile Abläufe bei hoher Last.</p>
         </div>
         <div class="bg-card/50 p-4 rounded-xl border border-border">
            <h4 class="font-bold text-accent mb-2">Remote / Hybrid Work</h4>
            <p class="text-sm text-muted-foreground">Zentrale Zugriffssteuerung. Konsistentes Gerätemanagement. Weniger Risiko durch Endgeräte.</p>
         </div>
      </div>

      <h2 id="rules" class="text-3xl font-bold mt-12 mb-6">Hybrid ist kein „Dazwischen“ – es braucht klare Regeln</h2>
      <p class="mb-4">
        Der häufigste Fehler ist ein Setup ohne klare Grenzen: „Ein bisschen hier, ein bisschen da“. Ein gutes Design klärt:
      </p>
      <ul class="list-disc pl-6 mb-8 text-muted-foreground space-y-1">
        <li>Was wird zentral gesteuert?</li>
        <li>Was muss lokal laufen?</li>
        <li>Wie hängen die Teile zusammen?</li>
        <li>Wie wird Support organisiert?</li>
      </ul>

      <h2 id="security" class="text-3xl font-bold mt-12 mb-6">Sicherheit: Hybrid kann stark sein</h2>
      <p class="mb-4">
        Cloud-gesteuerte Umgebungen bieten starke Werkzeuge, aber der Effekt entsteht erst durch Disziplin: klare Zugriffskonzepte, saubere Gerätestandards und reduzierter Ausnahmen-Wildwuchs.
      </p>
      <div class="bg-muted2/30 p-4 rounded-lg text-sm text-muted italic mb-8">
        Wir verraten hier bewusst keine Konfigurationsdetails – aber der Unterschied zwischen „Hybrid“ und „stabilem Hybrid“ ist fast immer die Disziplin in Standards und Betrieb.
      </div>

      <h2 id="costs" class="text-3xl font-bold mt-12 mb-6">Kosten & Betrieb: Warum Hybrid oft wirtschaftlicher ist</h2>
      <p class="mb-6">
        Viele vergleichen nur Server- vs. Cloudpreis. Der echte Kostenblock ist der Betrieb (Updates, Störungen, Ausfall, Skalierung). Hybrid reduziert diese Kosten durch Standardisierung – weniger Sonderfälle, mehr Wiederholbarkeit.
      </p>

      <h2 id="conclusion" class="text-3xl font-bold mt-12 mb-6">Fazit: Cloud steuert – der Standort bleibt robust</h2>
      <p class="mb-6">
        Ein modernes Hybrid-Setup liefert das Beste aus zwei Welten: zentrale Kontrolle und Standort-Stabilität. Wenn du wachsen willst oder Verfügbarkeit kritisch ist, ist „cloud-gesteuert, lokal resilient“ oft das richtige Modell.
      </p>
      
      <div class="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
        <h4 class="font-bold text-lg mb-2">Hybrid-Check</h4>
        <p class="text-muted-foreground mb-4">
            Any Tec unterstützt von der Architektur bis zum Betrieb. Wir bauen Hybrid so, dass es im Alltag funktioniert.
        </p>
        <p class="font-medium text-accent">
            Wenn du willst, starten wir mit einem Check: Ziele, Standorte, Abläufe – und du bekommst eine klare Empfehlung.
        </p>
      </div>
    `
  },
  {
    id: 6,
    slug: 'office-rollout-48h',
    title: 'Schnellstart: Neues Office in 48h live',
    description: 'Checkliste und Toolkit für Netzwerk, Devices und Identitäten in Rekordzeit.',
    category: 'How-To',
    readTime: '4 Min',
    date: '28. Jul 2024',
    toc: [
      { id: 'intro', title: 'Was heißt „in 48 Stunden live“?' },
      { id: 'fail', title: 'Warum scheitern Office-Go-Lives?' },
      { id: 'phases', title: 'Der Schnellstart in drei Phasen' },
      { id: 'checklist', title: 'Vorab-Check' },
      { id: 'setup', title: 'Setup & Rollout' },
      { id: 'golive', title: 'Go-Live & Stabilisierung' },
      { id: 'target', title: 'Für wen ist das ideal?' },
      { id: 'addons', title: 'Nach dem Go-Live' },
      { id: 'conclusion', title: 'Fazit' }
    ],
    content: `
      <p class="lead text-xl text-muted mb-8">
        Ein neues Office zu eröffnen ist oft ein Rennen gegen die Zeit. "Die IT" muss einfach funktionieren. Drucker, WLAN, Meetingräume, Accounts, Security. Wenn hier etwas hakt, steht das Office, aber niemand arbeitet.
      </p>

      <div class="bg-accent/5 border-l-4 border-accent p-6 mb-8 rounded-r-xl">
        <p class="font-medium text-fg">
          Genau dafür gibt es den Schnellstart: „Neues Office in 48h live“ – ein erprobter Ablauf, mit dem du schnell arbeitsfähig wirst, ohne dich in Details zu verlieren.
        </p>
      </div>

      <h2 id="intro" class="text-3xl font-bold mt-12 mb-6">Was heißt „in 48 Stunden live“ konkret?</h2>
      <p class="mb-4">
        „Live“ bedeutet in diesem Kontext: Ein neues Office kann zuverlässig im Alltag laufen – mit den wichtigsten Grundlagen:
      </p>
      <ul class="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
        <li><strong>Stabiles Internet & Netzwerk</strong> (inkl. Gastzugang)</li>
        <li><strong>Produktive Arbeitsplätze</strong> (User-Zugänge, Geräte-Grundsetup)</li>
        <li><strong>Security-Basics</strong> aktiv (keine offene Baustelle)</li>
        <li><strong>Meetingraum-Grundfunktion</strong> (Bild/Audio + Zugang)</li>
        <li><strong>Monitoring/Support-Basis</strong>, damit nach Go-Live nichts „still“ ausfällt</li>
      </ul>
      <p class="mb-8 text-muted">
        Any Tec übernimmt dabei die Planung, Koordination und Umsetzung – damit du nicht mit fünf Dienstleistern diskutierst, sondern einen klaren Ansprechpartner hast.
      </p>

      <h2 id="fail" class="text-3xl font-bold mt-12 mb-6">Warum scheitern Office-Go-Lives so oft?</h2>
      <p class="mb-4">Weil die IT selten nur „eine Sache“ ist. Typische Zeitfresser:</p>
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3 text-muted-foreground">
          <span class="text-red-500 mt-1">✗</span> Internet ist da, aber Router/Firewall nicht sauber eingerichtet.
        </li>
        <li class="flex items-start gap-3 text-muted-foreground">
          <span class="text-red-500 mt-1">✗</span> WLAN funktioniert, aber nicht stabil (oder ohne Segmentierung).
        </li>
        <li class="flex items-start gap-3 text-muted-foreground">
          <span class="text-red-500 mt-1">✗</span> Geräte sind da, aber Accounts/Policies fehlen.
        </li>
        <li class="flex items-start gap-3 text-muted-foreground">
          <span class="text-red-500 mt-1">✗</span> Security wird „später gemacht“ – und genau das wird teuer.
        </li>
      </ul>

      <h2 id="phases" class="text-3xl font-bold mt-12 mb-8">Der Schnellstart in drei Phasen</h2>

      <div class="space-y-12">
        
        <div id="checklist">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm">1</span>
            Vorab-Check (kurz, aber entscheidend)
          </h3>
          <p class="mb-4 text-muted-foreground">Damit es in 48h klappt, braucht es einen minimalen Input:</p>
          <ul class="list-check pl-6 mb-4 text-muted-foreground space-y-2">
            <li>Standortdaten (Adresse, Übergabetermin, Internetstatus)</li>
            <li>Grobe Nutzerzahl + Gerätetypen</li>
            <li>Meetingraum ja/nein, Drucker ja/nein</li>
            <li>Sonderfälle (z. B. getrennte Bereiche)</li>
          </ul>
          <p class="text-sm text-muted">Any Tec macht daraus einen konkreten Plan: Was wird sofort benötigt, was kann nachgezogen werden.</p>
        </div>

        <div id="setup">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                <span class="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm">2</span>
                Setup & Rollout (der schnelle Teil)
            </h3>
            <p class="mb-4 text-muted-foreground">Hier liegt der Unterschied zwischen „wir probieren mal“ und einem echten Go-Live:</p>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-card/50 p-4 rounded-lg border border-border">
                    <strong class="block mb-1 text-fg">Netzwerk-Basis</strong>
                    <span class="text-sm text-muted">Saubere Struktur statt Chaos</span>
                </div>
                <div class="bg-card/50 p-4 rounded-lg border border-border">
                    <strong class="block mb-1 text-fg">Arbeitsplätze</strong>
                    <span class="text-sm text-muted">Accounts & Geräte ready, kein manuelles Anfassen</span>
                </div>
                <div class="bg-card/50 p-4 rounded-lg border border-border">
                    <strong class="block mb-1 text-fg">Standard-Security</strong>
                    <span class="text-sm text-muted">Keine offenen Admin-Lösungen</span>
                </div>
                <div class="bg-card/50 p-4 rounded-lg border border-border">
                    <strong class="block mb-1 text-fg">WLAN-Setup</strong>
                    <span class="text-sm text-muted">Staff/Guest getrennt & stabil</span>
                </div>
            </div>
        </div>

        <div id="golive">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                <span class="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm">3</span>
                Go-Live & Stabilisierung
            </h3>
            <p class="mb-4 text-muted-foreground">
                Der häufigste Fehler: Nach dem ersten Tag wird die IT sich selbst überlassen. Any Tec begleitet den Go-Live und sorgt dafür, dass:
            </p>
            <ul class="list-disc pl-6 text-muted-foreground space-y-1">
                <li>wichtige Punkte getestet sind</li>
                <li>typische “Day-2-Probleme” schnell gefixt werden</li>
                <li>du einen klaren Support-Flow hast (statt Chaos im Chat)</li>
            </ul>
        </div>
      </div>

      <h2 id="target" class="text-3xl font-bold mt-12 mb-6">Für wen ist das ideal?</h2>
      <p class="mb-6">Der Schnellstart passt besonders gut für:</p>
      <ul class="grid md:grid-cols-2 gap-4 mb-8">
        <li class="flex items-center gap-3 bg-muted2/50 p-3 rounded-lg">
            <span class="text-accent">●</span> Startups & Teams im Umzug
        </li>
        <li class="flex items-center gap-3 bg-muted2/50 p-3 rounded-lg">
            <span class="text-accent">●</span> Kleine bis mittlere Offices
        </li>
        <li class="flex items-center gap-3 bg-muted2/50 p-3 rounded-lg">
            <span class="text-accent">●</span> Franchise/Ketten (Standard-Rollout)
        </li>
        <li class="flex items-center gap-3 bg-muted2/50 p-3 rounded-lg">
            <span class="text-accent">●</span> Unternehmen ohne interne IT-Koordination
        </li>
      </ul>

      <h2 id="addons" class="text-3xl font-bold mt-12 mb-6">Typische Add-ons nach dem 48h-Go-Live</h2>
      <p class="mb-6">
        Viele Anbieter verkaufen dir am Anfang eine „perfekte Endlösung“. In der Realität brauchst du erstmal keine Ausfälle. Danach sind diese Themen relevant:
      </p>
      <ul class="list-disc pl-6 mb-8 text-muted-foreground space-y-2">
        <li>Standort-Standardisierung für weitere Offices</li>
        <li>Feinere Security-Policies & Rollenmodelle</li>
        <li>Zentrale Geräteverwaltung für Wachstum</li>
        <li>Backup/Recovery-Konzept, das wirklich getestet wird</li>
      </ul>

      <h2 id="conclusion" class="text-3xl font-bold mt-12 mb-6">Fazit: Schnell live – ohne später Chaos zu haben</h2>
      <p class="mb-6">
        Ein 48h-Go-Live funktioniert nur, wenn man nicht “irgendwas schnell” macht, sondern die richtigen Dinge in der richtigen Reihenfolge. Genau das liefert Any Tec: ein Schnellstart, der stabil genug ist, um darauf aufzubauen.
      </p>
      
      <div class="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
        <h4 class="font-bold text-lg mb-2">Dein nächster Schritt</h4>
        <p class="text-muted-foreground mb-4">
            Wenn du ein neues Office planst und einen klaren Go-Live brauchst: Any Tec übernimmt den Schnellstart – und du konzentrierst dich auf Team und Betrieb.
        </p>
        <p class="font-medium text-accent">
            👉 Tipp: Leg dir intern nur zwei Dinge zurecht: Übergabetermin + Nutzerzahl. Den Rest klärt Any Tec mit dir im Schnellcheck.
        </p>
      </div>
    `
  },
  {
    id: 7,
    slug: 'hybrid-vs-on-prem-strategy',
    title: 'Hybrid vs. On-Prem: Welche IT-Strategie passt wirklich?',
    description: 'Es geht um Kosten, Betrieb, Sicherheit und Tempo. Ein klarer Vergleich für deine Entscheidung.',
    category: 'Cloud',
    readTime: '12 Min',
    date: '24. Dez 2024',
    badge: 'Neu',
    toc: [
      { id: 'definitions', title: 'Begriffe kurz erklärt' },
      { id: 'criteria', title: 'Die 6 wichtigsten Kriterien' },
      { id: 'scenarios', title: 'Typische Szenarien' },
      { id: 'mistakes', title: 'Häufige Fehler' },
      { id: 'checklist', title: 'Checkliste' },
      { id: 'conclusion', title: 'Fazit' }
    ],
    content: `
      <p class="lead text-xl text-muted mb-8">
        Die Entscheidung „Hybrid oder On-Prem?“ ist selten eine reine Technikfrage. Es geht um Kosten, Betrieb, Sicherheit, Tempo und darum, wie gut deine IT zu deinem Alltag passt.
      </p>

      <h2 id="definitions" class="text-3xl font-bold mt-12 mb-6">Begriffe kurz erklärt</h2>
      
      <div class="mb-8">
        <h3 class="text-xl font-bold mb-2">On-Prem (On-Premises)</h3>
        <p class="mb-4">
          Deine IT läuft überwiegend im eigenen Haus: Server, Storage, Netzwerk, ggf. Virtualisierung (z. B. VMware/Hyper-V), lokale Backups, lokale Identity (z. B. AD), lokale Applikationen.
        </p>
        <ul class="list-disc pl-6 mb-4 text-muted-foreground space-y-1">
          <li><strong>Vorteil:</strong> volle Kontrolle über Hardware/Umgebung.</li>
          <li><strong>Nachteil:</strong> du trägst auch die volle Verantwortung für Betrieb, Updates, Ersatzteile, Skalierung und Notfallkonzepte.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-bold mb-2">Hybrid</h3>
        <p class="mb-4">
          Hybrid bedeutet: lokal + Cloud arbeiten zusammen. Typisch ist: lokale Komponenten dort, wo sie sinnvoll sind (POS, IoT) und Cloud-Dienste für Skalierung und Management.
        </p>
        <ul class="list-disc pl-6 mb-4 text-muted-foreground space-y-1">
          <li><strong>Vorteil:</strong> du kombinierst „schnell & skalierbar“ mit „nah am Standort“.</li>
          <li><strong>Nachteil:</strong> die Komplexität steigt, wenn Architektur und Verantwortlichkeiten nicht sauber definiert sind.</li>
        </ul>
      </div>

      <h2 id="criteria" class="text-3xl font-bold mt-12 mb-6">Was entscheidet wirklich? Die 6 wichtigsten Kriterien</h2>
      
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-semibold mb-2">1) Latenz & Standortnähe</h3>
          <p>On-Prem ist stark bei latenzsensiblen Anwendungen. Hybrid ist ideal, wenn du lokal „kritische Prozesse“ absichern willst, aber zentrale Services konsistent steuern möchtest.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">2) Skalierung & Wachstum</h3>
          <p>On-Prem bedeutet bei Wachstum oft neue Hardware und Vorlaufzeiten. Hybrid glänzt bei Expansion durch zentrale Standards. Für Franchise/Ketten ist Hybrid oft die pragmatischste Option.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">3) Betrieb & Wartung</h3>
          <p>On-Prem heißt Patch-Fenster und Hardware-Lifecycle managen. Hybrid verlagert Teile des Betriebsaufwands und ermöglicht einheitliche Policies und zentrales Monitoring.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">4) Sicherheit & Compliance</h3>
          <p>Sicherheit hängt von der Umsetzung ab. On-Prem erfordert Disziplin (MFA, Patching). Hybrid erleichtert standardisierte Controls (Conditional Access, Compliance), steht und fällt aber mit der sauberen Anbindung.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">5) Kosten: CapEx vs. OpEx</h3>
          <p>Der TCO entscheidet: Berücksichtige Personal, Ausfallkosten, Sicherheitsvorfälle und Lifecycle-Management, nicht nur den Serverpreis.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">6) Business-Continuity</h3>
          <p>On-Prem braucht ein eigenes DR-Konzept. Hybrid erlaubt oft elegantere Optionen wie zentrale Backups und Standort-Failover.</p>
        </div>
      </div>

      <h2 id="scenarios" class="text-3xl font-bold mt-12 mb-6">Typische Szenarien: Was passt besser?</h2>
      
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="bg-card/50 p-6 rounded-xl border border-border">
          <h3 class="text-lg font-bold mb-4 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-accent"></span> On-Prem ist sinnvoll, wenn...</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            <li>du Legacy-Software hast, die schwer zu migrieren ist.</li>
            <li>du spezielle Hardware-Anbindungen brauchst (Produktion).</li>
            <li>du „offline first“ bei instabiler Connection zwingend brauchst.</li>
          </ul>
        </div>
        <div class="bg-card/50 p-6 rounded-xl border border-border">
          <h3 class="text-lg font-bold mb-4 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-blue-500"></span> Hybrid ist sinnvoll, wenn...</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            <li>du mehrere Standorte betreibst oder wachsen willst.</li>
            <li>du standardisierte Rollouts brauchst (Franchise).</li>
            <li>du zentrale Sicherheit & schnelle Bereitstellung willst.</li>
          </ul>
        </div>
      </div>

      <h2 id="mistakes" class="text-3xl font-bold mt-12 mb-6">Häufige Fehler – und wie du sie vermeidest</h2>
      <ul class="space-y-4 mb-8">
        <li class="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
          <strong>Fehler 1: Hybrid ohne klare Zuständigkeiten.</strong><br/>
          Definiere eine klare Service-Boundary (Lokal: Netzwerk / Zentral: Identity).
        </li>
        <li class="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
          <strong>Fehler 2: Keine Segmentierung am Standort.</strong><br/>
          Trenne Staff, Guest, IoT und Payment Netze strikt voneinander.
        </li>
        <li class="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
          <strong>Fehler 3: „Lift & Shift“ ohne Optimierung.</strong><br/>
          Räume erst auf (Rechtekonzept, Altlasten) bevor du migrierst.
        </li>
      </ul>

      <h2 id="checklist" class="text-3xl font-bold mt-12 mb-6">Entscheidungs-Checkliste</h2>
      <p class="mb-4">Beantworte diese Fragen:</p>
      <ul class="list-check pl-6 mb-8 space-y-2 text-muted-foreground">
        <li>Müssen kritische Prozesse auch offline laufen?</li>
        <li>Wie schnell willst du neue Standorte ausrollen?</li>
        <li>Hast du ein verlässliches Team für Patch/Backup/DR?</li>
        <li>Wie hoch ist dein Security-Anspruch (MFA, Logging)?</li>
        <li>Was kostet dich 1 Stunde Ausfall real?</li>
      </ul>

      <h2 id="conclusion" class="text-3xl font-bold mt-12 mb-6">Fazit</h2>
      <p class="mb-6">
        On-Prem kann die richtige Wahl sein, wenn lokale Abhängigkeiten dominieren und du den Betrieb professionell stemmst. 
        Hybrid ist meist die bessere Strategie für Skalierung, Multi-Site-Management und zentrale Sicherheit.
      </p>
      <div class="bg-accent/10 border border-accent/20 p-6 rounded-xl">
        <p class="font-medium text-accent">
          Wenn du willst, kann Any Tec mit dir eine kurze Standort-Analyse machen und einen klaren Plan ableiten: welche Teile lokal bleiben, welche zentral werden.
        </p>
      </div>
    `
  }
];
