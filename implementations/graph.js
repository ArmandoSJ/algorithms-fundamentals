/* 
   2 - 0
  / \
 1 - 3
*/

/**
  Edge List
    - Esta manera se representará de una lista de arrays que van a representar nuestro grafo
    - Cada array sera una conexión de nuestro grafo
 */

const graph = [
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3],
  ];
  
  /**
   Adjacent List

    - Cada nodo sera un índice, por lo cual los representamos en cada índice de la lista con que nodos está conectado
   */
  //               0    1          2        3
  const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]];
  
  const graph3 = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 3],
    3: [1, 2],
  };
  
  /**
    Adjacent Matrix
    - Es una representación en una matriz de que nodos están conectados, pero esta funciona con ceros y unos
    - cada 0 representara una conexión nula
    - cada 1 representa que hay una conexión con dicho nodo
   */
  
  const graph4 = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
  ];
  
  const graph5 = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0],
  };


  class Graph {
    constructor() {
      this.nodes = 0;
      this.adjacentList = {};
    }
    addVertex(node) {
      this.adjacentList[node] = [];
      this.nodes++;
    }
    addEdge(node1, node2) {
      this.adjacentList[node1].push(node2);
      this.adjacentList[node2].push(node1);
    }
  }
  
  const myGraph = new Graph();
  //Nodes -> vertices
  myGraph.addVertex("1");
  myGraph.addVertex("3");
  myGraph.addVertex("4");
  myGraph.addVertex("5");
  myGraph.addVertex("6");
  myGraph.addVertex("8");
  // edge ->borde
  myGraph.addEdge("3","5");
  myGraph.addEdge("6","3");
  myGraph.addEdge("1","6");
  myGraph.addEdge("1","3");
  myGraph.addEdge("1","4");
  myGraph.addEdge("4","5");
  myGraph.addEdge("8","4");