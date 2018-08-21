function initHeaderHelper(hexo) {
  return function getShowHeaderHelper(self) {
    function getHelper(helperName) {
      const helper = hexo.extend.helper.get(helperName);
      return helper && helper.bind(self);
    }

    function getHelpers(helperNames) {
      return Array.isArray(helperNames)
        ? helperNames.reduce((helpers, helper) => {
            helpers[helper] = getHelper(helper);
            return helpers;
          }, {})
        : {};
    }

    function getDateString(year, month, day) {
      if (day !== undefined) {
        const relative_date = getHelper("relative_date", self);
        const date = new Date(year, month, day);
        return relative_date(date);
      }

      return year + "/" + (month.length === 2 ? month : "0" + month);
    }

    function showHeader() {
      const { is_home, is_category, is_archive, is_post } = getHelpers([
        "is_home",
        "is_category",
        "is_archive",
        "is_post"
      ]);

      return is_category() || is_archive() || false;
    }

    function getPageName(page) {
      const pageName =
        page.category || getDateString(page.year, page.month, page.day);

      return pageName;
    }

    return { getPageName, showHeader };
  };
}
module.exports = initHeaderHelper;
