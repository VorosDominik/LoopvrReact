import "./EntityCard.css";
import type { Character } from "../../../src/types/entity";

export default function EntityCard({ character }: { character: Character }) {
  const healthPercent = Math.max(
    0,
    Math.min((character.health / character.maxHealth) * 100),
  );
  const xpPercent =
    character.role === "hero" && character.xpNeeded
      ? Math.max(0, Math.min(100, (character.xp / character.xpNeeded) * 100))
      : 0;
  return (
    <article className={`entity-card entity-card--${character.role}`}>
      <div className="entity-card__image-frame">
        {character.image ? (
          <img
            className="entity-card__image"
            src={character.image}
            alt={character.name}
          />
        ) : (
          <div className="entity-card__fallback">
            {character.name.charAt(0)}
          </div>
        )}
        <span className="entity-card__badge">{character.role}</span>
        <h2 className="entity-card__image-name">{character.name}</h2>
      </div>

      <div className="entity-card__content">
        <header className="entity-card__header">
          <span className="entity-card__level">Lv {character.level}</span>
        </header>

        <div className="entity-card__meter">
          <div className="entity-card__meter-track">
            <div
              className="entity-card__meter-fill entity-card__meter-fill--health"
              style={{ width: `${healthPercent}%` }}
            />
            <span className="entity-card__meter-value">
              ÉP {character.health}/{character.maxHealth}
            </span>
          </div>
        </div>

        {character.role === "hero" && character.xpNeeded && (
          <div className="entity-card__meter">
            <div className="entity-card__meter-track entity-card__meter-track--xp">
              <div
                className="entity-card__meter-fill entity-card__meter-fill--xp"
                style={{ width: `${xpPercent}%` }}
              />
              <span className="entity-card__meter-value">
                XP {character.xp}/{character.xpNeeded}
              </span>
            </div>
          </div>
        )}

        <div className="entity-card__stats" aria-label="Stats">
          <h3 className="entity-card__stats-title">Statisztikák</h3>
          <div className="entity-card__stat">
            <span className="entity-card__stat-label">Támadás</span>
            <strong className="entity-card__stat-value">
              {character.attack}
            </strong>
          </div>
          <div className="entity-card__stat">
            <span className="entity-card__stat-label">Páncél</span>
            <strong className="entity-card__stat-value">
              {character.armor}
            </strong>
          </div>
        </div>
      </div>
    </article>
  );
}
