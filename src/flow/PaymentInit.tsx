import { NodeProps } from "reactflow";

export default function PaymentInit({
  data: { amount },
}: NodeProps<{ amount: number }>) {
  return (
    <div className="bg-white border border-[#aa1fff]">
      <div className="p-2 bg-[#410566] text-white">Payment Initialized</div>
      <p className="text-2xl p-1">{amount}</p>
    </div>
  );
}
