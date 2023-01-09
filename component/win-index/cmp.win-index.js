//console.log( '' );






class ComponentWinIndex {



	static arrArgs = [ 
		{ id: 'id1', title: 'ID-1', name: 'ID 01', },
		{ id: 'id2', title: 'ID-2', name: 'ID 02', },
		{ id: 'id3', title: 'ID-3', name: 'ID 03', },
	]; 





	static html() {

		const title = 'Головна';

		document.title = appProjectName + ' ' + title;





		let data = {
			tag: 'win-index',
			param: [
				{ k: 'class' 		, v: 'active' 										, },
				{ k: 'name' 		, v: 'Имя Розы' 									, },
				{ k: 'title' 		, v: 'Всплывающая подсказка' 						, },
				{ k: 'data-id' 		, v: 'anyData' 										, },
				{ k: 'selected' 	, v: '' 											, }, // без значений
				{ k: 'defer' 		, v: '' 											, }, // без значений

				// onclick - прописать строкой с соблюдением кавычек ( т.е. без них ) как здесь // в аргумент попадет массив this.arrArgs
				{ k: 'onclick' 		, v: 'ComponentAny.clc( ComponentAny.arrArgs )' 	, },
/*
				// в аргумент попадет строка ( указывать в кавычках )
				{ k: 'onclick' 		, v: `ComponentAny.clc( 'левый текст' )` 	, }, 
				// ли так
				{ k: 'onclick' 		, v: `ComponentAny.clc( '${ txt }' )` 	, }, 
*/

			],
			innerHTML: 'ComponentWinIndex.html()',
		};




		return getComponentHtml( data );
	}



	static clc( data ) {

		console.log( data );
		//alert( data );

	}










}























