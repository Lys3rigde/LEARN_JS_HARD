'use strict';

function edit(b){
    if (typeof b !== 'string'){
        alert("значение не является строкой");
        return;
    } 
    b = b.trim();
    return b.length > 30 ? b.slice(0,30) + '...' : b;
}
