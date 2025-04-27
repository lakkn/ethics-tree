import React, { useLayoutEffect, useState, useRef, useId } from "react";
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";
import rdr from "./img/rdr2.jpg";
import spiderman from "./img/spiderman.jpg";
import tlou from "./img/tlou.jpg";
import cit from "./img/cit.png";
import cshs from "./img/cshs.jpg";
import grad from "./img/grad.jpg";
import oreoLeg from "./img/oreo-leg.jpg";
import oreoTurn from "./img/oreo-turn.jpg";
import oreoSleep from "./img/oreo-sleep.jpg";
import young from "./img/young.jpg";
import close from "./img/close.jpg";
import full from "./img/full.jpg";
import cars from "./img/cars.jpeg";
import mulan from "./img/mulan.jpg";
import parasite from "./img/parasite.jpg";

const ClipDefs = () => (
  <defs>
    <clipPath id="leafMask">
      <circle cx="0" cy="0" r="45" />
    </clipPath>
  </defs>
);

function LeafOnPath({ pathRef, t = 0.6, href }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const clipId = useId();

  useLayoutEffect(() => {
    if (!pathRef.current) return;
    const len = pathRef.current.getTotalLength();
    const pt  = pathRef.current.getPointAtLength(len * t);
    setPos({ x: pt.x, y: pt.y });
  }, [pathRef, t]);

  return (
    <>
      <clipPath id={clipId} clipPathUnits="objectBoundingBox">
        <circle cx=".5" cy=".5" r=".5" />
      </clipPath>

      <image
        href={href}
        x={pos.x - 45}
        y={pos.y - 45}
        width="90"
        height="90"
        clipPath={`url(#${clipId})`}
        className="cursor-pointer"
        tabIndex="0"
      />
    </>
  );
}



export default function EthicsTree() {
  const ref = useRef(null);

  const familyPath = useRef(null);
  const dogPath = useRef(null);
  const entertainmentPath = useRef(null);
  const communityPath = useRef(null);
  const moviePath = useRef(null);

  const zoomTo = (id) => {
    const el = document.getElementById(id);
    ref.current?.zoomToElement(el, 2.5, 600);
  };

  React.useEffect(() => {
    const handler = (e) => e.key === "Escape" && ref.current?.resetTransform();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <TransformWrapper
      ref={ref}
      minScale={1}
      maxScale={5}
      doubleClick={{ disabled: true }}
      limitToBounds={false}
      wheel={{ step: 60 }}
    >
      <TransformComponent 
        wrapperStyle={{ width: "95vw", height: "85vh" }}
        contentStyle={{ width: "100%", height: "100%" }}
        wrapperClass="w-screen h-screen bg-gradient-to-b from-emerald-50 to-emerald-100">
            <svg
            viewBox="0 0 1200 800"
            width="100%"
            height="100%"
            role="img"
            aria-label="Lakshay's ethics tree"
            >
          <ClipDefs />

          {/* TRUNK */}
          <path
            d="M 600 780 L 592 396 Q 620 358 620 400 Z"
            fill="#EFEFEF"
            className="cursor-pointer hover:opacity-90 focus-visible:ring-4 ring-amber-400"
            tabIndex="0"
            onClick={() => ref.current?.resetTransform()}
            onKeyDown={(e) => e.key === "Enter" && ref.current?.resetTransform()}
          />

          {/* FAMILY BRANCH */}
          <g
            id="branch-family"
            onClick={(e) => {
              e.stopPropagation();
              zoomTo("branch-family");
            }}
            role="group"
            aria-label="Family branch"
            className="cursor-pointer"
            tabIndex="0"
            onKeyDown={(e) =>
              e.key === "Enter" && zoomTo("branch-family")
            }
          >
            <path
              ref={familyPath}
              d="M 600 450 Q 640 380 698 311 Q 738 252 983 58"
              stroke="#EFEFEF"
              strokeWidth={22}
              fill="none"
            />
            <LeafOnPath href={young} pathRef={familyPath} t={0.30} alt="Young" />
            <LeafOnPath href={close} pathRef={familyPath} t={0.55} alt="Close Family" />
            <LeafOnPath href={full} pathRef={familyPath} t={0.85} alt="Full Family" />
          </g>

          {/* DOG BRANCH */}
          <g
            id="branch-dog"
            onClick={(e) => {
              e.stopPropagation();
              zoomTo("branch-dog");
            }}
            className="cursor-pointer"
            tabIndex="0"
          >
            <path
              ref={dogPath}
              d="M 611 430 Q 787 426 1081 322"
              stroke="#EFEFEF"
              strokeWidth={24}
              fill="none"
            />
            <LeafOnPath href={oreoTurn} pathRef={dogPath} t={0.25} alt="Oreo 1" />
            <LeafOnPath href={oreoLeg} pathRef={dogPath} t={0.60} alt="Oreo 2" />
            <LeafOnPath href={oreoSleep} pathRef={dogPath} t={0.85} alt="Oreo 3" />
          </g>

          {/* GAMING BRANCH */}
          <g
            id="branch-entertainment"
            onClick={(e) => {
              e.stopPropagation();
              zoomTo("branch-entertainment");
            }}
            className="cursor-pointer"
            tabIndex="0"
          >
            <path
              ref={entertainmentPath}
              d="M 605 452 Q 573 384 519 340 Q 432 248 237 139"
              stroke="#EFEFEF"
              strokeWidth={19}
              fill="none"
            />
            <LeafOnPath href={rdr} pathRef={entertainmentPath} t={0.60} alt="rdr2" />
            <LeafOnPath href={spiderman} pathRef={entertainmentPath} t={0.85} alt="spiderman" />
            <LeafOnPath href={tlou} pathRef={entertainmentPath} t={0.25} alt="tlou" />
          </g>

          {/* COMMUNITY BRANCH */}
          <g
            id="branch-community"
            onClick={(e) => {
              e.stopPropagation();
              zoomTo("branch-community");
            }}
            className="cursor-pointer"
            tabIndex="0"
          >
            <path
              ref={communityPath}
              d="M 607 504 Q 437 483 231 282"
              stroke="#EFEFEF"
              strokeWidth={19}
              fill="none"
            />
            <LeafOnPath href={cit} pathRef={communityPath} t={0.35} alt="CIT Logo" />
            <LeafOnPath href={cshs} pathRef={communityPath} t={0.58} alt="CSHS People" />
            <LeafOnPath href={grad} pathRef={communityPath} t={0.85} alt="CIT Seniors" />
          </g>
          {/* MOVIE BRANCH */}
          <g
            id="branch-movie"
            onClick={(e) => {
              e.stopPropagation();
              zoomTo("branch-movie");
            }}
            className="cursor-pointer"
            tabIndex="0"
          >
            <path
            ref={moviePath}
              d="M 606 485 Q 713 508 808 532 Q 936 528 1069 509"
              stroke="#EFEFEF"
              strokeWidth={22}
              fill="none"
            />
            <LeafOnPath href={cars} pathRef={moviePath} t={0.35} alt="Cars" />
            <LeafOnPath href={mulan} pathRef={moviePath} t={0.65} alt="Mulan" />
            <LeafOnPath href={parasite} pathRef={moviePath} t={0.85} alt="Parasite" />
          </g>
        </svg>
      </TransformComponent>
    </TransformWrapper>
  );
}
