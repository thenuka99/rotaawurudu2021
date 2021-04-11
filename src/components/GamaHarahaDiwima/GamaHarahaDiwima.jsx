import React from "react";
import Game from "../Game/Game";
import GamaHaraha from "../../assests/BG_Sample.jpg";


function gamaHaraha(){

    return(
        <Game
            imgsrc={GamaHaraha}
            name="Gama Haraha Diwima"
            practice="gama-haraha-diwima/practice"
            Start="gama-haraha-diwima/start"
        />
    );
}

export default gamaHaraha;