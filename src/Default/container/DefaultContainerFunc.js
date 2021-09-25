/**
 *
 * @author ChanWoo Gwon, Yonsei Univ. Researcher, since 2020.05
 * @date 2021.01.06
 */
 import {bindActionCreators} from 'redux';
 
 import {connect} from 'react-redux';
 import DefaultComponentFunc from '../component/DefaultComponentFunc';
 
 import * as defaultActions from '../store/actions/defaultAction';
 
 function DefaultContainer({api, defaultSetting, DefaultActions}) {
     let onEventListener = () => {
        DefaultActions.fetchDefault();
     }
 
     return (
         <div className="App">
             <div className="container">
                 <button className="btn btn-success" onClick={() => {api.openFile();}}>Open</button>
                 <DefaultComponentFunc
                     onEventListener={onEventListener}
                 />
             </div>
         </div>
     )
 }
 
 export default connect(
     (state) => ({
         defaultSetting: state.config.get("defaultSetting") // bind data to props
     }),
     (dispatch) => ({
         DefaultActions: bindActionCreators(defaultActions, dispatch) // bind dispatch to props
     })
 )(DefaultContainer);