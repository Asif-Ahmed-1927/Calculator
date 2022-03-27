var resultField= $("#result");

function insertNumber(number){
    var existNumbers=resultField.val();

    resultField.val(existNumbers+number)
};

function clearResult(){
    resultField.val('')
}

function calculate(){
    var result= eval(resultField.val())
    resultField.val(result)

}

function deleteNumber(){
    var numbers= resultField.val();
    if(numbers!=''){
        resultField.val(numbers.slice(0,-1));
    }

}