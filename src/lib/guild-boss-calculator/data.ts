import type { Team } from './__types';
import { v4 as uuidv4 } from 'uuid';

export const generate_team = () => {
	return {
		id: uuidv4(),
		turn_meter: 0,
		has_speed_debuff: false,
		heroes: new Array(4)
			.fill({
				id: '',
				name: '',
				speed: 0
			})
			.map(({ name, speed }) => ({
				name,
				speed,
				id: uuidv4()
			}))
	};
};

export const test_team_1: Team = {
	id: uuidv4(),
	has_speed_debuff: false,
	heroes: [
		{ name: 'msb', speed: 231 },
		{ name: 'william', speed: 267 },
		{ name: 'hector', speed: 167 },
		{ name: 'jacob', speed: 144 }
	]
};

export const test_team_2: Team = {
	id: uuidv4(),
	turn_meter: 22,
	has_speed_debuff: false,
	heroes: [
		{ name: 'abbadon', speed: 127 },
		{ name: 'scarlett', speed: 158 },
		{ name: 'flarence', speed: 285 },
		{ name: 'boolin', speed: 121 }
	]
};
