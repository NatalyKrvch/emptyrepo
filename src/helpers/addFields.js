import {AiOutlineMinusCircle} from 'react-icons/ai';

export default function addFields ({handleCharacteristicNameChange,handleCharacteristicValueChange}) {
    const container = document.getElementById("inputsContainer");
    container.style.display = 'flex';
    container.style.gap = '16px'
    container.style.flexDirection = 'column';


    const div = document.createElement('div')
    div.style.position = 'relative';
    div.style.maxWidth = '328px';
    div.style.height = '56px';
    // div.style.display = 'flex';
    // div.style.justifyContent = 'space-between';
    // div.style.alignItems = 'center';

    const label1 = document.createElement('label');
    label1.style.position = 'absolute';
    label1.style.height = '24px';
    label1.style.fontSize = '12px';
    label1.style.lineHeight ='2';
    label1.style.color = 'var(--dark-grey)';
    label1.style.backgroundColor = 'var(--light-blue)';
    label1.style.padding = '0 4px';
    label1.style.left = '12px';
    label1.style.top = '-8px';
    label1.innerText = 'Назва характеристики';

    const input1 = document.createElement('input');
    input1.id = 'characteristicName';
    input1.type = 'text';
    input1.name = 'characteristicName';
    input1.style.width = '100%'; 
    input1.style.height = '56px';
    input1.style.padding = '16px'; 
    input1.style.border = '1px solid var(--light-blue)'
    input1.style.borderRadius = '4px';
    input1.onchange = handleCharacteristicNameChange

    const button1 = document.createElement('button');
    button1.type = 'button';
    button1.style.position = 'absolute';
    button1.style.right = '0';
    button1.style.top = '6px';
    button1.style.width = '40px';
    button1.style.height = '40px';
    button1.style.border = 'none';
    button1.style.backgroundColor = 'transparent';
    button1.style.cursor = 'pointer';
    button1.style.outline = 'none';
    button1.style.display = 'flex';
    button1.style.justifyContent= 'center';
    button1.style.alignItems = 'center';

    const buttonIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    buttonIcon.setAttribute('width', '20px');
    buttonIcon.setAttribute('height', '20px');
    buttonIcon.setAttribute('fill', 'black');

    const div2 = document.createElement('div')
    div2.style.position = 'relative';
    div2.style.maxWidth = '328px';
    div2.style.height = '56px';


    const label2 = document.createElement('label');
    label2.style.position = 'absolute';
    label2.style.height = '24px';
    label2.style.fontSize = '12px';
    label2.style.lineHeight ='2';
    label2.style.color = 'var(--dark-grey)';
    label2.style.backgroundColor = 'var(--light-blue)';
    label2.style.padding = '0 4px';
    label2.style.left = '12px';
    label2.style.top = '-8px';
    label2.innerText = 'Характеристика';
    

    const input2 = document.createElement('input');
    input2.id = 'characteristicValue';
    input2.type = "text";
    input2.name = 'characteristicValue';
    input2.style.width = '100%'; 
    input2.style.height = '56px';
    input2.style.padding = '16px'; 
    input2.style.border = '1px solid var(--light-blue)'
    input2.style.borderRadius = '4px';
    input2.onchange = handleCharacteristicValueChange
    
  
    container.appendChild(div);
    div.appendChild(label1);
    div.appendChild(input1);
    button1.appendChild(buttonIcon);
    div.appendChild(button1);
    container.appendChild(div2);
    div2.appendChild(label2);
    div2.appendChild(input2);
    div2.appendChild(buttonIcon);
    div2.appendChild(button1);


}