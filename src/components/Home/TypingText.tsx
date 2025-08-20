import { useState, useEffect } from "react";

const TypingText = ({ text, speed, delay = 0, trigger }: {text: string, speed?: number, delay?: number, trigger: string}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        setDisplayedText('');
        setIsTyping(false);
        
        const delayTimeout = setTimeout(() => {
            setIsTyping(true);
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    setDisplayedText(text.slice(0, i + 1));
                    i++;
                } else {
                    clearInterval(typingInterval);
                    setIsTyping(false);
                }
            }, speed);

            return () => clearInterval(typingInterval);
        }, delay);

        return () => clearTimeout(delayTimeout);
    }, [text, speed, delay, trigger]);

    return (
        <span>
            {displayedText}
            {isTyping && <span className="animate-pulse">|</span>}
        </span>
    );
};

export default TypingText;