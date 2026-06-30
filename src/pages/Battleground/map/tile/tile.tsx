import "./tile.css";
export default function Tile({ content }: { content: string }) {
  return <div className="tile">{content}</div>;
}
