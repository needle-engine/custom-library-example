
// 1) Uncomment the code below to get started with your own script!
// 2) You can then return to your editor and add the 'MyComponent' component to any object in your scene.
// 3) Click Export or Play and see the effect in the browser. You've successfully added your first Needle Engine component to your 3D scene
// 4) Continue learning on https://docs.needle.tools/scripting


import { Behaviour, serializable } from "@needle-tools/engine";
import { Mesh, Object3D } from "three";

export class MyComponent extends Behaviour {

    /** 
     * A static list of all active instances of MyComponent in the scene. This can be used to access or modify all instances at once.
     */
    static instances: MyComponent[] = [];

    @serializable()
    rotationSpeed: number = 1;

    @serializable(Object3D)
    otherObject: Object3D | null = null;

    start() {
        console.log("Hello Needle - this component is on the " + this.gameObject.name + " object");
    }
    onEnable(): void {
        MyComponent.instances.push(this);
    }
    onDisable(): void {
        const index = MyComponent.instances.indexOf(this);
        if (index !== -1) MyComponent.instances.splice(index, 1);
    }

    update(): void {
        // Gizmos.DrawWireSphere(this.gameObject.worldPosition, 1, 0xddff33);
        if (this.otherObject) this.otherObject.rotateY(this.context.time.deltaTime * this.rotationSpeed);
        else this.gameObject.rotateY(this.context.time.deltaTime * this.rotationSpeed);
    }

    onPointerClick() {
        this.changeColor();
    }

    changeColor() {
        this.gameObject.traverseVisible(o => {
            if (o instanceof Mesh) {
                const material = (o as any).material;
                if (material) material.color.setHex(Math.random() * 0xffffff);
            }
        })
    }

}