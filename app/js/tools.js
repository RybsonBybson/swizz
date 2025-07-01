import config from '../configs/config.json' with { type: "json" };



export async function fetchpython(url, body = {}) {
    return await fetch(`http://${config.python.host}:${config.python.port}${url}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
}


/**
 * 
 * @param {{title: string, defaultPath: string, filters: [{name: string, extensions: [string]}]}} data 
 */
export async function pickPath(data) {
    const { canceled, filePath } = await window.back.pickPath(data);
    return {canceled, filePath};
}


export async function toBase64(file){
    return new Promise((resolve, reject) => {
    const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })
};
