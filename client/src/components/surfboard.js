import { Link } from "react-router-dom";
import styles from "./surfboard.module.css";
import LowerNavBar from "./lowerNavBar";
import React, { useState, useEffect } from "react";
import Wave from "../utils/wave3.png";
import { motion } from "framer-motion";
const API_URL = process.env.REACT_APP_API_URL;

const Surfboard = () => {
  const [surfboards, setSurfboards] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${API_URL}/surfboards`);
    const data = await response.json();
    setSurfboards(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //Motion//

  return (
    <div className={styles.container}>
      <div className={styles.spaceSaver}></div>

      <motion.div
        className={styles.titleAndImage}
        initial={{ scale: 1, opacity: 0, x: -300 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ from: 90, duration: 1.4 }}
      >
        <motion.h2
          className={styles.surfboardTitle}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Surfboards
        </motion.h2>
        <motion.img
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            x: { duration: 1.2 },
            opacity: { duration: 1.2 },
          }}
          className={styles.image}
          src={Wave}
          alt="wave"
        ></motion.img>
      </motion.div>

      <div className={styles.surfboardGridContainer}>
        <div className={styles.surfboardsBlurbContainer}>
          <h4 className={styles.surfboardsBlurb}>
            Surfboards can come in many different shapes and sizes. From long to
            short, wide to skinny there is always a board that best fits the
            conditions.
          </h4>
          <h4 className={styles.surfboardsBlurb}>
            Below is an indication on what kind of surfboards work best in
            different conditions.
          </h4>
        </div>
        <ul className={styles.singleSurfboardGrid}>
          {surfboards.map((surfboard) => {
            return (
              <>
                <div
                  className={styles.singleSurfboardDescriptionContainer}
                  key={surfboard.id}
                >
                  <h3 className={styles.surfboardStrength}>
                    <em> {surfboard.surfboard_strength}</em>
                  </h3>
                  <p className={styles.surfboardDescription}>
                    {surfboard.surfboard_description}
                  </p>
                </div>
                <div className={styles.singleSurfboardImage}>
                  <img
                    alt="surfboard-surfboard_image"
                    className={styles.surfboardsImage}
                    src={surfboard.surfboard_image}
                  />
                </div>
              </>
            );
          })}
        </ul>
      </div>
      <div className={styles.lowerBlurbContainerContainer}>
        <div className={styles.lowerBlurbContainer}>
          <h4 className={styles.lowerBlurb1}>
            <em>
              There are many different shapes, build materials and setups for
              each type of board that can completely change the way a board
              functions, allowing it to be more slow and fun, or more fast and
              maneuverable.{" "}
            </em>
          </h4>
          <div className={styles.lowerBlurb2Container}>
            <h4 className={styles.lowerBlurb2}>
              <em className={styles.lowerBlurb1Content}>
                This is a just a brief indication of what these types of
                surfboards can do.{" "}
              </em>
            </h4>
            <h4 className={styles.lowerBlurb2}>
              <em className={styles.lowerBlurb2Content}>
                Images are from a great Christchurch shaper <br></br>
                <a
                  className={styles.sadhanaLink}
                  href="https://sadhanasurfboards.co.nz/"
                >
                  @Sadhana Surfboards
                </a>
              </em>
            </h4>
          </div>
        </div>
      </div>
      <LowerNavBar />
    </div>
  );
};
export default Surfboard;
