import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

	private en_lang = {
		'company_summary' : 'Precision manufacturing, repairs, and prototype development',

		'company_statement' : 'Engrenage Lasalle houses an extensive array of machinery to manufacture components for small and large businesses across Quebec and Ontario. These include lathes, drilling, gear hobbers, bevel gears, and thread/other milling.  This unique combination of state of the art machinery allows Engrenage Lassalle the ability to provide its customers a myriad of components pertaining to all vertical industries',

		'company_about' : "Founded in 1993, Engrenage Lasalle is a manufacturing establishment that specializes in the development of customized and standard components used in machinery. These include tailor-made gears and splines made from a variety of metals, plastics, and other core materials",
	};

	private fr_lang = {
		'company_summary' : 'Fabrication de précision, réparations et développement de prototypes',

		'company_statement' : "Engrenage Lasalle abrite une vaste gamme de machines pour fabriquer des composants pour les petites et grandes entreprises au Québec et en Ontario. Ceux-ci incluent les tours, le perçage, les taillants d'engrenages, les engrenages coniques et le filetage / autres fraisages. Cette combinaison unique de machines de pointe permet à Engrenage Lassalle de fournir à ses clients une myriade de composants appartenant à toutes les industries verticales",

		'company_about' : "Fondée en 1993, Engrenage Lasalle est un établissement manufacturier spécialisé dans le développement de composants personnalisés et standard utilisés dans les machines. Il s'agit notamment d'engrenages et de cannelures sur mesure fabriqués à partir d'une variété de métaux, de plastiques et d'autres matériaux de base",
	};

	private en_labels = {
		'contact' : "Contact Information",

		'about' : "About",

		'telephone' : 'Telephone',

		'fax' : "Fax",

		'location' : "Location",

		'email' : "Email"
	}

	private fr_labels = {
		'contact' : "Informations de Contact",

		'about' : "Information",

		'telephone' : 'Téléphone',

		'fax' : "Fax",

		'location' : "Emplacement",

		'email' : "Email"
	}

	lang = this.en_lang;
	labels = this.en_labels;

	title = 'engrenages-lasalle';

	telephone = "(514) 595-3490";
	fax = "(514) 595-3590";
	email = "info@engrenagelasalle.com";
	street = "7228 rue Cordner";
	city = "LaSalle, Quebec";
	postal_code = "H8N 2W8";

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
