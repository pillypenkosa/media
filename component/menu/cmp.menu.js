//console.log( '' );





class ComponentMenu {


	static className = '';

	static paramAttr = [];

	static arrArgs = [ 
		//{ id: 'id1', title: 'ID-1', name: 'ID 01', },
		//{ id: 'id2', title: 'ID-2', name: 'ID 02', },
		//{ id: 'id3', title: 'ID-3', name: 'ID 03', },
	]; 

	static sex = '';
	static country = '';


	static filterHash = {};




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


		let name = 'html';
		let ok = `\x1b[32m ok ${ this.className }.${ name }() `;
		let err = `\x1b[31m err ${ this.className }.${ name }() `;


		//
		//this.setObjByHashParam();


		console.log( ok, 'завантаження компонента...' );
		//console.log( ok + 'this.className:', this.className );





		const arrMenu1 = [
			{ id: 'men' 	, title: 'Чоловіки' 	, sex: '1', },
			{ id: 'women' 	, title: 'Жінки' 		, sex: '0', },
			{ id: 'child' 	, title: 'Діти' 		, },
		];


		//console.log( ok, 'Router.urlGET:', Router.urlGET );



		let htmlBtnsSex = `
			<div class="btn" data-id="allsex" data-sex="allsex" onclick="ComponentMenu.clcSex( this )">Всі (Ч/Ж)</div>
			<div class="btn" data-id="men" data-sex="men" onclick="ComponentMenu.clcSex( this )">Чоловіки</div>
			<div class="btn" data-id="women" data-sex="women" onclick="ComponentMenu.clcSex( this )">Жінки</div>	
		`;


		let htmlBtnsHash = '';

		arrPeopleHash.forEach( k => {
			htmlBtnsHash += `<div class="btn" data-id="${ k.id }" onclick="ComponentMenu.clcHash( this )">${ k.title }</div>`;
		});


		//let html = `<section class="sex">${ htmlBtnsSex }</section><section class="hash">${ htmlBtnsHash }</section>`;


		return getComponentHtml( this.paramAttr, `<section class="sex">${ htmlBtnsSex }</section><section class="hash">${ htmlBtnsHash }</section>` );
	}





/*
	static checkActiveHash( txt ) {

		if ( this.filterHash[ txt ] ) 
			return 'active';
		
		return '';
	}
*/




	static clcSex( elem ) {

		const name 		= 'clcSex';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;



		//console.log( ok, 'elem.dataset.id:', elem.dataset.id );
		Router.urlGET.sex = elem.dataset.id;
		
		//console.log( ok, 'Router.urlGET:', Router.urlGET );


		this.setHashParamByOBJ();


		Router.ini();

		// подсветка меню
		this.activeLight();

		// загрузка контентк
		Router.loadContent();
	}



	static clcHash( elem ) {

		const name 		= 'clcHash';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;


		//console.log( ok, 'elem.dataset.id:', elem.dataset.id  );


		if ( Router.userHash[ elem.dataset.id ] ) {

			delete Router.userHash[ elem.dataset.id ];
		}
		else Router.userHash[ elem.dataset.id ] = 1;



		//console.log( ok, 'Router.userHash:', Router.userHash  );






		this.setHashParamByOBJ();




		Router.ini();

		// подсветка меню
		this.activeLight();

		// загрузка контентк
		Router.loadContent();
	}








	// сформувати параметр &hash=
	static setHashParamByOBJ() {


		const name 		= 'setHashParamByOBJ';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;

		console.log( ok );



		let url = '';
		if ( Router.urlGET.sex ) 
			url += `&sex=${ Router.urlGET.sex }`;
		
		let hashParam = '';
		for ( let k in Router.userHash ) 
			hashParam += k + '/'; 
		
		if ( hashParam ) 
			hashParam = '&hash=' + hashParam.slice( 0, -1 );
		
		if ( history.pushState )
			history.pushState( null, null, '?win=people' + url + hashParam );
	}



	// ініціалізація об'єкту за URL
	static setObjByHashParam() {

		//console.log( Router.urlGET );
		//console.log( 'setObjByHashParam()' );

		if ( Router.urlGET ) {

			if ( Router.urlGET.hash ) {

				let arr = Router.urlGET.hash.split( '/' );

				arr.forEach( k => {
					this.filterHash[ k ] = 1;
				});
			}
		}
	}



	// підсвічування кнопок
	static activeLight() {

		const name 		= 'activeLight';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;


		let arrSex = document.querySelectorAll( 'cmp-menu .sex .btn' );

		//console.log( ok );
		//console.log( ok, 'arr: ', arr );

		arrSex.forEach( k => {

			//alert( k.dataset.sex );

			k.classList.remove( 'active' );

			if ( Router.urlGET.sex == k.dataset.sex ) 
				k.classList.add( 'active' );

			






/*
			if ( Router.urlGET ) {
				if ( Router.urlGET.sex ) {
					if ( Router.urlGET.sex == k.dataset.sex ) {

						k.classList.add( 'active' );
					}

				} else if ( k.dataset.sex == 'allsex' ) {

					k.classList.add( 'active' );
				}
			}
*/

		});



		let arrHash = document.querySelectorAll( 'cmp-menu .hash .btn' );

		//console.log( ok );
		//console.log( ok, 'arr: ', arr );

		arrHash.forEach( k => {

			k.classList.remove( 'active' );

			if ( Router.userHash[ k.dataset.id ] ) {

				console.log( Router.userHash );
				console.log( k.dataset.id );
				k.classList.add( 'active' );
			}
		});
	}
















}











