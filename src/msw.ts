import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

export const worker = setupWorker(
  http.get("/projects", () => new HttpResponse(null, { status: 204 })),
);
