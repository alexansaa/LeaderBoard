import './style.css';
import Scores from './Score.js';
import { renderFunction } from './renderScores.js';

Scores.loadData();

renderFunction(Scores.scores);