/*Button text-Color Change Text Change*/
function textchange() {
    document.getElementById('btn').innerText = 'Submited';
    document.getElementById('btn').style.color = 'blue'
 }
//Function Element Example
//sum
function sum(a,b){
document.write(a+b);
document.write('<br>')
}
sum(250, 200);
sum(240, 200);
sum(230, 200);

document.write('<br>');
//minus
function substraction(a,b){
    document.write(a-b);
    document.write('<br>');
    }
    substraction(250, 200);
    substraction(240, 200);
    substraction(230, 200);

    document.write('<br>');
//multipication
function multiplication(a,b){
    document.write(a*b);
    document.write('<br>');
    }
   multiplication(25, 4);
   multiplication(20, 4);

   document.write('<br>');
   //devide
   function devide(a,b){
    document.write(a/b);
    document.write('<br>');
    }
   devide(60, 4);
   devide(20, 4);

   document.write('<br>')
   document.write('<br>')

   //Job Requirments(if,else if,else Element Example)
  document.write('<b>You Have Been Selected</b>') 
  document.write('<br>')

 var num = 75;
   if (num >=80 && num <=100){
    document.write ('Dear Candidate [First and Last Name], Congratulations on your offer from [Company Name]! We are delighted to offer you the position of [Job Title] with an anticipated start date of [start date]. As discussed [over the phone, during your interview, etc.], please find attached your detailed offer letter.')
} else if (num >=70 && num <80) {
    document.write ("For an Interview");
   } else if (num >=60 && num <70) {
    document.write ("For an Interview");
   }
   else if (num >=0 && num <60) {
    document.write ("Not Selected");
   }
   else {
    alert('Not Valid')
   }


 
   document.write('<br>')
   document.write('<br>')
   //Assignment Operator (+=,-=,/=,*=,%=,**=)
var num = 10;

document.write (num += 10);
document.write('<br>')
document.write (num -= 10);
document.write('<br>')
document.write (num *= 10)
document.write('<br>')
document.write (num /= 5)
document.write('<br>')
document.write (num **= 2)
document.write (num %= 2)


document.write('<br>')

var num = 149;
if (num % 2 ==0){
    document.write('Your number is Even')
}
else if (num % 2 ==1){
    document.write('Your number is Odd')
}