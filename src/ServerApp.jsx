import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export default function render(url, opts) {
  const stream = renderToPipeableStream(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    opts
  );

  return stream;
}
