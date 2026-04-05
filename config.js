const CLUES = {
  "1": {
    "title": 'Start where gossip clucks, feathers flutter, and breakfast sometimes arrives before sunrise.',
    "location": 'Chickens',
    "hint": '',
    "zone": { "x": 24, "y": 57 }
  },
  "2": {
    "title": 'Look for the little home where blooms live with their roots tucked in tight.',
    "location": 'Flower pot',
    "hint": '',
    "zone": { "x": 45, "y": 60 }
  },
  "3": {
    "title": 'Find the place where shovels, rakes, and garden jobs wait behind a door.',
    "location": 'Garden shed',
    "hint": '',
    "zone": { "x": 49, "y": 47 }
  },
  "4": {
    "title": 'When flowers grow thirsty, this long helper snakes across the yard to bring them a drink.',
    "location": 'Hose',
    "hint": '',
    "zone": { "x": 40, "y": 39 }
  },
  "5": {
    "title": 'On the hottest days, this box works hard so the house can stay cool and calm.',
    "location": 'Air conditioning',
    "hint": '',
    "zone": { "x": 37, "y": 42 }
  },
  "6": {
    "title": 'Seek the pale barrier dressed in white, standing in neat lines and crossing your sight.',
    "location": 'White cross fence',
    "hint": '',
    "zone": { "x": 5, "y": 72 }
  },
  "7": {
    "title": 'Search where fallen branches are gathered after the wind is done telling its story.',
    "location": 'Stick pile',
    "hint": '',
    "zone": { "x": 57, "y": 58 }
  },
  "8": {
    "title": 'Four thick tires, plenty of mud, and a ride that likes the rough path best.',
    "location": 'Four wheeler',
    "hint": '',
    "zone": { "x": 65, "y": 46 }
  },
  "9": {
    "title": 'It never leads the way, but it follows faithfully and carries the load behind.',
    "location": 'Trailer',
    "hint": '',
    "zone": { "x": 45, "y": 73 }
  },
  "10": {
    "title": 'Find the bright helper with one wheel that hauls more than its size should allow.',
    "location": 'Yellow wheelbarrow',
    "hint": '',
    "zone": { "x": 38, "y": 18 }
  },
  "11": {
    "title": 'FINAL TREASURE: The old giant is gone, but its resting place remains. Look where the tree still keeps its last secret.',
    "location": 'Stump',
    "hint": '',
    "zone": { "x": 74, "y": 88 }
  }
};

const TEAMS = {
  "Team1": {
    "label": "Team 1",
    "sequence": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  "Team2": {
    "label": "Team 2",
    "sequence": [
      5,
      1,
      8,
      2,
      9,
      3,
      6,
      4,
      10,
      7,
      11
    ]
  },
  "Team3": {
    "label": "Team 3",
    "sequence": [
      7,
      4,
      2,
      10,
      1,
      9,
      5,
      8,
      3,
      6,
      11
    ]
  },
  "Team4": {
    "label": "Team 4",
    "sequence": [
      3,
      6,
      1,
      9,
      4,
      7,
      10,
      2,
      8,
      5,
      11
    ]
  },
  "Team5": {
    "label": "Team 5",
    "sequence": [
      8,
      10,
      5,
      7,
      2,
      6,
      4,
      1,
      9,
      3,
      11
    ]
  }
};

const TOKENS = {
  "Team1": [
    "OGZMXS7VJB",
    "60GIIUEG45",
    "KDEAYOPPXE",
    "07R78W8USC",
    "DA17HH1YCL",
    "HKD5RKKNM3",
    "C10PEXRT5Z",
    "G942RD8UA7",
    "UO6AZKDN71",
    "YOI2ZQGYGL",
    "TK0KAKONVN"
  ],
  "Team2": [
    "DA17HH1YCL",
    "OGZMXS7VJB",
    "G942RD8UA7",
    "60GIIUEG45",
    "UO6AZKDN71",
    "KDEAYOPPXE",
    "HKD5RKKNM3",
    "07R78W8USC",
    "YOI2ZQGYGL",
    "C10PEXRT5Z",
    "TK0KAKONVN"
  ],
  "Team3": [
    "C10PEXRT5Z",
    "07R78W8USC",
    "60GIIUEG45",
    "YOI2ZQGYGL",
    "OGZMXS7VJB",
    "UO6AZKDN71",
    "DA17HH1YCL",
    "G942RD8UA7",
    "KDEAYOPPXE",
    "HKD5RKKNM3",
    "TK0KAKONVN"
  ],
  "Team4": [
    "KDEAYOPPXE",
    "HKD5RKKNM3",
    "OGZMXS7VJB",
    "UO6AZKDN71",
    "07R78W8USC",
    "C10PEXRT5Z",
    "YOI2ZQGYGL",
    "60GIIUEG45",
    "G942RD8UA7",
    "DA17HH1YCL",
    "TK0KAKONVN"
  ],
  "Team5": [
    "G942RD8UA7",
    "YOI2ZQGYGL",
    "DA17HH1YCL",
    "C10PEXRT5Z",
    "60GIIUEG45",
    "HKD5RKKNM3",
    "07R78W8USC",
    "OGZMXS7VJB",
    "UO6AZKDN71",
    "KDEAYOPPXE",
    "TK0KAKONVN"
  ]
};
