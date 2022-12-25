import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview></AccountPreview>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div className={cx('item-wrap')}>
            <Tippy offset={[-40, 0]} interactive delay={[800, 0]} render={renderPreview} placement="bottom">
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/18061e398ef498f3c30faacfc51b0345~c5_100x100.jpeg?x-expires=1672099200&x-signature=O6LNd83WQyP5T0uLGp%2Ftl4mNRS4%3D"
                        alt=""
                    ></img>

                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>buithitra</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Bui Thi Tra</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
