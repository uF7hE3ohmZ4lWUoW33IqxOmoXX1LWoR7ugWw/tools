type GearStats = {
  health: number
  health_percent: number
  attack: number
  attack_percent: number
  defense: number
  defense_percent: number
  crit_rate: number
  crit_damage: number
  speed: number
  focus: number
  resistance: number
  agility: number
  precision: number
}

type GearStatRanges = {
  min: number
  max: number
}

export const gear_rolls = [
  { id: 1, name: 'attack', min: 22, max: 42 },
  { id: 2, name: 'health', min: 113, max: 215 },
  { id: 3, name: 'defense', min: 10, max: 20 },
  { id: 4, name: 'attack_percent', min: 5, max: 10 },
  { id: 5, name: 'health_percent', min: 5, max: 10 },
  { id: 6, name: 'defense_percent', min: 5, max: 10 },
  { id: 7, name: 'speed', min: 3, max: 6 },
  { id: 8, name: 'crit_rate', min: 4, max: 8 },
  { id: 9, name: 'crit_damage', min: 5, max: 10 },
  { id: 10, name: 'focus', min: 5.5, max: 10.5 },
  { id: 11, name: 'resistance', min: 5.5, max: 10.5 },
  { id: 12, name: 'agility', min: 3, max: 7 },
  { id: 13, name: 'precision', min: 3, max: 7 },
];

export const stats = [
  'attack_percent',
  'health_percent',
  'defense_percent',
  'speed',
  'crit_rate',
  'crit_damage',
  'focus',
  'resistance',
  'agility',
  'precision',
  'attack',
  'health',
  'defense'
]

export type GearEfficiencyInput = {
  id: string
  name: string
  value: number
  rolls: number
}

export type Calculations = {
  name: string,
  total_max: number,
  total_min: number,
  efficiency: number,
  value: number,
  rolls: number
}

export const calculations = (test_inputs: GearEfficiencyInput[]) => {
  let response = [];
  test_inputs.forEach((input) => {
    if (input.value === 0) {
      return
    }
    const rolls = gear_rolls.find((roll) => roll.name === input.name)
    // Not sure why i have to do this cast? input.rolls is CLEARLY specified as a number... remove the cast, hover your mouse, and let the wtf ensue
    const input_rolls = Number(input.rolls)
    const total_max = rolls.max * (input_rolls + 1)
    const total_min = rolls.min * (input_rolls + 1)
    console.log(rolls.max, 1 + input_rolls, input.value, total_max)
    // Calculate as though min=0, KISS
    const normalized_input = input.value - total_min
    const normalized_max = total_max - total_min
    const efficiency = Math.round((normalized_input / normalized_max) * 100)
    response.push({ name: input.name, total_max, total_min, efficiency, value: input.value, rolls: input.rolls })
  })
  return response;
}