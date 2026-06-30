import type { Entity } from "../../../types/entity";

export function Battle(Hero: Entity, Enemy: Entity) {
  while (Hero.health > 0 && Enemy.health > 0) {
    // Hero attacks Enemy
    const heroDamage = Math.max(1, Hero.attack - Enemy.armor);
    Enemy.health -= heroDamage;

    if (Enemy.health <= 0) {
      console.log(`${Hero.name} wins!`);
      break;
    }

    // Enemy attacks Hero
    const enemyDamage = Math.max(0, Enemy.attack - Hero.armor);
    Hero.health -= enemyDamage;

    if (Hero.health <= 0) {
      console.log(`${Enemy.name} wins!`);
      break;
    }
  }
}
