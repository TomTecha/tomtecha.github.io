"use client";

import { useEffect, useRef } from "react";

/**
 * Canvas-based animated night road scene — serves as a royalty-free,
 * always-available "video-like" background for the hero section.
 *
 * Visual elements:
 *  - Dark sky with twinkling stars
 *  - Vanishing-point perspective road
 *  - Animated centre-lane dashes scrolling toward the viewer
 *  - Green underglow (EV aesthetic)
 *  - Incoming headlight glow pair
 */
export default function AnimatedHeroBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let offset = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      const VX = W * 0.5; // vanishing-point x
      const VY = H * 0.38; // vanishing-point y (horizon)

      // ── Sky ──────────────────────────────────────────────────────────
      const sky = ctx.createLinearGradient(0, 0, 0, VY);
      sky.addColorStop(0, "#01060a");
      sky.addColorStop(1, "#050f0a");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, W, H);

      // ── Horizon green glow (EV ambiance) ─────────────────────────────
      const horizGlow = ctx.createRadialGradient(VX, VY, 0, VX, VY, W * 0.75);
      horizGlow.addColorStop(0, "rgba(34,197,94,0.22)");
      horizGlow.addColorStop(0.45, "rgba(22,163,74,0.07)");
      horizGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = horizGlow;
      ctx.fillRect(0, 0, W, H);

      // ── Road surface ──────────────────────────────────────────────────
      const road = ctx.createLinearGradient(0, VY, 0, H);
      road.addColorStop(0, "#080f09");
      road.addColorStop(1, "#0e160f");
      ctx.fillStyle = road;
      ctx.beginPath();
      ctx.moveTo(0, H);
      ctx.lineTo(W, H);
      ctx.lineTo(VX + 60, VY);
      ctx.lineTo(VX - 60, VY);
      ctx.closePath();
      ctx.fill();

      // Road edges
      ctx.strokeStyle = "rgba(255,255,255,0.12)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(VX - 60, VY);
      ctx.lineTo(0, H);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(VX + 60, VY);
      ctx.lineTo(W, H);
      ctx.stroke();

      // ── Animated centre dashes ────────────────────────────────────────
      const dashCount = 14;
      for (let i = 0; i < dashCount; i++) {
        // t: 0 = horizon, 1 = foreground
        const t = ((i / dashCount + offset * 0.25) % 1);
        const sqT = Math.pow(t, 0.55); // perspective easing
        const pY = VY + (H - VY) * sqT;
        const roadHalfW = ((pY - VY) / (H - VY)) * W * 0.38;

        const dashW = Math.max(2, roadHalfW * 0.035);
        const dashH = Math.max(3, (H - VY) * 0.04 * sqT);
        const alpha = Math.min(1, t * 1.8) * 0.65;

        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fillRect(VX - dashW / 2, pY - dashH / 2, dashW, dashH);
      }

      // ── Road green underglow ──────────────────────────────────────────
      const underGlow = ctx.createRadialGradient(VX, H, 0, VX, H, W * 0.55);
      underGlow.addColorStop(0, "rgba(34,197,94,0.18)");
      underGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = underGlow;
      ctx.fillRect(0, VY, W, H - VY);

      // ── Stars ─────────────────────────────────────────────────────────
      for (let i = 0; i < 90; i++) {
        const sx = ((Math.sin(i * 127.1 + 1.57) * 0.5 + 0.5) * W);
        const sy = ((Math.sin(i * 311.7) * 0.5 + 0.5) * VY * 0.88);
        const sr = (Math.sin(i * 47.3) * 0.5 + 0.5) * 1.4 + 0.3;
        const flicker = Math.sin(offset * 2.5 + i * 2.1) * 0.25 + 0.55;
        ctx.fillStyle = `rgba(220,250,220,${flicker * 0.7})`;
        ctx.beginPath();
        ctx.arc(sx, sy, sr, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Incoming headlight pair ───────────────────────────────────────
      const hlCycle = (offset * 0.18) % 1;
      const hlSqT = Math.pow(hlCycle, 0.55);
      const hlY = VY + (H - VY) * hlSqT;
      const hlRoadHalf = ((hlY - VY) / (H - VY)) * W * 0.38;
      const hlOffset = hlRoadHalf * 0.25;

      [VX - hlRoadHalf * 0.6 - hlOffset, VX - hlRoadHalf * 0.6 + hlOffset].forEach(
        (hx) => {
          const r = hlRoadHalf * 0.45 * hlCycle + 5;
          const alpha = hlCycle * 0.7;
          const hg = ctx.createRadialGradient(hx, hlY, 0, hx, hlY, r);
          hg.addColorStop(0, `rgba(220,230,255,${alpha})`);
          hg.addColorStop(0.4, `rgba(180,200,255,${alpha * 0.4})`);
          hg.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = hg;
          ctx.fillRect(0, 0, W, H);
        }
      );

      offset += 0.009;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
      aria-hidden="true"
    />
  );
}
