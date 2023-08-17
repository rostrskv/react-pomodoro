import ArchedText from "./ArchedText";
import "./Clock.css";
/**
 * Component that shows the timer
 * @param {*} props
 * @param {number} props.seconds
 * @returns
 */
export default function Clock({ seconds }) {
  const timeString = [seconds / 60, seconds % 60]
    .map((number) => `${Math.floor(number)}`.padStart(2, "0"))
    .join(":");
  return (
    <div className="clock">
      <ArchedText text="Pomodoro" />
      <time dateTime={timeString}>{timeString}</time>
    </div>
  );
}
