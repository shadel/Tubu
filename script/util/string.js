// Filename: util/string.js
define([], function(){
  var mappingRegex = /{([0-9]*)}/;
 var mapping = function() {
   var str = arguments[0];
   var args =  Array.prototype.slice.call(arguments, 0);
   args.shift(0);
   
   while (str.match(mappingRegex)) {
     str = str.replace(mappingRegex, function(char, index) {
       return args[index];
     });
   }
   return str;
 };

  return {
    mapping: mapping
  };
});