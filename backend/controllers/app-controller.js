import CandidateTable from "../models/Candidate";

export const getAllUsers = async (req,res,next) => {
    let users;
    try {
        users = await CandidateTable.find({});
    } catch (err) {
        console.log(err);
    }

    if(!users){
        return res.status(402).json({
            message : "Error Occured in Fetching data!"
        })
    }

    return res.status(200).json({
        message : "Success",
        users
    })
    
}

export const getOneUser = async (req,res,next) => {
    let user;
    const id = req.params.id;
    try {
        user = await CandidateTable.findById(id);
    } catch (err) {
        console.log(err);
    }

    if(!user){
        return res.status(402).json({
            message : "Error Occured in Fetching data!"
        })
    }

    return res.status(200).json({
        message : "Success",
        user
    })
    
}


export const createUser = async (req,res,next) => {
    const {name,email,age} = req.body;
    let existingUser;
    try {
        existingUser = await CandidateTable.findOne({email});
    } catch (err) {
        console.log(err);
    }

    const newUser = new CandidateTable({
        name,email,age
    });

    try {
        await newUser.save();
    } catch (err) {
        console.log(err);
    }

    return res.status(200).json({
        message : "Created",
        newUser
    })

}

export const updateUser = async (req,res,next) => {
    const {name,email,age} = req.body;
    const id = req.params.id;
    let currentUser;

    try {
        currentUser = await CandidateTable.findByIdAndUpdate(id,{
            email,name,age
        },{new : true})
    } catch (err) {
        console.log(err);
    }

    if(currentUser){
        return res.status(200).json({currentUser});
    }
    else{
        return res.status(500).json({
            message : "Unable to find user by this Id"
        })
    }
}

export const deleteUser = async (req,res,next) => {
    const {name,email,age} = req.body;
    const id = req.params.id;
    let currentUser;

    try {
        currentUser = await CandidateTable.findByIdAndDelete(id)
    } catch (err) {
        console.log(err);
    }

    if(currentUser){
        return res.status(200).json({
            message : "Deleted"
        });
    }
    else{
        return res.status(500).json({
            message : "Unable to find user by this Id"
        })
    } 
}