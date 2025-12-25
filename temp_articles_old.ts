
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
      { id: 'firewall', title: 'Firewall Regeln' }
    ],
    content: `
      <p class="lead text-xl text-muted mb-8">
        Das Kassensystem (POS) ist das Herzstück des Retail. Fällt es aus oder werden Daten geklaut, ist der Schaden immens.
      </p>
      <h2 id="intro" class="text-3xl font-bold mt-12 mb-6">Intro: Kasse ist heilig</h2>
      <p class="mb-6">Niemals, wirklich niemals, sollte das Kassensystem im gleichen WLAN hängen wie das Gäste-WLAN oder die Sonos-Speaker.</p>
       <h2 id="segmentation" class="text-3xl font-bold mt-12 mb-6">Netzwerk-Segmentierung</h2>
      <p class="mb-6">Wir nutzen VLANs (Virtual Local Area Networks), um den Datenverkehr strikt zu trennen.</p>
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
    toc: [{ id: 'intro', title: 'Intro' }], content: '<p>Content placeholder...</p>'
  },
  {
    id: 4,
    slug: 'zero-trust-sme',
    title: 'Zero Trust light für KMU',
    description: 'So startest du mit Conditional Access, MFA und Device Compliance ohne Overhead.',
    category: 'Security',
    readTime: '5 Min',
    date: '22. Aug 2024',
    toc: [{ id: 'intro', title: 'Intro' }], content: '<p>Content placeholder...</p>'
  },
  {
    id: 5,
    slug: 'hybrid-cloud-setup',
    title: 'Hybrid-Setup: Cloud gesteuert, lokal resilient',
    description: 'Ein Architektur-Muster, das Cloud-Komfort mit lokaler Ausfallsicherheit kombiniert.',
    category: 'Cloud',
    readTime: '8 Min',
    date: '10. Aug 2024',
    toc: [{ id: 'intro', title: 'Intro' }], content: '<p>Content placeholder...</p>'
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
