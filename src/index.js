/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var a;
  var b;
  var c;
  var dm = preferences.length;
  function countLove(dm) {
   loveTri=0;
   for (var i=0; i <= dm; i++) {
     a = preferences[i];
     b = preferences[a-1];
     c = preferences[b-1]-1;
      if (i===a-1) {preferences[i]=0;}
        else if (i === c)
        {loveTri += 1;
        preferences[i]=0;
        preferences[a-1]=0;
        preferences[b-1]=0;}
      }
     return loveTri;}
   countLove(dm);
   return loveTri;
};
