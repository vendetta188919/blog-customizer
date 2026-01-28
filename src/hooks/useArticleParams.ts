import { useState } from 'react';
import {
	ArticleStateType,
	defaultArticleState,
	OptionType,
} from 'src/constants/articleProps';

export const useArticleParams = () => {
	const [formState, setFormState] =
		useState<ArticleStateType>(defaultArticleState);

	const [appliedState, setAppliedState] =
		useState<ArticleStateType>(defaultArticleState);

	const handleFieldChange = <K extends keyof ArticleStateType>(
		field: K,
		option: ArticleStateType[K]
	) => {
		setFormState((prev) => ({
			...prev,
			[field]: option,
		}));
	};

	const handlers = {
		onFontFamilyChange: (option: OptionType) =>
			handleFieldChange('fontFamilyOption', option),
		onFontSizeChange: (option: OptionType) =>
			handleFieldChange('fontSizeOption', option),
		onFontColorChange: (option: OptionType) =>
			handleFieldChange('fontColor', option),
		onBackgroundColorChange: (option: OptionType) =>
			handleFieldChange('backgroundColor', option),
		onContentWidthChange: (option: OptionType) =>
			handleFieldChange('contentWidth', option),
	};

	const handleApply = () => {
		setAppliedState(formState);
	};

	const handleReset = () => {
		setFormState(defaultArticleState);
		setAppliedState(defaultArticleState);
	};

	return {
		formState,
		appliedState,
		handlers,
		handleApply,
		handleReset,
	};
};
