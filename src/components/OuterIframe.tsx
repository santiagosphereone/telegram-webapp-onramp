import { ChangeEvent, useState } from "react";
import "../App.css";
import { useSearchParams } from "react-router-dom";

type Environment = "STAGING" | "PRODUCTION";

export default function OuterIframe() {
  const [searchParams] = useSearchParams();

  const [environment, setEnvironment] = useState<Environment>(
    (searchParams.get("environment") as Environment) || "STAGING"
  );

  const [apiKey, setApiKey] = useState<string>(
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
    <iframe
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        borderRadius: "10px",
        overflow: "hidden",
      }}
      src={finalUrl}
      allow="camera;microphone;payment"
    />
  );
}
