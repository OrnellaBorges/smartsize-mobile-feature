import "./table.css";

export default function TableComponent2() {
  // Fausse données pour les lignes du tableau
  const fakeTableDataContent = [
    {
      size: "XS",
      fr: "34",
      chest: "82-86",
      waist: "62-66",
      hips: "87-91",
      height: "160-165",
    },
    {
      size: "S",
      fr: "36",
      chest: "87-91",
      waist: "67-71",
      hips: "92-96",
      height: "165-170",
    },
    {
      size: "M",
      fr: "38",
      chest: "92-96",
      waist: "72-76",
      hips: "97-101",
      height: "170-175",
    },
    {
      size: "L",
      fr: "40/42",
      chest: "97-101",
      waist: "77-81",
      hips: "102-106",
      height: "175-180",
    },
  ];
  return (
    <div className="table-container">
      <table>
        <thead>
          {/* header */}
          <tr className="tableRow">
            {/* One table row */}
            <th>Taille</th>
            <td>FR</td>
            <td>Tour de poitrine</td>
            <td>Tour de taille</td>
            <td>Tour de hanche</td>
            <td>Hauteur</td>
          </tr>
        </thead>

        <tbody className="tableBody">
          {fakeTableDataContent.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th>{row.size}</th>
              <td>{row.fr}</td>
              <td>{row.chest}</td>
              <td>{row.waist}</td>
              <td>{row.hips}</td>
              <td>{row.height}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
