export default function CustomButton({ text, color }) {
  return (
    <>
      <form
        action="https://www.youtube.com/embed/BBJa32lCaaY"
        method="get"
        target="_blank"
        >
        <button
          className="App-link"
          type="submit"
          rel="noopener noreferrer"
          style={{backgroundColor: color}}
        >
          { text }
        </button>
      </form>
    </>
  )
}
