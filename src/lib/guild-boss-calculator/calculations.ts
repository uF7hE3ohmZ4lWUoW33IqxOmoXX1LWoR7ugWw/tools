import type { Hero } from './__types'

const calculate_points_for_speed = (speed: number) => {
  return Math.floor((speed - 100) / 4)
}

export const calculate_points_for_heroes = (speeds: number[]) => {
  return speeds.map(speed => calculate_points_for_speed(speed))
}

/**
 * THIS IS SO BAD!!!!!
 * Red can give like 5 scuff marks for this one, but I just CBA right now
 */
export const calculate_turn_points = (speeds: number[]) => {
  let response: number[] = [];
  let current_points = 0

  for(let speed of speeds) {
    speed = calculate_points_for_speed(speed)
    current_points += speed
    response.push(current_points)
    if (speed + current_points > 100) {response.push(speed + current_points); break;}
  }

  if(current_points < 100) {
    for(let speed of speeds) {
      speed = calculate_points_for_speed(speed)
      current_points += speed
      response.push(current_points)
      if (speed + current_points > 100) {response.push(speed + current_points); break;}
    }
  }
  return response
}