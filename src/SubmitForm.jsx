// import React, { useState } from "react";
// import QRCode from "react-qr-code";

// const API_ORIGIN = import.meta.env.VITE_API_ORIGIN || "/";
// // const API_KEY = import.meta.env.VITE_API_KEY || "";

// export default function SubmitForm(){
//   const [val, setVal] = useState(5);
//   const [label, setLabel] = useState("");
//   const [status, setStatus] = useState("");

//   async function send(){
//     setStatus("Se trimite...");
//     try {
//       const resp = await fetch(`${API_ORIGIN.replace(/\/$/, "")}/api/submit`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         //   ...(API_KEY ? { "x-api-key": API_KEY } : {})
//         },
//         body: JSON.stringify({ value: Number(val), label: label || null, meta: { userAgent: navigator.userAgent } })
//       });
//       const json = await resp.json();
//       if (resp.ok && json.success) {
//         setStatus("Trimis ✓");
//       } else {
//         setStatus("Eroare: " + (json.detail || json.error || "server"));
//       }
//     } catch (e) {
//       setStatus("Network error");
//       console.error(e);
//     }
//     setTimeout(()=> setStatus(""), 1400);
//   }

//   // public URL used for QR - point to this frontend page
//   const publicUrl = import.meta.env.VITE_PUBLIC_URL || window.location.href;

//   return (
//     <div>
//       <div style={{display:'flex',alignItems:'center',gap:12}}>
//         <input
//           type="range" min="1" max="10" value={val}
//           onChange={(e)=>setVal(e.target.value)}
//           style={{flex:1}}
//         />
//         <div style={{width:46,textAlign:'center',fontWeight:700}}>{val}</div>
//       </div>

//       <div style={{marginTop:12,display:'flex',gap:8}}>
//         <input placeholder="Opțional: grup/eticheta" value={label} onChange={(e)=>setLabel(e.target.value)} style={{flex:1,padding:8,borderRadius:8,border:0}} />
//         <button onClick={send} style={{padding:'8px 14px',borderRadius:8,border:0,background:'#0ea5a4',color:'#012023'}}>Trimite</button>
//       </div>

//       <div style={{marginTop:10,color:'#9fb0c8'}}>{status}</div>

//       <hr style={{marginTop:16,opacity:0.06}} />

//       <div style={{display:'flex',gap:16,alignItems:'center'}}>
//         <div>
//           <div style={{fontSize:14,color:'#9fb0c8'}}>Scanează QR pentru a deschide pagina pe telefon</div>
//           <div style={{marginTop:6,fontSize:12,color:'#7f99ad'}}>{publicUrl}</div>
//         </div>
//         <div style={{marginLeft:'auto'}}>
//           <QRCode value={publicUrl} size={120} renderAs="svg" />
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import QRCode from "react-qr-code";

const API_ORIGIN = import.meta.env.VITE_API_ORIGIN || "/";

export default function SubmitForm() {
  const [val, setVal] = useState(5);
  const [status, setStatus] = useState("");

  async function send() {
    setStatus("Se trimite...");
    try {
      const resp = await fetch(`${API_ORIGIN.replace(/\/$/, "")}/api/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          value: Number(val),
          meta: { userAgent: navigator.userAgent },
        }),
      });
      const json = await resp.json();
      if (resp.ok && json.success) {
        setStatus("Trimis ✓");
      } else {
        setStatus("Eroare: " + (json.detail || json.error || "server"));
      }
    } catch (e) {
      setStatus("Network error");
      console.error(e);
    }
    setTimeout(() => setStatus(""), 1400);
  }

  // public URL used for QR - point to this frontend page
  const publicUrl = import.meta.env.VITE_PUBLIC_URL || window.location.href;

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <input
          type="range"
          min="1"
          max="10"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          style={{ flex: 1 }}
        />
        <div style={{ width: 46, textAlign: "center", fontWeight: 700 }}>{val}</div>
      </div>

      <div style={{ marginTop: 12 }}>
        <button
          onClick={send}
          style={{ padding: "8px 14px", borderRadius: 8, border: 0, background: "#0ea5a4", color: "#012023" }}
        >
          Trimite
        </button>
      </div>

      <div style={{ marginTop: 10, color: "#9fb0c8" }}>{status}</div>

      <hr style={{ marginTop: 16, opacity: 0.06 }} />

      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 14, color: "#9fb0c8" }}>Scanează QR pentru a deschide pagina pe telefon</div>
          <div style={{ marginTop: 6, fontSize: 12, color: "#7f99ad" }}>{publicUrl}</div>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <QRCode value={publicUrl} size={120} renderAs="svg" />
        </div>
      </div>
    </div>
  );
}
