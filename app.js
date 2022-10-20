const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = process.env.PORT || 5000    
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//Save the port number where your server will be listening

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://database:pass%40STUD@cluster0.2qb04ra.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1 });

var collection=null;

//Idiomatic expression in express to route and respond to a client request
app.get('/letters', (req, res) => {        //get requests to the root ("/") will route here
    client.connect(err => {
        console.log('Connected');
        collection = client.db("SectionWars").collection("HR A");
      
      collection.find().toArray(function (err, docs) {
        //client.close();
    
        if (err) {
            console.log('Error');
            console.log(err);
            res.end();
        }
        else {
            console.log('Success');
            console.log(docs);
            res.json(docs);
        }
    });
      //client.close();
    });
});
app.get('/words', (req, res) => {        //get requests to the root ("/") will route here
    client.connect(err => {
        console.log('Connected');
        collection = client.db("SectionWars").collection("words");
      
      collection.find().toArray(function (err, docs) {
        //client.close();
    
        if (err) {
            console.log('Error');
            console.log(err);
            res.end();
        }
        else {
            console.log('Success');
            console.log(docs);
            res.json(docs);
        }
    });
      //client.close();
    });
});  

app.listen(process.env.PORT || 3000, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});