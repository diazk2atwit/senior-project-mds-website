import { useEffect } from "react";
import { useState } from "react";

interface DisplayProps {
  url: string;
}

const Display = ({ url }: DisplayProps) => {
  const [data, setData] = useState({});

  const api_call = `http://127.0.0.1:8000/get_url_report?url=${url}`;

  const fetchData = async () => {
    const result = await fetch(api_call);
    result.json().then((json) => {
      console.log(json);
      setData(json["attributes"]["last_analysis_results"]);
    });
  };

  useEffect(() => {
    setData({});
    fetchData();
  }, [url]);

  if (Object.keys(data).length === 0) {
    return (
      <div>
        <span className="fs-5">Loading. . .</span>
      </div>
    );
  }

  return (
    <div>
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {JSON.stringify(value, null, 2)}
        </div>
      ))}

      <pre>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        {/* {JSON.stringify(data["attributes"]["last_analysis_stats"], null, 2)} */}
      </pre>
    </div>
  );
};

export default Display;
