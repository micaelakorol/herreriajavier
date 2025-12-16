import React from 'react';
import '../footer.css'
import { icons } from '../../../assets/dataFooter';
import Icon from "../../../reusable/Icon";
import CustomLink from '../../../reusable/CustomLink';

const Social = () => {
  const social = icons;
  return (
    <section className="section_footer">
      <p>Contacto</p>
      {social.map((item) => (
        <React.Fragment key={item.id}>
          <abbr title={item.abbr}>
            <CustomLink
              href={item.href ? item.href : item.mailto}
              target="_blank"
            >
              <Icon src={item.src} width={21} height={21} alt={item.alt} />
            </CustomLink>
          </abbr>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Social;
