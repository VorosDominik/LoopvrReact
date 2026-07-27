import Tile from "./tile/tile";
import "./map.css";
import type { Hero, Enemy } from "../../types/entity";

//ezek végig nagy betű elvalasztawsnal alul vonás

const heroMark: string = "H";
const enemyMark: string = "E";
const emptyMark: string = " ";
const BattleMark: string = "X";

export default function Map({
  Player,
  Monster,
}: {
  Player: Hero;
  Monster: Enemy;
}) {
  const width = 5;
  const height = 4;
  const heroPosition = Player.position;
  const enemyPosition = Monster.position;
  const mark = emptyMark;
  switch (mark) {
  }

  return (
    <div className="map">
      {Array.from({ length: height }).map((_, row) => (
        <div key={row} className="map__row">
           {/* az _ alul vonás azt jelenti hogy at veszem az első paramétert de soha nem használom  */}
          {Array.from({ length: width }).map((_, col) => {
            const isBorder =
              row === 0 || row === height - 1 || col === 0 || col === width - 1;
            let mark = emptyMark;

            const isHeroHere = heroPosition.x === col && heroPosition.y === row;

            const isEnemyHere =
              enemyPosition.x === col && enemyPosition.y === row;

            if (isHeroHere && isEnemyHere) {
              mark = BattleMark;
            } else if (isHeroHere) {
              mark = heroMark;
            } else if (isEnemyHere) {
              mark = enemyMark;
            }

            return (
              <div key={col} className="map__cell">
                {isBorder && <Tile content={mark} x={col} y={row} />}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
