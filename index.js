$(document).ready(function () {
    $("#search-input").click(function () {
        $(".input-box").show();
        $("#cross").show()
        $("#search").hide()
    })
    $("#cross").click(function () {
        $("#cross").hide()
        $("#search").show()
        $(".input-box").hide()
    })
})
