import { HouseIcon } from "@phosphor-icons/react";
import { main } from "./main";
import "../css/navigations.css";

function Home() {
    return <>
        <button className="home-btn" onClick={() => { main() }}>
            <HouseIcon weight="fill" />
        </button>
    </>
}

export default Home;