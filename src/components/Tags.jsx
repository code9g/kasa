function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((item, index) => (
        <li className="tag" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Tags;
