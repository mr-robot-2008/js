const num = 484;
const isPerfectSquare = num => {
   let ind = 1;
   while(ind * ind <= num){
      if(ind * ind !== num){
         ind++;
         continue;
      };
      return true;
   };
   return false;
};
console.log(isPerfectSquare(num));
