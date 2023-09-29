export default function SubHeader ({image, h1, subtitle, textColor}) {

    if (image === undefined) {
        image = "/src/assets/sepia-texture.jpg"
    }

    return (
        <section className="sub-header" style={{"backgroundImage": `url('.${image}')`}}>
            <div className={textColor ? `container text-center py-5 text-${textColor}` : "container text-center py-5"}>
                {h1 && <h1>{h1}</h1>}
                {subtitle && <p className="fs-4">{subtitle}</p>}
            </div>
        </section>
    )
}