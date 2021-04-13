import I18n from 'react-native-i18n';

import en from 'app/presentation/theme/localization/resource/en';
import id from 'app/presentation/theme/localization/resource/id';
import key from 'app/presentation/theme/localization/resource/key';

const configureLocalization = () => {
	I18n.fallbacks = true;
	I18n.defaultSeparator = '.';
	I18n.translations = {
		en,
		id,
	};
};

const getString = (key, params = null) => {
	return I18n.t(key, params);
};

const appString = key;

const languages = {
	ENGLISH: 'en',
	INDONESIA: 'id',
};

export const Localization = {
	configureLocalization,
	languages,
	getString,
	appString,
};



