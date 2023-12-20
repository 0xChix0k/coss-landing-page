import { ReactComponent as IconCollect } from 'assets/icon/icon_collect.svg';
import { ReactComponent as IconHelp } from 'assets/icon/icon_helping.svg';
import { ReactComponent as IconListen } from 'assets/icon/icon_listening.svg';
import { ReactComponent as IconMeet } from 'assets/icon/icon_meeting.svg';
import { ReactComponent as IconPhone } from 'assets/icon/icon_phone.svg';
import { ReactComponent as IconPuzzle } from 'assets/icon/icon_puzzle.svg';
import { ReactComponent as IconReturn } from 'assets/icon/icon_return.svg';
import { ReactComponent as IconScrew } from 'assets/icon/icon_screw.svg';
import { ReactComponent as IconSet } from 'assets/icon/icon_setting.svg';
import { useTranslation } from 'react-i18next';

const ADiv3CardList = () => {
  const { t } = useTranslation('about');
  const iconStyle = {
    filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.08))',
  };
  const StyledIcon = ({ Icon }) => <Icon style={iconStyle} />;
  return [
    {
      id: 1,
      icon: <StyledIcon Icon={IconScrew} />,
      text: t('about:div3CardText1'),
    },
    {
      id: 2,
      icon: <StyledIcon Icon={IconHelp} />,
      text: t('about:div3CardText2'),
    },
    {
      id: 3,
      icon: <StyledIcon Icon={IconCollect} />,
      text: t('about:div3CardText3'),
    },
    {
      id: 4,
      icon: <StyledIcon Icon={IconMeet} />,
      text: t('about:div3CardText4'),
    },
    {
      id: 5,
      icon: <StyledIcon Icon={IconPuzzle} />,
      text: t('about:div3CardText5'),
    },
    {
      id: 6,
      icon: <StyledIcon Icon={IconPhone} />,
      text: t('about:div3CardText6'),
    },
    {
      id: 7,
      icon: <StyledIcon Icon={IconReturn} />,
      text: t('about:div3CardText7'),
    },
    {
      id: 8,
      icon: <StyledIcon Icon={IconListen} />,
      text: t('about:div3CardText8'),
    },
    {
      id: 9,
      icon: <StyledIcon Icon={IconSet} />,
      text: t('about:div3CardText9'),
    },
  ];
};

export default ADiv3CardList;
