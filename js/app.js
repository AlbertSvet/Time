

const triggerBtn = document.querySelector('.icon-menu'),
      contentMenu = document.querySelector('.header__blockNav'),
      contentBody = document.querySelector('.header__body'),
      contentBlockRight = document.querySelector('.header__right'),
      logoMobil = document.querySelector('.header__mobilLogo'),
      body = document.querySelector('body');
      
// клик по кнопке
 triggerBtn.addEventListener('click', () =>{
    triggerBtn.classList.toggle('active');
    contentMenu.classList.toggle('active');
    contentBody.classList.toggle('active');
    
    if (triggerBtn.classList.contains('active')) {
        contentForm.classList.add('active');
        contentCentr.classList.add('active');
        contentBlockRight.classList.add('active');
        logoMobil.classList.add('active');
        body.classList.add('lock');
        
    } else {
        contentForm.classList.remove('active');
        contentCentr.classList.remove('active');
        contentBlockRight.classList.remove('active');
        logoMobil.classList.remove('active');
        body.classList.remove('lock');
    }
 });
 // Клик по области 
 contentMenu.addEventListener('click', (e) =>{
    if(e.target === contentMenu) {
        triggerBtn.classList.remove('active');
    contentMenu.classList.remove('active');
    contentBody.classList.remove('active');
    contentForm.classList.remove('active');
    contentCentr.classList.remove('active');
    contentBlockRight.classList.remove('active');
    logoMobil.classList.remove('active');
    body.classList.remove('lock');
    }
    
 })

 //==== форма 
 const triggerFormBtn = document.querySelector('.header__btnSearch'),
       contentForm = document.querySelector('.header__blockForm '),
       closeForm = document.querySelector('.header__formClose'),
       contentCentr = document.querySelector('.header__centr');
       

    triggerFormBtn.addEventListener('click', () =>{
        contentForm.classList.toggle('active');
        contentCentr.classList.toggle('active');
        contentBlockRight.classList.toggle('active');
        
    })
    closeForm.addEventListener('click', ()=>{
        contentForm.classList.remove('active');
        contentCentr.classList.remove('active');
        contentBlockRight.classList.remove('active');
    })

// =============================================================================================================//


// =============================================================================================================//





// =============================================================================================================//


