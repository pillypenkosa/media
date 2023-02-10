//console.log( '' );



class ComponentWinPeople {



	static className = '';

	static paramAttr = [];

	static arrArgs = []; 

	// люди, які відображені на сторінці
	static arrUsersShow = []; 





	static html( className, tagName ) {

		this.className = className;
		
		this.paramAttr = [

			{ k: 'tag' 			, v: tagName 							, }, // tag ставити завжди першим у массиві
			//{ k: 'class' 		, v: 'active' 							, },
			//{ k: 'name' 		, v: 'Параметр name' 					, },
			//{ k: 'title' 		, v: 'Підказка title, яка вспливає' 	, },
			//{ k: 'selected' 	, v: '' 								, },
			//{ k: 'defer' 		, v: '' 								, },
			//{ k: 'data-id' 		, v: 'anyData' 							, },
			//{ k: 'onclick' 		, v: this.className + '.clc( ' + this.className + '.arrArgs )' 	, },

		];


		const name 		= 'html';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;

		
		//console.log( ok, 'завантаження компоненту...' ); 

		const title = 'Люди';

		document.title = appProjectName + ' ' + title;


		//console.log( ok, 'Router.urlGET.sex:', Router.urlGET.sex ); 

		let htmlPeople = '';
		if ( Router.urlGET.sex || Router.urlGET.hash ) {

			let and = '';
			if ( Router.urlGET.sex == 'men' ) 
				and = 'k.sex && ';
			
			if ( Router.urlGET.sex == 'women' ) 
				and = '!k.sex && ';

			if ( Router.urlGET.sex == 'allsex' ) 
				and = 'true && ';

			for ( let k in Router.userHash ) 
				and += `k.hash[ '${ k }'] && `;

			and = and.slice( 0, -4 );


			//console.log( ok, 'and:', and ); 

			this.arrUsersShow = arrPeople.filter( k => {

				if ( k.hash ) {

					if ( eval( and ) ) 
						return true;
				}
			});




			this.arrUsersShow.forEach( k => {

				let sexClass = k.sex ? 'm' : 'w';


				let htmlAva = k.img ? `<img src="img/people/${ k.id }/${ k.img[ 1 ] }.jpg" alt="${ k.id }">` : '';



						//<img src="img/people/${ k.id }/1.jpg" alt="${ k.id }">


				htmlPeople += `<div class="each ${ sexClass }" data-id="${ k.id }" onclick="${ this.className }.clcUser( this )">
					<div class="img">

						${ htmlAva }
					</div>
					<div class="name">${ k.name.n ? k.name.n : '***' }<br/>${ k.name.s ? k.name.s : '***' }</div>
				</div>`;
			});
		}

		//console.log( ok, 'this.arrUsersShow:', this.arrUsersShow ); 



		let html = `
			<div class="modal"></div>
			<div class="people">${ htmlPeople }</div>
		`;


		return getComponentHtml( this.paramAttr, html );
	}



	static clc( data ) {

		const name 		= 'clc';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;

		//console.log( ok ); 

	}


	static clcUser( elem ) {

		const name 		= 'clcUser';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;


		//console.log( ok, 'elem.dataset.id:', elem.dataset.id ); 

		document.querySelectorAll( 'cmp-win-people .people' )[ 0 ].classList.add( 'hide' ); 		// добавить класс

		document.querySelectorAll( 'cmp-win-people .modal' )[ 0 ].innerHTML = Component( 'Each-User', elem.dataset.id );

	}










}























