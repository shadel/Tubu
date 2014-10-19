// Filename: view.line.js
define([], function($, _, Backbone, Router){
  
  var line = function(text){
    if (!text) {
      return text;
    }
      if(text.indexOf('\n')==0){
        text = text.replace('\n','');
    }
    
    text = text.split('\r\n');
    text = text.join('\n');
      
    text = text.split('\n');
    text = text.join('<br />');
    
    return text;
  };
  

  return {
    line: line
  };
});