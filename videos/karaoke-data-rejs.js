window.KARAOKE = {
  "song": "Data Rejs",
  "title": "Data race, volatile a dvě atomiky",
  "source": "02-data-race-volatile.md",
  "language": "cs",
  "duration_ms": 207180,
  "lines": [
    {
      "start_ms": 0,
      "end_ms": 5300,
      "text": "Dvě vlákna, jedno místo v paměti,",
      "words": [
        {
          "w": "Dvě",
          "start_ms": 0,
          "end_ms": 600
        },
        {
          "w": "vlákna,",
          "start_ms": 600,
          "end_ms": 2060
        },
        {
          "w": "jedno",
          "start_ms": 2060,
          "end_ms": 2800
        },
        {
          "w": "místo",
          "start_ms": 2800,
          "end_ms": 3640
        },
        {
          "w": "v",
          "start_ms": 3640,
          "end_ms": 3820
        },
        {
          "w": "paměti,",
          "start_ms": 3820,
          "end_ms": 5300
        }
      ]
    },
    {
      "start_ms": 5300,
      "end_ms": 11280,
      "text": "jedno z nich zapisuje a nikdo to nehlídá.",
      "words": [
        {
          "w": "jedno",
          "start_ms": 5300,
          "end_ms": 6060
        },
        {
          "w": "z",
          "start_ms": 6060,
          "end_ms": 6210
        },
        {
          "w": "nich",
          "start_ms": 6210,
          "end_ms": 6820
        },
        {
          "w": "zapisuje",
          "start_ms": 6820,
          "end_ms": 8040
        },
        {
          "w": "a",
          "start_ms": 8040,
          "end_ms": 8190
        },
        {
          "w": "nikdo",
          "start_ms": 8190,
          "end_ms": 8950
        },
        {
          "w": "to",
          "start_ms": 8950,
          "end_ms": 9240
        },
        {
          "w": "nehlídá.",
          "start_ms": 9240,
          "end_ms": 11280
        }
      ]
    },
    {
      "start_ms": 25100,
      "end_ms": 29000,
      "text": "Data race vznikne, když platí tři věci najednou, sdílené místo,",
      "words": [
        {
          "w": "Data",
          "start_ms": 25100,
          "end_ms": 25460
        },
        {
          "w": "race",
          "start_ms": 25460,
          "end_ms": 25720
        },
        {
          "w": "vznikne,",
          "start_ms": 25720,
          "end_ms": 26320
        },
        {
          "w": "když",
          "start_ms": 26320,
          "end_ms": 26620
        },
        {
          "w": "platí",
          "start_ms": 26620,
          "end_ms": 26980
        },
        {
          "w": "tři",
          "start_ms": 26980,
          "end_ms": 27110
        },
        {
          "w": "věci",
          "start_ms": 27110,
          "end_ms": 27420
        },
        {
          "w": "najednou,",
          "start_ms": 27420,
          "end_ms": 28120
        },
        {
          "w": "sdílené",
          "start_ms": 28120,
          "end_ms": 28610
        },
        {
          "w": "místo,",
          "start_ms": 28610,
          "end_ms": 29000
        }
      ]
    },
    {
      "start_ms": 29000,
      "end_ms": 31880,
      "text": "aspoň jeden zápis a žádné synchro mezi tím.",
      "words": [
        {
          "w": "aspoň",
          "start_ms": 29000,
          "end_ms": 29420
        },
        {
          "w": "jeden",
          "start_ms": 29420,
          "end_ms": 29770
        },
        {
          "w": "zápis",
          "start_ms": 29770,
          "end_ms": 30190
        },
        {
          "w": "a",
          "start_ms": 30190,
          "end_ms": 30260
        },
        {
          "w": "žádné",
          "start_ms": 30260,
          "end_ms": 30820
        },
        {
          "w": "synchro",
          "start_ms": 30820,
          "end_ms": 31310
        },
        {
          "w": "mezi",
          "start_ms": 31310,
          "end_ms": 31590
        },
        {
          "w": "tím.",
          "start_ms": 31590,
          "end_ms": 31880
        }
      ]
    },
    {
      "start_ms": 31880,
      "end_ms": 35340,
      "text": "A navrch ti procesor i JIT můžou pořadí přehodit,",
      "words": [
        {
          "w": "A",
          "start_ms": 31880,
          "end_ms": 31950
        },
        {
          "w": "navrch",
          "start_ms": 31950,
          "end_ms": 32330
        },
        {
          "w": "ti",
          "start_ms": 32330,
          "end_ms": 32480
        },
        {
          "w": "procesor",
          "start_ms": 32480,
          "end_ms": 33180
        },
        {
          "w": "i",
          "start_ms": 33180,
          "end_ms": 33400
        },
        {
          "w": "JIT",
          "start_ms": 33400,
          "end_ms": 33920
        },
        {
          "w": "můžou",
          "start_ms": 33920,
          "end_ms": 34520
        },
        {
          "w": "pořadí",
          "start_ms": 34520,
          "end_ms": 35340
        }
      ]
    },
    {
      "start_ms": 35340,
      "end_ms": 39660,
      "text": "přehodit, co jsi zapsal dřív, druhé vlákno klidně uvidí pozdě.",
      "words": [
        {
          "w": "přehodit,",
          "start_ms": 35340,
          "end_ms": 35500
        },
        {
          "w": "co",
          "start_ms": 35500,
          "end_ms": 35740
        },
        {
          "w": "jsi",
          "start_ms": 35740,
          "end_ms": 36150
        },
        {
          "w": "zapsal",
          "start_ms": 36150,
          "end_ms": 36800
        },
        {
          "w": "dřív,",
          "start_ms": 36800,
          "end_ms": 37290
        },
        {
          "w": "druhé",
          "start_ms": 37290,
          "end_ms": 37940
        },
        {
          "w": "vlákno",
          "start_ms": 37940,
          "end_ms": 38510
        },
        {
          "w": "klidně",
          "start_ms": 38510,
          "end_ms": 39000
        },
        {
          "w": "uvidí",
          "start_ms": 39000,
          "end_ms": 39660
        }
      ]
    },
    {
      "start_ms": 39660,
      "end_ms": 43420,
      "text": "pozdě. Výsledek je nepředvídatelný, pokaždé trochu jiný,",
      "words": [
        {
          "w": "pozdě.",
          "start_ms": 39660,
          "end_ms": 40320
        },
        {
          "w": "Výsledek",
          "start_ms": 40320,
          "end_ms": 40420
        },
        {
          "w": "je",
          "start_ms": 40420,
          "end_ms": 40470
        },
        {
          "w": "nepředvídatelný,",
          "start_ms": 40470,
          "end_ms": 41950
        },
        {
          "w": "pokaždé",
          "start_ms": 41950,
          "end_ms": 42540
        },
        {
          "w": "trochu",
          "start_ms": 42540,
          "end_ms": 42980
        },
        {
          "w": "jiný,",
          "start_ms": 42980,
          "end_ms": 43420
        }
      ]
    },
    {
      "start_ms": 43420,
      "end_ms": 47280,
      "text": "a chyba vyskočí jen občas, špatně se reprodukuje.",
      "words": [
        {
          "w": "a",
          "start_ms": 43420,
          "end_ms": 43500
        },
        {
          "w": "chyba",
          "start_ms": 43500,
          "end_ms": 43910
        },
        {
          "w": "vyskočí",
          "start_ms": 43910,
          "end_ms": 44630
        },
        {
          "w": "jen",
          "start_ms": 44630,
          "end_ms": 44870
        },
        {
          "w": "občas,",
          "start_ms": 44870,
          "end_ms": 45630
        },
        {
          "w": "špatně",
          "start_ms": 45630,
          "end_ms": 46150
        },
        {
          "w": "se",
          "start_ms": 46150,
          "end_ms": 46310
        },
        {
          "w": "reprodukuje.",
          "start_ms": 46310,
          "end_ms": 47280
        }
      ]
    },
    {
      "start_ms": 47280,
      "end_ms": 51760,
      "text": "Bránit se dá třemi způsoby, vyber si jeden,",
      "words": [
        {
          "w": "Bránit",
          "start_ms": 47280,
          "end_ms": 48020
        },
        {
          "w": "se,",
          "start_ms": 48020,
          "end_ms": 48440
        },
        {
          "w": "dá",
          "start_ms": 48440,
          "end_ms": 48870
        },
        {
          "w": "třemi",
          "start_ms": 48870,
          "end_ms": 49290
        },
        {
          "w": "způsoby,",
          "start_ms": 49290,
          "end_ms": 50340
        },
        {
          "w": "vyber",
          "start_ms": 50340,
          "end_ms": 50870
        },
        {
          "w": "si",
          "start_ms": 50870,
          "end_ms": 51080
        },
        {
          "w": "jeden,",
          "start_ms": 51080,
          "end_ms": 51760
        }
      ]
    },
    {
      "start_ms": 53240,
      "end_ms": 57640,
      "text": "volatile, zámek, nebo atomická operace.",
      "words": [
        {
          "w": "volatile,",
          "start_ms": 53240,
          "end_ms": 54120
        },
        {
          "w": "zámek,",
          "start_ms": 54120,
          "end_ms": 54900
        },
        {
          "w": "nebo",
          "start_ms": 54900,
          "end_ms": 55360
        },
        {
          "w": "atomická",
          "start_ms": 55360,
          "end_ms": 56400
        },
        {
          "w": "operace.",
          "start_ms": 56400,
          "end_ms": 57640
        }
      ]
    },
    {
      "start_ms": 57640,
      "end_ms": 63340,
      "text": "Data race, sdílené místo a aspoň jeden zápis,",
      "words": [
        {
          "w": "Data",
          "start_ms": 57640,
          "end_ms": 58940
        },
        {
          "w": "race,",
          "start_ms": 58940,
          "end_ms": 60400
        },
        {
          "w": "sdílené",
          "start_ms": 60400,
          "end_ms": 61120
        },
        {
          "w": "místo,",
          "start_ms": 61120,
          "end_ms": 61810
        },
        {
          "w": "aspoň",
          "start_ms": 61810,
          "end_ms": 62310
        },
        {
          "w": "jeden",
          "start_ms": 62310,
          "end_ms": 62750
        },
        {
          "w": "zápis,",
          "start_ms": 62750,
          "end_ms": 63340
        }
      ]
    },
    {
      "start_ms": 63340,
      "end_ms": 68540,
      "text": "bez synchronizace se ti výsledek rozsype.",
      "words": [
        {
          "w": "bez",
          "start_ms": 63340,
          "end_ms": 63760
        },
        {
          "w": "synchronizace",
          "start_ms": 63760,
          "end_ms": 65620
        },
        {
          "w": "se",
          "start_ms": 65620,
          "end_ms": 65900
        },
        {
          "w": "ti",
          "start_ms": 65900,
          "end_ms": 66180
        },
        {
          "w": "výsledek",
          "start_ms": 66180,
          "end_ms": 67450
        },
        {
          "w": "rozsype.",
          "start_ms": 67450,
          "end_ms": 68540
        }
      ]
    },
    {
      "start_ms": 68540,
      "end_ms": 74240,
      "text": "Obrana je jasná, řekni ji u zkoušky hned,",
      "words": [
        {
          "w": "Obrana",
          "start_ms": 68540,
          "end_ms": 69450
        },
        {
          "w": "je",
          "start_ms": 69450,
          "end_ms": 69750
        },
        {
          "w": "jasná,",
          "start_ms": 69750,
          "end_ms": 70950
        },
        {
          "w": "řekni",
          "start_ms": 70950,
          "end_ms": 71850
        },
        {
          "w": "ji",
          "start_ms": 71850,
          "end_ms": 72150
        },
        {
          "w": "u",
          "start_ms": 72150,
          "end_ms": 72300
        },
        {
          "w": "zkoušky",
          "start_ms": 72300,
          "end_ms": 73510
        },
        {
          "w": "hned,",
          "start_ms": 73510,
          "end_ms": 74240
        }
      ]
    },
    {
      "start_ms": 74240,
      "end_ms": 80640,
      "text": "volatile, zámek, nebo atomika, CAS a fetch-and-add.",
      "words": [
        {
          "w": "volatile,",
          "start_ms": 74240,
          "end_ms": 75430
        },
        {
          "w": "zámek,",
          "start_ms": 75430,
          "end_ms": 76450
        },
        {
          "w": "nebo",
          "start_ms": 76450,
          "end_ms": 77130
        },
        {
          "w": "atomika,",
          "start_ms": 77130,
          "end_ms": 78330
        },
        {
          "w": "CAS",
          "start_ms": 78330,
          "end_ms": 79180
        },
        {
          "w": "fetch-and-add.",
          "start_ms": 79180,
          "end_ms": 80640
        }
      ]
    },
    {
      "start_ms": 81540,
      "end_ms": 88400,
      "text": "Volatile dá jedné proměnné viditelnost a pořadí, čte i zapisuje z hlavní paměti, kolem se nic nepřehází.",
      "words": [
        {
          "w": "Volatile",
          "start_ms": 81540,
          "end_ms": 82000
        },
        {
          "w": "dá",
          "start_ms": 82000,
          "end_ms": 82200
        },
        {
          "w": "jedné",
          "start_ms": 82200,
          "end_ms": 82600
        },
        {
          "w": "proměnné",
          "start_ms": 82600,
          "end_ms": 82990
        },
        {
          "w": "viditelnost",
          "start_ms": 82990,
          "end_ms": 83960
        },
        {
          "w": "a",
          "start_ms": 83960,
          "end_ms": 84030
        },
        {
          "w": "pořadí,",
          "start_ms": 84030,
          "end_ms": 84850
        },
        {
          "w": "čte",
          "start_ms": 84850,
          "end_ms": 85120
        },
        {
          "w": "i",
          "start_ms": 85120,
          "end_ms": 85170
        },
        {
          "w": "zapisuje",
          "start_ms": 85170,
          "end_ms": 85680
        },
        {
          "w": "z",
          "start_ms": 85680,
          "end_ms": 85740
        },
        {
          "w": "hlavní",
          "start_ms": 85740,
          "end_ms": 86180
        },
        {
          "w": "paměti,",
          "start_ms": 86180,
          "end_ms": 86800
        },
        {
          "w": "kolem",
          "start_ms": 86800,
          "end_ms": 87110
        },
        {
          "w": "se",
          "start_ms": 87110,
          "end_ms": 87230
        },
        {
          "w": "nic",
          "start_ms": 87230,
          "end_ms": 87420
        },
        {
          "w": "nepřehází.",
          "start_ms": 87420,
          "end_ms": 88400
        }
      ]
    },
    {
      "start_ms": 88400,
      "end_ms": 92120,
      "text": "Na počítadle plus plus ale volatile nestačí.",
      "words": [
        {
          "w": "Na",
          "start_ms": 88400,
          "end_ms": 88560
        },
        {
          "w": "počítadle",
          "start_ms": 88560,
          "end_ms": 89440
        },
        {
          "w": "plus",
          "start_ms": 89440,
          "end_ms": 89760
        },
        {
          "w": "plus,",
          "start_ms": 89760,
          "end_ms": 90240
        },
        {
          "w": "ale",
          "start_ms": 90240,
          "end_ms": 90480
        },
        {
          "w": "volatile",
          "start_ms": 90480,
          "end_ms": 91120
        },
        {
          "w": "nestačí.",
          "start_ms": 91120,
          "end_ms": 92120
        }
      ]
    },
    {
      "start_ms": 92120,
      "end_ms": 97860,
      "text": "Read-modify-write jsou tři kroky, mezi ně se vlákno vklíní a počítadlo zhatí.",
      "words": [
        {
          "w": "Read-modify-write",
          "start_ms": 92120,
          "end_ms": 93120
        },
        {
          "w": "jsou",
          "start_ms": 93120,
          "end_ms": 93790
        },
        {
          "w": "tři",
          "start_ms": 93790,
          "end_ms": 94320
        },
        {
          "w": "kroky,",
          "start_ms": 94320,
          "end_ms": 94620
        },
        {
          "w": "mezi",
          "start_ms": 94620,
          "end_ms": 94850
        },
        {
          "w": "ně",
          "start_ms": 94850,
          "end_ms": 95000
        },
        {
          "w": "se",
          "start_ms": 95000,
          "end_ms": 95510
        },
        {
          "w": "vlákno",
          "start_ms": 95510,
          "end_ms": 95580
        },
        {
          "w": "vklíní",
          "start_ms": 95580,
          "end_ms": 96110
        },
        {
          "w": "a",
          "start_ms": 96110,
          "end_ms": 96180
        },
        {
          "w": "počítadlo",
          "start_ms": 96180,
          "end_ms": 97010
        },
        {
          "w": "zhatí.",
          "start_ms": 97010,
          "end_ms": 97860
        }
      ]
    },
    {
      "start_ms": 97860,
      "end_ms": 105370,
      "text": "Na x86 je volatile zápis lock addl na zásobník, to ti staví bariéru,",
      "words": [
        {
          "w": "Na",
          "start_ms": 97860,
          "end_ms": 98080
        },
        {
          "w": "x86",
          "start_ms": 98080,
          "end_ms": 98870
        },
        {
          "w": "je",
          "start_ms": 98870,
          "end_ms": 99090
        },
        {
          "w": "volatile",
          "start_ms": 99090,
          "end_ms": 99980
        },
        {
          "w": "zápis,",
          "start_ms": 99980,
          "end_ms": 100870
        },
        {
          "w": "lock",
          "start_ms": 100870,
          "end_ms": 101300
        },
        {
          "w": "addl",
          "start_ms": 101300,
          "end_ms": 101740
        },
        {
          "w": "na",
          "start_ms": 101740,
          "end_ms": 101870
        },
        {
          "w": "zásobník.",
          "start_ms": 101870,
          "end_ms": 103460
        },
        {
          "w": "To",
          "start_ms": 103460,
          "end_ms": 103730
        },
        {
          "w": "ti",
          "start_ms": 103730,
          "end_ms": 103910
        },
        {
          "w": "staví",
          "start_ms": 103910,
          "end_ms": 104450
        },
        {
          "w": "bariéru,",
          "start_ms": 104450,
          "end_ms": 105370
        }
      ]
    },
    {
      "start_ms": 105370,
      "end_ms": 110400,
      "text": "čtení jde bez bariéry, jen prosté načtení z paměti.",
      "words": [
        {
          "w": "čtení",
          "start_ms": 105370,
          "end_ms": 106010
        },
        {
          "w": "jde",
          "start_ms": 106010,
          "end_ms": 106280
        },
        {
          "w": "bez",
          "start_ms": 106280,
          "end_ms": 106560
        },
        {
          "w": "bariéry,",
          "start_ms": 106560,
          "end_ms": 107480
        },
        {
          "w": "jen",
          "start_ms": 107480,
          "end_ms": 107750
        },
        {
          "w": "prosté",
          "start_ms": 107750,
          "end_ms": 108390
        },
        {
          "w": "načtení",
          "start_ms": 108390,
          "end_ms": 109210
        },
        {
          "w": "z",
          "start_ms": 109210,
          "end_ms": 109300
        },
        {
          "w": "paměti.",
          "start_ms": 109300,
          "end_ms": 110400
        }
      ]
    },
    {
      "start_ms": 110540,
      "end_ms": 113860,
      "text": "Bránit se dá třemi způsoby, vyber si jeden.",
      "words": [
        {
          "w": "Bránit",
          "start_ms": 110540,
          "end_ms": 111080
        },
        {
          "w": "se",
          "start_ms": 111080,
          "end_ms": 111220
        },
        {
          "w": "dá",
          "start_ms": 111220,
          "end_ms": 111450
        },
        {
          "w": "třemi",
          "start_ms": 111450,
          "end_ms": 111900
        },
        {
          "w": "způsoby,",
          "start_ms": 111900,
          "end_ms": 112660
        },
        {
          "w": "vyber",
          "start_ms": 112660,
          "end_ms": 113050
        },
        {
          "w": "si",
          "start_ms": 113050,
          "end_ms": 113210
        },
        {
          "w": "jeden.",
          "start_ms": 113210,
          "end_ms": 113860
        }
      ]
    },
    {
      "start_ms": 113860,
      "end_ms": 119540,
      "text": "Volatile, zámek, nebo atomická operace.",
      "words": [
        {
          "w": "Volatile,",
          "start_ms": 113860,
          "end_ms": 114880
        },
        {
          "w": "zámek,",
          "start_ms": 114880,
          "end_ms": 116050
        },
        {
          "w": "nebo",
          "start_ms": 116050,
          "end_ms": 116640
        },
        {
          "w": "atomická",
          "start_ms": 116640,
          "end_ms": 117960
        },
        {
          "w": "operace.",
          "start_ms": 117960,
          "end_ms": 119540
        }
      ]
    },
    {
      "start_ms": 119540,
      "end_ms": 125380,
      "text": "Data race, sdílené místo, aspoň jeden zápis,",
      "words": [
        {
          "w": "Data",
          "start_ms": 119540,
          "end_ms": 120140
        },
        {
          "w": "race,",
          "start_ms": 120140,
          "end_ms": 121040
        },
        {
          "w": "sdílené",
          "start_ms": 121040,
          "end_ms": 122390
        },
        {
          "w": "místo,",
          "start_ms": 122390,
          "end_ms": 123600
        },
        {
          "w": "aspoň",
          "start_ms": 123600,
          "end_ms": 124170
        },
        {
          "w": "jeden",
          "start_ms": 124170,
          "end_ms": 124540
        },
        {
          "w": "zápis.",
          "start_ms": 124540,
          "end_ms": 125380
        }
      ]
    },
    {
      "start_ms": 125380,
      "end_ms": 130500,
      "text": "Bez synchronizace se ti výsledek rozsype.",
      "words": [
        {
          "w": "Bez",
          "start_ms": 125380,
          "end_ms": 125810
        },
        {
          "w": "synchronizace",
          "start_ms": 125810,
          "end_ms": 127460
        },
        {
          "w": "se",
          "start_ms": 127460,
          "end_ms": 127720
        },
        {
          "w": "ti",
          "start_ms": 127720,
          "end_ms": 127980
        },
        {
          "w": "výsledek",
          "start_ms": 127980,
          "end_ms": 129150
        },
        {
          "w": "rozsype.",
          "start_ms": 129150,
          "end_ms": 130500
        }
      ]
    },
    {
      "start_ms": 130500,
      "end_ms": 136320,
      "text": "Obrana je jasná, řekni ji u zkoušky hned.",
      "words": [
        {
          "w": "Obrana",
          "start_ms": 130500,
          "end_ms": 131360
        },
        {
          "w": "je",
          "start_ms": 131360,
          "end_ms": 131650
        },
        {
          "w": "jasná,",
          "start_ms": 131650,
          "end_ms": 132800
        },
        {
          "w": "řekni",
          "start_ms": 132800,
          "end_ms": 133660
        },
        {
          "w": "ji",
          "start_ms": 133660,
          "end_ms": 134040
        },
        {
          "w": "u",
          "start_ms": 134040,
          "end_ms": 134090
        },
        {
          "w": "zkoušky",
          "start_ms": 134090,
          "end_ms": 135240
        },
        {
          "w": "hned.",
          "start_ms": 135240,
          "end_ms": 136320
        }
      ]
    },
    {
      "start_ms": 137920,
      "end_ms": 142880,
      "text": "Volatile, zámek, nebo atomika, CAS, fetch-and-add.",
      "words": [
        {
          "w": "Volatile",
          "start_ms": 137920,
          "end_ms": 138840
        },
        {
          "w": "zámek",
          "start_ms": 138840,
          "end_ms": 139570
        },
        {
          "w": "nebo",
          "start_ms": 139570,
          "end_ms": 140040
        },
        {
          "w": "atomika",
          "start_ms": 140040,
          "end_ms": 140880
        },
        {
          "w": "CAS,",
          "start_ms": 140880,
          "end_ms": 141750
        },
        {
          "w": "fetch-and-add.",
          "start_ms": 141750,
          "end_ms": 142880
        }
      ]
    },
    {
      "start_ms": 142880,
      "end_ms": 149200,
      "text": "Dvě atomické instrukce dělají úpravu v jednom kroku,",
      "words": [
        {
          "w": "Dvě",
          "start_ms": 142880,
          "end_ms": 143520
        },
        {
          "w": "atomické",
          "start_ms": 143520,
          "end_ms": 144960
        },
        {
          "w": "instrukce,",
          "start_ms": 144960,
          "end_ms": 146610
        },
        {
          "w": "dělají",
          "start_ms": 146610,
          "end_ms": 147360
        },
        {
          "w": "úpravu",
          "start_ms": 147360,
          "end_ms": 148010
        },
        {
          "w": "v",
          "start_ms": 148010,
          "end_ms": 148100
        },
        {
          "w": "jednom",
          "start_ms": 148100,
          "end_ms": 148660
        },
        {
          "w": "kroku.",
          "start_ms": 148660,
          "end_ms": 149200
        }
      ]
    },
    {
      "start_ms": 149200,
      "end_ms": 156560,
      "text": "CAS je compare-and-swap, v procesoru instrukce cmpxchg.",
      "words": [
        {
          "w": "CAS",
          "start_ms": 149200,
          "end_ms": 149890
        },
        {
          "w": "je",
          "start_ms": 149890,
          "end_ms": 150240
        },
        {
          "w": "compare-and-swap,",
          "start_ms": 150240,
          "end_ms": 152930
        },
        {
          "w": "v",
          "start_ms": 152930,
          "end_ms": 153030
        },
        {
          "w": "procesoru",
          "start_ms": 153030,
          "end_ms": 153910
        },
        {
          "w": "instrukce",
          "start_ms": 153910,
          "end_ms": 154780
        },
        {
          "w": "cmpxchg.",
          "start_ms": 154780,
          "end_ms": 156560
        }
      ]
    },
    {
      "start_ms": 156560,
      "end_ms": 164120,
      "text": "Fetch-and-add přičte číslo, na x86 je to lock xadd,",
      "words": [
        {
          "w": "Fetch-and-add",
          "start_ms": 156560,
          "end_ms": 157270
        },
        {
          "w": "přičte",
          "start_ms": 157270,
          "end_ms": 159100
        },
        {
          "w": "číslo,",
          "start_ms": 159100,
          "end_ms": 160510
        },
        {
          "w": "na",
          "start_ms": 160510,
          "end_ms": 160870
        },
        {
          "w": "x86",
          "start_ms": 160870,
          "end_ms": 162120
        },
        {
          "w": "je",
          "start_ms": 162120,
          "end_ms": 162480
        },
        {
          "w": "to",
          "start_ms": 162480,
          "end_ms": 162840
        },
        {
          "w": "lock",
          "start_ms": 162840,
          "end_ms": 163380
        },
        {
          "w": "xadd.",
          "start_ms": 163380,
          "end_ms": 164120
        }
      ]
    },
    {
      "start_ms": 164200,
      "end_ms": 172260,
      "text": "Prefix lock přitom drží cache line jen tobě, dokud úprava neskončí.",
      "words": [
        {
          "w": "Prefix",
          "start_ms": 164200,
          "end_ms": 165080
        },
        {
          "w": "lock,",
          "start_ms": 165080,
          "end_ms": 165950
        },
        {
          "w": "přitom",
          "start_ms": 165950,
          "end_ms": 166620
        },
        {
          "w": "drží",
          "start_ms": 166620,
          "end_ms": 167240
        },
        {
          "w": "cache",
          "start_ms": 167240,
          "end_ms": 167690
        },
        {
          "w": "line",
          "start_ms": 167690,
          "end_ms": 168130
        },
        {
          "w": "jen",
          "start_ms": 168130,
          "end_ms": 168530
        },
        {
          "w": "tobě,",
          "start_ms": 168530,
          "end_ms": 169200
        },
        {
          "w": "dokud",
          "start_ms": 169200,
          "end_ms": 169880
        },
        {
          "w": "úprava",
          "start_ms": 169880,
          "end_ms": 170860
        },
        {
          "w": "neskončí.",
          "start_ms": 170860,
          "end_ms": 172260
        }
      ]
    },
    {
      "start_ms": 172260,
      "end_ms": 176200,
      "text": "Data race, sdílené místo, aspoň jeden zápis,",
      "words": [
        {
          "w": "Data",
          "start_ms": 172260,
          "end_ms": 172620
        },
        {
          "w": "race,",
          "start_ms": 172620,
          "end_ms": 173160
        },
        {
          "w": "sdílené",
          "start_ms": 173160,
          "end_ms": 173880
        },
        {
          "w": "místo,",
          "start_ms": 173880,
          "end_ms": 174620
        },
        {
          "w": "aspoň",
          "start_ms": 174620,
          "end_ms": 175160
        },
        {
          "w": "jeden",
          "start_ms": 175160,
          "end_ms": 175620
        },
        {
          "w": "zápis.",
          "start_ms": 175620,
          "end_ms": 176200
        }
      ]
    },
    {
      "start_ms": 176200,
      "end_ms": 181420,
      "text": "Bez synchronizace se ti výsledek rozsype.",
      "words": [
        {
          "w": "Bez",
          "start_ms": 176200,
          "end_ms": 176490
        },
        {
          "w": "synchronizace",
          "start_ms": 176490,
          "end_ms": 178410
        },
        {
          "w": "se",
          "start_ms": 178410,
          "end_ms": 178700
        },
        {
          "w": "ti",
          "start_ms": 178700,
          "end_ms": 178990
        },
        {
          "w": "výsledek",
          "start_ms": 178990,
          "end_ms": 180300
        },
        {
          "w": "rozsype.",
          "start_ms": 180300,
          "end_ms": 181420
        }
      ]
    },
    {
      "start_ms": 181420,
      "end_ms": 190280,
      "text": "Obrana je jasná, řekni ji u zkoušky, volatile, zámek,",
      "words": [
        {
          "w": "Obrana",
          "start_ms": 181420,
          "end_ms": 182350
        },
        {
          "w": "je",
          "start_ms": 182350,
          "end_ms": 182660
        },
        {
          "w": "jasná,",
          "start_ms": 182660,
          "end_ms": 183890
        },
        {
          "w": "řekni",
          "start_ms": 183890,
          "end_ms": 184800
        },
        {
          "w": "ji",
          "start_ms": 184800,
          "end_ms": 185120
        },
        {
          "w": "u",
          "start_ms": 185120,
          "end_ms": 185270
        },
        {
          "w": "zkoušky,",
          "start_ms": 185270,
          "end_ms": 186620
        },
        {
          "w": "volatile",
          "start_ms": 188760,
          "end_ms": 189540
        },
        {
          "w": "zámek",
          "start_ms": 189540,
          "end_ms": 190280
        }
      ]
    },
    {
      "start_ms": 190280,
      "end_ms": 193300,
      "text": "nebo atomika, CAS, fetch-and-add.",
      "words": [
        {
          "w": "nebo",
          "start_ms": 190280,
          "end_ms": 190800
        },
        {
          "w": "atomika",
          "start_ms": 190800,
          "end_ms": 191720
        },
        {
          "w": "CAS,",
          "start_ms": 191720,
          "end_ms": 192600
        },
        {
          "w": "fetch-and-add.",
          "start_ms": 192600,
          "end_ms": 193300
        }
      ]
    },
    {
      "start_ms": 194520,
      "end_ms": 198960,
      "text": "Sdílené místo, jeden zápis, žádné synchro,",
      "words": [
        {
          "w": "Sdílené",
          "start_ms": 194520,
          "end_ms": 195240
        },
        {
          "w": "místo,",
          "start_ms": 195240,
          "end_ms": 196000
        },
        {
          "w": "jeden",
          "start_ms": 196000,
          "end_ms": 196600
        },
        {
          "w": "zápis,",
          "start_ms": 196600,
          "end_ms": 197530
        },
        {
          "w": "žádné",
          "start_ms": 197530,
          "end_ms": 198280
        },
        {
          "w": "synchro.",
          "start_ms": 198280,
          "end_ms": 198960
        }
      ]
    },
    {
      "start_ms": 198960,
      "end_ms": 207180,
      "text": "Data race vznikne přesně tehdy, když chybí synchronizace.",
      "words": [
        {
          "w": "Data",
          "start_ms": 198960,
          "end_ms": 200130
        },
        {
          "w": "race,",
          "start_ms": 200130,
          "end_ms": 201530
        },
        {
          "w": "vznikne",
          "start_ms": 201530,
          "end_ms": 202330
        },
        {
          "w": "přesně",
          "start_ms": 202330,
          "end_ms": 203260
        },
        {
          "w": "tehdy,",
          "start_ms": 203260,
          "end_ms": 203900
        },
        {
          "w": "když",
          "start_ms": 203900,
          "end_ms": 204570
        },
        {
          "w": "chybí",
          "start_ms": 204570,
          "end_ms": 205370
        },
        {
          "w": "synchronizace.",
          "start_ms": 205370,
          "end_ms": 207180
        }
      ]
    }
  ]
};
