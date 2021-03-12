import { React } from "../myOwnModules/index.js";

const Test = (props) => {
    //console.log("PROPS: ", props)
    const [counter, setCounter] = React.useState(0);
    const [name, setName] = React.useState();

    document.querySelector('#WTF').innerHTML = counter;
    document.querySelector('#NAME_STATE').innerHTML = name || '';

    return {
        increase: () => setCounter(counter + 1),
        decrease: () => setCounter(counter - 1),
        changeName: n => setName(n),
    }
}

const ToggleTest = () => {
    const [isVisible, setVisible] = React.useState(false);
    document.querySelector('#TOGGLE').innerHTML = isVisible + '';
    return {
        toggle: () => setVisible(!isVisible)
    }
}


React.registerComponent('test', Test)({ gg: 'GG_PROP' }); // SECOND ARGUMENT TO PASS PROPS

React.registerComponent('toggleTest', ToggleTest)();

document.querySelector('#INCREASE').addEventListener('click', () => React.App.test.increase());
document.querySelector('#DECREASE').addEventListener('click', () => React.App.test.decrease());
document.querySelector('#TXT').addEventListener('input', ({ target }) => React.App.test.changeName(target.value));
document.querySelector('#TOGGLE').addEventListener('click', () => React.App.toggleTest.toggle());