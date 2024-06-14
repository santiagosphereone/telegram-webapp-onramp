import "./App.css";
import "@twa-dev/sdk";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

type Environment = "STAGING" | "PRODUCTION";

function App() {
  const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();

  const [environment, setEnvironment] = useState<Environment>(
    (searchParams.get("environment") as Environment) || "STAGING"
  );

  const [apiKey, setApiKey] = useState<string>(
    "b5bede12-a8ad-4147-ae85-ecf4cd2b1fd5"
  );

  const apiUrl =
    environment === "STAGING"
      ? `https://transak-double-iframe-supporter.vercel.app/staging?environment=${environment}`
      : `https://transak-double-iframe-supporter.vercel.app/production?environment=${environment}`;

  const finalUrl = `${apiUrl}${apiKey ? `&apiKey=${apiKey}` : ""}`;

  return (
    <div className="app-container">
      {open ? (
        <iframe
          className="responsive-iframe"
          src={finalUrl}
          allow="camera;microphone;payment"
        />
      ) : (
        <button className="open-button" onClick={() => setOpen(!open)}>
          Buy Mantle with Transak
        </button>
      )}
    </div>
  );
}

export default App;
