import type { Hero, Enemy, Character } from "../../../types/entity";

export function attackActions(attacker: Character, defender: Character) {
  defender.health -= Math.max(0, attacker.attack - defender.armor);
}
export function combatActions(hero: Hero, enemy: Enemy) {
  while (hero.health > 0 && enemy.health > 0) {
    attackActions(hero, enemy);
    if (enemy.health > 0) {
      attackActions(enemy, hero);
    }
  }
}
