import mongoose from 'mongoose';

main().catch(error => console.log(error))

async function main(){
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose_db")
    console.log("Connection Success");

    const blogSchema = new mongoose.Schema({
      title: {
        type: String,
        required: true
      },
      author: {
        type: String,
        required: true
      },
      content: String,
      comments: [{body: String, date: Date}],
      hidden: Boolean,
      metaData: {
        votes: {
          type: Number,
          min: 0,
          max: Number.MAX_SAFE_INTEGER
        }
      }
    })

    const blogPost = mongoose.model("Blog", blogSchema)

    // accepts the new data to include in database
    // const newPost = new blogPost({
    //   title: 'This is trail for validation',
    //   author: 'V1-ZEI',
    //   content: "validation is the one inbuilt comes with mongoose package and we have to specify a required attribute to each variable in schema"
    // })

    // returning error the below code
    const newPost = new blogPost({
      title: 'This is trail for validation without any author input not included',
      content: "validation is the one inbuilt comes with mongoose package and we have to specify a required attribute to each variable in schema"
    })

    await newPost.save();

    // await blogPost.find({author: 'V1-ZEI'}, function(err, filteredOutput){
    //   if(err){
    //     console.log(err);
    //   }else{
    //     console.log(filteredOutput);
    //   }
    //   mongoose.connection.close()
    // })

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
  finally{ mongoose.connection.close()}
}
