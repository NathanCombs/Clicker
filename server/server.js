var express = require("express");
var app = express();
var path = require("path");
var pg = require("pg");
var bodyParser = require("body-parser");
var conString = `postgres://atatzywx:fSakkXkQips0sm2MyaZ8PfHlCLxzX9Fc@stampy.db.elephantsql.com:5432/atatzywx`;

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

var client = new pg.Client(conString);

client.connect(function (err) {
  if (err) {
    return console.error('could not connect to postgres', err);
  } else {
    console.log("DB connection successful");
    app.listen(5000, () => {
      console.log(`Server started on port ${5000}`)
    })
  }
});

app.post("/addVisit", (req, res) => {
    console.log(req.body.isOutside)
    client.query(`INSERT INTO bathroomvisits VALUES (
      '${req.body.type}', 
      ${req.body.hour}, 
      ${req.body.min},
      ${req.body.date},
      ${req.body.month},
      ${req.body.year},
      ${req.body.isOutside}
    )`
    ).then((result) => {
        res.json(`Logged new ${req.body.type}`)
    }) 
})

app.post("/addOutsideTime", (req, res) => {
  console.log(req.body)
  client.query(`INSERT INTO time_outside VALUES (
    ${req.body.start},
    ${req.body.end}
  )`)
})

app.post("/fetchActivityData", (req, res) => {
  client.query(`SELECT * FROM bathroomvisits`).then((result) => {
    res.json(result.rows)
  })
})