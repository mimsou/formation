$(function () {
  $(".submit_detail").on("click", function () {
    var html = '<div class="row-detail">';

    $("#article-form input").each(function () {
        html += "<div >"

        html += $(this).val()

        html += "</div>"
    });

    html +=  "</div>";

    $(".form_details").append(html);
     
  });
});
