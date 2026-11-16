window.BENCHMARK_DATA = {
  "lastUpdate": 1794838851746,
  "repoUrl": "https://github.com/ChristophHotter/QuantumCumulants.jl",
  "entries": {
    "Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "orjan.ameye@hotmail.com",
            "name": "Orjan Ameye",
            "username": "oameye"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a03064f397e4863b8295e6a0fcc3c6c791e8e244",
          "message": "build: tag v0.8 (#371)",
          "timestamp": "2026-11-12T18:21:20+01:00",
          "tree_id": "2c77659d02f0713d9d696f6df9c38c3a94a2e8ae",
          "url": "https://github.com/ChristophHotter/QuantumCumulants.jl/commit/a03064f397e4863b8295e6a0fcc3c6c791e8e244"
        },
        "date": 1794838850723,
        "tool": "julia",
        "benches": [
          {
            "name": "complete/dicke/order 2",
            "value": 3557753,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2876760\nallocs=47786\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "complete/dicke/order 3",
            "value": 14219169,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9495992\nallocs=151154\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "complete/jc/order 2",
            "value": 1035827,
            "unit": "ns",
            "extra": "gctime=0\nmemory=747328\nallocs=11401\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "complete/jc/order 3",
            "value": 3463282.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2563352\nallocs=35955\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "complete/manyatom/order 2",
            "value": 21437626,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18828896\nallocs=279751\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "complete/multilevel/order 2",
            "value": 3583715,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2709488\nallocs=44434\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "complete/multilevel/order 3",
            "value": 9324615,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7007256\nallocs=105884\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "complete/superradiant/order 2",
            "value": 1536264.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1002616\nallocs=13749\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "complete/superradiant/order 3",
            "value": 9877299,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8923128\nallocs=112073\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "correlation/cavity/order 2",
            "value": 118366,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64600\nallocs=1023\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "correlation/superradiant/order 2",
            "value": 794575.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=539472\nallocs=7120\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "cumulant_expansion/dicke/order 2",
            "value": 273470.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=141664\nallocs=2376\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "cumulant_expansion/jc/order 2",
            "value": 99838,
            "unit": "ns",
            "extra": "gctime=0\nmemory=50752\nallocs=828\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "cumulant_expansion/manyatom/order 2",
            "value": 22874,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18176\nallocs=281\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "cumulant_expansion/multilevel/order 2",
            "value": 8292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7408\nallocs=125\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "cumulant_expansion/superradiant/order 2",
            "value": 14411,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9936\nallocs=176\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "find_missing/dicke/order 2",
            "value": 70719.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=63872\nallocs=699\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "find_missing/jc/order 2",
            "value": 18262,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18880\nallocs=206\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "find_missing/manyatom/order 2",
            "value": 19679,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17792\nallocs=219\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "find_missing/multilevel/order 2",
            "value": 5398,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5312\nallocs=71\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "find_missing/superradiant/order 2",
            "value": 6950,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7232\nallocs=99\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "meanfield/dicke/order 2",
            "value": 591798,
            "unit": "ns",
            "extra": "gctime=0\nmemory=319600\nallocs=5549\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "meanfield/jc/order 2",
            "value": 725541,
            "unit": "ns",
            "extra": "gctime=0\nmemory=403944\nallocs=6369\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "meanfield/manyatom/order 2",
            "value": 667245,
            "unit": "ns",
            "extra": "gctime=0\nmemory=408864\nallocs=6827\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "meanfield/multilevel/order 2",
            "value": 165235,
            "unit": "ns",
            "extra": "gctime=0\nmemory=95360\nallocs=1581\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "meanfield/superradiant/order 2",
            "value": 531068,
            "unit": "ns",
            "extra": "gctime=0\nmemory=367496\nallocs=5260\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "scale/superradiant/order 2",
            "value": 238939,
            "unit": "ns",
            "extra": "gctime=0\nmemory=129520\nallocs=1981\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          },
          {
            "name": "scale/superradiant/order 3",
            "value": 796702,
            "unit": "ns",
            "extra": "gctime=0\nmemory=385328\nallocs=6005\nparams={\"evals\":1,\"evals_set\":false,\"gcsample\":false,\"gctrial\":true,\"memory_tolerance\":0.01,\"overhead\":0,\"samples\":10000,\"seconds\":30,\"time_tolerance\":0.05}"
          }
        ]
      }
    ]
  }
}