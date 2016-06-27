(function(){ 
	'use strict'
	angular
		.module('appBanner', ['angular-flexslider', 'ngRoute'])
		.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
			$locationProvider.html5Mode(true);		
            $routeProvider.when('/index',{
                templateUrl: 'views/main.html'
            }).when('/contact', {
                templateUrl: 'views/contact.html'
            }).otherwise({
                redirectTo: '/index',
            })      
        }])
	    .directive('footDiv', function(){
			return {
		      restrict: 'E',
		      templateUrl: 'directivas/footer.html'
    		}
		})
		.directive('headDiv', function(){
			return {
		      restrict: 'E',
		      templateUrl: 'directivas/header.html'
    		}
		})
		.directive('contentDiv', function(){
			return {
		      restrict: 'E',
		      templateUrl: 'directivas/content.html'
    		}
		})
	    .controller('BasicSliderCtrl', ['$scope', function($scope) {
			$scope.cursos = [
				{
					name: 'MANTENIMIENTO ELECTROMECANICO INDUSTRIAL',
					img: 'img/mantenimiento_industrial.jpg',
					resolution: 'RESOLUCION 859 de 2008',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg',
						'logo_politecnicoamericano4.jpg'
					]
				},
				{
					name: 'GESTION Y DISEÑO EN SALUD OCUPACIONAL INDUSTRIAL',
					img: 'img/seguridad_industrial.jpg',
					resolution: 'RESOLUCION 862 de 2008',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg',
						'logo_politecnicoamericano4.jpg'
					]
				},
				{
					name: 'AUXILIAR ADMINISTRATIVO',
					img: 'img/auxiliar_administrativo.jpg',
					resolution: 'RESOLUCION 1307 de 2009',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg',
						'logo_politecnicoamericano4.jpg'
					]
				},
				{
					name: 'LENGUA EXTRANJERA IDIOMA INGLES',
					img: 'img/ingles2.jpg',
					resolution: 'RESOLUCION 1308 de 2009',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg',
						'logo_politecnicoamericano4.jpg'
					]
				},
				{
					name: 'IVESTIGACION JUDICIAL',
					img: 'img/investigacion_judicial.jpg',
					resolution: 'RESOLUCION 1309 de 2009',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg'
					]
				},
				{
					name: 'ASISTENTE ADMINISTRATIVO',
					img: 'img/asistente_administrativo.jpg',
					resolution: 'RESOLUCION 680 de 2009',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg',
						'logo_politecnicoamericano4.jpg'
					]
				},
				{
					name: 'ASISTENTE CONTABLE Y FINANCIERO',
					img: 'img/contable_financiero.jpg',
					resolution: 'RESOLUCION 681 de 2009',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg',
						'logo_politecnicoamericano4.jpg'
					]
				},
				{
					name: 'SISTEMAS',
					img: 'img/sistemas.jpg',
					resolution: 'RESOLUCION 684 de 2009',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg',
						'logo_politecnicoamericano4.jpg'
					]
				},
				{
					name: 'MANEJO DE RESIDUOS',
					img: 'img/residuos.jpg',
					resolution: 'RESOLUCION 714 de 2014',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg'
					]
				},
				{
					name: 'ATENCION A LA PRIMERA INFANCIA',
					img: 'img/primera_infancia.jpg',
					resolution: 'RESOLUCION 716 de 2014',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg'
					]
				},
				{
					name: 'ASISTENTE TURISTICO',
					img: 'img/turismo.jpg',
					resolution: 'RESOLUCION 717 de 2014',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg'
					]
				},
				{
					name: 'MANTENIMIENTO DE EQUIPOS DE COMPUTO',
					img: 'img/mantenimiento_computo.jpg',
					resolution: 'RESOLUCION 718 de 2014',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg'
					]
				},
				{
					name: 'MANTENIMIENTO DE EQUIPOS BIOMEDICOS',
					img: 'img/equipo_biomedico.jpg',
					resolution: 'RESOLUCION 719 de 2014',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg'
					]
				},
				{
					name: 'DISEÑO GRAFICO',
					img: 'img/diseño_grafico.jpg',
					resolution: 'RESOLUCION 720 de 2014',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg'
					]
				},
				{
					name: 'ELECTRONICA Y TELECOMUNICACIONES',
					img: 'img/electronica_comunicaciones.jpg',
					resolution: 'RESOLUCION 721 de 2014',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg'
					]
				}];
			}]
		)
		.controller('BasicSliderCtr2', ['$scope', function($scope) {
			$scope.cursos = [
				{
					name: 'MANTENIMIENTO ELECTROMECANICO INDUSTRIAL',
					img: 'img/mantenimiento_industrial.jpg',
					resolution: 'RESOLUCION 859 de 2008',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg',
						'logo_politecnicoamericano4.jpg'
					]
				},
				{
					name: 'GESTION Y DISEÑO EN SALUD OCUPACIONAL INDUSTRIAL',
					img: 'img/seguridad_industrial.jpg',
					resolution: 'RESOLUCION 862 de 2008',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg',
						'logo_politecnicoamericano4.jpg'
					]
				},
				{
					name: 'AUXILIAR ADMINISTRATIVO',
					img: 'img/auxiliar_administrativo.jpg',
					resolution: 'RESOLUCION 1307 de 2009',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg',
						'logo_politecnicoamericano4.jpg'
					]
				},
				{
					name: 'LENGUA EXTRANJERA IDIOMA INGLES',
					img: 'img/ingles2.jpg',
					resolution: 'RESOLUCION 1308 de 2009',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg',
						'logo_politecnicoamericano4.jpg'
					]
				},
				{
					name: 'IVESTIGACION JUDICIAL',
					img: 'img/investigacion_judicial.jpg',
					resolution: 'RESOLUCION 1309 de 2009',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg'
					]
				},
				{
					name: 'ASISTENTE ADMINISTRATIVO',
					img: 'img/asistente_administrativo.jpg',
					resolution: 'RESOLUCION 680 de 2009',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg',
						'logo_politecnicoamericano4.jpg'
					]
				},
				{
					name: 'ASISTENTE CONTABLE Y FINANCIERO',
					img: 'img/contable_financiero.jpg',
					resolution: 'RESOLUCION 681 de 2009',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg',
						'logo_politecnicoamericano4.jpg'
					]
				},
				{
					name: 'SISTEMAS',
					img: 'img/sistemas.jpg',
					resolution: 'RESOLUCION 684 de 2009',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg',
						'logo_politecnicoamericano4.jpg'
					]
				},
				{
					name: 'MANEJO DE RESIDUOS',
					img: 'img/residuos.jpg',
					resolution: 'RESOLUCION 714 de 2014',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg'
					]
				},
				{
					name: 'ATENCION A LA PRIMERA INFANCIA',
					img: 'img/primera_infancia.jpg',
					resolution: 'RESOLUCION 716 de 2014',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg'
					]
				},
				{
					name: 'ASISTENTE TURISTICO',
					img: 'img/turismo.jpg',
					resolution: 'RESOLUCION 717 de 2014',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg'
					]
				},
				{
					name: 'MANTENIMIENTO DE EQUIPOS DE COMPUTO',
					img: 'img/mantenimiento_computo.jpg',
					resolution: 'RESOLUCION 718 de 2014',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg'
					]
				},
				{
					name: 'MANTENIMIENTO DE EQUIPOS BIOMEDICOS',
					img: 'img/equipo_biomedico.jpg',
					resolution: 'RESOLUCION 719 de 2014',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg'
					]
				},
				{
					name: 'DISEÑO GRAFICO',
					img: 'img/diseño_grafico.jpg',
					resolution: 'RESOLUCION 720 de 2014',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg'
					]
				},
				{
					name: 'ELECTRONICA Y TELECOMUNICACIONES',
					img: 'img/electronica_comunicaciones.jpg',
					resolution: 'RESOLUCION 721 de 2014',
					href: '',
					logos: [
						'logo_politecnicoamericano1.png',
						'logo_politecnicoamericano2.png',
						'logo_politecnicoamericano3.jpg'
					]
				}];
			}]
		)
})();

