import express from "express";

const posts = [

];

for (let i = 1; i <= 10; i++) {
  posts.push({
    id: `${i}`,
    descricao: `Post ${i}`,
    img: `https://placecats.com/millie/${Math.floor(Math.random() * 300) + 1}/${
      Math.floor(Math.random() * 150) + 1
    }`,
  });
}

console.log(posts);

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
    res.status(200).json(posts[(req.params.id)-1]);
});