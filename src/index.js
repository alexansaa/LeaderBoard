import './style.css';
import Scores from './Score.js';
import _ from 'lodash';
import { renderFunction } from './renderScores.js';
import clik from './editItems.js';

renderFunction(Scores.scores);

clik();
