(function(){ 
  document.querySelector(".contentibale").addEventListener("keyup", function(){
    let content = this.innerHTML
    document.querySelector("#code-content").value = content;
  });

  document.querySelector(".toolbar-color").addEventListener("input", function(){
    let val = this.value;
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('foreColor', false, val);
    document.execCommand('styleWithCSS', false, false);

    let content = document.querySelector(".contentibale").innerHTML;
    document.querySelector("#code-content").value = content;
  })

  document.querySelector(".font-style-bold").addEventListener("click", function(){
    document.execCommand('bold',false,null)
    
    let content = document.querySelector(".contentibale").innerHTML;
    document.querySelector("#code-content").value = content;
  })

  document.querySelector(".font-style-italic").addEventListener("click", function(){
    document.execCommand('italic',false,null);
    let content = document.querySelector(".contentibale").innerHTML;
    document.querySelector("#code-content").value = content;
  })

  document.querySelector(".font-style-underline").addEventListener("click", function(){
    document.execCommand('underline',false,null);
    let content = document.querySelector(".contentibale").innerHTML;
    document.querySelector("#code-content").value = content;
  })

  document.querySelector(".font-style-left").addEventListener("click", function(){
    document.execCommand('justifyLeft', false, null);
    let content = document.querySelector(".contentibale").innerHTML;
    document.querySelector("#code-content").value = content;
  })

  document.querySelector(".font-style-center").addEventListener("click", function(){
    document.execCommand('justifyCenter', false, null);
    let content = document.querySelector(".contentibale").innerHTML;
    document.querySelector("#code-content").value = content;
  })

  document.querySelector(".font-style-right").addEventListener("click", function(){
    document.execCommand('justifyRight', false, null);
    let content = document.querySelector(".contentibale").innerHTML;
    document.querySelector("#code-content").value = content;
  })

})();

