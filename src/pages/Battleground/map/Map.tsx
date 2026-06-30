import Tile from "./tile/tile";

export default function Map() {
  const gridSize = 4;

  const isBorderTile = (row: number, col: number) => {
    return (
      row === 0 || row === gridSize - 1 || col === 0 || col === gridSize - 1
    );
  };

  return (
    <div className="flex-shrink-0">
      <div
        className="grid gap-0"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: gridSize * gridSize }).map((_, idx) => {
          const row = Math.floor(idx / gridSize);
          const col = idx % gridSize;
          const isEdge = isBorderTile(row, col);

          return isEdge ? (
            <Tile key={idx} content="" />
          ) : (
            <div key={idx} style={{ width: "100px", height: "100px" }} />
          );
        })}
      </div>
    </div>
  );
}
