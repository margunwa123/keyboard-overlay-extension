import { FC, useState } from "react";
import {
  HelloMessage,
  HelloResponse,
} from "../../../service_workers/hello/constants";
import "../../../styles/tailwind.css";

const DashboardPage: FC = () => {
  const [helloResult, setHelloResult] = useState("");
  const [helloAsyncResult, setHelloAsyncResult] = useState("");

  const fetchHello = async () => {
    if (helloResult != "") return setHelloResult("");

    const message: HelloMessage = {
      action: "HELLO_GET",
    };

    const response: HelloResponse = await chrome.runtime.sendMessage(message);

    if (response.data?.message) {
      setHelloResult(response.data.message);
    }
  };

  const fetchHelloAsync = async () => {
    if (helloAsyncResult != "") return setHelloAsyncResult("");

    const message: HelloMessage = {
      action: "HELLO_GET_ASYNC",
    };

    const response: HelloResponse = await chrome.runtime.sendMessage(message);

    if (response.data?.message) {
      setHelloAsyncResult(response.data.message);
    }
  };

  return (
    <div className="flex flex-col text-base gap-4 p-4 text-center h-full w-full">
      <p className="text-4xl font-bold">
        This is the dashboard (or options) page
      </p>
      <p>Go to src/pages/dashboard/dashboard_page.tsx to start editing</p>
      <p>Let's try out some API call:</p>

      <button
        onClick={fetchHello}
        className="border text-lg border-green-600 text-black bg-green-200 rounded-md p-2"
      >
        Get hello from service worker
      </button>

      <p>{helloResult}</p>

      <button
        onClick={fetchHelloAsync}
        className="border text-lg border-purple-600 text-black bg-purple-200 rounded-md p-2"
      >
        Get hello from service worker{" "}
        <span className="italic">asynchronously</span>
      </button>

      <p>{helloAsyncResult}</p>
    </div>
  );
};

export default DashboardPage;
