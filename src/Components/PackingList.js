import Item from "./Item";
export default function PackingList({

  items,
  onDelete,
  onToggleItems,
  onClearList,
}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDelete={onDelete}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>

      <div className="actions">
        <button onClick={onClearList}> Clear</button>
      </div>
    </div>
  );
}
