import React, { useState, useEffect, useRef } from "react";
import { TerminalChattingContainer, TerminalNameContainer } from "./index.styled";

const TerminalContent = () => {
    //입력 받는 것부터 시작
    const [input, setInput] = useState("");

    const [messages, setMessages] = useState<string[]>([]);
    const [stack, setStack] = useState([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            const newMessages = [...messages, input];
            setMessages(newMessages);
            setInput("");
            if(inputRef.current){
            inputRef.current.focus();
            }
        }
    };

    useEffect(() => {
        if(inputRef.current){
        inputRef.current.focus();
        }
    }, []);

    //emphasis msg 푸시해서 받고 출력하기
    const emphasisMsg = (msg) => {
        const newMessages = [...messages, msg];
        setMessages(newMessages);
    };

    //명령어 처리

    //명령어 처리


    return(
        <div>
            <TerminalChattingContainer>
                <div>
                    {messages.map((message, index) => (
                        <div key={index}>
                            <p>{message}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <span>$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={handleInput}
                        onKeyPress={handleEnter}
                    />
                </div>
            </TerminalChattingContainer>
        </div>
    )

    
};



export default TerminalContent;