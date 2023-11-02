import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

export const worker = setupWorker(
  http.delete("/projects", () => new HttpResponse(null, { status: 204 })),
);
