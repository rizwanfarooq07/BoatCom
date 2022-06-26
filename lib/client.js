import sanityClient from "@sanity/client";
import ImageUrlBuilderer from "@sanity/image-url";

export const client = sanityClient({
  projectId: "r3dqpzwx",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = ImageUrlBuilderer(client);

export const urlFor = (source) => builder.image(source);
