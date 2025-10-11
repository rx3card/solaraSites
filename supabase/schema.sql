-- Crear tabla de mensajes de contacto
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_type TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  read_at TIMESTAMP WITH TIME ZONE
);

-- Crear índice para búsquedas más rápidas
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);

-- Habilitar Row Level Security (RLS)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserciones anónimas (para el formulario público)
CREATE POLICY "Permitir inserciones anónimas"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Política para permitir lectura solo a usuarios autenticados (para el admin)
-- Si no usas autenticación, puedes omitir esta política o usar service_role
CREATE POLICY "Permitir lectura a usuarios autenticados"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Comentarios para documentación
COMMENT ON TABLE contact_messages IS 'Mensajes de contacto desde el formulario web';
COMMENT ON COLUMN contact_messages.status IS 'Estado del mensaje: new (nuevo), read (leído), replied (respondido)';
