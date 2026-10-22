require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://ajushii:ajurawr123@cluster0.vlqbdjs.mongodb.net/pokemon?retryWrites=true&w=majority')
  .then(() => console.log('Successfully connected to MongoDB Atlas!'))
  .catch(err => console.error('Connection error:', err.message));

// Running on port 5000 as configured
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

const Pokemon = mongoose.model('pokemon', new mongoose.Schema({
  name: String,
  type: String,
  level: Number,
  nature: String
}));

// GET Route: Retrieve Pokémon list from MongoDB Atlas
app.get('/api/pokemon', async (req, res) => {
  const pokemon = await Pokemon.find();
  res.send(pokemon);
});

// POST Route: Add new Pokémon entry
app.post('/api/pokemon', async (req, res) => {
  const pokemon = new Pokemon(req.body);
  await pokemon.save();
  res.send(pokemon);
  console.log("Added new pokemon:", pokemon);
});