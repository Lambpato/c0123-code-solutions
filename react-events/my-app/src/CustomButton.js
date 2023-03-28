export default function CustomButton ({text, color, onCustomClick}) {

    return (
  <button
    onClick={(e) => {
      e.preventDefault();
      onCustomClick(text)
          window.open("https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1", "_blank");
    }}
    className="App-link"
    type="button"
    style={{ backgroundColor: color }}
  >
    {text}
  </button>
    );
}
