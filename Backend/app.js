require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const port = process.env.PORT || 8800;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const con = mysql.createConnection({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
con.connect((err) => {
  if (err) throw err;
});

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.post("/subscribe_newsletter", (req, res) => {
  const { email } = req.body;
  let sql = "SELECT * FROM subscribers WHERE email = ?";
  con.query(sql, [email], (err, data) => {
    console.log(data);
    if (data.length > 0) {
      console.log("Already Existed!!!");
      res.send("Email already subscribed");
      return;
    }
    let sql = `INSERT INTO subscribers (email) VALUES (?)`;
    con.query(sql, [email], (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("subscribed successfully");
    });
  });
});

app.post("/form/register_user", (req, res) => {
  const { fName, lName, email, password } = req.body;
});

app.listen(port, () => {
  console.log(`Connected to Server on Port: ${port}...`);
});
