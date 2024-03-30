import React from 'react'
import './Footer.css'
const footer = () => {
  return (
    <footer>
      <div className="fbox">
        <a href="https://www.linkedin.com/in/allen-sarnoff-tsaravaly-5790a218a/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAhtJREFUWEftl8+LjVEYxz8fZSE7FGVh40c2SilN1Cxko4ZIqWErqYlZSMmPTFiSjdJs0ZSywUaSMYWahZIfhY0/QJRkofS4Z3pH1ztn5r13zJ17695n+Z7nnOfzfs/zPOcc6TCzw3joAVXtSFahiNgCnAQ2Ae+Aa+qHqsUWYnwGUERsBZ4Dy+oCfAX61I8LEXSuNXJAt4HDmUk31ePtAHoFJJXKNqH2twPoDjCYCTyqHmsH0DbgBbC0Lvj3IofeLzpQChgRCWq4qLK3RZW9aTVMWr+7GmNErAHW1XraN+Cz+qtK5VzZ7wbOZiaeUV8WW7oWSMlfttPqZESktnEB2Fjn8Bt4DFxXH80GlgM6AtzKTNirPiiA1td61aeMzx5gP3C0Qomr6qmcTzNAA+rDCqAnwK6qbSnGD6r3yr7NAO1T71cANcgy5Tapbv8foEa2bHr9dPalNpF+eCewZBbSlWry/WvNKNTIlqWFU7IPq18KNXfUmmpK4uUZqH51Yr5AjSj0A1it/qwPEhEjRdWVmQbVsVYC3VUPlaNGxAAwlX8lG1JvtBLoinouA9RXnI/lofPq5VYCjagXM0DpBvo6o9AM/2aSur7sN9SuKLnb4yU1deh/LCI2A7mbQg9oSqmeQnUJ08uh6cO1u6ssNbEDmSY2Nv2cjogVwImMz7Pa2+1ppg+tAoYy/uPq+JydOjNpUT9116tjPtJ2nEJ/AFlwPjRZvXVZAAAAAElFTkSuQmCC"/></a>
        <a href="mailto:sarnoffp19.aps1a@gmail.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAhpJREFUWEftlz2MDVEcxX8HhUhQCCqFRoGlUGg0thGVTWxoyFZkm00USIiIRkQoRKEQBaWNxEelYhsJxSZiP1qUPhIFCQlxvPsy8zI7Zt68mdyXLJlbvdyPd35z/v859z2xzIaWGQ8tUFVFWof+fYdsbwMmgQ3ALUmvqp6qzrrtLcABYCXwVNL77PklPWR7D/AMWJfZdBU4L+l3HeH8XtsrgCvA2czaF2BU0ut0Lg/0EthbIPwcOCrpUxMo2xuB+8D+gvMzknrzeaCfwKoS0Q/AYUkv6kDZ3gc8ADaXnPsuaU2ZQ64Q+wWck3R9ECjbp5MylT1k92sk9YzJO1QFlHI8AY5J+loEZnttUqKDg4DHAAo6b4FDkuayorZHgMfA1kFgYjmUav0ApiTdCRO2TwA3gdWDwsQGSnXvJR8m6oD0GjlCDzXRLT0Tq4eiQTUB+gyEpN7UkOJjclWE6+iv0QQovEmjwHRJ2vbjDCl/BJgBdkQDkrTLdsitM8DlPomeaobUvwBck2Tb8zGB5iWFfOmO5BJ+CISbu2i8A8YlzWbODA8ogVoP3AXGckSPgOOSvmXnh+pQTugkcCOZOyXpdpFlsYHeSNpd1rm2Q7Na0mKfPcMtWd3XP7ZDS5q6LkzSc/+HQwud8Nte4MAwHVqQtDPVzP9AG+8sXCoIsLkQjE1KVZFDoYwXOy9MyLTuaP+5VrncOtQ6VOVA1fof6kXqJeJpC0EAAAAASUVORK5CYII="/></a>
        <a href="tel:+261347707145"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABGNJREFUWEftl1nsXVMUxn+focZEaYoHQw1JEa0QQk3RlDRoE1NMCSVKDFUi8UKatCGEB0KJhqJqfhCaVMVckdJGIsb0hQczNVVjnpb9Nfuw3f8Z7v335f/Q/XTvOXut/Z1vrfWttcUIWxpheNgIqCsiw2YoIrYADgN2AXYGNgO+BD4FVkn6sevwuvcDA4qI04AZwBRgq4ZD/wSWAw8BiyVFv+D6BhQRhwC3Z1ZK/99lVn4FxgE79hz+FjBL0op+QPUFKCLOBB7MYbHfD4D7/UzSJ+VBEbEtcBQwDbgQ2BwwQ7Ml3dEFqhNQRMwC5mdHXwBzEhOLJP3V5TwidgXuAk7Me2+VdFWbXSugiJgKPAPr5eFl4FRJ33cB6WFsE8DMXJKfXynptiYfjYAiYi/gbWAb4AVgqqS/BwHTA2whcEEOn309P1CVRcQTwCkpDz4DJlTMRIQ/4nDg4978aQMbEc4ls3wE4NCPk/R7r00tQxFhfXk9b54uaal/Z+1xOfv9SkmTBmEsIsansL+bE32mpHv7BXR3rpDlkiZXRhFxKXBn4WSiJB/Q94oI29vPCklHdgKKiE1TAn6VKmuMDSW5StavpEVPAycUThZIqpK1L1ARcWwKW5U/oyX9UBoOCVnKnQkpd97JmxznjwpATwInFQ6WSpreF5L/PmoU4ErdGpgsySnw76oDVH2B5X9UKfsRcXVydHO2drIfJGnNIIAy067eicA5ktxeWgFZlR9N4VqTwrVTuTkidsgqvX1upLvXVUoXwIh4NUmJ8+daSTd0ATobeBhYJ2m7XucRYS2xpnjNlzS7C0CNj9cAV+gcSdd3AToeWJY3jZX0TY3DR4Cz8vMFKSeuKJmKiPPNsiQ33CErvXde7mahlHRfF6A9U2w/zJsmSVpZA8gi55biEcTrjRTCiyW9GRFmzK1hbWb6plJAI8Ksfwu4mq3Yz3UBcqKbFefLPElzG77SefQicGDxfhVwALBl8Wy1pP2q/xFxLvAAYJUe0zvINSn1ojyEfe2JsClxs3LfkoWuKZWWSaq6vbWsSuhayWgCdHTSiFfyCTMkLW5L3IjYF7gsN8+SHevZtCpkEXFc6oNViE6W9FSv37Zu70Z4jEfRsn10APNk4MHMAM3uQkm/2SYiLITONYevtm14XxsgGx8M3JhCds2gpV1TCI8BZwAW3ENdAHU+m0I2Oo2cnpX9foqkl4YLKI+0Hn+rljNEnVurLNN7eqL9ceAXwGXq/uPp0eFY7Y4v6eeO8PljLLLXparaI++dK2lem10TQ/ekm8TMPEi95yZYDPj2ty7Pygb9fo8o+o5mIOd5sCsO982jHF1qcTUB8k3CF8By+ebg2Wd/wHNytTzW+hZiITQTY3vsbHN5KoyqalujX9ft98lhsaEFcgngHLKerI0IM3BR1p7/Nd/ipD/yRdE9ccMuilkrXF3PNlVCzjN/jK85e+cyd8n7Kv25x19JPw2nEDrvZcNxuiE2GwF1sTfiGPoHFtaKNEvOnAIAAAAASUVORK5CYII="/></a>
        <a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAqJJREFUWEftlluIjVEUx39/txe5hBeFRm55Gwl5EEoKTbmmCU9MkVJqKDQj5JbLozyYPHiRh0kyXnkjSYmUREheCC+SwrKXvlMzZ77z7f1xjkadXafz1V5r7d9ea+21lhhiS0OMhyZQLCJND/1zD5nZLGAPsBiYCzwG7gE9kvz79zKzEcBsSU/7Qw4KmZlNAJZJ6o3dpnrfzA6Fsw4DI2vobgGeAMuB3UCbpGcxoL3AGWC9pBupUGa2FbiSKg+czODHSPpY0cvz0DVgE/ADWCvpZuwQM5sEPAfGx2Sz/dvApxDGqe4tSV+KgNwrbZnAT+A80C3pa63DzGwzcDURpiL23vNM0otYyA6GHDheZfwN4KG8LskhBywz8xB3lgByiBWSXlXr5IVsaUjqOzWMvwMu+6//zczsErC9BNA+SWfz5POAhgGeRxsiB7jL/ab+mwksKgHUIckvMWjlAa0E7gP+7P15NmKtkXQrFci9sw54HZ7xjEbQhFxslfQoFeg0sL9BIG7Wn/g4SV5WkkLWCjyEho0mvaGF1MzP3G5vZkdDYexqkJd2SOqpZbvm+GFmHYA/zbF1BPsMTOlfmaN1qCJgZquAUYBX4fY6QR0LhbW7yFaRh+YDD+oEUknmFkkf/gjIlczsArCrTlDtkqL9rnCENTPfP5f1sb/huigp6WJJM7WZLQB83pkHLClJ1udtSNK3FL1UoOHAzlCbjgATUwxnMh6ibZK+p+oUJbXPvNO8zIfXdgKYk2rU0y/T6ZLk38lrAJCZrc7axnSvF4B3/rLLe6An8N2yii6f1+3dEwfCML4xzNajSxj14d0nhFNF02XMXlHIvCj6+OFzzkKgBZicQfqk9xLwf+/afZLexg5L2U9K6hRD9ZJpAsU82fTQf+ehX3sdvCV/aQn+AAAAAElFTkSuQmCC"/></a>
      </div>
    </footer>
  )
}

export default footer