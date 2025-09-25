# Usage

This web project is setup to work with Unity, Blender or custom code to create your own 3D web experiences with Needle Engine and then publish it as a library to NPM. 

This workflow allows you to easily re-use your custom code in other websites without having to install Needle Engine or other dependencies in the target project.

- `vite.library.config.ts` - Vite configuration for building the library
- `src/main.ts` - Main entry point for the library, where you can import Needle Engine and your custom code
- `package.json` - Project metadata and scripts for building and publishing the library


## Publishing

- Either `npm run build:library` to build the library. This will create a `dist` folder with the compiled code.
- Or `npm publish` to build & publish the library to NPM. Make sure you are logged in to your NPM account and have the necessary permissions to publish the package.

In this example the library name is `my-needle-library` as defined in `package.json`. You can change this to your desired package name.

After publishing it's available on NPM: https://www.npmjs.com/package/my-needle-library

## Links

- [Example of a vue website using this library](https://custom-library-example-vue-project-z23hmxb1q60k5-z6xtek.needle.run/)