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

// Create multiple movies
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

// Get all movies
async function getAllMovies() {
    const movies = await prisma.movie.findMany();
    console.log("All movies", movies);
}

// Get movie by id
async function getMovieById(movieId: number) {
    const movie = await prisma.movie.findUnique({
        where: {id: movieId },
    })
    console.log("Movie by id", movie);
    
}

// Update movie
async function updateMovie(
    movieId:number,
    updatedTitle : string,
    updatedDescription : string,
){
    const updateMovie = await prisma.movie.update({
        where : {id: movieId}, 
        data : {
            title: updatedTitle,
            description:updatedDescription,
        }
    })
    console.log("Updated movie", updateMovie);
}

// Delete movie
async function deleteMovie(movieId: number){
    const deleteMovie = await prisma.movie.delete({
        where : {id: movieId},
    })
    console.log("Deleted movie", deleteMovie);
}
    
// Main function -> create, read, update, delete.
async function main() {
    // C.R.U.D -> Create, Read, Update, Delete
//    await  createMovie();      ->>>> // Create a movie
// await CreateMultipleMovies(); ->>>> // Create multiple movies
// await getAllMovies();         ->>>> // Get all movies
// await getMovieById(2);        ->>>> // Get movie by id
// await updateMovie(2, "The Matrix Second", "A movie you have to see" ) ->>>>>> // Update movie
await deleteMovie(2);        //  ->>>>   Delete movie
}


main()
.then(async()=> await prisma.$disconnect()) // ->>>> Disconnect the database
.catch(async(e) => { // ->>>> Catch any error
    console.error(e); // ->>>> Log the error
    await prisma.$disconnect(); // ->>>> Disconnect the database
    process.exit(1); // ->>>> Exit the process
})
    
