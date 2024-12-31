import React, { useContext } from "react";
import { GadgetContext } from '../Context/GadgetContextProvider';

import {
  ComposedChart,
  Bar,
  Area,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Stastics = () => {
  document.title="Stastics"
    const {gadgets}=useContext(GadgetContext)
    return (
        <div className="py-10 mb-24">
          <div className="bg-[#9538E2] py-10 text-center gap-5 flex flex-col   items-center">
        <h2 className=" text-white font-bold text-[32px]">
        Stastics
        </h2>
        <p className="max-w-[600px] text-center text-white text-[16px]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        
          </div> 
    <div>

    <div className="py-5 mt-5" style={{ width: "100%", height: "500px" }}>
      <h2 className="text-center mb-4">Price vs Product Name</h2>
      <ResponsiveContainer>
        <ComposedChart
          data={gadgets}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >

          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="product_title" label={{
              value: "Product Name",
              position: "bottom", // Position at the bottom
              offset: 10, // Adjust distance from the axis
              style: { fontSize: "14px", fontWeight: "bold" },
            }} />
          <YAxis label={{
              value: "Price ($)",
              angle: -90, // Rotate the text vertically
              position: "insideLeft", // Position inside the axis
              style: { fontSize: "14px", fontWeight: "bold" },
            }} />
          <Tooltip />
          <Legend
            layout="horizontal"
            verticalAlign="top"
          />
          <Area
            type="monotone"
            dataKey="price"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="price" barSize={20} fill="#413ea0" />
          <Scatter dataKey="rating" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
 


            </div>
        </div>
    );
};

export default Stastics;