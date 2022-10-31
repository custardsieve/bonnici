var menuContainer,
    menuBelt,
    menuContainerTable,
    isElementOpen,
    mobileBelt,
    msgContainer;

function showContainer(name, isOpen) {
    menuContainer =  document.getElementById(name);
    menuBelt = menuContainer.querySelector(".menu-belt");

    if (isOpen == "false") {
        menuBelt.classList.add("show");
    } else {
        menuBelt.classList.remove("show");
    }
}

function mobileMenu(names, isOpen) {
    mobileBelt = document.getElementById("bonnici-mobile-container");
    menuContainer =  mobileBelt.querySelector('[data-ref='+ names +']');
    // isElementOpen = menuContainer.querySelector(".show") == null;

    if (isOpen) {
        menuContainer.classList.add("show");
        mobileBelt.style.transform = "translateX(0%)";
    } else {
        menuContainer.classList.remove("show");
    }
}

function hideMobileContainer() {
    mobileBelt =  document.getElementById("bonnici-mobile-container");
    mobileBelt.style.transform = "translateX(100%)";
    mobileBelt.querySelector(".show").classList.remove("show");
}

function hideMsgContainer() {
    
    msgContainer =  document.getElementById("important-msg");
    msgContainer.classList.add("hide");
}

function menuTimes(data) {
    const dayOfWeek = data?.c[2]?.v;
    const openingTime = data?.c[3]?.v;
    const closingTime = data?.c[4]?.v;
    const timesTable = document.querySelector('.times-table');
    const timesTableMob = document.querySelector('.mob.times-table');
  
    if (dayOfWeek) {
      timesTable.innerHTML += '<li><div class="menu-belt__table--flex-container"><div class="menu-belt__table__name">'+ dayOfWeek +'</div><div class="menu-belt__table__number"><span class="open">'+ openingTime +'</span>&nbsp;&mdash;&nbsp;<span class="close">'+ closingTime +'</span></div></div></li>';
      timesTableMob.innerHTML += '<div class="menu-belt__table--flex-container"><div class="menu-belt__table__name">'+ dayOfWeek +'</div><div class="menu-belt__table__number"><span class="open">'+ openingTime +'</span>&nbsp;&mdash;&nbsp;<span class="close">'+ closingTime +'</span></div></div>';
    } else {return}
  }
  
function menuPricing(data) {
  const serviceName = data?.c[5]?.v;
  const serviceDescription = data?.c[7]?.v;
  const servicePrice = data?.c[6]?.v;
  const pricingTable = document.querySelector('.pricing-table');
  const pricingTableMob = document.querySelector('.mob.pricing-table');

  if (serviceName) {
    pricingTable.innerHTML += '<li><div class="menu-belt__table--flex-container"><div class="menu-belt__table__service">'+ serviceName +'<p class="menu-belt__table__service-description">'+ serviceDescription +'</p></div><div class="menu-belt__table__service-price">'+ servicePrice +'</div></div></li>';
    pricingTableMob.innerHTML += '<div class="menu-belt__table--flex-container"><div class="menu-belt__table__service">'+ serviceName +'<p class="menu-belt__table__service-description">'+ serviceDescription +'</p></div><div class="menu-belt__table__service-price">'+ servicePrice +'</div></div>';
  } else {return}
}
  
function importantMessage(data) {
  const notice = document.getElementById('important-msg');
  const messageContainer = document.getElementById('message');
  const message = data[0]?.c[10]?.v;
  const flag = data[0]?.c[1]?.v;

  if (flag) {
    notice.classList.remove('hide');
    messageContainer.innerHTML += '<h1>'+ message +'</h1>';
  } else {return}

}