function TranslateFromEngToLeet() {
    var inputText = document.getElementById('textInp').value;

    var arr = inputText.split('');
    var output = "";

    for (var i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'a':
                output = output.concat('4 ');
                break;
            case 'A':
                output = output.concat('/\\ ');
                break;

            case 'b':
        		output = output.concat('|o ');
                break;
        	case 'B':
        		output = output.concat('|3 ');
                break;

            case 'c':
            	output = output.concat('< ');
                break;
            case 'C':
            	output = output.concat('( ');
                break;

            case 'd':
                output = output.concat('o| ');
                break;
            case 'D':
                output = output.concat('|) ');
                break;

            case 'e':
            case 'E':
                output = output.concat('3 ');
                break;

            case 'f':
            case 'F':
                output = output.concat('|= ');
                break;

            case 'g':
            case 'G':
                output = output.concat('9 ');
                break;

            case 'h':
                output = output.concat('# ');
                break;
            case 'H':
                output = output.concat('|-| ');
                break;

            case 'i':
                output = output.concat('l ');
                break;
            case 'I':
                output = output.concat('][ ');
                break;

            case 'j':
            case 'J':
                output = output.concat('_| ');
                break;

            case 'k':
            case 'K':
                output = output.concat('|< ');
                break;

            case 'l':
                output = output.concat('1 ');
                break;
            case 'L':
                output = output.concat('|_ ');
                break;

            case 'm':
                output = output.concat('/v\\ ');
                break;
            case 'M':
                output = output.concat('/\\/\\ ');
                break;

            case 'n':
            case 'N':
                output = output.concat('/\\/ ');
                break;

            case 'o':
            case 'O':
                output = output.concat('0 ');
                break;

            case 'p':
            case 'P':
                output = output.concat('|D ');
                break;

            case 'q':
            case 'Q':
                output = output.concat('(,) ');
                break;

            case 'r':
            case 'R':
                output = output.concat('|Z ');
                break;

            case 's':
            case 'S':
                output = output.concat('$ ');
                break;

            case 't':
            case 'T':
                output = output.concat('7 ');
                break;

            case 'u':
            case 'U':
                output = output.concat('|_| ');
                break;

            case 'v':
            case 'V':
                output = output.concat('\\/ ');
                break;

            case 'w':
            case 'W':
                output = output.concat('\\/\\/ ');
                break;

            case 'x':
            case 'X':
                output = output.concat('}{ ');
                break;

            case 'y':
            case 'Y':
                output = output.concat('\'/ ');
                break;

            case 'z':
            case 'Z':
                output = output.concat('2 ');
                break;

            default:
                output = output.concat(arr[i], " ");
        }
    }

    document.getElementById('outText').textContent = output;
}
