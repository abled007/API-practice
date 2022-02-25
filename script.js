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
            console.log(apiData)
        },
        (error) => {
            console.log("bad request: ", error);
        }
    );
})

// random fact 
    
    // $('form').on('submit', (event) => {
    //     event.preventDefault();
    //     fetch('https://animechan.vercel.app/api/random')
    //         .then(response => response.json())
    //         .then(quote => {
    //             $('body').find('#quote').html(quote);
    //             console.log(quote)
    //         })
    // })



    async function getData(e) {
        e.preventDefault();
    
        const url = 'https://animechan.vercel.app/api/random'
        const response = await fetch(url);
        const data = await response.json();
    
        $("#anime").html(data.anime);
        $("#character").html(data.character);
        $("#quote").html(data.quote);
        console.log(data)
    }
    
    $("form").on("submit", getData);

