import config from "../configs/config.json" with { type: "json" }


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

export function betterKey(key) {
    if (!key) return "";

    const withSpaces = key.replace(/([A-Z])/g, ' $1');

    return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
}

export function parseTimeToMs(timeStr) {
  if (!timeStr) return 0;
  if (timeStr.endsWith("ms")) return parseFloat(timeStr);
  if (timeStr.endsWith("s")) return parseFloat(timeStr) * 1000;
  return 0;
}

export function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
