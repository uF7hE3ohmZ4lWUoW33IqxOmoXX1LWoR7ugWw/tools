type GearExperience = {
  stars: number;
  exp_granted: number;
}

export const gear_experience: GearExperience[] = [
  { stars: 6, exp_granted: 1200 }
];

type CharmsExperience = {
  name: string;
  exp_granted: number;
}

export const charms_experience: CharmsExperience[] = [
  { name: 'standard', exp_granted: 1000 },
  { name: 'advanced', exp_granted: 3000 },
  { name: 'special', exp_granted: 10000 }
];

export type ExpLevelRequirement = {
  level: number;
  exp_required: number;
}

export const exp_level_requirements: ExpLevelRequirement[] = [
  { level: 1, exp_required: 2000 },
  { level: 2, exp_required: 4250 },
  { level: 3, exp_required: 6750 },
  { level: 4, exp_required: 9750 },
  { level: 5, exp_required: 13250 },
  { level: 6, exp_required: 17250 },
  { level: 7, exp_required: 23250 },
  { level: 8, exp_required: 31250 },
  { level: 9, exp_required: 41250 },
  { level: 10, exp_required: 56250 },
  { level: 11, exp_required: 76250 },
  { level: 12, exp_required: 101250 },
  { level: 13, exp_required: 146250 },
  { level: 14, exp_required: 211250 },
  { level: 15, exp_required: 306250 }
];

export type ICalculations = {
  exp_required: number,
  gear_required: number[],
  charms_required: number[]
}

export const calculations = (current_level: ExpLevelRequirement, target_level: ExpLevelRequirement): ICalculations => ({
  exp_required: target_level.exp_required - current_level.exp_required,
  gear_required: gear_experience.map((gear: GearExperience) => Math.ceil(target_level.exp_required / gear.exp_granted)),
  charms_required: charms_experience.map((charm: CharmsExperience) => Math.ceil(target_level.exp_required / charm.exp_granted))
})