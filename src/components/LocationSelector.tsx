import React, { ChangeEvent, useState } from 'react';

interface Props {
  locations: string[];
}
// TODO: Selector 커스터마이징하기
function LocationSelector({ locations }: Props) {
  const [selection, setSelection] = useState<string>('');
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelection(event.target.value);
  };
  return (
    <select className="LocationSelector" value={selection} onChange={onChange}>
      {locations.map(location => (
        <option value={location}>{location}</option>
      ))}
      <option value="setting">내 동네 설정</option>
    </select>
  );
}

export default LocationSelector;
