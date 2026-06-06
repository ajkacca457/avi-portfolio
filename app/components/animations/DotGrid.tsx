export default function DotGrid() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `radial-gradient(circle, rgba(78, 201, 176, 0.25) 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                    animation: "pulseFade 4s ease-in-out infinite",
                    maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
                }}
            />
        </div>
    );
}