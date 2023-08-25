export const validarNombre = () => {
  const valor1 = document.getElementById('1').value;

  let regex = /^[a-zA-Z\s]+$/;

  if(valor1.trim() === '') return {valido: false, error: 'Debe rellenar este espacio.'};

  if(valor1.length < 3) return {valido: false, error: 'El nombre debe contener al menos 3 caracteres.'};

  if(!regex.test(valor1)) return {valido: false, error: 'El nombre sólo puede contener letras y espacios.'};
    
  return {valido: true, dato: valor1, error: null};
};

export const validarEmail = () => {
  const valor2 = document.getElementById('2').value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(valor2.trim() === '') return {valido : false, error: 'Complete este espacio'};

  if (!emailRegex.test(valor2)) return {valido : false, error : 'Escriba un correo válido'};

  return {valido : true, dato: valor2, error: null};
};

export const validarMensaje = () => {
  const valor3 = document.getElementById('3').value;

  if(valor3.trim() === '') return {valido : false, error: 'Complete este espacio'};

  if(valor3.length < 15) return {valido: false, error: 'El mensaje debe contener al menos 15 caracteres.'};

  return {valido : true, dato: valor3, error: null};
};