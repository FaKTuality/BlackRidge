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


const footerLink = (linkId) => {
    
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
let toggle = true; 
    const customDD = (event) => {
    const customUL = document.getElementById('customUL'); 
    if(toggle) {
        console.log('open dd1')
        const customUL = document.getElementById('customUL'); 
        const body = document.getElementsByTagName('body')[0]; 
        customUL.classList.replace('invisible', 'visibleCustomUL')
        event.stopPropagation(); 
        body.addEventListener('click', () => {
            if(customUL.classList.contains('visibleCustomUL')) {
                console.log('close dd1')
                customUL.classList.replace('visibleCustomUL', 'invisible') 
                toggle = !toggle; 
            }
            
        })
        toggle = !toggle; 
    } else {
        console.log('close dd1')
        customUL.classList.replace('visibleCustomUL', 'invisible') 
        toggle = !toggle; 
    }

    
}

let toggle2 = true; 
    const customDD2 = (event) => {
    console.log(toggle2); 
    const customUL = document.getElementById('customUL2'); 
    if(toggle2) {
        console.log('open dd2')
        
        const customUL = document.getElementById('customUL2'); 
        const body = document.getElementsByTagName('body')[0]; 
        customUL.classList.replace('invisible', 'visibleCustomUL2')
        event.stopPropagation(); 
        body.addEventListener('click', () => {
            if(customUL.classList.contains('visibleCustomUL2')) {
                console.log('close dd2')
                customUL.classList.replace('visibleCustomUL2', 'invisible')
                toggle2 = !toggle2;  
            }
        })
        toggle2 = !toggle2;  
        
    } else {
        console.log('close dd2')
        customUL.classList.replace('visibleCustomUL2', 'invisible') 
        toggle2 = !toggle2;  
    }

  
}

const optClick = (event) => {
    const customUL = document.getElementById('customUL'); 
    const inp = document.getElementById('inp'); 
    customUL.classList.replace('visibleCustomUL', 'invisible')  
    inp.value = event.target.textContent; 
    inp.dispatchEvent(new Event('change')); 
    toggle = !toggle; 

}

const optClick2 = (event) => {
    const customUL = document.getElementById('customUL2'); 
    const inp = document.getElementById('inp2'); 
    customUL.classList.replace('visibleCustomUL2', 'invisible')  
    inp.value = event.target.textContent; 
    inp.dispatchEvent(new Event('change')); 
    toggle2 = !toggle2;  

}

const val = (event, placeholder) => {
    console.log("This is val1");
    const errMsg = document.getElementById('span-error')
    const inp = document.getElementById('inp'); 
    if(event.target.value === placeholder){
        console.log(event.target.value); 
        errMsg.classList.replace('span-error-msg', 'spanVisible')
        inp.style.border = '2px solid red'; 
    } else {
        errMsg.classList.replace('spanVisible', 'span-error-msg')
        inp.style.border = '2px solid green';         
    }
}

const val2 = (event, placeholder) => {
    console.log("This is val2");
    const errMsg = document.getElementById('span-error2')
    const inp = document.getElementById('inp2'); 
    if(event.target.value === placeholder){
        console.log(placeholder)
        console.log(event.target.value); 
        errMsg.classList.replace('span-error-msg', 'spanVisible')
        inp.style.border = '2px solid red'; 
    } else {
        errMsg.classList.replace('spanVisible', 'span-error-msg')
        inp.style.border = '2px solid green';         
    }
}



document.querySelector('form')?.addEventListener('submit', (e) => {
    const inp = document.getElementById('inp');
    const inp2 = document.getElementById('inp2');
    const errMsg = document.getElementById('span-error');
    const errMsg2 = document.getElementById('span-error2');
    let valid = true;

    if (inp.value === 'Select State') {
        errMsg.classList.replace('span-error-msg', 'spanVisible');
        inp.style.border = '2px solid #d93025';
        valid = false;
    }

    if (inp2.value === 'Select relationship') {
        errMsg2.classList.replace('span-error-msg', 'spanVisible');
        inp2.style.border = '2px solid #d93025';
        valid = false;
    }

    if (!valid) e.preventDefault();
});

 window.addEventListener('load', () => {
        switch(window.location.hash) {
        case '#privacyPolicy': 
            footerLink('privacyPolicy');
            break; 
        case '#TOS': 
            footerLink('TOS'); 
            break; 
        case '#consumerDisclosure': 
            footerLink('consumerDisclosure');
            break; 
        case '#notAGovAgency': 
            footerLink('notAGovAgency');
            break;  
        case '#notALawFirm': 
            footerLink('notALawFirm'); 
            break; 
    }
 })
