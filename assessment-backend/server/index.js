const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

//let nameForm = document.querySelector('#name-form')

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortunes", (req, res) => {
  const fortunes  = [
  "An inch of time is an inch of gold.",
  "Everyday in your life is a special occasion.",
  "Failure is the path of least persistence.",
  "He who expects no gratitude shall never be disappointed.", 
  "It is better to be an optimist and proven a fool than to be a pessimist and be proven right."]
  
  let randomIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndex]
  
  res.status(200).send(randomFortune)

})

app.get("/api/fortunes", (req, res) => {
  const fortunes  = [
  "An inch of time is an inch of gold.",
  "Everyday in your life is a special occasion.",
  "Failure is the path of least persistence.",
  "He who expects no gratitude shall never be disappointed.", 
  "It is better to be an optimist and proven a fool than to be a pessimist and be proven right."]
  
  let randomIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndex]
  
  res.status(200).send(randomFortune)

})

const {
  createUser,
  reformUser,
  assimilateUser
} = require('./controller')

app.post(`/api/users`, createUser)
app.put(`/api/users/:id`, reformUser)
app.delete(`/api/users/:id`, assimilateUser)



app.listen(4000, () => console.log("Server running on 4000"));
