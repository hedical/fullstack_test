$(document).ready(function () {

    $("#btnSubmit").on("click", () => {
        $.ajax({
            type: "GET",
            url: "/api/test",
            dataType: "json",
        }).then((res) => {
            console.log(res);
        })
    })
    $("#btnSubmit2").on("click", () => {
        $.ajax({
            type: "GET",
            url: "/api/test2",
            dataType: "json",
        }).then((res) => {
            console.log(res);
            let apiRes2 = JSON.stringify(res)
            $("body").append(`this is the response : ${apiRes2}`)
        })
    })
})