(function() {
  var ct, s, setTime;

  s = 0;

  ct = function(v) {
    var t;
    t = v * 360 / 60;
    return t;
  };

  setTime = function() {
    $('.w-second').css('transform', 'rotateZ(' + ct(s) + 'deg)');
  };

  $(document).ready(function() {
    return setTime();
  });

}).call(this);