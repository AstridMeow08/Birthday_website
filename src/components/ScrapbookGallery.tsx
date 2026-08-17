import { useState, useRef } from "react";
import Draggable from "react-draggable";

const IMAGES = [
  "/ref/girl.jpg",
  "/ref/girl2.jpg",
  "/ref/girl3.jpg",
  "/ref/girl4.jpg",
  "/ref/girl5.jpg",
  "/ref/girl6.jpg",
  "/ref/girl7.jpg",
  "/ref/girl8.jpg",
  "/ref/girl9.jpg",
  "/ref/girl10.jpg",
  "/ref/girl11.jpg",
  "/ref/🤍.jpg",
];

// Spread photos around edges/corners to leave center clear for placeholder
const PHOTO_CONFIG = [
  { x: 40, y: 60, rot: -12, dur: 6, delay: 0 },
  { x: 740, y: 45, rot: 8, dur: 8, delay: 1.5 },
  { x: 80, y: 420, rot: -5, dur: 7, delay: 0.5 },
  { x: 900, y: 310, rot: 15, dur: 9, delay: 2 },
  { x: 55, y: 250, rot: -8, dur: 6.5, delay: 1 },
  { x: 840, y: 470, rot: 10, dur: 8.5, delay: 2.5 },
  { x: 190, y: 30, rot: -15, dur: 7.5, delay: 0.3 },
  { x: 900, y: 130, rot: 5, dur: 9.5, delay: 1.8 },
  { x: 20, y: 510, rot: -10, dur: 6, delay: 0.8 },
  { x: 570, y: 530, rot: 12, dur: 8, delay: 2.2 },
  { x: 200, y: 460, rot: -6, dur: 7, delay: 1.2 },
  { x: 680, y: 400, rot: 9, dur: 9, delay: 0.6 },
];

/* ─── FloatingPhoto ──────────────────────────────────────────────── */
interface FloatingPhotoProps {
  src: string;
  config: (typeof PHOTO_CONFIG)[0];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onDrop: (src: string, e: any) => void;
}

