import React, { useEffect, useRef } from 'react';

const CursorTrail = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        let cursor = { x: width / 2, y: height / 2 };
        const particles = [];

        const updateSize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', updateSize);

        const handleMouseMove = (e) => {
            cursor.x = e.clientX;
            cursor.y = e.clientY;
            // Add a few particles per mouse move to create a dense ray effect
            for (let i = 0; i < 3; i++) {
                addParticle(cursor.x, cursor.y);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);

        function addParticle(x, y) {
            particles.push({
                x: x,
                y: y,
                size: Math.random() * 2 + 0.5,
                // Add tiny velocity
                speedX: (Math.random() - 0.5) * 1.5,
                speedY: (Math.random() - 0.5) * 1.5,
                life: 1 // 1 is full life, 0 is dead
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Iterate backwards to safely remove particles
            for (let i = particles.length - 1; i >= 0; i--) {
                let p = particles[i];
                p.x += p.speedX;
                p.y += p.speedY;
                p.life -= 0.025; // Fading speed

                if (p.life <= 0) {
                    particles.splice(i, 1);
                    continue;
                }

                // Draw particle (dot)
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(34, 211, 238, ${p.life})`; // cyan-400
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#22d3ee';
                ctx.fill();

                // Connect closest particles to create the "ray" web effect
                for (let j = i - 1; j >= 0; j--) {
                    let p2 = particles[j];
                    let dx = p.x - p2.x;
                    let dy = p.y - p2.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 35) { // Threshold to draw connecting lines
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(34, 211, 238, ${p.life * 0.4})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', updateSize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

export default CursorTrail;
