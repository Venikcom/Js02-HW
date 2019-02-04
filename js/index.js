//Цикл 
const num = parseInt(prompt('Enter Fibinachi number'));

const result = fibLop(num);
alert(result);

function fibLop(num){
    let first = 0;
    let second = 1;

      for( let i = 0; i < num; i++){
          let next = first;
          first = second;
          second = next + second;
        }
      return first;
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