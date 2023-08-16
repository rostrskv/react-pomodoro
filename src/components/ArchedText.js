export default function ArchedText({ text }) {
  return (
    <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 140 29">
      <title>{text}</title>
      <g transform="translate(-34 -134)">
        <path id="path1" d="m37 155c55-20 98-15 137 0" fill="none" />
        <text
          transform="translate(1.0472 8.5989)"
          fontSize={`${(22 * "pomodoro".length) / text.length}px`}
        >
          <textPath xlinkHref="#path1">{text}</textPath>
        </text>
      </g>
    </svg>
  );
}
