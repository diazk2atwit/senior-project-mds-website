import React from "react";

interface DisplayFileDataProps {
  data: React.Dispatch<React.SetStateAction<any>>;
}

const DisplayFileData: React.FC<DisplayFileDataProps> = ({ data }) => {
  if (data == undefined) {
    // Loading doesn't show up on display
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
    </div>
  );
};

export default DisplayFileData;
