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

const MovieModel = mongoose.model('Movie', MovieSchema)



// This is how we are reading the multiple documents and data ... 
const AllDocs = async () => {
    try {



        const Result = await MovieModel.find({ money: { $eq: 1000000000 } })

        Result.forEach((movie) => {
            console.log(movie)
        })

    } catch (error) {
        console.log(error)
    }
}
// Read the data only one 
const SingleDocs = async () => {
    try {



        const Result = await MovieModel.findById('66d15caea5ae08ccac38dce0')


        console.log(Result)


    } catch (error) {
        console.log(error)
    }
}

const UpdateByid = async (id) => {
    try {



        const Result = await MovieModel.updateOne({ _id: id }, { name: "Shiddhat Movie" })


        console.log(Result)


    } catch (error) {
        console.log(error)
    }
}


const Delete = async (id) => {
    try {



        const Result = await MovieModel.findByIdAndDelete(id)


        console.log(Result)


    } catch (error) {
        console.log(error)
    }
}




export { AllDocs, SingleDocs, UpdateByid , Delete};
