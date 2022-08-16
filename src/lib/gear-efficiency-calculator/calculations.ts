import type { SubStatInput, GearCalculations } from './__types';
import { gear_rolls } from './data';

export const calculate_set_total_efficiency = (inputs: GearCalculations[][]) => {
  return Math.round(
    inputs
      .map((calc) => calc.map((c) => c.efficiency).reduce((a, b) => a + b) / calc.length)
      .reduce((a, b) => a + b) / inputs.length
  );
};

export const gear_calculations = (sub_stats: SubStatInput[]) => {
  let response: GearCalculations[] = [];
  sub_stats.forEach((stat) => {
    if (stat.value === 0) {
      return;
    }
    const rolls = gear_rolls.find((roll) => roll.name === stat.name);
    // Not sure why i have to do this cast? stat.rolls is CLEARLY specified as a number... remove the cast, hover your mouse, and let the wtf ensue
    const stat_rolls = Number(stat.rolls);
    const total_max = rolls.max * (stat_rolls + 1);
    const total_min = rolls.min * (stat_rolls + 1);
    // Calculate as though min=0, KISS
    const normalized_stat = stat.value - total_min;
    const normalized_max = total_max - total_min;
    const efficiency = Math.round((normalized_stat / normalized_max) * 100);
    response.push({
      name: stat.name,
      total_max,
      total_min,
      efficiency,
      value: stat.value,
      rolls: stat.rolls
    });
  });
  return response;
};

export const set_calculations = (gear_stats: SubStatInput[][]) => {
  let response: GearCalculations[][] = [];
  gear_stats.forEach((sub_stats) => {
    response = [...response, gear_calculations(sub_stats)]
  });
  console.log(response);
  return response;
};
