import * as THREE from 'three';
import {box,group} from './Geometry.js';
export class Door {
 constructor(parent,opening,start,angle,materials){
 this.id=opening.id;this.open=false;this.angle=0;this.target=0;this.swing=opening.swing;this.width=opening.width;this.pivot=group(parent,`DoorPivot_${this.id}`);this.pivot.position.set(start.x,0,start.z);this.pivot.rotation.y=-angle;this.base=-angle;
 this.leaf=group(this.pivot,'Leaf');this.mesh=box(this.leaf,'Door',this.width/2,1.03,0,this.width-.035,2.06,.045,this.id==='front'?materials.frame:materials.door);this.mesh.userData.door=this;
 if(this.id.startsWith('garden')){this.mesh.material=materials.glass;for(const x of [.035,this.width-.035])box(this.leaf,'Door stile',x,1.03,0,.065,2.06,.07,materials.frame).userData.door=this;for(const y of [.045,2.02])box(this.leaf,'Door rail',this.width/2,y,0,this.width,.08,.07,materials.frame).userData.door=this;}
 for(const side of [-1,1]){box(this.leaf,'Handle',this.width-.13,1.02,side*.055,.13,.025,.035,materials.metal);for(const y of (this.id.startsWith('garden')?[]:[.53,1.5]))box(this.leaf,'Door panel',this.width/2,y,side*.025,this.width-.17,.69,.012,this.id==='front'?materials.dark:materials.white);}
 this.localBox=new THREE.Box3(new THREE.Vector3(.015,0,-.03),new THREE.Vector3(this.width-.02,2.06,.03));
 }
 toggle(){this.open=!this.open;this.target=this.open?this.swing*Math.PI*.49:0;}
 update(dt){const step=Math.PI*.49*dt/.55;this.angle+=THREE.MathUtils.clamp(this.target-this.angle,-step,step);this.leaf.rotation.y=this.angle;}
}
