import { MongoClient, ObjectId } from "mongodb"
const url = 'mongodb+srv://rahul:jxbfKkLumeUkwwGx@nodejs.23kbu.mongodb.net/'


const client = new MongoClient(url)
const dbName = "HelloMongo";

const main = async () => {
    await client.connect()
    console.log("Database connected successfully ! 🌿")
    const db = client.db(dbName)
    const collection = db.collection('User')
    // Write the data .. .. .. .. .. .. .. .. 

    const User1 = {
        "firstname": "David",
        "lastname": "Martinez",
        "age": 22,
        "phonenumber": "5583201478"
    }
    const User2 = {
        "firstname": "Maya",
        "lastname": "Patel",
        "age": 27,
        "phonenumber": "+91 9834123894"
    }




    // const result = await collection.insertMany([User1,User2]);
    // console.log("Founded this one as well =", result)

    // Read the data .. .. .. .. .. .. .. .. 

    const findResult = await collection.find({}).toArray()
    console.log("Data found =>", findResult)

    const FindSpec = await collection.find({ age: 32 },).toArray()
    console.log("The person with 32 age=>", FindSpec)
    // update the data .. .. .. .. .. .. .. .. 
    const filter = { _id: new ObjectId('6726103dae949bfdea7a490d') }
    const updateDocument = {
        $set: {
            age: 32,
        },
    };
    const Updated = await collection.updateOne(filter, updateDocument)

    console.log("Updated value is this .", Updated)
    const Count = await collection.countDocuments({})
    console.log("Docs counting", Count)

    // Delete the data .. .. .. .. .. .. .. .. 
    const DeleteData = await collection.deleteOne({ _id: new ObjectId('6725f549c2b2d048d4ba0753') })
    console.log("DeleteData => ", DeleteData)
    return "done"


}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close())

