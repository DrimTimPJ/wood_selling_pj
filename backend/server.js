const mongoose = require('mongoose');
const express = require('express');

const cors = require('cors')

const { mongodb , PORT, CLIENT_URL } = require('./env')

const ourWorkRouter = require('./routes/ourWork')
const pricesRouter = require('./routes/prices')
const UserQuestionRouter = require('./routes/userQuestions')
const WoodRouter = require('./routes/woods')
const Authroute = require('./routes/auth');
const sharedInfoRoute = require('./routes/sharedInfo')

const app = express();

app.use(cors({ origin: CLIENT_URL }))
app.use(express.json());

app.use('/our-work', ourWorkRouter)
app.use('/prices', pricesRouter)
app.use('/questions', UserQuestionRouter)
app.use('/woods', WoodRouter)
app.use('/auth', Authroute)
app.use('/info', sharedInfoRoute)


mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Connection error:", err));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});