import React, { useState } from 'react';

function ApiElement() {
  const [data, setData] = useState({
    yada: "null",
    foo: 1,
    bar: true,
    wah: "wah"
  });

  const [name, setName] = useState('Call the API');

  const callApi = async () => {
    const response = await fetch('https://punk-production.up.railway.app/xmpl/datum', {
      method: 'POST'
    });
    const jsonData = await response.json();
    setData(jsonData);
  };

  const callClear = () => {
    setData({ yada: "null", foo: 1, bar: true, wah: "wah" });
  };

  const onClickApi = () => {
    if (data.yada === "null") {
      setName("Clear the Data");
      callApi();
    }
  };

  const onClickClear = () => {
    if (data.yada !== "null") {
      setName("Call the API");
      callClear();
    }
  };

  return (
    <div style={{
      display: 'block',
      border: 'solid 1px gray',
      padding: '16px',
      maxWidth: '800px'
    }}>
      {data.yada !== "null" ? (
        <>
          <h1> You've got data!</h1>
          <p>Yada = {data.yada}</p>
          <p>Foo = {data.foo}</p>
          <p>Bar = {data.bar.toString()}</p>
          <p>Wah = {data.wah}</p>
          <div>
            <button onClick={onClickClear}>{name}</button>
          </div>
        </>
      ) : (
        <>
          <h1> Click the button!</h1>
          <button onClick={onClickApi}>{name}</button>
        </>
      )}
    </div>
  );
}

export default ApiElement;
