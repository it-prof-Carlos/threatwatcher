import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Lun", amenazas: 40 },
  { name: "Mar", amenazas: 30 },
  { name: "Mie", amenazas: 20 },
  { name: "Jue", amenazas: 27 },
  { name: "Vie", amenazas: 18 },
  { name: "Sab", amenazas: 23 },
  { name: "Dom", amenazas: 34 },
];

const MetricsChart = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Amenazas Detectadas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amenazas" fill="#FF4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricsChart;