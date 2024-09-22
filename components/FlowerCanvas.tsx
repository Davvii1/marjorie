'use client'
import { useEffect, useRef } from 'react';

const FlowerCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Helper function to draw a flower
        const drawFlower = (x: number, y: number, petalCount: number, radius: number) => {
            ctx.fillStyle = 'yellow';
            ctx.strokeStyle = 'orange';
            ctx.lineWidth = 2;

            for (let i = 0; i < petalCount; i++) {
                const angle = (i * 2 * Math.PI) / petalCount;
                const petalX = x + Math.cos(angle) * radius;
                const petalY = y + Math.sin(angle) * radius;

                ctx.beginPath();
                ctx.arc(petalX, petalY, radius / 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            }

            // Draw flower center
            ctx.beginPath();
            ctx.arc(x, y, radius / 2, 0, Math.PI * 2);
            ctx.fillStyle = 'orange';
            ctx.fill();
        };

        // Draw multiple flowers
        const drawFlowers = () => {
            const flowerRadius = 30; // Base radius for flowers
            const flowerSpacing = 3.2 * flowerRadius; // Spacing between flower centers
            const flowerCountX = Math.ceil(canvas.width / flowerSpacing); // Number of flowers in X direction
            const flowerCountY = Math.ceil(canvas.height / flowerSpacing); // Number of flowers in Y direction

            for (let x = 0; x < flowerCountX; x++) {
                for (let y = 0; y < flowerCountY; y++) {
                    // Randomize position slightly for a more natural look
                    const offsetX = (Math.random() - 0.5) * (flowerRadius / 2);
                    const offsetY = (Math.random() - 0.5) * (flowerRadius / 2);
                    const petalCount = 8; // Randomize petal count between 5 and 8
                    const radius = flowerRadius + Math.random() * 15; // Randomize size slightly

                    drawFlower(
                        x * flowerSpacing + flowerRadius + offsetX, // X position
                        y * flowerSpacing + flowerRadius + offsetY, // Y position
                        petalCount,
                        radius
                    );
                }
            }
        };

        // Clear the canvas and draw flowers
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawFlowers();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawFlowers();
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />;
};

export default FlowerCanvas;