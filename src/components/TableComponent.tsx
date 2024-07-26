import "./table.css";

export default function TableComponent() {
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
          <tr>
            <th>XS</th>
            <td>34</td>
            <td>82-86</td>
            <td>62-66</td>
            <td>87-91</td>
            <td>160-165</td>
          </tr>
          <tr>
            <th>S</th>
            <td>36</td>
            <td>87-91</td>
            <td>67-71</td>
            <td>92-96</td>
            <td>165-170</td>
          </tr>
          <tr>
            <th>M</th>
            <td>38</td>
            <td>92-96</td>
            <td>72-76</td>
            <td>97-101</td>
            <td>170-175</td>
          </tr>
          <tr>
            <th>L</th>
            <td>40/42</td>
            <td>97-101</td>
            <td>77-81</td>
            <td>102-106</td>
            <td>175-180</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
