export class Vertex<IdType> {
	id: IdType;
	edges: IdType[];
	constructor(id: IdType) {
		this.id = id;
		this.edges = [];
	}
}
