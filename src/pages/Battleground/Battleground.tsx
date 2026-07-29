import EntityCard from "../../components/entitycard/EntityCard";
import PirateHero from "../../assets/PirateHero.jpg";
import type { Hero, Enemy } from "../../types/entity";
import StoneBoy from "../../assets/StoneBoy.jpeg";
import Map from "../../components/map/Map";
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

type Entities = {
  Player: Hero;
  Monster: Enemy;
};

export default function Battleground() {
  const [heroAlive, setHeroAlive] = useState(true);
  const [passive, setPassive] = useState(false);
  const [isBattle, setBattle] = useState(false);
  const [index, setIndex] = useState(0);

  const battleRef = useRef(false);
  const battleTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const [entities, setEntities] = useState<Entities>({
    Player: selectedHero,
    Monster: selectedEnemy,
  });
  const clearBattleTimers = () => {
    battleTimers.current.forEach((timer) => {
      clearTimeout(timer);
    });

    battleTimers.current = [];
  };

  const move = (tileIndex: number) => {
    setEntities((prev) => ({
      ...prev,
      Player: {
        ...prev.Player,
        position: tiles[tileIndex],
      },
    }));
    console.log(tileIndex);
  };
  function battle() {
    if (!battleRef.current) return;

    const heroAttackTimer = setTimeout(() => {
      if (!battleRef.current) return;

      setEntities((prev) => {
        const hero = prev.Player;
        const enemy = prev.Monster;

        const updatedEnemy = {
          ...enemy,
          health: attackActions(hero, enemy),
        };

        console.log("Hero támad:", updatedEnemy.health);

        if (updatedEnemy.health <= 0) {
          battleRef.current = false;
          toast("mehetsz tovább GG");

          battleRef.current = false;
          setTimeout(() => {
            Reward();
          }, 500);

          return {
            Player: hero,
            Monster: {
              ...updatedEnemy,
              health: 0,
            },
          };
        }

        return {
          Player: hero,
          Monster: updatedEnemy,
        };
      });
    }, 1000);

    battleTimers.current.push(heroAttackTimer);

    const enemyAttackTimer = setTimeout(() => {
      if (!battleRef.current) return;

      setEntities((prev) => {
        const hero = prev.Player;
        const enemy = prev.Monster;

        const updatedHero = {
          ...hero,
          health: attackActions(enemy, hero),
        };

        console.log("Enemy támad:", updatedHero.health);

        if (updatedHero.health <= 0) {
          battleRef.current = false;
          alert("ez faájdalmasnak tünt!");
          setHeroAlive(false);

          return {
            Player: {
              ...updatedHero,
              health: 0,
            },
            Monster: enemy,
          };
        }
        // következő kör csak egyszer
        if (battleRef.current) {
          setTimeout(() => {
            battle();
          }, 500);
        }

        return {
          Player: updatedHero,
          Monster: enemy,
        };
      });
    }, 2200);

    battleTimers.current.push(enemyAttackTimer);
  }
  function Reward() {
    setIndex((prev) => {
      const next = prev >= tiles.length - 1 ? 0 : prev + 1;

      move(next);

      return next;
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (battleRef.current == false) {
        setIndex((prev) => (prev >= tiles.length - 1 ? 0 : prev + 1));
      }
      clearInterval(interval);
      if (
        entities.Player.position.x === entities.Monster.position.x &&
        entities.Player.position.y == entities.Monster.position.y
      ) {
        //ez fontos vöröske
        if (!battleRef.current) {
          battleRef.current = true;
          console.log("BATTLE START");
          battle();
        }
        //további események:
      } else {
        move(index);
      }
    }, 1000);
    console.log("meghivtuk");
    console.log(isBattle);

    return () => clearInterval(interval);
  }, [index, isBattle]);

  return (
    <section className="flex w-full flex-col gap-5">
      <div className="flex gap-5 lg:gap-8 items-start justify-center">
        <div className="flex-shrink-0 w-64">
          <EntityCard character={entities.Player} />
        </div>

        <Map Player={entities.Player} Monster={entities.Monster} />

        {battleRef.current == true && (
          <div className="flex-shrink-0 w-64">
            <EntityCard character={entities.Monster} />
          </div>
        )}
      </div>
    </section>
  );
}
