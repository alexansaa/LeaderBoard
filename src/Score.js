export default class Score {
  static scores = [];
  
  static defaultData = [
    {
      name: 'Alex',
      score: 150,
      index: 1,
    },
    {
      name: 'Juan',
      score: 120,
      index: 2,
    },
  ];

  constructor(name, score, index = null) {
    let newIndex = 0;
    if (index === null) {
      if (Score.scores.length === 0) {
        newIndex = 1;
      } else {
        newIndex = Score.scores[Score.scores.length - 1].index + 1;
      }
    } else {
      newIndex = index;
    }

    this.name = name;
    this.score = score;
    this.index = newIndex;
  }

  static updateData() {
    localStorage.setItem('scores', JSON.stringify(Score.scores));
  }

  static loadData() {
    Score.scores = JSON.parse(localStorage.getItem('scores'));
    if (Score.scores === null || Score.scores.length === 0) {
      Score.scores = this.defaultData;
    }
    Score.updateData();
  }
}