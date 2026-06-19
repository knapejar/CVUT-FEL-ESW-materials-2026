# ESW – Efektivní software (B4M36ESW) · studijní materiály ke zkoušce

Kompletní studijní materiály k předmětu **B4M36ESW – Efektivní software** (FEL ČVUT) ve formě
provázaných HTML stránek. Vysvětlují obsah předmětu po jednotlivých přednáškách, obsahují klíčové
pojmy a zkouškové otázky s odpověďmi.

## 📖 Jak prohlížet

Repozitář je **privátní**, takže veřejný web (GitHub Pages) zatím není zapnutý. Materiály otevřeš
lokálně: naklonuj/stáhni repo a otevři **`index.html`** v prohlížeči – odtud se proklikáš na všechny
přednášky i stránku zkoušky.

> 💡 Veřejnou živou verzi lze kdykoli zapnout přepnutím repozitáře na *public* (pak poběží na
> `https://knapejar.github.io/CVUT-FEL-ESW-materials-2026/`), případně s plánem GitHub Pro i u
> privátního repa.

## 📚 Obsah

Materiály kopírují dvě linie předmětu, které odpovídají i dvěma částem zkouškové písemky:

**C/C++ část** (nativní svět)
- P1 – Úvod a architektura počítače
- P2 – Bentleyho pravidla, kompilátor, profiling
- P3 – Benchmarking, statistika, WCET
- P4 – Škálovatelná synchronizace (RCU)
- P5 – Přístup do paměti: cache a NUMA
- P6 – Serializace
- P12 – Virtualizace (IOMMU, SR-IOV, virtio)

**Java/JVM část** (managed svět)
- P7 – Běh programu, JVM, JIT
- P8 – Konkurence dat v JVM
- P9 – Efektivní servery, C10k
- P10 – JVM: analýza paměti a kolekce
- P11 – JVM: alokace objektů, reference
- P13 – Správa paměti a garbage collectory

Plus **`zkouska.html`** – formát a bodování, vzorové zkoušky s rozbory, další zkouškové otázky
a doporučený postup přípravy.

## 🗂️ Struktura souborů

```
index.html                 ← rozcestník + přehled předmětu a zkoušky
01-…html … 13-…html        ← jedna stránka na přednášku
zkouska.html               ← souhrn ke zkoušce
styl.css                   ← společný styl
BUG_LOG.md                 ← záznam revizí a oprav
```

## ✅ Jak vznikly

Materiály byly sestaveny z veřejných materiálů předmětu FEL ČVUT (přednášky, cvičení a oficiální
vzorové zkoušky) a prošly třemi iteracemi revize: faktickou kontrolou proti
zdrojům a dvěma koly jazykové a kvalitativní korektury.

## 📎 Zdroj

Postaveno na materiálech předmětu B4M36ESW – <https://esw.pages.fel.cvut.cz>.
Určeno ke studijním účelům.
