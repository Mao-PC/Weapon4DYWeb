/*
 * @Author: maopch
 * @PageInfo:  菜单g公共事件
 * @Date: 2019-10-27 13:42:58
 * @Last Modified by: maopch
 * @Last Modified time: 2019-10-27 14:19:12
 */

/**
 * 保证导航栏只有一个打开
 */
function onOpenChange(openKeys) {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.allItemKeys.indexOf(latestOpenKey) === -1) {
        this.setState({ openKeys });
    } else {
        this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : []
        });
    }
}

export { onOpenChange };
