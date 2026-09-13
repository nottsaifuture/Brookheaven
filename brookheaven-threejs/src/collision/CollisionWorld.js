import * as THREE from 'three';
import {STAIRS} from '../data/houseData.js';
export class CollisionWorld{
 constructor(house){this.house=house;this.furnitureVisible=true;this.refresh();}
 refresh(){this.house.root.updateMatrixWorld(true);this.static=this.house.staticMeshes.map(mesh=>({mesh,box:new THREE.Box3().setFromObject(mesh)}));this.furniture=this.house.furnitureMeshes.map(mesh=>({mesh,box:new THREE.Box3().setFromObject(mesh)}));}
 get solids(){return this.furnitureVisible?[...this.static,...this.furniture]:this.static;}
 overlapsXZ(p,r,b){const x=THREE.MathUtils.clamp(p.x,b.min.x,b.max.x),z=THREE.MathUtils.clamp(p.z,b.min.z,b.max.z);return (p.x-x)**2+(p.z-z)**2<r*r-1e-8;}
 rampHeight(p,maxY,minY){let top=-Infinity,nearest=Infinity;for(const s of STAIRS){const dx=s.b[0]-s.a[0],dz=s.b[1]-s.a[1],l2=dx*dx+dz*dz,t=((p.x-s.a[0])*dx+(p.z-s.a[1])*dz)/l2,side=Math.abs((p.x-s.a[0])*dz-(p.z-s.a[1])*dx)/Math.sqrt(l2);if(t>=-.12&&t<=1.12&&side<s.width/2-.07){const y=s.y0+THREE.MathUtils.clamp(t,0,1)*(s.y1-s.y0);const distance=side+Math.max(0,-t,t-1)*Math.sqrt(l2);if(y<=maxY&&y>=minY&&distance<nearest){top=y;nearest=distance;}}}
 if(p.x>=7.97&&p.x<=9.09&&p.z>=11.92&&p.z<=13.04&&1.05<=maxY&&1.05>=minY)top=Math.max(top,1.05);return top;}
 support(p,r,maxY,minY){let top=this.rampHeight(p,maxY,minY);for(const {box:b}of this.solids)if(b.max.y<=maxY+.001&&b.max.y>=minY&&this.overlapsXZ(p,r,b))top=Math.max(top,b.max.y);return top;}
 clear(p,r=.28,h=1.7){return !this.solids.some(({box:b})=>b.max.y>p.y+.04&&b.min.y<p.y+h-.01&&this.overlapsXZ(p,r,b));}
 push(p,r,b){const x=THREE.MathUtils.clamp(p.x,b.min.x,b.max.x),z=THREE.MathUtils.clamp(p.z,b.min.z,b.max.z);let dx=p.x-x,dz=p.z-z,l=Math.hypot(dx,dz);if(l>=r)return;if(l>.00001){p.x+=dx/l*(r-l+.00001);p.z+=dz/l*(r-l+.00001);}else{const ds=[[b.min.x-r-p.x,0],[b.max.x+r-p.x,0],[0,b.min.z-r-p.z],[0,b.max.z+r-p.z]];ds.sort((a,b)=>Math.hypot(...a)-Math.hypot(...b));p.x+=ds[0][0];p.z+=ds[0][1];}}
 move(player,delta,dt){const p=player.position,r=player.radius,h=player.height,solids=this.solids,n=Math.max(1,Math.ceil(Math.hypot(delta.x,delta.z)/.025));for(let i=0;i<n;i++){const q=p.clone();q.x+=delta.x/n;q.z+=delta.z/n;const support=this.support(q,r,p.y+.24,p.y-.26);if(Number.isFinite(support))q.y=support;else if(p.y>.1)continue;
 // Enforce useful headroom below the attic side slopes.
 if(q.y>6.1&&q.z>5.94&&q.z<12.27&&(q.x<2.3||q.x>12.4))continue;
 for(let k=0;k<2;k++)for(const {box:b}of solids)if(b.max.y>q.y+.045&&b.min.y<q.y+h-.01)this.push(q,r,b);
 for(const d of this.house.doors){d.leaf.updateWorldMatrix(true,false);const inverse=d.leaf.matrixWorld.clone().invert(),local=q.clone().applyMatrix4(inverse);if(local.y<2.06&&local.y+h>0){this.push(local,r,d.localBox);const world=local.applyMatrix4(d.leaf.matrixWorld);q.x=world.x;q.z=world.z;}}
 const after=this.support(q,r,q.y+.06,q.y-.26);if(!Number.isFinite(after)&&p.y>.1)continue;if(Number.isFinite(after))q.y=after;p.copy(q);}
 p.x=THREE.MathUtils.clamp(p.x,-16,22);p.z=THREE.MathUtils.clamp(p.z,-13,47);player.grounded=true;}
}
