import imgLogo from 'assets/logoWithText.png';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  StCompanyDiv,
  StCompanyName,
  StContact,
  StFlex,
  StFooter,
  StFooterSub,
  StIconDiv,
  StInfoContain,
  StInfoDiv,
  StItem,
  StItemLink,
  StItemTitle,
  StItemsDiv,
  StLine,
  StPolicyName,
} from './StyleFooter';

export default function Footer() {
  const { t } = useTranslation('common');
  const navigate = useNavigate();

  const onSendId = (id) => {
    navigate('/products', { state: { id } });
  };

  return (
    <StFooter>
      <StFooterSub>
        <StIconDiv>
          <img
            src={imgLogo}
            width={106}
            height={50}
            alt="Coss"
            srcSet=""
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          />
        </StIconDiv>
        <StInfoContain>
          <StInfoDiv>
            <StItemsDiv>
              <StItemTitle>{t('about')}</StItemTitle>
              <StItemLink onClick={() => navigate('/about')}>Coss</StItemLink>
              <StItemLink onClick={() => navigate('/news')}>
                {t('news')}
              </StItemLink>
            </StItemsDiv>
          </StInfoDiv>
          <StInfoDiv>
            <StItemsDiv>
              <StItemTitle>{t('products')}</StItemTitle>
              <StItemLink onClick={() => onSendId('anchor1')}>
                {t('op-ma')}
              </StItemLink>
              <StItemLink onClick={() => onSendId('anchor2')}>
                {t('hr-ma')}
              </StItemLink>
              <StItemLink onClick={() => onSendId('anchor3')}>
                {t('fa-service')}
              </StItemLink>
              <StItemLink onClick={() => onSendId('anchor4')}>
                {t('mr-ma')}
              </StItemLink>
              <StItemLink onClick={() => onSendId('anchor5')}>
                {t('ex-ma')}
              </StItemLink>
              <StItemLink onClick={() => onSendId('anchor6')}>
                {t('app-check')}
              </StItemLink>
            </StItemsDiv>
          </StInfoDiv>
        </StInfoContain>
        <StLine />
        <StContact>
          <StItemsDiv>
            <StFlex>
              <StItemTitle>{t('Business-hours')}</StItemTitle>
              <StItem>{t('time-range')}</StItem>
            </StFlex>
            <StFlex>
              <StItemTitle>{t('tel')}</StItemTitle>
              <StItem>{t('tel-number')}</StItem>
            </StFlex>
            <StFlex>
              <StItemTitle>{t('mail')}</StItemTitle>
              <StItem>{t('mail-address')}</StItem>
            </StFlex>
          </StItemsDiv>
          <StCompanyDiv>
            <StCompanyName>{t('company')}</StCompanyName>
            <StPolicyName>{t('policy')}</StPolicyName>
          </StCompanyDiv>
        </StContact>
      </StFooterSub>
    </StFooter>
  );
}
