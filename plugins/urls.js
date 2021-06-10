const MAKER_URL = 'api/v1/makers/'
const REVIEW_URL = 'api/v1/reviews/'
const REVIEW_URL_FILTERED_BY_MAKER = 'api/v1/reviews/?maker_name='
const EXPENSE_URL = 'api/v1/expense/'
const EXPENSE_URL_FILTERED_BY_MAKER = 'api/v1/expense/?maker_name='
const ISPOST_URL = 'api/v1/isposted/'

export default (context, inject) => {
    inject('MAKER_URL', MAKER_URL)
    inject('REVIEW_URL', REVIEW_URL)
    inject('EXPENSE_URL', EXPENSE_URL)
    inject('ISPOST_URL', ISPOST_URL)
    inject('REVIEW_URL_FILTERED_BY_MAKER', REVIEW_URL_FILTERED_BY_MAKER)
    inject('EXPENSE_URL_FILTERED_BY_MAKER', EXPENSE_URL_FILTERED_BY_MAKER)
}