$(document).ready(function() {
  $("#popup3").draggable({
    containment: "parent",
    handle: "div.windows-header"
  });
  $(".icon_container").on("click", function() {
    var id = $(this).attr("data-id");
    $("#popup" + id).fadeIn(50);
    $("#popup" + id).draggable({
      containment: "parent",
      handle: "div.windows-header"
    });
    $("#popup" + id).mousedown();
  });

  $(".windows").on("mousedown", function() {
    $(this).css({ zIndex: "99" });
    $(this)
      .siblings(".windows")
      .css({ zIndex: "98" });
  });

  $(".windows button#windows-close").on("click", function() {
    $(this)
      .closest(".windows")
      .fadeOut(50);
  });
});
