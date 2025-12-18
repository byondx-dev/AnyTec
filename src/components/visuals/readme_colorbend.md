# ColorBends Documentation

Dieses Dokument beschreibt die Konfiguration und Anpassung des `ColorBends` Hintergrundeffekts.

## Verwendete Dateien

1.  **Nutzung & Konfiguration**: [ReadyToWorkSection.tsx](../home/ReadyToWorkSection.tsx)
2.  **Komponente & Shader**: [ColorBends.tsx](./ColorBends.tsx)
3.  **Styles**: [ColorBends.css](./ColorBends.css)

---

## Anpassungen

### 1. Farben ändern
Die Farben werden direkt bei der Verwendung der Komponente als `colors` Array übergeben.
Um die Farben zu ändern, bearbeite das `colors` Array in der `ReadyToWorkSection` Komponente.

*   **Datei**: [ReadyToWorkSection.tsx](../home/ReadyToWorkSection.tsx#L183)
    *(Suche nach `<ColorBends`)*

```tsx
<ColorBends
  colors={['#37d7ffff', '#0062d1ff', '#00ffd1']} // Hier Farben ändern
  // ...
/>
```

### 2. Verschwommenheit & Ränder (Vignette)
Damit die Streifen nicht hart an den Rändern des Bereichs enden, wird eine **Maske** (`maskImage`) verwendet.
Diese verblasst den Inhalt zu den Rändern hin.

*   **Einstellung**: `maskImage: 'radial-gradient(...)'`
*   **Datei**: [ReadyToWorkSection.tsx](../home/ReadyToWorkSection.tsx#L177)

```tsx
style={{
  // 'black 50%' bedeutet: Der innere Bereich (50%) ist voll sichtbar.
  // 'transparent 100%' bedeutet: Am Rand (100%) ist es komplett unsichtbar.
  maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)',
  // ...
}}
```
*Um den sichtbaren Bereich zu vergrößern, erhöhe `50%`. Um ihn weicher zu machen, verringere `50%`.*

### 3. Helligkeit & Leuchteffekt (Dark Mode)
Im Dark Mode nutzen wir `mixBlendMode: 'screen'` und deaktivieren die Transparenz, damit die Farben auf dem dunklen Hintergrund "leuchten".

*   **Logik**: [ReadyToWorkSection.tsx](../home/ReadyToWorkSection.tsx#L179)

```tsx
mixBlendMode: theme === 'light' ? 'normal' : 'screen' // 'screen' lässt Farben leuchten
// ...
transparent={theme === 'light'} // 'false' im Dark Mode für satte Farben
```

### 4. Geschwindigkeit & Bewegung
Die Bewegung wird durch `speed`, `frequency` und `warpStrength` gesteuert.

*   **Einstellungen**: [ReadyToWorkSection.tsx](../home/ReadyToWorkSection.tsx#L184-L187)

```tsx
speed={0.3}        // Geschwindigkeit der Animation
scale={1.2}        // Zoom-Faktor
frequency={1.4}    // Wie viele "Wellen" sichtbar sind
warpStrength={1.2} // Wie stark die Verzerrung ist
```
