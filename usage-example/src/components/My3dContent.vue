<script setup lang="ts">
import "my-needle-library";
import { MyComponent, onStart } from "my-needle-library";

onStart((ctx) => {
    console.log("Hello from My3dContent.vue using my-needle-library!", ctx);
})

function changeColor() {
    // MyComponent.
    console.log("Change Color clicked", MyComponent.instances);
    MyComponent.instances.forEach(instance => {
        instance.changeColor();
    });
}

</script>


<template>
    <needle-engine src="/Cube.glb" contact-shadows="0.9" tonemapping="agx"
        background-image="https://cdn.needle.tools/static/hdris/ballroom_2k.pmrem.ktx2"
        environment-image="https://cdn.needle.tools/static/hdris/ballroom_2k.pmrem.ktx2">
    </needle-engine>

    <button @click="changeColor">
        Change Color
    </button>
</template>


<style scoped>
needle-engine {
    position: relative;
    min-width: 100px;
    max-width: 900px;
    height: 500px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 1rem rgba(0, 0, 0, .1);
}

button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;

    transition: all 0.3s ease;

    &:hover {
        background-color: #0056b3;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
    }

    &:active,
    &:focus {
        border: none;
        outline: 2px solid #4f91d8;
        outline-offset: 2px;
    }
}
</style>