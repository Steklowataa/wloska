import { useState, useEffect } from "react";

const SpinningEllipse = () => {
    const [rotation, setRotation] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // 4 colors: green, red, yellow, blue
    const colors = ['#22c55e', '#ef4444', '#eab308', '#3b82f6'];
        
    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => prev + 90);
            setCurrentIndex(prev => (prev + 1) % 4); // Cycle through 0, 1, 2, 3
        }, 6500); // szybkosc otwarzania 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <div 
                className="absolute right-0 top-1/2 transition-all duration-1000 ease-in-out"
                style={{
                    width: '800px',
                    height: '800px',
                    backgroundColor: colors[currentIndex],
                    borderRadius: '50%',
                    transform: `translateY(-50%) translateX(50%) rotate(${rotation}deg)`,
                    transformOrigin: 'center center',
                    // Add gradient to make rotation visible
                    background: `linear-gradient(45deg, ${colors[currentIndex]} 0%, ${colors[currentIndex]}80 50%, ${colors[currentIndex]} 100%)`
                }}
            />
        </div>
    );
};

export default SpinningEllipse;