import type { Team } from './__types';

const calculate_points_for_speed = (speed: number) => {
	return Math.floor((speed - 100) / 4);
};

export const calculate_turn_points_for_team = (team: Team[]) => {
	const response: HeroCalculation[] = [];
	let current_points = 0;
	const team_turns = team.turn_meter
		? [{ name: '', speed: team.turn_meter + 100 }].concat(
				...Array.from({ length: 15 }, () => team.heroes.map(h => h).sort((a, b) => b.speed - a.speed))
		  )
		: [].concat(...Array.from({ length: 15 }, () => team.heroes.map(h=>h).sort((a, b) => b.speed - a.speed)));

	for (const hero of team_turns) {
		const calc_speed = team.has_speed_debuff ? hero.speed + 30 : hero.speed;
		const speed = calculate_points_for_speed(calc_speed);
		current_points += speed;
		response.push({ name: hero.name, speed: hero.speed, points: current_points });
		if (current_points >= 100) {
			current_points = 0;
		}
	}

	return response;
};
