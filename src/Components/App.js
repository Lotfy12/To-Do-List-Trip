import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import State from "./State";
import { useState } from "react";



function App() {
  const [items, setItem] = useState([]);

  function handleAddItem(itemm) {
    setItem((items) => [...items, itemm]);
  }
  function handleDelete(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear every thing"
    );
    if (confirmed) {
    setItem([]);
  }
    setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onHandleAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <State items={items} />
    </div>
  );
}

export default App;
