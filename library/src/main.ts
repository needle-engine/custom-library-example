// These imports are needed to make sure the engine and custom components are included in the library build
import("@needle-tools/engine") /* async import of needle engine */;
import "./generated/register_types.js";


// --- OPTIONAL: Expose your own components as part of the library
export * from "./scripts/MyComponent.js";


// --- OPTIONAL: Example code that runs when the library is imported
import { ObjectUtils, onStart } from "@needle-tools/engine";
import { MyComponent } from "./scripts/MyComponent.js";

onStart(ctx => {
    console.log("Hello from the library", ctx.scene);
    if (ctx.domElement.getAttribute("demo") !== null) {
        // the following is just an example to proof that custom components can be added and that they run
        const cube = ObjectUtils.createPrimitive("Cube");
        ctx.scene.add(cube);
        cube.addComponent(MyComponent);
    }
});


// --- OPTIONAL: Expose Needle-Engine's onStart hook so that users of the library can also use it
export { onStart };
