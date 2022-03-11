/****************************************
 * Checker functions
 ***************************************/
const Checker = {}

Checker.prenom = function (){
  const prenom = document.querySelector('#prenom');
      if (prenom.value.length >= 2) {
        return true;
      };
};
console.log('prenom');

Checker.lastname = function() {
  const lastname = document.querySelector('#lastname');
  if (lastname.value.length >= 2) {
    return  true;
  }
  return false;
};
