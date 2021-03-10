const React = (function() {
    let _val: unknown;
    
    function useState(initVal: unknown): [any, (newVal :unknown) => void] {
        const state = _val || initVal;
        const setState = (newVal: unknown) => {
            _val = newVal;
        }
        return [state, setState];
    }
    
    function render(Component: () => any ): any {
        const C = Component();
        C.render();
        return C;
    }

    return { useState, render };
})();

function MyComponent(): { render: () => unknown, click: () => unknown } {
    const [count, setCount] = React.useState(1);
    return {
        render: () => console.log(count),
        click: () => setCount(count + 1)
    }
}

var App: { render: () => {}, click: () => {} } = React.render(MyComponent);
App.click();
App = React.render(MyComponent);
App.click();
App = React.render(MyComponent);
App.click();
App = React.render(MyComponent);
