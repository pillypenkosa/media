const appProjectName = 'Media DJS';
const appVersion = '2023-01-29 14:45';






// завантаження компонента
function Component( txt, data = null ) {

	const name 	= 'Component';
	const ok 	= `\x1b[32m ok ${ name }() `;
	const err 	= `\x1b[31m err ${ name }() `;

	//console.log( ok );
	//console.log( ok + ' // txt:', txt  );
	//console.log( ok + ' // txt.toLowerCase():', txt.toLowerCase() );

	let className = 'Component' + txt.replace( /-/g, '' );
	//console.log( className );

	let tagName = txt.toLowerCase();
	//console.log( tagName );


	//alert( `${ className }.html()` );


	return eval( `${ className }.html( '${ className }', '${ tagName }', data )` ); // data - впихнути десь тут
	//return eval( '' );



/*
	let cmp = eval( `new ${ className }( className, tagName )` );     
	let html = cmp.html();
	delete( cmp );

	return html;
*/


}





// отримання HTML-розмітки конкретного компонента
function getComponentHtml( attr, html = '' ) {

	let name = 'getComponentHtml';



	//console.log( 'getComponentHtml():' );



	let tfTag = false;
	let tag = '';

	let htmlAttr = '';



	if ( attr ) {
		//console.log( 'getComponentHtml() attr:', attr );


		attr.forEach( k => {

			if ( k.k == 'tag' ) {
				tfTag = true;
				tag = 'cmp-' + k.v;

			} else {
				htmlAttr += ` ${ k.k }="${ k.v }"`;
			}

		});

		//console.log( htmlAttr );
	} 

	if ( tfTag )
		return `<${ tag }${ htmlAttr }>${ html }</${ tag }>`;

	return '<no-name-tag>Я компонент, який загубив свою назву</no-name-tag>';


}













// подсветка кнопок
function btnLight( container, id ) { 	// container - блок, где расположены кнопки 		// data-id - идентификатор конкретной кнопки

	// !!! в каждой кнопке должен быть класс `btn` и атрибут data-id <div class="btn" data-id=" ...anyTxt... "></div>
	//console.log( container, id );
	//alert( container );
	//alert( id );

	let arr = document.querySelectorAll( container + ' cmp-btn' );

	arr.forEach( k => {
		if ( k.dataset.id == id ) 
			k.classList.add( 'active' );
		else 
			k.classList.remove( 'active' );
	});
}






function big1Letter( txt ) {

	return txt[ 0 ].toUpperCase() + txt.slice( 1 );
}





















// вся строка в нижний регистр
// toLowerCase()


















/*

function getComponentHtml555( data ) {

	let tag 		= 'no-name';
	let param 		= '';
	let innerHTML  	= '';

	if ( data ) 
	{
		if ( data.tag )
			tag = data.tag;
		else console.log( `ERR: Обнаружены компоненты без имени тега <cmp-${ tag }></cmp-${ tag }>` );

		if ( data.innerHTML ) 
			innerHTML = data.tag ? data.innerHTML : 'No Name Component...';

		if ( data.param ) 
		{
			data.param.forEach( k => {
				param += ` ${ k.k }="${ k.v }"`;
			});
		}
	}

	return `<cmp-${ tag }${ param }>${ innerHTML }</cmp-${ tag }>`;
}



*/


