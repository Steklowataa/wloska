import { useState, useEffect } from "react";

const TypingText = ({ text, speed, delay = 0, trigger }: {text: string, speed?: number, delay?: number, trigger: number}) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        setDisplayedText('');
        
        const delayTimeout = setTimeout(() => {
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    setDisplayedText(text.slice(0, i + 1));
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, speed);

            return () => clearInterval(typingInterval);
        }, delay);

        return () => clearTimeout(delayTimeout);
    }, [text, speed, delay, trigger]);

    return (
        <span>
            {displayedText}
        </span>
    );
};

export default TypingText;