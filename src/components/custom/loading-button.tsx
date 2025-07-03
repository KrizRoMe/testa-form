import { Button, type ButtonProps } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface LoadingButtonProps extends ButtonProps {
	isLoading: boolean;
}

export function LoadingButton({
	isLoading,
	children,
	...props
}: LoadingButtonProps) {
	return (
		<Button {...props} disabled={props.disabled || isLoading}>
			{isLoading ? (
				<>
					<Loader2 className="animate-spin mr-2 h-4 w-4" />
					Cargando...
				</>
			) : (
				children
			)}
		</Button>
	);
}
