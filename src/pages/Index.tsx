import React from "react";
import ThreatMap from "@/components/ThreatMap";
import MetricsChart from "@/components/MetricsChart";
import AlertsList from "@/components/AlertsList";
import StatsPanel from "@/components/StatsPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Panel de Control de Amenazas</h1>
          <p className="text-muted-foreground">Monitoreo en tiempo real de la seguridad</p>
        </div>
        
        <StatsPanel />
        
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          <ThreatMap />
          <MetricsChart />
          <AlertsList />
        </div>
      </div>
    </div>
  );
};

export default Index;