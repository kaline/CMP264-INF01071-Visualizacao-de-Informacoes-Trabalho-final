/* d3.csv("dados orçamento - 2003-2022 - função, subfunção, resultado primário.csv", function(data) {
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
}); */

import * as d3 from "https://cdn.skypack.dev/d3@7";
import axios from 'https://cdn.skypack.dev/axios';

const dataSet = async function getData() {
    return await axios.get('/api/data');
}
async function drawChart() {
    const data = await dataSet();
    const svgWidth = 500;
    const svgHeight = 500;
    const barPadding = 5;
    const barWidth = svgWidth / data.data.length;

    let svg = d3.select("svg");
    let width = svg
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    svg
        .selectAll("rect")
        .data(data.data)
        .enter()
        .append("rect")
        .attr("y", (d) => svgHeight - d)
        .attr("height", (d) => d)
        .attr("width", () => barWidth - barPadding)
        .attr("transform", (d, i) => {
            let translate = [barWidth * i, 0];
            return `translate(${translate})`;
        })
        .style("fill", "steelblue");
}
drawChart();