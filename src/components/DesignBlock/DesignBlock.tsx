import { useState } from "react";
import BorderSimulation from "../helpers/BorderSimulation/BorderSimulation";
import SmoothingCorners from "../helpers/SmoothingCorners/SmoothingCorners";
import styles from "./DesignBlock.module.scss";
import { useSpring, animated } from "@react-spring/web";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import Tilt from "react-parallax-tilt";
import { Figures } from "../helpers/Enums/variables.constants";

const DesignBlock = () => {
  const [show, setShow] = useState(false);
  const propsOuterBlock = useSpring({
    marginRight: show ? 0 : -300,
  });

  const propsText = useSpring({
    opacity: show ? 1 : 0,
  });

  const propsInnerBlock = useSpring({
    clipPath: show
      ? Figures.trapezoid
      : Figures.trapezoidDefault,
  });

  const showHandler = () => {
    setShow((show) => !show);
  };

  return (
    <Tilt
      className={styles.parallax_effect_glare_scale}
      perspective={1000}
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.02}
      gyroscope={true}
    >
      <MouseParallaxContainer
        className="parallax"
        containerStyle={{
          borderRadius: "30px"
        }}
        globalFactorX={0.3}
        globalFactorY={0.3}
        resetOnLeave
      >
        <MouseParallaxChild
          factorX={0.3}
          factorY={0.3}
          className={styles.mouse_parallax_child}
          style={{
            transform: 'scale(1.2)'
          }}
        />
        <div className={styles.container} onClick={showHandler}>
          <animated.div
            className={styles.inner_container}
            style={propsOuterBlock}
          >
            <SmoothingCorners>
              <animated.div
                className={styles.image_block}
                style={propsInnerBlock}
              />
            </SmoothingCorners>
            <div className={styles.image_window}>
              <BorderSimulation figure="hexagon">
                <SmoothingCorners>
                  <div className={styles.image} />
                </SmoothingCorners>
              </BorderSimulation>
            </div>

            <animated.div className={styles.text_block} style={propsText}>
              <h2>Podvoyskiy Kirill</h2>
              <p>Frontend developer</p>
            </animated.div>
          </animated.div>
        </div>
      </MouseParallaxContainer>
    </Tilt>
  );
};

export default DesignBlock;
