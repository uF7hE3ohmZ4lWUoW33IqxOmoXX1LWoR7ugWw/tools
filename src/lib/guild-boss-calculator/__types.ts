export type Hero = {
	id: string;
	name: string;
	speed: number;
};

export type HeroCalculation = {
	name: string;
	speed: number;
	points: number;
};

export type Team = {
	id: string;
	turn_meter?: number;
	has_speed_debuff: boolean;
	heroes: Hero[];
};
