console.log("Hello")
const radii = [50, 40, 30, 20, 10]
// console.log(radii)
let svg = d3.select("body")
    .append("svg")
    .attr("height", 200)
    .attr("width", 600)

svg.selectAll("circle")
    .data(radii)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => 100 + 2 * d3.max(radii) * i)
    .attr("cy", 100)
    // .attr("fill", "#FFFF00")
    .attr("fill", (d, i) => {
        // if(d >40) {
        //     return("#FFFF00")
        // } else{
        //     return("#0000FF")
        // }
        
        if(i % 2 == 0) {
            return("#FFFF00")
        } else {
            return("#0000FF")
        }
    })
    .attr("stroke", "#0000FF")
    .attr("r", d => d)
