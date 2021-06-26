import './SectionHeader.scss';

function SectionHeader(props) {
  return (
    <>
         <h1 className="section__title text-center">{props.title}</h1>
          <p className="section__description text-center mx-auto">{props.description}</p>

    </>
  );
}

export default SectionHeader;