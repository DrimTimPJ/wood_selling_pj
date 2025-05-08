import Image from 'next/image';

interface ArrowProps {
  className: string;
  style: object;
  onClick: () => null;
}

function PrevArrow(props: ArrowProps) {
  const { onClick, className } = props;
  return (
    <Image
      className={`${className} active:scale-[1.5] md:scale-[1.5] md:active:scale-[1.75] lg:scale-[2.25] transition-all duration-300`}
      onClick={onClick}
      height={75}
      width={75}
      src={'/icons/arrow-left.svg'}
      alt="prev-arrow"
    />
  );
}

function NextArrow(props: ArrowProps) {
  const { onClick, className } = props;
  return (
    <Image
      className={`${className} active:scale-[1.5] md:scale-[1.5] md:active:scale-[1.75] lg:scale-[2.25] transition-all duration-300`}
      onClick={onClick}
      height={75}
      width={75}
      src={'/icons/arrow-right.svg'}
      alt="prev-arrow"
    />
  );
}

export { PrevArrow, NextArrow };