import React, { useState } from "react";
import SubmitForm from "./SubmitForm";

export default function App(){
  return (
    <div style={{fontFamily:'system-ui,Arial',padding:20,background:'#071026',minHeight:'100vh',color:'#e6eef8'}}>
      <div style={{maxWidth:480,margin:'auto',background:'#071726',padding:18,borderRadius:12}}>
        <h1 style={{marginTop:0}}>Cât de obosit ești? (1–10)</h1>
        <SubmitForm />
      </div>
    </div>
  );
}
