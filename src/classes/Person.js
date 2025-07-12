export class Person {

    // THE CONSTRUCTOR INITIALIZES THE NAME AND AGE PROPERTIES
    constructor(name = "", age = 0) {
        this.name = name;
        this.age = age;
    }

    // VALIDATES THE NAME STRUCTURE, VOWELS AND REPEATED LETTERS
    validateName(name) {
        const nameFormatted = name.trim().toLowerCase()

        // SETS THE RULES FOR THE VALIDATION OF THE NAME STRUCTURE
        const validStructure = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+([ '-_][A-Za-zÁÉÍÓÚáéíóúÑñÜü]+)*$/; 
        const isValidStructure = validStructure.test(nameFormatted) && nameFormatted.length > 2

        // SETS THE RULES FOR THE VALIDATION OF VOWELS
        const vocals = /[aeiouáéíóúü]/ig;

        // RETURNS TRUE IF THERE IS AT LEAST 1 VOCAL IN THE NAME OR FALSE IN THE OTHER HAND
        const isValidVocals = (nameFormatted.match(vocals)?.length ?? 0) >= 1

        // SETS THE RULES FOR REPEATED LETTERS (3 CONSECUTIVE TIMES OR MORE)
        const repetition = /(.)\1{2,}/;
        const isValidRepetition = repetition.test(nameFormatted)
        

        return isValidStructure && isValidVocals && !isValidRepetition
    }

    // VALIDATES THE AGE, IF IT IS A NUMBER, BETWEEN 0 AND 120, AND IF IT IS MINOR OR ADULT
    validateAge(ageInput) {
        const age = Number(ageInput)

        if (isNaN(age)) {
            alert(`Hi ${this.name}, only numbers are accepted "${ageInput}". Please enter a valid age`);
            console.error(`Hi ${this.name}, this is an invalid entry "${ageInput}". Please enter a valid age`);
            return false

        } else if ((age < 0) || (age > 120)) {
            alert(age < 0 ? `Hi ${this.name}, the age ${age} is not valid, please enter a positive age` : `Hi ${this.name}, the age ${age} is not valid, please enter a valid age`)

            console.error(age < 0 ? `Hi ${this.name}, the age ${age} is not valid, please enter a positive age` : `Hi ${this.name}, the age ${age} is not valid, please enter a valid age`)

            return false
        } else if (age < 18) {
            alert(`Hi ${this.name} you are minor! Keep learning everyday!`)
            return true
        } else if (age >= 18) {
            alert(`Hi ${this.name} you are an adult! Remember to explore new opportunities!`)
            return true
        }
    }

    // ASKS FOR THE NAME AND AGE, VALIDATES THEM AND RETURNS THE VALUES
    askInfo() {
        this.name = prompt('What is your name?')

        // IF THE VALIDATION RETURNS FALSE, WE ASK AGAIN FOR THE NAME
        while (!this.validateName(this.name)) {
            alert(`The name ${this.name} is not valid, try again`)
            this.name = prompt('What is your name?')
        }

        // IF THE VALIDATION RETURNS FALSE, WE ASK AGAIN FOR THE AGE
        do {
            this.age = prompt('How old are you?')
        } while (!this.validateAge(this.age.trim()))
    }
}