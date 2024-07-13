const fs = require('fs/promises');
const path=require('path');
const { eventNames } = require('process');
const filePath=path.join(__dirname,'../data/db.json');
class Tasks
{
    static  getTodos(){
        return new Promise(async(resolve,reject)=>{
            try{
                const data=await fs.readFile(filePath);
                resolve(JSON.parse(data));
            }
            catch(err){
                resolve(err);
            }
        })
        
    }
    static  addTask(name){
      return new Promise(async (resolve, reject) => {
        try {
            // 1. Read the existing data : ["Cricket"]
            let data = await fs.readFile(filePath);
            let tasks = JSON.parse(data);
            // 2. add the task into the existing data: ["Cricket","Dance"]
            tasks.unshift(eventNames);
            // 3. Update the todos.json
            await fs.writeFile(filePath, JSON.stringify(tasks));
            resolve("Success adding task");
        } catch (err) {
            reject(err);
        }
    })
    } 
    static deleteTask(name) {
      return new Promise(async (resolve, reject) => {
          try {
              // 1. Read the existing data : ["Cricket"]
              let data = await fs.readFile(filePath);
              let tasks = JSON.parse(data);
              // 2. Delete the task from tasks array
              tasks = tasks.filter((t) => t !== name);
              // 3. Update the todos.json 
              await fs.writeFile(filePath, JSON.stringify(tasks));
              resolve("Success deleting task");
          } catch (err) {
              reject(err);
          }
      })
  }
    static  increaseTask(name){
        return new Promise(async(resolve,reject)=>
        {
          try{
            let data=await fs.readFile(filePath);
            let todos=JSON.parse(data);
            let index=todos.indexOf(name);
            if(index>0 && index<todos.length){
            let temp=todos[index];
            todos[index]=todos[index-1];
            todos[index-1]=temp;}
            await fs.writeFile(filePath,JSON.stringify(todos));
            resolve("success")
          }catch(err){
            reject(err);
          }
        })
    } 
    static  decreaseTask(name){
        return new Promise(async(resolve,reject)=>
        {
          try{
            let data=await fs.readFile(filePath);
            let todos=JSON.parse(data);
            let index=todos.indexOf(name);
            if(index>=0 && index<todos.length-1){
            let temp=todos[index];
            todos[index]=todos[index+1];
            todos[index+1]=temp;}
            await fs.writeFile(filePath,JSON.stringify(todos));
            resolve("success")
          }catch(err){
            reject(err);
          }
        })
    } 
    
}
module.exports=Tasks;