


$(function () {
  $("#factureForm").validate({
    rules: {
      codefacture : {
        email:true,
        required:true
      }
    },
    messages:{
      codefacture : {
        email:"Merci d'introduire un email valide",

      }
    }
  });

 

  //
  $(".submit_detail").on("click", function () {
    var html = '<div class="row-detail">';

    $("#article-form input").each(function () {
      html += "<div>";

      html += $(this).val();

      html += "</div>";
    });

    html += "</div>";

    jQuery(".form_details").append(html);

    $("#article-form input").each(function () {
      $(this).val("");
    });
  });
});


