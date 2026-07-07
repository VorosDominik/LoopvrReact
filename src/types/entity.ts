export type Entity = {
  name: string;
  image: string;
  health: number;
  maxHealth: number;
  attack: number;
  armor: number;
  level: number;
};
export type Hero = Entity & {
  role: "hero";
  xp: number;
  xpNeeded: number;
};

export type Character = Hero | Enemy;
export type Enemy = Entity & {
  role: "enemy";
};
