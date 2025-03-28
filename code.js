function hasCycle(graph) {
    function depthFirstSearch(currentNode, visited, stack) {
        if (!visited[currentNode]) {
            visited[currentNode] = true;
            stack[currentNode] = true;

            for (let neighbor of graph[currentNode] || []) {
                if (!visited[neighbor] && depthFirstSearch(neighbor, visited, stack)) {
                    return true;
                } else if (stack[neighbor]) {
                    return true; // Cycle detected
                }
            }
        }

        stack[currentNode] = false; // Remove from recursion stack
        return false;
    }


    visited = []
    for (i = 0; i < graph.length; i++){
        visited[i] = false;
    }

    stack = []
    for (i = 0; i < graph.length; i++){
        stack[i] = false;
    }


    // Loop through every node and run DFS
    // This DFS runs very similar to graph search, but now it only takes two inputs, the graph and the target node
    // It runs the same as DFS and looks to see if it can go from the start back to itself and if it can theres a cycle, otherwise it goes to the next node and tries the same thing
    for (let i = 0; i < graph.length; i++) {
        if (!visited[i]) {
            if (depthFirstSearch(i, visited, stack)) {
                return true;
            }
        }
    }

    return false;
}



