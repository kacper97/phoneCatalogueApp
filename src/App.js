import React from 'react';

    class SelectBox extends React.Component {
      render() {
           return (
             <div className="col-md-10">
            <input type="text" placeholder="Search" />
            Sort by:
            <select>
              <option value="name">Alphabetical</option>
              <option value="age">Newest</option>
            </select>
             </div>
            );
          }
    }


    // TODO (PhoneItem component)


    class FilteredPhoneList extends React.Component {
      render() {
          var displayedPhones = this.props.phones.map(function(phone) {
            return <PhoneItem key={phone.id} phone={phone } /> ;
          }) ;
          return (
                  <div className="col-md-10">
                    <ul className="phones">
                        {displayedPhones}
                    </ul>
                  </div>
            ) ;
      }
    }

    class PhoneCatalogueApp extends React.Component {
      render() {
          return (
              <div className="view-container">
              <div className="view-frame">
                 <div className="container-fluid">
                   <div className="row">
                       <SelectBox />
                       {/* TODO */}
                  </div> 
                  </div>                   
                </div>
              </div>
          );
      }
    }

    export default PhoneCatalogueApp;