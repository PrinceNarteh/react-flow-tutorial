import ReactFlow, {
  Background,
  Edge,
  Node,
  useEdgesState,
  useNodesState,
} from "reactflow";

// React Flow CSS Styles
import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  { id: "1", data: { label: "Node 1" }, position: { x: 0, y: 0 } },
  { id: "2", data: { label: "Node 2" }, position: { x: -100, y: 75 } },
  { id: "3", data: { label: "Node 3" }, position: { x: 100, y: 75 } },
];
const initialEdges: Edge[] = [
  { id: "1->2", source: "1", target: "2" },
  { id: "1->3", source: "1", target: "3" }
];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(initialEdges);

  return (
    <div className="w-full h-screen">
      <ReactFlow edges={edges} nodes={nodes} fitView>
        <Background />
      </ReactFlow>
    </div>
  );
}

export default App;
