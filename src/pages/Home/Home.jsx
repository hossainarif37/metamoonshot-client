import Banner from "./Banner";
import Featured from "./Featured";
import MassiveCollaboration from "./MassiveCollaboration";
import PitchDeck from "./PitchDeck";
import UpcomingEvent from "./UpcomingEvent";

const Home = () => {
    return (
        <div>
            <Banner />
            <MassiveCollaboration />
            <UpcomingEvent />
            <PitchDeck />
            <Featured />
        </div>
    );
};

export default Home;