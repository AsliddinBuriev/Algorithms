import { UndirectedGraph } from './UndirectedGraph';
import { Vertex } from './Vertex';

export interface IGraphTraversal {
	breadthFirstSearchRecursive(
		startId: string,
		graph: UndirectedGraph
	): Array<string | number>;
	breadthFirstSearchIterative(
		startId: string,
		graph: UndirectedGraph
	): Array<string | number>;
	depthFirstSearchRecursive(
		startId: string,
		graph: UndirectedGraph
	): Array<string | number>;
	depthFirstSearchIterative(
		startId: string,
		graph: UndirectedGraph
	): Array<string | number>;
}

export class GraphTraversal implements IGraphTraversal {
	breadthFirstSearchRecursive(
		startId: string,
		graph: UndirectedGraph
	): Array<string | number> {
		const result: Array<string | number> = [];
		const visited: { [key: string]: boolean } = {};
		function bfs(vertex: Vertex<string | number>) {
			if (!vertex) return null;
			visited[vertex.id.toString()] = true;
			result.push(vertex.id);
			vertex.edges.forEach((edgeId: string | number) => {
				if (!visited[edgeId.toString()]) {
					return bfs(graph.vertices[edgeId.toString()]);
				}
			});
		}
		bfs(graph.vertices[startId]);
		return result;
	}
	breadthFirstSearchIterative(
		startId: string,
		graph: UndirectedGraph
	): Array<string | number> {
		const result: Array<string | number> = [];
		const queue: Vertex<string | number>[] = [graph.vertices[startId]];
		const visited: { [key: string]: boolean } = {};
		visited[startId] = true;
		while (queue.length) {
			const currentVertex: Vertex<string | number> = queue.shift()!;
			result.push(currentVertex.id);
			currentVertex.edges.forEach((edgeId: string | number) => {
				if (!visited[edgeId.toString()]) {
					console.log(currentVertex.id, edgeId);
					visited[edgeId.toString()] = true;
					queue.push(graph.vertices[edgeId.toString()]);
				}
			});
		}

		return result;
	}
	depthFirstSearchRecursive(
		startId: string,
		graph: UndirectedGraph
	): Array<string | number> {
		const result: Array<string | number> = [];
		const visited: { [key: string]: boolean } = {};
		function dfs(vertex: Vertex<string | number>) {
			if (!vertex) return null;
			visited[vertex.id.toString()] = true;
			result.push(vertex.id);
			vertex.edges.forEach((edgeId: string | number) => {
				if (!visited[edgeId.toString()]) {
					return dfs(graph.vertices[edgeId.toString()]);
				}
			});
		}
		dfs(graph.vertices[startId]);
		return result;
	}
	depthFirstSearchIterative(
		startId: string,
		graph: UndirectedGraph
	): Array<string | number> {
		const result: Array<string | number> = [];
		const stack: Vertex<string | number>[] = [graph.vertices[startId]];
		const visited: { [key: string]: boolean } = {};
		visited[startId] = true;
		while (stack.length) {
			const currentVertex: Vertex<string | number> = stack.pop()!;
			result.push(currentVertex.id);
			currentVertex.edges.forEach((edgeId: string | number) => {
				if (!visited[edgeId.toString()]) {
					visited[edgeId.toString()] = true;
					stack.push(graph.vertices[edgeId.toString()]);
				}
			});
		}
		return result;
	}
}

const graph = new UndirectedGraph();
for (let i = 0; i < 7; i++) {
	graph.addVertex(new Vertex(i + 1));
}
console.log(graph.vertices);
graph.addEdge(1, 6);
graph.addEdge(6, 3);
graph.addEdge(3, 5);
graph.addEdge(4, 1);
graph.addEdge(2, 4);
graph.addEdge(4, 7);

const graphTraversal = new GraphTraversal();
console.log(graphTraversal.breadthFirstSearchIterative('1', graph));
