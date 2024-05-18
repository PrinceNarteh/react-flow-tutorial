import { useCallback } from "react";
import ReactFlow, {
  Background,
  Connection,
  Controls,
  Edge,
  Node,
  NodeTypes,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

// React Flow CSS Styles
import "reactflow/dist/style.css";
import PaymentInit from "./flow/PaymentInit";
import { initialEdges, initialNodes } from "./flow/data";
import PaymentCountry from "./flow/PaymentCountry";

const nodeTypes: NodeTypes = {
  paymentInit: PaymentInit,
  paymentCountry: PaymentCountry,
};

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(initialEdges);

  const onConnect = useCallback((connection: Connection) => {
    const newEdge: Edge = {
      ...connection,
      id: `${connection.source}->${connection.target}`,
    };
    setEdges((prevEdges) => addEdge(newEdge, prevEdges));
  }, []);

  return (
    <div className="w-full h-screen">
      <ReactFlow
        edges={edges}
        nodes={nodes}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
