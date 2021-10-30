import mongoose from 'mongoose';

main().catch(error => console.log(error))

async function main(){
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose_db")
    console.log("Connection Success");
  }catch(err){
    console.log(err);
  }finally{
    mongoose.connection.close()
  }
}