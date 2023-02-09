import { useState, useEffect } from "react";
import "./AnalogClock.scss";
const Hand: React.FC<{ height: number; width: number; angle: number }> = ({
  height = 1,
  width = 1,
  angle,
}) => {
  return (
    <div
      aria-hidden={true}
      className="clock-hand"
      style={{
        transform: `rotate(${angle}deg) scaleY(${height}) scaleX(${width})`,
      }}
    />
  );
};
const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = window.setInterval(() => {
      setDate(new Date());
    }, 100);
    return () => window.clearInterval(timer);
  }, []);
  return date;
};

const HandAngles = (hours: number, minutes: number, seconds: number) => {
  const FULL_ROTATION_DEGREES = 360;
  const secondsPercentage = seconds / 60;
  // To have second-level precision in the minute hand angle.
  const minutesPercentage = (minutes + secondsPercentage) / 60;
  // To have minute-level precision in the hour hand angle.
  const hoursPercentage = ((hours % 12) + minutesPercentage) / 12;

  const hourAngle = hoursPercentage * FULL_ROTATION_DEGREES;
  const minutesAngle = minutesPercentage * FULL_ROTATION_DEGREES;
  const secondsAngle = secondsPercentage * FULL_ROTATION_DEGREES;

  return [hourAngle, minutesAngle, secondsAngle];
};
const Ticks = () => {
  return (
    <svg viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="19.5" />

      <g className="ticks">
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
      </g>
      <circle cx="20" cy="20" r="0.7" className="pin" />
    </svg>
  );
};
const leadingZero = (num: number) => {
  return num >= 10 ? num : `0${num}`;
};
const displayTime = (hour: number, minute: number, second: number) =>
  `${leadingZero(hour)}:${leadingZero(minute)}:${leadingZero(second)}`;

const DigitalClock: React.FC<{
  hour: number;
  minute: number;
  second: number;
}> = ({ hour, minute, second }) => (
  <time className="digital-clock" dateTime={displayTime(hour, minute, second)}>
    {displayTime(hour, minute, second)}
  </time>
);

const ClockWork: React.FC<{
  hour: number;
  minute: number;
  second: number;
}> = ({ hour, minute, second }) => {
  const [hourA, minuteA, secondA] = HandAngles(hour, minute, second);

  return (
    <time className="clock" dateTime={displayTime(hour, minute, second)}>
      <Hand height={0.5} width={5} angle={hourA} />
      <Hand height={0.75} width={3} angle={minuteA} />
      <Hand height={0.8} width={1} angle={secondA} />
      <Ticks />
    </time>
  );
};
const Clock = () => {
  const date = useCurrentDate();
  const hour = date.getHours() % 12;
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return (
    <div className="clock-container">
      <ClockWork hour={hour} minute={minute} second={second} />
      <DigitalClock hour={hour} minute={minute} second={second} />
    </div>
  );
};

export default Clock;
