import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";

const stats = [
  {
    title: "Amenazas Críticas",
    value: "12",
    icon: Shield,
    color: "text-critical",
  },
  {
    title: "Alertas Pendientes",
    value: "24",
    icon: AlertTriangle,
    color: "text-warning",
  },
  {
    title: "Amenazas Mitigadas",
    value: "89",
    icon: CheckCircle,
    color: "text-success",
  },
];

const StatsPanel = () => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardContent className="flex items-center p-6">
            <stat.icon className={`h-8 w-8 ${stat.color}`} />
            <div className="ml-4">
              <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsPanel;