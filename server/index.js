var app = require('express')();
var http = require('http').Server(app);

const port = 5000;

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

app.get('/api/v1/todos', (req, res) => {
  const todos = [
    {id:1, task:"Go to supermarket", completed:false},
    {id:2, task:"Do the laundry", completed:true},
    {id:3, task:"Study for exams", completed:false}
  ];
  res.json(todos);
})

http.listen(port, () => {
  console.log(`listening on port:${port}`);
});