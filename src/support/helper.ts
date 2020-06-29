class Helper {
    
    makeString(): string {
        let outString: string = '';
        let inOptions: string = 'abcdefghijklmnopqrstuvwxyz';
    
        for (let i = 0; i < 7; i++) {
    
          outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
    
        }
    
        return outString;
      }
}
export default new Helper();