document.querySelector('.startBtn').addEventListener("click", function(){
    var str = document.querySelector('.input').value;
    var letters = [];
    letters = str.split("");
    var length = letters.length;
    var readyStr = '//'

    for(i = 0; i <= length; i++){

        switch(letters[i]){
            /* Aa */
            case 'a':
            case 'ą':
            case 'A':
            case 'Ą':
                readyStr = readyStr + '/.-'
            break;
            /* bB */
            case 'b':
            case 'B':
                readyStr = readyStr + '/-...'
            break;
            /* Cc */
            case 'c':
            case 'ć':
            case 'Ć':
            case 'C':
                readyStr = readyStr + '/-.-.'
            break;
            /* dD */
            case 'd':
            case 'D':
                readyStr = readyStr + '/-..'
            break;
            case 'e':
            case 'E':
            case 'ę':
            case 'Ę':
                readyStr = readyStr + '/.'
            break;
            case 'f':
            case 'F':
                readyStr = readyStr + '/..-.'
            break;
            case 'g':
            case 'G':
                readyStr = readyStr + '/--.'
            break;
            case 'H':
            case 'h':
                readyStr = readyStr + '/....'
            break;
            case 'i':
            case 'I':
                readyStr = readyStr + '/..'
            break;
            case 'J':
            case 'j':
                readyStr = readyStr + '/.---'
            break;
            case 'k':
            case 'K':
                readyStr = readyStr + '/-.-'
            break;
            case 'l':
            case 'L':
            case 'ł':
            case 'Ł':
                readyStr = readyStr + '/.-..'
            break;
            case 'm':
            case 'M':
                readyStr = readyStr + '/--'
            break;
            case 'n':
            case 'N':
            case 'ń':
            case 'Ń':
                readyStr = readyStr + '/-.'
            break;
            case 'o':
            case 'O':
            case 'ó':
            case 'Ó':
                readyStr = readyStr + '/---'
            break;
            case 'p':
            case 'P':
                readyStr = readyStr + '/.--.'
            break;
            case 'Q':
            case 'q':
                readyStr = readyStr + '/--.-'
            break;
            case 'R':
            case 'r':
                readyStr = readyStr + '/.-.'
            break;
            case 's':
            case 'S':
            case 'ś':
            case 'Ś':
                readyStr = readyStr + '/...'
            break;
            case 'T':
            case 't':
                readyStr = readyStr + '/-'
            break;
            case 'u':
            case 'U':
                readyStr = readyStr + '/..-'
            break;
            case 'v':
            case 'V':
                readyStr = readyStr + '/...-'
            break;
            case 'w':
            case 'W':
                readyStr = readyStr + '/.--'
            break;
            case 'x':
            case 'X':
                readyStr = readyStr + '/-..-'
            break;
            case 'z':
            case 'Z':
            case 'ż':
            case 'Ż':
            case 'ź':
            case 'Ź':
                readyStr = readyStr + '/--..'
            break;
            case 'y':
            case 'Y':
                readyStr = readyStr + '/-.--'
            break;
            case '':
                readyStr = readyStr + '/'
            break;

            case '1':
                readyStr = readyStr + '/.----'
            break;
            case '2':
                readyStr = readyStr + '/..---'
            break;
            case '3':
                readyStr = readyStr + '/...--'
            break;
            case '4':
                readyStr = readyStr + '/....-'
            break;
            case '5':
                readyStr = readyStr + '/.....'
            break;
            case '6':
                readyStr = readyStr + '/-....'
            break;
            case '7':
                readyStr = readyStr + '/--...'
            break;
            case '8':
                readyStr = readyStr + '/---..'
            break;
            case '9':
                readyStr = readyStr + '/----.'
            break;
            case '0':
                readyStr = readyStr + '/-----'
            break;
        }

    }
    var textDiv = document.querySelector('.readyText');
    textDiv.value = readyStr +'///';
    document.querySelector('.copyBtn').addEventListener('click', function(){
        textDiv.select();
        document.execCommand('copy');
        new ClipboardJS('.btn');
    })
    

})