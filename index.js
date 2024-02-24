import  express  from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import { userschema } from './model.js';
const app = express();
app.use(express.json());
app.use(bodyparser.json())
app.use(cors());
mongoose.connect("mongodb://localhost:27017/crp-project", { useUnifiedTopology: true ,useNewUrlParser: true}).then((res)=>console.log("success")).catch((e)=>console.log(e.message,"failure"))
// API endpoint to get all songs
app.post('/send',async (req, res) => {
  const {quantity,arsenic,lead,mercury,benzene,toluene,trichorolo,nitrate,percholoro,trietrhylene,radon}=req.body
  const newdata=new userschema({quantity,arsenic,lead,mercury,benzene,toluene,trichorolo,nitrate,percholoro,trietrhylene,radon})
  await newdata.save()
  const data=await userschema.find()
  res.json(data);
});
app.post("/find",async (req,res)=>{
  const {quantity}=req.body
  const data=await userschema.find({quantity:quantity})
   res.json(data);
})
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
