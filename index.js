(function(){ 
  // var select = document.querySelector('#fontSie');

  // select.addEventListener('change',function(){
  //       console.log(this.value)
  //       document.execCommand( 'fontSize',false,this.value);

  //       let content = document.querySelector(".contentibale").innerHTML;
  //       document.querySelector("#code-content").value = content;

  // });

  document.querySelector(".contentibale").addEventListener("keyup", function(){
    let content = this.innerHTML
    document.querySelector("#code-content").value = content;
  });

  document.querySelector(".fontStyleBold").addEventListener("click", function(){
    document.execCommand('bold',false,null)
    let content = document.querySelector(".contentibale").innerHTML;
    document.querySelector("#code-content").value = content;
  })

  document.querySelector(".fontStyleItalic").addEventListener("click", function(){
    document.execCommand('italic',false,null);
    let content = document.querySelector(".contentibale").innerHTML;
    document.querySelector("#code-content").value = content;
  })

  document.querySelector(".fontStyleUnderline").addEventListener("click", function(){
    document.execCommand( 'underline',false,null);
    let content = document.querySelector(".contentibale").innerHTML;
    document.querySelector("#code-content").value = content;
  })

 

})();



