/**
* Inec Political Parties Service Provider
*
* This script parses a hard-coded JSON data and returns it as a Javascript data.
*/

angular.module('grassroots').factory('inecSrv', [inecSrv]);

function inecSrv() {
	'use strict';

	var polParties = JSON.parse('[{"abbr":"A", "fullname":"Accord", "avatar":"/assets/img/A.png"},{"abbr":"AA", "fullname":"Action Alliance", "avatar":"/assets/img/AA.png"},{"abbr":"ACD", "fullname":"Advanced Congress of Democrats", "avatar":"/assets/img/ACD.png"},{"abbr":"ACPN", "fullname":"Allied Congress Party of Nigeria", "avatar":"/assets/img/ACPN.png"},{"abbr":"AD", "fullname":"Alliance for Democracy", "avatar":"/assets/img/AD.png"},{"abbr":"ADC", "fullname":"African Democratic Congress", "avatar":"/assets/img/ADC.png"},{"abbr":"APA", "fullname":"Africans People Alliance", "avatar":"/assets/img/APA.png"},{"abbr":"APC", "fullname":"All Progressives Congress", "avatar":"/assets/img/APC.png"},{"abbr":"APGA", "fullname":"All Progressives Grand Alliance", "avatar":"/assets/img/APGA.png"},{"abbr":"CPP", "fullname":"Citizens Popular Party", "avatar":"/assets/img/CPP.png"},{"abbr":"DPP", "fullname":"Democratic Peoples Party", "avatar":"/assets/img/DPP.png"},{"abbr":"FRESH", "fullname":"FRESH Democratic Party", "avatar":"/assets/img/FRESH.png"},{"abbr":"HDP", "fullname":"Hope Democratic Party", "avatar":"/assets/img/HDP.png"},{"abbr":"ID", "fullname":"Independent Democrats", "avatar":"/assets/img/ID.png"},{"abbr":"KP", "fullname":"Kowa Party", "avatar":"/assets/img/KP.png"},{"abbr":"LP", "fullname":"Labour Party", "avatar":"/assets/img/LP.png"},{"abbr":"MPPP", "fullname":"Mega Progressive Peoples Party", "avatar":"/assets/img/MPPP.png"},{"abbr":"NCP", "fullname":"National Conscience Party", "avatar":"/assets/img/NCP.png"},{"abbr":"NNPP", "fullname":"New Nigeria Peoples Party", "avatar":"/assets/img/NNPP.png"},{"abbr":"PDC", "fullname":"People for Democratic Change", "avatar":"/assets/img/PDC.png"},{"abbr":"PDM", "fullname":"Peoples Democratic Movement", "avatar":"/assets/img/PDM.png"},{"abbr":"PDP", "fullname":"Peoples Democratic Party", "avatar":"/assets/img/PDP.png"},{"abbr":"PPA", "fullname":"Progressives Peoples Alliance", "avatar":"/assets/img/PPA.png"},{"abbr":"PPN", "fullname":"Peoples Party of Nigeria", "avatar":"/assets/img/PPN.png"},{"abbr":"SDP", "fullname":"Social Democratic Party", "avatar":"/assets/img/SDP.png"},{"abbr":"UDP", "fullname":"United Democratic Party", "avatar":"/assets/img/UDP.png"},{"abbr":"UPN", "fullname":"United Party of Nigeria", "avatar":"/assets/img/UPN.png"},{"abbr":"UPP", "fullname":"United Progressives Party", "avatar":"/assets/img/UPP.png"}]');

	function getParties() {
		return polParties;
	}

	return {
		getParties: getParties
	};
}