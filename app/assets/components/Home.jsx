import { HouseIcon } from "@phosphor-icons/react";
import { main } from "./main";
import "../css/Home.css";

function Home() {
    return <>
        <div className="home-btn" onClick={() => { main() }}>
            <HouseIcon weight="fill" />
        </div>
    </>
}

export default Home;