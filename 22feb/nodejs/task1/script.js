const { error } = require('console');
const fs=require('fs/promises');
const file=__dirname+'/output.json';
const file1=__dirname+'/data.json';
const file2=__dirname+'/data1.json';
 
async function merge(file2,file1){
 let data=await fs.readFile(file2,'utf-8');
 let data1=await fs.readFile(file1,'utf-8');
  data=JSON.parse(data);
  data1=JSON.parse(data1);
let mdata=[...data,...data1];
mdata.sort((a,b)=>a-b)
await fs.writeFile(file,JSON.stringify(mdata));
}

merge(file2,file1).then(()=>{
    console.log('done');
}).catch(error=>{
    console.log(error);
})