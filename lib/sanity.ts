import { createClient } from "@sanity/client";

export const sanityImages = createClient({
  projectId: "66aqnbcn",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export const sanityFiles = createClient({
  projectId: "66aqnbcn",
  dataset: "staging",
  apiVersion: "2024-01-01",
  useCdn: true,
});
