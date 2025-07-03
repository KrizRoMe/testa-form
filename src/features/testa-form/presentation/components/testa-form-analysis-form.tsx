import type { TTestaForm } from '../../domain/testa-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TESTA_FORM_ANALYSIS_FORM_DEFAULT_VALUES } from '../lib/constants';
import { testaFormSchema } from '../../domain/testa-form-schema';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { LoadingButton } from '@/components/custom/loading-button';
import { Input } from '@/components/ui/input';

interface TestaFormAnalysisFormProps {
	handleSubmit: (data: TTestaForm) => Promise<void>;
	defaultValues?: TTestaForm;
}

export function TestaFormAnalysisForm({
	handleSubmit,
	defaultValues,
}: TestaFormAnalysisFormProps) {
	const form = useForm<TTestaForm>({
		resolver: zodResolver(testaFormSchema),
		defaultValues: defaultValues ?? TESTA_FORM_ANALYSIS_FORM_DEFAULT_VALUES,
	});

	const onSubmit = async (data: TTestaForm) => {
		await handleSubmit(data);
		form.reset();
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="url"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="https://ejemplo.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<LoadingButton
					type="submit"
					className="w-full"
					isLoading={form.formState.isSubmitting}
				>
					Iniciar Sesión
				</LoadingButton>
			</form>
		</Form>
	);
}
