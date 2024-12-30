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
    const {gadgets}=useContext(GadgetContext)
    return (
        <div className="py-10 mb-24">
           
    <div>

    <div style={{ width: "100%", height: "500px" }}>
      <h2 className="text-center mb-4">Price vs Product Name</h2>
      <ResponsiveContainer>
        <ComposedChart
          data={gadgets}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="product_title" />
          <YAxis />
          <Tooltip />
          <Legend />
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