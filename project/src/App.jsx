import { useState } from "react";

import "./App.css";
import { Gallery } from "./Gallery";
import { Modal } from "./Modal";

import {
  Heart,
  Confetti,
  ShootingStar,
  FlyingSaucer,
} from "@phosphor-icons/react";

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [imageSource, setImageSource] = useState({ src: "", alt: "" });
  const handleOpenImageModal = (e) => {
    const src = e.target.src;
    const alt = e.target.alt;

    setIsModalOpened(true);
    setImageSource({ src, alt });
  };

  const handleCloseImageModal = () => {
    setIsModalOpened(false);
  };
  return (
    <>
      <main className="main">
        <section className="section hero">
          <h1>
            Hi Giulio <span className="break">Rusciano!</span>
          </h1>
          <h2>
            We are the <span className="no--wrap text--fancy">PS Team</span>
          </h2>
          <p className="text--hero">
            A brilliant team, which is proud to have had the opportunity{" "}
            <span className="break">
              to work with a pro like <span className="no--wrap bold">you</span>
              .
            </span>
          </p>
          <p>
            We would love to leave here a few wishes{" "}
            <span className="break">
              for your new journey <FlyingSaucer size={32} weight="fill" />
            </span>
          </p>
        </section>

        <section className="section gallery">
          <Gallery onClick={(e) => handleOpenImageModal(e)} />
        </section>
      </main>
      <footer>
        <p className="text--small">
          Developed with <Heart size={24} /> and <Confetti size={24} /> by PS
          Team
        </p>
      </footer>
      <Modal
        isModalOpened={isModalOpened}
        src={imageSource.src}
        alt={imageSource.alt}
        onClick={() => handleCloseImageModal()}
      ></Modal>
    </>
  );
}

export default App;
