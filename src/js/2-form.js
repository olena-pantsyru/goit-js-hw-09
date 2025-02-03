let formData = {
    email: "",
    message: "",
  };
  const STORAGE_KEY = "feedback-form-state";
  const form = document.querySelector('.feedback-form');
  const emailInput = form.elements.email;
  const messageInput = form.elements.message;
  
  function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
  
  function populateFormFromStorage() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      formData = JSON.parse(savedData);
  
      emailInput.value = formData.email || "";
      messageInput.value = formData.message || "";
    }
  }
  
  
  form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    saveToLocalStorage();
  });
  
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
   
    if (!formData.email || !formData.message) {
      alert("Fill please all fields");
      return;
    }
  
  //   console.log("Submitted data:", formData);
  
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };
    form.reset();
  });
  
  populateFormFromStorage();