import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const TrafficChart = ({ trafficData }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h2 className="font-bold text-lg mb-3">Traffic</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={trafficData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="traffic" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrafficChart;
