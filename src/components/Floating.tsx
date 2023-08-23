interface FloatingProps {
  image: string,
  width: string,
  height: string,
  rotate?: number,
  top?: number,
  bottom?: number,
  left?: number,
  right?: number,
  zIndex?: number,
  blur?: number,
};

export const Floating = ({
    image,
    width,
    height,
    rotate,
    top,
    bottom,
    left,
    right,
    zIndex = 10,
    blur,
  }: FloatingProps) => (
  <div className="relative">
    <div
      style={{
        position: "absolute",
        backgroundSize: "contain",
        backgroundImage: `url('${image}')`,
        zIndex,
        width,
        height,
        top: top && `${top}rem`,
        bottom: bottom && `${bottom}rem`,
        left: left && `${left}rem`,
        right: right && `${right}rem`,
        transform: rotate ? `rotate(${rotate}deg)` : "",
        filter: blur ? `blur(${blur}px)` : "",
      }}
    ></div>
  </div>
);
