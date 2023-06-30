
function validate(schema, values){
    let result =[];
    if (!schema.age(values.age)){
        result.push("age");
    }
    if (!schema.name(values.name)){
        result.push("name");
    }
    if (!schema.extra(values.extra)){
        result.push("extra");
    }
    return result;
}

module.exports = {validate};