import  mongoose  from "mongoose"

const schema=mongoose.Schema({
    quantity:{type:String},
    arsenic:{type:String},
    lead:{type:String},
    mercury:{type:String},
    benzene:{type:String},
    toluene:{type:String},
    trichorolo:{type:String},
    nitrate:{type:String},
    percholoro:{type:String},
    trietrhylene:{type:String},
    radon:{type:String}
}, {timestamps:true,collection:"rudrasamples"})
export const  userschema=mongoose.model("userschema",schema)