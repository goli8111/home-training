

function getDegreeFormVec(vec) {
    var pivotVec = {};
    pivotVec.x = 0;
    pivotVec.y = -1;

    var cos = get_cos(pivotVec, vec);
    var degree = parseInt(Math.acos(cos) * (180 / Math.PI));
    if (vec.x < 0) {
        degree += 180;
    }
    return degree;
}

function abs_value(vec) {
  distance = Math.pow(vec.x-0,2) + Math.pow(vec.y-0,2);
  return Math.sqrt(distance);
}

function get_cos(partA, partB) {
    let dotProduct = ((partA.x * partB.x) + (partA.y * partB.y));
    let cosineSimilarity = dotProduct / (abs_value(partA) * abs_value(partB));
    return cosineSimilarity;
}

/*
function get_cos(vec) {

  let dotProduct = ((pivotVec.x * vec.x) + (pivotVec.y * vec.y));
  let cosineSimilarity = dotProduct / (abs_value(pivotVec) * abs_value(vec));
  return cosineSimilarity;
}
*/