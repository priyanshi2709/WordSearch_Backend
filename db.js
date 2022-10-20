
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://database:pass%40STUD@cluster0.2qb04ra.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1 });
client.connect(err => {
    console.log('Connected');
  const collection = client.db("SectionWars").collection("HR A");
  
  collection.find({}).toArray(function (err, docs) {
    client.close();

    if (err) {
        console.log('Error');
        console.log(err);
        //res.end();
    }
    else {
        console.log('Success');
        console.log(docs);
        res.json(docs);
    }
});
  //client.close();
});
