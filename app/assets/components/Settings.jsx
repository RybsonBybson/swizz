import { GearIcon } from "@phosphor-icons/react";
import { main } from "./main";
import "../css/navigations.css";
import config from '../../configs/config.json' with { type: "json" };

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
    }


    return (
        <>
            <div className="settings">
                <button className="settings-btn" onClick={() => { active = !active; updateActivity(); }}>
                    <GearIcon weight="fill" />
                </button>
                <div className="settings-panel">

                </div>
            </div >

        </>
    );
}

export default Settings;
