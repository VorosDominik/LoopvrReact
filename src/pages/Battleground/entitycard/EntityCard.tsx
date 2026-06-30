import "./EntityCard.css";
import type { Entity } from "../../../types/entity";
import { EntityCardType } from "../../../types/entity";

export default function EntityCard({
  entityType = EntityCardType.ENEMY,
  name,
  image,
  health,
  maxHealth,
  attack,
  armor,
  Xpneeded,
  XP,
  level,
}: Entity) {
  const isPlayer = entityType === EntityCardType.PLAYER;
  const healthPercent = Math.max(0, Math.min(100, (health / maxHealth) * 100));
  const xpPercent = Xpneeded
    ? Math.max(0, Math.min(100, (XP / Xpneeded) * 100))
    : 0;

  return (
    <article
      className={`entity-card entity-card--${isPlayer ? "hero" : "enemy"}`}
    >
      <div className="entity-card__image-frame">
        {image ? (
          <img className="entity-card__image" src={image} alt={name} />
        ) : (
          <div className="entity-card__fallback">{name.charAt(0)}</div>
        )}
        <span className="entity-card__badge">
          {isPlayer ? "Hero" : "Enemy"}
        </span>
        <h2 className="entity-card__image-name">{name}</h2>
      </div>

      <div className="entity-card__content">
        <header className="entity-card__header">
          <span className="entity-card__level">Lv {level}</span>
        </header>

        <div className="entity-card__meter">
          <div className="entity-card__meter-track">
            <div
              className="entity-card__meter-fill entity-card__meter-fill--health"
              style={{ width: `${healthPercent}%` }}
            />
            <span className="entity-card__meter-value">
              ÉP {health}/{maxHealth}
            </span>
          </div>
        </div>

        {isPlayer && (
          <div className="entity-card__meter">
            <div className="entity-card__meter-track entity-card__meter-track--xp">
              <div
                className="entity-card__meter-fill entity-card__meter-fill--xp"
                style={{ width: `${xpPercent}%` }}
              />
              <span className="entity-card__meter-value">
                XP {XP}/{Xpneeded}
              </span>
            </div>
          </div>
        )}

        <div className="entity-card__stats" aria-label="Stats">
          <h3 className="entity-card__stats-title">Statisztikák</h3>
          <div className="entity-card__stat">
            <span className="entity-card__stat-label">Támadás</span>
            <strong className="entity-card__stat-value">{attack}</strong>
          </div>
          <div className="entity-card__stat">
            <span className="entity-card__stat-label">Páncél</span>
            <strong className="entity-card__stat-value">{armor}</strong>
          </div>
        </div>
      </div>
    </article>
  );
}
export { EntityCardType };
