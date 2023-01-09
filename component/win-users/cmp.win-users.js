//console.log( '' );






class ComponentWinUsers {


/*
	static arrArgs = [ 
		{ id: 'id1', title: 'ID-1', name: 'ID 01', },
		{ id: 'id2', title: 'ID-2', name: 'ID 02', },
		{ id: 'id3', title: 'ID-3', name: 'ID 03', },
	]; 
*/




	static html( arr ) {

		const title = 'Люди';
		document.title = appProjectName + ' ' + title;

		let arrShowUsers = arrPeople.filter( k => true );


		//console.log( arrShowUsers );

		arr.forEach( k => {

			if ( k == 'men' ) {
				arrShowUsers = arrShowUsers.filter( k1 => {
					if ( k1.sex )
						return true;
				});
			}

			if ( k == 'women' ) {
				arrShowUsers = arrShowUsers.filter( k1 => {
					if ( !k1.sex )
						return true;
				});
			}













			//console.log( k );

		});

		console.log( arrShowUsers );


		let html = '';
		arrShowUsers.forEach( k => {

			let ava = k.img ? `<img src="img/people/${ k.id }/1.jpg" class="ava" alt="">` : '<div class="ava"></div>';

			let fon = k.sex ? 'fon-man' : 'fon-woman';

			html += `<div class="each ${ fon }">
				${ ava }

				<div class="title">
					<div class="name">${ k.name ? ( k.name.n ? k.name.n : '' ) : '' }</div>
					<div class="surname">${ k.name ? ( k.name.s ? k.name.s : '' ) : '' }</div>
				</div>
			</div>`;
		});



		//console.log( arr );



		let data = {
			tag: 'win-users',
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
			innerHTML: html,
		};




		return getComponentHtml( data );
	}



	static clc( data ) {

		console.log( data );
		//alert( data );

	}










}























