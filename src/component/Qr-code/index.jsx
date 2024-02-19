    import { useState } from "react"
import QRCode from "react-qr-code"
    export default function Codegenerator(){

        const [input,setInput]=useState('')
        const [qrcode,setQrcode]=useState('')

        function handleGenerate(){
            setQrcode(input)
        }


        return (
            <>
           <h1>QR-CODE-GENERATOR</h1>
           <div className="input">
            <input type="text" placeholder="Type Here" onChange={(e)=>setInput(e.target.value)} value={input} />
            <button type="button"
            disabled={input && input.trim()!==""?false:true}
            onClick={handleGenerate}
            >Generate</button>
           </div>
           <div>
            <QRCode
            id="qr-code-value"
            value={qrcode}
            size={400}
            bgColor="gray"
            />
           </div>
           </>
          
        )
    }