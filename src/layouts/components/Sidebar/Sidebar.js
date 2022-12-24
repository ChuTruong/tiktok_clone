import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import Icons from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<Icons.HomeIcon />}
                    activeIcon={<Icons.HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<Icons.UserGroupIcon />}
                    activeIcon={<Icons.UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Live"
                    to={config.routes.live}
                    icon={<Icons.LiveIcon />}
                    activeIcon={<Icons.LiveActiveIcon />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
