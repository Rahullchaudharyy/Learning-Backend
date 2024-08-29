import express from 'express'

const AllStudent = (req, res) => {
    res.send("All Studetn")
}

const CreateStudent = (req, res) => {
    res.send("Student has been created")
}

const DeleteStudent = (req, res) => {
    res.send("Student Deleted from DB")
}

const UpdatedStudent = (req, res) => {
    res.send("Student Info Updated...")
}



export {
    AllStudent,
    DeleteStudent,
    UpdatedStudent,
    CreateStudent,
}

// Important :-
// The reason is to create a foldr name controller that is if we write our business logic inside the 
// the route code or where we have to werite the code of the route and url that would make very messsy and also its not a good thing to wite a business logic in the normal route code file 