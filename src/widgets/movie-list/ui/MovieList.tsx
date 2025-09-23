import { MovieCard, type IMovie } from "@/entities/movie";
import { memo, type FC } from "react";

interface Props {
	movies: IMovie[];
}

export const MovieList: FC<Props> = memo((props) => {
	const { movies } = props;
	
	return (
		<div className="container mx-auto max-w-[1200px] px-6">
			<div className="relative rounded-2xl border-2 border-yellow-400 bg-black/70 p-5">
				<div className="flex items-center justify-between px-1">
					<span className="text-[10px] uppercase tracking-wide text-white/60">На неделе</span>
					<span className="bg-yellow-400 text-black text-[10px] font-semibold px-2 py-0.5 rounded">Показать все ›</span>
				</div>
				<div className="mt-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
					{movies?.map((item: IMovie) => (
						<MovieCard key={item.id} movie={item} />
					))}
				</div>
			</div>
		</div>
	);
});
