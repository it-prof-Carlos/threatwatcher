import { z } from "zod";

export const organizationFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  organization_type_id: z.string().uuid(),
  size: z.enum(["small", "medium", "large"]),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  tax_id: z.string().optional(),
  website: z.string().url().optional(),
});

export type OrganizationFormValues = z.infer<typeof organizationFormSchema>;