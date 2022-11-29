let text_id = $("span");
let text_advice = $("p");
let btnDice = $("#roll-btn");

$(document).ready(() => {
  fetchApi();
  $(btnDice).click(() => {
    fetchApi();
  });
});

const fetchApi = () => {
  $.get("https://api.adviceslip.com/advice", (data, status) => {
    let apiData = JSON.parse(data);
    $(text_id).text(apiData.slip.id);
    $(text_advice).text(apiData.slip.advice);
  });
};
