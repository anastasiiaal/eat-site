import SubHeader from "../components/SubHeader"
import subheaderImg from "/src/assets/subheader-contact.jpg"

export default function Contact () {
    return (
        <>
            <SubHeader
                textColor="white"
                image={subheaderImg}
                h1="Nous contacter"
                subtitle="Une question ? N'hesitez pas à nous contacter !"
            />
        </>
    )
}