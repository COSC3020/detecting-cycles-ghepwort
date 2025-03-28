# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Answers

The worst-case big $\Theta$ complexity is $\Theta(|V| \cdot |E|)$. First we initilize the the visited and the stack which both take $|V|$. Next we iterate through every node and run depthFirstSearch. The loop will take $V$ time and the depthFirstSearch in the worst case will run through every node and edge which will give us $|V|+|E|$. All together this gives us a time complexity of $|V|+|V|+|V| \cdot (|V|+|E|)= 2|V|+|V|^2+|V| \cdot |E|$. In the worst cast $|E| = |V|^2$ so asymptoticaly this means that the overall time complexity in the worst case is $\Theta(|V| \cdot |E|)$.

## Sources

Not really a "source", but [this](https://csacademy.com/app/graph_editor/) website helped me a lot with drawing the graphs.

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice." 
