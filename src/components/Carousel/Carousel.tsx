import { useEffect, useRef, useState } from "react";
import "./Carousel.scss";
const carouselItems = [
  {
    image:
      "https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g=",
    title: "Paris",
    number: "01",
  },
  {
    image:
      "https://media.istockphoto.com/id/1150545984/it/foto/palazzo-moderno-di-lusso-con-piscina.jpg?s=612x612&w=0&k=20&c=Pbrai_VGc9tUviMCF1UaBErdS1YGyIVWsD29jzMZwTY=",
    title: "Warsaw",
    number: "02",
  },
  {
    image:
      "https://media.istockphoto.com/id/1214351345/it/foto/guardando-direttamente-lo-skyline-del-quartiere-finanziario-nel-centro-di-londra-immagine-di.jpg?s=612x612&w=0&k=20&c=oNNbPzPvcQ-4RA6AeatNIxHQIafBiXmDRtUUY0Ska-I=",
    title: "Moscow",
    number: "03",
  },
  {
    image:
      "https://media.istockphoto.com/id/904390980/it/foto/foto-di-architettura-contemporanea-astratta.jpg?s=612x612&w=0&k=20&c=_P4Wmx5nq5MeDuimpNklKCBlrLovmCyd9lfiMKeJZDs=",
    title: "Sydney",
    number: "04",
  },
  {
    image:
      "https://media.istockphoto.com/id/130408311/it/foto/piscina-allesterno-della-casa-moderna-al-crepuscolo.jpg?s=612x612&w=0&k=20&c=ZoVjx7uDjoHKmpM1ayW6UR1SQOoYh_xx-QMG_qeOYs0=",
    title: "Istanbul",
    number: "05",
  },
  {
    image:
      "https://media.istockphoto.com/id/1299954175/it/foto/villa-cubica-moderna.jpg?s=612x612&w=0&k=20&c=DhGhb3c1E3DW_fbrWJ_R_Zh0Lbwu6syFeRLsKlZ9no8=",
    title: "Prague",
    number: "06",
  },
  {
    image:
      "https://media.istockphoto.com/id/926689776/it/foto/vista-ad-angolo-basso-dei-grattacieli-di-new-york.jpg?s=612x612&w=0&k=20&c=DmEB0Ty7ZwDnBoU5SuA8FNevOp4G1UcECw5aS4vA9A8=",
    title: "Munich",
    number: "07",
  },

  {
    image:
      "https://media.istockphoto.com/id/1191376167/it/foto/villa-dellisola.jpg?s=612x612&w=0&k=20&c=PKslWo4FdbjinohKQlK_oWL34jqAsnzMTdy2bxEAf-I=",
    title: "Venice",
    number: "08",
  },

  {
    image:
      "https://media.istockphoto.com/id/184316397/it/foto/londra-edifici-aziendali.jpg?s=612x612&w=0&k=20&c=XqrRxEPzFnwRFk7PQrCiu9-FPfCTPyMe5BKKaxYXCs8=",
    title: "Oslo",
    number: "09",
  },
  {
    image:
      "https://media.istockphoto.com/id/184619832/it/foto/distretto-finanziario-al-crepuscolo-londra.jpg?s=612x612&w=0&k=20&c=RAThrJOBY6vhlT6-kQpu9-9jLEzWToYfdw46S8B0Mu0=",
    title: "London",
    number: "10",
  },
];

const Carousel = () => {
  const [progress, setProgress] = useState(50);
  const [startX, setStartX] = useState(0);
  const [, setActive] = useState(5);
  const [isDown, setIsDown] = useState(false);
  const itemEls = useRef(new Array(carouselItems.length));
  const cursors = useRef(new Array(2));

  /*--------------------
Constants
--------------------*/
  const speedWheel = 0.02;
  const speedDrag = -0.1;

  /*--------------------
Get Z
--------------------*/
  const getZindex = (array: Array<any>, index: number) =>
    array.map((_, i) =>
      index === i ? array.length : array.length - Math.abs(index - i)
    );

  /*--------------------
Items
--------------------*/

  //   let cursors = document.querySelectorAll(".cursor");

  const displayItems = (item: any, index: number, active: number) => {
    const zIndex = getZindex(carouselItems, active)[index];
    item?.style.setProperty("--zIndex", zIndex);
    item?.style.setProperty(
      "--active",
      (index - active) / carouselItems.length
    );
  };

  /*--------------------
Animate
--------------------*/
  const animate = () => {
    const _progress = Math.max(0, Math.min(progress, 100));
    const _active = Math.floor((_progress / 100) * (carouselItems.length - 1));
    setProgress(_progress);
    setActive(Math.floor(_active));

    itemEls.current.forEach((item, index) =>
      displayItems(item, index, _active)
    );
  };
  const animateMe = (active: number) => {
    itemEls.current.forEach((item, index) => displayItems(item, index, active));
  };

  /*--------------------
Handlers
--------------------*/
  const handleWheel = (e: any) => {
    const wheelProgress = e.deltaY * speedWheel;
    setProgress(progress + wheelProgress);
  };

  const handleMouseMove = (e: any) => {
    if (e.type === "mousemove") {
      cursors.current.forEach((cursor) => {
        (
          cursor as any
        ).style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    }
    if (isDown) {
      const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const xStart = startX;
      const mouseProgress = (x - xStart) * speedDrag;
      setStartX(x);
      setProgress(progress + mouseProgress);
    }
  };

  const handleMouseDown = (e: any) => {
    setIsDown(true);
    setStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };
  /*--------------------
Listeners
--------------------*/
  window.addEventListener("mousewheel", handleWheel);
  window.addEventListener("mousedown", handleMouseDown);
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
  window.addEventListener("touchstart", handleMouseDown);
  window.addEventListener("touchmove", handleMouseMove);
  window.addEventListener("touchend", handleMouseDown);
  useEffect(() => {
    if (isDown) animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startX]);
  useEffect(() => {
    const idx = Math.floor(carouselItems.length / 2);
    animateMe(idx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="carousel">
        {carouselItems.map((item, idx) => (
          <div
            ref={(element) => (itemEls.current[idx] = element)}
            className="carousel-item"
            key={idx}
            onClick={() => {
              setProgress(idx * 10 + 10);
              animateMe(idx);
            }}
          >
            <div className="carousel-box">
              <div className="title">{item.title}</div>
              <div className="num">{item.number}</div>
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>

      <div
        className="cursor"
        ref={(element) => (cursors.current[0] = element)}
      ></div>
      <div
        className="cursor cursor2"
        ref={(element) => (cursors.current[1] = element)}
      ></div>
    </>
  );
};
export default Carousel;
