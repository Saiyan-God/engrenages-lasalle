import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

	private en_lang = {
		'company_summary' : 'Precision manufacturing, repairs, and prototype development',

		'company_statement' : 'Engrenage Lasalle houses an extensive array of machinery to manufacture components for small and large businesses across Quebec and Ontario. These include lathes, drilling, gear hobbers, bevel gears, and thread/other milling.  This unique combination of state of the art machinery allows Engrenage Lasalle the ability to provide its customers a myriad of components pertaining to all vertical industries',

		'company_about' : "Founded in 1993, Engrenage Lasalle is a manufacturing establishment that specializes in the development of customized and standard components used in machinery. These include tailor-made gears and splines made from a variety of metals, plastics, and other core materials",
	};

	private fr_lang = {
		'company_summary' : 'Fabrication de précision, réparations et développement de prototypes',

		'company_statement' : "Engrenage Lasalle abrite une vaste gamme de machines pour fabriquer des composants pour les petites et grandes entreprises au Québec et en Ontario. Ceux-ci incluent les tours, le perçage, les taillants d'engrenages, les engrenages coniques et le filetage / autres fraisages. Cette combinaison unique de machines de pointe permet à Engrenage Lasalle de fournir à ses clients une myriade de composants appartenant à toutes les industries verticales",

		'company_about' : "Fondée en 1993, Engrenage Lasalle est un établissement manufacturier spécialisé dans le développement de composants personnalisés et standard utilisés dans les machines. Il s'agit notamment d'engrenages et de cannelures sur mesure fabriqués à partir d'une variété de métaux, de plastiques et d'autres matériaux de base",
	};

	private en_labels = {
		'product' : 'Products',

		'contact' : "Contact Information",

		'about' : "About",

		'telephone' : 'Telephone',

		'fax' : "Fax",

		'location' : "Location",

		'email' : "Email"
	}

	private fr_labels = {
		'product' : "Produits",

		'contact' : "Coordonnées",

		'about' : "Information",

		'telephone' : 'Téléphone',

		'fax' : "Fax",

		'location' : "Emplacement",

		'email' : "Email"
	}

	lang = this.fr_lang;
	labels = this.fr_labels;

	title = 'engrenages-lasalle';

	telephone = "(514) 595-3490";
	fax = "(514) 595-3590";
	email = "info@engrenagelasalle.com";
	street = "7228 rue Cordner";
	city = "LaSalle, Quebec";
	postal_code = "H8N 2W8";

	product_image_path = '/assets/img';

	products = [
		{
			image : this.product_image_path + '/img1.jpeg',
			name : 'Image 1',
			description: 'Description for image 1'
		},
		{
			image : this.product_image_path + '/img2.jpeg',
			name : 'Image 2',
			description: 'Description for image 2'
		},
		{
			image : this.product_image_path + '/img3.jpeg',
			name : 'Image 3',
			description: 'Description for image 3'
		},
		{
			image : this.product_image_path + '/img4.jpeg',
			name : 'Image 4',
			description: 'Description for image 4'
		},
		{
			image : this.product_image_path + '/img5.jpeg',
			name : 'Image 5',
			description: 'Description for image 5'
		},
		{
			image : this.product_image_path + '/img6.jpeg',
			name : 'Image 6',
			description: 'Description for image 6'
		},
		{
			image : this.product_image_path + '/img7.jpeg',
			name : 'Image 7',
			description: 'Description for image 7'
		},
		{
			image : this.product_image_path + '/img8.jpeg',
			name : 'Image 8',
			description: 'Description for image 8'
		},
		{
			image : this.product_image_path + '/img9.jpeg',
			name : 'Image 9',
			description: 'Description for image 9'
		},
		{
			image : this.product_image_path + '/img10.jpeg',
			name : 'Image 10',
			description: 'Description for image 10'
		},
		{
			image : this.product_image_path + '/img11.jpeg',
			name : 'Image 11',
			description: 'Description for image 11'
		},
		{
			image : this.product_image_path + '/img12.jpeg',
			name : 'Image 12',
			description: 'Description for image 12'
		},
		{
			image : this.product_image_path + '/img13.jpeg',
			name : 'Image 13',
			description: 'Description for image 13'
		},
		{
			image : this.product_image_path + '/img14.jpeg',
			name : 'Image 14',
			description: 'Description for image 14'
		},
		{
			image : this.product_image_path + '/img15.jpeg',
			name : 'Image 15',
			description: 'Description for image 15'
		},
		{
			image : this.product_image_path + '/img16.jpeg',
			name : 'Image 16',
			description: 'Description for image 16'
		},
		{
			image : this.product_image_path + '/img17.jpeg',
			name : 'Image 17',
			description: 'Description for image 17'
		},
		{
			image : this.product_image_path + '/img18.jpeg',
			name : 'Image 18',
			description: 'Description for image 18'
		},
		{
			image : this.product_image_path + '/img19.jpeg',
			name : 'Image 19',
			description: 'Description for image 19'
		},
		{
			image : this.product_image_path + '/img20.jpeg',
			name : 'Image 20',
			description: 'Description for image 20'
		},
		{
			image : this.product_image_path + '/img21.jpeg',
			name : 'Image 21',
			description: 'Description for image 21'
		},
		{
			image : this.product_image_path + '/img22.jpeg',
			name : 'Image 22',
			description: 'Description for image 22'
		},
		{
			image : this.product_image_path + '/img23.jpeg',
			name : 'Image 23',
			description: 'Description for image 23'
		},
		{
			image : this.product_image_path + '/img24.jpeg',
			name : 'Image 24',
			description: 'Description for image 24'
		},
		{
			image : this.product_image_path + '/img25.jpeg',
			name : 'Image 25',
			description: 'Description for image 25'
		},
		{
			image : this.product_image_path + '/img26.jpeg',
			name : 'Image 26',
			description: 'Description for image 26'
		},
		{
			image : this.product_image_path + '/img27.jpeg',
			name : 'Image 27',
			description: 'Description for image 27'
		},
		{
			image : this.product_image_path + '/img28.jpeg',
			name : 'Image 28',
			description: 'Description for image 28'
		},
		{
			image : this.product_image_path + '/img29.jpeg',
			name : 'Image 29',
			description: 'Description for image 29'
		},
		{
			image : this.product_image_path + '/img30.jpeg',
			name : 'Image 30',
			description: 'Description for image 30'
		},
		{
			image : this.product_image_path + '/img31.jpeg',
			name : 'Image 31',
			description: 'Description for image 31'
		},
		{
			image : this.product_image_path + '/img32.jpeg',
			name : 'Image 32',
			description: 'Description for image 32'
		},
		{
			image : this.product_image_path + '/img33.jpeg',
			name : 'Image 33',
			description: 'Description for image 33'
		},
		{
			image : this.product_image_path + '/img34.jpeg',
			name : 'Image 34',
			description: 'Description for image 34'
		}
	];

	changeLanguage(lang) {
		if(lang === 'english'){
			this.lang = this.en_lang;
			this.labels = this.en_labels;
		}
		else if(lang === 'french'){
			this.lang = this.fr_lang;
			this.labels = this.fr_labels;
		}
	}
}
