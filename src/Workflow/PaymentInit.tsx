import { NodeProps } from "reactflow";

export default function PaymentInit({
  data: { amount },
}: NodeProps<{ amount: number }>) {
  return <div className="bg-white border #aa1fff">{amount}</div>;
}
