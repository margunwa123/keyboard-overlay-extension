// i usually put the logic in here so the structure would be
// widget -->  sw_hello --> manager --> sw_hello --> widget
class HelloManager {
  sayHello() {
    return "Hello brother";
  }

  async sayHelloAsync() {
    await wait(3000);

    return "Hello with async";
  }
}

export const helloManager = new HelloManager();

function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
