# Custom Needle Engine Library Example

This web project is setup to work with Unity, Blender or custom code to create your own 3D web experiences with Needle Engine and then publish it as a library to NPM. 

This workflow allows you to easily re-use your custom code in other websites without having to install Needle Engine or other dependencies in the target project.

## Library Structure

The structure is mostly identical to any other Needle Engine project with a few additional files and small modifications for building the library:

- `vite.library.config.ts` - Vite configuration for building the library
- `src/main.ts` - Main entry point for the library, where you can import Needle Engine and your custom code
- `package.json` - Project metadata and scripts for building and publishing the library
  - `build:library` script to build the library
  - `build:types` script to generate TypeScript declaration files
  - `publish` script to publish the library to NPM


## Building the Library

- Either `npm run build:library` to build the library. This will create a `dist` folder with the compiled code.
- Or `npm publish` to build & publish the library to NPM. Make sure you are logged in to your NPM account and have the necessary permissions to publish the package.

In this example the library name is `my-needle-library` as defined in `package.json`. You can change this to your desired package name.

After publishing it's available on NPM: https://www.npmjs.com/package/my-needle-library

## Using the Library

In your other website or web project you can now simply install your custom library using NPM (e.g. `npm install my-needle-library`) and then import it in your code:

```ts
import 'my-needle-library';
```

And use it as needed. For example in a Vue component:

```vue
<template>
  <div id="app">
    <needle-engine src="/Cube.glb" contact-shadows="0.9" tonemapping="agx"
        background-image="https://cdn.needle.tools/static/hdris/ballroom_2k.pmrem.ktx2"
        environment-image="https://cdn.needle.tools/static/hdris/ballroom_2k.pmrem.ktx2">
    </needle-engine>
  </div>
</template>

<script lang="ts">
import "my-needle-library";
</script>
```

A full example project using Vue is included in this repository in the `usage-example` folder.


## Links

- [Example of a vue website using this library](https://custom-library-example-vue-project-z23hmxb1q60k5-z6xtek.needle.run/)