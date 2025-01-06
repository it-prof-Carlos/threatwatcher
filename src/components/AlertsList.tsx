import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";

const alerts = [
  {
    id: 1,
    title: "Intento de acceso no autorizado",
    timestamp: "Hace 5 minutos",
    severity: "critical",
  },
  {
    id: 2,
    title: "Tráfico inusual detectado",
    timestamp: "Hace 15 minutos",
    severity: "warning",
  },
  {
    id: 3,
    title: "Actualización de seguridad completada",
    timestamp: "Hace 1 hora",
    severity: "success",
  },
];

const AlertsList = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Alertas Recientes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-center space-x-4 p-3 rounded-lg bg-background/5"
            >
              {alert.severity === "critical" ? (
                <Shield className="h-5 w-5 text-critical" />
              ) : alert.severity === "warning" ? (
                <AlertTriangle className="h-5 w-5 text-warning" />
              ) : (
                <CheckCircle className="h-5 w-5 text-success" />
              )}
              <div className="flex-1">
                <p className="font-medium">{alert.title}</p>
                <p className="text-sm text-muted-foreground">{alert.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertsList;