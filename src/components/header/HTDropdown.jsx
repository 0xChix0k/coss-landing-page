import { ReactComponent as IconCloseBar } from 'assets/icon/icon_add_circle_2.svg';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectApp, setDropdownOpen } from 'store/slice/appSlice';
import { StyleContain } from './StylesDrop';

const HTDropdown = () => {
  const { t } = useTranslation('common');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dropdownOpen } = useSelector(selectApp);

  const list = [
    {
      id: 'home',
      name: t('common:home'),
      path: '/',
    },
    {
      id: 'products',
      name: t('common:products'),
      path: '/products',
    },
    {
      id: 'news',
      name: t('common:news'),
      path: '/news',
    },
    {
      id: 'about',
      name: t('common:about'),
      path: '/about',
    },
    // {
    //   id: 'contact',
    //   name: t('common:contact'),
    //   path: '/contact',
    // },
  ];

  const onItemClick = (path) => {
    // 處理選單項目點擊事件
    navigate(path);
    console.log('選單項目被點擊', path);
    dispatch(setDropdownOpen(false));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(setDropdownOpen(false));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch, dropdownRef]);

  return (
    <StyleContain
      className={`${dropdownOpen ? 'visible' : ''}`}
      ref={dropdownRef}
      tabIndex={-1}
    >
      <div className="headr">
        <IconCloseBar onClick={() => dispatch(setDropdownOpen(false))} />
      </div>
      <ul className="dropdown-menu ">
        {list.map((item) => {
          return (
            <li
              key={item.id}
              className="item"
              onClick={() => onItemClick(item.path)}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </StyleContain>
  );
};

export default HTDropdown;
