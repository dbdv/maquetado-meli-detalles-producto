import "./FeaturesTable.css";

export default function FeaturesTable({ features }) {
  return (
    <table className="feat-table">
      {features.map((feat) => (
        <tr>
          <th className="title">{feat.title}</th>
          <td className="descrip">{feat.description}</td>
        </tr>
      ))}
    </table>
  );
}
