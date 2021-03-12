export default (() => {
    const components = [];
    let index = 0;
    let lastIndexRegistered = 0;

    const registerComponent = (myComponent) => {
        const componentIndex = index; // USE TO UNMOUNT
        let componentArgs = [];

        const component = (...args) => {
            if (args.length && componentIndex + 1 === index) componentArgs = args;
            myComponent(...componentArgs);
        }

        components[componentIndex] = { component };

        lastIndexRegistered = index;
        index++;

        return component;
    }

    const useState = (initialState) => {
        const lastComponent = components[lastIndexRegistered];
        lastComponent.useState = {
            lastIndexState: 0,
            prevState: [],
            ...lastComponent?.useState || {}
        };
        const prevStateIndex = lastComponent.useState.lastIndexState;
        const prevState = lastComponent.useState.prevState[prevStateIndex];
        let state = prevState ?? initialState;
        lastComponent.useState.prevState[prevStateIndex] = state;
        lastComponent.useState.lastIndexState++;
        const setState = (nextState) => {
            if (nextState === state) return;
            state = nextState;
            lastComponent.useState.prevState[prevStateIndex] = nextState;
            lastComponent.useState.lastIndexState = 0;
            components[lastIndexRegistered] = lastComponent;
            components[lastIndexRegistered].component();
        }
        return [state, setState];
    }

    return {
        registerComponent,
        useState
    }
})()