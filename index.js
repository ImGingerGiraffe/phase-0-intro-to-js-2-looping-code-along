const thankYouCards=[];
    function writeCards(names, event) {
        for (let cards = 0; cards < names.length; cards++) {
           thankYouCards.push(`Thank you, ${names[cards]}, for the wonderful ${event} gift!`)
        }
        return thankYouCards
    }

    function countDown(integer) {
        while (integer > -1) {
            console.log(integer--)
        }
    }
