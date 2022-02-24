$('form').on('submit', (event) => {
    event.preventDefault();
    $.ajax({
        url: "https://anime-facts-rest-api.herokuapp.com/api/v1",
    }).then(
        (data) => {
            const randomNumber = Math.floor(Math.random() * 12)
            const apiData = data.data[`${randomNumber}`];
            $('body').find('#name').html(apiData.anime_name)
            $('#img').attr('src', apiData.anime_img)
            console.log(apiData.anime_name)
        },
        (error) => {
            console.log("bad request: ", error);
        }
    );
})

// random fact 

async function getQuote(e) {
    e.preventDefault();

    fetch('https://animechan.vercel.app/api/random')
            .then(response => response.json())
            .then(quote => console.log(quote))
            
    
}
$('body').find('#quote').html(getQuote)





