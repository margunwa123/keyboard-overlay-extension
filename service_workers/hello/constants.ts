export type HelloMessage = {
  action: (typeof HelloAction)[HelloActionKeys];
};

type HelloActionKeys = keyof typeof HelloAction;

// Action need to be unique across ALL service workers
// use prefix for specific SW to avoid name clashing
export const HelloAction = {
  GET: "HELLO_GET",
  GET_ASYNC: "HELLO_GET_ASYNC",
} as const;

export type HelloData = {
  message?: string;
};

// This is the response you'll be sending to your widgets
export type HelloResponse = {
  data?: HelloData;
  success?: boolean;
  error?: string;
};
