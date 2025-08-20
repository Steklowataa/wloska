import { useState, useEffect } from "react";

const EffectAppear = ({ text, trigger }: {text: string, trigger: string}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(false);
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 2200); // Appear after typing animation

        return () => clearTimeout(timeout);
    }, [text, trigger]);

    return (
        <div className={`mt-6 text-lg text-gray-700 max-w-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
            {text}
        </div>
    );
};

export default EffectAppear;