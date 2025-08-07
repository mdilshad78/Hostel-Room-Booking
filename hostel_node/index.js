const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors(
    {
        origin: ["https://deploy-mern-1whq.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
))
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

mongoose.connect("mongodb+srv://root:12345@cluster-1.qheqsr7.mongodb.net/hostel").then((result) => {
    console.log("Connected!")
}).catch((err) => {
    console.log("error")
})

const userdata = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const bookingdata = new mongoose.Schema({
    names: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    checkin: {
        type: String,
        required: true
    },
    checkout: {
        type: String,
        required: true
    },
    adult: {
        type: String,
        required: true
    },
    child: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    request: {
        type: String,
        required: true
    }
})

const collection = new mongoose.model("regdata", userdata);
const collection1 = new mongoose.model("bookingdata", bookingdata);

app.get("/",(req,res)=>{
    res.json("Hello")
})

app.post("/reg", (req, res) => {
    // console.log(req.body);
    const user = req.body;
    const data = new collection(user);
    data.save();
    res.json(data);
})

app.post("/login", (req, res) => {
    // console.log(req.body.email)
    collection.findOne({ email: req.body.email }).then((result) => {
        // console.log(req.body.password)
        if (result.password == req.body.password) {
            res.json(result)
        }
        else {
            console.log("Password wrong")
        }
    }).catch((err) => {
        console.log(err)
    })

})

app.post("/book", (req, res) => {
    const book = req.body;
    const bookdata = new collection1(book);
    bookdata.save();
    console.log("ok")
})

app.get("/show", (req, res) => {
    collection.find({}).then((result) => {
        res.json(result);
    })
        .catch((err) => {
            console.log("error");
        })
})
app.listen(3001)