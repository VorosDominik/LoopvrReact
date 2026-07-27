import "./tile.css";




export default function Tile({ content, x, y }: { content: string , x?: number, y?: number}) {

  return <div className="tile">{content}</div>;
}
