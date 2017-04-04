/**
 * Кнопки-переключатели
 * 
 * @module
 */
;

/**
 * Кнопки-переключатели
 */
function main(block: Element, click: (event: Event) => void ): void
{
    const onClick = (event: Event): void =>
        {
            click(event);
        };
    block.addEventListener( 'click', onClick );
}

/**
 * Модуль
 */
export {
	main as default,
};