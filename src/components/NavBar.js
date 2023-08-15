/**
 * Component with Work/Break mode buttons
 */
export default function NavBar({ changeMode, isWorkMode }) {
  return (
    <nav className="nav-bar">
      <button onClick={() => changeMode(true)} disabled={isWorkMode}>
        Work mode {!isWorkMode}
      </button>
      <button onClick={() => changeMode(false)} disabled={!isWorkMode}>
        Break mode
      </button>
    </nav>
  );
}
