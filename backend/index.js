const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7fhovkc.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const serviceCollection = client.db("autoCare").collection("services");
    const bookingCollection = client.db("autoCare").collection("bookings");

    app.get("/services", async (req, res) => {
      const product = await serviceCollection.find().toArray();
      res.send(product);
    });

    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;

      //   const product = req.body;
      const query = { _id: new ObjectId(id) };

      const remaining = await serviceCollection.findOne(query);
      res.send(remaining);
    });

    //get data from booking
    app.get("/bookings", async (req, res) => {
      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email };
      }
      const bookingDetails = await bookingCollection.find(query).toArray();
      res.send(bookingDetails);
    });
    app.get("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      console.log("booking id", id);
      const query = { _id: new ObjectId(id) };
      const bookingDetails = await bookingCollection.findOne(query);
      res.send(bookingDetails);
    });
    //booking
    app.post("/bookings", async (req, res) => {
      const booking = req.body;
      console.log(booking);
      const result = await bookingCollection.insertOne(booking);
      res.send(result);
    });

    //delete
    app.delete("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id, "has been deleted");
      const query = { _id: new ObjectId(id) };
      const remainingBookings = await bookingCollection.deleteOne(query);
      res.send(remainingBookings);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("doctor is coming soon");
});

app.listen(port, () => {
  console.log(`Doctor  is running on : ${port}`);
});