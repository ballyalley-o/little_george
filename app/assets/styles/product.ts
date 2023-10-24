import classNames from 'classnames'

export const StyledTitleP = classNames('text-base text-black0199')
export const StyledLogoWrapperDiv = classNames('flex gap-1')
export const StyledValueP = classNames('text-2xl font-bold text-secondary')
export const StyledContainerDiv = (borderColor: any) =>
  classNames(`price-info_card border-lp-[${borderColor}]`)
