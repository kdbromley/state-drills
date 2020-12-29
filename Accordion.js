import React from 'react';

class Accordion extends React.Component {
    static defaultProps = { sections: [] };
    state = { activeIndex: null };
    
    handleActiveSection = (sectionIndex) => {
        this.setState({ activeIndex: sectionIndex})
    }
    
    renderLis(section, index, activeIndex) {
        return (
          <li className='Accordion__item' key={index}>
              <button  
               onClick={() => this.handleActiveSection(index)}>
              {section.title}
          </button>
          {(activeIndex === index) && <p>{section.content}</p>}
          </li>
        )
    } 
    
    render() {
        const { activeIndex } = this.state
        return (
            <ul className='Accordion'>
                {this.props.sections.map((section, index) => 
                this.renderLis(section, index, activeIndex)
                )}
            </ul>
        )
    }
}

export default Accordion;