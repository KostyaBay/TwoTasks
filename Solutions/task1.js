ctx.prototype.__fillStyleState = function (params, fn) {
    var keys = Object.keys(params), i, key;
    for(i = 0; i < keys.length; i++) {
        key = keys[i];
        this[key] = fn(key, params[key]);
    }
};

ctx.prototype.__applyStyleState = function (styleState) { 
    this.__fillStyleState(styleState, (value) => { value });
};

ctx.prototype.__setDefaultStyles = function () {
    this.__fillStyleState(STYLES, function (key, value) { this[key] = value.canvas });
};

ctx.prototype.__getStyleState = function () { 
    var styleState = {};
    this.__fillStyleState(STYLES, function (key) { styleState[key] = this[key] });
    return styleState;
};

// -------------------------------------------------------------------
// Example usage

/*
// Constructor function for context object
function ctx() {
    this.a = '';
    this.b = '';
    this.c = '';
};

// Default style values
const STYLES = {
    a: {canvas: '1'},
    b: {canvas: '2'},
    c: {canvas: '3'},
};

// Test function to demonstrate functionality
function test() {
    const ctxT = new ctx();
    ctxT.__setDefaultStyles();
    console.log(ctxT.__getStyleState()); // { a: '1', b: '2', c: '3' }

    ctxT.a = 'A';
    ctxT.b = 'B';
    ctxT.c = 'C';
    console.log(ctxT); // { a: 'A', b: 'B', c: 'C' }
    
    ctxT.__applyStyleState(ctxT.__getStyleState());
    console.log(ctxT.__getStyleState()); // restored to default values
}

test();
*/