$('form').on('submit', (event) => {
    event.preventDefault();
    $.ajax({
        url: "https://anime-facts-rest-api.herokuapp.com/api/v1",
    }).then(
        (data) => {
            $('#name').html(data)
            console.log(data);
        },
        (error) => {
            console.log("bad request: ", error);
        }
    );
})

// random fact 

async function getQuote(e) {
    e.preventDefault();

    const quote = fetch('https://animechan.vercel.app/api/random')
            .then(response => response.json())
            .then(quote => console.log(quote))
            
    $('#name').html(quote);
}
$("form").on("submit", getQuote);





