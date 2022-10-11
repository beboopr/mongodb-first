import { MongoClient,ObjectId } from "mongodb";
import { uri } from "./credentials.js";

const client = new MongoClient(uri)
const db = client.db("sample_mflix")
const moviesCollection = db.collection("movies")

// 1st way... console.log(await moviesCollection.findOne({}) )
// let query = { title: { $regex: /terminator/i } } // search for "terminator" anywhere in the title and ignores case sensitive
// let firstMovie = await moviesCollection.find(query).limit(3).toArray()

// for ( let i=0; i < movieArray.length; i++){
//     console.log(movieArray[i].title)
// }

// console.log(`there are ${firstMovie.length} movies`)
// console.log(firstMovie.title)

//add a new movie

const newMovie = {
    title: "The Boca Code story",
    Rating: "R",
    Genre: "Comedy",
    releaseDate: "2022/12/16",
}

// const results = await moviesCollection.insertOne(newMovie)
// console.log("Results of insert", results)

const updateQuery = { _id: new ObjectId("6345ca7d4eab27f75270d5c6") };
const update = { $set: {title: "the new bocacode story"}}
const results = await moviesCollection.findOneAndUpdate(updateQuery,update);
console.log(results)