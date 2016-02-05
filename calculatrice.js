
function Calculatrice(chiffre) {

    if (chiffre !== undefined) {
        this.accumulateur = chiffre;
    } else {
        this.accumulateur = 0;
    }
    this.input = 0;

    this.additionner = function(chiffre) {
        this.accumulateur += this.input;

        return this;
    };

    this.soustraire = function(chiffre) {
        this.accumulateur -= chiffre;

        return this;
    };

    this.multiplier = function(chiffre) {
        this.accumulateur *= chiffre;

        return this;
    };

    this.diviser = function(chiffre) {
        this.accumulateur /= chiffre;

        return this;
    };

    this.sin = function() {
        this.accumulateur = Math.sin(accumulateur);

        return this;
    };

    this.cos = function() {
        this.accumulateur = Math.cos(accumulateur);

        return this;
    };

    this.tan = function() {
        this.accumulateur = Math.tan(accumulateur);

        return this;
    };

    this.factorielle = function() {
        for(i = this.accumulateur - 1; i > 1; i--) {
            this.accumulateur *= i;
        }

        return this;
    };

    this.memoire = function() {
        this.memoire = this.accumulateur;

        return this;
    };

    this.popMemoire = function() {
        this.accumulateur = this.memoire;

        return this;
    };

    this.numberKeypress = function(number) {
        if (this.input === 0) {
            this.input = number;
        } else {
            this.input = parseFloat(this.input.toString() + number.toString());
        }
    };
}
