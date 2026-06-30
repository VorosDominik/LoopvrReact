enum EntityCardType {
  PLAYER = "PLAYER",
  ENEMY = "ENEMY",
}

export { EntityCardType };
export type Entity = {
  entityType: EntityCardType;
  name: string;
  image: string;
  health: number;
  maxHealth: number;
  attack: number;
  armor: number;
  Xpneeded: number;
  XP: number;
  level: number;
};
