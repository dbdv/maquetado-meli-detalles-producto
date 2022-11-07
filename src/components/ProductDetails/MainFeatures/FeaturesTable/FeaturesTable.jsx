import "./FeaturesTable.css";

export default function FeaturesTable({ features }) {
  return (
    <table className="feat-table">
      <tbody>
        {features.map((feat) => (
          <tr key={feat.title + feat.description}>
            <th className="title">{feat.title}</th>
            <td className="descrip">{feat.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
