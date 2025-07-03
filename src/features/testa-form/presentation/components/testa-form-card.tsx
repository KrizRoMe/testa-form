'use client';

import { Globe } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { TTestaForm } from '../../domain/testa-form';
import { TestaFormAnalysisForm } from './testa-form-analysis-form';

export function TestaFormCard() {
	const handleSubmit = async (data: TTestaForm) => {
		console.log(data);
	};

	return (
		<Card className="w-full max-w-md shadow-xl border bg-card/80 backdrop-blur-sm px-4">
			<CardHeader className="text-center">
				<div className="flex items-center justify-center mb-4">
					<div className="p-3 rounded-full bg-primary text-primary-foreground">
						<Globe className="w-6 h-6" />
					</div>
				</div>
				<h1 className="text-3xl font-light text-foreground tracking-tight">
					TestaForm
				</h1>
				<p className="text-muted-foreground text-sm mt-2">
					Analiza y testea formularios web para optimizar su rendimiento y
					usabilidad
				</p>
			</CardHeader>

			<CardContent>
				<TestaFormAnalysisForm handleSubmit={handleSubmit} />
			</CardContent>
		</Card>
	);
}
