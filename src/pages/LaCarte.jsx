import SubHeader from "../components/SubHeader"
import subheaderImg from "/src/assets/subheader-carte.jpg"

export default function LaCarte () {
    return (
        <>
            <SubHeader
                image={subheaderImg}
                h1="Notre carte"
                subtitle="Une cuisine traditionnelle Française"
                textColor="white"
            />
            <h1>Carte ici</h1>
        </>
    )
}