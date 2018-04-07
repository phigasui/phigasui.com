$(function (){
    $(".trigger").on("change", function () {
        if ($(this).prop("checked")) {
            var target = $(this).attr("data-target");
            $("#title").addClass("menu-selected");
            $("#" + target).addClass("menu-selected");
            $("#menu-box .cell").addClass("menu-selected");
            $(".content").each(function () {
                if ($(this).attr("id") == target) return;
                $(this).removeClass("menu-selected");
            });
        }
    }).change();
});
