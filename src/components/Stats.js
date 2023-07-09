export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start by adding some items to your packing list.</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((100 * numPacked) / numItems);

  return (
    <footer className="stats">
      {percentage === 100
        ? "You are ready to go! 🛫"
        : `🧳 You have ${numItems} items in your list, and you already packed
            ${numPacked} (${percentage}%)`}
    </footer>
  );
}
