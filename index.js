function shout(string) {
    return string.toUpperCase()
  }
  function whisper(string){
    return string.toLowerCase()
  }
  function logShout(string) {
    console.log("HELLO")
  }
  function logWhisper(string) {
    console.log("hello")
  }
  function sayHiToHeadphonedRoommate(hello) { 
    if (hello=== hello.toLowerCase()) {
      return "I can't hear you!";
    }else if(hello=== hello.toUpperCase()) {
      return "YES INDEED!";
    }else{
     return "I would love to!";
    }

  }
  


