const contractMessage = "contractMessage"; 
const serviceContractServiceFlag = "contractServiceFlag";
localStorage.setItem("countAcess", 0);

let submitService = $(".submit-service");
let titleService = $(".service__card__header__main-title").html().toLowerCase();
let messageForm = `Desejo contratar o serviço de ${titleService}.`;

submitService.click((e) => {
    localStorage.setItem(contractMessage, messageForm);
    localStorage.setItem(serviceContractServiceFlag, 0);
});