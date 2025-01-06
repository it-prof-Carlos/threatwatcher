import React from "react";
import ThreatMap from "@/components/ThreatMap";
import MetricsChart from "@/components/MetricsChart";
import AlertsList from "@/components/AlertsList";
import StatsPanel from "@/components/StatsPanel";
import { OrganizationForm } from "@/components/OrganizationForm";
import { OrganizationsList } from "@/components/OrganizationsList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Panel de Control de Amenazas</h1>
          <p className="text-muted-foreground">
            Monitoreo en tiempo real de la seguridad
          </p>
        </div>

        <StatsPanel />

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          <ThreatMap />
          <MetricsChart />
          <AlertsList />
        </div>

        <Tabs defaultValue="list" className="w-full">
          <TabsList>
            <TabsTrigger value="list">Organizaciones</TabsTrigger>
            <TabsTrigger value="new">Nueva Organización</TabsTrigger>
          </TabsList>
          <TabsContent value="list" className="mt-6">
            <OrganizationsList />
          </TabsContent>
          <TabsContent value="new" className="mt-6">
            <div className="max-w-2xl mx-auto">
              <OrganizationForm />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;