const express =  require('express');
const app = express();
const path = require('path');

app.use('/css', express.static(path.join(__dirname, 'node_modules/uikit/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/uikit/dist/js')))
app.use(express.static('src'));

let verificar = false;
app.get("/",function(req,res){
   res.sendFile(path.join(__dirname , "/src/html/index.html"))
})
app.get("/mesas",function(req,res){
   res.sendFile(path.join(__dirname , "/src/html/mesas.html"))
})
app.get("/cadeira",function(req,res){
   res.sendFile(path.join(__dirname , "/src/html/cadeira.html"))
})
app.get("/decoracao",function(req,res){
   res.sendFile(path.join(__dirname , "/src/html/decoracao.html"))
})
app.get("/login",function(req,res){
   res.sendFile(path.join(__dirname , "/src/html/login.html"))
   verificar= true;
})
app.get("/cadastrar", function(req,res){
      res.sendFile(__dirname + "/src/html/cadastrar.html")
  
})
app.listen(8080,function(){
   console.log("servidor rodando porta 8080")
})

