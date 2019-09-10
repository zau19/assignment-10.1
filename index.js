// var person = {
//     name: 'Jade',
//     age: 30,
//     city: 'jax',
// };

// console.log(person.name);


var movies = [{
        title: "Me and Js",
        rating: "5 stars",
        hasWatched: true
    },
    {
        title: 'Me and js pt 1',
        rating: '5 stars',
        hasWatched: false

    },
    {
        title: 'Me and js pt 2',
        rating: '4.5 stars',
        hasWatched: true
    },
    {
        title: 'Me and js pt 4',
        rating: '4.0 stars',
        hasWatched: false
    }
]

movies.forEach(function (movie) {
    if (movie.hasWatched) {
        console.log("you have watched " + "'" + movie.title + "'" + ' - ' + movie.rating);
    } else {
        console.log('you have not seen ' +  "'" + movie.title + "'" + ' - ' + movie.rating);
    }
});