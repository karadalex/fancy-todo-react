var app = require('express')();
var bodyParser = require('body-parser');
var http = require('http').Server(app);

//configure body-parser for express
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const port = 5000;

var todos = [
  {id:1, title: "Supermarket", task:"Go to supermarket", completed:false},
  {id:2, title: "Laundry", task:"Do the laundry", completed:true},
  {id:3, title: "Exams", task:"Study for exams", completed:false}
];

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

app.get('/api/v1/todos', (req, res) => {
  res.json(todos);
})

app.post('/api/v1/todo', (req, res) => {
  todos.push(req.body);
})

http.listen(port, () => {
  console.log(`listening on port:${port}`);
});