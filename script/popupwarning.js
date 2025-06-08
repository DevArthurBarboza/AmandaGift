
document.addEventListener('DOMContentLoaded', () => {
    if (document.cookie) {
        if(document.cookie.includes('accessed=true')){
            return;
        }
    }
    
    document.cookie = "accessed=true";

    jQuery('#introduction').modal();

})
