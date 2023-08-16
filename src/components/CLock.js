import ArchedText from "./ArchedText";
import "./Clock.css";
/**
 * Component that shows the timer
 * @param {*} props
 * @param {number} props.seconds
 * @returns
 */
export default function Clock({ seconds }) {
  /** formats seconds to mm:ss pattern */
  const totalSecondsToString = (seconds) => {
    const padZeroes = (number) =>
      Math.floor(number).toString().padStart(2, "0");
    return `${padZeroes(seconds / 60)}:${padZeroes(seconds % 60)}`;
  };
  const timeString = totalSecondsToString(seconds);
  return (
    <div className="clock">
      <ArchedText text="Pomodoro" />
      <time dateTime={timeString}>{timeString}</time>
    </div>
  );
}
