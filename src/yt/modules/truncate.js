const regLastWord = /\s+\w+\s*$/;

/**
 * Truncates a string to a certain length
 * @param text {String}
 * @param [length=200] {Number}
 * @return {text}
 */
export default function truncate(text, length = 200) {
    if(text.length > length){
        text = text.slice(0,length).replace(regLastWord, '') + '…';
    }

    return text;
}
