function getInfo(...values) {
  var results = [];
  var i = 0;
  values.forEach((value) => {
    let result = {};
    result["isFalsy"] = value ? false : true;
    result["type"] = typeof(value);
    result["stringLength"] = value.toString().length;
    result["index"] = i;
    i++;
    results.push(result);
  });
  return results
}


module.exports = getInfo;