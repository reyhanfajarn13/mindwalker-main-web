import { useEffect, useRef, useState, type PointerEvent } from "react";

const FAB_SIZE = 70;
const EDGE_GAP = 16;

type Position = {
  x: number;
  y: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function FloatingChatbot() {
  const [position, setPosition] = useState<Position | null>(null);
  const [dragging, setDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const initialY = window.innerHeight - FAB_SIZE - EDGE_GAP;
    setPosition({ x: EDGE_GAP, y: initialY });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setPosition((current) => {
        if (!current) return current;
        const maxX = window.innerWidth - FAB_SIZE - EDGE_GAP;
        const maxY = window.innerHeight - FAB_SIZE - EDGE_GAP;
        return {
          x: clamp(current.x, EDGE_GAP, maxX),
          y: clamp(current.y, EDGE_GAP, maxY)
        };
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    if (!position) return;
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    dragOffset.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y
    };
  };

  const handlePointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    if (!dragging) return;
    const maxX = window.innerWidth - FAB_SIZE - EDGE_GAP;
    const maxY = window.innerHeight - FAB_SIZE - EDGE_GAP;
    const nextX = clamp(event.clientX - dragOffset.current.x, EDGE_GAP, maxX);
    const nextY = clamp(event.clientY - dragOffset.current.y, EDGE_GAP, maxY);
    setPosition({ x: nextX, y: nextY });
  };

  const handlePointerUp = (event: PointerEvent<HTMLButtonElement>) => {
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  if (!position) return null;

  return (
    <button
      className={`chatbot-fab${dragging ? " is-dragging" : ""}`}
      aria-label="Open chatbot"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <span>AI</span>
    </button>
  );
}
