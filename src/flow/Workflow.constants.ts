import { Edge, Node } from "reactflow";

export const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { amount: 10 },
    type: "paymentInit",
  },
];

export const initialEdges: Edge[] = [];
