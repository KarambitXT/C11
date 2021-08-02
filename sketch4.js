var weight = [35,38,42,45,43,34,36,41,48,32];

var sum = 0

function average() {
    for(var x = 0; x < weight.length; x++)
    {
        sum = sum + weight[x]
    }
    var average = sum/weight.length;
    console.log(average)
}

function setup() {
  createCanvas(400,400);
  average();
}

function draw() 
{
  background(30);
}