import _ from 'lodash';

export default class CustomerModel {
	_id = 0;
	_customerToken = null;

	_avatarURL = null;
	_fullName = null;
	_firstName = null;
	_lastName = null;
	_mobileNumber = null;
	_email = null;

	_groupId = 0;
	_gender = 0;
	_password = null;
	_cityId = null;
	_districtId = null;

	_facebookToken = null;
	_facebookId = null;

	constructor() {
	}

	static create(token = null) {
		const model = new CustomerModel();
		model._customerToken = token;

		return model;
	}

	static parseFromResponse(objCustomer, response) {
		if (null === objCustomer) {
			objCustomer = new CustomerModel();
		}
		const {id, firstname, lastname, gender, group_id, custom_attributes} = response;
		objCustomer._id = id;
		objCustomer._firstName = firstname;
		objCustomer._lastName = lastname;
		objCustomer._gender = gender;
		objCustomer._groupId = group_id;

		const telephoneAttribute = _.find(custom_attributes, ['attribute_code', 'telephone']);
		if (telephoneAttribute) {
			objCustomer._mobileNumber = telephoneAttribute.value;
		}

		return objCustomer;
	}

	static parseFromFacebook(response) {
		const objCustomer = new CustomerModel();
		const {id, first_name, name, last_name, email} = response;
		objCustomer._facebookId = id;
		objCustomer._firstName = first_name;
		objCustomer._lastName = last_name;
		objCustomer._name = name;
		objCustomer._email = email;

		return objCustomer;
	}

}
