function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Requisito 1

  function createDates() {
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let datesList = document.querySelector('#days');

    for(let index = 0; index < decemberDaysList.length; index += 1) {
        const dates = decemberDaysList[index];
        const datesListItem = document.createElement('li');
        datesListItem.innerHTML = dates;

        if(datesListItem.innerHTML === '24' | datesListItem.innerHTML === '25' || datesListItem.innerHTML === '31') {
            datesListItem.className = 'day holiday';
        } else if (datesListItem.innerHTML === '4' | datesListItem.innerHTML === '11' || datesListItem.innerHTML === '18' || datesListItem.innerHTML === '25') {
            datesListItem.className = 'day friday';       
        } else {
            datesListItem.className = 'day';
        }

        datesList.appendChild(datesListItem);
    }
  }

  createDates();

  // Requisito 2

  function createHolidayBtn() {
    let holidayBtn = document.createElement('button')
    let div = document.querySelector('.buttons-container');

    holidayBtn.innerText = 'Feriados'
    holidayBtn.id = 'btn-holiday'

    div.appendChild(holidayBtn);
  }

  createHolidayBtn();

  // Requisito 3

  const holidayBtnChange = document.querySelector('#btn-holiday');


  function holidayChangeColor() {
    if(holidayBtnChange.className === 'day') {
        backgroundColor = 'red';
    } else {
        backgroundColor = 'white'
    }
  }

  holidayBtnChange.addEventListener('click', holidayChangeColor)
  