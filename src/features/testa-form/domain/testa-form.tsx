import type { z } from 'zod';
import type { testaFormSchema } from './testa-form-schema';

export type TTestaForm = z.infer<typeof testaFormSchema>;
