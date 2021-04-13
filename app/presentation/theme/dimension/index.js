import {PixelRatio} from 'react-native';

const spacingSize = {
	Tiny: 4,
	Small: 8,
	SmallX: 10,
	Medium: 12,
	Large: 16,
	LargeX: 18,
	LargeXX: 24,
	Huge: 28,
	HugeX: 32,
};

const fontSize = {
	Mini: 8,
	MiniX: 9,
	Tiny: 10,
	TinyX: 11,
	Small: 12,
	SmallX: 13,
	Medium: 14,
	MediumX: 15,
	Large: 16,
	LargeX: 18,
	Huge: 24,
	HugeX: 32,
};

const size = {
	Min: 1 / PixelRatio.get(),
};


export default {
	Spacing: spacingSize,
	Font: fontSize,
	Size: size,
};
