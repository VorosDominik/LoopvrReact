import EntityCard from "../Battleground/entitycard/EntityCard";
import PirateHero from "../../assets/PirateHero.jpg";
import type { Hero, Enemy } from "../../types/entity";
import StoneBoy from "../../assets/StoneBoy.jpeg";
import Map from "./map/Map";
import { useState, useEffect } from "react";
import { combatActions } from "./GameLogic/actions";

export default function Battleground() {
  const selectedHero: Hero = {
    name: "GankPlank",
    image: PirateHero,
    level: 12,
    health: 100,
    maxHealth: 100,
    attack: 34,
    armor: 8,
    xpNeeded: 1500,
    xp: 1280,
    role: "hero",
  };
  const selectedEnemy: Enemy = {
    name: "StoneBoy",
    image: StoneBoy,
    level: 10,
    health: 80,
    maxHealth: 80,
    attack: 28,
    armor: 5,
    role: "enemy",
  };
  const [hero, setHero] = useState<Hero>(selectedHero);
  const [enemy, setEnemy] = useState<Enemy>(selectedEnemy);

  useEffect(() => {
    combatActions(hero, enemy);
  }, []);

  return (
    <section className="flex w-full flex-col gap-5">
      <h1 className="text-3xl font-black uppercase text-[#8f220f] [text-shadow:2px_2px_0_#fff0b8,4px_4px_0_rgba(42,18,9,0.35)] sm:text-4xl">
        Battleground
      </h1>

      <div className="flex gap-5 lg:gap-8 items-start justify-center">
        <div className="flex-shrink-0 w-64">
          <EntityCard character={hero} />
        </div>

        <Map />

        <button className="testgomb">EnemyOn/of</button>
        <div className="flex-shrink-0 w-64">
          <EntityCard character={enemy} />
        </div>
      </div>
    </section>
  );
}
