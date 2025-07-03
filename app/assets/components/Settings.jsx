import { GearIcon } from "@phosphor-icons/react";
import "../css/navigations.css";
import { betterKey, fetchpython } from "../../js/tools";
import toast from "react-hot-toast";
import config from "../../configs/config.json" with { type: "json" }


function Settings() {
    let active = false;

    document.querySelectorAll("html *").forEach(el => {
        const parentClassName = "settings";

        el.addEventListener("click", (e) => {
            const parent = e.target.closest("." + parentClassName);
            if (!parent) {
                active = false;
                updateActivity();
            }
        });
    });

    const renderSettings = (betterKeys = true) => {
        return Object.entries(config.settings).map(([key, value]) => {
            const type = typeof value === "boolean" ? "checkbox"
                : typeof value === "number" ? "number"
                    : "text";

            const finalKey = betterKeys ? betterKey(key) : key;

            return (
                <label key={finalKey} className="setting-option">
                    <input
                        type={type}
                        defaultChecked={type === "checkbox" ? value : undefined}
                        defaultValue={type !== "checkbox" ? value : undefined}
                        forsetting={key}
                        onChange={saveSettings}
                    />
                    {finalKey}
                </label>
            );
        });
    };

    const updateActivity = () => {
        const panel = document.querySelector(".settings-panel");
        const btn = document.querySelector(".settings-btn");

        if (active && !btn.classList.contains("active")) {
            btn.classList.add("active");
            panel.classList.add("active");
        }
        else if (!active && btn.classList.contains("active")) {
            btn.classList.remove("active");
            panel.classList.remove("active");
        }
    };

    const saveSettings = async () => {
        document.querySelectorAll(".settings-panel>.setting-option>input").forEach(el => {
            const value = el.getAttribute("type") == 'checkbox' ? el.checked : el.value;
            config.settings[el.getAttribute("forsetting")] = value;
        });

        const t = toast.loading("Saving settings...");
        try {
            const response = await fetchpython("/save_config", {
                config: config
            });
            const data = await response.json();

            if (response.ok) {
                toast.success("Saved settings!", { id: t });
            }
            else {
                toast.error(data.error, { id: t });
            }
        }
        catch (e) {
            toast.error(e, { id: t });
        }


    }

    return (
        <>
            <div className="settings">
                <button className="settings-btn" onClick={() => { active = !active; updateActivity(); }}>
                    <GearIcon weight="fill" />
                </button>
                <div className="settings-panel">
                    {renderSettings()}
                </div>
            </div >

        </>
    );
}

export default Settings;
