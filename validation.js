function validate() {
    if ((username.value == 0 || username.value.length <6) || (password.value==0 || password.value.length <8))
    {
        document.getElementById('error').innerHTML = 'Please enter valid data';
        username.style.border = '1px solid red';
        password.style.border = '1px solid red';
        return false;
     }
     else{
            document.getElementById('error').innerHTML ='';
            username.style.border = '1px solid black';
            password.style.border = '1px solid black';
     }
    }

(function(){
    const fonts = ["cursive", "sans-serif", "serif", "monospace"];  
    let captchaValue = ""; 
    function generateCaptcha(){ 
        let value = btoa (Math.random()*1000000000);
        value = value.substr(0,5+Math.random()*5);
        captchaValue = value;
    }
    function setCaptcha(){
        let html= captchaValue.split("").map((char)=>{ 
            const rotate = -20 + Math.trunc(Math.random()*30); 
            const font= Math.trunc (Math.random()*fonts.length);
            return `<span
            style="
               transform:rotate(${rotate}deg); 
               font-family:${fonts[font]}"
             >${char}</span>`;
            }).join("");
            document.querySelector(".login-form .captcha .preview").innerHTML=html;
        }
        function initCaptcha(){
            document.querySelector(".login-form .captcha .captcha-refresh").addEventListener("click", function()
            {   
                generateCaptcha(); 
                setCaptcha();
            
        });
            generateCaptcha();
            setCaptcha();
         } 
         initCaptcha();

    document.querySelector(".login-form #login-btn").addEventListener("click",function()
    { 
        let inputCaptchaValue = document.querySelector(".login-form .captcha #captcha-form").value;
            if ((username.value == 0 || username.value.length <6) || (password.value==0 || password.value.length <8)){
                document.getElementById('error').innerHTML ="Please fill out the required fields!";
                username.style.border = '1px solid red';
                password.style.border = '1px solid red';

        }
            else if(inputCaptchaValue === captchaValue){
                alert("Login Success!");
                }
            else{
                alert("Invalid captcha")
                }
        });  
            
    })();
