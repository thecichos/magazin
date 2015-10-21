
if (localStorage.getItem("isvisited") == null) {
  $(document).ready(function() {
    $(".news").css('visibility', 'visible');
  });
} else {
  $(document).ready(function() {
    $(".news").css('visibility', 'hidden');
  });
}

function alertn() {
  $(document).ready(function() {
    $(".news").css('visibility', 'hidden');
  });
  localStorage.setItem("isvisited", true)
}

function alerty() {
  $(document).ready(function() {
    $(".news").css('visibility', 'hidden');
    $(".news2").css('visibility', 'visible');
  });
}

function continu() {
  var x = document.getElementById("text").value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!filter.test(x)) {
      $(document).ready(function() {
        $("#text").css({
          'border-width': '2px',
          'border-color': 'red',
          'border-style': 'groove'
        });
        $(".thing").text("indtast en correkt mail adresse");
      });
    } else {
      var y = " er blevet tilføjet til mail list";
      var z = x.concat(y);
      $(document).ready(function() {
        $(".news2").css('visibility', 'hidden');
        $(".news3").css('visibility', 'visible');
      });
      document.getElementById("answer").innerHTML = z;
    }
  }

function done() {
  $(document).ready(function() {
    $(".news3").css('visibility', 'hidden')
  });
  localStorage.setItem("isvisited", true)
}

function cance() {
  $(document).ready(function() {
    $(".news2").css('visibility', 'hidden');
  });
  localStorage.setItem("isvisited", true)
}

function newsrt() {
  localStorage.clear();
  $(document).ready(function() {
    $(".newsrt").css('visibility', 'hidden')
  });
}
