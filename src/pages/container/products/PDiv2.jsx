/** @jsxImportSource @emotion/react */
import { ReactComponent as IconMa } from 'assets/icon/icon_material.svg';
import { ReactComponent as IconMoney } from 'assets/icon/icon_money.svg';
import { ReactComponent as IconOp } from 'assets/icon/icon_operation.svg';
import { ReactComponent as IconMan } from 'assets/icon/icon_people.svg';
import { ReactComponent as IconExpense } from 'assets/icon/icon_expense.svg';
import { ReactComponent as IconAppCheck } from 'assets/icon/icon_appcheck.svg';
import bg1 from 'assets/img_product_bg_p1.png';
import bg2 from 'assets/img_product_bg_p2.png';
import bg3 from 'assets/img_product_bg_p3.png';
import bg4 from 'assets/img_product_bg_p4.png';
import bg5 from 'assets/img_product_bg_p5.png';
import bg6 from 'assets/img_product_bg_p6.png';
import img1 from 'assets/img_product_p1.png';
import img2 from 'assets/img_product_p2.png';
import img3 from 'assets/img_product_p3.png';
import img4 from 'assets/img_product_p4.png';
import img5 from 'assets/img_product_p5.png';
import img6 from 'assets/img_product_p6.png';
import bgMobile1 from 'assets/mobile/img_mobile_product_bg_p1.png';
import bgMobile2 from 'assets/mobile/img_mobile_product_bg_p2.png';
import bgMobile3 from 'assets/mobile/img_mobile_product_bg_p3.png';
import bgMobile4 from 'assets/mobile/img_mobile_product_bg_p4.png';
import bgMobile5 from 'assets/mobile/img_mobile_product_bg_p5.png';
import bgMobile6 from 'assets/mobile/img_mobile_product_bg_p6.png';
import imgMobile3 from 'assets/mobile/img_mobile_product_p3.png';
import bgTablet1 from 'assets/tablet/img_tablet_product_bg_p1.png';
import bgTablet2 from 'assets/tablet/img_tablet_product_bg_p2.png';
import bgTablet3 from 'assets/tablet/img_tablet_product_bg_p3.png';
import bgTablet4 from 'assets/tablet/img_tablet_product_bg_p4.png';
import bgTablet5 from 'assets/tablet/img_tablet_product_bg_p5.png';
import bgTablet6 from 'assets/tablet/img_tablet_product_bg_p6.png';
import { StPDiv2 } from 'pages/styles/products/StylesPDiv2';
import { useTranslation } from 'react-i18next';
import PDiv2Card from './PDiv2Card';

const PDiv2 = () => {
  const { t } = useTranslation('common', 'products');
  //
  return (
    <StPDiv2>
      <div className="subDiv">
        <PDiv2Card
          id={'anchor1'}
          icon={<IconOp />}
          priTitle={t('common:op-ma')}
          priColor={'var(--primary-default)'}
          title={[t('products:cardTitle1_1'), t('products:cardTitle1_2')]}
          des={[t('products:cardDes1_1'), t('products:cardDes1_2')]}
          img={img1}
          bgImg={[bg1, bgTablet1, bgMobile1]}
        />

        <PDiv2Card
          id={'anchor2'}
          icon={<IconMan />}
          priTitle={t('common:hr-ma')}
          priColor={'var(--blue-light)'}
          title={[t('products:cardTitle2_1'), t('products:cardTitle2_2')]}
          des={[t('products:cardDes2_1'), t('products:cardDes2_2')]}
          img={img2}
          bgImg={[bg2, bgTablet2, bgMobile2]}
          mobileTitleNoBrSize={895}
        />

        <PDiv2Card
          id={'anchor3'}
          icon={<IconMoney />}
          priTitle={t('common:fa-ma')}
          priColor={'var(--primary-55)'}
          title={[t('products:cardTitle3_1'), t('products:cardTitle3_2')]}
          des={[t('products:cardDes3_1'), t('products:cardDes3_2')]}
          img={img3}
          bgImg={[bg3, bgTablet3, bgMobile3]}
          reImgObj={[1024, imgMobile3]}
        />

        <PDiv2Card
          id={'anchor4'}
          icon={<IconMa />}
          priTitle={t('common:mr-ma')}
          priColor={'var(--green-default)'}
          title={[t('products:cardTitle4_1'), t('products:cardTitle4_2')]}
          des={[t('products:cardDes4_1'), t('products:cardDes4_2')]}
          img={img4}
          bgImg={[bg4, bgTablet4, bgMobile4]}
        />

        <PDiv2Card
          id={'anchor5'}
          icon={<IconExpense />}
          priTitle={t('common:ex-ma')}
          priColor={'#9643C9'}
          title={[t('products:cardTitle5_1'), t('products:cardTitle5_2')]}
          des={[t('products:cardDes5_1'), t('products:cardDes5_2')]}
          img={img5}
          bgImg={[bg5, bgTablet5, bgMobile5]}
        />
        
        <PDiv2Card
          id={'anchor6'}
          icon={<IconAppCheck />}
          priTitle={t('common:app-check')}
          priColor={'#CD4141'}
          title={[t('products:cardTitle6_1'), t('products:cardTitle6_2')]}
          des={[t('products:cardDes6_1'), t('products:cardDes6_2')]}
          img={img6}
          bgImg={[bg6, bgTablet6, bgMobile6]}
        />
      </div>
    </StPDiv2>
  );
};
export default PDiv2;
