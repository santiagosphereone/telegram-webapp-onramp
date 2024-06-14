import { ChangeEvent, useState } from "react";
import "../App.css";
import { useSearchParams } from "react-router-dom";
import { FlexBoxCol, Input, Button } from "./styled/styled";

type Environment = "STAGING" | "PRODUCTION";

export default function OuterIframe() {
  const [searchParams] = useSearchParams();

  const [environment, setEnvironment] = useState<Environment>(
    (searchParams.get("environment") as Environment) || "STAGING"
  );

  const [apiKey, setApiKey] = useState<string>(
    // searchParams.get("apiKey") || ""
    "b5bede12-a8ad-4147-ae85-ecf4cd2b1fd5"
  );

  const toggleEnvironment = (selectedEnvironment: Environment) => {
    setEnvironment(selectedEnvironment);
  };

  const handleApiChange = (e: ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  const apiUrl =
    environment === "STAGING"
      ? `https://transak-double-iframe-supporter.vercel.app/staging?environment=${environment}`
      : `https://transak-double-iframe-supporter.vercel.app/production?environment=${environment}`;

  const finalUrl = `${apiUrl}${apiKey ? `&apiKey=${apiKey}` : ""}`;

  return (
    <div className="container">
      <FlexBoxCol>
        {/* <div className="content">
          <label htmlFor="dropdown">Select Environment:</label>
          <select
            id="dropdown"
            value={environment}
            onChange={(e) => toggleEnvironment(e.target.value as Environment)}
          >
            <option value="STAGING">Staging</option>
            <option value="PRODUCTION">Production</option>
          </select>
        </div> */}
        {/* 
        <div className="content">
          <span>API Key</span>
          <Input type="text" value={apiKey} onChange={handleApiChange} />
        </div> */}

        <iframe
          className="outer"
          src={finalUrl}
          allow="camera;microphone;payment"
        />
      </FlexBoxCol>
    </div>
  );
}
