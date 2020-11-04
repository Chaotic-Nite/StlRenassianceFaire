// Newsletter Email
var newsletter_submit = function () {
  otherSiteSelected = "0";
  if (jQuery("#tofTears").prop("checked")) {
    otherSiteSelected += "," + jQuery("#tofTears").val();
  }
  requestURL =
    "http://www.tunestub.com/embed/venues/renaissancefestmn/newsletter/dosignup.cfm" +
    "?email=" +
    jQuery("#email").val() +
    "&tofTears=" +
    otherSiteSelected;
  jQuery.ajax({
    type: "GET",
    cache: false,
    url: requestURL,
    dataType: "jsonp",
    success: function (result) {
      jQuery("#ts-newsletter-msg-holder").html(result.html);
    },
  });
  return false;
};

//Collapsibles
let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
