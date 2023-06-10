import Handlebars from 'handlebars';
import template1 from "./cards.hbs";
import template3 from "./header.hbs";
import template2 from "./footer.hbs";
import template4 from "./modal.hbs";
import template5 from "./modal_new.hbs";


let xhttp_select = new XMLHttpRequest();
xhttp_select.addEventListener('readystatechange', function(){
    // если с запросом, который пришел от сервера, все в порядке
    if (xhttp_select.readyState === 4 && xhttp_select.status === 200){


        // распарсили ответ от сервера, т.е распарсим файл JSON
        let response = JSON.parse(xhttp_select.response);

        render(response);
    }
});




const render = (info) => {

  const formattedData = {
    objects: info.map(item => ({
      id: item.id,
        img: item.img,
        description: item.decription,
      name: item.name
      
    }))
  };
  info = formattedData;
  let html = template1(info);

  let app = document.getElementById('cards');
  app.innerHTML = html;
  html = template3();
  app = document.getElementById('nav');
  app.innerHTML = html;
  html = template2();
  app = document.getElementById('footer');
  app.innerHTML = html;

  html = template4();
  app = document.getElementById('modal_1');
  app.innerHTML = html;

  html = template5();
  app = document.getElementById('new_modal');
  app.innerHTML = html;

};


// посылаем запрос на сервер
xhttp_select.open('GET', "http://lab6/src/logic.php", true);
xhttp_select.send();
