//console.log( '' );









class ComponentHeader {

	static className = '';


	static tfMenu = false;



	static paramAttr = [];



	static arrArgs = [ 
		//{ id: 'id1', title: 'ID-1', name: 'ID 01', },
		//{ id: 'id2', title: 'ID-2', name: 'ID 02', },
		//{ id: 'id3', title: 'ID-3', name: 'ID 03', },
	]; 



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


		//console.log( ok, 'завантаження компонента...' );
		//console.log( ok + 'this.className:', this.className );


		let html = `
			<div class="head">
				<div class="title">${ appProjectName }</div>
				<div>
					<div class="btn-menu" onclick="${ this.className }.clc()">@</div>
				</div>
			</div>
			<div class="version">Version: ${ appVersion }</div>
			<div class="menu hide">${ Component( 'Menu' ) }</div>
		`;
		//<div class="menu hide">${ ComponentMenu.html() }</div>


		return getComponentHtml( this.paramAttr, html );
	}



	static clc( ) {


		let name = 'clc';
		let ok = `\x1b[32m ok ${ this.className }.${ name }() `;
		let err = `\x1b[31m err ${ this.className }.${ name }() `;




		//this.tfMenu = !this.tfMenu;

		//console.log( ok );


		document.querySelectorAll( 'cmp-header .menu' )[ 0 ].classList.toggle( 'hide' ); 		// добавить класс, если его нет, иначе удалить.


	}







}











