const express = require("express");
const cors = require("cors");

const { sessions } = require("./mockData");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


app.get("/api/sessions", (req, res) => {
  const session=sessions.map(each =>({id:each.id, title: each.title}))
  res.json(session);
});

app.get("/api/session/:id", (req, res) => {
  const session = sessions.find(u => u.id === parseInt(req.params.id));
  if (session) {
    res.json(session)
    
  } else {
    res.status(404).json({ error: "session not found" });
  }
});

app.post("/api/chat/:id", (req, res)=>{
  const {id} = req.params
  const {question} = req.body
  const session = sessions.find(u => u.id === parseInt(id));
  const answer=session.conversation.filter(que => que.question.toLowerCase() === question.toLowerCase())
  if (answer) {
    res.json(answer)
    
  } else {
    res.status(404).json({ error: "question not found" });
  }
})

app.get("/api/new-chat", (req, res)=>{
  const sessionId  = sessions.length+1
  res.json({id:sessionId})
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
