//Pegar o texto a ser criptografado ou descriptografado:
function handleSubmit(){
  event.preventDefault();

  const encryptDecryptText = document.getElementById('encryptDecryptText');
  const action = event.submitter.value;

  //Mostra o texto digitado como texto normal 
  const typedTextContainer = document.getElementById('textInputContainer');
  const typedText = encryptDecryptText.value;
  typedTextContainer.textContent = typedText;
  
  //Recebe o texto digitado pelo usuário, e identifica se precisa ser encriptado 
  //ou descriptografado
  if (action === 'encrypt'){
    const text = encryptDecryptText.value;
    const encryptedText = criptografarTexto(text);

    //Recebe o texto criptografado e mostra ele dentro da section #textResult
    document.getElementById('textResult').innerHTML = `
    <h3>${encryptedText}</h3>
    `;

    //Remove a imagem quando da section quando o seu conteúdo é alterado  
    const resultImage = document.getElementById('resultImage');
    resultImage.style.display = 'none';

    encryptDecryptText.value = encryptedText;
  }else if (action === 'decrypt'){
    const text = encryptDecryptText.value;
    const decryptedText = descriptografarTexto(text);
    console.log(decryptedText);

    //Recebe o texto descriptografado e mostra ele dentro da section #textResult
    document.getElementById('textResult').innerHTML = `
    <h3>${decryptedText}</h3>
    `;

    //Remove a imagem quando da section quando o seu conteúdo é alterado
    const resultImage = document.getElementById('resultImage');
    resultImage.style.display = 'none';

    encryptDecryptText.value = decryptedText;
  }
}
//código inicial
/*
function criptografarTexto(text){
  const encryptDecryptText = text.toLowerCase();
  const encrypt = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
  };
  let encryptedText = '';
  for (let letra of encryptDecryptText){
    if (letra in encrypt){
      encryptedText += encrypt[letra];
    }else{
      encryptedText += letra;
    }
  }
  return encryptedText;
}
*/

// Função para criptografar o texto utilizando Regex
function criptografarTexto(text) {
  const encrypt = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };
  const pattern = /[eioua]/g;
  const encryptedText = text.replace(pattern, match => encrypt[match]);

  return encryptedText;
}

function descriptografarTexto(text) {
  const decrypt = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };
  const pattern = /(enter|imes|ai|ober|ufat)/g;
  const encryptedText = text.replace(pattern, match => decrypt[match]);

  return encryptedText;
}