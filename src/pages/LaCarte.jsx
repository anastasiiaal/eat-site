import SubHeader from "../components/SubHeader"
import subheaderImg from "/src/assets/subheader-carte.jpg"
import menu from "../../carte.json"

export default function LaCarte () {
    const menuData = menu
    console.log(menuData)

    const starters = menuData.starters.items.map(item => {
        return (
            <p>{item}</p>
        )
    })

    const main = menuData.main.items.map(item => {
        return (
            <p>{item}</p>
        )
    })

    const dessert = menuData.dessert.items.map(item => {
        return (
            <p>{item}</p>
        )
    })

    return (
        <>
            <SubHeader
                image={subheaderImg}
                h1="Notre carte"
                subtitle="Une cuisine traditionnelle Française"
                textColor="white"
            />
            
            <section className="craft" id="carte">
                <div className="container">
                    <div className="carte-wrapper text-center">
                        <h2>Carte {menuData.mois}</h2>
                        <h3>Entrées - {menuData.starters.prix}€</h3>
                        {starters}
                        <h3>Plats</h3>
                        {main}
                        <h3>Desserts - {menuData.dessert.prix}€</h3>
                        {dessert}
                    </div>
                </div>
            </section>
        </>
    )
}