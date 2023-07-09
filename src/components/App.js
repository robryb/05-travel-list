import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    /*
    You can't change state, so you must provide the desired new state and let the system
    handle the rest (declarative programming). items is the state array we wish to update 
    indirectly. We do this by starting with an empty array: []. Then we add the existing
    array to the new, empty array using the ... operator: [...items]. Finally, we add
    the new item to the array: [...items, item].
    */
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClear() {
    if (window.confirm("Are you sure that you want to delete your list?")) {
      setItems([]);
    }
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
