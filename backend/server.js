const mongoose = require('mongoose');
const { mongodb , PORT } = require('./env')
const express = require('express');
const ourWorkRouter = require('./routes/ourWork')
const pricesRouter = require('./routes/prices')
const UserQuestionRouter = require('./routes/userQuestions')
const WoodRouter = require('./routes/woods')

const app = express();

app.use(express.json());

app.use('/our-work', ourWorkRouter)
app.use('/prices', pricesRouter)
app.use('/questions', UserQuestionRouter)
app.use('/woods', WoodRouter)


mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Connection error:", err));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});