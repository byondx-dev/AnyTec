
export interface Article {
  id: number;
  slug: string;
  title: { de: string; en: string };
  description: { de: string; en: string };
  category: { de: string; en: string };
  readTime: { de: string; en: string };
  date: { de: string; en: string };
  badge?: { de: string; en: string };
  toc?: { de: { id: string; title: string }[]; en: { id: string; title: string }[] };
  content: { de: string; en: string }; // HTML string or component placeholder
}

export const articles: Article[] = [
  {
    id: 1,
    slug: 'cloud-blueprint-franchise',
    title: {
      de: 'Cloud-Blueprint für Franchise-Rollouts',
      en: 'Cloud Blueprint for Franchise Rollouts'
    },
    description: {
      de: 'Wie du neue Standorte in Stunden statt Wochen an Microsoft 365 und deine Netzwerke anschließt.',
      en: 'How to connect new locations to Microsoft 365 and your networks in hours instead of weeks.'
    },
    category: { de: 'Cloud', en: 'Cloud' },
    readTime: { de: '7 Min', en: '7 min' },
    date: { de: '01. Okt 2024', en: 'Oct 01, 2024' },
    badge: { de: 'Neu', en: 'New' },
    toc: {
      de: [
        { id: 'intro', title: 'Einleitung' },
        { id: 'problem', title: 'Das Problem mit manuellen Rollouts' },
        { id: 'solution', title: 'Der Cloud-Blueprint Ansatz' },
        { id: 'automation', title: 'Automatisierung mit Intune & Autopilot' },
        { id: 'network', title: 'Netzwerk-Standardisierung' },
        { id: 'conclusion', title: 'Fazit' }
      ],
      en: [
        { id: 'intro', title: 'Introduction' },
        { id: 'problem', title: 'The Problem with Manual Rollouts' },
        { id: 'solution', title: 'The Cloud Blueprint Approach' },
        { id: 'automation', title: 'Automation with Intune & Autopilot' },
        { id: 'network', title: 'Network Standardization' },
        { id: 'conclusion', title: 'Conclusion' }
      ]
    },
    content: {
      de: `
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
      `,
      en: `
        <p class="lead text-xl text-muted mb-8">
          The expansion of a franchise system stands and falls with scalability. If every new location requires individual IT configurations, growth becomes a bottleneck. Here is our blueprint.
        </p>
        <h2 id="intro" class="text-3xl font-bold mt-12 mb-6">Introduction</h2>
        <p class="mb-6">
          Imagine opening 10 new stores per month. If your IT team has to configure servers, patch firewalls, and manually create users for each location, the system collapses. A Cloud Blueprint solves this problem through radical standardization.
        </p>
        <div class="bg-accent/5 border-l-4 border-accent p-6 mb-8 rounded-r-xl">
           <p class="font-medium text-fg">
              <strong>Note:</strong> Full English translation for this technical deep-dive is pending. Please switch to German for the complete technical details.
           </p>
        </div>
      `
    }
  },
  {
    id: 2,
    slug: 'pos-security-vlan',
    title: {
      de: 'POS-Sicherheit: VLAN, Firewall & Payment',
      en: 'POS Security: VLAN, Firewall & Payment'
    },
    description: {
      de: 'Best Practices für getrennte Kassen-Netze und warum PCI-DSS nicht wehtun muss.',
      en: 'Best practices for segmented POS networks and why PCI-DSS doesnt have to hurt.'
    },
    category: { de: 'Security', en: 'Security' },
    readTime: { de: '6 Min', en: '6 min' },
    date: { de: '18. Sep 2024', en: 'Sep 18, 2024' },
    toc: {
      de: [
        { id: 'intro', title: 'Intro: Kasse ist heilig' },
        { id: 'segmentation', title: 'Netzwerk-Segmentierung' },
        { id: 'firewall', title: 'Firewall-Regeln' },
        { id: 'payment', title: 'Payment: So bleibt es sauber' },
        { id: 'conclusion', title: 'Fazit' }
      ],
      en: [
        { id: 'intro', title: 'Intro: POS is Sacred' },
        { id: 'segmentation', title: 'Network Segmentation' },
        { id: 'firewall', title: 'Firewall Rules' },
        { id: 'payment', title: 'Payment: Keeping it Clean' },
        { id: 'conclusion', title: 'Conclusion' }
      ]
    },
    content: {
      de: `
        <p class="lead text-xl text-muted mb-8">
          Das Kassensystem (POS) ist das Herzstück im Retail und in vielen Gastro-Setups. Wenn es ausfällt, steht der Betrieb. Wenn Daten abfließen, wird es richtig teuer: Umsatzverlust, Imageschaden, möglicher Ärger mit Dienstleistern und Audits.
        </p>
        <div class="bg-accent/5 border-l-4 border-accent p-6 mb-8 rounded-r-xl">
          <p class="font-medium text-fg">
            Darum gilt eine Regel ohne Ausnahmen: <strong>Niemals, wirklich niemals, sollte das Kassensystem im gleichen WLAN hängen wie Gäste-WLAN, Sonos-Speaker, Smart-TVs oder sonstige „Bequemlichkeitsgeräte“.</strong>
          </p>
        </div>
        <h2 id="intro" class="text-3xl font-bold mt-12 mb-6">Intro: Kasse ist Prio 1</h2>
        <p class="mb-6">Genau an dieser Stelle scheitern viele Setups: Alles hängt „irgendwie“ zusammen – bis ein Gerät kompromittiert wird und plötzlich der Weg Richtung POS offen ist.</p>
        <h2 id="segmentation" class="text-3xl font-bold mt-12 mb-6">Netzwerk-Segmentierung</h2>
        <p class="mb-4">Der wichtigste POS-Schutz ist nicht „ein gutes Passwort“, sondern saubere Trennung.</p>
        <h2 id="firewall" class="text-3xl font-bold mt-12 mb-6">Firewall-Regeln</h2>
        <p class="mb-6">Segmentierung ohne Firewall-Regeln ist wie Türen ohne Schlösser: Nett, aber wirkungslos.</p>
        <h2 id="payment" class="text-3xl font-bold mt-12 mb-6">Payment: So bleibt es sauber</h2>
        <p class="mb-6">Payment ist ein eigenes Risiko-Universum. Ohne zu tief ins Detail zu gehen: Du willst, dass Payment-Daten so wenig Berührungspunkte wie möglich mit dem restlichen Netz haben.</p>
        <h2 id="conclusion" class="text-3xl font-bold mt-12 mb-6">Fazit</h2>
        <p class="mb-6">POS-Sicherheit ist keine Luxus-Option. Sie ist Betriebsgrundlage.</p>
      `,
      en: `
        <p class="lead text-xl text-muted mb-8">
          The Point of Sale (POS) system is the heart of retail and hospitality setups. If it fails, operations stop. If data leaks, it gets expensive: revenue loss, brand damage, and trouble with providers.
        </p>
        <div class="bg-accent/5 border-l-4 border-accent p-6 mb-8 rounded-r-xl">
           <p class="font-medium text-fg">
              <strong>English Content Pending:</strong> The detailed breakdown of VLANs and Firewall configurations is available in the German version.
           </p>
        </div>
      `
    }
  },
  {
    id: 3,
    slug: 'wlan-retail-scaling',
    title: {
      de: 'WLAN in Retail-Flächen, das wirklich skaliert',
      en: 'Retail Wi-Fi That Truly Scales'
    },
    description: {
      de: 'Von Heatmaps bis Band Steering: ein praxisnaher Guide für stores mit hoher Dichte.',
      en: 'From heatmaps to band steering: a practical guide for high-density stores.'
    },
    category: { de: 'Retail', en: 'Retail' },
    readTime: { de: '9 Min', en: '9 min' },
    date: { de: '05. Sep 2024', en: 'Sep 05, 2024' },
    badge: { de: 'Guide', en: 'Guide' },
    toc: {
      de: [
        { id: 'intro', title: 'Intro' },
        { id: 'difference', title: 'Retail vs. Office' },
        { id: 'failures', title: 'Warum es scheitert' },
        { id: 'meaning', title: 'Was skalierbar heißt' },
        { id: 'blocks', title: 'Die 6 Bausteine' },
        { id: 'check', title: 'Ist dein WLAN fit?' },
        { id: 'conclusion', title: 'Fazit' }
      ],
      en: [
        { id: 'intro', title: 'Intro' },
        { id: 'difference', title: 'Retail vs. Office' },
        { id: 'failures', title: 'Why it Fails' },
        { id: 'meaning', title: 'What Scalable Means' },
        { id: 'blocks', title: 'The 6 Building Blocks' },
        { id: 'check', title: 'Is Your Wi-Fi Fit?' },
        { id: 'conclusion', title: 'Conclusion' }
      ]
    },
    content: {
      de: `
        <p class="lead text-xl text-muted mb-8">
          Ein WLAN kann in einem kleinen Shop “irgendwie funktionieren” – bis es nicht mehr tut. Sobald mehr Geräte dazukommen, zeigt sich schnell, ob das WLAN professionell geplant ist.
        </p>
        <h2 id="difference" class="text-3xl font-bold mt-12 mb-6">Warum Retail-WLAN anders ist als „Büro-WLAN“</h2>
        <p class="mb-4">Retail-Flächen sind ein Spezialfall, weil hier viele Dinge gleichzeitig passieren.</p>
        <h2 id="failures" class="text-3xl font-bold mt-12 mb-6">Die häufigsten Gründe, warum Retail-WLAN „nicht skaliert“</h2>
        <div class="space-y-6 mb-8">
            <h3 class="text-xl font-bold mb-2">1) „Ein Router reicht“ (Der Klassiker)</h3>
            <p>Ein einzelnes Gerät im falschen Winkel kann in einem kleinen Raum ok sein – in einer Verkaufsfläche mit Lager/Backoffice fast nie.</p>
        </div>
        <h2 id="meaning" class="text-3xl font-bold mt-12 mb-6">Was „WLAN, das skaliert“ eigentlich bedeutet</h2>
        <p class="mb-4">Skalierbar heißt nicht nur: “mehr Geräte gehen auch noch”.</p>
        <h2 id="blocks" class="text-3xl font-bold mt-12 mb-8">Die 6 Bausteine eines professionellen Retail-WLANs</h2>
        <p>Planung, Abdeckung, Rollenkonzepte, Stabilität, Monitoring, Standardisierung.</p>
        <h2 id="check" class="text-3xl font-bold mt-12 mb-6">Check: Ist dein WLAN fit?</h2>
        <p>Läuft POS stabil? Kannst du neue Geräte adden?</p>
        <h2 id="conclusion" class="text-3xl font-bold mt-12 mb-6">Fazit</h2>
        <p class="mb-6">Retail-WLAN ist eine Umsatzkomponente.</p>
      `,
      en: `
         <p class="lead text-xl text-muted mb-8">
          Wi-Fi in a small shop might "sort of work" – untill it doesn't. As devices pile up, you quickly see professional planning vs. improvisation.
        </p>
         <h2 id="intro" class="text-3xl font-bold mt-12 mb-6">Introduction</h2>
         <p class="text-muted italic">Full article translation pending.</p>
      `
    }
  },
  {
    id: 4,
    slug: 'zero-trust-sme',
    title: {
      de: 'Zero Trust light für KMU',
      en: 'Zero Trust Light for SMBs'
    },
    description: {
      de: 'So startest du mit Conditional Access, MFA und Device Compliance ohne Overhead.',
      en: 'How to start with Conditional Access, MFA, and Device Compliance without the overhead.'
    },
    category: { de: 'Security', en: 'Security' },
    readTime: { de: '5 Min', en: '5 min' },
    date: { de: '22. Aug 2024', en: 'Aug 22, 2024' },
    toc: {
      de: [
        { id: 'intro', title: 'Intro: Zero Trust light' },
        { id: 'why', title: 'Warum „light“ statt „komplett“?' },
        { id: 'mfa', title: '1) MFA – sinnvoll' },
        { id: 'conditional', title: '2) Conditional Access' },
        { id: 'compliance', title: '3) Device Compliance' },
        { id: 'rollout', title: 'Der 5-Schritte-Rollout' },
        { id: 'conclusion', title: 'Fazit' }
      ],
      en: [
        { id: 'intro', title: 'Intro: Zero Trust Light' },
        { id: 'why', title: 'Why "Light"?' },
        { id: 'mfa', title: '1) MFA - Done Right' },
        { id: 'conditional', title: '2) Conditional Access' },
        { id: 'compliance', title: '3) Device Compliance' },
        { id: 'rollout', title: '5-Step Rollout' },
        { id: 'conclusion', title: 'Conclusion' }
      ]
    },
    content: {
      de: `
        <p class="lead text-xl text-muted mb-8">Zero Trust klingt nach „Enterprise-Projekt“. In der Praxis geht’s aber um etwas sehr Einfaches: Vertrauen wird nicht vorausgesetzt.</p>
        <h2 id="why" class="text-3xl font-bold mt-12 mb-6">Warum „Zero Trust light“ statt „Zero Trust komplett“?</h2>
        <p>Viele KMU scheitern, weil sie zu groß starten.</p>
        <h2 class="text-3xl font-bold mt-12 mb-8">Die drei Bausteine</h2>
        <p>MFA, Conditional Access, Device Compliance.</p>
        <h2 id="rollout" class="text-3xl font-bold mt-12 mb-6">Der pragmatische Rollout in 5 Schritten</h2>
        <p>Audit, MFA, CA MVP, Compliance Gate, Monitoring.</p>
        <h2 id="conclusion" class="text-3xl font-bold mt-12 mb-6">Fazit</h2>
        <p>Zero Trust muss nicht groß anfangen.</p>
       `,
      en: `
         <p class="lead text-xl text-muted mb-8">Zero Trust sounds like an enterprise project. But practically, it's simple: Trust is never assumed.</p>
         <p class="text-muted italic">Full translation pending.</p>
       `
    }
  },
  {
    id: 5,
    slug: 'hybrid-cloud-setup',
    title: {
      de: 'Hybrid-Setup: Cloud gesteuert, lokal resilient',
      en: 'Hybrid Setup: Cloud Controlled, Locally Resilient'
    },
    description: {
      de: 'Ein Architektur-Muster, das Cloud-Komfort mit lokaler Ausfallsicherheit kombiniert.',
      en: 'An architecture pattern combining cloud convenience with local resilience.'
    },
    category: { de: 'Cloud', en: 'Cloud' },
    readTime: { de: '8 Min', en: '8 min' },
    date: { de: '10. Aug 2024', en: 'Aug 10, 2024' },
    toc: {
      de: [
        { id: 'intro', title: 'Intro' },
        { id: 'cloud-controlled', title: 'Was „Cloud gesteuert“ heißt' },
        { id: 'local-resilient', title: 'Was „lokal resilient“ heißt' },
        { id: 'conclusion', title: 'Fazit' }
      ],
      en: [
        { id: 'intro', title: 'Intro' },
        { id: 'cloud-controlled', title: 'What "Cloud Controlled" Means' },
        { id: 'local-resilient', title: 'What "Locally Resilient" Means' },
        { id: 'conclusion', title: 'Conclusion' }
      ]
    },
    content: {
      de: `
        <p class="lead text-xl text-muted mb-8">Ein gutes Hybrid-Setup ist nicht „halb Cloud, halb lokal“. Es ist ein Betriebsmodell.</p>
        <h2 id="cloud-controlled" class="text-3xl font-bold mt-12 mb-6">Was bedeutet „Cloud gesteuert“?</h2>
        <p>Einheitliche Identität, zentrale Standards.</p>
        <h2 id="local-resilient" class="text-3xl font-bold mt-12 mb-6">Was bedeutet „lokal resilient“?</h2>
        <p>Standort kann weiterarbeiten, auch offline.</p>
        <h2 id="conclusion" class="text-3xl font-bold mt-12 mb-6">Fazit</h2>
        <p>Das Beste aus zwei Welten.</p>
       `,
      en: `
         <p class="lead text-xl text-muted mb-8">A good hybrid setup isn't "half cloud, half local". It's an operating model.</p>
         <p class="text-muted italic">Full translation pending.</p>
       `
    }
  },
  {
    id: 6,
    slug: 'office-rollout-48h',
    title: {
      de: 'Schnellstart: Neues Office in 48h live',
      en: 'Quickstart: New Office Live in 48h'
    },
    description: {
      de: 'Checkliste und Toolkit für Netzwerk, Devices und Identitäten in Rekordzeit.',
      en: 'Checklist and toolkit for network, devices, and identities in record time.'
    },
    category: { de: 'How-To', en: 'How-To' },
    readTime: { de: '4 Min', en: '4 min' },
    date: { de: '28. Jul 2024', en: 'Jul 28, 2024' },
    toc: {
      de: [
        { id: 'checklist', title: 'Vorab-Check' },
        { id: 'setup', title: 'Setup & Rollout' },
        { id: 'golive', title: 'Go-Live & Stabilisierung' },
        { id: 'conclusion', title: 'Fazit' }
      ],
      en: [
        { id: 'checklist', title: 'Pre-Check' },
        { id: 'setup', title: 'Setup & Rollout' },
        { id: 'golive', title: 'Go-Live & Stabilization' },
        { id: 'conclusion', title: 'Conclusion' }
      ]
    },
    content: {
      de: `
        <p class="lead text-xl text-muted mb-8">Ein neues Office zu eröffnen ist oft ein Rennen gegen die Zeit.</p>
        <h2 id="checklist" class="text-3xl font-bold mt-12 mb-6">Vorab-Check</h2>
        <p>Minimaler Input für schnellen Plan.</p>
        <h2 id="setup" class="text-3xl font-bold mt-12 mb-6">Setup & Rollout</h2>
        <p>Netzwerk-Basis, Arbeitsplätze, Standard-Security.</p>
        <h2 id="golive" class="text-3xl font-bold mt-12 mb-6">Go-Live</h2>
        <p>Begleiteter Start.</p>
       `,
      en: `
         <p class="lead text-xl text-muted mb-8">Opening a new office is often a race against time.</p>
         <p class="text-muted italic">Full translation pending.</p>
       `
    }
  },
  {
    id: 7,
    slug: 'hybrid-vs-on-prem-strategy',
    title: {
      de: 'Hybrid vs. On-Prem: Welche IT-Strategie passt wirklich?',
      en: 'Hybrid vs. On-Prem: Which Strategy Fits?'
    },
    description: {
      de: 'Es geht um Kosten, Betrieb, Sicherheit und Tempo. Ein klarer Vergleich.',
      en: 'Its about cost, operations, security, and speed. A clear comparison.'
    },
    category: { de: 'Cloud', en: 'Cloud' },
    readTime: { de: '12 Min', en: '12 min' },
    date: { de: '24. Dez 2024', en: 'Dec 24, 2024' },
    badge: { de: 'Neu', en: 'New' },
    toc: {
      de: [
        { id: 'criteria', title: 'Kriterien' },
        { id: 'scenarios', title: 'Szenarien' },
        { id: 'conclusion', title: 'Fazit' }
      ],
      en: [
        { id: 'criteria', title: 'Criteria' },
        { id: 'scenarios', title: 'Scenarios' },
        { id: 'conclusion', title: 'Conclusion' }
      ]
    },
    content: {
      de: `
        <p class="lead text-xl text-muted mb-8">Die Entscheidung Hybrid vs. On-Prem ist selten eine reine Technikfrage.</p>
        <h2 id="criteria" class="text-3xl font-bold mt-12 mb-6">Kriterien</h2>
        <p>Latenz, Skalierung, Betrieb, Security.</p>
        <h2 id="conclusion" class="text-3xl font-bold mt-12 mb-6">Fazit</h2>
        <p>On-Prem für lokale Dominanz, Hybrid für Skalierung.</p>
       `,
      en: `
         <p class="lead text-xl text-muted mb-8">The decision Hybrid vs. On-Prem is rarely just technical.</p>
         <p class="text-muted italic">Full translation pending.</p>
       `
    }
  }
];
