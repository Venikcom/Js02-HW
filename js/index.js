//Цикл 
const num = parseInt(prompt('Enter Fibinachi number'));

const result = fibLop(num);
alert(result);

function fibLop(num){
    let a = 0;
    let b = 1;

      for( let i = 0; i < num; i++){
          let next = a;
          a = b;
          b = next + b;
        }
      return a;
} 


//Рекурсія
const n = parseInt(prompt('Enter Fibinachi number'));

const res = fibRec(n);
alert(res);

function fibRec(n) {
    if (n == 1 || n == 2){
        return 1 
    }
    
    if (n == 0){
        return 0
    }
    
        return fibRec(n - 1) + fibRec(n - 2);
}