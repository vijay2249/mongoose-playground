import mongoose from 'mongoose';

main().catch(error => console.log(error))

async function main(){
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose_db")
    console.log("Connection Success");

    const blogSchema = new mongoose.Schema({
      title: String,
      author: String,
      content: String,
      comments: [{body: String, date: Date}],
      hidden: Boolean,
      metaData: {
        votes: Number
      }
    })

    const blogPost = mongoose.model("Blog", blogSchema)

    // const newPost = new blogPost({
    //   title: 'This is trail inside main',
    //   author: "V1-ZEI",
    //   content: "make the save function as await as that returns promise"
    // })
    // await newPost.save();

    await blogPost.find({author: 'V1-ZEI'}, function(err, filteredOutput){
      if(err){
        console.log(err);
      }else{
        console.log(filteredOutput);
      }
      mongoose.connection.close()
    })

    // const personSchema = new mongoose.Schema({
    //   name: String,
    //   age: Number
    // })

    // const person = mongoose.model("Person", personSchema)

    // const newPerson = new person({
    //   name: 'Idiot',
    //   age: 25
    // })

    // const result = await newPerson.save()
    // console.log(`New person added with id: ${result._id}`);

    // const vijay = new person({
    //   name: 'VIJAY',
    //   age: 20
    // })
    // const ajay = new person({
    //   name: 'AJAY',
    //   age: 22
    // })
    // const sai = new person({
    //   name: 'SAI',
    //   age: 25
    // })

    // await person.insertMany([vijay, ajay, sai], function(err){
    //   if(err){
    //     console.log(err);
    //   }else{
    //     console.log("Insertion success");
    //   }
    // })

  }
  catch(err){ console.log(err); }
}

// mongoose.connection.close();