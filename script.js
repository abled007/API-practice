$.ajax({
    url: "https://anime-facts-rest-api.herokuapp.com/api/v1",
}).then(
    (data) => {
        $('#name').html(data);
        console.log(data)
    },
    (error) => {
        console.log("bad request: ", error);
    }
);




