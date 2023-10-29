import { IGraph } from './IGraph';
import { Vertex } from './Vertex';

export class DirectedGraph implements IGraph {
	vertices: { [key: string]: Vertex<string | number> };
	constructor() {
		this.vertices = {};
	}
	addVertex(vertex: Vertex<string | number>) {
		this.vertices[vertex.id] = new Vertex(vertex.id.toString());
	}
	removeVertex(vertexId: string | number) {
		delete this.vertices[vertexId];
		for (let vertex in this.vertices) {
			this.vertices[vertex].edges = this.vertices[vertex].edges.filter(
				(edge: string | number) => edge !== vertexId
			);
		}
	}
	addEdge(vertexId1: string | number, vertexId2: string | number) {
		this.vertices[vertexId1].edges.push(vertexId2);
	}
	removeEdge(vertexId1: string | number, vertexId2: string | number) {
		this.vertices[vertexId1].edges = this.vertices[vertexId1].edges.filter(
			(vertexId: string | number) => vertexId !== vertexId2
		);
	}
}
