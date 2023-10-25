import classNames from 'classnames'

export const StyledTitleP = classNames('text-base text-black0199')
export const StyledLogoWrapperDiv = classNames('flex gap-1')
export const StyledValueP = classNames('text-2xl font-bold text-secondary')
export const StyledWrapperLink = classNames('product-card')
export const StyledWrapperDiv = classNames('product-card_img-container')
export const StyledProductImage = classNames('product-card_img')
export const StyledProductDiv = classNames('flex flex-col gap-3')
export const StyledContentDiv = classNames('flex justify-between')
export const StyledProductTitleH3 = classNames('product-title')
export const StyledCategoryP = classNames(
  'text-black opacity-50 text-lg capitalize'
)
export const StyledProductPriceP = classNames(
  'text-black text-lg font-semibold'
)
export const StyledContainerDiv = (borderColor: any) =>
  classNames(`price-info_card border-lp-[${borderColor}]`)

