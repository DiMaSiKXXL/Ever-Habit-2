let habitDialog = document.getElementById("create-habit-dialog");
let form = habitDialog.querySelector("form");
let dialogOpenBtn = document.getElementById("create-habit-btn");

let nameInput = document.getElementById("habit-name-input");
let descriptionInput = document.getElementById("habit-description-input");

let closeBtn = document.getElementById("cancel-create-habit-btn");
let createBtn = document.getElementById("submit-create-habit-btn");

// =====================================================================

dialogOpenBtn.addEventListener("click", () => {
  habitDialog.showModal();
});

closeBtn.addEventListener("click", (e) => {
  habitDialog.close();
});

function returnHabitInfo() {
  if (nameInput.value === "") {
    console.log('Поле "Имя" не заполнено');
    return null;
  }

  return {
    name: nameInput.value,
    description: descriptionInput.value,
  };
}

// Закрыть диалог при клике на "Создать"
createBtn.addEventListener("click", () => {
  const habitData = returnHabitInfo();

  if (habitData) {
    let { name, description } = habitData;
    console.log(name);
    console.log(description);

    habitDialog.close();
    form.reset();
  }
});

// Закрыть диалог при клике вне формы
habitDialog.addEventListener("click", closeOnBackDropClick);

function closeOnBackDropClick({ currentTarget, target }) {
  const dialogElement = currentTarget;
  const isClickedOnBackDrop = target === dialogElement;
  if (isClickedOnBackDrop) {
    dialogElement.close();
  }
}
