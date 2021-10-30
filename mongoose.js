import mongoose from 'mongoose';

main().catch(error => console.log(error))

async function main(){
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose_db")
    console.log("Connection Success");

    // const blogSchema = new mongoose.Schema({
    //   title: String,
    //   author: String,
    //   content: String,
    //   comments: [{body: String, date: Date}],
    //   hidden: Boolean,
    //   metaData: {
    //     votes: Number
    //   }
    // })

    // const blogPost = mongoose.model("Blog", blogSchema)

    // const newPost = new blogPost({
    //   title: 'This is trail inside main',
    //   author: "V1-ZEI",
    //   content: "make the save function as await as that returns promise"
    // })
    // await newPost.save();

    const personSchema = new mongoose.Schema({
      name: String,
      age: Number
    })

    const person = mongoose.model("Person", personSchema)

    const newPerson = new person({
      name: 'Idiot',
      age: 25
    })

    const result = await newPerson.save()
    console.log(`New person added with id: ${result._id}`);

  }
  catch(err){ console.log(err); }
  finally{ mongoose.connection.close(); }
}