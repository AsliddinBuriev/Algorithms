import { IGraph } from './IGraph';
import { Vertex } from './Vertex';

export class DirectedGraph implements IGraph {
	vertices: object;
	constructor() {
		this.vertices = {};
	}
	addVertex(vertex: Vertex<string | number>) {
		this.vertices[vertex.id] = vertex.edges;
	}
	removeVertex(vertexId: string | number) {
		delete this.vertices[vertexId];
	}
	addEdge(vertexId1: string | number, vertexId2: string | number) {
		this.vertices[vertexId1].push(vertexId2);
	}
	removeEdge(vertexId1: string | number, vertexId2: string | number) {
		this.vertices[vertexId1] = this.vertices[vertexId1].filter(
			(vertexId: string | number) => vertexId !== vertexId2
		);
	}
}
