import React from "react";
import ReactCountryFlag from "react-country-flag";
import { Handle, NodeProps, Position } from "reactflow";

interface PaymentCountryProps {
  currency: string;
  country: string;
  countryCode: string;
}

const PaymentCountry = ({
  data: { currency, country, countryCode },
}: NodeProps<PaymentCountryProps>) => {
  return (
    <div className="flex items-center border-2 bg=[#e2e8f0] border-[#bbbbdf] p-2 gap-2 w-[155px] rounded">
      <ReactCountryFlag
        countryCode={countryCode}
        svg
        aria-label={country}
        style={{ fontSize: "2em", lineHeight: "2em" }}
      />
      <div className="flex-1">
        <h4 className="text-xs font-bold tracking-wide">{country}</h4>
        <h6 className="text-xs">{currency}</h6>
      </div>
      <Handle type="source" position={Position.Left} />
      <Handle type="target" position={Position.Right} />
    </div>
  );
};

export default PaymentCountry;
