import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres'),
  
  email: z
    .string()
    .email('Por favor ingresa un email válido')
    .min(5, 'El email es muy corto')
    .max(100, 'El email no puede exceder 100 caracteres'),
  
  phone: z
    .string()
    .min(10, 'El teléfono debe tener al menos 10 dígitos')
    .max(20, 'El teléfono no puede exceder 20 caracteres')
    .regex(/^[\d\s\+\-\(\)]+$/, 'El teléfono solo puede contener números, espacios y los caracteres + - ( )'),
  
  projectType: z
    .string()
    .min(1, 'Por favor selecciona un tipo de proyecto'),
  
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje no puede exceder 1000 caracteres'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
