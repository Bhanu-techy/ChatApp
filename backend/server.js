const express = require("express");
const cors = require("cors");

const { sessions } = require("./mockData");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


app.get("/sessions", (req, res) => {
  const session=sessions.map(each =>({id:each.id, title: each.title}))
  res.json(session);
});

app.get("/session/:id", (req, res) => {
  const session = sessions.find(u => u.id === parseInt(req.params.id));
  if (session) {
    res.json(session)
    
  } else {
    res.status(404).json({ error: "session not found" });
  }
});

app.get("/api/chat/:chatId", (req, res)=>{
  const {chatId} = req.params
  const chat = sessions.find(session =>
  session.conversation.find(chat => chat.no === parseInt(chatId))
);
  res.json(chat)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
