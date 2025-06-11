import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

// async function createMovie() {
//     const newMovie = await prisma.movie.create({
//         data: [
//             {
//             title: "The Retro",
//             description: "A movie about a man in a past time",
//             genre: "Sci-Fi",
//             releaseDate: new Date(2023, 10, 10),
//             rating: 4.5,
//         },
//         {
//             title: "The Matrix",
//             description: "A movie about a man in a computer-generated world",
//             genre: "Sci-Fi",
//             releaseDate: new Date(2024, 10, 10),
//             rating: 3.5,
//         },
//         {
//             title: "The Matrix 1",
//             description: "A good movie in  computer-generated world",
//             genre: "Action",
//             releaseDate: new Date(2024, 10, 10),
//             rating: 5,
//         }
//     ]
// });

//     console.log(newMovie);
// }

async function CreateMultipleMovies() {
   const newMovie = await prisma.movie.createMany({
    data: [
        {
            title: "The Retro",
            description: "A movie about a man in a past time",
            genre: "Sci-Fi",
            releaseDate: new Date(2023, 10, 10),
            rating: 4.5,
        },
        {
            title: "The Matrix",
            description: "A movie about a man in a computer-generated world",
            genre: "Sci-Fi",
            releaseDate: new Date(2024, 10, 10),
            rating: 3.5,
        },
        {
            title: "The Matrix 1",
            description: "A good movie in  computer-generated world",
            genre: "Action",
            releaseDate: new Date(2024, 10, 10),
            rating: 5,
        }
    ]
   })

   console.log(newMovie);
}
async function getAllMovies() {
    const movies = await prisma.movie.findMany();
    console.log("All movies", movies);
}

async function getMovieById(movieId: number) {
    const movie = await prisma.movie.findUnique({
        where: {id: movieId },
    })
    console.log("Movie by id", movie);
    
}

    

async function main() {
    // C.R.U.D
//    await  createMovie();
// await CreateMultipleMovies();
// await getAllMovies();
await getMovieById(2);
}


main()
.then(async()=> await prisma.$disconnect())
.catch(async(e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})
    
