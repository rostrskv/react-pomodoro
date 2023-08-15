/**
 * Component which contains the start/pause and reset buttons
 */
export default function ActionRow({activateAction, resetClicked, currentAction}) {
  return (
    <nav className="action-row">
      <button onClick={activateAction}>{currentAction}</button>
      <button onClick={resetClicked}>Reset</button>
    </nav>
  );
}
