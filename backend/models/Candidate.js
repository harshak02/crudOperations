import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true        
    },
    age : {
        type : Number,
        required : true,
        min : 10,
        max : 100
    }
});

const CandidateTable = mongoose.model("Candidate",CandidateSchema);
export default CandidateTable;

