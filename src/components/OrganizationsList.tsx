import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Building2, Loader2 } from "lucide-react";

export function OrganizationsList() {
  const { data: organizations, isLoading } = useQuery({
    queryKey: ["organizations"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("organizations")
        .select(`
          *,
          organization_type:organization_types(name)
        `);
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Tamaño</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Ciudad</TableHead>
            <TableHead>País</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {organizations?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                <div className="flex flex-col items-center gap-2 py-4">
                  <Building2 className="h-8 w-8 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    No hay organizaciones registradas
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            organizations?.map((org) => (
              <TableRow key={org.id}>
                <TableCell className="font-medium">{org.name}</TableCell>
                <TableCell>{org.organization_type.name}</TableCell>
                <TableCell className="capitalize">{org.size}</TableCell>
                <TableCell>{org.email}</TableCell>
                <TableCell>{org.city}</TableCell>
                <TableCell>{org.country}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}