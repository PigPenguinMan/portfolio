'use client'
import React from "react";


const dataDownload = ({ notices, events, cAbyDun, cGuard, calendar  }) => {
    const data = {
        notices,
        events,
        cAbyDun,
        cGuard,
        calendar,
      };
    const jsonBlob = new Blob(data,{type:'application/json'})
    const downLink = document.createElement('a');
    downLink.href = URL.createObjectURL(jsonBlob);
    downLink.download='data.json'

    document.body.appendChild(downLink);
    downLink.click()
    document.body.removeChild(downLink);
    return (
        <div>
            <button onClick={dataDownload}>down json</button>
        </div>
    );
}

export default dataDownload;