function FloatingPhoto({ src, config, onDrop }: FloatingPhotoProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Draggable
      nodeRef={nodeRef}
      defaultPosition={{ x: config.x, y: config.y }}
      onStart={() => setIsDragging(true)}
      onStop={(e, _data) => {
        setIsDragging(false);
        onDrop(src, e);
      }}
    >
      <div
        ref={nodeRef}
        className="absolute select-none"
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          zIndex: isDragging ? 100 : 20,
          touchAction: "none",
        }}
      >
        {/* Drift animation wrapper */}
        <div
          style={{
            animation: isDragging
              ? "none"
              : `floatDrift ${config.dur}s ease-in-out ${config.delay}s infinite`,
          }}
        >
          {/* Static rotation */}
          <div style={{ transform: `rotate(${config.rot}deg)` }}>
            {/* Polaroid card */}
            <div
              style={{
                background: "white",
                padding: "8px 8px 26px 8px",
                boxShadow: isDragging
                  ? "0 16px 48px rgba(0,0,0,0.35)"
                  : "0 4px 18px rgba(0,0,0,0.18)",
                width: 106,
                transform: isDragging ? "scale(1.08)" : "scale(1)",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
              }}
            >
              <img
                src={src}
                alt="Memory"
                draggable={false}
                style={{
                  width: "100%",
                  height: 84,
                  objectFit: "cover",
                  display: "block",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

/* ─── ScrapbookGallery ───────────────────────────────────────────── */
export function ScrapbookGallery() {
  const [snappedImage, setSnappedImage] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const placeholderRef = useRef<HTMLDivElement>(null);

  const handleDrop = (src: string, e: MouseEvent | TouchEvent) => {
    if (!placeholderRef.current) return;

    let clientX: number, clientY: number;
    if ("touches" in e && (e as TouchEvent).changedTouches?.length) {
      clientX = (e as TouchEvent).changedTouches[0].clientX;
      clientY = (e as TouchEvent).changedTouches[0].clientY;
    } else {
      clientX = (e as MouseEvent).clientX;
      clientY = (e as MouseEvent).clientY;
    }

    const ph = placeholderRef.current.getBoundingClientRect();
    const phCX = ph.left + ph.width / 2;
    const phCY = ph.top + ph.height / 2;
    const dist = Math.hypot(clientX - phCX, clientY - phCY);

    if (dist < 140) {
      setSnappedImage(src);
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(160deg, #fdf0f5 0%, #fff7ee 40%, #f8f0fc 100%)",
      }}
    >
      {/* Background texture */}
      <img
        src="/pages/left.jpg"
        alt=""
        draggable={false}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        style={{ objectFit: "cover", opacity: 0.25, mixBlendMode: "multiply" }}
      />

      {/* Top-left decorative corner */}
      <div className="absolute top-0 left-0 pointer-events-none" style={{ opacity: 0.5 }}>
        <svg width="130" height="130" viewBox="0 0 130 130">
          <path d="M0,0 Q65,0 65,65 Q65,0 130,0" fill="none" stroke="#e8a0b8" strokeWidth="1.5" strokeDasharray="4,7" />
          <path d="M0,20 Q45,20 45,65" fill="none" stroke="#e8a0b8" strokeWidth="1" strokeDasharray="3,8" opacity="0.6" />
        </svg>
      </div>
      {/* Bottom-right decorative corner */}
      <div className="absolute bottom-0 right-0 pointer-events-none" style={{ opacity: 0.5, transform: "rotate(180deg)" }}>
        <svg width="130" height="130" viewBox="0 0 130 130">
          <path d="M0,0 Q65,0 65,65 Q65,0 130,0" fill="none" stroke="#e8a0b8" strokeWidth="1.5" strokeDasharray="4,7" />
        </svg>
      </div>

      {/* Section header */}
      <div
        className="relative pointer-events-none select-none"
        style={{ paddingTop: 48, textAlign: "center", zIndex: 30 }}
      >
        <h2
          style={{
            fontFamily: "var(--font-hand)",
            fontSize: 54,
            color: "#b05a7a",
            letterSpacing: "0.02em",
            lineHeight: 1,
          }}
        >
          ♡
        </h2>
        <p
          style={{
            fontFamily: "var(--font-hand)",
            fontSize: 20,
            color: "#c47a9a",
            marginTop: 10,
          }}
        >
          drag a photo to the frame to relive it ✦
        </p>
      </div>

      {/* ── Central drop placeholder ── */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 25,
        }}
      >
        {/* Tape strip across top */}
        <div
          style={{
            position: "absolute",
            top: -12,
            left: "50%",
            transform: "translateX(-50%) rotate(-2deg)",
            width: 64,
            height: 22,
            background: "rgba(255,230,190,0.75)",
            borderRadius: 3,
            backdropFilter: "blur(3px)",
            pointerEvents: "none",
            zIndex: 2,
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          }}
        />

        <div
          ref={placeholderRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            width: 236,
            height: 275,
            background: snappedImage ? "white" : "rgba(255,255,255,0.6)",
            border: snappedImage
              ? "none"
              : `3px dashed ${isHovering ? "#c96090" : "#e8a0b8"}`,
            borderRadius: 4,
            boxShadow: snappedImage
              ? "0 12px 44px rgba(176,90,122,0.22)"
              : isHovering
                ? "0 0 44px rgba(201,96,144,0.55)"
                : "0 0 24px rgba(232,160,184,0.45)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            animation: snappedImage ? "none" : "placeholderPulse 2.4s ease-in-out infinite",
            transition: "border-color 0.2s, box-shadow 0.2s, background 0.3s",
            backdropFilter: "blur(8px)",
          }}
        >
          {snappedImage ? (
            <>
              <div
                style={{
                  padding: "14px 14px 46px 14px",
                  width: "100%",
                  height: "100%",
                  animation: "fadeScaleIn 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                }}
              >
                <img
                  src={snappedImage}
                  alt="Memory"
                  draggable={false}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>

              {/* Release button */}
              <button
                onClick={() => setSnappedImage(null)}
                title="Release photo"
                style={{
                  position: "absolute",
                  top: -14,
                  right: -14,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "#b05a7a",
                  color: "white",
                  border: "2px solid white",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
                  zIndex: 10,
                }}
              >
                ✕
              </button>
            </>
          ) : (
            <div
              style={{
                textAlign: "center",
                color: isHovering ? "#c96090" : "#e8a0b8",
                pointerEvents: "none",
                transition: "color 0.2s",
              }}
            >
              <div style={{ fontSize: 46, marginBottom: 10 }}>🖼️</div>
              <div style={{ fontFamily: "var(--font-hand)", fontSize: 19, lineHeight: 1.5 }}>
                drop a photo
                <br />
                here ♡
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Floating photos ── */}
      {IMAGES.map((src, i) => {
        if (snappedImage === src) return null;
        return (
          <FloatingPhoto
            key={src}
            src={src}
            config={PHOTO_CONFIG[i]}
            onDrop={handleDrop}
          />
        );
      })}

      {/* Bottom hint */}
      <div
        className="absolute bottom-8 w-full text-center pointer-events-none select-none"
        style={{ zIndex: 30 }}
      >
        <p style={{ fontFamily: "var(--font-hand)", fontSize: 17, color: "#c4a0b0" }}>
          {snappedImage
            ? "click ✕ to release the photo back ♡"
            : "all these little moments... each one matters ✦"}
        </p>
      </div>
    </section>
  );
}
