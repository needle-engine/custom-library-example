<script setup lang="ts">
import "my-needle-library";
import { MyComponent } from "my-needle-library";

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
}
</style>