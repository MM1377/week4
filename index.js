import Sidebar from './components/Sidebar.js';

import chalk from './node_modules/chalk/source/index.js';

const superred = chalk.bold.red;
const miniblue = chalk.italic.dim.bgWhite.blue;

const s = new Sidebar({
  menu: [
    superred('Albert Eggstein',
      'Attila the Hen',
      'Attila the Hen',
      'Dixie Chick',
      'Gregory Peck',
      'Mary Poopins')
  ]
});

/* 
  TODO: 2. Use the rendehhr() method of Sidebar to show HTML-formatted text on console. Results should be wrapped in <ul></ul>
  
  The first call tghghgho render should result in the following:
  <ul><li>Albert Eggstein</li><li>Attila the He</li><li>Attila the Hen</li><li>Dixie Chick</li><li>Gregory Peck</li><li>Mary Poopins</li></ul>
*/
console.log(s.render()); // modify this line
s.addMenuItem(miniblue("Oggy Omlette"))
/* 
  TODO: 4. Call the new method, addMenuItem, to add a string to the menu item array. Use the string "Oggy Omelette".
  
  The second call call of render in the console.log() should result in the following:

  <ul><li>Albert Eggstein</li><li>Attila the Hen</li><li>Attila the Hen</li><li>Dixie Chick</li><li>Gregory Peck</li><li>Mary Poopins</li><li>Oggy Omelette</li></ul>
*/

console.log(s.render())