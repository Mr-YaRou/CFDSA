import express from 'express';
const app = express();
app.use(express.json());
app.use(express.static('workshop01/dist'));
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listing on port ${port}`);
});

app.get('/api/tests/:id', (req,res) => {
    const id = req.params.id;
    const tests = getTest(id);
    if (!tests) {
        res.status(404).send({error: `Tests ${id} not found.`})
    }
    else {
        res.send({data: tests})
    }
})

function getTest(id) {
    const test = [
        {id: 1, text: "Logic will get you from A to B. Imagination will take you everywhere."},
        {id: 2, text: "There are 10 kinds of people. Those who know binary and those who don't."},
        {id: 3, text: "There are two ways of constructing a software design. " +
        "One way is to make it so simple that there are obviously no deficiencies and" +
        "the other is to make it so complicated that there are no obvious deficiencies."},
        {id: 4, text: "It's not that I'm so smart, it's just that I stay with problems longer."},
        {id: 5, text: "It is pitch dark. You are likely to be eaten by a grue."}
      ];
      return test.find(p => p.id ==id);
}