class Formatter {
  static capitalize(str) {
    return str = str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str = str.replace(/[^a-zA-Z0-9-'\s]+/g, '')
  }

  static titleize(str) {
    let nonCaptWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arr = str.split(' ')
   
    let titleArr = arr.map((word, index) => {
      if(index === 0 || !nonCaptWords.includes(word)) {        
        return this.capitalize(word)       
      } else {
        return word
      }
    })  
    return titleArr.join(' ')
    // return word
  }
}