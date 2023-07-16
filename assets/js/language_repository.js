class LanguageRepository {
    constructor() {
      this.records = [
        ['language', 'English', 'Português'],
        ['Choose a door', 'Choose a door', 'Escolha uma porta'],
        ['Open a empty door', 'Open a empty door', 'Escolha uma porta vazia'],
        ['change_port','do you want to change port?','Quer trocar de porta?'],
        ['Congratulatios', 'Congratulatios', 'Parabens'],
        ['lose_door','Loose the correct door is ', 'Perdeu porta correta '],
        ['Attempts','Attempts','Tentativas'],
        ['Errors','Errors','Erros'],
        ['Successes','Successes','Sucessos'],
        ['restart' , 'Restart', 'Reiniciar']
      ];
      this.language = 1;
    }
  
    setLanguage(language) {
      this._language = Number(language);
    }
  
    getMessage(key) {
      console.log(key);
      const record = this.records.find(reg => reg[0] === key);
      if (record) {
        console.log('encontrado ' + record[this._language] + '  ' + record[1] + ' ' + record[2]);
        return record[this._language];
      }
      return 'Key not found.';
    }
  }