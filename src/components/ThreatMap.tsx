import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const ThreatMap = () => {
  // Simulación de amenazas para el mapa
  const threats = [
    { id: 1, lat: 40.7128, lng: -74.0060, severity: "critical" },
    { id: 2, lat: 51.5074, lng: -0.1278, severity: "warning" },
    { id: 3, lat: 35.6762, lng: 139.6503, severity: "success" },
  ];

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Mapa Global de Amenazas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-[400px] w-full bg-slate-900 rounded-lg overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('/world-map.svg')] bg-no-repeat bg-center bg-contain" />
          {threats.map((threat) => (
            <div
              key={threat.id}
              style={{
                position: "absolute",
                left: `${((threat.lng + 180) * 100) / 360}%`,
                top: `${((90 - threat.lat) * 100) / 180}%`,
              }}
              className="transform -translate-x-1/2 -translate-y-1/2"
            >
              <MapPin
                className={`h-6 w-6 animate-pulse ${
                  threat.severity === "critical"
                    ? "text-critical"
                    : threat.severity === "warning"
                    ? "text-warning"
                    : "text-success"
                }`}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ThreatMap;