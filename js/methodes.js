$.validator.methods.email = function( value, element ) {
    return this.optional( element ) || /[a-z]+@[a-z]+\.[a-z]+/.test( value );
  }