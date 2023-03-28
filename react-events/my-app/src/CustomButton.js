export default function CustomButton ({text, color, onCustomClick}) {

    return (
  <button
    onClick={(e) => {
      e.preventDefault();
      alert(onCustomClick)
      window.location.href = "https://www.youtube.com/embed/BBJa32lCaaY";
    }}
    className="App-link"
    type="button"
    style={{ backgroundColor: color }}
  >
    {text}
  </button>
    );
}
