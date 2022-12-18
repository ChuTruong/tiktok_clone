import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_300x300.webp?x-expires=1671411600&x-signature=az06VlgDDe3d7fViqFMUSrtQpdo%3D"
                alt="Traa"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Bui Thi Tra</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>Ba Gia Tra</span>
            </div>
        </div>
    );
}

export default AccountItem;
