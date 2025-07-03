import { z } from 'zod';

export const testaFormSchema = z.object({
	url: z.string().url('URL inválida'),
});
