// TODO: write code here

import Game from './Game.js';
import IndexGoblin from './IndexGoblin.js';

console.log('game started');
const gamesBoard = new Game();
gamesBoard.createBoard();

const indGob = new IndexGoblin();
indGob.renderApp();
indGob.gameClick();
