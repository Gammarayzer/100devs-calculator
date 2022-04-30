
//this is gold and saves the amount of inputs listeners I need :)
// so this grabs all the buttons at once so there is no need to do for each button. there is a value added to each html tag that it uses but extracting?? deconstructing the object that is created from the listener because guess what it creates an object for the whole action.
document.querySelector('.calculator-buttons').addEventListener('click', event => {
    // the event is passed through which is an object the the short code {target} which is a property in side of the newly created event object
    const {target} = event;
    //the target is now an object that has a value from html which this extracts turning into a value value. :)
    const {value} = target;
    //this cleans up if there is anything else floating around in the html that isn't a button.
    if (!target.matches('button')) {
        return;
    } else {
        //this pushes that value to the console and then to the object we are working with called the calculator.
        console.log(value)
        calculator.keyInput(value)
       }
})

 


 const calculator = {
    firstInput: "0",
    secondInput: "0",
    finalAnswer: "0",
    operatorUsed: false,
    whatOperator: "",

    keyInput(value) {

        if ((isNaN(value))) {
            console.log('this is not a number')
            this.useOperator(value)
        } else { 
            console.log('this is a number')
            this.useNumber(value)
        }
    },

    useOperator(value ) {
//still working on this
        switch (value) {
            case ".":
                if ((!this.operatorUsed) && (this.firstInput === "0")) {
                    
                    this.firstInput = '0' + value
                    this.firstInput = this.isANumber(this.firstInput) 
                    this.displayText(this.firstInput)

                } else if (!this.operatorUsed) {
        
                    this.firstInput += value
                    this.firstInput = this.isANumber(this.firstInput) 
                    this.displayText(this.firstInput) 
                    
        
                } else if ((this.operatorUsed) && (this.secondInput === "0")) {

                    this.secondInput = '0' + value
                    this.secondInput = this.isANumber(this.secondInput) 
                    this.displayText(this.secondInput)
        
                } else if (this.operatorUsed) {

                    this.secondInput += value
                    this.secondInput = this.isANumber(this.secondInput) 
                    this.displayText(this.secondInput)
        
                } else {

                    this.displayText('I do not know what happened')

                };                
                break;
            case "+" : 
                
                this.operatorUsed = true
                this.whatOperator = value
                break;
            case "-" :
                this.operatorUsed = true
                this.whatOperator = value
                break;
            case "/" :
                this.operatorUsed = true
                this.whatOperator = value
                break;
            case "*" :
                this.operatorUsed = true
                this.whatOperator = value
                break;
            case "=" :
                this.calulateNumbers()
                    break;
            case "AC" :
                this.firstInput ="0";
                this.secondInput = "0";
                this.finalAnswer ="0";
                this.operatorUsed = false;
                this.whatOperator = "";
                this.displayText(this.firstInput);

                    break;
            case "BK" :
                if (!this.operatorUsed) {
                   this.firstInput = this.firstInput.slice(0,-1)
                   if (this.firstInput === "") {this.firstInput="0"}
                    this.displayText(this.firstInput)
                } else {
                    this.secondInput = this.secondInput.slice(0,-1)
                    if (this.secondInput === "") {this.secondInput="0"}
                    this.displayText(this.secondInput)
                    }
                    break;              
            default:
                break;
        }


    },

    isANumber(value){
        if (isNaN(value)) {
            console.log("NOT A NUMBER")
            let fixed = value.slice(0,-1)
            return fixed
        } else {
            return value
        }

        
    },

    useNumber(value) {
        if ((!this.operatorUsed) && (this.firstInput === "0")) {
            this.firstInput = value
            this.displayText(this.firstInput) 

        } else if (!this.operatorUsed) {

        this.firstInput += value 
        this.displayText(this.firstInput)
            

        } else if ((this.operatorUsed) && (this.secondInput === "0")) {
            this.secondInput = value
            this.displayText(this.secondInput) 

        } else if (this.operatorUsed) {
        this.secondInput += value
        this.displayText(this.secondInput)

        } else {
            this.displayText('I do not know what happened')
        }
    },

   

    calulateNumbers(value) {
        this.operatorUsed = false
        this.finalAnswer = eval(this.firstInput + this.whatOperator + this.secondInput)
        this.whatOperator = ''
        this.firstInput = this.finalAnswer
        this.secondInput = '0'
        this.displayText(this.finalAnswer)

    },

    displayText(text) {
        document.querySelector('.calculator-screen').value = text
        console.log(`first ${this.firstInput}`)
        console.log(`second ${this.secondInput}`)
        console.log(`final ${this.finalAnswer}`)
        console.log(`operator ${this.operatorUsed}  ${this.whatOperator}`)
    }







   
}
       
  