import EntityCard from "../../components/entitycard/EntityCard";
import PirateHero from "../../assets/PirateHero.jpg";
import type { Hero, Enemy } from "../../types/entity";
import StoneBoy from "../../assets/StoneBoy.jpeg";
import Map from "./../../components/map/Map";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { attackActions } from "../../utils/game-logic/actions";
import type { coordinate } from "../../types/coordinate";

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
  position: { x: 0, y: 0 },
};

const selectedEnemy: Enemy = {
  name: "Malphite",
  image: StoneBoy,
  level: 10,
  health: 80,
  maxHealth: 80,
  attack: 28,
  armor: 5,
  role: "enemy",
  position: { x: 4, y: 3 },
};

const Player: Hero = selectedHero;
const Monster: Enemy = selectedEnemy;

const tiles: coordinate[] = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 3, y: 0 },
  { x: 4, y: 0 },
  { x: 4, y: 1 },
  { x: 4, y: 2 },
  { x: 4, y: 3 },
  { x: 3, y: 3 },
  { x: 2, y: 3 },
  { x: 1, y: 3 },
  { x: 0, y: 3 },
  { x: 0, y: 2 },
  { x: 0, y: 1 },
];

export default function Battleground() {
  const [heroAlive, setHeroAlive] = useState(true);
  const [passive, setPassive] = useState(false);

  // csak megjelenítéshez
  const [isBattle, setBattle] = useState(false);

  // valódi harci kapcsoló !!
  const battleRef = useRef(false);

  const [index, setIndex] = useState(0);
  // legyen object majd
  const [entitys, setEntitys] = useState<[Hero, Enemy]>([
    { ...Player },
    { ...Monster },
  ]);
  // ennek majd uűna nézek ref nek !!
  function battle() {
    if (!battleRef.current) {
      return;
    }

    // HERO támadás
    // majd keres jobb megoldást
    setTimeout(() => {
      if (!battleRef.current) return;

      setEntitys(([hero, enemy]) => {
        const updatedEnemy = {
          ...enemy,
          health: attackActions(hero, enemy),
        };

        console.log("Enemy HP:", updatedEnemy.health);

        if (updatedEnemy.health <= 0) {
          toast("GG mehetsz tovább");

          battleRef.current = false;
          setBattle(false);
          setPassive(false);

          return [
            hero,
            {
              ...updatedEnemy,
              health: 0,
            },
          ];
        }

        return [hero, updatedEnemy];
      });
    }, 1000);

    // ENEMY támadás
    setTimeout(() => {
      if (!battleRef.current) return;

      setEntitys(([hero, enemy]) => {
        const updatedHero = {
          ...hero,
          health: attackActions(enemy, hero),
        };

        console.log("Hero HP:", updatedHero.health);

        if (updatedHero.health <= 0) {
          alert("Vesztettél");

          battleRef.current = false;
          setBattle(false);
          setHeroAlive(false);

          return [
            {
              ...updatedHero,
              health: 0,
            },
            enemy,
          ];
        }

        return [updatedHero, enemy];
      });

      // következő kör
      if (battleRef.current) {
        battle();
      }
    }, 2200);
  }

  // Hős mozgás
  useEffect(() => {
    if (!heroAlive || passive) {
      return;
    }

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= tiles.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [heroAlive, passive]);

  // pozíció frissítés + találkozás
  useEffect(() => {
    const nextPosition = tiles[index];

    const enemyPosition = entitys[1].position;

    const collision =
      nextPosition.x === enemyPosition.x && nextPosition.y === enemyPosition.y;

    if (collision) {
      setPassive(true);

      setEntitys(([hero, enemy]) => [
        {
          ...hero,
          position: nextPosition,
        },
        enemy,
      ]);

      battleRef.current = true;
      setBattle(true);

      battle();

      return;
    }

    setEntitys(([hero, enemy]) => [
      {
        ...hero,
        position: nextPosition,
      },
      enemy,
    ]);
  }, [index]);

  return (
    <section className="flex w-full flex-col gap-5">
      <div className="flex gap-5 lg:gap-8 items-start justify-center">
        <div className="flex-shrink-0 w-64">
          <EntityCard character={entitys[0]} />
        </div>

        <Map Player={entitys[0]} Monster={entitys[1]} />

        {isBattle && (
          <div className="flex-shrink-0 w-64">
            <EntityCard character={entitys[1]} />
          </div>
        )}
      </div>
    </section>
  );
}
