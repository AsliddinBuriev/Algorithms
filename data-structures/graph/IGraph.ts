import { Vertex } from './Vertex';

export interface IGraph {
	vertices: object;
	addVertex: (vertex: Vertex<string | number>) => void;
	removeVertex: (vertexId: string | number) => void;
	addEdge: (vertexId1: string | number, vertexId2: string | number) => void;
	removeEdge: (vertexId1: string | number, vertexId2: string | number) => void;
}
