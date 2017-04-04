/**
 * Модуль инициализации игры
 */
;

import initButtons from './initButtons';
import initField from './initField';
import Score from './Score';
/**
 * Ширина поля
 */
const width=4;
/**
 * Высота поля
 */
const height=4;
/**
 * Состояние поля
 */
var Field=0;
/**
 * запускаем игру
 */
function main():void
{
    var content=document.getElementById('content') as HTMLAnchorElement; 
    var startButton=document.createElement('button');
        startButton.setAttribute('id','Start');
        startButton.innerHTML='Start';
        content.appendChild(startButton);
    Start(content);
}
/**
 * Конпка старт
 * @param content область поля
 */
function Start(content:HTMLElement)
{
    var startButton=document.getElementById('Start');
    if ( !startButton )
	{
		return;
	}
    const onClick = ( event: Event ): void => 
	{	
        if ( event == undefined )
        {
                 return;
        }
        const target = event.target as HTMLInputElement;
		if ( target.name == undefined )
		{
			return;
		}
        if(Field==0)
        {
            target.style.display='none';
            Field=1;
            initField(content,width,height);
            PlayGame('circle');
            Score();
        }
	}
    initButtons( startButton, onClick );
}
/**
 * Процесс игры
 * @param кнопки
 */
function PlayGame(buttonGroupName: string):void
{
    const buttons = document.getElementsByClassName( buttonGroupName ) as NodeListOf<Element>;
    if ( !buttons )
	{
		return;
	}
    const onClick = ( event: Event ): void => 
	{	
        if ( event == undefined )
            {
                 return;
            }
            const target = event.target as HTMLInputElement;
            if ( target.style.background == 'black' || target.style.background == 'white')
            {
                return;
            }
            else
            {
                MakeMove('black',buttons,target);
                MakeMove('white',buttons,target);
                Score();
            }
	}
	for( let i = 0; i < buttons.length; i++ )
	{
		initButtons( buttons[i], onClick );
	}
}
/**
 * 
 * @param color Цвет
 * @param buttons Поле
 * @param target 
 */
function MakeMove(color:string,buttons:NodeListOf<Element>,target:HTMLInputElement):void
{
    if(chekForMove(color,buttons))
    {
        if(checkForMoveForOneChip(color,target))
        {
            MoveForChip(color,target);
        }
    }
}
/**
 * Проверка на возможности ходить данным цветом
 * @param color Цвет
 * @param buttons Поле
 * @returns истина или ложь
 */
function chekForMove(color:string,buttons:NodeListOf<Element>):boolean
{
    for(var i=0;i<height*width;i++)
    {
        if(checkForMoveForOneChip(color,buttons[i] as HTMLInputElement)) return true;
    }
    return false;
}
/**
 * Проверка возможности походить для данного цвета
 * @param color Цвет
 * @param name координаты фишки
 * @returns истина или ложь
 */
function checkForMoveForOneChip(color:string,name:HTMLInputElement):boolean
{
    if(name.style.background=='limegreen')
    {
        if((checkForMoveToDirection(color,name.id,0,1) || 
        checkForMoveToDirection(color,name.id,0,-1) || 
        checkForMoveToDirection(color,name.id,1,0) ||
	    checkForMoveToDirection(color,name.id,-1,0) || 
        checkForMoveToDirection(color,name.id,1,1) || 
        checkForMoveToDirection(color,name.id,-1,-1) || 
        checkForMoveToDirection(color,name.id,1,-1) || 
        checkForMoveToDirection(color,name.id,-1,1))) return true;
    }        
    return false;
}
/**
 * Ставим фишки
 * @param color Цвет
 * @param name координаты фишки
 */
function MoveForChip(color:string,name:HTMLInputElement):void
{
    if(checkForMoveToDirection(color,name.id,0,1))
    {
        moveFromChipToDirection(color,name.id,0,1);
    } 
	if(checkForMoveToDirection(color,name.id,0,-1))
    {
        moveFromChipToDirection(color,name.id,0,-1);
    } 
	if(checkForMoveToDirection(color,name.id,1,0))
    {
        moveFromChipToDirection(color,name.id,1,0);
    }
	if(checkForMoveToDirection(color,name.id,-1,0))
    {
        moveFromChipToDirection(color,name.id,-1,0);
    } 
	if(checkForMoveToDirection(color,name.id,1,1))
    {
        moveFromChipToDirection(color,name.id,1,1);
    } 
	if(checkForMoveToDirection(color,name.id,1,-1))
    {
        moveFromChipToDirection(color,name.id,1,-1);
    } 
	if(checkForMoveToDirection(color,name.id,-1,1))
    {
        moveFromChipToDirection(color,name.id,-1,1);
    } 
	if(checkForMoveToDirection(color,name.id,-1,-1))
    {
        moveFromChipToDirection(color,name.id,-1,-1);
    } 
    name.style.background=color;
}
/**
 * Проверяем возможность походить в данном направлении
 * @param color цвет
 * @param name координаты фишки
 * @param i шаг по вертикали
 * @param j шаг по горизонтали
 * @returns истина или ложь
 */
function checkForMoveToDirection(color:string,name:string,i:number,j:number):boolean
{
    let x=parseInt(name.split(/\s/)[1],10);
    let y=parseInt(name,10);
    while(y<height && y>=0 && x<width && x>=0)
    {
		y+=i;
		x+=j;
        if(y<height && y>=0 && x<width && x>=0)
        {
            let check=document.getElementById (y+' '+x) as HTMLAnchorElement;
            let neighbor=document.getElementById ((parseInt(name,10)+i)+' '+(parseInt(name.split(/\s/)[1],10)+j)) as HTMLAnchorElement;
            if(check.style.background==color && check.style.background!=neighbor.style.background) return true;
		    else if(check.style.background=='limegreen'|| ((color=='white' && check.style.background!='black') || (color=='black' && check.style.background!='white'))) 
            return false;
        }
        else return false
	}
    return false;
}
/**
 * Ставим вишки в данном направлении
 * @param color Цвет
 * @param name координаты фишки
 * @param i шаг по вертикали
 * @param j шаг по горизонтали
 */
function moveFromChipToDirection(color:string,name:string,i:number,j:number):void
{
    let x=parseInt(name.split(/\s/)[1],10)+j;
    let y=parseInt(name,10)+i;

	let check=document.getElementById (y+' '+x) as HTMLAnchorElement;
	while(check.style.background!=color){
        let tmp=check;
        tmp.style.background=color;
        y+=i;
        x+=j;
		check=document.getElementById (y+' '+x) as HTMLAnchorElement;
	}
}
/**
 * Модуль
 */
export {
	main as default,
};



