$(document).ready(function(){

    var dbwnc = $(".dbwnc");
    var dr = 255;
    var dg = 0;
    var db = 150;
    var dcolor = `rgb(${dr}, ${dg}, ${db})`;
    var heat = false;
    var tree = true;
    var danimate = function() {
      if (heat == false) {
        db += 1;
        dr -= 1;
        if (db == 255) {
          heat = true;
        }
      } else {
        dr += 1;
        db -= 1;
        if (dr == 255) {
          heat = false;
        }
      };

      if (dg == 100) { tree = false;};
      if (dg == 0) {tree = true;};
      if (tree == true) {dg += 1} else {dg -= 1};
      var dcolor = `rgb(${dr}, ${dg}, ${db})`;
      $(".dbwnc").css("color",dcolor);
      console.log($(".dbwnc").css("color"));
    };

    setInterval(danimate, 20);
});
