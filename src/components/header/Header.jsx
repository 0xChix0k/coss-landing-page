import { ReactComponent as IconAddBar } from 'assets/icon/icon_add_circle.svg';
import { ReactComponent as Logo } from 'assets/icon/logo.svg';
import CusBtn from 'components/CusBtn/CusBtn';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectApp, setDropdownOpen } from 'store/slice/appSlice';
import HTDropdown from './HTDropdown';
import HTabs from './HTabs';
import { StContain } from './StylesHeader';

export default function Header() {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dropdownOpen } = useSelector(selectApp);

  const onClickBar = () => {
    dispatch(setDropdownOpen(!dropdownOpen));
  };

  return (
    <StContain>
      <div className={`subDiv ${dropdownOpen ? 'f-end' : ''}`}>
        {!dropdownOpen && (
          <>
            <div className="leftDiv">
              <Logo
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/')}
              />
              <HTabs />
            </div>
            {/* <div className="btnDiv">
              <CusBtn
                props={{
                  fills: false,
                  btnStr: t('contact'),
                  click: () => navigate('/contact'),
                }}
              />
            </div> */}
          </>
        )}
        <div className="addBtnDiv">
          <IconAddBar onClick={onClickBar} />
        </div>
      </div>
      <HTDropdown />
    </StContain>
  );
}
