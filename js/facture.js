document.addEventListener("DOMContentLoaded", function (event) {
  var element = document.getElementsByClassName("submit_detail")[0];
  element.addEventListener(
    "click",
    function (e) {
      var detailform = {};
      detailform.desingnation = document.getElementById("designation").value;
      detailform.id = document.getElementById("qte").value;
      detailform.prix = document.getElementById("prix").value;
       var html = ""
    },
    false
  );
});
