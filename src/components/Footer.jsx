import logo from "/src/assets/logo.svg"
import social1 from "/src/assets/social1.svg"
import social2 from "/src/assets/social2.svg"
import social3 from "/src/assets/social3.svg"

export default function Footer () {
    return (
        <footer>
            <div className="container text-center text-white">
                <a href=".">
                    <img src={logo} alt="Logo" />
                </a>
                <p className="pt-3">Restaurant E.A.T. </p>
                <a className="px-2" href="https://www.tripadvisor.fr/Restaurant_Review-g187212-d2271310-Reviews-Restaurant_EAT_Estaminet_Aromes_et_Tentations-Avignon_Vaucluse_Provence_Alpes_Cot.html" target="_blanc">
                    <img src={social1} alt="Trip Advisor" />
                </a>
                <a className="px-2" href="https://fr-fr.facebook.com/restaurant.eat.avignon/" target="_blanc">
                    <img src={social2} alt="FaceBook" />
                </a>
                <a className="px-2" href="https://www.instagram.com/restaurant_eat_avignon/" target="_blanc">
                    <img src={social3} alt="Instagram" />
                </a>
                <p className="mt-5">© 2023 Restaurant EAT 8, Rue MAZAN – 84000 Avignon Tel: 04 90 83 46 74</p>
            </div>
        </footer>
    )
}