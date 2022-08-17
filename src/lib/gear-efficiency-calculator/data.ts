import type { SubStatInput } from './__types';
import { v4 as uuidv4 } from 'uuid';

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
  { id: 13, name: 'precision', min: 3, max: 7 }
];

export const stat_names = [
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
];

export const generate_initial_stats: SubStatInput[] = () => new Array<SubStatInput>(4)
  .fill({
    name: '',
    value: 0,
    rolls: 0,
    id: ''
  })
  .map(({ name, value, rolls }) => ({
    name,
    value,
    rolls,
    id: uuidv4()
  }));

export const test_sets = [
  [
    { name: 'focus', value: 18, rolls: 1, id: 'inefioniefo' },
    { name: 'crit_rate', value: 10, rolls: 1, id: 'dhdhrhdh' },
    { name: 'attack_percent', value: 24, rolls: 2, id: 'gesgesghrh' },
    { name: 'defense_percent', value: 19, rolls: 1, id: 'srhddgse' }
  ],
  [
    { name: 'defense', value: 27, rolls: 1, id: 'inefioiefo' },
    { name: 'crit_damage', value: 21, rolls: 2, id: 'dhdhrhh' },
    { name: 'attack_percent', value: 18, rolls: 1, id: 'geesghrh' },
    { name: 'precision', value: 10, rolls: 1, id: 'srhdgse' }
  ],
  [
    { name: 'focus', value: 8, rolls: 0, id: 'nefioniefo' },
    { name: 'health', value: 154, rolls: 0, id: 'hdhrhdh' },
    { name: 'crit_rate', value: 16, rolls: 2, id: 'esgesghrh' },
    { name: 'crit_damage', value: 21, rolls: 2, id: 'rhddgse' }
  ],
  [
    { name: 'speed', value: 11, rolls: 2, id: 'inefionief' },
    { name: 'health_percent', value: 7, rolls: 0, id: 'dhdhrhd' },
    { name: 'defense', value: 26, rolls: 1, id: 'gesgesghr' },
    { name: 'crit_damage', value: 20, rolls: 2, id: 'srhddgs' }
  ],
  [
    { name: 'attack_percent', value: 22, rolls: 2, id: 'inefionef' },
    { name: 'health', value: 144, rolls: 0, id: 'dhdhgrhd' },
    { name: 'defense', value: 44, rolls: 2, id: 'gesgwesghr' },
    { name: 'attack', value: 34, rolls: 0, id: 'srhvddgs' }
  ],
  [
    { name: 'crit_damage', value: 12, rolls: 1, id: 'inefisonef' },
    { name: 'attack', value: 68, rolls: 1, id: 'dhdfhgrhd' },
    { name: 'defense', value: 13, rolls: 0, id: 'ggesgwesghr' },
    { name: 'crit_rate', value: 22, rolls: 3, id: 'srhvdbdgs' }
  ]
];