import "./App.css";
import NavBar from "./components/NavBar";
import Clock from "./components/Clock";
import ActionRow from "./components/ActionRow";
import React, { useEffect, useState } from "react";
import { WORK_SECONDS, BREAK_SECONDS } from "./constants";

function App() {
  const [pomodoroState, setPomodoroState] = useState({
    timerSeconds: WORK_SECONDS,
    isWorkMode: true,
    isActive: false,
  });

  useEffect(() => {
    if (!pomodoroState.isActive) {
      return;
    }
    const timeoutId = setInterval(tick, 1000);
    return () => clearInterval(timeoutId);
  });

  /**
   * starts the timer by setting an interval, and calling the tick method
   */
  const start = () => {
    setPomodoroState({ ...pomodoroState, isActive: true });
  };
  /**
   * clears the interval and stops the timer
   */
  const pause = () => {
    setPomodoroState({ ...pomodoroState, isActive: false });
  };
  /**
   * pauses the timer, and resets the state minutes/seconds (according to the isWorkMode property)
   */
  const reset = () =>
    setPomodoroState((state) => ({
      ...state,
      isActive: false,
      timerSeconds: state.isWorkMode ? WORK_SECONDS : BREAK_SECONDS,
    }));
  /**
   * stops the timer and resets the time to the next mode (called when the time is equal to 0)
   */
  const finished = () => {
    changeMode(!pomodoroState.isWorkMode);
  };
  /**
   * receives a parameter and updates the state properties to the relevant mode, also invokes the reset method
   * @param {boolean} isWorkMode true: Work mode, false: Break mode
   */
  const changeMode = (isWorkMode) => {
    setPomodoroState((state) => ({ ...state, isWorkMode }));
    reset();
  };
  /**
   * the logical method to be called every second. This method should check if the timer ended
   * (as to not to run time negatively) and format the minutes and seconds (the format should be 04:03 or 21:09, not 4:3 or 21:9
   */
  const tick = () => {
    const timerSeconds = pomodoroState.timerSeconds - 1;
    if (timerSeconds <= 0) {
      finished();
      return;
    }
    setPomodoroState({ ...pomodoroState, timerSeconds });
  };
  return (
    <div className="App">
      <NavBar changeMode={changeMode} isWorkMode={pomodoroState.isWorkMode} />
      <Clock seconds={pomodoroState.timerSeconds} />
      <ActionRow
        activateAction={pomodoroState.isActive ? pause : start}
        resetClicked={reset}
        currentAction={pomodoroState.isActive ? "Pause" : "Start"}
      />
    </div>
  );
}

export default App;
