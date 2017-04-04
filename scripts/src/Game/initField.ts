/**
 * Инициируем поле
 * @param область, где будет поле
 */
function main(content:HTMLElement,width:number,height:number)
{
    if(width%2!=0 && height%2!=0)
    {
        return;
    }
    var table=document.createElement('table');
    for (let i = 0; i < height; i++) {
        let tr = table.insertRow();
        for(let j = 0;j < width;j++)
        {
            var td=tr.insertCell();
            var cell=document.createElement('button')
            cell.setAttribute('class','circle');
            cell.id=i+' '+j;
               if(i==j && (i==height/2 || i==height/2-1))
            {
            cell.style.background='white';
            } else if(i==height/2 &&  j==width/2-1 || i==height/2-1 && j==width/2)
            {
                cell.style.background='black';
            }
            else
            {
              cell.style.background='limegreen';
            }
            td.appendChild(cell);
        }
    }
    content.appendChild(table);
    var white=document.createElement('p');
    var black=document.createElement('p');
    content.appendChild(white);
    content.appendChild(black);
}

/**
 * Модуль
 */
export {
	main as default,
};