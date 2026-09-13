// Metres. Rear-left ground-floor masonry corner is (0,0); +Z faces the driveway.
// Pixel calibration uses published dimensions, with shared façade alignment between storeys.
export const HOUSE={width:13.75,depth:14.23,floorHeight:3.15,levels:[0,3.15,6.30],slab:.24,wallHeight:2.91,exteriorWallThickness:.32,internalWallThickness:.14};
export const FLOOR_NAMES=['Ground floor','First floor','Second floor'];
export const REFERENCES=[
 {file:'Ground Floor.png',pixels:[1058,919],origin:[454,26],scale:32.5,offset:[0,0],calibration:'Living room: 4.56 × 5.14 m; approximately 32.5 px/m'},
 {file:'First Floor.png',pixels:[1218,860],origin:[95,43],scale:63.3,offset:[0,3.4],calibration:'Principal bedroom: 4.56 × 5.06 m; approximately 63.3 px/m'},
 {file:'Second Floor.png',pixels:[986,832],origin:[342,85],scale:57,offset:[1.69,3.4],calibration:'Left roof bedroom: 4.16 × 10.89 m; approximately 57 px/m'}
];
const r=(id,name,floor,x,z,w,d,dimensions,type='room')=>({id,name,floor,x,z,w,d,dimensions,type});
export const ROOMS=[
 r('hall','Entrance hall',0,5.45,9.04,3.66,5.19,'3.66 × 5.24 m','hall'),
 r('sitting','Sitting room',0,0,10.72,5.32,2.60,'5.32 × 3.59 m','living'),
 r('living','Living room',0,9.18,9.04,4.56,4.28,'4.56 × 5.14 m','living'),
 r('kitchen','Kitchen',0,2.65,3.59,4.36,5.38,'4.36 × 5.38 m','kitchen'),
 r('family','Family room',0,7.08,3.59,6.49,5.37,'6.49 × 5.37 m','living'),
 r('dining','Dining area',0,2.65,0,7.78,3.59,'7.78 × 3.59 m','dining'),
 r('pantry','Pantry',0,0,0,2.57,3.50,'2.57 × 3.50 m','pantry'),
 r('staff','Staff kitchen',0,0,3.60,2.57,2.72,'2.57 × 2.72 m','kitchen'),
 r('boot','Boot room',0,0,6.43,2.57,2.55,'2.57 × 2.55 m','boot'),
 r('office','Office',0,10.47,0,3.28,3.49,'3.28 × 3.49 m','office'),
 r('service','Shower room',0,1.37,9.04,2.30,1.57,'Inferred from plan','bath'),
 r('wc','Cloakroom',0,3.75,9.04,1.62,1.57,'Inferred from plan','wc'),
 r('bed2','Bedroom two',1,0,9.02,5.42,4.3,'5.42 × 5.21 m','bed'),
 r('bed3','Bedroom three',1,0,3.4,7.21,3.96,'7.21 × 3.96 m','bed'),
 r('bath2','Bedroom two bathroom',1,0,7.45,4.8,1.5,'Inferred from plan','bath'),
 r('bath3','Bedroom three bathroom',1,7.27,3.4,1.85,2.46,'Inferred from plan','bath'),
 r('landing','First-floor landing',1,5.45,7.42,3.66,4.47,'4.25 × 4.47 m','landing'),
 r('principal','Principal bedroom',1,9.18,9.14,4.56,4.18,'4.56 × 5.06 m','bed'),
 r('dressing','Dressing room',1,10.34,6.66,3.41,2.46,'3.41 × 2.46 m','dressing'),
 r('ensuite','Principal ensuite',1,9.18,3.4,4.56,3.16,'Inferred from plan','ensuite'),
 r('bed4','Bedroom four',2,1.69,3.4,4.16,10.89,'4.16 × 10.89 m','bed'),
 r('bed5','Bedroom five',2,9.12,3.4,3.85,10.88,'3.85 × 10.88 m','bed'),
 r('landing2','Second-floor landing',2,5.85,6.1,3.27,3.24,'3.27 × 3.24 m','landing'),
 r('bath5','Second-floor bathroom',2,5.85,9.43,2.46,2.04,'Inferred from plan','bath')
];
export const STARTS={front:[6.7,0,30],hall:[6.3,0,10],landing:[6.15,3.15,9.5]};
export const FRONT_POLYGON=[[0,0],[13.75,0],[13.75,13.32],[12.45,13.32],[12.45,14.23],[9.45,14.23],[9.45,13.32],[7.97,13.32],[7.97,14.23],[5.45,14.23],[5.45,13.32],[4.23,13.32],[4.23,14.23],[.95,14.23],[.95,13.32],[0,13.32]];
export const FIRST_POLYGON=FRONT_POLYGON.map(([x,z])=>[x,z===0?3.4:z]);
export const SECOND_POLYGONS=[[[1.69,5.94],[3.18,5.94],[3.18,3.4],[5.3,3.4],[5.3,5.94],[9.12,5.94],[9.12,3.4],[10.91,3.4],[10.91,5.94],[12.97,5.94],[12.97,12.27],[10.91,12.27],[10.91,14.28],[9.12,14.28],[9.12,12.27],[5.3,12.27],[5.3,14.29],[3.18,14.29],[3.18,12.27],[1.69,12.27]]];
// A single source for holes in slabs, finishes and ceilings.
export const HOLES=[[],[[5.45,11.96,9.12,14.3],[7.94,8.62,9.12,12.0]],[[6.45,5.94,9.12,7.91]]];
export const STAIRS=[
 {id:'lower-a',floor:0,a:[6.02,12.48],b:[8.50,12.48],width:1.12,y0:0,y1:1.05,n:6},
 {id:'lower-b',floor:0,a:[8.53,11.92],b:[8.53,8.62],width:1.12,y0:1.05,y1:3.15,n:12},
 {id:'upper-a',floor:1,a:[8.56,7.92],b:[8.56,6.48],width:1.10,y0:3.15,y1:4.20,n:6},
 {id:'upper-b',floor:1,a:[8.56,6.48],b:[7.00,6.48],width:1.10,y0:4.20,y1:5.25,n:6},
 {id:'upper-c',floor:1,a:[7.00,6.48],b:[7.00,7.92],width:1.10,y0:5.25,y1:6.30,n:6}
];
// Opening positions are measured along each wall, in metres. D=hinged door, O=open passage.
export const D=(at,width=1,id='door',swing=1)=>({at,width,type:'d',id,swing});
export const O=(at,width)=>({at,width,type:'o'});
export const W=(at,width=1.8,sill=.70,height=1.70)=>({at,width,type:'w',sill,height});
const wall=(a,b,openings=[],side=null)=>({a,b,openings,side});
export const WALLS=[
 [wall([0,0],[13.75,0],[D(.7,1,'pantry-out'),D(4.35,1.6,'garden-left'),D(7.55,1.6,'garden-right'),D(11.9,1,'office-out')],'rear'),
 wall([0,0],[0,13.32],[W(6.8,1),D(9.5,1,'patio'),W(11.3,1.25)],'left'),wall([13.75,0],[13.75,13.32],[W(4.0,1),W(6.95,1),W(9.7,1.8)],'right'),
 wall([0,13.32],[.95,13.32],[],'front'),wall([.95,13.32],[.95,14.23],[],'left'),wall([.95,14.23],[4.23,14.23],[W(.35,2.58)],'front'),wall([4.23,13.32],[4.23,14.23],[],'right'),wall([4.23,13.32],[5.45,13.32],[],'front'),wall([5.45,13.32],[5.45,14.23],[],'left'),wall([5.45,14.23],[7.97,14.23],[D(.55,1.35,'front')],'front'),wall([7.97,13.32],[7.97,14.23],[],'right'),wall([7.97,13.32],[9.45,13.32],[],'front'),wall([9.45,13.32],[9.45,14.23],[],'left'),wall([9.45,14.23],[12.45,14.23],[W(.25,2.5)],'front'),wall([12.45,13.32],[12.45,14.23],[],'right'),wall([12.45,13.32],[13.75,13.32],[],'front'),
 wall([2.65,0],[2.65,9.04],[O(3.48,.95),D(7.5,1,'boot')]),wall([0,3.59],[2.65,3.59],[D(.8,1,'pantry')]),wall([0,6.36],[2.65,6.36],[]),wall([0,9.04],[13.75,9.04],[O(.2,1),D(6.0,1.8,'kitchen'),{...O(7.94,1.2),full:true}]),wall([10.4,0],[10.4,3.59],[]),wall([10.4,3.59],[13.75,3.59],[D(1.1,1,'office')]),
 wall([1.3,9.04],[1.3,10.7],[]),wall([1.3,10.7],[5.45,10.7],[D(.2,.85,'service'),D(2.5,.85,'wc')]),wall([3.7,9.04],[3.7,10.7],[]),wall([5.45,9.04],[5.45,13.32],[D(3.0,1,'sitting',-1)]),wall([9.12,9.04],[9.12,13.32],[D(3.05,1,'living')])],
 [],[]
];
WALLS[1]=WALLS[0].filter(w=>w.side&&w.side!=='rear'&&w.a[0]!==w.b[0]).map(w=>({...w,openings:w.openings.map(o=>W(o.at,o.width,.72,1.65))}));
WALLS[1].push(wall([0,3.4],[13.75,3.4],[W(.65,1.8),W(4.9,1.8),W(7.5,1.5),W(11.1,1.7)],'rear'),wall([0,3.4],[0,13.32],[W(1.2,1.8),W(6.2,1.5)],'left'),wall([13.75,3.4],[13.75,13.32],[W(3.65,1.1),W(6.3,1.8)],'right'));
for(const w of WALLS[0].filter(w=>w.side&&w.a[0]===w.b[0]&&w.a[1]>=13.32))WALLS[1].push({...w,openings:[]});
WALLS[1].push(wall([0,7.42],[6.45,7.42],[D(5.25,1,'bed3')]),wall([0,9.02],[5.45,9.02],[D(3.12,.9,'bath2')]),wall([4.88,7.42],[4.88,9.02],[]),wall([5.45,9.02],[5.45,13.32],[D(1.8,1,'bed2',-1)]),wall([9.12,9.14],[13.75,9.14],[D(.10,1,'principal',-1)]),wall([9.12,7.92],[9.12,13.32],[O(0,1.2)]),wall([10.27,6.66],[10.27,9.14],[D(.80,1,'dressing')]),wall([9.12,6.66],[13.75,6.66],[D(2.58,1,'ensuite')]),wall([9.12,3.4],[9.12,6.66],[]),wall([7.21,3.4],[7.21,5.94],[D(1.25,.95,'bath3')]),wall([7.21,5.94],[9.12,5.94],[]),wall([6.45,5.94],[7.21,5.94],[]),wall([6.45,5.94],[6.45,7.42],[]),wall([9.12,6.66],[9.12,7.92],[]));
WALLS[2]=SECOND_POLYGONS[0].map((a,i,ps)=>{const b=ps[(i+1)%ps.length],front=a[1]===b[1]&&(a[1]>14||a[1]<3.5);return wall(a,b,front?[W(.14,Math.abs(b[0]-a[0])-.28,.25,1.65)]:[],a[0]===b[0]?(a[0]<7?'left':'right'):(a[1]<8?'rear':'front'));});
// Reverse-directed façade segments require positive local opening positions; builder supports them.
WALLS[2].push(wall([5.85,5.94],[5.85,12.27],[D(2.1,1,'bed4',-1)]),wall([9.12,5.94],[9.12,12.27],[D(2.15,1,'bed5')]),wall([5.85,9.43],[9.12,9.43],[D(.6,.9,'bath5')]),wall([8.31,9.43],[8.31,11.47],[]),wall([5.85,11.47],[8.31,11.47],[]));
export function insidePolygon(x,z,poly){let inside=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a[1]>z)!==(b[1]>z)&&x<(b[0]-a[0])*(z-a[1])/(b[1]-a[1])+a[0])inside=!inside;}return inside;}
