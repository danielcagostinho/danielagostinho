interface DownArrowIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const DownArrowIcon = ({ className, width = 24, height = 24 }: DownArrowIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 5V19M12 19L5 12M12 19L19 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownArrowIcon;
