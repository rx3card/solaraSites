-- Eliminar políticas existentes que puedan estar causando conflicto
DROP POLICY IF EXISTS "Permitir inserciones anónimas" ON contact_messages;
DROP POLICY IF EXISTS "Permitir lectura a usuarios autenticados" ON contact_messages;

-- Crear política que permita inserciones públicas (para el formulario)
CREATE POLICY "Enable insert for anonymous users"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Crear política que permita lectura pública (para el panel admin sin autenticación)
CREATE POLICY "Enable read for all users"
  ON contact_messages
  FOR SELECT
  TO public
  USING (true);

-- Crear política que permita actualizar (para marcar como leído/respondido)
CREATE POLICY "Enable update for all users"
  ON contact_messages
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);
