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
    const doubleDigits = new Intl.NumberFormat("en-EN", {
      maximumFractionDigits: 0,
      minimumIntegerDigits: 2,
    });
    const formattedSeconds = doubleDigits.format(Math.floor(seconds % 60));
    const formattedMinutes = doubleDigits.format(
      Math.floor((seconds / 60) % 60)
    );
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  const timeString = totalSecondsToString(seconds);
  return (
    <div className="clock">
      <ArchedText text="Pomodoro" />
      <time dateTime={timeString}>{timeString}</time>
    </div>
  );
}
