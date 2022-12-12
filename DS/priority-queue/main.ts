import { Node, PriorityQueue } from "./PriorityQueue";


const priorityQueue = new PriorityQueue();

const arr = [41, 39, 33, 18, 27, 12, 55]
for(let i = arr.length -1; i > 0; i--){
    priorityQueue.enqueue(arr[i], i)
}
console.log('--------------------------------------------------');
console.log(priorityQueue.nodes);
console.log('--------------------------------------------------');
for(let i = 0; i < 6; i++){
    priorityQueue.dequeue()
}