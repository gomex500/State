import React from "react";

export default function Btn({texto, cls, fuc, tp}){
    return(
        <button type={tp} onClick={fuc} className={cls}>
            {texto}
        </button>
    )
}

export function Inp({tp,cls,ph,fuc,val,name}){
    return(
        <input
            type={tp}
            className={cls}
            placeholder={ph}
            onChange={fuc}
            value={val}
            name={name}
        />
    )
}

export function Texto({cls,texto}){
    return(
        <p className={cls}>
            {texto}
        </p>
    )
}