import * as THREE from 'three';
const cube=new THREE.BoxGeometry(1,1,1);
const geometries=new Map();
function geometry(w,h,d,material){
 if(!material.map)return cube;
 const key=[w,h,d,material.uuid].join(':');if(geometries.has(key))return geometries.get(key);
 const g=cube.clone(),pos=g.attributes.position,uv=g.attributes.uv;
 const brick=material.map.userData.kind==='brick',sx=brick?.92:2,sy=brick?1.024:2;
 for(let i=0;i<pos.count;i++){const face=Math.floor(i/4);let u,v;if(face<2){u=pos.getZ(i)*d;v=pos.getY(i)*h;}else if(face<4){u=pos.getX(i)*w;v=pos.getZ(i)*d;}else{u=pos.getX(i)*w;v=pos.getY(i)*h;}uv.setXY(i,u/sx,v/sy);}
 geometries.set(key,g);return g;
}
export function box(parent,name,x,y,z,w,h,d,material,colliders=null){
 const m=new THREE.Mesh(geometry(w,h,d,material),material);m.name=name;m.position.set(x,y,z);m.scale.set(w,h,d);m.castShadow=h>.15;m.receiveShadow=true;parent.add(m);if(colliders)colliders.push(m);return m;
}
export function cylinder(parent,x,y,z,r,h,material){const m=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,12),material);m.position.set(x,y,z);m.castShadow=true;parent.add(m);return m;}
export function group(parent,name){const g=new THREE.Group();g.name=name;parent.add(g);return g;}
export function wallSegment(parent,x,z,length,height,thickness,angle,material,bottom=0,colliders){const mesh=box(parent,'Wall',x,bottom+height/2,z,length,height,thickness,material,colliders);mesh.rotation.y=-angle;return mesh;}
