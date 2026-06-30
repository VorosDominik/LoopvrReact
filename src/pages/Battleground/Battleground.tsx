import EntityCard from "./entitycard/EntityCard";
import PirateHero from "../../assets/PirateHero.jpg";
import StoneBoy from "../../assets/StoneBoy.jpeg";
import Map from "./map/Map";

import { EntityCardType } from "../../types/entity";

const entities = [
  {
    name: "GankPlank",
    img: PirateHero,
    role: "Hős",
    level: 12,
    health: 82,
    maxHealth: 100,
    attack: 34,
    armor: 8,
    Xpneeded: 1500,
    XP: 1280,
    isHero: true,
  },
  {
    name: "Kőfiu",
    img: StoneBoy,
    role: "Ellenség",
    level: 10,
    health: 66,
    maxHealth: 80,
    attack: 29,
    armor: 3,
    Xpneeded: 0,
    XP: 0,
    isHero: false,
  },
];

export default function Battleground() {
  return (
    <section className="flex w-full flex-col gap-5">
      <h1 className="text-3xl font-black uppercase text-[#8f220f] [text-shadow:2px_2px_0_#fff0b8,4px_4px_0_rgba(42,18,9,0.35)] sm:text-4xl">
        Battleground
      </h1>

      <div className="flex gap-5 lg:gap-8 items-start justify-center">
        <div className="flex-shrink-0 w-64">
          <EntityCard
            entityType={EntityCardType.PLAYER}
            name={entities[0].name}
            image={entities[0].img}
            health={entities[0].health}
            maxHealth={entities[0].maxHealth}
            attack={entities[0].attack}
            armor={entities[0].armor}
            Xpneeded={entities[0].Xpneeded}
            XP={entities[0].XP}
            level={entities[0].level}
          />
        </div>

        <Map />

        <button className="testgomb">EnemyOn/of</button>
        <div className="flex-shrink-0 w-64">
          <EntityCard
            entityType={EntityCardType.ENEMY}
            name={entities[1].name}
            image={entities[1].img}
            health={entities[1].health}
            maxHealth={entities[1].maxHealth}
            attack={entities[1].attack}
            armor={entities[1].armor}
            Xpneeded={entities[1].Xpneeded}
            XP={entities[1].XP}
            level={entities[1].level}
          />
        </div>
      </div>
    </section>
  );
}
