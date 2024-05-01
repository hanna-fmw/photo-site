//This is to disable server-side rendering
import dynamic from "next/dynamic";

//So we create a new variable and we import our Map component and set ssr to false so that our
//Map.tsx component (which is ./Map) will use client-side rendering instead of SSR:
const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

//And we export it
export default Map;

//and now instead of importing Map.tsx in the file where we want to render our Map.tsx component, we just point to
//the map FOLDER, and then this index.ts file will get used instead of our Map.tsx file (and we will get)
//client-side rendering instead, and hence the window error will disappear!
