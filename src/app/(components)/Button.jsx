// app/(components)/Button.jsx
export default function Button({ onClick, children }) {
  return (
    <button onClick={onClick} style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
      {children}
    </button>
  );
}
