import mongoose from 'mongoose';

main().catch(error => console.log(error))

async function main(){
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose_db")
    console.log("Connection Success");

    const blogSchema = new mongoose.Schema({
      title: {
        type: String,
        required: [true, "Post title is required"]
      },
      author: {
        type: String,
        required: [true, "Author Name is required filed to post a content"]
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

    // deleteOne operation
    // await blogPost.deleteOne({_id: "617cf5f5377d944e9c73d580"})

    // updateOne operation
    // await blogPost.updateOne({
    //   // filters
    //   title: 'Welcome'
    // },
    // // updates (or) new Data to be added
    // {
    //   metaData:{
    //     votes: 1000
    //   }
    // },
    // // callback function
    //   function(err){
    //     if(err)console.log(err);
    //     else console.log("Updation success");
    //   }
    // )

    // accepts the new data to include in database
    // const newPost = new blogPost({
    //   title: 'This is trail for validation',
    //   author: 'V1-ZEI',
    //   content: "validation comes with mongoose package and we have to specify a required attribute to each variable in schema"
    // })

    // returning error the below code
    // const newPost = new blogPost({
    //   title: 'This is trail for validation without any author input not included',
    //   content: "validation comes with mongoose package and we have to specify a required attribute to each variable in schema"
    // })

    // await newPost.save();

    // await blogPost.find({author: 'V1-ZEI'}, function(err, filteredOutput){
    //   if(err){
    //     console.log(err);
    //   }else{
    //     console.log(filteredOutput);
    //   }
    //   mongoose.connection.close()
    // })

    const personSchema = new mongoose.Schema({
      name: String,
      age: Number,
      newBlog: blogSchema //relations between documents
    })

    const person = mongoose.model("Person", personSchema)

    // deleteOne operation
    await person.deleteOne({_id: "617cd7357f6b2000664c6bda"})

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
mongoose.connection.close()
