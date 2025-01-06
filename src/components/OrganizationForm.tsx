import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { OrganizationFormFields } from "./forms/OrganizationFormFields";
import { organizationFormSchema, type OrganizationFormValues } from "./forms/types";

export function OrganizationForm() {
  const queryClient = useQueryClient();
  
  const form = useForm<OrganizationFormValues>({
    resolver: zodResolver(organizationFormSchema),
    defaultValues: {
      name: "",
      size: "medium",
      email: "",
      organization_type_id: "",
    },
  });

  const { data: organizationTypes } = useQuery({
    queryKey: ["organizationTypes"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("organization_types")
        .select("*");
      if (error) throw error;
      return data;
    },
  });

  async function onSubmit(values: OrganizationFormValues) {
    try {
      const { error } = await supabase
        .from("organizations")
        .insert({
          name: values.name,
          organization_type_id: values.organization_type_id,
          size: values.size,
          email: values.email,
          phone: values.phone,
          address: values.address,
          city: values.city,
          country: values.country,
          tax_id: values.tax_id,
          website: values.website,
        });
      
      if (error) throw error;
      
      queryClient.invalidateQueries({ queryKey: ["organizations"] });
      toast.success("Organización creada exitosamente");
      form.reset();
    } catch (error) {
      toast.error("Error al crear la organización");
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <OrganizationFormFields 
          form={form}
          organizationTypes={organizationTypes || []}
        />
        <Button type="submit">Crear Organización</Button>
      </form>
    </Form>
  );
}