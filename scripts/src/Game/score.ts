/**
 * Посчет очков игроков
 */
function main():string
{
    let white=document.getElementById('white');
    let black=document.getElementById('black');
    if(white==null || black==null)
    {
        
        return '';
    }
    let scoreW=0;
    let scoreB=0;
    let buttons=document.getElementsByClassName('circle') as NodeListOf<Element>;
    for( let i = 0; i < buttons.length; i++ )
	{
        let tmp=buttons[i] as HTMLInputElement;
        if(tmp.style.background=='white')
        {
            scoreW++;
        }
        if(tmp.style.background=='black')
        {
            scoreB++;
        }
	}
    white.textContent=''+scoreW;
    black.textContent=''+scoreB;
    if(scoreW>scoreB)
    {
        return 'white';
    }
    else if(scoreW<scoreB)
    {
        return 'black';;
    }
    else
    {
        return 'draw';;
    }
}

/**
 * Модуль
 */
export {
	main as default,
};