$.ajax({
    url: "https://anime-facts-rest-api.herokuapp.com/api/v1",
    success: function (data) {
        console.log(data);
    },
    error: function (error) {
        console.log("bad request: ", error);
    },
});