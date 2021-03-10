"use strict";
var React = (function () {
    var _val;
    function useState(initVal) {
        var state = _val || initVal;
        var setState = function (newVal) {
            _val = newVal;
        };
        return [state, setState];
    }
    function render(Component) {
        var C = Component();
        C.render();
        return C;
    }
    return { useState: useState, render: render };
})();
function MyComponent() {
    var _a = React.useState(1), count = _a[0], setCount = _a[1];
    return {
        render: function () { return console.log(count); },
        click: function () { return setCount(count + 1); }
    };
}
var App = React.render(MyComponent);
App.click();
App = React.render(MyComponent);
App.click();
App = React.render(MyComponent);
App.click();
App = React.render(MyComponent);
