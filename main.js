import './style.css'
import lista from './dolgozok.json';

const ferfiDolgozo=lista
.filter(szemely=> szemely.nem == "férfi");

const NoiDolgozo=lista
.filter(szemely => szemely.nem =="nő");

const MagasFizetesu=lista
.filter(szemely=> szemely.fizetes>150000);

const NagyVezetek=lista
.filter(szemely=>szemely.nev.includes("Nagy"));

const Kiskorulista=[]


const Kiskoru=lista
.filter(szemely=> szemely.kor <18)
.map(szemely=> {const obj ={neve: szemely.nev,Fizatese: szemely.fizetes}
  return obj}
);



console.log(`${ferfiDolgozo.length} Férfi dolgozó van`);
console.log(`${NoiDolgozo.length} Női dolgozó van`);
console.log(MagasFizetesu);
console.log(NagyVezetek);
console.log(Kiskoru);