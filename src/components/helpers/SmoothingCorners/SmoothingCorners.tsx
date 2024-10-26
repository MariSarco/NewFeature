import styles from "./SmoothingCorners.module.scss";

type TSmoothingCorners = {
    children: JSX.Element;
  };

const SmoothingCorners = ({ children }: TSmoothingCorners) => {
  return (
    <div className={styles.box_parent}>
      {children}
      <svg className={styles.flt_svg}>
        <defs>
          <filter id="flt_tag">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -9"
              result="flt_tag"
            />
            <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default SmoothingCorners;
