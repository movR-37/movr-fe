import { useLoadScript } from "@react-google-maps/api";
import MapLatest from "./MapLatest";


export default function MapWrapper() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAyEsPCMh_Ry0F8uBPF9CAWJ1xB6RB0I-w" // Add your API key
    });

    return isLoaded ? <MapLatest /> : null;
}
