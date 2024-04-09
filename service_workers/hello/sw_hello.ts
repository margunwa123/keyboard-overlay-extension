// Always use 'sw' as prefix for service workers

import { HelloAction, HelloMessage, HelloResponse } from "./constants";
import { helloManager } from "./hello_manager";

function main() {
  chrome.runtime.onMessage.addListener(
    (
      message: HelloMessage,
      sender,
      sendResponse: (response: HelloResponse) => void
    ) => {
      switch (message.action) {
        case HelloAction.GET: {
          // To see this console.log, you need to go to
          // chrome://extensions/ and click on the `service worker` blue text on
          // your installed extension
          console.log("Hello from SW!");
          const message = helloManager.sayHello();

          return sendResponse({
            data: {
              message,
            },
            success: true,
          });
        }
        case HelloAction.GET_ASYNC: {
          // DO NOT
          // I repeat, DO NOT convert service worker main function to an async
          // await format, because it wouldn't work. Just use the then(), it's fine!
          helloManager.sayHelloAsync().then((message) => {
            sendResponse({
              data: {
                message,
              },
              success: true,
            });
          });

          // you need to return true for async function calls
          return true;
        }
      }
    }
  );
}

main();
