import { useState } from "react";
import { evaluate } from "mathjs";

export function Calculator(){
    const [input, setInput] = useState("");
    const [result, setResult] = useState("")

    const handleClick = (value) => {
        setInput(input + value);
    };

    const dataAtual = new Date
    const dataBrasileira = dataAtual.toLocaleDateString('pt-br');


    const handleCalculate = () => {
        try {
            if (!input) return;
            setInput(evaluate(input).toString());
        }catch (error){
            setResult("Error");
            console.error(error);
        }
    };

    const handleClear = () => {
        setInput("");
        setResult("");
    };

    const handleDelete = () => setInput((prev) => prev.slice(0, -1));
    
    return (
        <div className="grid shadow-md w-[950px] text-2xl font-bold rounded-[5px]">
            <div className="bg-[#dab879] text-white min-h-[200px] grow flex flex-col justify-end items-end p-8 gap-4 rounded-[5px]">
                <button className="justify-center items-center shadow-md rounded-[5px] hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#a1844f96]" onClick={() => alert("Data de hoje é " + dataBrasileira )}>
                    Data
                </button>
                <span className="flex w-fit justify-self-end text-xl">{input || "0"}</span>
                <div className="flex justify-between w-full items-center text-5xl">
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => alert("Seu resultado é " + input)}>
                    =
                </button>
                </div>
            </div>
            <div className="bg-white grow h-[50px] shadow-md grid grid-cols-3">
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#c0a26c]" onClick={() => handleCalculate("")}>
                    =
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#c0a26c]" onClick={() => handleClear("")}>
                    C
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#c0a26c]" onClick={() => handleDelete("")}>
                    ⌫
                </button>
            </div> 
            <div className="bg-#d3b378 grow h-[350px] grid grid-cols-5 rounded-[5px]">
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#c0a26c]" onClick={() => handleClick("+")}>
                    +
                </button> 
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#c0a26c]" onClick={() => handleClick("^2")}>
                    ^2
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("1")}>
                    1
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("2")}>
                    2
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("3")}>
                    3
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#c0a26c]" onClick={() => handleClick("-")}>
                    -
                </button> 
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#c0a26c]" onClick={() => handleClick("^")}>
                    ^
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("4")}>
                    4
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("5")}>
                    5
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("6")}>
                    6
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#c0a26c]" onClick={() => handleClick("*")}>
                    x
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#c0a26c]" onClick={() => handleClick("log(")}>
                    log
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("7")}>
                    7
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("8")}>
                    8
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("9")}>
                    9
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#c0a26c]" onClick={() => handleClick("/")}>
                    /
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#c0a26c]" onClick={() => handleClick("%")}>
                    %
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("(")}>
                    (
                </button>
                <button className="justify-center items-center/ hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("0")}>
                    0
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick(")")}>
                    )
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#c0a26c]" onClick={() => handleClick("sqrt(")}>
                    √
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#c0a26c]" onClick={() => handleClick("cbrt(")}>
                    ³√
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("3.14159265359")}>
                    π
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick(".")}>
                    .
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick(":")}>
                    :
                </button>
            </div>
        </div>
    );

}


//default // ele é só declarado uma vez

//const // pode reutilizar

//arrow function

//const HelloWorld = () => {
//    return (
//        <div>
//            <h1>
//                Hello, World!
//            </h1>
//        </div>
//    );
//};
//    export default HelloWorld;

