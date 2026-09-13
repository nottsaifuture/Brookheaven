import * as THREE from 'three';
function texture(kind){
 const canvas=document.createElement('canvas');canvas.width=canvas.height=512;const c=canvas.getContext('2d');
 let seed=42;const rnd=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 if(kind==='brick'){c.fillStyle='#a79b8e';c.fillRect(0,0,512,512);for(let row=0;row<16;row++)for(let col=-1;col<5;col++){const v=Math.floor(rnd()*28);c.fillStyle=`rgb(${119+v},${64+v/2},${47+v/2})`;c.fillRect(col*128+(row%2)*64+2,row*32+2,124,28);}}
 if(kind==='roof'){c.fillStyle='#a75f47';c.fillRect(0,0,512,512);for(let y=0;y<512;y+=32){c.fillStyle='#794534';c.fillRect(0,y,512,3);for(let x=0;x<512;x+=64){c.fillStyle='#ba8165';c.fillRect(x+(y%64?32:0),y+3,2,27);}}}
 if(kind==='wood'){c.fillStyle='#bb9368';c.fillRect(0,0,512,512);for(let i=0;i<400;i++){c.strokeStyle=`rgba(79,44,18,${rnd()*.13})`;c.beginPath();const x=rnd()*512;c.moveTo(x,0);c.bezierCurveTo(x+8,170,x-8,340,x,512);c.stroke();}c.fillStyle='#8d7559';for(let x=0;x<512;x+=128)c.fillRect(x,0,2,512);}
 if(kind==='carpet'||kind==='grass'){c.fillStyle=kind==='grass'?'#6b8056':'#b8afa3';c.fillRect(0,0,512,512);for(let i=0;i<20000;i++){c.fillStyle=`rgba(${rnd()>.5?'255,255,255':'0,0,0'},.08)`;c.fillRect(rnd()*512,rnd()*512,2,2);}}
 if(kind==='tile'){c.fillStyle='#c8c5bf';c.fillRect(0,0,512,512);c.strokeStyle='#e7e3db';c.lineWidth=3;for(let n=0;n<=512;n+=128){c.beginPath();c.moveTo(n,0);c.lineTo(n,512);c.moveTo(0,n);c.lineTo(512,n);c.stroke();}}
 const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.anisotropy=4;t.userData.kind=kind;return t;
}
export function createMaterials(){
 const mat=(color,roughness=.7,extra={})=>new THREE.MeshStandardMaterial({color,roughness,...extra});
 return {stone:mat('#c7b89b',.75),asphalt:mat('#444848',.98),bark:mat('#665545'),brick:mat('#ffffff',.92,{map:texture('brick')}),roof:mat('#ffffff',.85,{map:texture('roof'),side:THREE.DoubleSide}),wood:mat('#ffffff',.65,{map:texture('wood')}),carpet:mat('#ffffff',1,{map:texture('carpet')}),grass:mat('#ffffff',1,{map:texture('grass')}),tile:mat('#ffffff',.6,{map:texture('tile')}),wall:mat('#eeeae2'),white:mat('#faf9f5',.45),frame:mat('#303e46',.48),door:mat('#e5e0d7',.5),glass:new THREE.MeshPhysicalMaterial({color:'#b8d6db',roughness:.08,transparent:true,opacity:.24,metalness:.1,depthWrite:false,side:THREE.DoubleSide}),metal:mat('#bbc0c1',.24,{metalness:.8}),cabinet:mat('#71847d',.5),counter:mat('#e7e2d7',.36),sofa:mat('#c9bda7',1),accent:mat('#667b81',1),dark:mat('#192b30'),paving:mat('#b1aea5',.94),soil:mat('#6e5c46'),leaf:mat('#506840',1),light:mat('#fff1d5',.5,{emissive:'#ffe0a3',emissiveIntensity:.45})};
}
