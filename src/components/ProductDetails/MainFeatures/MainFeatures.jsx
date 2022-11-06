import "./MainFeatures.css";
import FeaturesTable from "./FeaturesTable/FeaturesTable";

export default function MainFeatures() {
  const principalFeatures = [
    { title: "Marca", description: "Multiventas AZ" },
    { title: "Modelo", description: "Stich & Lilo" },
    { title: "Franquicia", description: "Disney" },
    { title: "Animal", description: "Stich" },
    { title: "Personaje", description: "Stich" },
  ];

  const otherFeatures = [
    { title: "Material", description: "Plush" },
    { title: "Es material hipoalergénico", description: "No" },
    { title: "Altura x Ancho", description: "20 cm x 0cm" },
  ];

  return (
    <div className="main-features">
      <h3>Características principales</h3>
      <FeaturesTable features={principalFeatures} />
      <h4>Otras Características</h4>
      <div className="other-features">
        {otherFeatures.map((of) => (
          <span>
            <strong>{of.title}: </strong>
            {of.description}
          </span>
        ))}
      </div>
    </div>
  );
}
