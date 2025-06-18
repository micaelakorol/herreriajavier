const Icon = ({ alt, src, className, width, height, sizes }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
    />
  );
};

export default Icon;
