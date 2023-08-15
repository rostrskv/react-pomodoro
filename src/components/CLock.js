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
      <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 140 29">
        <title>Pomodoro</title>
        <g transform="translate(-34.401 -134.11)">
          <path
            id="path1"
            d="m36.696 154.93c54.963-19.533 97.827-14.601 136.61 0"
            fill="none"
          />
          <text transform="translate(1.0472 8.5989)">
            <textPath xlinkHref="#path1">Pomodoro</textPath>
          </text>
        </g>
      </svg>
      <time dateTime={timeString}>{timeString}</time>
    </div>
  );
}
