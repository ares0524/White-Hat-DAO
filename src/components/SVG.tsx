interface SVGProps {
  id?: string;
  width?: number;
  height?: number;
}

const SVG: React.FC<SVGProps> = ({ id, width, height }) => {
  return (
    <svg width={width} height={height}>
      <use xlinkHref={`/assets/images/sprites.svg#${id}`} />
    </svg>
  );
};

export default SVG;
