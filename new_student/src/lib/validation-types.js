function string(value){
    return typeof(value) === "string";
}

function number(value){
    return typeof(value) === "number";
}

function any(value){
    // return typeof(value) !== "undefined";
    return true;
}

module.exports = {string, number, any};