function Node(d) {
  return {
    data: d
  };
}

var n1 = Node(1);
var n2 = Node(2);
var n3 = Node(3);
var n4 = Node(4);
var n5 = Node(5);

n1.neighbors = [n3];
n2.neighbors = [n4];
n3.neighbors = [n2];
n4.neighbors = [n2];
n5.neighbors = [n2];

var connected = bfs(n1, n1, n5);

console.log("connected: " + connected);

// breadth first search
function bfs(root, start, end) {
  
  var queue = [];
  
  root.visited = true;
  queue.unshift(root);
  
  var current;
  
  while (queue.length > 0) {
    current = queue.shift();
    console.log(current.data);

    current.neighbors.forEach(function(neighbor) {
      if (!neighbor.hasOwnProperty("visited")) {
        neighbor.visited = true;
        queue.push(neighbor);
      }
    });
    
  }
  
  return start.visited === true && end.visited === true;
}