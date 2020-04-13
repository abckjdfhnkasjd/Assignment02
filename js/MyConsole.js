class MyConsole {
          constructor() {
            this.historyArray = [];
          }
    
          log(argument) {
              this.historyArray.push(argument);
              console.log(argument);
          }
    
           history(position) {
               if(position === undefined){
                   this.historyArray.forEach((history) => {
                       console.log(JSON.stringify(history));
                   });
               }else{
                   for(let i = 1; i<= position; ++i){
                         console.log(this.historyArray[i-1]);
                   }
               }
             
           }
        clearHistory(){
            this.historyArray = [];
            console.log(true);
        }
        }

    

myConsole = new MyConsole();
myConsole.log(123);
myConsole.log('asd');
myConsole.log({name: 'Ram'});
myConsole.history(1);
myConsole.history();
myConsole.clearHistory();
myConsole.history();
