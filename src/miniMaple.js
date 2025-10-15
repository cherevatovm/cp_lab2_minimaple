class MiniMaple {
    calculateDerivative(expression, variable) {
        const normExpr = expression.replace(/\s+/g, '');
        const terms = this.parseTerms(normExpr);
        const derivTerms = terms.map(term => {
            const derivative = this.differentiateTerm(term.expression, variable);
            return {
                sign: term.sign,
                expression: derivative
            };
        }).filter(term => term.expression !== '');
        
        return this.formatResult(derivTerms);
    }

    parseTerms(expression) {
        if (!expression) return [];
        
        const terms = [];
        let currentTerm = '';
        let sign = '+';
        
        for (let i = 0; i < expression.length; i++) {
            const char = expression[i];
            
            if ((char === '+' || char === '-') && currentTerm !== '') {
                terms.push({ sign, expression: currentTerm });
                currentTerm = '';
                sign = char;
            } else if (i === 0 && (char === '+' || char === '-')) {
                sign = char;
            } else {
                currentTerm += char;
            }
        }
        
        if (currentTerm) {
            terms.push({ sign, expression: currentTerm });
        }
        
        return terms;
    }

    differentiateTerm(term, variable) {
        if (!term.includes(variable)) {
            return '';
        }

        const parts = term.split(variable);
        const [coefficientPart, powerPart] = [
            parts[0] || '',
            parts.slice(1).join(variable)
        ];
        const coefficient = this.parseCoefficient(coefficientPart);
        const power = this.parsePower(powerPart);

        return this.calculateDerivativeTerm(coefficient, power, variable);
    }

    parseCoefficient(coefficientStr) {
        if (!coefficientStr) return 1;
        if (coefficientStr === '-') return -1;
        if (coefficientStr === '+') return 1;
        
        const coefficient = parseFloat(coefficientStr.replace('*', ''));
        return isNaN(coefficient) ? 1 : coefficient;
    }

    parsePower(powerStr) {
        if (!powerStr) return 1;
        if (!powerStr.startsWith('^')) return 1;
        
        const power = parseFloat(powerStr.substring(1));
        return isNaN(power) ? 1 : power;
    }

    calculateDerivativeTerm(coefficient, power, variable) {
        const newCoefficient = coefficient * power;
        const newPower = power - 1;

        if (newCoefficient === 0) return '';

        if (newPower === 0) {
            return newCoefficient.toString();
        }

        let term = '';     
        // Коэффициент
        if (newCoefficient !== 1 && newCoefficient !== -1) {
            term += newCoefficient;
        } else if (newCoefficient === -1) {
            term += '-';
        }
        // Переменная
        if (newPower > 0) {
            term += (term && term !== '-' ? '*' : '') + variable;
        }
        // Степень
        if (newPower > 1) {
            term += `^${newPower}`;
        }
        
        return term;
    }

    formatResult(terms) {
        if (terms.length === 0) return '0';
        let result = ''; 
        terms.forEach((term, index) => {
            if (index === 0 && term.sign === '+') {
                result += term.expression;
            } else {
                result += `${term.sign}${term.expression}`;
            }
        });
        return result.trim() || '0';
    }
}

export { MiniMaple };