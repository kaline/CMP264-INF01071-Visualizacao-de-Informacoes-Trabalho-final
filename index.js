d3.csv("dados orçamento - 2003-2022 - função, subfunção, resultado primário.csv", function(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].Ano);
        console.log(data[i].Função);
    }

    http.createServer(
        function (req, res) {
          // favicon - browser annoyance, ignore 
          if(req.url.indexOf('favicon.ico') >= 0) {
            res.statusCode = 404
            return
          }
      
          res.writeHead(200, { "Content-Type": 'image/svg+xml' });
          res.end(d3Draw());
        }
      )
      .listen(8080, function() {
        console.log("Server listening on port 8080");
      });
});