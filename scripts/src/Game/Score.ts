/**
 * Посчет очков игроков
 */
function main()
{
    let white=document.getElementById('white');
    let black=document.getElementById('black');
    if(white==null || black==null)
    {
        return;
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
    white.innerHTML=''+scoreW;
    black.innerHTML=''+scoreB;
}

/**
 * Модуль
 */
export {
	main as default,
};