import _ from 'lodash';
import { doGet, doPost } from './webRequest.js';
import { renderFunction } from './renderScores.js';
import Score from './Score.js';

const refreshBtn = document.querySelector('#refeshData');
const SubmitBtn = document.querySelector('#scoresSubmit');
const user = document.querySelector('#userName');
const score = document.querySelector('#userScore');

const gameId = 'ADqLNVXddDpHKdJLpCif';
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const scoresPostfix = _.join([baseUrl, 'games/', gameId, '/scores/'], '');

export default () => {
  refreshBtn.addEventListener('click', async () => {
    const apiData = await doGet(scoresPostfix);
    Score.scores = apiData.result;
    renderFunction(Score.scores);
  });

  SubmitBtn.addEventListener('click', async () => {
    const tmpData = new Score(user.value, parseInt(score.value, 10));
    const myAns = await doPost(scoresPostfix, tmpData);
    if (myAns.result === 'Leaderboard score created correctly.') {
      Score.scores.push(tmpData);
    }
    renderFunction(Score.scores);
  });
};