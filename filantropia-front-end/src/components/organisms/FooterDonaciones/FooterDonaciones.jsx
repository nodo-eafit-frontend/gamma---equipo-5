import React from 'react';
import { ListCard } from "../../molecules/ListCard/ListCard";
import {TitleSection} from "../../atoms/TitleSection/TitleSection";
import { TitleCard } from "../../atoms/TitleCard/TitleCard";
import { ParagraphCard } from "../../atoms/ParagraphCard/ParagraphCard";
import "./FooterDonaciones.scss";
import { Card } from '../../atoms/Card/Card';

export const FooterDonaciones = (props) => {
    const { footer } = props
    const { contacts } = footer;
    return (
      <section className='FooterDonaciones'>
        <TitleSection title = {footer.title}/>
        <ListCard name={footer.title}>
        {contacts.map((contact) => {
            console.log("titulo " + contact.id)
          return <CardContacts key={contact.id} {...contact} />;
        })}
      </ListCard>
      </section>
        
    )
}

const CardContacts = (props) => {
    const { title, paragraphs } = props;
    console.log("title " + title)
    return (
      
      <div className='contacts'>
      <TitleCard title={title} />
      {paragraphs.map ((paragraph,index) => <ParagraphCard key={index} paragraph={paragraph} />)}
      </div>
    );
  };

