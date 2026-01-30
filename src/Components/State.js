export default function State({ items }) {
  const numItems = items.length;

  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        👜You have {numItems} item on your list , and you already have
        {numPacked}({percentage}%)
      </em>
    </footer>
  );
}
