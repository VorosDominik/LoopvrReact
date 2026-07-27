import type { Hero, Enemy, Character } from "../../types/entity";

export function attackActions(attacker: Character, defender: Character) {
  const damage = Math.max(0, attacker.attack - defender.armor);
  const updatedhealth = defender.health-damage;
console.log(attacker.name+": támad")
  return updatedhealth;
}

