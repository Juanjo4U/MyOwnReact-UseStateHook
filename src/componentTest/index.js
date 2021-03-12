import { React } from "../myOwnModules/index.js";
import { createAndDelete } from "../utils/dom.js";

let autofocus = false;

const Test = (props) => {
    //console.log("PROPS: ", props)
    const [counter, setCounter] = React.useState(0);
    const [name, setName] = React.useState();

    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter - 1);
    const changeName = n => { autofocus = true; setName(n); }

    createAndDelete('NAME_STATE', 'Wrapper').innerHTML = name || '';
    createAndDelete('COUNTER', 'Wrapper').innerHTML = counter;
    createAndDelete('INCREASE', 'container', 'button', 'click', increase).innerHTML = 'INCREASE';
    createAndDelete('DECREASE', 'container', 'button', 'click', decrease).innerHTML = 'DECREASE';
    createAndDelete('TXT', 'container', 'input', 'input', ({ target }) => changeName(target.value), undefined, autofocus);

    autofocus = false;

}

const DarkModeTest = () => {
    const [isDarkMode, setDarkmode] = React.useState(false);

    const toggle = () => setDarkmode(!isDarkMode)

    const text = isDarkMode ? 'lightMode' : 'darkMode';
    const background = isDarkMode ? 'black' : 'white';
    const color = isDarkMode ? 'white' : 'black';

    createAndDelete('TOGGLE', 'container', 'button', 'click', toggle, true).innerHTML = text.toLocaleUpperCase();
    document.querySelector('body').setAttribute('style', `background: ${background}; color: ${color}`);

}

React.registerComponent(Test)({ gg: 'GG_PROP' }); // SECOND ARGUMENT TO PASS PROPS
React.registerComponent(DarkModeTest)();