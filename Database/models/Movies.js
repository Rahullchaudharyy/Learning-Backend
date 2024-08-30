import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    name: { type: String, require: true, trim: true },
    ratings: { type: Number, require: true, min: 1, max: 5 },
    money: {
        type: mongoose.Decimal128,
        require: true,
        validate: (v) => v >= 10,
    },
    genre: { type: Array },
    isActive: { type: Boolean },
    comments: [{ values: { type: String }, publish: { type: Date, default: Date.now } }]
});

const MovieModel = mongoose.model('Movie',MovieSchema)



// How to create the doc 
const insertManydoc = async()=>{
    try{
        const Movie1 = new MovieModel({
            name: "Shiddhat",
            ratings: 5,
            money: 3000000,
            genre: ["Romantic", "Love"],
            isActive: true,
            comments: [{ values: "That was a great movie!" }]
        });
        
        const Movie2 = new MovieModel({
            name: "Inception",
            ratings: 4.8,
            money: 850000000,
            genre: ["Sci-Fi", "Thriller"],
            isActive: false,
            comments: [{ values: "Mind-blowing and thought-provoking!" }]
        });
        
        const Movie3 = new MovieModel({
            name: "The Dark Knight",
            ratings: 4.9,
            money: 1000000000,
            genre: ["Action", "Crime"],
            isActive: true,
            comments: [{ values: "A masterpiece of superhero cinema." }]
        });
        
        const Movie4 = new MovieModel({
            name: "Interstellar",
            ratings: 4.7,
            money: 677000000,
            genre: ["Sci-Fi", "Adventure"],
            isActive: true,
            comments: [{ values: "A visually stunning exploration of space." }]
        });
        
        const Movie5 = new MovieModel({
            name: "The Godfather",
            ratings: 5,
            money: 245000000,
            genre: ["Crime", "Drama"],
            isActive: true,
            comments: [{ values: "An iconic piece of cinematic history." }]
        });
        

       const Result = await MovieModel.insertMany([Movie1,Movie2,Movie3,Movie4,Movie5])
       console.log(Result)

    }catch(error){
        console.log(error)
    }
}

export {insertManydoc};
