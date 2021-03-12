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

      var inputname = $(this).attr("id")

      html += '<div class="' + inputname + '">';

      html += $(this).val();

      html += "</div>";

    });

    html += "</div>";

    jQuery(".form_details").append(html);

    $("#article-form input").each(function () {
      $(this).val("");
    });

  });


 

  $("#submitbtn").on("click",function(){
   var facture =  get_facture_data();
   
  })
 

});

function get_facture_data(){

    var facture = {};


    facture.entete = {};
    facture.detail = [];

    facture.entete.factureCode = $("#codefacture").val();
    facture.entete.service = $("#service").val();
    facture.entete.fournisseur = $("#fournisseur").val();
    facture.entete.boncommande = $("#boncommande").val();
    facture.entete.bonlivraison = $("#bonlivraison").val();

    $(".row-detail").each(function () {

      var rowdetail =  {};

      rowdetail.designation  = $(this).find(".designation").html();
      rowdetail.qte  = $(this).find(".qte").html();
      rowdetail.prix  = $(this).find(".prix").html();
      rowdetail.tva  = $(this).find(".tva").html();

      facture.detail.push(rowdetail);
      
    });

    console.log(facture);

    return facture;
    
}

