const hamClick = (e) => {
    let cancel = document.getElementById('cancel'); 
    let headerNav = document.getElementById('headerNav'); 
    let secondLogo = document.getElementById('secondLogo');   
    let main = document.getElementsByTagName('main')[0]; 
    let footer = document.getElementsByTagName('footer')[0];     

    e.target.classList.add('clickedHam'); 
    cancel.classList.replace('cancel', 'visibleCancel')
    headerNav.classList.replace('headerNav', 'headerNavClicked'); 
    main.classList.add('reblur'); 
    footer.classList.add('reblur'); 
    secondLogo.classList.add('reblur');     
    main.setAttribute('inert', ''); 
    footer.setAttribute('inert', ''); 
}


window.addEventListener("resize", () => {     
    let cancel = document.getElementById('cancel'); 
    let headerNav = document.getElementById('headerNav');
    let main = document.getElementsByTagName('main')[0]; 
    let footer = document.getElementsByTagName('footer')[0]; 
    let ham = document.getElementById('hamburger');
    let secondLogo = document.getElementById('secondLogo');

    if (window.innerWidth >= 963) {
        cancel.classList.replace('visibleCancel', 'cancel'); 
        headerNav.classList.replace('headerNavClicked', 'headerNav');
        ham.classList.remove('clickedHam');
        main.classList.remove('reblur');     
        footer.classList.remove('reblur');
        secondLogo.classList.remove('reblur');
        main.removeAttribute('inert'); 
        footer.removeAttribute('inert'); 
    }
});

const xClick = (e) => {
    let ham = document.getElementById('hamburger'); 
    let headerNav = document.getElementById('headerNav');
    let secondLogo = document.getElementById('secondLogo');   
    let main = document.getElementsByTagName('main')[0];    
    let footer = document.getElementsByTagName('footer')[0];   
    let cancel = document.getElementById('cancel');          

    e.target.classList.replace('visibleCancel', 'cancel'); 
    ham.classList.remove('clickedHam'); 
    headerNav.classList.replace('headerNavClicked', 'headerNav');
    main.classList.remove('reblur'); 
    footer.classList.remove('reblur');  
    secondLogo.classList.remove('reblur');        
    main.removeAttribute('inert'); 
    footer.removeAttribute('inert');    
}

const linkClick = () => {
    let ham = document.getElementById('hamburger'); 
    let headerNav = document.getElementById('headerNav');
    let cancel = document.getElementById('cancel'); 
    let main = document.getElementsByTagName('main')[0];   
    let footer = document.getElementsByTagName('footer')[0];   
    let secondLogo = document.getElementById('secondLogo');   

    ham.classList.remove('clickedHam'); 
    headerNav.classList.replace('headerNavClicked', 'headerNav');
    cancel.classList.replace('visibleCancel', 'cancel'); 
    main.classList.remove('reblur');     
    footer.classList.remove('reblur');  
    secondLogo.classList.remove('reblur');  
    main.removeAttribute('inert'); 
    footer.removeAttribute('inert');    
}

const footerLink = (event, linkId) => {
    let target = document.getElementById(linkId); 
    let main = document.getElementsByTagName('main')[0]; 
    let header = document.getElementsByTagName('header')[0]; 
    let headerNav = document.getElementById('headerNav');    
    let footer = document.getElementsByTagName('footer')[0];      
    main.classList.add('blur');    
    header.classList.add('blur');    
    footer.classList.add('blur');  
    target.classList.replace('invisible', linkId); 
    headerNav.classList.add('policyClicked');    
    main.setAttribute('inert', ''); 
    header.setAttribute('inert', '');     
    footer.setAttribute('inert', '');      
}

const closeClick = (event, linkId) => {
    
    let target = document.getElementById(linkId); 
    let main = document.getElementsByTagName('main')[0];     
    let header = document.getElementsByTagName('header')[0]; 
    let headerNav = document.getElementById('headerNav');
    let footer = document.getElementsByTagName('footer')[0];         
    main.classList.remove('blur'); 
    header.classList.remove('blur'); 
    footer.classList.remove('blur'); 
    target.classList.replace(linkId, 'invisible');     
    headerNav.classList.remove('policyClicked');  
    main.removeAttribute('inert'); 
    header.removeAttribute('inert'); 
    footer.removeAttribute('inert');            
}

const submit = (event) => {

}