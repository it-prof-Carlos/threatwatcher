export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      "Control y Mitigacion  Seg en Aplicaciones Web": {
        Row: {
          "Actualización de Seguridad Completada": number | null
          "Alertas Recientes": number | null
          "Amenazas Criticas": number
          "Amenazas Detectadas": number | null
          "Amenazas Mitigadas": number | null
          "Amenazas Pendientes": number | null
          "Mapa Global de Amenazas":
            | Database["public"]["Enums"]["organization_size"]
            | null
          "Seg Aplicaciones Web Control de Amenazas": number
          "Trafico Inusual Detectado": number | null
        }
        Insert: {
          "Actualización de Seguridad Completada"?: number | null
          "Alertas Recientes"?: number | null
          "Amenazas Criticas": number
          "Amenazas Detectadas"?: number | null
          "Amenazas Mitigadas"?: number | null
          "Amenazas Pendientes"?: number | null
          "Mapa Global de Amenazas"?:
            | Database["public"]["Enums"]["organization_size"]
            | null
          "Seg Aplicaciones Web Control de Amenazas"?: number
          "Trafico Inusual Detectado"?: number | null
        }
        Update: {
          "Actualización de Seguridad Completada"?: number | null
          "Alertas Recientes"?: number | null
          "Amenazas Criticas"?: number
          "Amenazas Detectadas"?: number | null
          "Amenazas Mitigadas"?: number | null
          "Amenazas Pendientes"?: number | null
          "Mapa Global de Amenazas"?:
            | Database["public"]["Enums"]["organization_size"]
            | null
          "Seg Aplicaciones Web Control de Amenazas"?: number
          "Trafico Inusual Detectado"?: number | null
        }
        Relationships: []
      }
      organization_contacts: {
        Row: {
          created_at: string
          email: string
          first_name: string
          id: string
          is_primary: boolean | null
          last_name: string
          organization_id: string
          phone: string | null
          position: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          first_name: string
          id?: string
          is_primary?: boolean | null
          last_name: string
          organization_id: string
          phone?: string | null
          position?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          is_primary?: boolean | null
          last_name?: string
          organization_id?: string
          phone?: string | null
          position?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_contacts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organization_types: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      organizations: {
        Row: {
          address: string | null
          city: string | null
          country: string | null
          created_at: string
          email: string
          id: string
          name: string
          organization_type_id: string
          phone: string | null
          size: Database["public"]["Enums"]["organization_size"]
          tax_id: string | null
          updated_at: string
          website: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          email: string
          id?: string
          name: string
          organization_type_id: string
          phone?: string | null
          size: Database["public"]["Enums"]["organization_size"]
          tax_id?: string | null
          updated_at?: string
          website?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          email?: string
          id?: string
          name?: string
          organization_type_id?: string
          phone?: string | null
          size?: Database["public"]["Enums"]["organization_size"]
          tax_id?: string | null
          updated_at?: string
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "organizations_organization_type_id_fkey"
            columns: ["organization_type_id"]
            isOneToOne: false
            referencedRelation: "organization_types"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      organization_size: "small" | "medium" | "large"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
